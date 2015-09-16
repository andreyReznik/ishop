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
import ua.sourceit.ishop.core.model.WatchDto;
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
    public int save(WatchDto watchDto) throws IOException {
        Watch watch = getWatch(watchDto);
        int watchId = watchDao.save(watch);
        saveSmallImages(watchId,watchDto);
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
    public void update(WatchDto watchDto) throws IOException {
        Watch watch = getWatch(watchDto);
        watchDao.update(watch);
        deleteExistingImages(watch);
        saveSmallImages(watch.getId(),watchDto);
    }

    private void saveSmallImages(int watchId, WatchDto watchDto) throws IOException {
        for(String image : watchDto.getSmallImages()){
            imageService.saveImage(new ImageDto(watchId, image));
        }
    }

    private void deleteExistingImages(Watch watch) {
        List<WatchImage> watchImages = imageService.getWatchImages(watch);
        for(WatchImage image: watchImages){
            imageService.deleteImage(image);
        }
    }

    private Watch getWatch(WatchDto watchDto) throws IOException {
        Watch watch = DtoConverter.getWatch(watchDto);
        watch.setMainImage(imageService.saveImageAndGetLink(watchDto.getMainImage()));
        watch.setBrand((Brand) dictionaryDao.getProperty(Brand.class, watchDto.getBrandName()));
        watch.setGender((Gender) dictionaryDao.getProperty(Gender.class, watchDto.getGenderName()));
        watch.setMovement((Movement) dictionaryDao.getProperty(Movement.class, watchDto.getMovementName()));
        return watch;
    }

}
