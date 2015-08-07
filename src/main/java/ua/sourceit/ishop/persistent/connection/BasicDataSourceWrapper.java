package ua.sourceit.ishop.persistent.connection;

import org.apache.commons.dbcp.BasicDataSource;

import java.sql.SQLFeatureNotSupportedException;
import java.util.logging.Logger;

/**
 * Adapter to javax.sql.DataSource interface
 *
 * @author: areznik
 */


public class BasicDataSourceWrapper extends BasicDataSource {

    @Override
    public Logger getParentLogger() throws SQLFeatureNotSupportedException {
        throw new RuntimeException("Not implemented method");
    }
}
