package ua.sourceit.ishop.core.service.impl;

import org.junit.Test;
import org.mockito.internal.util.collections.Sets;
import org.springframework.test.util.ReflectionTestUtils;
import ua.sourceit.ishop.core.dao.StatisticDao;
import ua.sourceit.ishop.core.model.statistic.VisitedResource;
import ua.sourceit.ishop.core.service.StatisticService;

import java.util.Date;
import java.util.Set;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

/**
 * @author: areznik
 */

public class StatisticServiceImplTest {

    private StatisticDao statisticDaoMock;
    private StatisticService statisticService;

    @Test
    public void testSaveUserVisitedDataWhenParamsValid() throws Exception {
        initMocks();
        Date date = new Date();
        String ip = "52.17.236.173";
        String url = "product/order/create";

        statisticService.saveUserVisitedData(date,ip,url);

        verify(statisticDaoMock,times(1)).saveIp(date, ip);
        verify(statisticDaoMock,times(1)).saveUrl(date, ip, url);
        verify(statisticDaoMock,times(1)).incUrlVisitingCount(date, ip, url);
    }

    @Test
    public void testSaveUserVisitedDataWhenDateNotValid() throws Exception {
        initMocks();
        Date date = null;
        String ip = "192.168.0.4";
        String url = "/all";

        statisticService.saveUserVisitedData(date,ip,url);

        verify(statisticDaoMock,times(0)).saveIp(any(Date.class), anyString());
        verify(statisticDaoMock,times(0)).saveUrl(any(Date.class), anyString(), anyString());
        verify(statisticDaoMock,times(0)).incUrlVisitingCount(any(Date.class), anyString(),anyString());
    }

    @Test
    public void testSaveUserVisitedDataWhenIpNotValid() throws Exception {
        initMocks();
        Date date = new Date();
        String ip = "";
        String url = "/all";

        statisticService.saveUserVisitedData(date,ip,url);

        verify(statisticDaoMock,times(0)).saveIp(any(Date.class), anyString());
        verify(statisticDaoMock,times(0)).saveUrl(any(Date.class), anyString(), anyString());
        verify(statisticDaoMock,times(0)).incUrlVisitingCount(any(Date.class), anyString(),anyString());
    }

    @Test
    public void testSaveUserVisitedDataWhenUrlNotValid() throws Exception {
        initMocks();
        Date date = new Date();
        String ip = "192.168.0.4";
        String url = null;

        statisticService.saveUserVisitedData(date,ip,url);

        verify(statisticDaoMock,times(0)).saveIp(any(Date.class), anyString());
        verify(statisticDaoMock,times(0)).saveUrl(any(Date.class), anyString(), anyString());
        verify(statisticDaoMock,times(0)).incUrlVisitingCount(any(Date.class), anyString(),anyString());
    }

    @Test
    public void testGetVisitingStatistic() throws Exception {
        initMocks();
        Date date = new Date();
        String ip = "52.17.236.173";
        String url = "product/all";
        int visitCount = 10;
        Set<String> ipSet =  Sets.newSet(ip);
        Set<String> urlSet =  Sets.newSet(url);
        VisitedResource visitedResource = new VisitedResource(ip,url,visitCount);

        when(statisticDaoMock.getClientIpSet(date)).thenReturn(ipSet);
        when(statisticDaoMock.getClientUrlSet(date, ip)).thenReturn(urlSet);
        when(statisticDaoMock.getUrlVisitingCount(date,ip,url)).thenReturn(visitCount);

        Set<VisitedResource> visitingStatistic = statisticService.getVisitingStatistic(date);
        assertEquals(visitingStatistic.size(),1);
        assertEquals(visitingStatistic.iterator().next(),visitedResource);
    }

    private void initMocks() {
        statisticDaoMock = mock(StatisticDao.class);
        statisticService = new StatisticServiceImpl();
        ReflectionTestUtils.setField(statisticService,"statisticDao",statisticDaoMock);
    }
}
