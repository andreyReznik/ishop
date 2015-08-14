package ua.sourceit.ishop.service.email;

import ua.sourceit.ishop.entity.Order;

/**
 * @author: areznik
 */

public interface EmailService {

    public void SendOrderAsync(Order order, String email);
}
