package ua.sourceit.ishop.entity;

import ua.sourceit.ishop.model.AmountedProperty;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Order price category
 * @author: areznik
 */
@Entity
@Table(name="price_group")
public class PriceGroup implements AmountedProperty, Serializable {

    private int id;
    private String name;
    private int amount;


    @Override
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_price_group", unique=true, nullable=false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
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
