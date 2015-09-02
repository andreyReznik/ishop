package ua.sourceit.ishop.core.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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
    public int createOrder(Cart cart, User user) {
        Order order = new Order();
        order.setOrderProducts(cart.getOrderProducts());
        order.setUserId(user.getId());
        int orderNum = orderDao.save(order);
        orderProductDao.save(order);
        emailService.sendOrderAsync(order,user);
        return orderNum;
    }
}
