<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<div class="header-container">
    <div class="header">
        <div class="push-button">
            <a id="jqCorraMenu" href="javascript:;">
                Menu
            </a>
        </div>
        <div class="top-links-joma">
            <div class="top-left-links">
                <span class="live-chat-top-head">
                </span>
                <span class="phone-number">
                    <p id="callus">
                        <a>developed by Andrey Reznik</a>
                    </p>
                </span>
            </div>
            <div class="top-links-cont">
                <c:out value="${miniCart}"  escapeXml="false"/>
                <jsp:include page="../fragment/mini-cart.jsp"></jsp:include>
                <div class="top-myaccount" id="top-myaccount">
                    <span id="top-myaccount-handle" data-href="/product/notImpl">
                        My account
                    </span>
                    <div id="myAccountContent" class="top-my-account-block hidden-style" >
                        <div class="inner-wrapper">
                            <ul class="links">
                                <sec:authorize access="isAnonymous()">
                                    <li class="first">
                                        <a class="jqLogin" onclick="window.location='/login';"  id="1" title="Log In">
                                            Log In
                                        </a>
                                    </li>
                                    <li class=" last">
                                        <a class="jqLogin" onclick="window.location='/register';" title="register">
                                            Register
                                        </a>
                                    </li>
                                </sec:authorize>
                                <sec:authorize access="isAuthenticated()">
                                    <li class="first">
                                        <a href="/logout" id="3" title="Log Out">
                                            Log Out
                                        </a>
                                    </li>
                                </sec:authorize>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="free-shipping"></div>
        <div class="branding">
            <div class="mob-chk-logo hidden-style">
                <a href="/product/all" title="Watches" class="logo">
                    <img src="${ctx}/img/mob-logo.png" alt="Watches">
                </a>
            </div>
            <h2 class="logo">
                <strong>Watches</strong>
                <a href="/product/all" title="Watches" class="logo">
                    <span><img title="Watches" src="${ctx}/img/logo.png" alt="Watches">
                    </span>
                </a>
            </h2>
        </div>
        <div class="quick-access">
            <sec:authorize access="isAuthenticated()">
                <strong>Hello, <sec:authentication property="principal.username"/></strong>
            </sec:authorize>
            <sec:authorize access="isAnonymous()">
                <div class="social-media-icons">
                    <a href="/fbLogin">
                        <img src="${ctx}/img/fb-login.png" class="facebook-login-button" alt="facebook login icon">
                    </a>
                </div>
            </sec:authorize>
        </div>
    </div>
    <div class="nav-container"></div>
    <div class="top-container">
        <div class="widget widget-banner">
            THIS IS ISHOP DEMO VERSION
        </div>
    </div>
</div>
