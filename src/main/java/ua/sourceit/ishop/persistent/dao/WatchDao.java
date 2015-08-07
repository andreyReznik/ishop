package ua.sourceit.ishop.persistent.dao;

import ua.sourceit.ishop.model.Watch;
import ua.sourceit.ishop.persistent.exception.DaoSystemException;
import ua.sourceit.ishop.persistent.exception.NoSuchEntityException;

import java.util.List;

/**
 * Dao for product
 * @author: areznik
 */

public interface WatchDao {

    public List<Watch> getByRange(int offset, int limit) throws DaoSystemException;

    public Watch getById(int id) throws NoSuchEntityException, DaoSystemException;

    public void addNew(Watch watch) throws  DaoSystemException;


}
