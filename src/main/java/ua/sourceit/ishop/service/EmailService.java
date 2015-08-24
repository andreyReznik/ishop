package ua.sourceit.ishop.service;

import ua.sourceit.ishop.entity.Order;
import ua.sourceit.ishop.entity.User;

/**
 * Operations with email
 * @author: areznik
 */

public interface EmailService {

    /**
     * Send user order by email
     * @param order user order
     * @param user  user who made order
     */
    void sendOrderAsync(Order order, User user);
}
