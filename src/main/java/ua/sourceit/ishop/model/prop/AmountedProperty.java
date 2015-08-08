package ua.sourceit.ishop.model.prop;

/**
 * Product property that need amount.
 *
 * @author: areznik
 */

public class AmountedProperty {

    private int id;
    private String name;
    private int amount;

    public AmountedProperty(int id, String name, int amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }

    public int getId() {
        return id;
    }


    public int getAmount() {
        return amount;
    }

    public String getName() {
        return name;
    }
}
