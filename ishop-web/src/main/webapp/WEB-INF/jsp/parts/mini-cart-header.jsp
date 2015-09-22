<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:choose>
    <c:when test="${cart.watchList.size() > 0}">
        <c:set var="count" value="${0}"/>
        <c:forEach var="entry" items="${cart.watchList}">
            <c:set var="count" value="${count + entry.value}"/>
        </c:forEach>
        <div class="block-title">
            <strong id="cartHeader">
                My Shopping Bag
                <span>
                    <span class="no-margin no-padding no-display-device">(</span>
                    ${count}
                    <span class="no-margin no-padding no-display-device">)</span>
                </span>
            </strong>
        </div>
    </c:when>
    <c:otherwise>
        <div class="block-title no-items">
            <strong>My Shopping Bag</strong>
        </div>
    </c:otherwise>
</c:choose>
