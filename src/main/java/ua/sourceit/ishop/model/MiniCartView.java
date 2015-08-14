package ua.sourceit.ishop.model;

/**
 * Object for showing cart data on page
 * @author: areznik
 */

public class MiniCartView {

    public static final String SUCCESS = "SUCCESS";
    public static final String ERROR = "ERROR";

    private String status;
    private String message;
    private String sidebar;

    public MiniCartView(String status, String message, String sidebar) {
        this.status = status;
        this.message = message;
        this.sidebar = sidebar;
    }

    public String getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }

    public String getSidebar() {
        return sidebar;
    }

}
