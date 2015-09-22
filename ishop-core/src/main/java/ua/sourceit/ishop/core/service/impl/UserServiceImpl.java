package ua.sourceit.ishop.core.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.sourceit.ishop.core.component.PasswordGenerator;
import ua.sourceit.ishop.core.dao.UserDao;
import ua.sourceit.ishop.core.entity.User;
import ua.sourceit.ishop.core.entity.UserRole;
import ua.sourceit.ishop.core.exception.UserWithThisEmailAlreadyExists;
import ua.sourceit.ishop.core.model.UserForm;
import ua.sourceit.ishop.core.service.UserService;

/**
 * @author: areznik
 */

@Service
public class UserServiceImpl implements UserService {

    public static final String USER_EXISTS_ERROR_TEXT =  "A user with this e-mail already exists!";

    @Autowired
    private UserDao userDao;

    @Autowired
    private PasswordGenerator passwordGenerator;


    @Override
    @Transactional()
    public User authenticateFromFB(com.restfb.types.User user) {
        User iShopUser = userDao.findByEmail(user.getEmail());
        if (iShopUser == null){
            iShopUser = new User(user.getName(),user.getEmail(),passwordGenerator.GenerateUUID(), UserRole.USER_ROLE);
            userDao.save(iShopUser);
        }
        return iShopUser;
    }

    @Override
    @Transactional()
    public User registerNewUser(UserForm userForm) {
        User iShopUser = userDao.findByEmail(userForm.getEmail());
        if (iShopUser != null){
            throw new UserWithThisEmailAlreadyExists(USER_EXISTS_ERROR_TEXT);
        }
        iShopUser = new User(userForm.getFirstName(), userForm.getEmail(), userForm.getPassword(),UserRole.USER_ROLE);
        userDao.save(iShopUser);
        return iShopUser;
    }

    @Override
    public User getById(int id) {
        return userDao.getById(id);
    }
}
