package ua.sourceit.ishop.service;

import ua.sourceit.ishop.model.Cart;

/**
 * @author: areznik
 */

public interface OrderService {

    public int createOrder(Cart cart);
}
