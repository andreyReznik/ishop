package ua.sourceit.ishop.services;


/**
 * @author: areznik
 */

public class ServiceFactoryImpl implements ServiceFactory {

    private ProductService productService;
    private ProductPropertyService productPropertyService;


    @Override
    public ProductService getProductService() {
        return productService;
    }

    @Override
    public ProductPropertyService getProductPropertyService() {
        return productPropertyService;
    }

    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

    public void setProductPropertyService(ProductPropertyService productPropertyService) {
        this.productPropertyService = productPropertyService;
    }
}
