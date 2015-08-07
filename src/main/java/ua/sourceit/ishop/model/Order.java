package ua.sourceit.ishop.model;

import java.util.Map;

/**
 * Product orders
 *
 * @author: areznik
 */

public class Order  {

    private int id;
    private User user;
    private Map<Watch, Integer> watchList;

    public Order() {
    }
}
