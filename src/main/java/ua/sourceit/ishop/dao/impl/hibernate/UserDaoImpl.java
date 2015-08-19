package ua.sourceit.ishop.dao.impl.hibernate;

import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.dao.UserDao;
import ua.sourceit.ishop.entity.User;

/**
 * @author: areznik
 */
@Repository("userDao")
public class UserDaoImpl extends AbstractHibernateDao implements UserDao {
    @Override
    public User getById(int id) {
        HibernateDebugUtil.turnOnShowSQL();
        User user = (User)getSession().get(User.class, id);
        HibernateDebugUtil.turnOffShowSQL();
        return user;
    }
}
