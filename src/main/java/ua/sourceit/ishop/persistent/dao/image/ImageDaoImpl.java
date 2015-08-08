package ua.sourceit.ishop.persistent.dao.image;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.model.WatchImage;
import ua.sourceit.ishop.persistent.dao.AbstractDao;
import ua.sourceit.ishop.persistent.dao.JdbcUtil;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * @author: areznik
 */
@Repository
public class ImageDaoImpl extends AbstractDao implements ImageDao, RowMapper<WatchImage> {

    private static final String INSERT_IMAGE_SQL = "insert into image (id_product, link, smallLink,created,active) values(?,?,?,?,?)";
    private static final String GET_IMAGE_SQL = "select id_image, id_product, link, smallLink, created, updated, active " +
            "from image where id_product = ?;";

    @Override
    public void insertBatch(int productId, List<WatchImage> images) {

        getJdbcTemplate().batchUpdate(INSERT_IMAGE_SQL, new ImageBatchPreparedStatementSetter(productId, images));

    }

    @Override
    public List<WatchImage> getProductImages(int productId) {
        return getJdbcTemplate().query(GET_IMAGE_SQL, new Object[]{productId}, this);
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
