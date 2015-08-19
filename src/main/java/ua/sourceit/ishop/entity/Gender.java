package ua.sourceit.ishop.entity;

import ua.sourceit.ishop.model.AmountedProperty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * @author: areznik
 */
@Entity
@Table(name="gender")
public class Gender implements AmountedProperty, Serializable {

    private int id;
    private String name;
    private int amount;
    private Set<Watch> watchSet = new HashSet<Watch>(0);

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_gender", unique=true, nullable=false)
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name="name", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @OneToMany(fetch = FetchType.LAZY, targetEntity = Gender.class)
    public Set<Watch> getWatchSet() {
        return watchSet;
    }

    public void setWatchSet(Set<Watch> watchSet) {
        this.watchSet = watchSet;
    }

    @Override
    @Column(name="amount", nullable = false)
    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
