package ua.sourceit.ishop.core.service;

import ua.sourceit.ishop.core.entity.Watch;
import ua.sourceit.ishop.core.entity.WatchImage;
import ua.sourceit.ishop.core.model.ImageDto;

import java.io.IOException;
import java.util.List;

/**
 * Operations with images
 * @author: areznik
 */

public interface ImageService {

    /**
     * save small watch image
     * @param imageDto ImageDto object
     * @throws IOException
     */
    void saveImage(ImageDto imageDto) throws IOException;

    /**
     * Delete image from disk
     * @param image
     */
    void deleteImage(WatchImage image);

    /**
     * Save image (format base64) on disk
     * @param base64Img
     * @return path to saved image
     * @exception java.io.IOException
     */
    String saveImageAndGetLink(String base64Img) throws IOException;

    /**
     * Get product images
     * @param watch for images
     * @return WatchImages list
     */
    List<WatchImage> getWatchImages(Watch watch);
}
