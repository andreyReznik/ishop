package ua.sourceit.ishop.api.controller;

import com.mangofactory.swagger.annotations.ApiError;
import com.mangofactory.swagger.annotations.ApiErrors;
import com.mangofactory.swagger.annotations.ApiModel;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import ua.sourceit.ishop.api.exception.BadRequestException;
import ua.sourceit.ishop.api.exception.NotFoundException;
import ua.sourceit.ishop.api.util.ApiConstants;
import ua.sourceit.ishop.api.util.ParamValidator;
import ua.sourceit.ishop.core.entity.Watch;
import ua.sourceit.ishop.core.model.statistic.VisitedResource;
import ua.sourceit.ishop.core.service.ProductService;
import ua.sourceit.ishop.core.service.StatisticService;
import ua.sourceit.ishop.core.util.DateUtil;

import javax.servlet.http.HttpServletResponse;
import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.Set;

/**
 * Controller for api requests
 * @author: areznik
 */
@Api(value=("/"+ ApiConstants.API_VERSION_1), description="Base operations with products")
@Controller
@RequestMapping(value={"/"+ ApiConstants.API_VERSION_1})
public class ApiController {

    @Autowired
    private ProductService productService;

    @Autowired
    private StatisticService statisticService;

    @ApiOperation(value = "Get range of products", notes = "start should be positive or 0. " +
            "limit should be positive", responseClass = "Watch")
    @ApiErrors(errors = {
            @ApiError(code = HttpServletResponse.SC_OK,             	   reason = "Request successful"),
            @ApiError(code = HttpServletResponse.SC_BAD_REQUEST,           reason = "invalid parameters"),
            @ApiError(code = HttpServletResponse.SC_INTERNAL_SERVER_ERROR, reason = "Interval server error")
    })
    @ApiModel(type = Watch.class)
    @RequestMapping(value = "/products", method = RequestMethod.GET)
    public @ResponseBody
    List<Watch> getProducts(@ApiParam(value = "start", required=true)
                            @RequestParam(value = "start", required = true)
                            int start,
                            @ApiParam(value = "limit", required=true)
                            @RequestParam(value = "limit", required = true)
                            int limit ) throws BadRequestException {
        ParamValidator.validateGetProductsParameters(start,limit);
        List<Watch> watchesByRange = productService.getWatchesByRange(start, limit);
        return watchesByRange;
    }


    @ApiOperation(value = "Get product by id",notes = "id should be positive or 0", responseClass = "Watch")
    @ApiErrors(errors = {
            @ApiError(code = HttpServletResponse.SC_OK,             	   reason = "Request successful"),
            @ApiError(code = HttpServletResponse.SC_BAD_REQUEST,           reason = "invalid parameters"),
            @ApiError(code = HttpServletResponse.SC_INTERNAL_SERVER_ERROR, reason = "Interval server error")
    })
    @ApiModel(type = Watch.class)
    @RequestMapping(value = "/product", method = RequestMethod.GET)
    public @ResponseBody
    Watch getProduct(@ApiParam(value = "id", required=true)
                     @RequestParam(value = "id", required = true)
                     int idProduct) throws NotFoundException {
        Watch watch = productService.getWatchById(idProduct);
        if (watch == null){
            throw new NotFoundException("product with id="+idProduct+" not found!");
        }
        return watch;
    }

    @ApiOperation(value = "Get visiting statistic by date",notes = "date should be as YYYYMMDD", responseClass = "VisitedResource")
    @ApiErrors(errors = {
            @ApiError(code = HttpServletResponse.SC_OK,             	   reason = "Request successful"),
            @ApiError(code = HttpServletResponse.SC_BAD_REQUEST,           reason = "invalid parameters"),
            @ApiError(code = HttpServletResponse.SC_INTERNAL_SERVER_ERROR, reason = "Interval server error")
    })
    @ApiModel(type = VisitedResource.class)
    @RequestMapping(value = "/stats", method = RequestMethod.GET)
    public @ResponseBody
    Set<VisitedResource> getProduct(@ApiParam(value = "date", required=true)
                                    @RequestParam(value = "date", required = true)
                                    String dateAsYyyyMmDd) throws ParseException {
        Date dateFromYyyyMMdd = DateUtil.getDateFromYyyyMMdd(dateAsYyyyMmDd);
        return statisticService.getVisitingStatistic(dateFromYyyyMMdd);
    }

}
