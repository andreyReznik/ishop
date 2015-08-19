package ua.sourceit.ishop.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;

/**
 * Product description
 *
 * @author: areznik
 */
@Entity
@Table(name="product")
@SuppressWarnings("unchecked")
public class Watch extends Thing  {


    private int id;
    private Brand brand;
    private String model;
    private String info;
    private BigDecimal price;
    private String details;
    private Gender gender;
    private Movement movement;
    private String mainImage;
    private List<WatchImage> watchImages;

    public Watch() {
       watchImages = Collections.EMPTY_LIST;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_brand", nullable = false)
    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    @Column(name="model", nullable = false)
    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    @Column(name="info", nullable = false)
    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    @Column(name="price", nullable = false)
    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    @Column(name="details", nullable = false)
    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_gender", nullable = false)
    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_movement", nullable = false)
    public Movement getMovement() {
        return movement;
    }

    public void setMovement(Movement movement) {
        this.movement = movement;
    }

    @Column(name="imageLink",  nullable = false)
    public String getMainImage() {
        return mainImage;
    }

    public void setMainImage(String mainImage) {
        this.mainImage = mainImage;
    }

    @Transient
    public List<WatchImage> getWatchImages() {
        return watchImages;
    }

    public void setWatchImages(List<WatchImage> watchImages) {
        this.watchImages = watchImages;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_product", unique=true, nullable=false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Watch)) return false;

        Watch watch = (Watch) o;

        if (id != watch.id) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id;
    }
}

