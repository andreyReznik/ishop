<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="block-layered-nav-container">
    <span class="filter-mob-link">
        FILTERS
    </span>
    <div class="block-layered-nav-wrapper pos-relative">
        <div class="block-layered-nav-inner-wrapper">
            <div class="block-layered-nav-mobHeader">
                Filters
                <span class="close-btn">X</span>
                <a href="javascript:;" class="clear-btn clear-btn-mob top-clear-btn">
                    Clear All Filters
                </a>
            </div>
            <div class="block block-layered-nav">
                <div class="block-title user-select-none" id="jqFilterOptionsTitle">
                    <span>FILTERS</span>
                </div>
                <div class="block-mob-links hidden-style">
                    <div class="back-btn">
                        See all filters
                    </div>
                    &nbsp;&nbsp;
                    <div class="done-btn">
                        Save and Add More Filters
                    </div>
                    <a href="javascript:;" class="clear-btn clear-btn-mob ">
                        Clear All Filters
                    </a>
                    <h4 class="selected-filter-heading"></h4>
                </div>
                <div class="block-content" id="jqFilterOptionsBlock">
                    <dl id="narrow-by-list">
                        <div id="filter-wrapper-left"></div>
                        <div id="filter-wrapper-right"></div>
                        <div class="tab-button-bar">
                            <div class="LHS">
                                <a href="javascript:;" class="clear-btn">
                                    CLEAR ALL
                                </a>
                            </div>
                            <div class="RHS">
                                <a href="javascript:;" class="done-btn no-ajax">
                                    DONE
                                </a>
                            </div>
                        </div>
                        <div class="filter-item" id="jQfilterItem_3">
                            <dt class="filter-header user-select-none odd">
                                Brand
                                <span class="jq-selected-filters-mob"></span>
                            </dt>
                            <dd class="filter-body brands-filter odd hidden-style" >
                                <div class="brand-search-box">
                                    <input autofocus="" autocomplete="off" placeholder="Begin typing to search by brand"
                                           id="id_search" name="search" type="text">
                                </div>
                                <div class="slimScrollDiv">
                                    <ol  class="layerednavigation layerednavigationStyle">
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
                            <dt class="filter-header user-select-none even">
                                Gender
                                <span class="jq-selected-filters-mob"></span>
                            </dt>
                            <dd class="filter-body  even hidden-style">
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
                            <dt class="filter-header user-select-none odd">
                                Movement
                                <span class="jq-selected-filters-mob"></span>
                            </dt>
                            <dd class="filter-body  odd hidden-style">
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
                            <dt class="filter-header user-select-none odd">
                                Price
                                <span class="jq-selected-filters-mob"></span>
                            </dt>
                            <dd class="filter-body  odd hidden-style" >
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