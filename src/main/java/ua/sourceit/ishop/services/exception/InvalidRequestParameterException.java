package ua.sourceit.ishop.services.exception;

/**
 * @author: areznik
 */

public class InvalidRequestParameterException extends RuntimeException {
    public InvalidRequestParameterException(String message, Throwable cause) {
        super(message, cause);
    }
}
