package ua.sourceit.ishop.web.security;

import org.springframework.security.core.userdetails.User;
import ua.sourceit.ishop.core.entity.UserRole;

import java.util.Arrays;

/**
 * Adapter between ua.sourceit.ishop.entity.User
 * and org.springframework.security.core.userdetails
 * @author: areznik
 */

public class CurrentAccount extends User {

    private final int id;
    private UserRole role;

    public CurrentAccount(ua.sourceit.ishop.core.entity.User iShopUser) {
        super(iShopUser.getEmail(), iShopUser.getPass(), iShopUser.isActive(), true, true, true,
                UserAuthenticationService.convert(Arrays.asList(iShopUser.getRole())));
        this.id = iShopUser.getId();
        this.role = iShopUser.getRole();
    }

    public int getId() {
        return id;
    }

    public UserRole getRole() {
        return role;
    }


}
