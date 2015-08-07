package ua.sourceit.ishop.model;

/**
 * Images for our product
 *
 * @author: areznik
 */

public class WatchImage extends Thing {

    private String bigImage;
    private String smallImage;

    public String getBigImage() {
        return bigImage;
    }

    public void setBigImage(String bigImage) {
        this.bigImage = bigImage;
    }

    public String getSmallImage() {
        return smallImage;
    }

    public void setSmallImage(String smallImage) {
        this.smallImage = smallImage;
    }
}
