package ua.sourceit.ishop.core.dao.impl.hibernate;

import org.hibernate.criterion.Order;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.core.dao.AmountedPropertyDao;
import ua.sourceit.ishop.core.model.AmountedProperty;

import java.util.List;

/**
 *
 * @author: areznik
 */
@Repository("amountPropertyDao")
@SuppressWarnings("unchecked")
public class AmountedPropertyDaoImpl extends AbstractHibernateDao implements AmountedPropertyDao {

    @Override
    public List<AmountedProperty> getProperties(Class<? extends AmountedProperty> clazz) {
        List<AmountedProperty> list =  (getSession().createCriteria(clazz)
                .addOrder(Order.asc("id"))
                .list());
        return list;
    }
}
