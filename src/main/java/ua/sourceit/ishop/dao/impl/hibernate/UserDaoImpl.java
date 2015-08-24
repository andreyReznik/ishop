package ua.sourceit.ishop.dao.impl.hibernate;

import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.dao.UserDao;
import ua.sourceit.ishop.entity.User;

import java.util.List;

/**
 * @author: areznik
 */
@Repository("userDao")
public class UserDaoImpl extends AbstractHibernateDao implements UserDao {
    @Override
    public User getById(int id) {
        User user = (User)getSession().get(User.class, id);
        return user;
    }

    @Override
    public User findByEmail(String email) {
        List<User> users = getSession().createCriteria(User.class).
                add(Restrictions.eq("email", email)).list();
        return users.size()>0 ? users.get(0): null ;
    }

    @Override
    public User findByLogin(String login) {
        List<User> users = getSession().createCriteria(User.class).
                add(Restrictions.eq("login", login)).list();
        return users.size()>0 ? users.get(0): null ;
    }

    @Override
    public void save(User iShopUser) {
        getSession().save(iShopUser);
    }
}
