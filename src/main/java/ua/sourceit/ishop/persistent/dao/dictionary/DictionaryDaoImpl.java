package ua.sourceit.ishop.persistent.dao.dictionary;

import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.persistent.dao.AbstractDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * @author: areznik
 */

@Repository
public class DictionaryDaoImpl extends AbstractDao implements DictionaryDao {

    private static final String GET_DICTIONARY_ID_SQL = "SELECT id_%s from %s where name = ?";
    private static final String INSERT_NEW_DICTIONARY_VALUE_SQL = "INSERT into %s(name) values(?)";

    @Override
    public int getDictionaryId(final String name, final String tableName) {

        String sql = String.format(GET_DICTIONARY_ID_SQL, tableName, tableName);

        Integer id = getJdbcTemplate().queryForObject(sql,
                new Object[]{name}, Integer.class);

        if (id != null) {
            return id;
        }

        KeyHolder keyHolder = new GeneratedKeyHolder();

        getJdbcTemplate().update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                String insertNewDictionaryValueSql = String.format(INSERT_NEW_DICTIONARY_VALUE_SQL, name);

                PreparedStatement ps =
                        con.prepareStatement(insertNewDictionaryValueSql, new String[]{"id"});
                ps.setString(1, name);
                return ps;
            }
        }, keyHolder);

        return keyHolder.getKey().intValue();

    }

}




