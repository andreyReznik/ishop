package ua.sourceit.ishop.core.service;

import ua.sourceit.ishop.core.entity.Order;
import ua.sourceit.ishop.core.entity.User;

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
