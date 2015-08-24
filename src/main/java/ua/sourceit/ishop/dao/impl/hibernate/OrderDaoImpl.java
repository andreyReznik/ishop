package ua.sourceit.ishop.dao.impl.hibernate;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.dao.OrderDao;
import ua.sourceit.ishop.entity.Order;

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
