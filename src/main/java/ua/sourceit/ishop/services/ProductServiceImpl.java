package ua.sourceit.ishop.services;

import ua.sourceit.ishop.model.Watch;
import ua.sourceit.ishop.persistent.dao.WatchDao;
import ua.sourceit.ishop.persistent.exception.DaoSystemException;
import ua.sourceit.ishop.persistent.exception.NoSuchEntityException;
import ua.sourceit.ishop.services.exception.ServiceException;

import java.util.List;

/**
 * @author: areznik
 */

class ProductServiceImpl implements ProductService {

    private WatchDao watchDao;

    private ProductServiceImpl(WatchDao watchDao) {
        this.watchDao = watchDao;
    }

    @Override
    public List<Watch> getWatchesByRange(int min, int count) {
        try {
            return watchDao.getByRange(min, count);
        } catch (DaoSystemException e) {
            throw new ServiceException(e.getMessage(),e);
        }
    }

    @Override
    public Watch getWatchById(int id) throws NoSuchEntityException {
        try {
            return watchDao.getById(id);
        } catch (DaoSystemException e) {
            throw new ServiceException(e.getMessage(),e);
        }
    }


}
