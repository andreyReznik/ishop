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
     * Save additional product images
     * @param productId product id
     * @param images list of WatchImages
     */
    public void saveForProduct(int productId, List<WatchImage> images);


    /**
     * Get product images
     * @param watch for images
     * @return WatchImages list
     */
    List<WatchImage> getWatchImages(Watch watch);
}
