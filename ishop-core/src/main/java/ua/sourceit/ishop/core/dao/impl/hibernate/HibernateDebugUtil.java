package ua.sourceit.ishop.core.dao.impl.hibernate;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;

/**
 * @author: areznik
 */

public class HibernateDebugUtil {

    public static void turnOnShowSQL(){
        Logger sqlLogger = Logger.getLogger("org.hibernate.SQL");
        sqlLogger.setLevel(Level.DEBUG);
        Logger descLogger = Logger.getLogger("org.hibernate.type.descriptor.sql.BasicBinder");
        descLogger.setLevel(Level.TRACE);
    }

    public static void turnOffShowSQL(){
        Logger sqlLogger = Logger.getLogger("org.hibernate.SQL");
        sqlLogger.setLevel(Level.INFO);
        Logger descLogger = Logger.getLogger("org.hibernate.type.descriptor.sql.BasicBinder");
        descLogger.setLevel(Level.INFO);
    }

}
