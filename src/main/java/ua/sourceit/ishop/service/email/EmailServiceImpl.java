package ua.sourceit.ishop.service.email;

import org.apache.log4j.Logger;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.entity.Order;
import ua.sourceit.ishop.service.VelocityTemplateService;

import javax.inject.Inject;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

/**
 * @author: areznik
 */
@Service("emailService")
public class EmailServiceImpl implements EmailService{

    private static final Logger LOGGER = Logger.getLogger(EmailServiceImpl.class);

    @Inject
    private VelocityTemplateService velocityTemplateService;

    @Inject
    private JavaMailSender mailSender;

    @Override
    public void SendOrderAsync(final Order order, final String email) {

        new Thread(new Runnable() {
            @Override
            public void run() {
                MimeMessage message = mailSender.createMimeMessage();
                try {
                    MimeMessageHelper helper = new MimeMessageHelper(message, true);
                    helper.setFrom("a.reznik.developer@gmail.com");
                    helper.setTo(email.trim());
                    helper.setSubject("ishop");
                    helper.setText(velocityTemplateService.getEmailTemplate(order),true);
                    mailSender.send(message);
                } catch (MessagingException e) {
                    LOGGER.error(e.getMessage());
                    throw new RuntimeException(e.getMessage(),e);
                }
            }
        }).start();
    }
}
