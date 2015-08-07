package ua.sourceit.ishop.servlet;

import org.springframework.web.context.support.SpringBeanAutowiringSupport;
import ua.sourceit.ishop.services.ServiceFactory;

import javax.inject.Inject;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

/**
 * Base class for servlets which hold Service Factory created by spring
 * @author: areznik
 */

public class InjectableHttpServlet extends HttpServlet {

    @Inject
    protected ServiceFactory serviceFactory;

    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        SpringBeanAutowiringSupport.processInjectionBasedOnServletContext(this,
                config.getServletContext());
    }
}
