package ua.sourceit.ishop.api.exception;

import javax.servlet.http.HttpServletResponse;

/**
 * @author: areznik
 */

public class NotFoundException extends AbstractWebApiException {

    public NotFoundException(String message) {
        super(message);
    }

    public NotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    @Override
    public int getCode() {
        return HttpServletResponse.SC_NOT_FOUND;
    }
}
