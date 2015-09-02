<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<link rel="stylesheet" href="${ctx}/css/product.css">

<div class="main col1-layout">
<div class="col-main">

<div class="product-view">
<form action="" method="post" id="product_addtocart_form">
<input name="form_key" value="C9BbhfmmcwMSlWH8" type="hidden">

<div class="product-essential">
<div class="product-img-box">

<!-- Begin magiczoomplus -->

<div class="MagicToolboxContainer MagicToolboxContainerStyle">
    <div class="onsale-product-container"><a href="javascript:;" id="jqZooomImgPrev" class="corraZoomNav prev">Prev</a>
        <a class="MagicZoomPlus MagicZoomPlusStyle"
           href="${watch.mainImage}"
           title="">
            <span>
            <div id="corraMagicScrollThumbs" class="corraMagicScrollThumbs">
                <img width="100%"
                     src="${watch.mainImage}"
                     alt="${watch.info}">
            </div>
            </span>
        </a>

        <a href="javascript:;" id="jqZooomImgNext" class="corraZoomNav next">Next</a>
        <!-- MOVING HINT BELOW IMAGE - HINT SETTING IN MAGICZOOM ADMIN NEEDS TO BE DISABLED  <div class="click-to-enlarge"><a style="cursor:text">CLICK IMAGE TO ENLARGE</a></div> -->
        <div id="MagicToolboxSelectors71545" class="MagicToolboxSelectorsContainer" style="margin-top: 15px">
            <c:forEach var="image" items="${watch.watchImages}">
                <a
                    onclick="magicToolboxOnChangeSelector(this);"
                    href="${image.bigImage}"
                    rev="${image.bigImage}"
                    class="MagicThumb-swap"><img
                    src="${image.smallImage}"
                    alt="${watch.info} img1">
                </a>
            </c:forEach>
        </div>
    </div>
</div>

<!-- End magiczoomplus -->
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
            <span class="product-ids">Item No. ${watch.model}
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
                                <fmt:formatNumber value="${watch.price} "
                                                  type="currency"/>
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
                            onclick="productAddToCartForm.submit(this)"><span><span>Buy Now</span></span></button>
                </div>

            </div>
        </div>
    </div>
</div>
</div>
</form>

<div class="col2-set product-bottom-col2-set">
    <div class="col-1">
        <div class="product-collateral">
            <dl  id="collateral-tabs" class="collateral-tabs tab-list collateral-tabs-style" name="collateral-tabs">
                <dt  class="tab first active" id="tab-details"><span>Details</span></dt>
                <dd class="tab-container" id="tab-container-details">
                    <div class="tab-content">
                        <div class="product-description">
                            <div class="std">${watch.details}</div>
                        </div>
                        <div class="product-attributes">

                            <div class="attribute-group">
                                <h3>Information</h3>
                                <ul class="attribute-list" id="attribute-list-203">
                                    <li class="first odd">
                                        <label class="label">Brand<span class="prd-tab-colon">:</span></label>

                                        <div class="attribute-data">
                                            <span class="data">${watch.brand.name}</span>
                                        </div>
                                    </li>
                                    <li class="odd">
                                        <label class="label">Model<span class="prd-tab-colon">:</span></label>

                                        <div class="attribute-data">
                                            <span class="data">${watch.model}</span>
                                        </div>
                                    </li>
                                    <li class="even">
                                        <label class="label">Gender<span class="prd-tab-colon">:</span></label>

                                        <div class="attribute-data">
                                            <span class="data">${watch.gender.name}</span>
                                        </div>
                                    </li>
                                    <li class="last odd">
                                        <label class="label">Movement<span class="prd-tab-colon">:</span></label>

                                        <div class="attribute-data">
                                            <span class="data">${watch.movement.name}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</div>
</dd>
</dl>
</div>

</div>
</div>

<script type="text/javascript">
    decorateGeneric($$('#attribute-list-203 li'), ['odd', 'even', 'first', 'last']);

</script>
<script type="text/javascript" src="${ctx}/js/product.js"></script>




