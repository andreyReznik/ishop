package ua.sourceit.ishop.model;

import java.util.LinkedList;
import java.util.List;

/**
 * Product description
 *
 * @author: areznik
 */

public class Watch extends Thing {

    private int id;
    private String brand;
    private String model;
    private String info;
    private float price;
    private String details;
    private String gender;
    private String movement;
    private String mainImage;
    private List<WatchImage> watchImages;


    public Watch() {
        watchImages = new LinkedList<>();
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMovement() {
        return movement;
    }

    public void setMovement(String movement) {
        this.movement = movement;
    }

    public String getMainImage() {
        return mainImage;
    }

    public void setMainImage(String mainImage) {
        this.mainImage = mainImage;
    }

    public List<WatchImage> getWatchImages() {
        return watchImages;
    }

    public void setWatchImages(List<WatchImage> watchImages) {
        this.watchImages = watchImages;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Watch watch = (Watch) o;

        if (id != watch.id) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id;
    }
}

