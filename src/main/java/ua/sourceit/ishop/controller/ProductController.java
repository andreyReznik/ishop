package ua.sourceit.ishop.controller;

import org.apache.velocity.tools.generic.NumberTool;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import ua.sourceit.ishop.entity.Watch;
import ua.sourceit.ishop.model.AmountedProperty;
import ua.sourceit.ishop.model.Cart;
import ua.sourceit.ishop.model.CartView;
import ua.sourceit.ishop.model.MiniCartView;
import ua.sourceit.ishop.service.ProductPropertyService;
import ua.sourceit.ishop.service.ProductService;
import ua.sourceit.ishop.service.VelocityTemplateService;
import ua.sourceit.ishop.service.email.EmailService;
import ua.sourceit.ishop.servlet.util.ProductsBound;
import ua.sourceit.ishop.servlet.util.RequestParameterUtil;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author: areznik
 */

@Controller
@RequestMapping(value="/product")
@SessionAttributes(types = Cart.class)
public class ProductController {

    @Inject
    private ProductService productService;

    @Inject
    private ProductPropertyService productPropertyService;

    @Inject
    private EmailService emailService;

    @Inject
    private VelocityTemplateService velocityTemplateService;

    @RequestMapping(value="/all")
    public String ShowProducts(@RequestParam(value = "p", defaultValue = "") String pageId,Cart cart,
                               ModelMap model) {
        addMiniCartInfo(cart, model);
        ProductsBound productsBound = RequestParameterUtil.getProductBounds(pageId);
        List<Watch> watches = productService.getWatchesByRange(productsBound.getOffset(), productsBound.getLimit());
        List<AmountedProperty> genders = productPropertyService.getGendersAmount();
        List<AmountedProperty> movements = productPropertyService.getMovementAmount();
        List<AmountedProperty> priceGroups = productPropertyService.getPriceGroupAmount();
        List<AmountedProperty> brands = productPropertyService.getBrandsAmount();
        model.put("watches", watches);
        model.put("genders", genders);
        model.put("movements", movements);
        model.put("priceGroups", priceGroups);
        model.put("brands", brands);
        model.put("nextPage", RequestParameterUtil.getNextPage(pageId));
        return "list";
    }

    @RequestMapping(value="/view/{productId}")
    public String ViewProduct(@PathVariable("productId") int productId, Cart cart, ModelMap modelMap) {
        addMiniCartInfo(cart, modelMap);
        Watch watch = productService.getWatchById(productId);
        if (watch != null){
            modelMap.put("watch", watch);
            modelMap.put("images", watch.getWatchImages());
            return "product";
        } else {
            return "noEntity";
        }
    }

    @RequestMapping(value="cart/add/{productId}", method = RequestMethod.POST)
    public @ResponseBody
    MiniCartView AddProductToCart(@PathVariable("productId") int productId, Cart cart ) {
        Watch watch = productService.getWatchById(productId);
        if (watch !=null){
            cart.addWatch(watch, 1);
        }
        return  cart.getMiniCartView(watch, velocityTemplateService);
    }

    @RequestMapping(value="cart/update/{productId}/{newQty}", method = RequestMethod.GET)
    public @ResponseBody
    CartView UpdateCartProductQuantity(@PathVariable("productId") int productId,@PathVariable("newQty") int newQty, Cart cart ) {
        Watch watch = productService.getWatchById(productId);
        if (watch !=null){
             cart.updateWatchQuantity(watch, newQty);
        }
        return  cart.getCartView(velocityTemplateService);
    }

    @RequestMapping(value="cart/delete/{productId}", method = RequestMethod.GET)
    public String DeleteProductFromCart(@PathVariable("productId") int productId, Cart cart, HttpServletRequest request) {
        cart.removeWatch(productId);
        return  "redirect:"+request.getHeader("Referer");
    }

    @RequestMapping(value="cart/view", method = RequestMethod.GET)
    public String ViewCart(ModelMap modelMap, Cart cart) {
        addMiniCartInfo(cart, modelMap);
        modelMap.put("watchList",cart.getWatchList());
        modelMap.put("cart", velocityTemplateService.getCartAsHtml(cart));
        modelMap.put("grandTotal", velocityTemplateService.getGrandTotalAsHtml(cart));
        return  "cart";
    }

    @RequestMapping(value="cart/checkout", method = RequestMethod.GET)
    public String CheckOutCart(ModelMap modelMap, Cart cart) {
        addMiniCartInfo(cart, modelMap);
        return  "checkout";
    }

    @RequestMapping(value="cart/order", method = RequestMethod.POST)
    public String CreateNewOrder(@RequestParam("email") String email, ModelMap modelMap, Cart cart, SessionStatus status, HttpServletRequest request) {
        addMiniCartInfo(cart, modelMap);
        emailService.SendOrderAsync(cart.CreateOrder(), email);
        status.setComplete();
        return  "redirect:"+request.getHeader("Referer");
    }

    @RequestMapping(value="/notImpl")
    public String NotImplemented() {
        return "notImpl";
    }

    private Cart addMiniCartInfo(Cart cart, final ModelMap modelMap){
        modelMap.put("miniCart", velocityTemplateService.getMiniCartAsHtml(cart));
        modelMap.put("number", new NumberTool());
        return cart;
    }

}
