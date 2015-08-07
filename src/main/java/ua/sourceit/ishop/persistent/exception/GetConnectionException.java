package ua.sourceit.ishop.persistent.exception;

/**
 * Exception wrapper for dbcp.getConnection() exceptions
 * @author: areznik
 */

public class GetConnectionException extends Exception {
    public GetConnectionException(String message, Throwable cause) {
        super(message, cause);
    }
}
