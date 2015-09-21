package ua.sourceit.ishop.core.service.impl;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.core.dao.StatisticDao;
import ua.sourceit.ishop.core.model.statistic.VisitedItem;
import ua.sourceit.ishop.core.model.statistic.VisitedResource;
import ua.sourceit.ishop.core.service.StatisticService;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.*;

import static org.apache.log4j.Logger.getLogger;

/**
 * Statistic service implementing
 * @author: areznik
 */
@Service("statisticService")
public class StatisticServiceImpl implements StatisticService {

    private static final Logger LOGGER = getLogger(StatisticServiceImpl.class);

    private final ExecutorService executorService = new ThreadPoolExecutor(10, 50,
            60L, TimeUnit.SECONDS,
            new SynchronousQueue<Runnable>(), Executors.defaultThreadFactory(), new RejectedExecutionHandler() {
        @Override
        public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {
            if (!executor.isShutdown()){
                LOGGER.error("Could not save statistic object!");
            }
        }
    });

    @Autowired
    private StatisticDao statisticDao;

    @Override
    public void saveUserVisitedDataAsync(final VisitedItem visitedItem) {
        if (visitedItem.isValid()){
           try{
                executorService.submit(new Runnable() {
                   @Override
                   public void run() {
                       statisticDao.saveUserVisiting(visitedItem);
                   }
               });
           } catch (Exception ex){
               LOGGER.error("saveUserVisitedDataAsync error "+ex.getMessage(),ex);
           }
        } else{
           LOGGER.error("VisitedItem is not valid");
        }
    }

    @Override
    public Set<VisitedResource> getVisitingStatistic(Date date) {
        try {
            return statisticDao.getVisitingStatistic(date);
        } catch (Exception ex){
            LOGGER.error("getVisitingStatistic error "+ex.getMessage(),ex);
            return null;
        }
    }
}
