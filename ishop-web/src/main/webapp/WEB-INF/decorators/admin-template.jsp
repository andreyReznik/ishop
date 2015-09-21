<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
    <link rel="stylesheet" href="${contextPath}/css/font.css" type="text/css" media="all"/>
    <link rel="stylesheet" href="${contextPath}/foundation/css/foundation.css" type="text/css" media="all"/>
    <link rel="stylesheet" href="${contextPath}/css/admin.css" type="text/css" media="all"/>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin | Welcome</title>
</head>
<body>
<decorator:body></decorator:body>
<script type="text/javascript" src="${contextPath}/foundation/js/vendor/modernizr.js"></script>
<script type="text/javascript" src="${contextPath}/foundation/js/vendor/jquery.js"></script>
<script type="text/javascript" src="${contextPath}/foundation/js/foundation.min.js"></script>
<script type="text/javascript" src="${contextPath}/js/admin.js"></script>
<script type="text/javascript" src="${contextPath}/js/jquery.canvasjs.min.js"></script>
<script>
    jQuery(document).foundation();
</script>
</body>
</html>