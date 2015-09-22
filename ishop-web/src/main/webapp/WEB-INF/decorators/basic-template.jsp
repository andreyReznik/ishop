<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html class="wf-proximanova-i4-active wf-proximanova-i6-active wf-proximanova-i7-active wf-proximanova-n3-active wf-proximanova-n4-active wf-proximanova-n6-active wf-proximanova-n7-active wf-active"
      xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Watches</title>
<link rel="stylesheet" type="text/css"  href="${contextPath}/css/font.css"  media="all"    >
<link rel="stylesheet" type="text/css"  href="${contextPath}/css/style.css" media="all">
<link rel="stylesheet" type="text/css"  href="${contextPath}/css/adaptive.css" media="all" >
<script type="text/javascript"  src="${contextPath}/js/prototype.js"></script>
<script type="text/javascript"  src="${contextPath}/js/jquery.js"></script>
</head>
<body class="catalog-category-view categorypath- category-">
<div class="wrapper">
    <div class="page">
        <jsp:include page="../jsp/parts/basic-template-header.jsp"></jsp:include>
        <div>
            <decorator:body/>
        </div>
        <div class="footer-container">
            <div class="footer">
                <div class="footer-top"></div>
                <div class="hidden-style" id="backtop">
                    <a href="javascript:void(0)" onclick="jQuery(window).scrollTop(0);" alt="Back to Top">
                        <img src="${contextPath}/img/scroll_up.png" alt="Back to Top">
                    </a>
                </div>
            </div>
        </div>
        <div id="ajax-loader"></div>
        <div id="page-overlay"></div>
    </div>
</div>
</body>
<script type="text/javascript" src="${contextPath}/js/template.js"></script>
</html>

