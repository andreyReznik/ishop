package ua.sourceit.ishop.servlet;

import ua.sourceit.ishop.model.Watch;
import ua.sourceit.ishop.model.prop.AmountedProperty;
import ua.sourceit.ishop.services.ProductPropertyService;
import ua.sourceit.ishop.services.ProductService;
import ua.sourceit.ishop.servlet.util.ProductsBound;
import ua.sourceit.ishop.servlet.util.RequestParameterUtil;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * Servlet for product list
 *
 * @author: areznik
 */

public class ShowProductsServlet extends InjectableHttpServlet {

    @Inject
    private ProductService productService;

    @Inject
    private ProductPropertyService productPropertyService;


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {


        ProductsBound productsBound = RequestParameterUtil.getProductBounds(req.getParameter("p"));
        List<Watch> watches = productService.getWatchesByRange(productsBound.getOffset(), productsBound.getLimit());


        List<AmountedProperty> genders = productPropertyService.getGendersAmount();
        List<AmountedProperty> movements = productPropertyService.getMovementAmount();
        List<AmountedProperty> priceGroups = productPropertyService.getPriceGroupAmount();
        List<AmountedProperty> brands = productPropertyService.getBrandsAmount();

        req.setAttribute("watches", watches);
        req.setAttribute("genders", genders);
        req.setAttribute("movements", movements);
        req.setAttribute("priceGroups", priceGroups);
        req.setAttribute("brands", brands);
        req.setAttribute("nextPage", RequestParameterUtil.getNextPage(req.getParameter("p")));

        req.getRequestDispatcher("/WEB-INF/jsp/list.jsp").forward(req, resp);


    }

}
