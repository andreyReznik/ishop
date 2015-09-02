package ua.sourceit.ishop.api.util;

import ua.sourceit.ishop.api.exception.BadRequestException;

/**
 * @author: areznik
 */

public class ParamValidator {


    public static void validateGetProductsParameters(int start, int limit) throws BadRequestException {
        if ((start < 0)){
            throw new BadRequestException("start must be zero or positive");
        }
        if ((limit <= 0)){
            throw new BadRequestException("limit must be positive");
        }

    }
}
