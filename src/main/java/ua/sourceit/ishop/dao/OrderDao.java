package ua.sourceit.ishop.dao;

import ua.sourceit.ishop.entity.Order;

/**
 * operations with order entity
 * @author: areznik
 */

public interface OrderDao {

    public int save(Order order);

}
