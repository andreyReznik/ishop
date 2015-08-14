package ua.sourceit.ishop.controller.util;

import ua.sourceit.ishop.entity.Watch;

import java.util.Map;

/**
 * Operations with prices
 * @author: areznik
 */

public class PriceUtil {

    public static float calcTotalPrice(Map<Watch, Integer> watchList){
        float grandTotal = 0.0f;
        for (Map.Entry<Watch,Integer> entry : watchList.entrySet()){
            grandTotal += entry.getKey().getPrice() * entry.getValue();
        }
        return grandTotal;
    }
}
