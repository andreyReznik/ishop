<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page session="false" %>

<style>
    .error {
        color: #ff0000;
    }
</style>


<form:form modelAttribute="user" action="/registerHandle" method="POST" enctype="utf8">
    <div class="fieldset">
        <div class="col2-set">
            <div class="col-1 registered-users">
                <h2 class="legend">Register</h2>
                <ul class="form-list">
                    <li>
                        <label for="username" class="required" style="float: left">User name:<em>*</em></label>

                        <div class="input-box">
                            <form:input path="firstName" name="username" value="" id="username" type="text"
                                        class="input-text required-entry"
                                        title="User name" placeholder="User name"/>
                            <form:errors path="firstName" cssClass="error" element="div"/>
                        </div>
                    </li>
                    <li>
                        <label for="email" class="required">Email Address:<em>*</em></label>

                        <div class="input-box">
                            <form:input path="email" name="email" value="" id="email" type="email"
                                        class="input-text required-entry required-entry-login-email validate-email"
                                        title="Email Address" placeholder="Email Address"/>
                            <form:errors path="email" cssClass="error" element="div"/>
                        </div>

                    </li>
                    <li>
                        <label for="password" class="required">Password:<em>*</em></label>

                        <div class="input-box">
                            <form:input path="password" name="password" type="password"
                                        class="input-text required-entry required-entry-login-password validate-password"
                                        id="pass" title="Password" placeholder="Password"/>
                            <form:errors path="password" cssClass="error" element="div"/>
                        </div>
                    </li>

                    <li>
                        <label for="confirmPassword" class="required">Confirm password:<em>*</em></label>

                        <div class="input-box">
                            <form:input path="confirmPassword" name="confirmPassword" type="password"
                                        class="input-text required-entry required-entry-login-password validate-password"
                                        id="confirmPass" title="Confirm password" placeholder="Confirm password"/>
                            <form:errors path="confirmPassword" cssClass="error" element="div"/>
                        </div>
                    </li>


                    <li class="buttons-set">
                        <button type="submit" class="button" name="send" id="send1"><span><span>Register</span></span>
                        </button>
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

                </script>
            </div>
        </div>
    </div>
</form:form>
