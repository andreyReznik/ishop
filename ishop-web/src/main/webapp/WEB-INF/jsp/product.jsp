<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<link rel="stylesheet" href="${contextPath}/css/product.css">
<div class="main col1-layout">
    <div class="col-main">
        <div class="product-view">
            <jsp:include page="parts/product-main.jsp"></jsp:include>
            <jsp:include page="parts/product-detail.jsp"></jsp:include>
        </div>
    </div>
</div>
<script type="text/javascript">
    decorateGeneric($$('#attribute-list-203 li'), ['odd', 'even', 'first', 'last']);
</script>
<script type="text/javascript" src="${contextPath}/js/product.js"></script>




