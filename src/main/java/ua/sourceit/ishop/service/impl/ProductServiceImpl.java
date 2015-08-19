package ua.sourceit.ishop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.dao.DictionaryDao;
import ua.sourceit.ishop.dao.ImageDao;
import ua.sourceit.ishop.dao.WatchDao;
import ua.sourceit.ishop.entity.Watch;
import ua.sourceit.ishop.service.ProductService;

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

    @Autowired
    private DictionaryDao dictionaryDao;

    @Override
    public List<Watch> getWatchesByRange(int min, int count) {
          return watchDao.getByRange(min, count);
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
    public void addNewWatch(Watch watch) {
        if (watch != null){
            int brandId = dictionaryDao.saveAndGetId(watch.getBrand().getName(), "brand");
            int genderId = dictionaryDao.saveAndGetId(watch.getGender().getName(), "gender");
            int movementId = dictionaryDao.saveAndGetId(watch.getMovement().getName(), "movement");
            int productId = watchDao.addNew(watch,brandId,genderId,movementId);
            imageDao.insertBatch(productId, watch.getWatchImages());
        }

    }


}
