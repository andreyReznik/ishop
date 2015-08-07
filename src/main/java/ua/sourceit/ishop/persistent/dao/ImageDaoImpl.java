package ua.sourceit.ishop.persistent.dao;

import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.model.WatchImage;
import ua.sourceit.ishop.persistent.exception.DaoSystemException;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.List;

/**
 * @author: areznik
 */
@Repository
public class ImageDaoImpl implements ImageDao {

    private static final String INSERT_IMAGE_SQL  = "insert into image (id_product, link, smallLink,created,active) values(?,?,?,?,?)";

    private final DataSource dataSource;

    public ImageDaoImpl(DataSource dataSource) {
        this.dataSource = dataSource;
    }


    @Override
    public void insertBatch(int productId, List<WatchImage> images) throws DaoSystemException {

       try{
           try(Connection connection = dataSource.getConnection();
               PreparedStatement preparedStatement = connection.prepareStatement(INSERT_IMAGE_SQL)){
               for (WatchImage watchImage : images){
                   preparedStatement.setInt(1, productId);
                   preparedStatement.setString(2, watchImage.getBigImage());
                   preparedStatement.setString(3, watchImage.getSmallImage());
                   preparedStatement.setTimestamp(4, new Timestamp(System.currentTimeMillis()));
                   preparedStatement.setBoolean(5, true);
                   preparedStatement.addBatch();
               }
               preparedStatement.executeBatch();
           }

       }catch (SQLException ex){
           throw new DaoSystemException(ex.getMessage(),ex);
       }
    }
}
