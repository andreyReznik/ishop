package ua.sourceit.ishop.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.dao.UserDao;
import ua.sourceit.ishop.entity.User;
import ua.sourceit.ishop.entity.UserRole;

import java.util.*;

/**
 * UserDetailsService implementation for spring security
 * @author: areznik
 */
@Service("userAuthenticationService")
public class UserAuthenticationService implements UserDetailsService {

    @Autowired
    private UserDao userDao;

    private static final Map<UserRole, String> ROLES = new HashMap<UserRole, String>();

    static {
        ROLES.put(UserRole.ADMIN_ROLE, "ADMIN");
        ROLES.put(UserRole.USER_ROLE, "USER");
    }

    static Collection<? extends GrantedAuthority> convert(List<UserRole> roles) {
        Collection<SimpleGrantedAuthority> res = new ArrayList<SimpleGrantedAuthority>();
        for(UserRole ar : roles) {
            res.add(new SimpleGrantedAuthority(ROLES.get(ar)));
        }
        return res;
    }
    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User iShopUser = userDao.findByLogin(userName);
        if(iShopUser == null) {
            throw new UsernameNotFoundException("Account not found by login="+userName);
        }
        return new CurrentAccount(iShopUser);
    }
}
