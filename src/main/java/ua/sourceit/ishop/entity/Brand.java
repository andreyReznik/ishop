package ua.sourceit.ishop.entity;

import ua.sourceit.ishop.model.AmountedProperty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * Watch brand
 * @author: areznik
 */

@Entity
@Table(name="brand")
public class Brand implements AmountedProperty, Serializable {

    private int id;
    private String name;
    private Set<Watch> watchSet = new HashSet<Watch>(0);


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

    @OneToMany(fetch = FetchType.LAZY, targetEntity = Brand.class)
    public Set<Watch> getWatchSet() {
        return watchSet;
    }

    public void setWatchSet(Set<Watch> watchSet) {
        this.watchSet = watchSet;
    }

    @Transient
    public int getAmount() {
        return 0;
    }


}
