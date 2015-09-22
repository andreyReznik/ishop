package ua.sourceit.ishop.core.service;

import org.springframework.mail.javamail.MimeMessageHelper;
import ua.sourceit.ishop.core.entity.Order;
import ua.sourceit.ishop.core.entity.User;

import java.util.concurrent.Future;

/**
 * Operations with email
 * @author: areznik
 */

public interface EmailService {

    /**
     * Send user order by email
     * @param order user order
     * @param user  user who made order
     * @return Future<MimeMessageHelper>
     */
    Future<MimeMessageHelper> sendOrderAsync(Order order, User user);
}
