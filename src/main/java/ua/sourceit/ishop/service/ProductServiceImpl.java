package ua.sourceit.ishop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.entity.Watch;
import ua.sourceit.ishop.persistent.dao.dictionary.DictionaryDao;
import ua.sourceit.ishop.persistent.dao.image.ImageDao;
import ua.sourceit.ishop.persistent.dao.watch.WatchDao;

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
            watch.setWatchImages(imageDao.getProductImages(id));
        }
        return watch;
    }

    @Override
    public void addNewWatch(Watch watch) {
        if (watch != null){
            int brandId = dictionaryDao.getDictionaryId(watch.getBrand(), "brand");
            int genderId = dictionaryDao.getDictionaryId(watch.getGender(), "gender");
            int movementId = dictionaryDao.getDictionaryId(watch.getMovement(), "movement");
            int productId = watchDao.addNew(watch,brandId,genderId,movementId);
            imageDao.insertBatch(productId, watch.getWatchImages());
        }

    }


}
