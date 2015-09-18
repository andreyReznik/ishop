package ua.sourceit.ishop.core.service.impl;

import org.junit.Test;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.transaction.support.TransactionSynchronization;
import org.springframework.transaction.support.TransactionSynchronizationManager;
import ua.sourceit.ishop.core.dao.OrderDao;
import ua.sourceit.ishop.core.dao.OrderProductDao;
import ua.sourceit.ishop.core.dao.impl.hibernate.OrderDaoImpl;
import ua.sourceit.ishop.core.dao.impl.hibernate.OrderProductDaoImpl;
import ua.sourceit.ishop.core.entity.Order;
import ua.sourceit.ishop.core.entity.User;
import ua.sourceit.ishop.core.entity.Watch;
import ua.sourceit.ishop.core.exception.CartIsEmptyException;
import ua.sourceit.ishop.core.model.Cart;
import ua.sourceit.ishop.core.service.EmailService;
import ua.sourceit.ishop.core.service.OrderService;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.*;

/**
 * @author: areznik
 */
public class OrderServiceImplTest {

    @Test
    public void testCreateOrderWhenCartIsEmpty() throws Exception {
        OrderService orderService = new OrderServiceImpl();
        try{
            orderService.createOrder(new Cart(),new User());
            fail("CartIsEmptyException must be thrown!");
        } catch (CartIsEmptyException ex){
            assertEquals(ex.getMessage(),OrderServiceImpl.CART_IS_EMPTY_TEXT);
        }
    }

    @Test
    public void testCreateOrder() throws Exception {
        OrderService orderService = new OrderServiceImpl();

        Watch watch = new Watch();
        watch.setId(4590);

        Cart cart = new Cart();
        cart.addWatch(watch,1);

        User user = new User();
        user.setId(35);

        Order order = new Order();
        order.setOrderProducts(cart.getOrderProducts());
        order.setUserId(user.getId());

        OrderDao orderDaoMock = mock(OrderDaoImpl.class);
        OrderProductDao orderProductDaoMock = mock(OrderProductDaoImpl.class);
        EmailService emailServiceMock = mock(EmailServiceImpl.class);
        ReflectionTestUtils.setField(orderService, "orderDao", orderDaoMock);
        ReflectionTestUtils.setField(orderService, "orderProductDao", orderProductDaoMock);
        ReflectionTestUtils.setField(orderService, "emailService", emailServiceMock);
        TransactionSynchronizationManager.initSynchronization();

        orderService.createOrder(cart,user);

        verify(orderDaoMock, times(1)).save(order);
        verify(orderProductDaoMock, times(1)).save(order);

        TransactionSynchronization transactionSynchronization = TransactionSynchronizationManager.getSynchronizations().get(0);
        transactionSynchronization.afterCommit();
        TransactionSynchronizationManager.clear();

        verify(emailServiceMock, times(1)).sendOrderAsync(order, user);
    }
}
