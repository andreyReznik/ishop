package ua.sourceit.ishop.core.model;


import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.Size;

/**
 * User for registration validation
 * @author: areznik
 */


public class UserDto {

    @NotEmpty
    private String firstName;

    @NotEmpty
    @Email
    private String email;

    @NotEmpty
    @Size(min=4, max=10)
    private String password;

    @NotEmpty
    @Size(min=4, max=10)
    private String confirmPassword;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public boolean isPasswordsMatch(){
        return (password.equals(confirmPassword));
    };
}
