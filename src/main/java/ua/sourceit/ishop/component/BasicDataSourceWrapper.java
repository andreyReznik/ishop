package ua.sourceit.ishop.component;

import org.apache.commons.dbcp.BasicDataSource;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.sql.SQLFeatureNotSupportedException;

import static org.apache.log4j.Logger.getLogger;

/**
 * Adapter between org.apache.commons.dbcp.BasicDataSource
 * and  javax.sql.DataSource interface
 *
 * @author: areznik
 */

@Component("dataSource")
@PropertySource("classpath:db.properties")
public class BasicDataSourceWrapper extends BasicDataSource {

    private static final Logger LOGGER = getLogger(BasicDataSourceWrapper.class);

    @Value("${db.url}")
    protected String url;

    @Value("${db.driver}")
    protected String driverClassName;

    @Value("${db.username}")
    protected String userName;

    @Value("${db.password}")
    protected String password;

    @Value("${db.initialSize}")
    protected int initialSize;

    @Value("${db.maxActive}")
    protected int maxActive;

    @Value("${db.maxOpenPreparedStatements}")
    protected int maxOpenPreparedStatements;

    @PostConstruct
    public void init() {
        setUrl(url);
        setDriverClassName(driverClassName);
        setUsername(userName);
        setPassword(password);
        setInitialSize(initialSize);
        setMaxActive(maxActive);
        setMaxOpenPreparedStatements(maxOpenPreparedStatements);
        LOGGER.info("DBCP connection pool initialized");
    }

    @Override
    public java.util.logging.Logger getParentLogger() throws SQLFeatureNotSupportedException {
        throw new RuntimeException("Not implemented method");
    }

}
