package ua.sourceit.ishop.core.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.core.dao.ImageDao;
import ua.sourceit.ishop.core.dao.WatchDao;
import ua.sourceit.ishop.core.entity.Watch;
import ua.sourceit.ishop.core.service.ProductService;

import java.util.List;

/**
 * @author: areznik
 */

@Service("productService")
class ProductServiceImpl implements ProductService {

    @Autowired
    private WatchDao watchDao;

    @Autowired
    private ImageDao imageDao;

    @Override
    public List<Watch> getWatchesByRange(int offset, int limit) {
          return watchDao.getByRange(offset, limit);
    }

    @Override
    public Watch getWatchById(int id) {
        Watch watch = watchDao.getById(id);
        if (watch != null) {
            watch.setWatchImages(imageDao.getWatchImages(watch));
        }
        return watch;
    }

    @Override
    public void save(Watch watch) {
        throw new RuntimeException("Not implemented method");
    }

}
