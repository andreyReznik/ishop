package ua.sourceit.ishop.exception;

/**
 * @author: areznik
 */

public class ItemNotFoundException extends RuntimeException {
    public ItemNotFoundException(String message) {
        super(message);
    }
}
