<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<div class="main col1-layout">
    <div class="col-main">
        <div class="category-view">
            <div class="plp-header-block" id="plpheaderblock" >
                <div class="plp-header-content-block" id="noimg">
                    <h1 class="category-description std">
                        <div id="categorynames">
                            Watches
                        </div>
                    </h1>
                </div>
            </div>
            <jsp:include page="parts/list-filter.jsp"></jsp:include>
            <div class="category-products">
                <div>
                    <div class="sort-by text-right cat-sort-by"></div>
                </div>
                <div class="toolbar">
                    <div class="pager">
                        <div class="pages hidden-style">
                            <strong>Page:</strong>
                            <ol>
                                <li class="current">${nextPage}</li>
                                <c:if test="${nextPage !=0}">
                                    <li>
                                        <a href="/product/all/?p=${nextPage}">${nextPage}</a>
                                    </li>
                                </c:if>
                            </ol>
                        </div>
                    </div>
                </div>
                <ul class="products-grid">
                    <c:forEach items="${watches}" var="watch">
                        <li class="item simple-config" id="product-${watch.id}">
                            <div class="product-image-wrapper">
                                <a href="/product/view/${watch.id}" title="" class="product-image">
                                    <img src="${watch.mainImage}" alt="watch image">
                                </a>
                            </div>
                            <div class="product-info">
                                <h2 class="product-name">
                                    <a href="/product/view/${watch.id}" title="">
                                        <span class="manufacturer">${watch.brand.name}</span>
                                        ${watch.info}
                                    </a>
                                </h2>
                                <a href="/product/view/${watch.id}" title="" class="price-link">
                                    <div class="price-box">
                                        <p class="special-price">
                                            <span class="price" id="product-price-${watch.id}">
                                                <fmt:setLocale value="en_US" scope="session"/>
                                                <fmt:formatNumber value="${watch.price}" type="currency"/>
                                            </span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </c:forEach>
                </ul>
                <a class="jqLoad" href="/product/all/?p=2">LOAD MORE</a>
            </div>
            <div id="wait" class="loadingwait">
                <img src="${contextPath}/img/ajax-loader.gif" alt="Loading..">
            </div>
        </div>
    </div>
</div>

<script type="text/javascript" src="${contextPath}/js/list.js"></script>