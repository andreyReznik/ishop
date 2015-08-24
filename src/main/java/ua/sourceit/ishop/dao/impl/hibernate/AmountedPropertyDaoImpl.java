package ua.sourceit.ishop.dao.impl.hibernate;

import org.hibernate.criterion.Order;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.dao.AmountedPropertyDao;
import ua.sourceit.ishop.entity.Brand;
import ua.sourceit.ishop.entity.Gender;
import ua.sourceit.ishop.entity.Movement;
import ua.sourceit.ishop.entity.PriceGroup;
import ua.sourceit.ishop.model.AmountedProperty;

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
