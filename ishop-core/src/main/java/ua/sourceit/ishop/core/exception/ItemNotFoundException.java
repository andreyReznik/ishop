package ua.sourceit.ishop.core.exception;

/**
 * Throw when searching item not found.
 * @author: areznik
 */

public class ItemNotFoundException extends IShopException {
    public ItemNotFoundException(String message) {
        super(message);
    }
}
