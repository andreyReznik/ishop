package ua.sourceit.ishop.core.component;

import redis.clients.jedis.Jedis;

/**
 * @author: areznik
 */

public interface RedisSource {

    Jedis getJedis();
}
