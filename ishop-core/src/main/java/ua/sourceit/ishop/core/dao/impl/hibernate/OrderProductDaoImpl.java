package ua.sourceit.ishop.core.dao.impl.hibernate;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.core.dao.OrderProductDao;
import ua.sourceit.ishop.core.entity.Order;
import ua.sourceit.ishop.core.entity.OrderProduct;

/**
 * @author: areznik
 */
@Repository("orderProductDao")
public class OrderProductDaoImpl extends AbstractHibernateDao implements OrderProductDao {
    @Override
    public void save(Order order) {
        Session session = getSession();
        for (OrderProduct orderProduct : order.getOrderProducts()){
            orderProduct.setOrderId(order.getId());
            session.save(order);
        }
    }
}
