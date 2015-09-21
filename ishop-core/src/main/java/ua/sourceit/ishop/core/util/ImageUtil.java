package ua.sourceit.ishop.core.util;

import java.io.IOException;
import java.util.UUID;

/**
 * Operations with image
 * @author: areznik
 */

public class ImageUtil {


    public static String getImageExtension(String base64str) {
        int start = base64str.indexOf("/")+1;
        int end = base64str.indexOf(";");
        String substring = base64str.substring(start, end);
        if ("png".equals(substring)){
            return "png";
        }
        return "jpg";
    }

    public static byte[] getImageBytes(String base64Img) throws IOException {
        String imageDataBytes = base64Img.substring(base64Img.indexOf(",")+1);
       return   new sun.misc.BASE64Decoder().decodeBuffer(imageDataBytes);

    }

    public static String getFileName(String extension){
        return  UUID.randomUUID().toString()+"."+extension;
    }
}
