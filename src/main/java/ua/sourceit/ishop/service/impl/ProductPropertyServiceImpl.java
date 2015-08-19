package ua.sourceit.ishop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.sourceit.ishop.model.AmountedProperty;
import ua.sourceit.ishop.dao.AmountedPropertyDao;
import ua.sourceit.ishop.service.ProductPropertyService;

import java.util.List;

/**
 * @author: areznik
 */

@Service("productPropertyService")
public class ProductPropertyServiceImpl implements ProductPropertyService {


    @Autowired
    private AmountedPropertyDao amountedPropertyDao;

    @Override
    public List<AmountedProperty> getGendersAmount() {
        return amountedPropertyDao.getGendersAmount();
    }

    @Override
    public List<AmountedProperty> getMovementAmount() {
        return amountedPropertyDao.getMovementAmount();
    }


    @Override
    public List<AmountedProperty> getPriceGroupAmount() {
        return amountedPropertyDao.getPriceGroupAmount();
    }

    @Override
    public List<AmountedProperty> getBrandsAmount() {
        return amountedPropertyDao.getBrandAmount();
    }


}
