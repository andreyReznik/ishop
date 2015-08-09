package ua.sourceit.ishop.servlet.filter;

import org.apache.log4j.Logger;

import javax.servlet.*;
import java.io.IOException;

/**
 * Filter that catch any exceptions
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
            servletRequest.setAttribute("message", ex.getMessage());
            Throwable cause = ex.getCause();
            if (cause != null) {
                servletRequest.setAttribute("cause", ex.getCause().getMessage());
            } else {
                servletRequest.setAttribute("cause", "No cause.");
            }
            servletRequest.getRequestDispatcher("/WEB-INF/jsp/exception.jsp").forward(servletRequest, servletResponse);
        }
    }

    @Override
    public void destroy() {

    }
}
