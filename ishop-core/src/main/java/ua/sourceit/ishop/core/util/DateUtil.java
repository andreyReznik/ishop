package ua.sourceit.ishop.core.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Convert date to string and conversely
 * @author: areznik
 */

public class DateUtil {

    private static final String STRING_DATE_FORMAT =  "yyyyMMdd";


    public static String getDateAsYyyyMMdd(Date date){
        if (date == null)
            return null;
        return new SimpleDateFormat(STRING_DATE_FORMAT).format(date);
    }

    public static Date getDateFromYyyyMMdd(String dateYyyyMMdd) throws ParseException {
        return new SimpleDateFormat(STRING_DATE_FORMAT).parse(dateYyyyMMdd);
    }

}
