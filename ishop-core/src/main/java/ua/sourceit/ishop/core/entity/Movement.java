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
public class Movement extends DictionaryProperty implements AmountedProperty, Serializable {

    private int amount;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_movement", unique=true, nullable=false)
    public int getId() {
        return super.getId();
    }

    @Column(name="name", nullable = false)
    public String getName() {
        return super.getName();
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
