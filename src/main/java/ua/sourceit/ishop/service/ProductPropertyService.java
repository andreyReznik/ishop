package ua.sourceit.ishop.service;

import ua.sourceit.ishop.model.AmountedProperty;

import java.util.List;

/**
 * Service for getting product property
 *
 * @author: areznik
 */

public interface ProductPropertyService {

    /**
     * Get product property list
     * @param clazz Class of AmountedProperty
     * @return AmountedProperty list
     */
    List<AmountedProperty> getProperties(Class<? extends AmountedProperty> clazz);


}
