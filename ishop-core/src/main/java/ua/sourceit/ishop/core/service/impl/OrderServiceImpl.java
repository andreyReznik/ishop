package ua.sourceit.ishop.core.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionSynchronizationAdapter;
import org.springframework.transaction.support.TransactionSynchronizationManager;
import ua.sourceit.ishop.core.dao.OrderDao;
import ua.sourceit.ishop.core.dao.OrderProductDao;
import ua.sourceit.ishop.core.entity.Order;
import ua.sourceit.ishop.core.entity.OrderProduct;
import ua.sourceit.ishop.core.entity.User;
import ua.sourceit.ishop.core.exception.CartIsEmptyException;
import ua.sourceit.ishop.core.model.Cart;
import ua.sourceit.ishop.core.service.EmailService;
import ua.sourceit.ishop.core.service.OrderService;

import java.util.List;

/**
 * @author: areznik
 */
@Service("orderService")
public class OrderServiceImpl implements OrderService{


    public static final String CART_IS_EMPTY_TEXT = "Your cart is empty!";

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private OrderProductDao orderProductDao;

    @Autowired
    private EmailService emailService;

    @Override
    @Transactional()
    public int createOrder(final Cart cart, final User user) {
        List<OrderProduct> orderProducts = cart.getOrderProducts();
        if (orderProducts.size() == 0){
            throw new CartIsEmptyException(CART_IS_EMPTY_TEXT);
        }
        final Order order = new Order();
        order.setOrderProducts(orderProducts);
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
