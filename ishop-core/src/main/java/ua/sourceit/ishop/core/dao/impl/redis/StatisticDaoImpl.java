package ua.sourceit.ishop.core.dao.impl.redis;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import redis.clients.jedis.Jedis;
import ua.sourceit.ishop.core.component.RedisSource;
import ua.sourceit.ishop.core.dao.StatisticDao;
import ua.sourceit.ishop.core.util.DateUtil;

import java.util.Date;
import java.util.Set;

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
    public void saveIp(Date date, String ip) {
        try (Jedis jedis = redisSource.getJedis();) {
            jedis.sadd(getDateKey(date), ip);
        }
    }

    @Override
    public void saveUrl(Date date, String ip, String url) {
        try (Jedis jedis = redisSource.getJedis();) {
            jedis.sadd(getDateIpKey(date,ip), url);
        }
    }

    @Override
    public void incUrlVisitingCount(Date date, String ip, String url) {
        try (Jedis jedis = redisSource.getJedis();) {
            jedis.incr(getDateIpUrlKey(date,ip,url));
        }
    }

    @Override
    public Set<String> getClientIpSet(Date date) {
        try (Jedis jedis = redisSource.getJedis();) {
            return jedis.smembers(getDateKey(date));
        }
    }

    @Override
    public Set<String> getClientUrlSet(Date date, String ip) {
        try (Jedis jedis = redisSource.getJedis();) {
            return  jedis.smembers(getDateIpKey(date,ip));
        }
    }

    @Override
    public int getUrlVisitingCount(Date date, String ip, String url) {
        try (Jedis jedis = redisSource.getJedis();) {
            return  Integer.parseInt(jedis.get(getDateIpUrlKey(date,ip,url)));
        }
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
