package ua.sourceit.ishop.dao;

import ua.sourceit.ishop.entity.Order;

/**
 * Dao for orderProduct entity operations
 * @author: areznik
 */

public interface OrderProductDao {

    /**
     *  Save OrderProduct
     * @param order  Order which holds OrderProduct
     */
    public void save(Order order);

}
