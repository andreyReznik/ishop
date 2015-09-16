<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<div>
    <table>
        <tr>
            <td>
                <h1 class="body">To place an order you need to log in.</h1>
            </td>
        </tr>
        <tr>
            <td>
                <h1 class="body">You can also use authentication via the social network Facebook</h1>
            </td>
        </tr>
        <tr>
            <td>
                <span class="social-media-icons">
                <a href="/fbLogin">
                <img src="${ctx}/img/fb-login.png" class="facebook-login-button" alt="facebook login icon" href="/fbLogin" >
                    </a>
                </span>
            </td>
        </tr>
    </table>
</div>