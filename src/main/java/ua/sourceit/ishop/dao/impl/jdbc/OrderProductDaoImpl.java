package ua.sourceit.ishop.dao.impl.jdbc;

import ua.sourceit.ishop.dao.OrderProductDao;
import ua.sourceit.ishop.entity.Order;

/**
 * @author: areznik
 */


public class OrderProductDaoImpl extends AbstractJdbcDao implements OrderProductDao {

    private static final String INSERT_ORDER_PRODUCT_SQL = "insert into order_product(id_order, id_product, count)" +
            " values (?,?,?)";

    @Override
    public void save(Order order) {
        getJdbcTemplate().batchUpdate(INSERT_ORDER_PRODUCT_SQL, new OrderProductBatchPreparedStatementSetter(order));
    }
}
