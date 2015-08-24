package ua.sourceit.ishop.controller;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;
import ua.sourceit.ishop.entity.User;
import ua.sourceit.ishop.entity.UserRole;
import ua.sourceit.ishop.exception.UserWithThisEmailAlreadyExists;
import ua.sourceit.ishop.model.UserDto;
import ua.sourceit.ishop.security.CurrentAccount;
import ua.sourceit.ishop.security.SecurityUtils;
import ua.sourceit.ishop.service.UserService;
import ua.sourceit.ishop.util.ApplicationConstant;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

/**
 * Controller for common user operation (login, register)
 * @author: areznik
 */

@Controller
public class CommonController implements InitializingBean{

    private final Map<UserRole,String> redirects = new HashMap<UserRole,String>();


    @Autowired
    private UserService userService;

    @Override
    public void afterPropertiesSet() throws Exception {
        redirects.put(UserRole.USER_ROLE, "/product/all");
        redirects.put(UserRole.ADMIN_ROLE, "/admin");
    }

    @RequestMapping(value = "/myInfo", method = RequestMethod.GET)
    public String myInfo(){
        CurrentAccount currentAccount = SecurityUtils.getCurrentAccount();
        return "redirect:"+redirects.get(currentAccount.getRole());
    }

    @RequestMapping(value={"/admin"},method = RequestMethod.GET)
    public String admin() {
        return  "admin";
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
                                  BindingResult result, WebRequest request, Errors errors) {
        if (!userDto.isPasswordsMatch()) {
            result.rejectValue("confirmPassword", "",null,"The password fields don't match.");
        }
        if (result.hasErrors()) {
            return new ModelAndView("registration/registration", "user", userDto);
        }
        User iShopUser;
        try{
            iShopUser = userService.registerNewUser(userDto);
            return new ModelAndView("registration/successRegister", "name", iShopUser.getName());
        }catch (UserWithThisEmailAlreadyExists ex){
            result.rejectValue("email", "",null,ex.getMessage());
            return new ModelAndView("registration/registration", "user", userDto);
        }
    }

    @RequestMapping(value={"/needLogin"},method = RequestMethod.GET)
    public String needLoginForCreateOrder(HttpSession session) {
        session.setAttribute(ApplicationConstant.NEED_REDIRECT_AFTER_LOGIN_URL, "/product/order/create");
        return  "login/needLogin";
    }

}
