package ua.sourceit.ishop.dao.impl.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

/**
 * @author: areznik
 * @Deprecated use hibernate version of dao instead
 */

@Repository
@Deprecated
public abstract class AbstractJdbcDao {

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
