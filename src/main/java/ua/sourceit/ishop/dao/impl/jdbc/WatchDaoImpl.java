package ua.sourceit.ishop.dao.impl.jdbc;

import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import ua.sourceit.ishop.dao.WatchDao;
import ua.sourceit.ishop.entity.Brand;
import ua.sourceit.ishop.entity.Gender;
import ua.sourceit.ishop.entity.Movement;
import ua.sourceit.ishop.entity.Watch;

import java.sql.*;
import java.util.List;

/**
 * @author: areznik
 */

public class WatchDaoImpl extends AbstractJdbcDao implements WatchDao, RowMapper<Watch> {

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


    @Override
    public List<Watch> getByRange(int offset, int limit){
        String formattedSql = String.format(GET_BY_RANGE_SQL, limit, offset);
        return getJdbcTemplate().query(formattedSql, this);
    }


    @Override
    public Watch getById(int id){
        return getJdbcTemplate().queryForObject(GET_BY_ID_SQL, new Object[]{id}, this);
    }

    @Override
    public int addNew(final Watch watch,final int brandId,final int genderId,final int movementId) {
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
        return keyHolder.getKey().intValue();
    }

    private void fillParameters(final Watch watch, final int brandId, final int genderId, final int movementId, final PreparedStatement preparedStatement) throws SQLException {
        preparedStatement.setInt(1, brandId);
        preparedStatement.setString(2, watch.getModel());
        preparedStatement.setString(3, watch.getInfo());
        preparedStatement.setBigDecimal(4, watch.getPrice());
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
        Brand brand = new Brand();
        brand.setName(rs.getString("brand"));
        watch.setBrand(brand);
        watch.setModel(rs.getString("model"));
        watch.setInfo(rs.getString("info"));
        watch.setPrice(rs.getBigDecimal("price"));
        watch.setDetails(rs.getString("details"));
        Gender gender = new Gender();
        gender.setName(rs.getString("gender"));
        watch.setGender(gender);
        Movement movement = new Movement();
        movement.setName(rs.getString("movement"));
        watch.setMovement(movement);
        watch.setMainImage(rs.getString("imageLink"));
        JdbcUtil.setThingProperty(watch, rs);
        return watch;
    }


}
