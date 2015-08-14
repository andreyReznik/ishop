package ua.sourceit.ishop.persistent.dao.image;

import ua.sourceit.ishop.entity.WatchImage;

import java.util.List;

/**
 * Dao for product images
 *
 * @author: areznik
 */

public interface ImageDao {

    public void insertBatch(int productId, List<WatchImage> images);

    List<WatchImage> getProductImages(int productId);
}
