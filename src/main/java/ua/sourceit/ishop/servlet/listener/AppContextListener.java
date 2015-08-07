package ua.sourceit.ishop.servlet.listener;


import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Listener for set resource alias variable in jsp
 * @author: areznik
 */

public class AppContextListener implements ServletContextListener {

    public static final String RESOURCES_NAME = "resources";
    public static final String RESOURCES_ALIAS = "ctx";


    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        ServletContext sc = servletContextEvent.getServletContext();
        sc.setAttribute(RESOURCES_ALIAS, sc.getContextPath()+"/"+ RESOURCES_NAME);
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {

    }
}