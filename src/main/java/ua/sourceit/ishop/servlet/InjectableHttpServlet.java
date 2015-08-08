package ua.sourceit.ishop.servlet;

import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

/**
 * Base class for servlets which hold Service Factory created by spring
 *
 * @author: areznik
 */

public class InjectableHttpServlet extends HttpServlet {

    @Override
    public final void init(ServletConfig config) throws ServletException {
        super.init(config);
        SpringBeanAutowiringSupport.processInjectionBasedOnServletContext(this,
                config.getServletContext());
        initInternal(config);
    }

    protected void initInternal(ServletConfig config) {

    }
}
