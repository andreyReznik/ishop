package ua.sourceit.ishop.core.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.core.dao.ImageDao;
import ua.sourceit.ishop.core.entity.Watch;
import ua.sourceit.ishop.core.entity.WatchImage;
import ua.sourceit.ishop.core.model.DtoConverter;
import ua.sourceit.ishop.core.model.ImageDto;
import ua.sourceit.ishop.core.service.ImageService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

/**
 * @author: areznik
 */
@Service
public class ImageServiceImpl implements ImageService {

    private static final CharSequence BASE64_STRING = "base64";
    @Value("${image.path}")
    private String imagePath;

    @Autowired
    private ImageDao imageDao;

    @Override
    public void saveImage(ImageDto imageDto) throws IOException {
        WatchImage watchImage = DtoConverter.getWatchImage(imageDto);
        String bigImage = watchImage.getBigImage();
        if (bigImage.contains(BASE64_STRING)){
            //TODO convert big img to 490x490
            bigImage = saveImageAndGetLink(bigImage);
            watchImage.setBigImage(bigImage);
        }

        String smallImage = watchImage.getSmallImage();
        if (smallImage.contains(BASE64_STRING)){
            //TODO convert small img to 70x70
            smallImage = saveImageAndGetLink(smallImage);
            watchImage.setSmallImage(smallImage);
        }
        imageDao.save(watchImage);
    }

    @Override
    public void deleteImage(WatchImage image) {
        imageDao.delete(image);
        deleteImageFromDisk(image.getBigImage());
        deleteImageFromDisk(image.getSmallImage());
    }

    @Override
    public String saveImageAndGetLink(String base64) throws IOException {
        if (base64.contains(BASE64_STRING)){
            String imageDataBytes = base64.substring(base64.indexOf(",")+1);
            String extension = getExtension(base64);
            byte[] btDataFile = new sun.misc.BASE64Decoder().decodeBuffer(imageDataBytes);
            String fileName = UUID.randomUUID().toString()+"."+extension;
            String imageFullPath = imagePath+fileName;
            saveImageFile(btDataFile,imageFullPath);
            return fileName;
        }
        return  base64;
    }

    @Override
    public List<WatchImage> getWatchImages(Watch watch) {
        return imageDao.getWatchImages(watch);
    }

    private void saveImageFile(byte[] aBytes, String aFileName) throws IOException {
        Path path = Paths.get(aFileName);
        Files.createDirectories(path.getParent());
        Files.write(path, aBytes);
    }

    private String getExtension(String base64) {
        int start = base64.indexOf("/")+1;
        int end = base64.indexOf(";");
        String substring = base64.substring(start, end);
        if ("png".equals(substring)){
            return "png";
        }
        return "jpg";
    }

    private void deleteImageFromDisk(String path){
        if (!path.contains("http")){
            File file = new File(path);
            if(file.exists()){
                file.delete();
            }
        }
    }

}
