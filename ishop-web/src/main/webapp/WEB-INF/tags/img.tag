<%@ attribute name="src" required="false"    type="java.lang.String" %>
<%@ attribute name="id" required="false"    type="java.lang.String" %>
<%@ attribute name="alt" required="false"    type="java.lang.String" %>
<%@ attribute name="classes" required="false" type="java.lang.String" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<c:choose>
    <c:when test="${fn:contains(src, 'http://') }" >
        <img src="${src}" alt="${alt}" class="${classes}" id="${id}">
    </c:when>
    <c:otherwise>
        <img src="/image/${src}" alt="${alt}" class="${classes}" id="${id}">
    </c:otherwise>
</c:choose>