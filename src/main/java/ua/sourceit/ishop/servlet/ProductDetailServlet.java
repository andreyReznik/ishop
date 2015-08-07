package ua.sourceit.ishop.servlet;

import ua.sourceit.ishop.model.Watch;
import ua.sourceit.ishop.persistent.exception.NoSuchEntityException;
import ua.sourceit.ishop.services.ProductService;
import ua.sourceit.ishop.servlet.util.RequestParameterUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Servlet for pdroduct detail
 *
 * @author: areznik
 */

public class ProductDetailServlet extends InjectableHttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        ProductService productService = serviceFactory.getProductService();

        int id = RequestParameterUtil.getProductId(request.getParameter("id"));

        Watch watch = null;
        try {
            watch = productService.getWatchById(id);
        } catch (NoSuchEntityException e) {
            request.getRequestDispatcher("/WEB-INF/jsp/noEntity.jsp").forward(request, response);
        }
        request.setAttribute("watch", watch);
        request.setAttribute("images", watch.getWatchImages());

        request.getRequestDispatcher("/WEB-INF/jsp/product.jsp").forward(request, response);
    }
}
