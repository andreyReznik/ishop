package ua.sourceit.ishop.service;

import ua.sourceit.ishop.entity.Order;

/**
 * @author: areznik
 */

public interface EmailService {

    public void sendOrderAsync(Order order, String email);
}
