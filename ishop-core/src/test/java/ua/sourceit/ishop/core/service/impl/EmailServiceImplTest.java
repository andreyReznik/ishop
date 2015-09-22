package ua.sourceit.ishop.core.service.impl;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.util.ReflectionTestUtils;
import ua.sourceit.ishop.core.entity.Order;
import ua.sourceit.ishop.core.entity.User;

import javax.mail.Message;
import javax.mail.internet.MimeMessage;
import java.lang.reflect.Field;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

/**
 * @author: areznik
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "/mail-bean.xml"})
public class EmailServiceImplTest {

    @Autowired
    private JavaMailSender mailSender;

    @Test
    public void testSendOrderAsync() throws Exception {
        EmailServiceImpl emailService = new EmailServiceImpl();
        JavaMailSender  mailSenderMock = mock(JavaMailSender.class);
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        when(mailSenderMock.createMimeMessage()).thenReturn(mimeMessage);
        ReflectionTestUtils.setField(emailService,"mailSender",mailSenderMock);

        Order order = new Order();
        order.setId(1201);
        User user = new User();
        user.setEmail("test@test.eu");
        Future<MimeMessageHelper> mimeMessageHelperFuture = emailService.sendOrderAsync(order, user);
        try{
            MimeMessageHelper mimeMessageHelper = mimeMessageHelperFuture.get(1L, TimeUnit.SECONDS);
            verify(mailSenderMock,times(1)).createMimeMessage();
            verify(mailSenderMock,times(1)).send(mimeMessage);
            String email = mimeMessageHelper.getMimeMessage().getRecipients(Message.RecipientType.TO)[0].toString();
            assertEquals(email,user.getEmail());
            String text = mimeMessageHelper.getMimeMultipart().getBodyPart(0).getContent().toString();
            assertEquals(text,EmailServiceImpl.YOUR_ORDER_NUM_TEXT + order.getId());
        }finally {
            emailService.destroy();
        }
    }

    @Test
    public void testDestroy() throws Exception {
        EmailServiceImpl emailService = new EmailServiceImpl();
        ExecutorService executorServiceMock = mock(ExecutorService.class);
        ReflectionTestUtils.setField(emailService,"executorService",executorServiceMock);

        emailService.destroy();

        verify(executorServiceMock).shutdown();
    }
}
