package ua.sourceit.ishop.web.filter;

import org.apache.log4j.Logger;

import javax.servlet.*;
import java.io.IOException;

/**
 * Filter that catch uncaught exceptions
 *
 * @author: areznik
 */

public class ExceptionFilter implements Filter {

    private static final Logger LOGGER = Logger.getLogger(ExceptionFilter.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        try {
            filterChain.doFilter(servletRequest, servletResponse);
        } catch (Throwable ex) {
            LOGGER.error("Detected error during processing request: " + ex.getMessage(), ex);
            servletRequest.getRequestDispatcher("/WEB-INF/jsp/exception.jsp").forward(servletRequest, servletResponse);
        }
    }

    @Override
    public void destroy() {

    }
}
