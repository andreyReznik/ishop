package ua.sourceit.ishop.services;

import ua.sourceit.ishop.model.prop.AmountedProperty;

import java.util.List;

/**
 * Service for getting product property
 *
 * @author: areznik
 */

public interface ProductPropertyService {

    public List<AmountedProperty> getGendersAmount();

    public List<AmountedProperty> getMovementAmount();

    public List<AmountedProperty> getPriceGroupAmount();

    public List<AmountedProperty> getBrandsAmount();
}
