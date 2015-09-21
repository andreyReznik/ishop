package ua.sourceit.ishop.core.model;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.springframework.util.Assert;
import ua.sourceit.ishop.core.entity.OrderProduct;
import ua.sourceit.ishop.core.entity.Watch;

import java.io.Serializable;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

/**
 * User cart with chosen products and quantity
 * @author: areznik
 */

public class Cart implements Serializable {

    private static final String NULL_NOT_ALLOWED_ERROR = "Null watch is not allowed in cart!";

    private final Map<Watch, Integer> watchList;

    public Cart() {
        this.watchList = new HashMap<Watch, Integer>();
    }

    public void addWatch(Watch watch, int count) {
        Assert.notNull(watch, NULL_NOT_ALLOWED_ERROR);
        if (watchList.containsKey(watch)) {
            Integer current = watchList.get(watch);
            watchList.put(watch, current + count);
        } else {
            watchList.put(watch, count);
        }
    }

    public void removeWatch(int productId) {
        Watch watch = new Watch();
        watch.setId(productId);
        watchList.remove(watch);
    }

    public Map<Watch, Integer> getWatchList() {
        return watchList;
    }

    public void updateWatchQuantity(Watch watch, int newQty) {
        Assert.notNull(watch, NULL_NOT_ALLOWED_ERROR);
        watchList.put(watch, newQty);
    }

    public boolean isEmpty(){
        return watchList.isEmpty();
    }

    public List<OrderProduct> getOrderProducts(){
        List<OrderProduct> orderProducts = new LinkedList<OrderProduct>();
        for (Map.Entry<Watch,Integer> entry : watchList.entrySet()){
            OrderProduct orderProduct = new OrderProduct();
            orderProduct.setWatchId(entry.getKey().getId());
            orderProduct.setCount(entry.getValue());
            orderProducts.add(orderProduct);
        }
        return orderProducts;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this, ToStringStyle.SHORT_PREFIX_STYLE);
    }
}
