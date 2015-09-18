package ua.sourceit.ishop.core.service.impl;

import org.junit.Test;
import org.springframework.test.util.ReflectionTestUtils;
import ua.sourceit.ishop.core.dao.AmountedPropertyDao;
import ua.sourceit.ishop.core.entity.Brand;
import ua.sourceit.ishop.core.entity.Gender;
import ua.sourceit.ishop.core.entity.Movement;
import ua.sourceit.ishop.core.service.ProductPropertyService;

import static org.mockito.Mockito.*;

/**
 * @author: areznik
 */

public class ProductPropertyServiceImplTest {
    @Test
    public void testGetProperties() throws Exception {

        ProductPropertyService productPropertyService = new ProductPropertyServiceImpl();
        AmountedPropertyDao amountedPropertyDaoMock = mock(AmountedPropertyDao.class);
        ReflectionTestUtils.setField(productPropertyService, "amountedPropertyDao", amountedPropertyDaoMock);

        productPropertyService.getProperties(Gender.class);
        verify(amountedPropertyDaoMock,times(1)).getProperties(Gender.class);
        reset(amountedPropertyDaoMock);

        productPropertyService.getProperties(Movement.class);
        verify(amountedPropertyDaoMock,times(1)).getProperties(Movement.class);
        reset(amountedPropertyDaoMock);

        productPropertyService.getProperties(Brand.class);
        verify(amountedPropertyDaoMock,times(1)).getProperties(Brand.class);


    }
}
