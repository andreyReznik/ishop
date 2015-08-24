package ua.sourceit.ishop.dao.impl.jdbc;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.dao.ImageDao;
import ua.sourceit.ishop.entity.Watch;
import ua.sourceit.ishop.entity.WatchImage;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * @author: areznik
 * use hibernate version of dao instead
 */
@Deprecated
@Repository
public class ImageDaoImpl extends AbstractJdbcDao implements ImageDao, RowMapper<WatchImage> {

    private static final String INSERT_IMAGE_SQL = "insert into image (id_product, link, smallLink,created,active) values(?,?,?,?,?)";
    private static final String GET_IMAGE_SQL = "select id_image, id_product, link, smallLink, created, updated, active " +
            "from image where id_product = ?;";

    @Override
    public void saveForProduct(int productId, List<WatchImage> images) {

        getJdbcTemplate().batchUpdate(INSERT_IMAGE_SQL, new ImageBatchPreparedStatementSetter(productId, images));

    }

    @Override
    public List<WatchImage> getWatchImages(Watch watch) {
        return getJdbcTemplate().query(GET_IMAGE_SQL, new Object[]{watch.getId()}, this);
    }


    @Override
    public WatchImage mapRow(ResultSet rs, int rowNum) throws SQLException {
        WatchImage watchImage = new WatchImage();
        watchImage.setId(rs.getInt("id_image"));
        watchImage.setBigImage(rs.getString("link"));
        watchImage.setSmallImage(rs.getString("smallLink"));
        JdbcUtil.setThingProperty(watchImage, rs);
        return watchImage;
    }
}
