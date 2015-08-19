package ua.sourceit.ishop.model;

import ua.sourceit.ishop.entity.OrderProduct;
import ua.sourceit.ishop.entity.User;
import ua.sourceit.ishop.entity.Watch;

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

    private User user;
    private Map<Watch, Integer> watchList;

    public Cart() {
        this.watchList = new HashMap<>();
        user = User.createFakeUser();
    }

    public void addWatch(Watch watch, int count) {
        checkForNull(watch);
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

    public void setWatchList(Map<Watch, Integer> watchList) {
        this.watchList = watchList;
    }

    public void updateWatchQuantity(Watch watch, int newQty) {
        checkForNull(watch);
        watchList.put(watch, newQty);
    }

    private void checkForNull(Watch watch){
        if (watch == null)
            throw new NullPointerException("Null watch not allowed in cart!");
    }

    public List<OrderProduct> getOrderProducts(){
        List<OrderProduct> orderProducts = new LinkedList<>();
        for (Map.Entry<Watch,Integer> entry : watchList.entrySet()){
            OrderProduct orderProduct = new OrderProduct();
            orderProduct.setWatchId(entry.getKey().getId());
            orderProduct.setCount(entry.getValue());
            orderProducts.add(orderProduct);
        }
        return orderProducts;
    }

    public User getUser() {
        return user;
    }
}
