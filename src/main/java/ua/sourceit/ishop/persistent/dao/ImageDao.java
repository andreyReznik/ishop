package ua.sourceit.ishop.persistent.dao;

import ua.sourceit.ishop.model.WatchImage;
import ua.sourceit.ishop.persistent.exception.DaoSystemException;

import java.util.List;

/**
 *  Dao for product images
 * @author: areznik
 */

public interface ImageDao {

    public void insertBatch(int productId, List<WatchImage> images) throws DaoSystemException;
}
