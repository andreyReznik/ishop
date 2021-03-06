<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:choose>
    <c:when test="${cart.watchList.size() > 0}">
        <div id="topCartContent" class="block-content" style="display:none">
            <div class="inner-wrapper">
                <p class="block-subtitle">
                    <span onclick="Enterprise.TopCart.hideCart()" class="close-btn">
                        Close
                    </span>
                </p>
                <ol id="mini-cart" class="mini-products-list">
                    <c:forEach var="entry" items="${cart.watchList}">
                        <li class="item last odd">
                            <a href="/product/view/${entry.key.id}"
                               title="${entry.key.info}" class="product-image">
                                <img src="${entry.key.watchImages.toArray()[0].smallImage}" alt="${entry.key.info}">
                            </a>
                            <div class="product-details">
                                <p class="product-name">
                                    <a class="second_link" href="/product/view/${entry.key.id}" title="${entry.key.info}">${entry.key.info}</a>
                                </p>
                                <div class="mini-cart-pro-details">
                                    <div class="mini-cart-qty">
                                        <span>Qty:</span>
                                        ${entry.value}
                                    </div>
                                    <div class="mini-cart-price">
                                        <span class="price">
                                            <span>
                                                <fmt:setLocale value="en_US" scope="session"/>
                                                <fmt:formatNumber value="${entry.key.price}" type="currency"/>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div class="mini-cart-bottom">
                                    <a href="/product/cart/delete/${entry.key.id}"
                                            onclick="return confirm('Are you sure you would like to remove this item from the shopping cart?');"
                                            title="Remove item" class="btn-remove">Remove
                                    </a>
                                </div>
                            </div>
                        </li>
                    </c:forEach>
                </ol>
                <div class="actions">
                    <button class="button" type="button" onclick="setLocation('/product/cart/view')">
                        <span>
                            <span class="btn btn-4 btn-4a">
                                Go to Shopping Bag
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </c:when>
    <c:otherwise>
        <div id="topCartContent" class="block-content" style="overflow: visible; display: none;">
            <div class="inner-wrapper">
                <p class="block-subtitle">
                    <span onclick="Enterprise.TopCart.hideCart()" class="close-btn">
                        Close
                    </span>
                </p>
                <p class="cart-empty">
                    There are no items in your bag.
                </p>
            </div>
        </div>
    </c:otherwise>
</c:choose>