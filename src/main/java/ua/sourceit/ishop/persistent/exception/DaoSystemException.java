package ua.sourceit.ishop.persistent.exception;

/**
 * Any exception occured in Dao
 * @author: areznik
 */

public class DaoSystemException extends Exception {

    public DaoSystemException(String message) {
        super(message);
    }

    public DaoSystemException(String message, Throwable cause) {
        super(message, cause);
    }
}
