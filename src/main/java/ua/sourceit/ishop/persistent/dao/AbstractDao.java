package ua.sourceit.ishop.persistent.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

/**
 * @author: areznik
 */

public abstract class AbstractDao {

    private JdbcTemplate jdbcTemplate;

    public DataSource getDataSource() {
        return jdbcTemplate.getDataSource();
    }

    @Autowired
    public void setDataSource(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;
    }


}
