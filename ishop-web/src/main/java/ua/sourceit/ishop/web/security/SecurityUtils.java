package ua.sourceit.ishop.web.security;

import org.springframework.security.authentication.RememberMeAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import ua.sourceit.ishop.core.entity.User;

import java.util.Arrays;

/**
 * Util class for authenticate user operations inside system
 * @author: areznik
 */

public class SecurityUtils {


    public static int getCurrentIdAccount () {
        CurrentAccount a = getCurrentAccount();
        return a != null ? a.getId() : -1;
    }

    public static CurrentAccount getCurrentAccount () {
        Object principal;
        try {
            principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        } catch (Exception e) {
            return null;
        }
        if (principal instanceof CurrentAccount) {
            return (CurrentAccount)principal;
        }
        return null;
    }

    public static void authenticate(User iShopUser) {
        Authentication authentication = new RememberMeAuthenticationToken("iShopRememberMeKey",
                new CurrentAccount(iShopUser),
                UserAuthenticationService.convert(Arrays.asList(iShopUser.getRole())));


        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

}
