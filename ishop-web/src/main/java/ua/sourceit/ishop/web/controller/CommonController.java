package ua.sourceit.ishop.web.controller;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import ua.sourceit.ishop.core.entity.User;
import ua.sourceit.ishop.core.entity.UserRole;
import ua.sourceit.ishop.core.exception.UserWithThisEmailAlreadyExists;
import ua.sourceit.ishop.core.model.UserForm;
import ua.sourceit.ishop.core.service.UserService;
import ua.sourceit.ishop.web.security.CurrentAccount;
import ua.sourceit.ishop.web.security.SecurityUtils;
import ua.sourceit.ishop.web.util.ApplicationConstant;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

/**
 * Controller for common user operation (login, register)
 * @author: areznik
 */

@Controller
public class CommonController {

    private static final Logger LOGGER = Logger.getLogger(CommonController.class);

    @Value("${image.path}")
    private String imgPath;

    private final Map<UserRole,String> redirects = new HashMap<UserRole,String>();


    @Autowired
    private UserService userService;

    @PostConstruct
    public void afterPropertiesSet() throws Exception {
        redirects.put(UserRole.USER_ROLE, "/product/all");
        redirects.put(UserRole.ADMIN_ROLE, "/admin");
    }

    @RequestMapping(value = "/myInfo", method = RequestMethod.GET)
    public String myInfo(){
        CurrentAccount currentAccount = SecurityUtils.getCurrentAccount();
        return "redirect:"+redirects.get(currentAccount.getRole());
    }

    @RequestMapping(value={"/login", "/loginFailed"},method = RequestMethod.GET)
    public String loginUser() {
        return  "login/login";
    }

    @RequestMapping(value={"/register"})
    public String registerUser(ModelMap modelMap) {
        UserForm userForm = new UserForm();
        modelMap.addAttribute("user", userForm);
        return "registration/registration";
    }

    @RequestMapping(value={"/registerHandle"})
    public ModelAndView registerHandler(@ModelAttribute("user") @Valid UserForm userForm,
                                  BindingResult result) {
        if (!userForm.isPasswordsMatch()) {
            result.rejectValue("confirmPassword", "",null,"The password fields don't match.");
        }
        if (result.hasErrors()) {
            return new ModelAndView("registration/registration", "user", userForm);
        }
        try{

            User iShopUser = userService.registerNewUser(userForm);
            SecurityUtils.authenticate(iShopUser);
            return new ModelAndView("registration/success-register", "name", iShopUser.getName());
        }catch (UserWithThisEmailAlreadyExists ex){
            result.rejectValue("email", "",null,ex.getMessage());
            return new ModelAndView("registration/registration", "user", userForm);
        }
    }

    @RequestMapping(value={"/needLogin"},method = RequestMethod.GET)
    public String needLoginForCreateOrder(HttpSession session) {
        session.setAttribute(ApplicationConstant.NEED_REDIRECT_AFTER_LOGIN_URL, "/product/order/create");
        return  "login/need-login";
    }

    @RequestMapping(value="/image/{imgName}")
    public void getImage(@PathVariable("imgName")String imageName, HttpServletResponse resp) {
        try {
            try(InputStream inputStream = new FileInputStream(imgPath+imageName+".jpg");){
                IOUtils.copy(inputStream,resp.getOutputStream());
            }
        } catch (IOException e) {
            LOGGER.error(e.getMessage(),e);
        }
    }
}
