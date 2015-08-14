package ua.sourceit.ishop.model;

/**
 * @author: areznik
 */

public class CartView extends MiniCartView {

    public String grandTotal;

    public CartView(String status, String sidebar, String grandTotal) {
        super(status, "", sidebar);
        this.grandTotal = grandTotal;
    }

    public String getGrandTotal() {
        return grandTotal;
    }

    public void setGrandTotal(String grandTotal) {
        this.grandTotal = grandTotal;
    }
}
