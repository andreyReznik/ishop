<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<div class="main col1-layout">
<div class="col-main">
<div class="category-view">
<div class="plp-header-block" id="plpheaderblock" style="min-height:50px;">
    <div class="plp-header-content-block" id="noimg">
        <h1 class="category-description std">
            <div id="categorynames">
                Watches
            </div>
        </h1>
    </div>
</div>
<div class="block-layered-nav-container">
    <span class="filter-mob-link">FILTERS</span>

    <div style="position: relative;" class="block-layered-nav-wrapper">
        <div class="block-layered-nav-inner-wrapper">
            <div class="block-layered-nav-mobHeader">
                Filters<span class="close-btn">X</span>
                <a href="javascript:;" class="clear-btn clear-btn-mob top-clear-btn">Clear All Filters</a>
            </div>
            <div class="block block-layered-nav">
                <div class="block-title user-select-none" id="jqFilterOptionsTitle">
                    <span>FILTERS</span>
                </div>
                <div style="display: none;" class="block-mob-links">
                    <div class="back-btn">See all filters</div>
                    &nbsp;&nbsp;
                    <div class="done-btn">Save and Add More Filters</div>
                    <a href="javascript:;" class="clear-btn clear-btn-mob ">Clear All Filters</a>
                    <h4 class="selected-filter-heading"></h4>
                </div>
                <div class="block-content" id="jqFilterOptionsBlock">
                    <dl id="narrow-by-list">
                        <div id="filter-wrapper-left"></div>
                        <div id="filter-wrapper-right"></div>
                        <div class="tab-button-bar">
                            <div class="LHS"><a href="javascript:;" class="clear-btn">CLEAR ALL</a></div>
                            <div class="RHS"><a href="javascript:;" class="done-btn no-ajax">DONE</a></div>
                        </div>


                        <div class="filter-item" id="jQfilterItem_3">
                            <dt class="filter-header user-select-none odd">Brand<span
                                    class="jq-selected-filters-mob"></span></dt>
                            <dd class="filter-body brands-filter odd" style="display: none;">
                                <div class="brand-search-box"><input autofocus="" autocomplete="off"
                                                                     placeholder="Begin typing to search by brand"
                                                                     id="id_search" name="search" type="text"></div>


                                <div class="slimScrollDiv">
                                    <ol style="overflow: hidden; width: auto; height: 150px;" class="layerednavigation">
                                        <c:forEach items="${brands}" var="brand">
                                            <li id="manufacturer-${brand.id}" class="__jqFilterOptions">
                                                <a>${brand.name}</a>
                                            </li>
                                        </c:forEach>
                                    </ol>
                                    <div class="slimScrollBar slimScrollBarStyle"></div>
                                    <div class="slimScrollRail slimScrollRailStyle"></div>
                                </div>
                            </dd>
                        </div>
                        <div class="filter-item" id="jQfilterItem_4">
                            <dt class="filter-header user-select-none even">Gender<span
                                    class="jq-selected-filters-mob"></span></dt>
                            <dd class="filter-body  even" style="display: none;">


                                <ol class="layerednavigation">
                                    <c:forEach items="${genders}" var="gender">
                                        <li id="gender-${gender.id}" class="jqFilterOptions">
                                            <a>${gender.name}
                                                <span class="item-count">(${gender.amount})</span>
                                            </a>
                                        </li>
                                    </c:forEach>
                                </ol>
                            </dd>
                        </div>
                        <div class="filter-item" id="jQfilterItem_7">
                            <dt class="filter-header user-select-none odd">Movement<span
                                    class="jq-selected-filters-mob"></span></dt>
                            <dd class="filter-body  odd" style="display: none;">


                                <ol class="layerednavigation">
                                    <c:forEach items="${movements}" var="movement">
                                        <li id="movement-${movement.id}" class="jqFilterOptions">
                                            <a>${movement.name}
                                                <span class="item-count">(${movement.amount})</span>
                                            </a>
                                        </li>
                                    </c:forEach>
                                </ol>
                            </dd>
                        </div>
                        <div class="filter-item" id="jQfilterItem_9">
                            <dt class="filter-header user-select-none odd">Price<span
                                    class="jq-selected-filters-mob"></span></dt>
                            <dd class="filter-body  odd" style="display: none;">


                                <ol class="layerednavigation">
                                    <c:forEach items="${priceGroups}" var="priceGroup">
                                        <li id="price_filter-${priceGroup.id}" class="jqFilterOptions">
                                            <a>&lt; ${priceGroup.name}
                                                <span class="item-count">(${priceGroup.amount})</span>
                                            </a>
                                        </li>
                                    </c:forEach>
                                </ol>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="category-products">
    <div>
        <div class="sort-by text-right cat-sort-by">
            <div class="fixedWidth category-products-filter">
                <select onChange="alert('not implemented yet')">
                    <option value="/product/notImpl?dir=asc&amp;order=price">
                        Price
                    </option>
                    <option value="/product/notImpl?dir=desc&amp;order=bestsellers">
                        Best Sellers
                    </option>
                    <option value="/product/notImpldir=desc&amp;order=most_viewed" selected="selected">
                        Most Viewed
                    </option>
                    <option value="/product/notImpl?dir=desc&amp;order=savingsoff">
                        Savings (% Off)
                    </option>
                </select>
            </div>
        </div>
    </div>


    <div class="toolbar">
        <div class="pager">
            <div class="pages" style="display:none;">
                <strong>Page:</strong>
                <ol>
                    <li class="current">${nextPage}</li>
                    <c:if test="${nextPage !=0}">
                        <li><a href="/product/all/?p=${nextPage}">${nextPage}</a></li>
                    </c:if>
                </ol>

            </div>


        </div>
    </div>


    <ul class="products-grid">
        <c:forEach items="${watches}" var="watch">
            <li class="item simple-config" id="product-${watch.id}">
                <div class="product-image-wrapper">
                    <a href="/product/view/${watch.id}" title="" class="product-image"><img
                            src="${watch.mainImage}"
                            alt=""></a>
                </div>
                <div class="product-info">
                    <h2 class="product-name">
                        <a href="/product/view/${watch.id}" title="">
                            <span class="manufacturer">${watch.brand.name}</span>
                                ${watch.info} </a>
                    </h2>
                    <a href="/product/view/${watch.id}" title="" class="price-link">
                        <div class="price-box">
                            <p class="special-price">
                <span class="price" id="product-price-${watch.id}">
                    <fmt:setLocale value="en_US" scope="session"/>
                    <fmt:formatNumber value="${watch.price}"
                                      type="currency"/>                </span>
                            </p>
                        </div>
                    </a>
                </div>
            </li>
        </c:forEach>
    </ul>
    <a class="jqLoad" href="/product/all/?p=2">LOAD MORE</a>
    <div class="toolbar-bottom">
        <div class="sorter">
            <div class="sort-by text-right cat-sort-by">
                <div class="selector fixedWidth"><span>
                    Most Viewed                </span><select
                        style="float:right;height:30px;text-transform:uppercase;width:215px;padding:0px 7px;">
                    Price
                    </option>
                    <option value="/product/notImpl/?dir=desc&amp;order=bestsellers">
                        Best Sellers
                    </option>
                    <option value="/product/notImpl/?dir=desc&amp;order=most_viewed"
                            selected="selected">
                        Most Viewed
                    </option>
                    <option value="/product/notImpl/?dir=desc&amp;order=savingsoff">
                        Savings (% Off)
                    </option>
                </select></div>
            </div>
        </div>


        <div class="toolbar">
            <div class="pager">
                <div class="pages" style="display:none;">
                    <strong>Page:</strong>
                    <ol>
                        <li>
                            <a class="next i-next" href="/product/notImpl/?p=2" title="Next">
                                <img src="${ctx}/img/pager_arrow_right.gif"
                                     alt="Next" class="v-middle">
                            </a>
                        </li>
                    </ol>

                </div>
            </div>
        </div>
    </div>
</div>
<div id="wait" class="loadingwait"><img
        src="${ctx}/img/ajax-loader.gif"><br>Loading..
</div>
</div>
</div>
</div>

<script type="text/javascript" src="${ctx}/js/list.js"></script>