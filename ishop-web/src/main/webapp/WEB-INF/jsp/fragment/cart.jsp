<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<div id="bag-content">
    <table id="shopping-cart-table" class="data-table cart-table">
        <colgroup>
            <col width="1">
            <col width="1">
            <col width="1">
            <col width="1">
            <col width="1">
            <col width="1">
            <col width="1">
        </colgroup>
        <thead>
            <tr class="first last">
                <th rowspan="1" class="cart-item"><span class="nobr">Item</span></th>
                <th rowspan="1"></th>
                <th rowspan="1"></th>
                <th class="a-center cart-price" colspan="1"><span class="nobr">Price</span></th>
                <th rowspan="1" class="a-center cart-qty">Qty</th>
                <th class="a-center cart-subtotal" colspan="1">Subtotal</th>
                <th rowspan="1" class="a-center cart-remove">Remove</th>
            </tr>
        </thead>
        <tfoot>
            <tr class="first last">
                <td colspan="50" class="a-right last">
                    <button type="button" title="Continue Shopping" class="button btn-continue" onclick="window.history.back();">
                        <span><span>Continue Shopping</span></span>
                    </button>
                    <sec:authorize access="isAnonymous()">
                        <c:set var="orderLink" scope="session" value="/needLogin"/>
                    </sec:authorize>
                    <sec:authorize access="isAuthenticated()">
                        <c:set var="orderLink" scope="session" value="/product/order/create"/>
                    </sec:authorize>
                    <c:if test="${cart.watchList.size() != 0 }">
                    <button  onclick="window.location='${orderLink}';" name="update_cart_action"
                             value="empty_cart" title="CHECKOUT" class="button btn-empty" id="empty_cart_button">
                        <span><span>MAKE ORDER</span></span>
                    </button>
                    </c:if>
                </td>
            </tr>
        </tfoot>
        <tbody>
            <c:set var="grandTotal"  value="${0}"/>
            <c:forEach var="entry" items="${cart.watchList}">
                <tr class="jqCartItem first last odd">
                    <td class="cart-item-view-image">
                        <div class="cart_first_wrap">
                            <a>
                                <img src="${entry.key.watchImages.toArray()[0].smallImage}" width="107" height="107"
                                     alt="${entry.key.info}">
                            </a>
                        </div>
                    </td>
                    <td class="cart-item-view-name">
                        <div class="cart-item-view-image-special">
                            <h2 class="product-name">
                                <a href="/product/view/$entry.key.id">${entry.key.info}</a>
                            </h2>
                        </div>
                    </td>
                    <td class="a-center cart-item-view-price">
                    </td>
                    <td class="a-right cart-item-view-price-desktop">
                        <span class="cart-price">
                            <span class="price">
                                <fmt:setLocale value="en_US" scope="session"/>
                                <fmt:formatNumber value="${entry.key.price}" type="currency"/>
                            </span>
                        </span>
                    </td>
                    <td class="a-center cart-item-view-qty">
                        <input name="cart[${entry.key.id}][qty]" id="qty-val_${entry.key.id}" value="${entry.value}"
                               size="4" title="Qty" class="input-text qty" maxlength="12" type="number">
                        <a href="javascript:" onclick="updateCart('qty-val_${entry.key.id}', ${entry.key.id})"
                           name="update_cart_action" title="Update" class="update">
                            Update
                        </a>
                        <span id="span-update-cart"></span>
                    </td>
                    <td class="a-right cart-item-view-subtotal">
                        <span class="cart-price">
                            <span id="cart-item-view-subtotal-${entry.key.id}" class="price">
                                <c:set var="subTotal" value="${entry.key.price * entry.value}"/>
                                <c:set var="grandTotal"  value="${grandTotal + subTotal}"/>
                                <fmt:setLocale value="en_US" scope="session"/>
                                <fmt:formatNumber value="${subTotal}" type="currency"/>
                            </span>
                        </span>
                    </td>
                    <td class="a-center cart-item-remove last">
                        <a href="/product/cart/delete/${entry.key.id}"
                            onclick="return confirm('Are you sure you would like to remove this item from the shopping cart?');"
                            title="Remove" class="btn-remove btn-remove2">
                            X
                        </a>
                    </td>
                </tr>
            </tbody>
        </c:forEach>
    </table>
    <div class="totals">
        <table id="shopping-cart-totals-table">
            <colgroup>
                <col>
                <col width="1">
            </colgroup>
            <tfoot>
                <tr>
                    <td  class="a-left " colspan="1">
                        <strong class="blackColor">
                            Grand Total:
                        </strong>
                    </td>
                    <c:if test="${cart.watchList.size() != 0 }">
                        <td style="" class="a-right ">
                            <strong>
                                <span id="grand-total" class="price">
                                    <fmt:setLocale value="en_US" scope="session"/>
                                    <fmt:formatNumber value="${grandTotal}" type="currency"/>
                                </span>
                            </strong>
                        </td>
                    </c:if>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
<script type="text/javascript">decorateTable('shopping-cart-table');</script>