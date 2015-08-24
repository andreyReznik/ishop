package ua.sourceit.ishop.exception;

/**
 * Throw when user with such email already exists
 * @author: areznik
 */

public class UserWithThisEmailAlreadyExists extends RuntimeException {
    public UserWithThisEmailAlreadyExists(String message) {
        super(message);
    }
}
