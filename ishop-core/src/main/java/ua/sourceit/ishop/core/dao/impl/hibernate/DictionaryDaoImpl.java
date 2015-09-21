package ua.sourceit.ishop.core.dao.impl.hibernate;

import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.core.dao.DictionaryDao;
import ua.sourceit.ishop.core.entity.DictionaryProperty;

import java.util.List;

/**
 * @author: areznik
 */
@Repository("dictionaryDao")
@SuppressWarnings("unchecked")
public class DictionaryDaoImpl extends AbstractHibernateDao implements DictionaryDao {

    @Override
    public DictionaryProperty getProperty(Class<? extends DictionaryProperty> clazz, String name) {
        List<DictionaryProperty> propertyList = getSession().createCriteria(clazz).
                add(Restrictions.eq("name", name)).list();
        return propertyList.size()>0 ? propertyList.get(0): null ;
    }
}
