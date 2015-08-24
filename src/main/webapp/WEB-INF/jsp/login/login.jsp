<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form" %>



<form action="/loginHandler" method="post" id="login-form">
    <div class="fieldset">
        <div class="col2-set">
            <div class="col-1 registered-users">
                <h2 class="legend">Log in</h2>
                <ul class="form-list">
                    <li>
                        <label for="username" class="required" style="float: left"><em>*</em>Email Address</label>

                        <div class="input-box">
                            <input name="username" value="" id="username" type="text"
                                   class="input-text required-entry validate-email" placeholder="Email Address"
                                   title="Email Address">
                        </div>
                    </li>
                    <li>
                        <label for="password" class="required" style="float: left"><em>*</em>Password</label>

                        <div class="input-box">
                            <input type="password" name="password" id="password" title="Password"
                                   class="input-text required-entry required-entry-register-password validate-password"
                                   placeholder="Password">
                        </div>
                    </li>
                    <li id="remember-me-box" class="control">
                        <div class="input-box">
                            <div class="checker"  id="uniform-remember_meQxAoFEHsX1"><span class="checked"><input
                                    type="checkbox" name="remember-me" class="checkbox"
                                    id="remember_meQxAoFEHsX1" checked="checked" title="Remember Me"></span></div>
                        </div>
                        <label for="remember_meQxAoFEHsX1">Remember Me</label>
                        <a class="link-tip" href="#">(What's this?)</a>
                    </li>
                    <li class="buttons-set">
                        <button type="submit" class="button" name="send" id="send1"><span><span>Log in</span></span>
                        </button>
                        <c:if test="${not empty SPRING_SECURITY_LAST_EXCEPTION}">
                            <p colspan="2" style="color: red" class="errors">${SPRING_SECURITY_LAST_EXCEPTION.message }</p>
                            <c:remove var = "SPRING_SECURITY_LAST_EXCEPTION" scope = "session" />
                        </c:if>
                    </li>
                </ul>

                <script type="text/javascript">
                    //<![CDATA[
                    var showTooltip = function () {
                        this.rememberTip = new Enterprise.Widget.Dialog(
                                'What is this?',
                                '<p>Checking &quot;Remember Me&quot; will let you access your shopping cart on this computer when you are logged out</p>' +
                                        '<div class="buttons-set"><button type="button" class="button btn-close"><span><span>Close</span></span></button></div>',
                                'popup-remember-tip'
                        ),
                                $(this.rememberTip.getContent()).select('button.btn-close')[0].onclick = this.rememberTip.hide.bind(this.rememberTip);
                        this.rememberTip.show();
                        return false;
                    }

                    document.observe("dom:loaded", function () {
                        $$('#remember-me-box a').each(function (element) {
                            Event.observe(element, 'click', showTooltip);
                        });
                    });
                    //]]>
                </script>
            </div>
        </div>
    </div>
</form>
