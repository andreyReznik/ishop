package ua.sourceit.ishop.web.listener;


import org.apache.log4j.Logger;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Listener for set resource alias variable in jsp
 *
 * @author: areznik
 */

public class AppContextListener implements ServletContextListener {

    private static final Logger LOGGER = Logger.getLogger(ServletContextListener.class);


    public static final String RESOURCES_NAME = "resources";
    public static final String CONTEXT_PATH = "contextPath";


    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        ServletContext sc = servletContextEvent.getServletContext();
        sc.setAttribute(CONTEXT_PATH, sc.getContextPath() + "/" + RESOURCES_NAME);
        LOGGER.info("web context initialized");
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {

    }
}
