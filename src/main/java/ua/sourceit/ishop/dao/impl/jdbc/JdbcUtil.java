package ua.sourceit.ishop.dao.impl.jdbc;

import ua.sourceit.ishop.entity.Thing;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Class helper for jdbc operations
 *
 * @author: areznik
 * use hibernate version of dao instead
 */
@Deprecated
public class JdbcUtil {

    public static final void setThingProperty(final Thing thing, final ResultSet rs) throws SQLException {
        thing.setCreated(rs.getTimestamp("created"));
        thing.setUpdated(rs.getTimestamp("updated"));
        thing.setActive(rs.getBoolean("active"));
    }
}
