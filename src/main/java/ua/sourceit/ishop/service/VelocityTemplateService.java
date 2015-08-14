package ua.sourceit.ishop.service;

import ua.sourceit.ishop.entity.Order;
import ua.sourceit.ishop.model.Cart;

/**
 * @author: areznik
 */

public interface VelocityTemplateService {

    public String getMiniCartAsHtml(Cart cart);

    public String getCartAsHtml(Cart cart);

    public String getGrandTotalAsHtml(Cart cart);

    public String getEmailTemplate(Order cart);
}
