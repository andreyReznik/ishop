package ua.sourceit.ishop.dao;

import ua.sourceit.ishop.entity.Watch;
import ua.sourceit.ishop.entity.WatchImage;

import java.util.List;

/**
 * Dao for product additional images
 *
 * @author: areznik
 */

public interface ImageDao {

    public void insertBatch(int productId, List<WatchImage> images);

    List<WatchImage> getWatchImages(Watch watch);
}
