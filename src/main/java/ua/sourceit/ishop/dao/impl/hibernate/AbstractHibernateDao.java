package ua.sourceit.ishop.dao.impl.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Base class for hibernate implemented dao
 * @author: areznik
 */

@Repository
public abstract class AbstractHibernateDao {

    @Autowired
    private SessionFactory sessionFactory;

    protected Session getSession(){
        return sessionFactory.getCurrentSession();
    }


}
