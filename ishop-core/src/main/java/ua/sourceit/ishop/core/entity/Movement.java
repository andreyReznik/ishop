package ua.sourceit.ishop.core.entity;

import ua.sourceit.ishop.core.model.AmountedProperty;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Watch movement
 * @author: areznik
 */
@Entity
@Table(name="movement")
public class Movement implements AmountedProperty, Serializable {

    private int id;
    private String name;
    private int amount;


    public void setId(int id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_movement", unique=true, nullable=false)
    public int getId() {
        return id;
    }

    @Column(name="name", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
