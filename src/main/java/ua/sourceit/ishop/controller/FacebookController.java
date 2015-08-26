package ua.sourceit.ishop.controller;

import com.restfb.DefaultFacebookClient;
import com.restfb.FacebookClient;
import com.restfb.Parameter;
import com.restfb.Version;
import com.restfb.types.User;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import ua.sourceit.ishop.security.SecurityUtils;
import ua.sourceit.ishop.service.UserService;
import ua.sourceit.ishop.util.ApplicationConstant;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.Scanner;

/**
 * Controller for facebook authentication operation
 * @author: areznik
 */

@Controller
public class FacebookController implements InitializingBean {

    private static final Logger LOGGER = Logger.getLogger(FacebookController.class);

    @Value("${facebook.clientId}")
    private String facebookClientId;

    @Value("${facebook.secretKey}")
    private String facebookSecretKey;

    @Value("${application.host}")
    private String applicationHost;

    @Autowired
    private UserService userService;

    private String fbReferrer;

    @Override
    public void afterPropertiesSet() throws Exception {
        fbReferrer = "https://graph.facebook.com/oauth/authorize?client_id=" + facebookClientId +
                "&redirect_uri=http://" + applicationHost + "/fromfb" + "&scope=email";
    }

    @RequestMapping(value={"/fbLogin", "/fbSignup"}, method={RequestMethod.GET})
    public String fbLogin() throws Exception {
        return "redirect:" + fbReferrer;
    }

    /**
     * Perform request from FB after successful authentication
     *
     * @param session - http session object
     * @param code  if null - discard access to user parameters, otherwise accept
     * @return redirect with URL
     * @throws IOException
     */

    @RequestMapping(value="/fromfb", method={RequestMethod.GET})
    public String fromFb(HttpSession session, @RequestParam(value = "code", required = false) String code) throws IOException {
        if (code == null){
            return "redirect:/login/needLogin";
        }
        User user = getFacebookUser(code);
        LOGGER.error("FB user email= "+ user.getEmail());
        ua.sourceit.ishop.entity.User iShopUser = userService.authenticateFromFB(user);
        SecurityUtils.authenticate(iShopUser);
        String url = (String) session.getAttribute(ApplicationConstant.NEED_REDIRECT_AFTER_LOGIN_URL);
        if (url == null){
            url = "/product/all";
        }
        return "redirect:"+url;
    }

    protected User getFacebookUser (String code) throws IOException {
        String url = new StringBuilder()
                .append("https://graph.facebook.com/oauth/access_token?client_id=")
                .append(facebookClientId)
                .append("&redirect_uri=http://")
                .append(applicationHost)
                .append("/fromfb?referrer=")
                .append(fbReferrer)
                .append("&client_secret=")
                .append(facebookSecretKey)
                .append("&code=")
                .append(code).toString();
        URLConnection connection = new URL(url).openConnection();
        try(InputStream in = connection.getInputStream()) {
            Scanner scanner = new Scanner(in);
            scanner.useDelimiter("\\Z");
            String out = scanner.next();
            String[] auth1 = out.split("=");
            String[] auth2 = auth1[1].split("&");
            FacebookClient facebookClient = new DefaultFacebookClient(auth2[0], Version.VERSION_2_4);

            User user = facebookClient.fetchObject("me", User.class);
            User userWithEmail = facebookClient.fetchObject("me", User.class, Parameter.with("fields", "email"));
            user.setEmail(userWithEmail.getEmail());
            return user;
        }
    }

}
