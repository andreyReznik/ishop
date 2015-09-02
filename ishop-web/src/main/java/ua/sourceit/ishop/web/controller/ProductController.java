package ua.sourceit.ishop.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import ua.sourceit.ishop.core.entity.*;
import ua.sourceit.ishop.core.exception.ItemNotFoundException;
import ua.sourceit.ishop.core.model.AmountedProperty;
import ua.sourceit.ishop.core.model.Cart;
import ua.sourceit.ishop.core.service.*;
import ua.sourceit.ishop.web.security.SecurityUtils;
import ua.sourceit.ishop.web.util.ProductsBound;
import ua.sourceit.ishop.web.util.RequestUtil;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
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

    @Autowired
    private UserService userService;

    @Autowired
    private StatisticService statisticService;

    @RequestMapping(value="/all")
    public String showAll(@RequestParam(value = "p", defaultValue = "") String pageId,Cart cart,
                               ModelMap model, HttpServletRequest request) {
        statisticService.saveUserVisitedData(new Date(),RequestUtil.getClientIp(request),"/all");
        addMiniCartInfo(cart, model);
        ProductsBound productsBound = RequestUtil.getProductBounds(pageId);
        List<Watch> watches = productService.getWatchesByRange(productsBound.getOffset(),
                productsBound.getLimit());
        List<AmountedProperty> genders = productPropertyService.getProperties(Gender.class);
        List<AmountedProperty> movements = productPropertyService.getProperties(Movement.class);
        List<AmountedProperty> priceGroups = productPropertyService.getProperties(PriceGroup.class);
        List<AmountedProperty> brands = productPropertyService.getProperties(Brand.class);
        model.put("watches", watches);
        model.put("genders", genders);
        model.put("movements", movements);
        model.put("priceGroups", priceGroups);
        model.put("brands", brands);
        model.put("nextPage", RequestUtil.getNextPage(pageId));
        return "list";
    }

    @RequestMapping(value="/view/{productId}")
    public String viewOne(@PathVariable("productId") int productId, Cart cart, ModelMap modelMap, HttpServletRequest request) {
        statisticService.saveUserVisitedData(new Date(),RequestUtil.getClientIp(request),"/"+String.valueOf(productId));
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
    public String createOrder(ModelMap modelMap, Cart cart, SessionStatus status, HttpServletRequest request) {
        statisticService.saveUserVisitedData(new Date(),RequestUtil.getClientIp(request),"/order/create");
        addMiniCartInfo(cart, modelMap);
        User user = userService.getById(SecurityUtils.getCurrentIdAccount());
        orderService.createOrder(cart,user);
        status.setComplete();
        modelMap.remove("cart");
        modelMap.put("email",user.getEmail());
        return  "orderSent";
    }

    @RequestMapping(value="/notImpl")
    public String notImplemented() {
        return "notImpl";
    }

    private void addMiniCartInfo(final Cart cart, final ModelMap modelMap){
        modelMap.put("cart", cart);
    }

}
