package ua.sourceit.ishop.core.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author: areznik
 */

public class DateUtil {

    private static final SimpleDateFormat
            DATE_STRING_FORMAT	= new SimpleDateFormat("yyyyMMdd");


    public static String getDateAsYyyyMMdd(Date date){
        if (date == null)
            return null;
        return DATE_STRING_FORMAT.format(date);
    }

    public static Date getDateFromYyyyMMdd(String dateYyyyMMdd) throws ParseException {
        return DATE_STRING_FORMAT.parse(dateYyyyMMdd);
    }

}
