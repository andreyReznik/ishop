package ua.sourceit.ishop.persistent.dao.watch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.model.Watch;
import ua.sourceit.ishop.persistent.dao.AbstractDao;
import ua.sourceit.ishop.persistent.dao.JdbcUtil;
import ua.sourceit.ishop.persistent.dao.dictionary.DictionaryDao;
import ua.sourceit.ishop.persistent.dao.dictionary.DictionaryDaoImpl;
import ua.sourceit.ishop.persistent.dao.image.ImageDao;

import java.sql.*;
import java.util.List;

/**
 * @author: areznik
 */

@Repository
public class WatchDaoImpl extends AbstractDao implements WatchDao, RowMapper<Watch> {

    public static final String GET_BY_RANGE_SQL = "SELECT id_product, b.name as brand, model, info, price, details,  g.name as gender, " +
            "m.name as movement , imageLink, created, updated, active " +
            "FROM product p " +
            "INNER JOIN brand b on p.id_brand = b.id_brand " +
            "INNER JOIN gender g on g.id_gender = p.id_gender " +
            "INNER JOIN movement m on m.id_movement = p.id_movement " +
            "LIMIT %d OFFSET %d;";

    public static final String GET_BY_ID_SQL = "SELECT p.id_product, b.name as brand, model, info, price, details, " +
            "g.name as gender, m.name as model, imageLink,  m.name as movement," +
            "p.created, p.updated, p.active " +
            "FROM product p " +
            "INNER JOIN brand b on p.id_brand = b.id_brand " +
            "INNER JOIN gender g on g.id_gender = p.id_gender " +
            "INNER JOIN movement m on m.id_movement = p.id_movement " +
            "WHERE p.id_product = ?;";

    private static final String INSERT_WATCH_SQL = "insert into product(id_brand, model, info, price," +
            " details, id_gender, id_movement, imageLink, created, active )" +
            " values (?,?,?,?,?,?,?,?,?,?)";

    @Autowired
    private ImageDao imageDao;

    @Override
    public List<Watch> getByRange(int offset, int limit){

        String formattedSql = String.format(GET_BY_RANGE_SQL, limit, offset);

        return getJdbcTemplate().query(formattedSql, this);

    }


    @Override
    public Watch getById(int id){

        Watch watch = getJdbcTemplate().queryForObject(GET_BY_ID_SQL, new Object[]{id}, this);

        if (watch != null) {
            watch.setWatchImages(imageDao.getProductImages(id));
        }

        return watch;
    }

    @Override
    public void addNew(final Watch watch) {

        DictionaryDao dictionaryDao = new DictionaryDaoImpl();
        final int brandId = dictionaryDao.getDictionaryId(watch.getBrand(), "brand");
        final int genderId = dictionaryDao.getDictionaryId(watch.getGender(), "gender");
        final int movementId = dictionaryDao.getDictionaryId(watch.getMovement(), "movement");

        KeyHolder keyHolder = new GeneratedKeyHolder();
        getJdbcTemplate().update(
                new PreparedStatementCreator() {
                    public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                        PreparedStatement ps =
                                connection.prepareStatement(INSERT_WATCH_SQL, new String[]{"id"});
                        fillParameters(watch, brandId, genderId, movementId, ps);
                        return ps;
                    }
                },
                keyHolder);

        int productId = keyHolder.getKey().intValue();

        imageDao.insertBatch(productId, watch.getWatchImages());

    }

    private void fillParameters(final Watch watch, final int brandId, final int genderId, final int movementId, final PreparedStatement preparedStatement) throws SQLException {
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


    @Override
    public Watch mapRow(ResultSet rs, int rowNum) throws SQLException {
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
        JdbcUtil.setThingProperty(watch, rs);
        return watch;
    }

    public void setImageDao(ImageDao imageDao) {
        this.imageDao = imageDao;
    }

}
