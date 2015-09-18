package ua.sourceit.ishop.core.service.impl;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.core.dao.StatisticDao;
import ua.sourceit.ishop.core.model.statistic.VisitedResource;
import ua.sourceit.ishop.core.service.StatisticService;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import static org.apache.log4j.Logger.getLogger;

/**
 * @author: areznik
 */
@Service("statisticService")
public class StatisticServiceImpl implements StatisticService {

    private static final Logger LOGGER = getLogger(StatisticServiceImpl.class);

    @Autowired
    private StatisticDao statisticDao;


    @Override
    public void saveUserVisitedData(Date date, String ip, String url) {
        try{
            checkParameters(date, ip, url);
            statisticDao.saveIp(date,ip);
            statisticDao.saveUrl(date,ip,url);
            statisticDao.incUrlVisitingCount(date,ip,url);
        } catch (Exception ex){
            LOGGER.error("saveUserVisitedData error "+ex.getMessage());
        }
    }

    @Override
    public Set<VisitedResource> getVisitingStatistic(Date date) {
        Set<VisitedResource> visitedResources = new HashSet<>();
        try{
            Set<String> ipSet = statisticDao.getClientIpSet(date);
            for(String ip : ipSet){
                Set<String> urlSet = statisticDao.getClientUrlSet(date,ip);
                for (String url : urlSet){
                    int visitingCount = statisticDao.getUrlVisitingCount(date, ip, url);
                    visitedResources.add(new VisitedResource(ip, url, visitingCount));
                }
            }
        } catch (Exception ex){
            LOGGER.error("getVisitingStatistic error "+ex.getMessage());
        }
        return visitedResources;
    }

    private void checkParameters(Date date, String ip, String url) {
        if (date == null)
            throw new NullPointerException("date is null!");

        if (StringUtils.isBlank(ip)){
            throw new NullPointerException("ip is null or empty!");
        }

        if (StringUtils.isBlank(url)){
            throw new NullPointerException("url is null or empty!");
        }
    }
}
