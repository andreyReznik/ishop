package ua.sourceit.ishop.core.service;


import ua.sourceit.ishop.core.entity.User;
import ua.sourceit.ishop.core.model.UserForm;

/**
 * Operations with user
 * @author: areznik
 */

public interface UserService {


    /**
     * Create new user after success facebook authenticate
     * @param user  facebook user object
     * @return created ua.sourceit.ishop.core.entity.User
     */
    User authenticateFromFB(com.restfb.types.User user);

    /**
     * Create new User after registration
     * @param userForm   userForm object from registration form
     * @return  created ua.sourceit.ishop.core.entity.User
     * @exception ua.sourceit.ishop.core.exception.UserWithThisEmailAlreadyExists
     */
    User registerNewUser(UserForm userForm);

    /**
     * Get user by Id
     * @param id  user id
     * @return  User object
     */
    User getById(int id);
}
