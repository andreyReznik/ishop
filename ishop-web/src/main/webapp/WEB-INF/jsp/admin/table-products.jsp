<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="im" tagdir="/WEB-INF/tags" %>

<table id="table-products">
    <thead>
    <tr class="first last data-table">
        <th>ID</th>
        <th>Image</th>
        <th>Info</th>
        <th>Price</th>
        <th>Active</th>
        <th>Edit</th>
        <th>Remove</th>
    </tr>
    </thead>
<tbody id="admin-table-products">
<c:forEach var="watch" items="${watches}">
    <tr class="first last">
        <td>${watch.id}</td>
        <td>
            <im:img classes="imgColumn" src="${watch.mainImage}" alt="watch image" />
        </td>
        <td>${watch.info}</td>
        <td>
            <fmt:setLocale value="en_US" scope="session"/>
            <fmt:formatNumber value="${watch.price}" type="currency"/>
        </td>
        <td>${watch.active}</td>
        <td class="a-center last">
            <a href="#"
               onclick="adminOperationsHelper.getProductDataForEdit(${watch.id})"
               title="Edit">
                <img src="${ctx}/img/edit.png" alt="edit" />
            </a>
        </td>
        <td class="a-center cart-item-remove last">
            <a href="#"
               onclick="adminOperationsHelper.deleteProduct(${watch.id})"
               title="Remove"
               class="btn-remove btn-remove2">X
            </a>
        </td>
    </tr>
</c:forEach>
</tbody>
</table>
