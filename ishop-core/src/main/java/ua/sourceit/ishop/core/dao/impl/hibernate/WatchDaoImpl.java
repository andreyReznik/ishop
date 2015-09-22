package ua.sourceit.ishop.core.dao.impl.hibernate;

import org.hibernate.criterion.Order;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.core.dao.WatchDao;
import ua.sourceit.ishop.core.entity.Watch;

import java.util.List;

/**
 * @author: areznik
 */

@Repository("watchDao")
@SuppressWarnings("unchecked")
public class WatchDaoImpl extends AbstractHibernateDao implements WatchDao{


    @Override
    public List<Watch> getByRange(int offset, int limit) {
        List<Watch> list = getSession().
                createCriteria(Watch.class).
                setFirstResult(offset).
                setMaxResults(limit).
                addOrder(Order.asc("id")).
                list();
        return list;
    }

    @Override
    public Watch getById(int id) {
        Watch watch = (Watch)getSession().get(Watch.class,id);
        return watch;
    }

    @Override
    public int save(Watch watch) {
        return (int)getSession().save(watch);
    }

    @Override
    public void delete(Watch watch) {
        getSession().delete(watch);
    }

    @Override
    public void update(Watch watch) {
        getSession().update(watch);
    }
}
