package ua.sourceit.ishop.dao.impl.jdbc;

import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.dao.UserDao;
import ua.sourceit.ishop.entity.User;

/**
 * @author: areznik
 * use hibernate version of dao instead
 */

@Deprecated
@Repository
public class UserDaoImpl extends AbstractJdbcDao implements UserDao {

    @Override
    public User getById(int userId) {
        throw new RuntimeException("Not implemented method");
    }

    @Override
    public User findByEmail(String email) {
        throw new RuntimeException("Not implemented method");
    }

    @Override
    public User findByLogin(String login) {
        throw new RuntimeException("Not implemented method");
    }

    @Override
    public void save(User user) {
        throw new RuntimeException("Not implemented method");
    }
}
