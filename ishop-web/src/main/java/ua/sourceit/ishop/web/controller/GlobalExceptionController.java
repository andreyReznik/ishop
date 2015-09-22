package ua.sourceit.ishop.web.controller;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;
import ua.sourceit.ishop.core.exception.IShopException;
import ua.sourceit.ishop.core.exception.ItemNotFoundException;

import javax.servlet.http.HttpServletRequest;

/**
 * Global exception handler for Controller exceptions
 * @author: areznik
 */

@ControllerAdvice
public class GlobalExceptionController {

    private static final Logger LOGGER = Logger.getLogger(GlobalExceptionController.class);

    public static final String ERROR_TEXT_PARAM = "error";

    @ExceptionHandler(ItemNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND, reason="Item not found")
    public void handleItemNotFoundException(ItemNotFoundException ex) {
        LOGGER.error(ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ModelAndView handleException(Exception ex, HttpServletRequest req) {
        LOGGER.error("Exception. url="+req.getRequestURL()+ex.getMessage(),ex);
        ModelAndView mav = new ModelAndView();
        if (ex instanceof IShopException){
            mav.addObject(ERROR_TEXT_PARAM, ex.getMessage());
        }else{
            mav.addObject(ERROR_TEXT_PARAM, "Oops. Some exception occurred!");
        }
        mav.setViewName("exception");
        return mav;
    }
}
