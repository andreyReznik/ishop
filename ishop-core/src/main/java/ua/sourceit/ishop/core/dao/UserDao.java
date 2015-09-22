package ua.sourceit.ishop.core.dao;

import ua.sourceit.ishop.core.entity.User;

/**
 * Dao for User operations
 * @author: areznik
 */

public interface UserDao {

    /**
     * Get User by user id
     * @param userId  user id
     * @return  User object
     */
    User getById(int userId);

    /**
     * Find user by email
     * @param email  user email
     * @return   User object
     */
    User findByEmail(String email);

    /**
     * Find user by login
     * @param login  user login
     * @return   User object
     */
    User findByLogin(String login);

    /**
     * Save new User
     * @param user for saving
     */
    void save(User user);
}
