package ua.sourceit.ishop.core.util;

import org.junit.Test;

import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.Assert.assertEquals;

/**
 * @author: areznik
 */

public class DateUtilTest {

    @Test
    public void testGetDateAsYyyyMMdd() throws Exception {
        SimpleDateFormat simpleDateFormat		= new SimpleDateFormat(
                "dd.MM.yyyy HH:mm:ss");
        Date date = simpleDateFormat.parse("01.09.2015 10:48:12");
        String dateStr = DateUtil.getDateAsYyyyMMdd(date);
        assertEquals(dateStr,"20150901");
    }
}
