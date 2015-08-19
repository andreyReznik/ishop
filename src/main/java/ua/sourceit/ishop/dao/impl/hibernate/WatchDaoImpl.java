package ua.sourceit.ishop.dao.impl.hibernate;

import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.dao.WatchDao;
import ua.sourceit.ishop.entity.Watch;

import java.util.List;

/**
 * @author: areznik
 */

@Repository("watchDao")
@SuppressWarnings("unchecked")
public class WatchDaoImpl extends AbstractHibernateDao implements WatchDao{


    @Override
    public List<Watch> getByRange(int offset, int limit) {
        HibernateDebugUtil.turnOnShowSQL();
        List<Watch> list = getSession().createCriteria(Watch.class).setFirstResult(offset).setMaxResults(limit).list();
        HibernateDebugUtil.turnOffShowSQL();
        return list;
    }

    @Override
    public Watch getById(int id) {
        HibernateDebugUtil.turnOnShowSQL();
        Watch watch = (Watch)getSession().get(Watch.class, id);
        HibernateDebugUtil.turnOffShowSQL();
        return watch;
    }

    @Override
    public int addNew(Watch watch, int brandId, int genderId, int movementId) {
        throw new RuntimeException("Not implemented method");
    }
}
