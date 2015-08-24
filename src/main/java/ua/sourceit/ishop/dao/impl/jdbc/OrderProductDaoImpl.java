package ua.sourceit.ishop.dao.impl.jdbc;

import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.dao.OrderProductDao;
import ua.sourceit.ishop.entity.Order;

/**
 * @author: areznik
 * use hibernate version of dao instead
 */

@Deprecated
@Repository
public class OrderProductDaoImpl extends AbstractJdbcDao implements OrderProductDao {

    private static final String INSERT_ORDER_PRODUCT_SQL = "insert into order_product(id_order, id_product, count)" +
            " values (?,?,?)";

    @Override
    public void save(Order order) {
        getJdbcTemplate().batchUpdate(INSERT_ORDER_PRODUCT_SQL, new OrderProductBatchPreparedStatementSetter(order));
    }
}
