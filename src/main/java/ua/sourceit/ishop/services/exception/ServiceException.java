package ua.sourceit.ishop.services.exception;

/**
 * Any exception in service layer
 * @author: areznik
 */

public class ServiceException extends RuntimeException {
    public ServiceException(String message, Throwable cause) {
        super(message, cause);
    }

    public ServiceException(String message) {
        super(message);
    }
}
