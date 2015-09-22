package ua.sourceit.ishop.api.exception;

/**
 * @author: areznik
 */

public abstract class AbstractWebApiException extends Exception {

    public AbstractWebApiException(String message) {
        super(message);
    }

    public AbstractWebApiException(String message, Throwable cause) {
        super(message, cause);
    }

    public abstract int getCode();

}
