package ua.sourceit.ishop.persistent.dao;

import ua.sourceit.ishop.model.prop.AmountedProperty;
import ua.sourceit.ishop.persistent.exception.DaoSystemException;

import java.util.List;

/**
 * Dao for getting amounting property
 * @author: areznik
 */

public interface AmountedPropertyDao {

    public List<AmountedProperty> getGendersAmount() throws DaoSystemException;
    public List<AmountedProperty> getMovementAmount() throws DaoSystemException;
    public List<AmountedProperty> getPriceGroupAmount() throws DaoSystemException;
    public List<AmountedProperty> getBrandAmount() throws DaoSystemException;
}
