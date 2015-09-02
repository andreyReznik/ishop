package ua.sourceit.ishop.web.util;

import javax.servlet.http.HttpServletRequest;

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
        if ((param == null) || ("".equals(param))) {
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
}
