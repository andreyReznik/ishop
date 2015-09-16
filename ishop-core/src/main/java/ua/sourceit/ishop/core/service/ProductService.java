package ua.sourceit.ishop.core.service;

import ua.sourceit.ishop.core.entity.Watch;
import ua.sourceit.ishop.core.model.WatchDto;

import java.io.IOException;
import java.util.List;

/**
 * Operations with products(watches)
 * @author: areznik
 */

public interface ProductService {

    /**
     * Get watch bounded  list
     * @param offset   start position in watches stored  list
     * @param limit    max count of returned watches
     * @return  watch list
     */
    List<Watch> getWatchesByRange(int offset, int limit);


    /**
     * Get watch by id
     * @param id   watch id
     * @return   Watch object
     */
    Watch getWatchById(int id);


    /**
     *  Save new Watch
     *
     * @param watchDto  watchDto object
     * @return   saved Watch object
     */
    int save(WatchDto watchDto) throws IOException;

    /**
     * Delete watch by id
     * @param productId
     * @return
     */
    void delete(int productId);

    /**
     * Update watchDto by id
     * @param watchDto
     */
    void update(WatchDto watchDto) throws IOException;
}
