package ua.sourceit.ishop.model;

import org.apache.velocity.app.VelocityEngine;
import ua.sourceit.ishop.controller.util.PriceUtil;
import ua.sourceit.ishop.entity.Order;
import ua.sourceit.ishop.entity.Watch;
import ua.sourceit.ishop.service.VelocityTemplateService;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.Map;

/**
 * Cart with chosen products
 * @author: areznik
 */

public class Cart {

    @Inject
    VelocityEngine velocityEngine;

    private Map<Watch, Integer> watchList;


    public Cart() {
        this.watchList = new HashMap<>();
    }

    public void addWatch(Watch watch, int count) {
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


    public MiniCartView getMiniCartView(Watch lastAddedWatch, VelocityTemplateService velocityTemplateService) {
        if (lastAddedWatch != null){
            return new MiniCartView(MiniCartView.SUCCESS, lastAddedWatch.getInfo(), velocityTemplateService.getMiniCartAsHtml(this));
        }
        return new MiniCartView(MiniCartView.ERROR, "Added lastAddedWatch not found", velocityTemplateService.getMiniCartAsHtml(this));
    }

    public CartView getCartView(VelocityTemplateService velocityTemplateService) {
        return new CartView(MiniCartView.SUCCESS, velocityTemplateService.getCartAsHtml(this),velocityTemplateService.getGrandTotalAsHtml(this));
    }

    public Map<Watch, Integer> getWatchList() {
        return watchList;
    }

    public void setWatchList(Map<Watch, Integer> watchList) {
        this.watchList = watchList;
    }

    public void updateWatchQuantity(Watch watch, int newQty) {
        watchList.put(watch, newQty);
    }

    public float CalcGrandTotal() {
        return PriceUtil.calcTotalPrice(watchList);
    }

    public Order CreateOrder(){
        Order order = new Order();
        order.setWatchList(watchList);
        return order;
    }
}
