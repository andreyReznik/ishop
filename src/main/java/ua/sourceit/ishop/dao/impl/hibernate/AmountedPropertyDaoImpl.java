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
    public List<AmountedProperty> getGendersAmount() {
        return doGetAmountedProperty(Gender.class);
    }

    @Override
    public List<AmountedProperty> getMovementAmount() {
        return doGetAmountedProperty(Movement.class);
    }

    @Override
    public List<AmountedProperty> getPriceGroupAmount() {
        return doGetAmountedProperty(PriceGroup.class);
    }

    @Override
    public List<AmountedProperty> getBrandAmount() {
        HibernateDebugUtil.turnOnShowSQL();
        List<AmountedProperty> list =  (getSession().createCriteria(Brand.class)
                .addOrder(Order.asc("id"))
                .list());
        HibernateDebugUtil.turnOffShowSQL();
        return list;
    }

    private List<AmountedProperty> doGetAmountedProperty(Class clazz){
        HibernateDebugUtil.turnOnShowSQL();
        List<AmountedProperty> list =  (getSession().createCriteria(clazz)
                .addOrder(Order.asc("id"))
                .list());
        HibernateDebugUtil.turnOffShowSQL();
        return list;
    }
}
