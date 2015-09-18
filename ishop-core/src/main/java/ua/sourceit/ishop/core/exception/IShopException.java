package ua.sourceit.ishop.core.exception;

/**
 * Base class for all custom exception
 * @author: areznik
 */

public class IShopException extends RuntimeException {
    public IShopException(String message) {
        super(message);
    }
}
