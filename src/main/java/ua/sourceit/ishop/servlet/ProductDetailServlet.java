package ua.sourceit.ishop.servlet;

import ua.sourceit.ishop.model.Watch;
import ua.sourceit.ishop.services.ProductService;
import ua.sourceit.ishop.servlet.util.RequestParameterUtil;

import javax.inject.Inject;
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

    @Inject
    private ProductService productService;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        int id = RequestParameterUtil.getProductId(request.getParameter("id"));

        Watch watch = null;
        try {
            watch = productService.getWatchById(id);
            request.setAttribute("watch", watch);
            request.setAttribute("images", watch.getWatchImages());
            request.getRequestDispatcher("/WEB-INF/jsp/product.jsp").forward(request, response);
        } catch (NullPointerException e) {
            request.getRequestDispatcher("/WEB-INF/jsp/noEntity.jsp").forward(request, response);
        }
    }
}
