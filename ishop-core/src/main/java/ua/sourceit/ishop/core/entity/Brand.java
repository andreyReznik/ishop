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
public class Brand extends DictionaryProperty implements AmountedProperty, Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_brand", unique=true, nullable=false)
    public int getId() {
        return super.getId();
    }

    @Column(name="name", nullable = false)
    public String getName() {
        return super.getName();
    }


    @Transient
    public int getAmount() {
        return 0;
    }

}
