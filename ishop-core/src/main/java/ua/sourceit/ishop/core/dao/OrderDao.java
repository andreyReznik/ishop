package ua.sourceit.ishop.core.dao;

import ua.sourceit.ishop.core.entity.Order;

/**
 * Dao for order operations
 * @author: areznik
 */

public interface OrderDao {

    /**
     * Save new order
     * @param order for saving
     * @return  saved order ID
     */
    public int save(Order order);

}
