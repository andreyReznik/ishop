package ua.sourceit.ishop.core.exception;

/**
 * @author: areznik
 */

public class CartIsEmptyException extends IShopException {
    public CartIsEmptyException(String message) {
        super(message);
    }
}
