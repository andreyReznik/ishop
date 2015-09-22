package ua.sourceit.ishop.core.dao.impl.hibernate;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.core.dao.OrderDao;
import ua.sourceit.ishop.core.entity.Order;

/**
 * @author: areznik
 */
@Repository("orderDao")
public class OrderDaoImpl extends AbstractHibernateDao implements OrderDao{
    @Override
    public int save(Order order) {
        Session session = getSession();
        session.save(order);
        session.flush();
        return order.getId();
    }
}
