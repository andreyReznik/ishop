package ua.sourceit.ishop.persistent.dao;

import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.*;

/**
 * @author: areznik
 */

@Repository
public class DictionaryDaoImpl implements DictionaryDao {

    private final DataSource dataSource;

    public DictionaryDaoImpl(DataSource dataSource) {
        this.dataSource = dataSource;
    }


    @Override
    public int getDictionaryId(String name, String tableName ) throws SQLException {
        String selectDictionaryIdSql  = "SELECT id_"+tableName+" from "+tableName+" where name = ?";
        String insertNewDictionaryValueSql  = "INSERT into "+tableName+"(name) values(?)";

        try(Connection connection = dataSource.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(selectDictionaryIdSql) ){
            preparedStatement.setString(1,name);
            ResultSet rs = preparedStatement.executeQuery();
            while (rs.next()) {
                return rs.getInt("id_"+tableName);
            }
        };

        try(Connection connection = dataSource.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(insertNewDictionaryValueSql, Statement.RETURN_GENERATED_KEYS)){
            preparedStatement.setString(1, name);
            int affectedRows = preparedStatement.executeUpdate();
            if (affectedRows == 0) {
                throw new SQLException("insertion failed, no rows affected.");
            }

            try (ResultSet generatedKeys = preparedStatement.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    return generatedKeys.getInt(1);
                }
                else {
                    throw new SQLException("insertion failed, no ID obtained.");
                }
            }
        }

    }
}
