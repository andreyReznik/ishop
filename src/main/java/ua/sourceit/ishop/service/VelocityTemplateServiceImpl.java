package ua.sourceit.ishop.service;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.entity.Order;
import ua.sourceit.ishop.entity.Watch;
import ua.sourceit.ishop.model.Cart;

import javax.inject.Inject;
import java.io.StringWriter;
import java.util.Map;

/**
 * @author: areznik
 */

@Service("velocityTemplateService")
public class VelocityTemplateServiceImpl implements VelocityTemplateService {

    @Inject
    VelocityEngine velocityEngine;

    @Override
    public String getMiniCartAsHtml(Cart cart) {
        if ((cart == null) ||(cart.getWatchList().size()==0)){
            return getEmptyMiniCartHtml();
        } else{
            return buildMiniCartHtml(cart);
        }
    }

    @Override
    public String getCartAsHtml(Cart cart) {
        Template template = velocityEngine.getTemplate("./templates/cart.vm");
        VelocityContext context = new VelocityContext();
        context.put("watchList", cart.getWatchList());
        StringWriter writer = new StringWriter();
        template.merge(context, writer);
        return writer.toString();
    }

    @Override
    public String getGrandTotalAsHtml(Cart cart) {
        Template template = velocityEngine.getTemplate("./templates/grandTotal.vm");
        VelocityContext context = new VelocityContext();

        context.put("grandTotal", cart.CalcGrandTotal());
        StringWriter writer = new StringWriter();
        template.merge(context, writer);
        return writer.toString();
    }

    @Override
    public String getEmailTemplate(Order order) {
        Template template = velocityEngine.getTemplate("./templates/email.vm");
        VelocityContext context = new VelocityContext();
        context.put("order", order);
        context.put("total", order.calcTotalPrice());
        StringWriter writer = new StringWriter();
        template.merge(context, writer);
        return writer.toString();
    }


    private String getEmptyMiniCartHtml() {
        Template template = velocityEngine.getTemplate("./templates/emptyMiniCart.vm");
        VelocityContext context = new VelocityContext();

        StringWriter writer = new StringWriter();
        template.merge(context, writer);
        return writer.toString();
    }

    private String buildMiniCartHtml(Cart cart) {
        int orderCount = 0;
        for( Map.Entry<Watch, Integer> watches : cart.getWatchList().entrySet()){
            orderCount+= watches.getValue();
        }
        Template template = velocityEngine.getTemplate("./templates/miniCart.vm");
        VelocityContext context = new VelocityContext();

        context.put("cartCount", orderCount);
        context.put("watchList", cart.getWatchList());

        StringWriter writer = new StringWriter();
        template.merge(context, writer);
        return writer.toString();
    }

}
