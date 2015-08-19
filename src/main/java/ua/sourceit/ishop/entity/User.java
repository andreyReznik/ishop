package ua.sourceit.ishop.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

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
    private Set<Order> orderSet = new HashSet<>(0);


    public static User createFakeUser(){
        User user = new User();
        user.setId(7);
        user.setLogin("login");
        user.setPass("pass");
        user.setName("name");
        user.setEmail("andrey.reznik1@gmail.com");
        user.setRole(UserRole.USER_ROLE);
        user.setPhone("380675460481");
        return user;
    };

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

    @Column(name="phone", unique=true, nullable=false)
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
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        User user = (User) o;

        if (id != user.id) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id;
    }

    @OneToMany(fetch = FetchType.LAZY, targetEntity = Order.class)
    public Set<Order> getOrderSet() {
        return orderSet;
    }

    public void setOrderSet(Set<Order> orderSet) {
        this.orderSet = orderSet;
    }
}
