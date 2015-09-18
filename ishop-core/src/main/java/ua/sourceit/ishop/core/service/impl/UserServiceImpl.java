package ua.sourceit.ishop.core.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.sourceit.ishop.core.component.PasswordGenerator;
import ua.sourceit.ishop.core.dao.UserDao;
import ua.sourceit.ishop.core.entity.User;
import ua.sourceit.ishop.core.exception.UserWithThisEmailAlreadyExists;
import ua.sourceit.ishop.core.model.UserDto;
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
            iShopUser = User.createWithUserRole(user.getName(),user.getEmail(),passwordGenerator.GenerateUUID());
            userDao.save(iShopUser);
        }
        return iShopUser;
    }

    @Override
    @Transactional()
    public User registerNewUser(UserDto userDto) {
        User iShopUser = userDao.findByEmail(userDto.getEmail());
        if (iShopUser != null){
            throw new UserWithThisEmailAlreadyExists(USER_EXISTS_ERROR_TEXT);
        }
        iShopUser = User.createWithUserRole(userDto.getFirstName(),userDto.getEmail(),userDto.getPassword());
        userDao.save(iShopUser);
        return iShopUser;
    }

    @Override
    public User getById(int id) {
        return userDao.getById(id);
    }
}
