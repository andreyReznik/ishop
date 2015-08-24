package ua.sourceit.ishop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.sourceit.ishop.dao.UserDao;
import ua.sourceit.ishop.entity.User;
import ua.sourceit.ishop.entity.UserRole;
import ua.sourceit.ishop.exception.UserWithThisEmailAlreadyExists;
import ua.sourceit.ishop.model.UserDto;
import ua.sourceit.ishop.security.SecurityUtils;
import ua.sourceit.ishop.service.UserService;

import java.sql.Timestamp;
import java.util.Date;
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
        String email = user.getEmail();
        //FIXME(facebook doesn't return user email, only name and Id key)
        if (email == null){
            email = "andrey.reznik1@gmail.com";
        }
        User iShopUser = userDao.findByEmail(user.getEmail());
        if (iShopUser == null){
            iShopUser = User.createWithUserRole(user.getName(),email,UUID.randomUUID().toString());
            userDao.save(iShopUser);
        }
        SecurityUtils.authenticate(iShopUser);
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
        SecurityUtils.authenticate(iShopUser);
        return iShopUser;
    }

    @Override
    public User getById(int id) {
        return userDao.getById(id);
    }
}
