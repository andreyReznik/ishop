package ua.sourceit.ishop.dao.impl.hibernate;


import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.dao.ImageDao;
import ua.sourceit.ishop.entity.Watch;
import ua.sourceit.ishop.entity.WatchImage;

import java.util.List;

/**
 * @author: areznik
 */
@Repository("imageDao")
public class ImageDaoImpl extends AbstractHibernateDao implements ImageDao {
    @Override
    public void saveForProduct(int productId, List<WatchImage> images) {
        throw new RuntimeException("Not implemented method");
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<WatchImage> getWatchImages(Watch watch) {
        List<WatchImage> watchImages = getSession()
                        .createCriteria(WatchImage.class)
                        .add(Restrictions.eq("watch",watch ))
                        .list();
        return watchImages;
    }
}
