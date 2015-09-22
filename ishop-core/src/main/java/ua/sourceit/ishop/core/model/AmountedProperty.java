package ua.sourceit.ishop.core.model;

import org.codehaus.jackson.annotate.JsonValue;

/**
 * Product property that need amount.
 *
 * @author: areznik
 */

public interface AmountedProperty {

    public int getId();

    public int getAmount();

    @JsonValue
    public String getName();
}
