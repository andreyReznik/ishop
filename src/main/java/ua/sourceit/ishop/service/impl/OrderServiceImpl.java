package ua.sourceit.ishop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.sourceit.ishop.dao.OrderDao;
import ua.sourceit.ishop.dao.OrderProductDao;
import ua.sourceit.ishop.entity.Order;
import ua.sourceit.ishop.model.Cart;
import ua.sourceit.ishop.service.EmailService;
import ua.sourceit.ishop.service.OrderService;

/**
 * @author: areznik
 */
@Service("orderService")
@Transactional(readOnly = true)
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private OrderProductDao orderProductDao;

    @Autowired
    private EmailService emailService;

    @Override
    @Transactional()
    public int createOrder(Cart cart) {
        Order order = new Order();
        order.setOrderProducts(cart.getOrderProducts());
        order.setUserId(cart.getUser().getId());
        int orderNum = orderDao.save(order);
        orderProductDao.save(order);
        emailService.sendOrderAsync(order,cart.getUser().getEmail());
        return orderNum;
    }
}
