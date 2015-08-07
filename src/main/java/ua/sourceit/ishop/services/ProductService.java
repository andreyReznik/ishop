package ua.sourceit.ishop.services;

import ua.sourceit.ishop.model.Watch;
import ua.sourceit.ishop.persistent.exception.NoSuchEntityException;

import java.util.List;

/**
 *
 * @author: areznik
 */

public interface ProductService {

    public List<Watch> getWatchesByRange(int min, int count);

    public Watch getWatchById(int id) throws NoSuchEntityException;
}
