package ua.sourceit.ishop.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import ua.sourceit.ishop.core.entity.User;
import ua.sourceit.ishop.core.entity.UserRole;
import ua.sourceit.ishop.core.exception.UserWithThisEmailAlreadyExists;
import ua.sourceit.ishop.core.model.UserDto;
import ua.sourceit.ishop.core.service.UserService;
import ua.sourceit.ishop.web.security.CurrentAccount;
import ua.sourceit.ishop.web.security.SecurityUtils;
import ua.sourceit.ishop.web.util.ApplicationConstant;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

/**
 * Controller for common user operation (login, register)
 * @author: areznik
 */

@Controller
public class CommonController {

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
        UserDto userDto = new UserDto();
        modelMap.addAttribute("user", userDto);
        return "registration/registration";
    }

    @RequestMapping(value={"/registerHandle"})
    public ModelAndView registerHandler(@ModelAttribute("user") @Valid UserDto userDto,
                                  BindingResult result) {
        if (!userDto.isPasswordsMatch()) {
            result.rejectValue("confirmPassword", "",null,"The password fields don't match.");
        }
        if (result.hasErrors()) {
            return new ModelAndView("registration/registration", "user", userDto);
        }
        try{

            User iShopUser = userService.registerNewUser(userDto);
            SecurityUtils.authenticate(iShopUser);
            return new ModelAndView("registration/success-register", "name", iShopUser.getName());
        }catch (UserWithThisEmailAlreadyExists ex){
            result.rejectValue("email", "",null,ex.getMessage());
            return new ModelAndView("registration/registration", "user", userDto);
        }
    }

    @RequestMapping(value={"/needLogin"},method = RequestMethod.GET)
    public String needLoginForCreateOrder(HttpSession session) {
        session.setAttribute(ApplicationConstant.NEED_REDIRECT_AFTER_LOGIN_URL, "/product/order/create");
        return  "login/need-login";
    }

}
