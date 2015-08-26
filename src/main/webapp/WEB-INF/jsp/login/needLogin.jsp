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
                <img src="http://i.stack.imgur.com/ZW4QC.png" style="cursor:pointer" href="/fbLogin" alt="enter image description here">
                    </a>
                </span>
            </td>
        </tr>
    </table>
</div>