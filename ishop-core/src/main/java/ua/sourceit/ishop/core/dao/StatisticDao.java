package ua.sourceit.ishop.core.dao;

import ua.sourceit.ishop.core.model.statistic.VisitedItem;
import ua.sourceit.ishop.core.model.statistic.VisitedResource;

import java.util.Date;
import java.util.Set;

/**
 * Operations with statistic
 * @author: areznik
 */

public interface StatisticDao {

    /**
     * Save visiting action
     * @param visitedItem
     */
    void saveUserVisiting(VisitedItem visitedItem);

    /**
     *  get user visited resources
     * @param date
     * @return
     */
    Set<VisitedResource> getVisitingStatistic(Date date);

}
