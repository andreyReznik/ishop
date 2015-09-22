package ua.sourceit.ishop.web.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import ua.sourceit.ishop.core.entity.*;
import ua.sourceit.ishop.core.model.AmountedProperty;
import ua.sourceit.ishop.core.model.WatchForm;
import ua.sourceit.ishop.core.service.ProductPropertyService;
import ua.sourceit.ishop.core.service.ProductService;
import ua.sourceit.ishop.web.util.ProductsBound;
import ua.sourceit.ishop.web.util.RequestUtil;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

/**
 * Controller for admin activities
 * @author: areznik
 */

@Controller
@RequestMapping(value="/admin")
public class AdminController {

    private static final Logger LOGGER = Logger.getLogger(AdminController.class);

    public static final int DEFAULT_PRODUCTS_OFFSET = 0;
    public static final int DEFAULT_PRODUCTS_LIMIT = 20;



    @Autowired
    private ProductService productService;

    @Autowired
    private ProductPropertyService productPropertyService;

    @Value("${api.version}")
    private String apiVersion;

    @Value("${api.host}")
    private String apiHost;

    @RequestMapping(value={"/",""},method = RequestMethod.GET)
    public String adminOptions(){
        return "admin/admin";
    }


    @RequestMapping(value={"/products/edit"},method = RequestMethod.GET)
    public String editProducts(ModelMap model) {
        List<Watch> watches = productService.getWatchesByRange(DEFAULT_PRODUCTS_OFFSET, DEFAULT_PRODUCTS_LIMIT);
        List<AmountedProperty> genders = productPropertyService.getProperties(Gender.class);
        List<AmountedProperty> movements = productPropertyService.getProperties(Movement.class);
        List<AmountedProperty> priceGroups = productPropertyService.getProperties(PriceGroup.class);
        List<AmountedProperty> brands = productPropertyService.getProperties(Brand.class);
        model.put("watches", watches);
        model.put("genders", genders);
        model.put("movements", movements);
        model.put("priceGroups", priceGroups);
        model.put("brands", brands);
        return "admin/edit-products";
    }

    @RequestMapping(value={"/product"},method = RequestMethod.GET)
    public @ResponseBody
    Watch getProduct(@RequestParam(value = "id", defaultValue = "") int productId) {
        return productService.getWatchById(productId);
    }

    @RequestMapping(value={"/product"},method = RequestMethod.DELETE)
    public @ResponseBody
    String deleteProduct(@RequestParam(value = "id", defaultValue = "") int productId,
                         HttpServletResponse response) {
        try{
            productService.delete(productId);
        }
        catch (Exception ex){
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return ex.getMessage();
        }
        return "Item removed!";
    }

    @RequestMapping(value={"/ajax/products"},method = RequestMethod.GET)
    public String getProductsByRange(@RequestParam(value = "offset", defaultValue = "") String offset,
                                   @RequestParam(value = "limit", defaultValue = "") String limit,
                                   ModelMap model,HttpServletResponse response) {
        ProductsBound productsBound = RequestUtil.getProductBounds(offset,limit);
        if (productsBound == null){
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return "Bad request parameters!";
        }
        List<Watch> watches = productService.getWatchesByRange(productsBound.getOffset(), productsBound.getLimit());
        model.put("watches", watches);
        return "admin/table-products";
    }

    @RequestMapping(value={"/product"},method = RequestMethod.POST)
    public @ResponseBody
    String addProduct(@RequestBody @Valid WatchForm watchForm,
                                        BindingResult result, HttpServletResponse response) {
        int watchId;
        try{
            RequestUtil.checkRequestParameters(result);
            watchId = productService.save(watchForm);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return e.getMessage();
        }
        return "Watch was successfully added! ID="+watchId;
    }

    @RequestMapping(value={"/product"},method = RequestMethod.PUT)
    public @ResponseBody
    String updateProduct(@RequestBody @Valid WatchForm watchForm,
                    BindingResult result, HttpServletResponse response) {
        try {
            RequestUtil.checkRequestParameters(result);
            productService.update(watchForm);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return e.getMessage();
        }
        return "Watch was successfully updated! ID="+ watchForm.getId();
    }

    @RequestMapping(value={"/statistic"},method = RequestMethod.GET)
    public String showStatistic(ModelMap modelMap) {
        modelMap.put("apiVersion",apiVersion);
        modelMap.put("apiHost",apiHost);
        return "admin/statistic";
    }
}
