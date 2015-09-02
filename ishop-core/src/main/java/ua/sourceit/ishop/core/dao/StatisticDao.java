package ua.sourceit.ishop.core.dao;

import java.util.Date;
import java.util.Set;

/**
 * Operations with statistic
 * @author: areznik
 */

public interface StatisticDao {
    /**
     * Save client ip for date
     * @param date visiting date
     * @param ip   client ip
     */
    void  saveIp(Date date, String ip);

    /**
     * save client url
     * @param date  visiting date
     * @param ip    client ip
     * @param url   visited url
     */
    void  saveUrl(Date date, String ip, String url);

    /**
     * Increment resource visiting count
     * @param date  visiting date
     * @param ip    client ip
     * @param url   visited url
     */
    void  incUrlVisitingCount(Date date, String ip, String url);

    /**
     * Get clients ip for date
     * @param date  visiting date
     * @return  set of clients ip
     */
    Set<String>  getClientIpSet(Date date);

    /**
     * Get clients urls for date
     * @param date  visiting date
     * @param ip   client ip
     * @return    set of visited urls
     */
    Set<String>  getClientUrlSet(Date date, String ip);


    /**
     * Get url visiting count
     * @param date  visiting date
     * @param ip    client ip
     * @param url   visited url
     * @return  visited count
     */
    int getUrlVisitingCount(Date date, String ip,String url);

}
