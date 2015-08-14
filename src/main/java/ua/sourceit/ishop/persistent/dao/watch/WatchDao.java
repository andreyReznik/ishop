package ua.sourceit.ishop.persistent.dao.watch;

import ua.sourceit.ishop.entity.Watch;


import java.util.List;

/**
 * Dao for product
 *
 * @author: areznik
 */

public interface WatchDao {

    public List<Watch> getByRange(int offset, int limit);

    public Watch getById(int id);

    public int addNew(Watch watch, int brandId, int genderId, int movementId);

}
