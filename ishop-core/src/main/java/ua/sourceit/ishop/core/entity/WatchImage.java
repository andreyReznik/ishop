package ua.sourceit.ishop.core.entity;

import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;

/**
 * Images for our product
 *
 * @author: areznik
 */
@Entity
@Table(name="image")
public class WatchImage extends Thing  {

    private int id;
    private int watchId;
    private String bigImage;
    private String smallImage;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_image", unique=true, nullable=false)
    @JsonIgnore
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name="link", nullable=false)
    public String getBigImage() {
        return bigImage;
    }
    public void setBigImage(String bigImage) {
        this.bigImage = bigImage;
    }

    @Column(name="smallLink", nullable=false)
    public String getSmallImage() {
        return smallImage;
    }
    public void setSmallImage(String smallImage) {
        this.smallImage = smallImage;
    }

    @Column(name="id_product", nullable=false)
    @JsonIgnore
    public int getWatchId() {
        return watchId;
    }

    public void setWatchId(int watchId) {
        this.watchId = watchId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof WatchImage)) return false;

        WatchImage that = (WatchImage) o;

        if (id != that.id) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id;
    }



}
