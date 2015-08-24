package ua.sourceit.ishop.service.impl;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.entity.Order;
import ua.sourceit.ishop.entity.User;
import ua.sourceit.ishop.service.EmailService;

import javax.annotation.PreDestroy;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.SynchronousQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * @author: areznik
 */
@Service("emailService")
public class EmailServiceImpl implements EmailService {

    private static final Logger LOGGER = Logger.getLogger(EmailServiceImpl.class);

    private final ExecutorService executorService = new ThreadPoolExecutor(2, 5,
                                                    60L, TimeUnit.SECONDS,
                                                    new SynchronousQueue<Runnable>());

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void sendOrderAsync(final Order order, final User user) {
        executorService.submit(new Runnable() {
            @Override
            public void run() {
                MimeMessage message = mailSender.createMimeMessage();
                try {
                    MimeMessageHelper helper = new MimeMessageHelper(message, true);
                    helper.setFrom("a.reznik.developer@gmail.com");
                    helper.setTo(user.getEmail());
                    helper.setSubject("ishop");
                    helper.setText("Your order num: "+order.getId(), false);
                    mailSender.send(message);
                } catch (MessagingException e) {
                    LOGGER.error(e.getMessage());
                    throw new RuntimeException(e.getMessage(), e);
                }
            }
        });
    }

    @PreDestroy
    public void destroy(){
        executorService.shutdown();
    }

}
