package ua.sourceit.ishop.core.service.impl;

import org.junit.Test;
import org.springframework.test.util.ReflectionTestUtils;
import ua.sourceit.ishop.core.dao.DictionaryDao;
import ua.sourceit.ishop.core.dao.WatchDao;
import ua.sourceit.ishop.core.dao.impl.hibernate.WatchDaoImpl;
import ua.sourceit.ishop.core.entity.*;
import ua.sourceit.ishop.core.exception.ItemNotFoundException;
import ua.sourceit.ishop.core.model.DtoConverter;
import ua.sourceit.ishop.core.model.ImageDto;
import ua.sourceit.ishop.core.model.WatchDto;
import ua.sourceit.ishop.core.service.ImageService;
import ua.sourceit.ishop.core.service.ProductService;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.*;

/**
 * @author: areznik
 */

public class ProductServiceImplTest {

    private WatchDao watchDaoMock;
    private DictionaryDao dictionaryDaoMock;
    private ImageService imageServiceMock;
    private ProductServiceImpl productService;

    private void initWatchDaoMock(){
        watchDaoMock = mock(WatchDaoImpl.class);
        ReflectionTestUtils.setField(productService, "watchDao", watchDaoMock);
    }

    private void initImageServiceDaoMock(){
        imageServiceMock = mock(ImageServiceImpl.class);
        ReflectionTestUtils.setField(productService, "imageService", imageServiceMock);
    }

    private void initDictionaryDaoMock(){
        dictionaryDaoMock = mock(DictionaryDao.class);
        ReflectionTestUtils.setField(productService, "dictionaryDao", dictionaryDaoMock);
    }

    @Test
    public void testGetWatchesByRange() throws Exception {
        productService = new ProductServiceImpl();
        initWatchDaoMock();
        productService.getWatchesByRange(30,100);
        verify(watchDaoMock,times(1)).getByRange(30,100);
    }

    @Test
    public void testGetWatchByIdWhenWatchByIdReturnNull() throws Exception {
        productService = new ProductServiceImpl();
        initWatchDaoMock();
        Watch watchById = productService.getWatchById(45);
        verify(watchDaoMock,times(1)).getById(45);
        assertEquals(watchById,null);
    }

    @Test
    public void testGetWatchByIdWhenWatchByIdReturnWatch() throws Exception {
        productService = new ProductServiceImpl();
        initWatchDaoMock();

        Watch watch = new Watch();
        watch.setId(132);

        when(watchDaoMock.getById(132)).thenReturn(watch);
        imageServiceMock = mock(ImageServiceImpl.class);

        WatchImage image = new WatchImage();
        image.setId(2345);
        List<WatchImage> watchImages = Arrays.asList(image);
        when(imageServiceMock.getWatchImages(watch)).thenReturn(watchImages);
        ReflectionTestUtils.setField(productService,"imageService",imageServiceMock);

        Watch watchById = productService.getWatchById(132);

        verify(watchDaoMock,times(1)).getById(132);
        assertEquals(watchById, watch);
        assertEquals(watchById.getWatchImages().size(), 1);
        assertEquals(watchById.getWatchImages().get(0),image);
    }

    @Test
    public void testSave() throws Exception {
        productService = new ProductServiceImpl();
        initWatchDaoMock();
        initImageServiceDaoMock();
        initDictionaryDaoMock();
        WatchDto watchDto = createWatchDto();
        when(watchDaoMock.save(DtoConverter.getWatch(watchDto))).thenReturn(345);

        int saveId = productService.save(watchDto);

        assertEquals(saveId, 345);
        verify(imageServiceMock,times(1)).saveImageAndGetLink(watchDto.getMainImage());
        verify(dictionaryDaoMock,times(1)).getProperty(Brand.class, watchDto.getBrandName());
        verify(dictionaryDaoMock,times(1)).getProperty(Gender.class, watchDto.getGenderName());
        verify(dictionaryDaoMock,times(1)).getProperty(Movement.class, watchDto.getMovementName());
        verify(watchDaoMock,times(1)).save(DtoConverter.getWatch(watchDto));
        verify(imageServiceMock,times(1)).saveImage(new ImageDto(345, watchDto.getSmallImages().get(0)));
        verify(imageServiceMock,times(1)).saveImage(new ImageDto(345, watchDto.getSmallImages().get(1)));
    }

    private WatchDto createWatchDto() {
        String smallImg1 = "http://imageStorage/smallImg1-355.jpg";
        String smallImg2 = "http://imageStorage/smallImg2-355.jpg";
        String mainImg = "http://imageStorage/mainImg355.jpg";


        WatchDto watchDto = new WatchDto();
        watchDto.setId(355);
        watchDto.setBrandName("Brand");
        watchDto.setSmallImages(Arrays.asList(smallImg1,smallImg2));
        watchDto.setMainImage(mainImg);
        watchDto.setDetails("Details");
        watchDto.setInfo("Info");
        watchDto.setModel("Model");
        watchDto.setMovementName("Movement");
        watchDto.setPrice(BigDecimal.valueOf(2345));
        watchDto.setGenderName("Gender");
        return watchDto;
    }

    @Test
    public void testDeleteWhenProductNotFound() throws Exception {
        productService = new ProductServiceImpl();
        ProductService productServiceSpy = spy(productService);
        doReturn(null).when(productServiceSpy).getWatchById(125);
        try{
            productServiceSpy.delete(125);
            fail("ItemNotFoundException must be thrown!");
        }catch (ItemNotFoundException ex){
            verify(productServiceSpy,times(1)).getWatchById(125);
        }
    }

    @Test
    public void testDeleteWhenProductExists() throws Exception {

        productService = new ProductServiceImpl();
        initImageServiceDaoMock();
        initWatchDaoMock();
        ProductService productServiceSpy = spy(productService);
        Watch watch = DtoConverter.getWatch(createWatchDto());
        watch.getWatchImages().get(0).setId(234);
        watch.getWatchImages().get(1).setId(235);
        doReturn(watch).when(productServiceSpy).getWatchById(watch.getId());

        productServiceSpy.delete(watch.getId());

        verify(productServiceSpy,times(1)).getWatchById(watch.getId());
        verify(imageServiceMock,times(1)).deleteImage(watch.getWatchImages().get(0));
        verify(imageServiceMock,times(1)).deleteImage(watch.getWatchImages().get(1));
        verify(watchDaoMock,times(1)).delete(watch);
    }

    @Test
    public void testUpdate() throws Exception {

        productService = new ProductServiceImpl();
        initImageServiceDaoMock();
        initDictionaryDaoMock();
        initWatchDaoMock();
        ProductService productServiceSpy = spy(productService);
        WatchDto watchDto = createWatchDto();
        Watch watch = DtoConverter.getWatch(watchDto);
        WatchImage watchImage = new WatchImage();
        watchImage.setId(346);
        when(imageServiceMock.getWatchImages(watch)).thenReturn(Arrays.asList(watchImage));

        productServiceSpy.update(watchDto);

        verify(imageServiceMock,times(1)).saveImageAndGetLink(watchDto.getMainImage());
        verify(dictionaryDaoMock,times(1)).getProperty(Brand.class, watchDto.getBrandName());
        verify(dictionaryDaoMock,times(1)).getProperty(Gender.class, watchDto.getGenderName());
        verify(dictionaryDaoMock,times(1)).getProperty(Movement.class, watchDto.getMovementName());
        verify(watchDaoMock,times(1)).update(DtoConverter.getWatch(watchDto));
        verify(imageServiceMock,times(1)).getWatchImages(watch);
        verify(imageServiceMock,times(1)).deleteImage(watchImage);
        verify(imageServiceMock,times(1)).saveImage(new ImageDto(watch.getId(),watchDto.getSmallImages().get(0)));
        verify(imageServiceMock,times(1)).saveImage(new ImageDto(watch.getId(),watchDto.getSmallImages().get(0)));
    }
}
