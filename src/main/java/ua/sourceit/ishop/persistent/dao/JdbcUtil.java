package ua.sourceit.ishop.persistent.dao;

import ua.sourceit.ishop.entity.Thing;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Class helper for jdbc operations
 *
 * @author: areznik
 */

public class JdbcUtil {

    public static final void setThingProperty(final Thing thing, final ResultSet rs) throws SQLException {
        thing.setCreated(rs.getLong("created"));
        thing.setUpdated(rs.getLong("updated"));
        thing.setActive(rs.getBoolean("active"));
    }
}
