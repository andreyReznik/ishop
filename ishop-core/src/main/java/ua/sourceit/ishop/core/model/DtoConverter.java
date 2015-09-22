package ua.sourceit.ishop.core.model;

import ua.sourceit.ishop.core.entity.*;

import java.util.LinkedList;
import java.util.List;

/**
 * Converts dto objects to entity objects
 * @author: areznik
 */

public class DtoConverter {

    public static Watch getWatch(WatchForm watchForm){

        Watch watch = new Watch();
        watch.setBrand(getBrand(watchForm.getBrandName()));
        watch.setGender(getGender(watchForm.getGenderName()));
        watch.setMovement(getMovement(watchForm.getMovementName()));
        watch.setId(watchForm.getId());
        watch.setActive(watchForm.isActive());
        watch.setModel(watchForm.getModel());
        watch.setInfo(watchForm.getInfo());
        watch.setPrice(watchForm.getPrice());
        watch.setDetails(watchForm.getDetails());
        watch.setMainImage(watchForm.getMainImage());
        List<WatchImage> watchImages = new LinkedList<>();
        for (String img : watchForm.getSmallImages()){
            WatchImage watchImage = new WatchImage();
            watchImage.setBigImage(img);
            watchImages.add(watchImage);
        }
        watch.setWatchImages(watchImages);
        return watch;
    }

    private static Brand getBrand(String name){
        Brand brand = new Brand();
        brand.setName(name);
        return brand;
    }

    private static Gender getGender(String name){
        Gender gender = new Gender();
        gender.setName(name);
        return gender;
    }

    private static Movement getMovement(String name){
        Movement movement = new Movement();
        movement.setName(name);
        return movement;
    }


    public static WatchImage getWatchImage(ImageDto imageDto) {
        WatchImage watchImage = new WatchImage();
        watchImage.setWatchId(imageDto.getWatchId());
        watchImage.setBigImage(imageDto.getImageLink());
        watchImage.setSmallImage(imageDto.getImageLink());
        watchImage.setActive(true);
        return  watchImage;
    }



}
