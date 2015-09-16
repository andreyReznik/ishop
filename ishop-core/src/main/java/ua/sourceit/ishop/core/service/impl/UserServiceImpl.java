package ua.sourceit.ishop.core.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.sourceit.ishop.core.dao.UserDao;
import ua.sourceit.ishop.core.entity.User;
import ua.sourceit.ishop.core.exception.UserWithThisEmailAlreadyExists;
import ua.sourceit.ishop.core.model.UserDto;
import ua.sourceit.ishop.core.service.UserService;

import java.util.UUID;

/**
 * @author: areznik
 */

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;


    @Override
    @Transactional()
    public User authenticateFromFB(com.restfb.types.User user) {
        User iShopUser = userDao.findByEmail(user.getEmail());
        if (iShopUser == null){
            iShopUser = User.createWithUserRole(user.getName(),user.getEmail(),UUID.randomUUID().toString());
            userDao.save(iShopUser);
        }
        return iShopUser;
    }

    @Override
    @Transactional()
    public User registerNewUser(UserDto userDto) {
        User iShopUser = userDao.findByEmail(userDto.getEmail());
        if (iShopUser != null){
            throw new UserWithThisEmailAlreadyExists("A user with this e-mail already exists!");
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
