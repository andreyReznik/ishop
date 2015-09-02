package ua.sourceit.ishop.core.service;

import ua.sourceit.ishop.core.entity.User;
import ua.sourceit.ishop.core.model.Cart;

/**
 * Operations with order
 * @author: areznik
 */

public interface OrderService {

    /**
     * Create new order
     *
     * @param cart  user cart with products
     * @param user  User who make order
     * @return   order id
     */
    int createOrder(Cart cart, User user);
}
