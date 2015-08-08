package ua.sourceit.ishop.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.model.Watch;
import ua.sourceit.ishop.persistent.dao.watch.WatchDao;

import java.util.List;

/**
 * @author: areznik
 */

@Service("productService")
class ProductServiceImpl implements ProductService {


    @Autowired
    private WatchDao watchDao;


    @Override
    public List<Watch> getWatchesByRange(int min, int count) {
          return watchDao.getByRange(min, count);
    }

    @Override
    public Watch getWatchById(int id) {
           return watchDao.getById(id);
    }


}
