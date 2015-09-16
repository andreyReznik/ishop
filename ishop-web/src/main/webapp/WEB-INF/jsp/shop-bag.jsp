<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="cart" id="shopping-cart">
    <div class="page-title shopping-cart">
        <h1>Shopping Cart</h1>
    </div>
    <jsp:include page="../jsp/fragment/cart.jsp"></jsp:include>
    <div id="cart-collaterals" class="cart-collaterals">
    </div>
</div>
<div id="tcapiScModal" class="jom-popup mfp-hide"></div>
<script type="text/javascript" src="${ctx}/js/shopBag.js"></script>

