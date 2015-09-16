package ua.sourceit.ishop.core.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionSynchronizationAdapter;
import org.springframework.transaction.support.TransactionSynchronizationManager;
import ua.sourceit.ishop.core.dao.OrderDao;
import ua.sourceit.ishop.core.dao.OrderProductDao;
import ua.sourceit.ishop.core.dao.UserDao;
import ua.sourceit.ishop.core.entity.Order;
import ua.sourceit.ishop.core.entity.User;
import ua.sourceit.ishop.core.model.Cart;
import ua.sourceit.ishop.core.service.EmailService;
import ua.sourceit.ishop.core.service.OrderService;

/**
 * @author: areznik
 */
@Service("orderService")
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private OrderProductDao orderProductDao;

    @Autowired
    private EmailService emailService;

    @Override
    @Transactional()
    public int createOrder(final Cart cart, final User user) {
        final Order order = new Order();
        order.setOrderProducts(cart.getOrderProducts());
        order.setUserId(user.getId());
        int orderNum = orderDao.save(order);
        orderProductDao.save(order);
        TransactionSynchronizationManager.registerSynchronization(new TransactionSynchronizationAdapter() {
            @Override
            public void afterCommit() {
                emailService.sendOrderAsync(order,user);
            }
        });
        return orderNum;
    }
}
