package ua.sourceit.ishop.dao.impl.jdbc;

import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import ua.sourceit.ishop.dao.OrderDao;
import ua.sourceit.ishop.entity.Order;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

/**
 * @author: areznik
 */


public class OrderDaoImpl extends AbstractJdbcDao implements OrderDao  {

    private static final String INSERT_ORDER_SQL = "insert into `order`(id_user, created) values(?,?) ";

    @Override
    public int save(final Order order) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        getJdbcTemplate().update(
                new PreparedStatementCreator() {
                    public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                        PreparedStatement ps =
                                connection.prepareStatement(INSERT_ORDER_SQL, new String[]{"id"});
                        ps.setInt(1, order.getId());
                        ps.setTimestamp(2, new Timestamp(order.getCreated().getTime()));
                        return ps;
                    }
                },
                keyHolder);
        order.setId(keyHolder.getKey().intValue());
        return order.getId();
    }
}
