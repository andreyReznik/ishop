package ua.sourceit.ishop.core.dao.impl.redis;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import redis.clients.jedis.Jedis;
import ua.sourceit.ishop.core.component.RedisSource;
import ua.sourceit.ishop.core.dao.StatisticDao;
import ua.sourceit.ishop.core.model.statistic.VisitedItem;
import ua.sourceit.ishop.core.model.statistic.VisitedResource;
import ua.sourceit.ishop.core.model.statistic.VisitedUrl;
import ua.sourceit.ishop.core.util.DateUtil;

import java.util.*;

import static org.apache.log4j.Logger.getLogger;

/**
 * @author: areznik
 */

@Repository("statisticDao")
public class StatisticDaoImpl implements StatisticDao {

    private static final Logger LOGGER = getLogger(StatisticDaoImpl.class);

    private static final String KEY_SEPARATOR = ":";

    @Autowired
    private RedisSource redisSource;

    @Override
    public void saveUserVisiting(VisitedItem visitedItem) {
        Date date = new Date();
        try (Jedis jedis = redisSource.getJedis();) {
            jedis.sadd(getDateKey(date), visitedItem.getIp());
            jedis.sadd(getDateIpKey(date,visitedItem.getIp()), visitedItem.getUrl());
            jedis.incr(getDateIpUrlKey(date,visitedItem.getIp(),visitedItem.getUrl()));
        }
    }

    @Override
    public Set<VisitedResource> getVisitingStatistic(Date date) {
        Set<VisitedResource> visitedResources = new HashSet<>();
        try (Jedis jedis = redisSource.getJedis();) {
            Set<String> ipSet = jedis.smembers(getDateKey(date));
            for(String ip : ipSet){
                Set<String> urlSet = jedis.smembers(getDateIpKey(date, ip));
                List<VisitedUrl>  visitedUrls = new LinkedList<>();
                for (String url : urlSet){
                    int visitingCount = Integer.parseInt(jedis.get(getDateIpUrlKey(date, ip, url)));
                    visitedUrls.add(new VisitedUrl(url,visitingCount));

                }
                visitedResources.add(new VisitedResource(ip,visitedUrls));
            }
        }
        return visitedResources;
    }

    private String getDateKey(Date date){
       return DateUtil.getDateAsYyyyMMdd(date);
    }

    private String getDateIpKey(Date date, String ip){
        return new StringBuilder().
                append(getDateKey(date)).
                append(KEY_SEPARATOR).
                append(ip).toString();
    }

    private String getDateIpUrlKey(Date date, String ip, String url){
        return new StringBuilder().
                append(getDateKey(date)).
                append(KEY_SEPARATOR).
                append(ip).
                append(KEY_SEPARATOR).
                append(url).toString();
    }
}
