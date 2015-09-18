package ua.sourceit.ishop.core.entity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

/**
 * User for our system
 *
 * @author: areznik
 */
@Entity
@Table(name="user")
@SuppressWarnings("unchecked")
public class User extends Thing {

    private int id;
    private String name;
    private String login;
    private String pass;
    private String email;
    private String phone;
    private UserRole role;


    public static User createWithUserRole(String name, String email, String password){
        User user = new User();
        user.setLogin(email);
        user.setPass(password);
        user.setName(name);
        user.setEmail(email);
        user.setPhone("");
        user.setRole(UserRole.USER_ROLE);
        user.setCreated(new Timestamp(new Date().getTime()));
        user.setActive(true);
        return user;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_user", unique=true, nullable=false)
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name="name", unique=true, nullable=false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name="login", unique=true, nullable=false)
    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    @Column(name="pass", unique=true, nullable=false)
    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    @Column(name="email", unique=true, nullable=false)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name="phone",  nullable = true)
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Column(name="role", unique=true, nullable=false)
    public UserRole getRole() {
        return role;
    }
    public void setRole(UserRole role) {
        this.role = role;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;

        User user = (User) o;

        if (id != user.id) return false;
        if (!email.equals(user.email)) return false;
        if (!login.equals(user.login)) return false;
        if (!name.equals(user.name)) return false;
        if (!pass.equals(user.pass)) return false;
        if (!phone.equals(user.phone)) return false;
        if (role != user.role) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id;
    }

}
