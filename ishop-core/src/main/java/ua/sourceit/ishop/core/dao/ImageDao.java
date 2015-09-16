package ua.sourceit.ishop.core.dao;

import ua.sourceit.ishop.core.entity.Watch;
import ua.sourceit.ishop.core.entity.WatchImage;

import java.util.List;

/**
 * Dao for product additional images
 *
 * @author: areznik
 */

public interface ImageDao {

    /**
     * Save additional product image
     * @param image for saving
     */
    public void save(WatchImage image);


    /**
     * Get product images
     * @param watch for images
     * @return WatchImages list
     */
    List<WatchImage> getWatchImages(Watch watch);

    /**
     * Delete product image
     * @param watchImage
     */
    void delete(WatchImage watchImage);
}
