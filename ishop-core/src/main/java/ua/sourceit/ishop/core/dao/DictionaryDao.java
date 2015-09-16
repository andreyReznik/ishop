package ua.sourceit.ishop.core.dao;

import ua.sourceit.ishop.core.entity.Brand;
import ua.sourceit.ishop.core.entity.DictionaryProperty;
import ua.sourceit.ishop.core.entity.Gender;
import ua.sourceit.ishop.core.entity.Movement;

/**
 * Save product properties (brand, movement, gender)
 *
 * @author: areznik
 */

public interface DictionaryDao {

    DictionaryProperty  getProperty(Class<? extends DictionaryProperty> clazz, String name);
}
