package ua.sourceit.ishop.service;

import ua.sourceit.ishop.model.Cart;

/**
 * Operations with order
 * @author: areznik
 */

public interface OrderService {

    /**
     * Create new order
     * @param cart  user cart with products
     * @return   order id
     */
    int createOrder(Cart cart);
}
