package ua.sourceit.ishop.persistent.exception;

/**
 * Exception when no product found
 * @author: areznik
 */

public class NoSuchEntityException extends Exception {
    public NoSuchEntityException(String message) {
        super(message);
    }
}
