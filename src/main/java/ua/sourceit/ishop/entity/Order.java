package ua.sourceit.ishop.entity;

import ua.sourceit.ishop.controller.util.PriceUtil;

import java.util.HashMap;
import java.util.Map;

/**
 * Product orders
 *
 * @author: areznik
 */

public class Order {

    private int id;
    private User user;
    private Map<Watch, Integer> watchList;

    public Order() {
        watchList = new HashMap<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Map<Watch, Integer> getWatchList() {
        return watchList;
    }

    public void setWatchList(Map<Watch, Integer> watchList) {
        this.watchList = watchList;
    }

    public float calcTotalPrice(){
        return PriceUtil.calcTotalPrice(watchList);
    }
}
