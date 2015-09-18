package ua.sourceit.ishop.core.exception;

/**
 * Throw when user with such email already exists
 * @author: areznik
 */

public class UserWithThisEmailAlreadyExists extends IShopException {
    public UserWithThisEmailAlreadyExists(String message) {
        super(message);
    }
}
