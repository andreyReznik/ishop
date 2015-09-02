package ua.sourceit.ishop.core.component;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import static org.apache.log4j.Logger.getLogger;

/**
 * @author: areznik
 */
@Component("redisSource")
public class RedisConnectionPool implements RedisSource  {

    private static final Logger LOGGER = getLogger(RedisConnectionPool.class);

    @Value("${redis.ip}")
    private String redisIp;

    @Value("${redis.port}")
    private int redisPort;

    private JedisPool pool;

    @PostConstruct
    public void init(){
       pool  = new JedisPool(new JedisPoolConfig(), redisIp,redisPort);
       try(Jedis jedis = pool.getResource();){
            jedis.select(0);
       }
       LOGGER.info("Redis connection pool initialized");
    }


    @PreDestroy
    public void destroy(){
        pool.close();
    }


    @Override
    public Jedis getJedis() {
        return pool.getResource();
    }
}
