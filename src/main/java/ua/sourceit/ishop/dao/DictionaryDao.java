package ua.sourceit.ishop.dao;

/**
 * save id-name product properties (brand, movement, gender ...)
 *
 * @author: areznik
 */

public interface DictionaryDao {

    public int saveAndGetId(String name, String tableName);
}
