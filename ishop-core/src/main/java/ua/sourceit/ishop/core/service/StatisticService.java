package ua.sourceit.ishop.core.service;

import ua.sourceit.ishop.core.model.statistic.VisitedResource;

import java.util.Date;
import java.util.Set;

/**
 * Save and get user visiting statistic data
 * @author: areznik
 */

public interface StatisticService {

    void saveUserVisitedData(Date date, String ip, String url );

    Set<VisitedResource> getVisitingStatistic(Date date);
}
