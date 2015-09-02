<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html class="wf-proximanova-i4-active wf-proximanova-i6-active wf-proximanova-i7-active wf-proximanova-n3-active wf-proximanova-n4-active wf-proximanova-n6-active wf-proximanova-n7-active wf-active"
      xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<!--[if IE 9]>
<meta http-equiv="X-UA-Compatible" content="IE=8">
<![endif]-->
<!--[if LTE IE 8]>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<![endif]-->
<title>Watches</title>

<link media="all"      href="${ctx}/css/style.css"      rel="stylesheet">
<link rel="stylesheet" type="text/css" href="${ctx}/css/style1.css" media="all">
<link rel="stylesheet" type="text/css" href="${ctx}/css/style2.css" media="print">
<link                  href="${ctx}/css/style3.css"  type="text/css" rel="stylesheet" >
<script type="text/javascript" src="${ctx}/js/script2.js"></script>
<script src="${ctx}/js/jquery.js"></script>
</head>

<body class=" catalog-category-view categorypath- category-">
<div class="wrapper">
<div class="page">
<div class="header-container">
    <div class="header">
        <div class="push-button"><a id="jqCorraMenu" href="javascript:;">Menu</a></div>
        <div class="top-links-joma">
            <div class="top-left-links"><span class="live-chat-top-head">
    </span><span class="phone-number"><p id="callus"><a>developed by Andrey Reznik</a>
            </p></span></div>
            <div class="top-links-cont">
                <c:out value="${miniCart}"  escapeXml="false"/>
                <jsp:include page="../jsp/fragment/miniCart.jsp"></jsp:include>
                <!--<span class="seperator">|</span>-->
                <div class="top-myaccount" id="top-myaccount">
                    <span id="top-myaccount-handle" data-href="/product/notImpl">
                        My account
                    </span>

                    <div id="myAccountContent" class="top-my-account-block" style="display:none">
                        <div class="inner-wrapper">
                            <ul class="links">
                                <sec:authorize access="isAnonymous()">
                                    <li class="first"><a class="jqLogin" onclick="window.location='/login';"  id="1" title="Log In">Log In</a></li>
                                    <li class=" last"><a class="jqLogin" onclick="window.location='/register';" title="register">Register</a></li>
                                </sec:authorize>
                                <sec:authorize access="isAuthenticated()">
                                    <li class="first">
                                        <a href="/logout" id="3" title="Log Out">Log Out
                                            <span class="vip-points-count"> </span>
                                        </a>
                                    </li>
                                </sec:authorize>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="free-shipping"><span style="color:#D80D0D;"><a style="color:#D80D0D;text-decoration:none;"
                                                                   alt=""></a></span></div>
        <div class="branding">
            <div class="mob-chk-logo" style="display:none"><a href="/product/all" title="Watches" class="logo"><img
                    src="${ctx}/img/mob-logo.png"
                    alt="Watches"></a></div>
            <h2 class="logo"><strong>Watches</strong><a href="/product/all" title="Watches"
                                                        class="logo"><span><img title="Watches"
                                                                                src="${ctx}/img/logo.png"
                                                                                alt="Watches"></span></a></h2>

        </div>
        <div class="quick-access">
            <sec:authorize access="isAuthenticated()">
                <strong>Hello, <sec:authentication property="principal.username"/></strong>
            </sec:authorize>

            <sec:authorize access="isAnonymous()">
                <div class="social-media-icons">
                        <a href="/fbLogin">
                            <img src="http://i.stack.imgur.com/LKMP7.png" width="70" height="36" style="cursor:pointer"  alt="enter image description here">
                        </a>
                </div>
            </sec:authorize>
        </div>
    </div>
    <div class="nav-container">
    </div>

    <div class="top-container">
        <div class="widget widget-banner">
            <ul>
                <li>THIS IS ISHOP DEMO VERSION
                </li>
            </ul>
        </div>
    </div>

</div>

<div>
    <decorator:body/>
</div>

<div class="footer-container">
    <div class="footer">
        <div class="footer-top">
        </div>
        <div style="display: none;" id="backtop">
            <a href="javascript:void(0)" onclick="jQuery(window).scrollTop(0);" alt="Back to Top">
                <img src="${ctx}/img/scroll_up.png"
                     alt="Back to Top">
            </a>
        </div>
    </div>
</div>

<div id="ajax-loader"></div>
<div id="page-overlay"></div>

</div>
</div>
</body>

<script type="text/javascript">
    Enterprise.TopMyAccountLinks.initialize('myAccountContent');
    jQuery(document).ready(function () {
        jQuery('body').mouseover(function (e) {
            var elem = e.target;
            if (jQuery(elem).parents('#top-myaccount').length > 0 || jQuery(elem).attr("id") === 'top-myaccount') {
                jQuery("#myAccountContent").stop(true, true).show();
                jQuery('.top-myaccount').addClass('expanded');
            }
            else {
                jQuery("#myAccountContent").hide();
                jQuery('.top-myaccount').removeClass('expanded');
            }

        });

        if (!isTouch()) {
            jQuery("#top-myaccount-handle").click(function () {
                if (jQuery("#myAccountContent ul li").length > 2) {
                    window.location.href = jQuery(this).attr('data-href');
                }
            });
        }
    });

    var liLength = jQuery('#myAccountContent li').length;
    if (liLength > 2) {
        jQuery('#my-accunt-menu-user').show();
        jQuery('#my-accunt-menu-guest').hide();
    } else {
        jQuery('#my-accunt-menu-user').hide();
        jQuery('#my-accunt-menu-guest').show();
    }

    Event.observe(window, 'scroll', function () {
        if (document.viewport.getScrollOffsets()['top'] >= 400) {
            $('backtop').setStyle({'display': 'block'});
        } else {
            $('backtop').setStyle({'display': 'none'});
        }
    });


    jQuery(document).ready(function () {
        jQuery(".owl-carousel").owlCarousel({autoplayTimeout: 6000, autoplayHoverPause: true, autoplay: true});
    });

</script>
</html>

