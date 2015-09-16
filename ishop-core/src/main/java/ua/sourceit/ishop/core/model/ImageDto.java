package ua.sourceit.ishop.core.model;

/**
 *
 * @author: areznik
 */

public class ImageDto {

    private int watchId;

    private String imageLink;

    public ImageDto(int watchId, String imageLink) {
        this.watchId = watchId;
        this.imageLink = imageLink;
    }

    public int getWatchId() {
        return watchId;
    }

    public String getImageLink() {
        return imageLink;
    }

}
