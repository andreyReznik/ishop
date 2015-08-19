package ua.sourceit.ishop.entity;

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
    private Watch watch;
    private String bigImage;
    private String smallImage;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_image", unique=true, nullable=false)
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_product", nullable = false)
    public Watch getWatch() {
        return watch;
    }
    public void setWatch(Watch watch) {
        this.watch = watch;
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
