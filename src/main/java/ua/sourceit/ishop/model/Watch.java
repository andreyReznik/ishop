package ua.sourceit.ishop.model;

import java.util.LinkedList;
import java.util.List;

/**
 * Product description
 *
 * @author: areznik
 */

public class Watch extends Thing {

    private String brand;
    private String model;
    private String info;
    private float  price;
    private String details;
    private String gender;
    private String movement;
    private String mainImage;
    private List<WatchImage> bigSmallImages;


    public Watch() {
        bigSmallImages = new LinkedList<>();
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

    public void addWatchImage(WatchImage watchImage){
        if (watchImage != null){
            this.bigSmallImages.add(watchImage);
        }
    }

    public List<WatchImage> getWatchImages(){
        return bigSmallImages;
    }

}

