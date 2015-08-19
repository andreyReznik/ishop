package ua.sourceit.ishop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import ua.sourceit.ishop.entity.Watch;
import ua.sourceit.ishop.exception.ItemNotFoundException;
import ua.sourceit.ishop.model.AmountedProperty;
import ua.sourceit.ishop.model.Cart;
import ua.sourceit.ishop.service.OrderService;
import ua.sourceit.ishop.service.ProductPropertyService;
import ua.sourceit.ishop.service.ProductService;
import ua.sourceit.ishop.util.ProductsBound;
import ua.sourceit.ishop.util.RequestParameterUtil;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Controller for product requests
 * @author: areznik
 */

@Controller
@RequestMapping(value="/product")
@SessionAttributes(types = Cart.class)
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductPropertyService productPropertyService;

    @Autowired
    private OrderService orderService;

    @RequestMapping(value="/all")
    public String showAll(@RequestParam(value = "p", defaultValue = "") String pageId,Cart cart,
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
    public String viewOne(@PathVariable("productId") int productId, Cart cart, ModelMap modelMap) {
        addMiniCartInfo(cart, modelMap);
        Watch watch = productService.getWatchById(productId);
        if (watch != null){
            modelMap.put("watch", watch);
            return "product";
        }
        return "noEntity";
    }

    @RequestMapping(value="/ajax/cart/add/{productId}", method = RequestMethod.POST)
    public
    String addToCart(@PathVariable("productId") int productId, Cart cart,ModelMap modelMap ) {
        Watch watch = productService.getWatchById(productId);
        if (watch != null){
            cart.addWatch(watch, 1);
            addMiniCartInfo(cart,modelMap);
            return  "fragment/miniCart";
        }
        throw new ItemNotFoundException("product with id="+productId+" not found!");
    }

    @RequestMapping(value="/ajax/cart/update/{productId}/{newQty}", method = RequestMethod.GET)
    public String  updateCartQuantity(@PathVariable("productId") int productId,@PathVariable("newQty") int newQty, Cart cart, ModelMap modelMap ) {
        Watch watch = productService.getWatchById(productId);
        if (watch !=null){
            cart.updateWatchQuantity(watch, newQty);
            addMiniCartInfo(cart,modelMap);
            return  "../jsp/fragment/cart";
        }
        throw new ItemNotFoundException("product with id="+productId+" not found!");
    }

    @RequestMapping(value="/cart/delete/{productId}", method = RequestMethod.GET)
    public String deleteFromCart(@PathVariable("productId") int productId, Cart cart, HttpServletRequest request) {
        cart.removeWatch(productId);
        return  "redirect:"+request.getHeader("Referer");
    }

    @RequestMapping(value="/cart/view", method = RequestMethod.GET)
    public String viewCart(ModelMap modelMap, Cart cart) {
        addMiniCartInfo(cart, modelMap);
        return  "shopBag";
    }

    @RequestMapping(value="/order/create", method = RequestMethod.GET)
    public String createOrder(ModelMap modelMap, Cart cart, SessionStatus status) {
        addMiniCartInfo(cart, modelMap);
        orderService.createOrder(cart);
        status.setComplete();
        return  "redirect:/product/all";
    }

    @RequestMapping(value="/notImpl")
    public String notImplemented() {
        return "notImpl";
    }

    private void addMiniCartInfo(final Cart cart, final ModelMap modelMap){
        modelMap.put("cart", cart);
    }

}
