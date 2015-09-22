package ua.sourceit.ishop.core.dao;

import ua.sourceit.ishop.core.model.AmountedProperty;

import java.util.List;

/**
 * Dao for getting amounting property
 *
 * @author: areznik
 */

public interface AmountedPropertyDao {

    /**
     * Get amounted property list
     * @param clazz Class of AmountedProperty
     * @return AmountedProperty list
     */
    public List<AmountedProperty> getProperties(Class<? extends AmountedProperty> clazz);

}
