package ua.sourceit.ishop.persistent.dao.amountedProperty;

import ua.sourceit.ishop.model.AmountedProperty;

import java.util.List;

/**
 * Dao for getting amounting property
 *
 * @author: areznik
 */

public interface AmountedPropertyDao {

    public List<AmountedProperty> getGendersAmount();

    public List<AmountedProperty> getMovementAmount();

    public List<AmountedProperty> getPriceGroupAmount();

    public List<AmountedProperty> getBrandAmount();
}
