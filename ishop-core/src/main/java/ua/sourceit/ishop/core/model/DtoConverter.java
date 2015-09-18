package ua.sourceit.ishop.core.model;

import ua.sourceit.ishop.core.entity.*;

import java.util.LinkedList;
import java.util.List;

/**
 * Converts dto objects to entity objects
 * @author: areznik
 */

public class DtoConverter {

    public static Watch getWatch(WatchDto watchDto){

        Watch watch = new Watch();
        watch.setBrand(getBrand(watchDto.getBrandName()));
        watch.setGender(getGender(watchDto.getGenderName()));
        watch.setMovement(getMovement(watchDto.getMovementName()));
        watch.setId(watchDto.getId());
        watch.setActive(watchDto.isActive());
        watch.setModel(watchDto.getModel());
        watch.setInfo(watchDto.getInfo());
        watch.setPrice(watchDto.getPrice());
        watch.setDetails(watchDto.getDetails());
        watch.setMainImage(watchDto.getMainImage());
        List<WatchImage> watchImages = new LinkedList<>();
        for (String img : watchDto.getSmallImages()){
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
