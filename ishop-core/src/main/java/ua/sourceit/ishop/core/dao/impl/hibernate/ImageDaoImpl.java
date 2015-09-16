package ua.sourceit.ishop.core.dao.impl.hibernate;


import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import ua.sourceit.ishop.core.dao.ImageDao;
import ua.sourceit.ishop.core.entity.Watch;
import ua.sourceit.ishop.core.entity.WatchImage;

import java.util.List;

/**
 * @author: areznik
 */
@Repository("imageDao")
public class ImageDaoImpl extends AbstractHibernateDao implements ImageDao {

    @Override
    public void save(WatchImage image) {
        getSession().save(image);
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<WatchImage> getWatchImages(Watch watch) {
        List<WatchImage> watchImages = getSession()
                        .createCriteria(WatchImage.class)
                        .add(Restrictions.eq("watchId",watch.getId()))
                        .list();
        return watchImages;
    }

    @Override
    public void delete(WatchImage watchImage) {
        getSession().delete(watchImage);
    }
}
