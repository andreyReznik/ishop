package ua.sourceit.ishop.dao.impl.jdbc;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import ua.sourceit.ishop.entity.Order;
import ua.sourceit.ishop.entity.OrderProduct;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Iterator;

/**
 * @author: areznik
 */

public class OrderProductBatchPreparedStatementSetter implements BatchPreparedStatementSetter {


    private final Order order;
    private final Iterator<OrderProduct> iterator;

    public OrderProductBatchPreparedStatementSetter(Order order) {
        this.order = order;
        iterator = order.getOrderProducts().iterator();
    }


    @Override
    public void setValues(PreparedStatement ps, int i) throws SQLException {
        OrderProduct entry = iterator.next();
        ps.setInt(1, order.getId());
        ps.setInt(2, entry.getId());
        ps.setInt(3, entry.getCount());
    }

    @Override
    public int getBatchSize() {
        return order.getOrderProducts().size();
    }
}
