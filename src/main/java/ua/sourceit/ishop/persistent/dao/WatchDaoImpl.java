package ua.sourceit.ishop.persistent.dao;

import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.model.Watch;
import ua.sourceit.ishop.model.WatchImage;
import ua.sourceit.ishop.persistent.exception.DaoSystemException;
import ua.sourceit.ishop.persistent.exception.NoSuchEntityException;

import javax.sql.DataSource;
import java.sql.*;
import java.util.LinkedList;
import java.util.List;

/**
 * @author: areznik
 */

@Repository
public class WatchDaoImpl implements WatchDao {

    public static final String GET_BY_RANGE_SQL = "SELECT id_product, b.name as brand, model, info, price, details,  g.name as gender, " +
            "m.name as movement , imageLink, created as pcreated, updated as pupdated, active as pactive " +
            "FROM product p " +
            "INNER JOIN brand b on p.id_brand = b.id_brand " +
            "INNER JOIN gender g on g.id_gender = p.id_gender " +
            "INNER JOIN movement m on m.id_movement = p.id_movement " +
            "LIMIT %d OFFSET %d;";

    public static final String GET_BY_ID_SQL = "SELECT p.id_product, b.name as brand, model, info, price, details, " +
            "g.name as gender, m.name as model, imageLink,  m.name as movement," +
            "p.created as pcreated, p.updated as pupdated, p.active as pactive, " +
            "i.id_image, i.link, i.smallLink, i.created as icreated,i.updated as iupdated, i.active as iactive " +
            "FROM product p " +
            "INNER JOIN brand b on p.id_brand = b.id_brand " +
            "INNER JOIN gender g on g.id_gender = p.id_gender " +
            "INNER JOIN movement m on m.id_movement = p.id_movement " +
            "LEFT JOIN image i on i.id_product=p.id_product " +
            "WHERE p.id_product = ?;";

    private static final String INSERT_WATCH_SQL = "insert into product(id_brand, model, info, price," +
            " details, id_gender, id_movement, imageLink, created, active )" +
            " values (?,?,?,?,?,?,?,?,?,?)";



    private final DataSource dataSource;

    public WatchDaoImpl(DataSource dataSource) {
        this.dataSource = dataSource;
    }



    @Override
    public List<Watch> getByRange(int offset, int limit) throws DaoSystemException {
        List<Watch> watches = new LinkedList<>();
        try{
             try (Connection  connection   = dataSource.getConnection();
                  PreparedStatement preparedStatement = connection.prepareStatement(String.format(GET_BY_RANGE_SQL,limit,offset))){
                 ResultSet rs = preparedStatement.executeQuery();
                 while (rs.next()) {
                     Watch watch = getWatch(rs);
                     watches.add(watch);
                 }

             };

        }catch (SQLException ex){
            throw new DaoSystemException(ex.getMessage(),ex);
        }

        return watches;
    }


    @Override
    public Watch getById(int id) throws NoSuchEntityException, DaoSystemException {
        Watch watch = null;
        try{
            try (Connection  connection   = dataSource.getConnection();
                 PreparedStatement preparedStatement = connection.prepareStatement(GET_BY_ID_SQL)){

                preparedStatement.setInt(1,id);
                ResultSet rs = preparedStatement.executeQuery();
                if (!rs.isBeforeFirst() ) {
                    throw new NoSuchEntityException("Product with id="+id+" not found!");
                }
                while (rs.next()) {
                    if (watch == null){
                        watch = getWatch(rs);
                    }
                    WatchImage watchImage= getWatchImage(rs);
                    watch.addWatchImage(watchImage);
                }

            };
        }catch (SQLException ex){
            throw new DaoSystemException(ex.getMessage(),ex);
        }

        return watch;
    }

    @Override
    public void addNew(Watch watch) throws  DaoSystemException {

      try{
        DictionaryDao dictionaryDao = new DictionaryDaoImpl(dataSource);
        int brandId = dictionaryDao.getDictionaryId(watch.getBrand(), "brand");
        int genderId = dictionaryDao.getDictionaryId(watch.getGender(), "gender");
        int movementId = dictionaryDao.getDictionaryId(watch.getMovement(), "movement");

        try(Connection connection = dataSource.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(INSERT_WATCH_SQL, Statement.RETURN_GENERATED_KEYS);){
            fillParameters(watch, brandId, genderId, movementId, preparedStatement);
            int affectedRows = preparedStatement.executeUpdate();
            if (affectedRows == 0) {
                throw new SQLException("insertion failed, no rows affected.");
            }

            try (ResultSet generatedKeys = preparedStatement.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    int productId =  generatedKeys.getInt(1);
                    new ImageDaoImpl(dataSource).insertBatch(productId,watch.getWatchImages());
                }
                else {
                    throw new SQLException("insertion failed, no ID obtained.");
                }
            }
        }
      }catch (SQLException ex){
          throw  new DaoSystemException(ex.getMessage(),ex);
      }
    }

    private void fillParameters(Watch watch, int brandId, int genderId, int movementId, final PreparedStatement preparedStatement) throws SQLException {
        preparedStatement.setInt(1, brandId);
        preparedStatement.setString(2, watch.getModel());
        preparedStatement.setString(3, watch.getInfo());
        preparedStatement.setFloat(4, watch.getPrice());
        preparedStatement.setString(5, watch.getDetails());
        preparedStatement.setInt(6, genderId);
        preparedStatement.setInt(7, movementId);
        preparedStatement.setString(8, watch.getMainImage());
        preparedStatement.setTimestamp(9, new Timestamp(System.currentTimeMillis()));
        preparedStatement.setBoolean(10, true);
    }

    private WatchImage getWatchImage(ResultSet rs) throws SQLException {
        WatchImage watchImage = new WatchImage();
        watchImage.setId(rs.getInt("id_image"));
        watchImage.setBigImage(rs.getString("link"));
        watchImage.setSmallImage(rs.getString("smallLink"));
        watchImage.setCreated(rs.getLong("icreated"));
        watchImage.setUpdated(rs.getLong("iupdated"));
        watchImage.setActive(rs.getBoolean("iactive"));
        return watchImage;

    }

    private Watch getWatch(ResultSet rs) throws SQLException {
        Watch watch = new Watch();
        watch.setId(rs.getInt("id_product"));
        watch.setBrand(rs.getString("brand"));
        watch.setModel(rs.getString("model"));
        watch.setInfo(rs.getString("info"));
        watch.setPrice(rs.getFloat("price"));
        watch.setDetails(rs.getString("details"));
        watch.setGender(rs.getString("gender"));
        watch.setMovement(rs.getString("movement"));
        watch.setMainImage(rs.getString("imageLink"));
        watch.setCreated(rs.getLong("pcreated"));
        watch.setUpdated(rs.getLong("pupdated"));
        watch.setActive(rs.getBoolean("pactive"));
        return watch;
    }



}
