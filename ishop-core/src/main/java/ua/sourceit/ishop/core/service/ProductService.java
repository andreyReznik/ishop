package ua.sourceit.ishop.core.service;

import ua.sourceit.ishop.core.entity.Watch;

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
     * @param watch  watch for saving
     */
    void save(Watch watch);



}
