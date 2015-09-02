package ua.sourceit.ishop.api.exception;

import javax.servlet.http.HttpServletResponse;

/**
 * @author: areznik
 */

public class BadRequestException extends AbstractWebApiException{


    public BadRequestException(String message) {
        super(message);
    }

    public BadRequestException(String message, Throwable cause) {
        super(message, cause);
    }

    @Override
    public int getCode() {
        return HttpServletResponse.SC_BAD_REQUEST;
    }
}
