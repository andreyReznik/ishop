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
     *
     * @param watch  Watch for saving
     */
    public int save(Watch watch);

    /**
     * Delete watch
     * @param watch
     * @return
     */
    void delete(Watch watch);

    /**
     * Update watch by ID
     * @param watch
     */
    void update(Watch watch);
}
