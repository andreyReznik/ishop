package ua.sourceit.ishop.model;

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

    public void addWatch(Watch watch, int count) {
        if (watchList.containsKey(watch)) {
            Integer current = watchList.get(watch);
            watchList.put(watch, current + count);
        } else {
            watchList.put(watch, count);
        }
    }
}
