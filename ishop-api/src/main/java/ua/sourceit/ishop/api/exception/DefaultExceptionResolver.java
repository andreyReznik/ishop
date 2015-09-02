package ua.sourceit.ishop.api.exception;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.TypeMismatchException;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.AbstractHandlerExceptionResolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;

/**
 * @author: areznik
 */

@Component
public class DefaultExceptionResolver extends AbstractHandlerExceptionResolver {
    private static final Logger LOGGER = Logger.getLogger(DefaultExceptionResolver.class);

    public DefaultExceptionResolver() {
        setOrder(0);
    }


    @Override
    protected ModelAndView doResolveException(HttpServletRequest request, HttpServletResponse response, Object o, Exception ex) {
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        response.setStatus(getErrorCode(ex));

        String jsonResp = createJsonException(ex);

        try {
            response.getWriter().write(jsonResp);
        } catch (IOException e) {
            LOGGER.error("", e);
        }

        return new ModelAndView();

    }

    private String createJsonException(Exception ex) {
        String exceptionMessage = StringUtils.isBlank(ex.getMessage()) ?
                "Error" :
                ex.getMessage();

        return  "{\"result\":\"failed\", \"message\":\""+exceptionMessage+"\"}";
    }

    private int getErrorCode(final Exception ex) {
        if(ex instanceof AbstractWebApiException) {
            return ((AbstractWebApiException)ex).getCode();
        }

        if((ex instanceof TypeMismatchException)||((ex instanceof ParseException))) {
            return HttpServletResponse.SC_BAD_REQUEST;
        }

        LOGGER.error("Error:", ex);
        return HttpServletResponse.SC_INTERNAL_SERVER_ERROR;
    }

    @Override
    protected boolean shouldApplyTo(HttpServletRequest request, Object handler) {
        return  true;
    }
}
