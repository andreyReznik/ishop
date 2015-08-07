package ua.sourceit.ishop.services;

/**
 * Store all services
 * @author: areznik
 */

public interface ServiceFactory {

    public ProductService getProductService();
    public ProductPropertyService getProductPropertyService();


}
