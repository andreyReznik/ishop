package ua.sourceit.ishop.core.service;

import ua.sourceit.ishop.core.model.statistic.VisitedItem;
import ua.sourceit.ishop.core.model.statistic.VisitedResource;

import java.util.Date;
import java.util.Set;

/**
 * Save and get user visiting statistic data
 * @author: areznik
 */

public interface StatisticService {

    /**
     * save user visiting action
     * @param visitedItem
     */
    void saveUserVisitedDataAsync(VisitedItem visitedItem);

    /**
     * Get user visiting resources
     * @param date - date for statistic
     * @return
     */
    Set<VisitedResource> getVisitingStatistic(Date date);
}
