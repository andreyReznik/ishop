package ua.sourceit.ishop.services;

import ua.sourceit.ishop.model.prop.AmountedProperty;
import ua.sourceit.ishop.persistent.dao.AmountedPropertyDao;
import ua.sourceit.ishop.persistent.exception.DaoSystemException;
import ua.sourceit.ishop.services.exception.ServiceException;

import java.util.List;

/**
 * @author: areznik
 */

public class ProductPropertyServiceImpl implements ProductPropertyService {

    private AmountedPropertyDao amountedPropertyDao;

    public ProductPropertyServiceImpl(AmountedPropertyDao amountedPropertyDao) {
        this.amountedPropertyDao = amountedPropertyDao;
    }

    @Override
    public List<AmountedProperty> getGendersAmount() {
        try {
            return amountedPropertyDao.getGendersAmount();
        } catch (DaoSystemException e) {
            throw new ServiceException(e.getMessage(),e);
        }
    }

    @Override
    public List<AmountedProperty> getMovementAmount() {
        try {
            return amountedPropertyDao.getMovementAmount();
        } catch (DaoSystemException e) {
            throw new ServiceException(e.getMessage(),e);
        }
    }


    @Override
    public List<AmountedProperty> getPriceGroupAmount() {
            try {
                return amountedPropertyDao.getPriceGroupAmount();
            } catch (DaoSystemException e) {
                throw new ServiceException(e.getMessage(),e);
            }
    }

    @Override
    public List<AmountedProperty> getBrandsAmount() {
        try {
            return amountedPropertyDao.getBrandAmount();
        } catch (DaoSystemException e) {
            throw new ServiceException(e.getMessage(),e);
        }
    }


}
