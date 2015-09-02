package ua.sourceit.ishop.core.exception;

/**
 * Throw when searching item not found.
 * @author: areznik
 */

public class ItemNotFoundException extends RuntimeException {
    public ItemNotFoundException(String message) {
        super(message);
    }
}
