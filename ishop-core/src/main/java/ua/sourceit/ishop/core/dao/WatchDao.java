package ua.sourceit.ishop.core.dao;

import ua.sourceit.ishop.core.entity.Watch;


import java.util.List;

/**
 * Dao for product (watches) operations
 *
 * @author: areznik
 */

public interface WatchDao {

    /**
     * Get watches
     * @param offset start position in database list
     * @param limit  max count of returned watches
     * @return  watch list
     */
    public List<Watch> getByRange(int offset, int limit);

    /**
     * Ger watch by id
     * @param id watch id
     * @return Watch object
     */
    public Watch getById(int id);


    /**
     * Save new Watch
     * @param watch  Watch for saving
     * @param brandId  id brand
     * @param genderId  id gender
     * @param movementId   id movement
     * @return  watch saved id
     */
    public int save(Watch watch, int brandId, int genderId, int movementId);


}
