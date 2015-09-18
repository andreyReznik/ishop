package ua.sourceit.ishop.core.service.impl;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.core.entity.Order;
import ua.sourceit.ishop.core.entity.User;
import ua.sourceit.ishop.core.service.EmailService;

import javax.annotation.PreDestroy;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.concurrent.*;

/**
 * @author: areznik
 */
@Service("emailService")
public class EmailServiceImpl implements EmailService {

    private static final Logger LOGGER = Logger.getLogger(EmailServiceImpl.class);

    public static final String YOUR_ORDER_NUM_TEXT = "Your order num: ";

    private final ExecutorService executorService = new ThreadPoolExecutor(2, 5,
                                                    60L, TimeUnit.SECONDS,
                                                    new SynchronousQueue<Runnable>());

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public Future<MimeMessageHelper> sendOrderAsync(final Order order, final User user) {
        return executorService.submit(new Callable<MimeMessageHelper>() {
            @Override
            public MimeMessageHelper call() throws Exception {
                MimeMessage message = mailSender.createMimeMessage();
                try {
                    MimeMessageHelper helper = new MimeMessageHelper(message, true);
                    helper.setFrom("a.reznik.developer@gmail.com");
                    helper.setTo(user.getEmail());
                    helper.setSubject("ishop");
                    helper.setText(YOUR_ORDER_NUM_TEXT + order.getId(), false);
                    mailSender.send(message);
                    return helper;
                } catch (MessagingException e) {
                    LOGGER.error(e.getMessage());
                    throw new RuntimeException(e.getMessage(), e);
                }
            }
        } );
    }

    @PreDestroy
    public void destroy(){
        executorService.shutdown();
    }

}
