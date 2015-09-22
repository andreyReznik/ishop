package ua.sourceit.ishop.web.util;

import org.apache.commons.lang3.StringUtils;
import org.springframework.validation.BindingResult;

import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.ValidationException;

/**
 * Work with request parameters
 *
 * @author: areznik
 */

public class RequestUtil {


    /**
     * Get product bound for showing on page
     * @param param  page request param
     * @return  ProductsBound object
     */
    public static ProductsBound getProductBounds(String param) {
        int pageNum;
        if (StringUtils.isBlank(param)) {
            return new ProductsBound(0, 20);
        } else {
            pageNum = Integer.parseInt(param);
            switch (pageNum) {
                case 0:
                    return new ProductsBound(0, 20);
                case 1:
                    return new ProductsBound(0, 20);
                case 2:
                    return new ProductsBound(21, 40);
                case 3:
                    return new ProductsBound(41, 60);
                case 4:
                    return new ProductsBound(61, 80);
                default:
                    return new ProductsBound(0, 20);
            }
        }
    }

    /**
     * Get next page for watch pagination
     * @param param  current request page
     * @return   next page
     */
    public static int getNextPage(String param) {
        int intValue;
        try {
            intValue = Integer.parseInt(param);
        } catch (NumberFormatException ex) {
            return 2;
        }
        if ((param == null) || (intValue < 2)) {
            return 2;
        } else {
            int nextValue = intValue + 1;
            if (nextValue > 4){
                return 0;
            }
            return nextValue;
        }
    }

    public static String getClientIp(HttpServletRequest request){
        String ipAddress = request.getHeader(ApplicationConstant.REAL_IP_HEADER_NAME);
        if (ipAddress == null) {
            ipAddress = request.getRemoteAddr();
        }
        return ipAddress;
    }

    public static ProductsBound getProductBounds(String offset, String limit) {
        int offsetInt;
        int limitInt;
        try {
            offsetInt = Integer.valueOf(offset);
            limitInt = Integer.valueOf(limit);
        } catch (NumberFormatException ex){
            return null;
        }
        return new ProductsBound(offsetInt,limitInt);
    }

    public static void checkRequestParameters(BindingResult result) throws ValidationException {
        if (result.hasErrors()){
            throw new ValidationException("Bad request parameters!");
        }

    }
}
