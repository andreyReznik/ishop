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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ImageDto)) return false;

        ImageDto imageDto = (ImageDto) o;

        if (watchId != imageDto.watchId) return false;
        if (!imageLink.equals(imageDto.imageLink)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = watchId;
        result = 31 * result + imageLink.hashCode();
        return result;
    }
}
