package ua.sourceit.ishop.core.service.impl;

import org.junit.Before;
import org.junit.Test;
import org.springframework.test.util.ReflectionTestUtils;
import ua.sourceit.ishop.core.dao.StatisticDao;
import ua.sourceit.ishop.core.model.statistic.VisitedItem;
import ua.sourceit.ishop.core.model.statistic.VisitedResource;
import ua.sourceit.ishop.core.model.statistic.VisitedUrl;
import ua.sourceit.ishop.core.service.StatisticService;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

/**
 * @author: areznik
 */

public class StatisticServiceImplTest {

    private StatisticDao statisticDaoMock;
    private StatisticService statisticService;

    @Before
    public void initMocks() {
        statisticDaoMock = mock(StatisticDao.class);
        statisticService = new StatisticServiceImpl();
        ReflectionTestUtils.setField(statisticService,"statisticDao",statisticDaoMock);
    }

    @Test
    public void testSaveUserVisitedDataWhenParamsValid() throws Exception {

        String ip = "52.17.236.173";
        String url = "product/order/create";

        VisitedItem visitedItem = new VisitedItem(ip, url);
        statisticService.saveUserVisitedDataAsync(visitedItem);

        Field field = statisticService.getClass().getDeclaredField("executorService");
        field.setAccessible(true);
        ExecutorService executorService = (ExecutorService) field.get(statisticService);
        executorService.awaitTermination(1L, TimeUnit.SECONDS);
        verify(statisticDaoMock, times(1)).saveUserVisiting(visitedItem);
    }

    @Test
    public void testSaveUserVisitedDataWhenIpNotValid() throws Exception {

        String ip = "";
        String url = "/all";
        VisitedItem visitedItem = new VisitedItem(ip, url);

        statisticService.saveUserVisitedDataAsync(visitedItem);

        verify(statisticDaoMock,times(0)).saveUserVisiting(visitedItem);
    }

    @Test
    public void testSaveUserVisitedDataWhenUrlNotValid() throws Exception {

        String ip = "192.168.0.4";
        String url = null;
        VisitedItem visitedItem = new VisitedItem(ip, url);

        statisticService.saveUserVisitedDataAsync(visitedItem);

        verify(statisticDaoMock,times(0)).saveUserVisiting(visitedItem);
    }

    @Test
    public void testGetVisitingStatistic() throws Exception {

        Date date = new Date();
        String ip = "52.17.236.173";
        String url = "product/all";
        int visitCount = 10;
        VisitedResource resource = new VisitedResource(ip, Arrays.asList(new VisitedUrl(url,visitCount)));
        Set<VisitedResource> visitedResource =
                new HashSet<VisitedResource>(Arrays.asList(resource));
        when(statisticDaoMock.getVisitingStatistic(date)).thenReturn(visitedResource);

        Set<VisitedResource> visitingStatistic = statisticService.getVisitingStatistic(date);

        assertEquals(visitingStatistic.size(),1);
        assertEquals(visitingStatistic.iterator().next(),resource);
    }

}
