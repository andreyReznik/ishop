package ua.sourceit.ishop.model;

/**
 * User role
 * @author: areznik
 */

public enum UserRole {
    USER_ROLE(0),
    ADMIN_ROLE(1);

    UserRole(int id) {
        this.id = id;
    }

    private int id;

    public int getId() {
        return id;
    }

    public static String getClassName() {
        return UserRole.class.getName();
    }
}