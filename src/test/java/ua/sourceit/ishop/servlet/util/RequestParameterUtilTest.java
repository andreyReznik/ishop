package ua.sourceit.ishop.servlet.util;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * @author: areznik
 */

public class RequestParameterUtilTest {
    @Test
    public void testGetProductBoundsWithoutParameter() throws Exception {

        ProductsBound productBound = RequestParameterUtil.getProductBounds("");
        ProductsBound productsBoundExpected = new ProductsBound(0, 20);
        assertEquals(productBound, productsBoundExpected);

    }

    @Test
    public void testGetProductBoundsWithParameter2() throws Exception {

        ProductsBound productBound = RequestParameterUtil.getProductBounds("2");
        ProductsBound productsBoundExpected = new ProductsBound(21, 40);
        assertEquals(productBound, productsBoundExpected);

    }

    @Test
    public void testGetProductBoundsWithParameter3() throws Exception {

        ProductsBound productBound = RequestParameterUtil.getProductBounds("3");
        ProductsBound productsBoundExpected = new ProductsBound(41, 60);
        assertEquals(productBound, productsBoundExpected);

    }

    @Test
    public void testGetProductBoundsWithParameter4() throws Exception {

        ProductsBound productBound = RequestParameterUtil.getProductBounds("4");
        ProductsBound productsBoundExpected = new ProductsBound(61, 80);
        assertEquals(productBound, productsBoundExpected);

    }

    @Test
    public void testGetNextPageFor0() throws Exception {
        int nextPage = RequestParameterUtil.getNextPage("0");
        assertEquals(nextPage, 2);
    }

    @Test
    public void testGetNextPageFor1() throws Exception {
        int nextPage = RequestParameterUtil.getNextPage("1");
        assertEquals(nextPage, 2);
    }

    @Test
    public void testGetNextPageFor2() throws Exception {
        int nextPage = RequestParameterUtil.getNextPage("2");
        assertEquals(nextPage, 3);
    }

    @Test
    public void testGetNextPageFor3() throws Exception {
        int nextPage = RequestParameterUtil.getNextPage("3");
        assertEquals(nextPage, 4);
    }

    @Test
    public void testGetNextPageFor4() throws Exception {
        int nextPage = RequestParameterUtil.getNextPage("4");
        assertEquals(nextPage, 0);
    }
}
