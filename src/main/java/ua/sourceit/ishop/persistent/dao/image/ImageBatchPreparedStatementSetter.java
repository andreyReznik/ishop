package ua.sourceit.ishop.persistent.dao.image;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import ua.sourceit.ishop.entity.WatchImage;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.List;

/**
 * @author: areznik
 */

public class ImageBatchPreparedStatementSetter implements BatchPreparedStatementSetter {

    private final List<WatchImage> images;
    private final int productId;

    public ImageBatchPreparedStatementSetter(int productId, List<WatchImage> images) {
        this.images = images;
        this.productId = productId;
    }


    @Override
    public void setValues(PreparedStatement ps, int i) throws SQLException {
        WatchImage watchImage = images.get(i);
        ps.setInt(1, productId);
        ps.setString(2, watchImage.getBigImage());
        ps.setString(3, watchImage.getSmallImage());
        ps.setTimestamp(4, new Timestamp(System.currentTimeMillis()));
        ps.setBoolean(5, true);
    }

    @Override
    public int getBatchSize() {
        return images.size();
    }
}
