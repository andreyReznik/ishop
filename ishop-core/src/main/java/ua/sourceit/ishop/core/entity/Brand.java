package ua.sourceit.ishop.core.entity;

import ua.sourceit.ishop.core.model.AmountedProperty;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Watch brand
 * @author: areznik
 */

@Entity
@Table(name="brand")
public class Brand implements AmountedProperty, Serializable {

    private int id;
    private String name;


    public void setId(int id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_brand", unique=true, nullable=false)
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

    @Transient
    public int getAmount() {
        return 0;
    }


}
