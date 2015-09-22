<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form action="" method="post" id="product_addtocart_form">
    <input name="form_key" value="C9BbhfmmcwMSlWH8" type="hidden">
    <div class="product-essential">
        <div class="product-img-box">
            <div class="MagicToolboxContainer MagicToolboxContainerStyle">
                <div class="onsale-product-container">
                    <a href="javascript:;" id="jqZooomImgPrev" class="corraZoomNav prev">
                        Prev
                    </a>
                    <a class="MagicZoomPlus MagicZoomPlusStyle" href="${watch.mainImage}" title="">
                        <span>
                            <div id="corraMagicScrollThumbs" class="corraMagicScrollThumbs">
                                <img width="100%" src="${watch.mainImage}" alt="${watch.info}">
                            </div>
                        </span>
                    </a>
                    <a href="javascript:;" id="jqZooomImgNext" class="corraZoomNav next">
                        Next
                    </a>
                    <div id="MagicToolboxSelector" class="MagicToolboxSelectorsContainer" >
                        <c:forEach var="image" items="${watch.watchImages}">
                            <a  onclick="magicToolboxOnChangeSelector(this);"
                                href="${image.bigImage}"  rev="${image.bigImage}" class="MagicThumb-swap">
                                <img src="${image.smallImage}" alt="${watch.info}">
                            </a>
                        </c:forEach>
                    </div>
                </div>
            </div>
            <img id="image" class="magiczoomplusImg" >
        </div>
        <div class="product-shop">
            <div class="product-main-info">
                <h1>
                    <span class="brand-name">
                        ${watch.brand.name}
                    </span>
                    <span id="product-name" class="product-name">
                        ${watch.info}
                    </span>
                    <span class="product-ids">
                        Item No. ${watch.model}
                    </span>
                </h1>
            </div>
            <div class="col2-set product-main-col2-set">
                <div class="col-1">
                    <div class="product-type-data-info">
                        <div class="price-shipping-info">
                            <div class="pdp-final-price">
                                <p class="final-price">
                                    <span>
                                        <fmt:setLocale value="en_US" scope="session"/>
                                        <fmt:formatNumber value="${watch.price}" type="currency"/>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="add-to-box">
                        <div class="add-to-cart">
                            <input name="qty" id="qty" maxlength="12" value="0" type="hidden">
                            <button class="button" type="button" onclick="productAddToCartForm.submit(this,'/product/ajax/cart/add/${watch.id}')">
                                <span>
                                    <span class="btn btn-5 btn-5a">Buy Now</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="add-to-box">
                        <div class="add-to-cart">
                            <button type="button" title="Buy Now" class="button btn-cart"
                                    onclick="productAddToCartForm.submit(this)">
                                <span><span>Buy Now</span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>