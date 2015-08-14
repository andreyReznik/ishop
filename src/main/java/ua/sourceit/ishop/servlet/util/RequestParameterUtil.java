package ua.sourceit.ishop.servlet.util;

/**
 * Work with request parameters
 *
 * @author: areznik
 */

public class RequestParameterUtil {


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

    public static int getNextPage(String param) {
        int intValue;
        try {
            intValue = Integer.parseInt(param);
        } catch (NumberFormatException ex) {
            return 2;
        }

        int pageNum = 0;
        if ((param == null) || (intValue < 2)) {
            return 2;
        } else {

            int nextValue = intValue + 1;
            if (nextValue > 4)
                return 0;
            else return nextValue;


        }

    }

}
