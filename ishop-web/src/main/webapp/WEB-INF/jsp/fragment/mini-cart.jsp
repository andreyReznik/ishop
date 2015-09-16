<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<div class="top-cart">
    <jsp:include page="../parts/mini-cart-header.jsp"></jsp:include>
    <jsp:include page="../parts/mini-cart-body.jsp"></jsp:include>
    <script type="text/javascript">
        decorateList('mini-cart', 'none-recursive');
        Enterprise.TopCart.initialize('topCartContent');
    </script>
</div>