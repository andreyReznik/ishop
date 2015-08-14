package ua.sourceit.ishop.service;

import ua.sourceit.ishop.entity.Watch;

import java.util.List;

/**
 * @author: areznik
 */

public interface ProductService {

    public List<Watch> getWatchesByRange(int min, int count);

    public Watch getWatchById(int id);

    public void addNewWatch(Watch watch);

}
