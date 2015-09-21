package ua.sourceit.ishop.core.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.sourceit.ishop.core.dao.DictionaryDao;
import ua.sourceit.ishop.core.dao.WatchDao;
import ua.sourceit.ishop.core.entity.*;
import ua.sourceit.ishop.core.exception.ItemNotFoundException;
import ua.sourceit.ishop.core.model.DtoConverter;
import ua.sourceit.ishop.core.model.ImageDto;
import ua.sourceit.ishop.core.model.WatchForm;
import ua.sourceit.ishop.core.service.ImageService;
import ua.sourceit.ishop.core.service.ProductService;

import java.io.IOException;
import java.util.List;

/**
 * @author: areznik
 */

@Service("productService")
class ProductServiceImpl implements ProductService {

    @Autowired
    private WatchDao watchDao;

    @Autowired
    private DictionaryDao dictionaryDao;

    @Autowired
    private ImageService imageService;

    @Override
    public List<Watch> getWatchesByRange(int offset, int limit) {
          return watchDao.getByRange(offset, limit);
    }

    @Override
    public Watch getWatchById(int id) {
        Watch watch = watchDao.getById(id);
        if (watch != null) {
            watch.setWatchImages(imageService.getWatchImages(watch));
        }
        return watch;
    }

    @Override
    @Transactional()
    public int save(WatchForm watchForm) throws IOException {
        Watch watch = getWatch(watchForm);
        int watchId = watchDao.save(watch);
        saveSmallImages(watchId, watchForm);
        return watchId;
    }

    @Override
    @Transactional()
    public void delete(int productId) {
        Watch watch = getWatchById(productId);
        if (watch ==null){
            throw new ItemNotFoundException("Product with ID="+productId+" not found!");
        }
        for(WatchImage watchImage:watch.getWatchImages()){
            imageService.deleteImage(watchImage);
        }
        watchDao.delete(watch);
    }

    @Override
    @Transactional()
    public void update(WatchForm watchForm) throws IOException {
        Watch watch = getWatch(watchForm);
        watchDao.update(watch);
        deleteExistingImages(watch);
        saveSmallImages(watch.getId(), watchForm);
    }

    private void saveSmallImages(int watchId, WatchForm watchForm) throws IOException {
        for(String image : watchForm.getSmallImages()){
            imageService.saveImage(new ImageDto(watchId, image));
        }
    }

    private void deleteExistingImages(Watch watch) {
        List<WatchImage> watchImages = imageService.getWatchImages(watch);
        for(WatchImage image: watchImages){
            imageService.deleteImage(image);
        }
    }

    private Watch getWatch(WatchForm watchForm) throws IOException {
        Watch watch = DtoConverter.getWatch(watchForm);
        watch.setMainImage(imageService.saveImageAndGetLink(watchForm.getMainImage()));
        watch.setBrand((Brand) dictionaryDao.getProperty(Brand.class, watchForm.getBrandName()));
        watch.setGender((Gender) dictionaryDao.getProperty(Gender.class, watchForm.getGenderName()));
        watch.setMovement((Movement) dictionaryDao.getProperty(Movement.class, watchForm.getMovementName()));
        return watch;
    }

}
