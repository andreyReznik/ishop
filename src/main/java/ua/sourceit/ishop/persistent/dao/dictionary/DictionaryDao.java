package ua.sourceit.ishop.persistent.dao.dictionary;

/**
 * Dao for product property (brand, movement, gender ...)
 *
 * @author: areznik
 */

public interface DictionaryDao {
    public int getDictionaryId(String name, String tableName);
}
