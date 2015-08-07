package ua.sourceit.ishop.persistent.dao;

import java.sql.SQLException;

/**
 * Dao for product property (brand, movement, gender ...)
 * @author: areznik
 */

public interface DictionaryDao {
    public int getDictionaryId(String name, String tableName ) throws SQLException;
}
