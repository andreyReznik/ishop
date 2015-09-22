package ua.sourceit.ishop.core.model;

import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.List;

/**
 * Object from client with Watch fields
 * @author: areznik
 */

public class WatchForm {

    private int id;

    private boolean active;

    @Size(min=1, max=200, message = "Model length must be less 200")
    private String model;

    @Size(min=1, max=500, message = "Info length must be less 500")
    private String info;


    private BigDecimal price;

    @Size(min=1, max=2000, message = "Details length must be less 2000")
    private String details;

    private String mainImage;

    @Size(min=1, max=200, message = "Model length must be less 200")
    private String brandName;

    @Size(min=1, max=200, message = "Model length must be less 200")
    private String genderName;

    @Size(min=1, max=200, message = "Movement length must be less 200")
    private String movementName;

    private List<String> smallImages;


    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public String getGenderName() {
        return genderName;
    }


    public void setGenderName(String genderName) {
        this.genderName = genderName;
    }

    public String getMovementName() {
        return movementName;
    }

    public void setMovementName(String movementName) {
        this.movementName = movementName;
    }


    public void setModel(String model) {
       this.model = model;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public String getInfo() {
        return info;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getDetails() {
        return details;
    }

    public String getMainImage() {
        return mainImage;
    }

    public void setMainImage(String mainImage) {
        this.mainImage = mainImage;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public List<String> getSmallImages() {
        return smallImages;
    }

    public void setSmallImages(List<String> smallImages) {
        this.smallImages = smallImages;
    }
}
