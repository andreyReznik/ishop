package ua.sourceit.ishop.dao;

import ua.sourceit.ishop.entity.User;

/**
 * operations with user
 * @author: areznik
 */

public interface UserDao {

    public User getById(int userId);
}
