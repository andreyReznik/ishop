<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!-- ESI END DUMMY COMMENT [] -->
<div id="turpentine-esi-block-fcf536a99a02c5279350c4de39d2c5f2d98b01d56b511a35776d0059aff04c04" style=""></div>
<div class="main col1-layout">
<div class="col-main">
<div id="login-modal" class=" jom-popup mfp-hide ">
    <p style="display:none;" class="jqError"></p>

    <form action="/product/notImpl"
          method="post" id="login-form-main">
        <div class="col2">

            <h3>Log In</h3>

            <div id="wishlist-cnt"></div>
            <ul>
                <li>
                    <label for="email" class="required">Email Address:<em>*</em></label>

                    <div class="input-box">
                        <input name="login[username]" id="login-email"
                               class="input-text required-entry required-entry-login-email validate-email"
                               title="Email Address" placeholder="Email Address" type="email">
                    </div>
                </li>
                <li>
                    <label for="pass" class="required">Password:<em>*</em> <a class="jqForgotPassword"
                                                                              href="#forgotPassword-modal">Forgot your
                        password?</a></label>

                    <div class="input-box">
                        <input name="login[password]"
                               class="input-text required-entry required-entry-login-password validate-password"
                               id="login-pass" title="Password" placeholder="Password" type="password">
                    </div>
                </li>

                <li id="remember-me-box" class="control">
                    <div class="input-box">
                        <div id="uniform-remember_mewYbjpKIPOP" class="checker"><span class="checked"><input
                                name="persistent_remember_me" class="checkbox" id="remember_mewYbjpKIPOP"
                                checked="checked" title="Remember Me" type="checkbox"></span></div>
                    </div>
                    <label for="remember_mewYbjpKIPOP">Remember Me</label>
                    <a class="link-tip" href="#">(What's this?)</a>
                </li>

            </ul>
            <!--<div class="login-hr"></div>-->

            <button type="submit" class="button jqLoginSubmit"><span><span>LOG IN</span></span></button>


            <div class="button-box ">
                <a class="jqRegister" href="#register-modal">CREATE ACCOUNT</a>
            </div>
        </div>

    </form>
    <a title="Log In" id="login" href="#login-modal" class="jqLogin" style="display:none">Log In</a>

</div>
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
    jQuery(document).ready(function () {
        jQuery('.jqLogin').magnificPopup({
            type: 'inline',
            midClick: true,
            callbacks: {
                beforeOpen: function () {
                    jQuery('#login-modal').find('.jqError').html('');
                    jQuery('#login-modal').find('.jqError').hide();
                    jQuery('#register-modal').find('.jqError').html('');
                    jQuery('#register-modal').find('.jqError').hide();
                    jQuery('#forgotPassword-modal').find('.jqError').html('');
                    jQuery('#forgotPassword-modal').find('.jqError').hide();
                    jQuery('#followup-modal').find('.jqError').html('');
                    jQuery('#followup-modal').find('.jqError').hide();
                    jQuery('#forgotPassword-modal').find('.jqsuccesmsg').html('');
                    jQuery('#forgotPassword-modal').find('.jqsuccesmsg').hide();
                },

            }
        });//for myaccount
        jQuery('.JLogin').magnificPopup({
            type: 'inline',
            midClick: true,
            callbacks: {
                beforeOpen: function () {
                    jQuery('#login-modal').find('.jqError').html('');
                    jQuery('#login-modal').find('.jqError').hide();
                },
            }
        });	//for forgot password
        jQuery('.JQLogin').magnificPopup({
            type: 'inline',
            midClick: true,
            callbacks: {
                beforeOpen: function () {
                    jQuery('#login-modal').find('.jqError').html('');
                    jQuery('#login-modal').find('.jqError').hide();
                },
            }
        });	//for pdp wishlist							
        jQuery('.jqLogin').click(function () {
            jQuery('#advice-validate-email-login-email').hide();
            jQuery('#advice-required-entry-login-email').hide();
            jQuery('#login-email').removeClass('validation-failed').val('');
            jQuery('#advice-required-entry-login-pass').hide();
            jQuery('#advice-validate-password-login-pass').hide();
            jQuery('#login-pass').removeClass('validation-failed').val('');
            jQuery('#advice-required-entry-email_address').hide();
            jQuery('#advice-validate-email-email_address').hide();
            jQuery('#email_address').removeClass('validation-failed').val('');
            jQuery('#advice-required-entry-register-password').hide();
            jQuery('#advice-validate-password-register-password').hide();
            jQuery('#register-password').removeClass('validation-failed').val('');
        });

    });
    var loginForm = new VarienForm('login-form-main', true);

    jQuery("#login-form-main").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get some values from elements on the page: */
        var values = jQuery(this).serialize();
        var wishlistUrl = '';
        var loginUrl = '/product/notImpl';
        var isSecure = 0;
        if (isSecure == 1) {
            loginUrl = loginUrl.replace('http', 'https');
        }
        if (loginForm.validator && loginForm.validator.validate()) {
            /* Send the data using post and put the results in a div */
            jQuery.ajax({
                url: loginUrl,
                type: "post",
                data: values,
                dataType: "json",
                success: function (data) {
                    if (data.error) {
                        jQuery("#login-modal").find(".jqError").html(data.error);
                        jQuery("#login-modal").find(".jqError").show();
                    }
                    else if (data.success) {

                        var wishlistUrl = '';
                        if (jQuery('#hidWishlistUrl').length) {
                            wishlistUrl = jQuery('#hidWishlistUrl').val();
                            jQuery('#hidWishlistUrl').remove();
                            //jQuery('#wishlist-cnt').remove();
                            if (wishlistUrl != '') {
                                ajaxWishlist(wishlistUrl, false);
                            }
                        } else {
                            //window.location.href = data.success;

                            window.location.href = '/product/notImpl';

                        }
                    }
                    else if (data.redirect) {
                        window.location.href = data.redirect;
                    }
                },
                error: function () {
                }
            });
        }
    });


    function getUrlParm(url, parm) {
        var match = url.match('[?&/]' + parm + '/([^/&]+)');
        return(match ? match[1] : "");
    }

    //]]>
</script>

<div class="jom-popup mfp-hide" id="register-modal">
    <p style="display:none;" class="jqError"></p>

    <form action="/product/notImpl" method="post" id="form-register"
          enctype="multipart/form-data">
        <div class="col2">
            <input autocomplete="off" name="success_url" value="" type="hidden">
            <input autocomplete="off" name="error_url" value="" type="hidden">

            <h2>CREATE AN ACCOUNT</h2>
            <ul>
                <li>
                    <label for="email" class="required">Email Address:<em>*</em></label>

                    <div class="input-box">
                        <input autocomplete="off" data-default="Email Address" name="email" id="email_address"
                               title="Email Address"
                               class="input-text required-entry required-entry-login-email validate-email"
                               placeholder="Email Address" type="email">
                    </div>
                </li>
                <li>
                    <label for="pass" class="required">Password:<em>*</em></label>

                    <div class="field">
                        <div class="input-box">
                            <!-- <input type="text" id="rplaceholder" class="input-text required-entry-register-password validate-password" value="" onfocus="setRegisterPass();" placeholder="Password" />-->
                            <input autocomplete="off" name="password" id="register-password" title="Password"
                                   class="input-text required-entry required-entry-register-password validate-password"
                                   placeholder="Password" type="password">
                        </div>
                    </div>
                </li>
            </ul>
            <div class="hr"></div>
            <div>
                <button autocomplete="off" type="submit" class="button jqRegisterSubmit jqLoginSubmit"
                        title="CREATE ACCOUNT"><span><span>CREATE ACCOUNT</span></span></button>
                <p class="already-registered"><a href="#login-modal" class="jqLogin jqRegister">Already A Member? Log
                    In</a></p>
            </div>
        </div>

        <a href="#followup-modal" class="followup-modal" style="display:none;"></a>
        <a class="jqRegister" href="#register-modal" style="display:none;">CREATE ACCOUNT</a>
    </form>
</div>
<script type="text/javascript">
    //<![CDATA[  
    jQuery(document).ready(function () {
        jQuery('.jqRegister').magnificPopup({
            type: 'inline',
            midClick: true
        });
        jQuery('.followup-modal').magnificPopup({
            type: 'inline',
            midClick: true
        });

    });
    var registerForm = new VarienForm('form-register', true);
    Form.getElements('form-register').each(function (element) {
        element.setAttribute('autocomplete', 'off');
    });
    jQuery("#form-register").submit(function (event) {
        /* stop form from submitting normally */
        event.preventDefault();
        /* get some values from elements on the page: */
        var values = jQuery(this).serialize();
        var registerUrl = "/product/notImpl";
        var isSecure = 0;
        if (isSecure == 1) {
            registerUrl = registerUrl.replace('http', 'https');
        }
        if (registerForm.validator && registerForm.validator.validate()) {
            /* Send the data using post and put the results in a div */
            //jQuery('.mfp-close').trigger('click');
            jQuery("div#ajax-loader").show();
            jQuery.ajax({
                url: registerUrl,
                type: "post",
                data: values,
                dataType: "json",
                success: function (data) {
                    if (data.success) {
                        jQuery("div#ajax-loader").hide();
                        jQuery('.followup-modal').trigger('click');
                        var wishlistUrl = '';
                        if (jQuery('#hidWishlistUrl').length) {
                            wishlistUrl = jQuery('#hidWishlistUrl').val();
                            jQuery('#hidWishlistUrl').remove();
                            if (wishlistUrl !== '') {
                                ajaxWishlist(wishlistUrl, true);
                            }
                        }
                        jQuery('.jqLogin').html('My Account');
                        jQuery('.jqLogin').addClass('customer-name');
                        //jQuery('.jqLogin').removeClass('jqLogin');
                    } else if (data.error) {

                        jQuery("div#ajax-loader").hide();
                        jQuery('.jqRegister').trigger('click');
                        jQuery("#register-modal").find(".jqError").html(data.error);
                        jQuery("#register-modal").find(".jqError").show();
                        jQuery('.FPassword').magnificPopup({
                            type: 'inline',
                            midClick: true
                        });
                    }
                    return false;
                },
                error: function () {
                    // error
                }
            });
        }
    });

    //]]>
</script>
<div id="forgotPassword-modal" class="jom-popup mfp-hide">
    <p style="display:none;" class="jqError"></p>

    <p style="display:none;" class="jqsuccesmsg"></p>

    <div>
        <h2>Forgot Password?</h2>
    </div>
    <form action="/product/notImpl" method="post" id="form-password">
        <div>
            <p>Please enter your email address below. You will recieve a link to reset your password.</p>
            <ul>
                <li>
                    <label for="email" class="required">Email Address:<em>*</em></label>

                    <div class="input-box">
                        <input name="email" data-default="Email Address" alt="email" id="forgot_email"
                               class="input-text required-entry required-entry-login-email validate-email"
                               placeholder="Email Address" type="email">
                    </div>
                    <div class="btnSet">
                        <button type="submit" title="Send Mail" class="button btnStyle_2 jqLoginSubmit"><span><span>SEND MAIL</span></span>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </form>
    <p class="back-link"><a title="Log In" id="login" href="#login-modal" class="jqLogin">&lt; Back</a></p>
</div>
<script type="text/javascript">
    //<![CDATA[
    jQuery(document).ready(function () {
        jQuery('.jqForgotPassword').magnificPopup({
            type: 'inline',
            midClick: true
        });

        jQuery('.jqForgotPassword').click(function () {
            jQuery('#advice-validate-email-forgot_email').hide();
            jQuery('#advice-required-entry-forgot_email').hide();
            jQuery('#forgot_email').removeClass('validation-failed').val('');
        });

    });
    var forgotForm = new VarienForm('form-password', true);
    jQuery("#form-password").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get some values from elements on the page: */
        var values = jQuery(this).serialize();
        var forgotUrl = "/product/notImpl";
        var isSecure = 0;
        if (isSecure == 1) {
            forgotUrl = forgotUrl.replace('http', 'https');
        }
        if (forgotForm.validator && forgotForm.validator.validate()) {
            /* Send the data using post and put the results in a div */
            jQuery.ajax({
                url: forgotUrl,
                type: "post",
                data: values,
                dataType: "json",
                success: function (data) {
                    jQuery("#forgotPassword-modal").find(".jqError").hide();
                    jQuery("#forgotPassword-modal").find(".jqsuccesmsg").hide();
                    if (data.error) {
                        jQuery("#forgotPassword-modal").find(".jqError").html(data.error);
                        jQuery("#forgotPassword-modal").find(".jqError").show();
                    }
                    else if (data.success) {
                        jQuery("#forgotPassword-modal").find(".jqsuccesmsg").html(data.success);
                        jQuery("#forgotPassword-modal").find(".jqsuccesmsg").show();
                    }
                    else if (data.login) {
                        window.location.href = '/product/notImpl';
                    }
                },
                error: function () {
                }
            });
        }
    });
    //]]>
</script>
<div class="jom-popup mfp-hide" id="followup-modal">
    <p style="color:red;display:none;" class="jqError"></p>

    <form action="/product/notImpl" method="post" id="form-follow"
          enctype="multipart/form-data">
        <div class="col2">
            <h2>CREATE AN ACCOUNT</h2>
            <ul class="input-section">
                <li>
                    <label for="email" class="">What do we call you?</label>

                    <div class="input-box">
                        <input data-default="First Name" class="input-text required-entry-followup-firstname"
                               maxlength="255" title="First Name" name="firstname" id="followFirstName"
                               autocomplete="off" placeholder="Name" type="text">
                    </div>
                </li>
                <!--    <li>
                    <label for="email" class=""></label>
                    <div class="input-box">
                        <input type="text" data-default="Customer Question" name="customer_question" value="" title="" id="customer_question" class="input-text required-entry-followup-customerquestion" placeholder="Response" />
                    </div> -->


                <li class="control">
                    <div class="input-box">
                        <div id="uniform-is_subscribed" class="checker"><span class="checked"><input autocomplete="off"
                                                                                                     name="is_subscribed"
                                                                                                     title="Sign Up for Newsletter"
                                                                                                     value="1"
                                                                                                     id="is_subscribed"
                                                                                                     checked="checked"
                                                                                                     class="checkbox"
                                                                                                     type="checkbox"></span>
                        </div>
                    </div>
                    <label for="is_subscribed">Sign Me Up For Deals</label>
                </li>

            </ul>
            <div class="button-section">
                <button autocomplete="off" type="submit" class="button jqFollowSubmit jqLoginSubmit" title="SAVE"><span><span>SAVE</span></span>
                </button>
            </div>
        </div>
    </form>
    <div class="skip">
        <a href="/product/notImpl">No thanks, I don’t want to fill this out now.</a>
    </div>
</div>
<script type="text/javascript">
    //<![CDATA[     
    jQuery(document).ready(function () {
        jQuery('.followup-modal').magnificPopup({
            type: 'inline',
            midClick: true,
            callbacks: {
                beforeOpen: function () {
                    jQuery('#followup-modal').find('.jqError').html('');
                    jQuery('#followup-modal').find('.jqError').hide();
                },
            }
        });
    });
    var followUpForm = new VarienForm('form-follow', true);
    Form.getElements('form-follow').each(function (element) {
        element.setAttribute('autocomplete', 'off');
    });
    jQuery("#form-follow").submit(function (event) {
        /* stop form from submitting normally */
        event.preventDefault();
        /* get some values from elements on the page: */
        var values = jQuery(this).serialize();
        /* Send the data using post and put the results in a div */
        if (followUpForm.validator && followUpForm.validator.validate()) {
            jQuery.ajax({
                url: "/product/notImpl",
                type: "post",
                data: values,
                dataType: "json",
                success: function (data) {
                    if (data.error) {
                        jQuery("#followup-modal").find(".jqError").html(data.error);
                        jQuery("#followup-modal").find(".jqError").show();
                    } else if (data.success) {
                        window.location.href = '/product/notImpl';
                    }
                    return false;
                },
                error: function () {
                }
            });
        }
    });
    //]]>
</script>
<div id="turpentine-esi-block-00d1c921eede1cfdd6065d398e82a8ef5b1970c80f9a418d8a9aabbfd1bf965c" style=""></div>
<div class="category-view">
<div class="plp-header-block" id="plpheaderblock" style="min-height:50px;">
    <div class="plp-header-content-block" id="noimg">
        <h1 class="category-description std">
            <div id="categorynames">
                Watches <span
                    id="products-count">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 18879 Products Found</span>
            </div>
        </h1>
    </div>
</div>
<div class="block-layered-nav-container">
    <span class="filter-mob-link">FILTERS</span>

    <div style="position: relative;" class="block-layered-nav-wrapper">
        <div class="block-layered-nav-inner-wrapper">
            <div class="block-layered-nav-mobHeader">
                Filters<span class="close-btn">X</span>
                <a href="javascript:;" class="clear-btn clear-btn-mob top-clear-btn">Clear All Filters</a>
            </div>
            <div class="block block-layered-nav">
                <div class="block-title user-select-none" id="jqFilterOptionsTitle">
                    <span>FILTERS</span>
                </div>
                <div style="display: none;" class="block-mob-links">
                    <div class="back-btn">See all filters</div>
                    &nbsp;&nbsp;
                    <div class="done-btn">Save and Add More Filters</div>
                    <a href="javascript:;" class="clear-btn clear-btn-mob ">Clear All Filters</a>
                    <h4 class="selected-filter-heading"></h4>
                </div>
                <div class="block-content" id="jqFilterOptionsBlock">
                    <dl id="narrow-by-list">
                        <div id="filter-wrapper-left"></div>
                        <div id="filter-wrapper-right"></div>
                        <div class="tab-button-bar">
                            <div class="LHS"><a href="javascript:;" class="clear-btn">CLEAR ALL</a></div>
                            <div class="RHS"><a href="javascript:;" class="done-btn no-ajax">DONE</a></div>
                        </div>


                        <div class="filter-item" id="jQfilterItem_3">
                            <dt class="filter-header user-select-none odd">Brand<span
                                    class="jq-selected-filters-mob"></span></dt>
                            <dd class="filter-body brands-filter odd" style="display: none;">
                                <div class="brand-search-box"><input autofocus="" autocomplete="off"
                                                                     placeholder="Begin typing to search by brand"
                                                                     id="id_search" name="search" type="text"></div>


                                <div class="slimScrollDiv"
                                     style="position: relative; overflow: hidden; width: auto; height: 150px;">
                                    <ol style="overflow: hidden; width: auto; height: 150px;" class="layerednavigation">
                                        <c:forEach items="${brands}" var="brand">
                                            <li id="manufacturer-${brand.id}" class="__jqFilterOptions">
                                                <a>${brand.name}</a>
                                                    <%--<a href="/product/notImpl?manufacturer=${brand.id}">${brand.name}</a>--%>
                                            </li>
                                        </c:forEach>
                                    </ol>
                                    <div class="slimScrollBar"
                                         style="width: 9px; position: absolute; top: 0px; opacity: 1; display: block; border-radius: 9px; z-index: 99; right: 1px; height: 30px; background: rgb(65, 76, 92);"></div>
                                    <div class="slimScrollRail"
                                         style="width: 9px; height: 100%; position: absolute; top: 0px; display: block; border-radius: 7px; opacity: 1; z-index: 90; right: 1px; background: rgb(243, 244, 246);"></div>
                                </div>
                            </dd>
                        </div>
                        <div class="filter-item" id="jQfilterItem_4">
                            <dt class="filter-header user-select-none even">Gender<span
                                    class="jq-selected-filters-mob"></span></dt>
                            <dd class="filter-body  even" style="display: none;">


                                <ol class="layerednavigation">
                                    <c:forEach items="${genders}" var="gender">
                                        <li id="gender-${gender.id}" class="jqFilterOptions">
                                            <a>${gender.name}
                                                    <%--<a href="/product/notImpl?gender=${gender.id}">${gender.name}--%>
                                                <span class="item-count">(${gender.amount})</span>
                                            </a>
                                        </li>
                                    </c:forEach>
                                </ol>
                            </dd>
                        </div>
                        <div class="filter-item" id="jQfilterItem_7">
                            <dt class="filter-header user-select-none odd">Movement<span
                                    class="jq-selected-filters-mob"></span></dt>
                            <dd class="filter-body  odd" style="display: none;">


                                <ol class="layerednavigation">
                                    <c:forEach items="${movements}" var="movement">
                                        <li id="movement-${movement.id}" class="jqFilterOptions">
                                                <%--<a href="/product/notImpl?movement=${movement.id}">${movement.name}--%>
                                            <a>${movement.name}
                                                <span class="item-count">(${movement.amount})</span>
                                            </a>
                                        </li>
                                    </c:forEach>
                                </ol>
                            </dd>
                        </div>
                        <div class="filter-item" id="jQfilterItem_9">
                            <dt class="filter-header user-select-none odd">Price<span
                                    class="jq-selected-filters-mob"></span></dt>
                            <dd class="filter-body  odd" style="display: none;">


                                <ol class="layerednavigation">
                                    <c:forEach items="${priceGroups}" var="priceGroup">
                                        <li id="price_filter-${priceGroup.id}" class="jqFilterOptions">
                                                <%--<a href="/product/notImpl?price_filter=${priceGroup.id}">&lt; ${priceGroup.name}--%>
                                            <a>&lt; ${priceGroup.name}
                                                <span class="item-count">(${priceGroup.amount})</span>
                                            </a>
                                        </li>
                                    </c:forEach>
                                </ol>
                            </dd>
                        </div>
                    </dl>
                    <script type="text/javascript">decorateDataList('narrow-by-list');</script>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    (function ($) {
        $(document).ready(function () {
            $('input#id_search').quicksearch('.brands-filter .layerednavigation li');
        });
    })(jQuery);
</script>
<div class="category-products">
    <%--<div class="sorter">--%>
    <div>
        <div class="sort-by text-right cat-sort-by">
            <%--<div class="selector fixedWidth">--%>
            <div class="fixedWidth">
                <%--<span style="-moz-user-select: none;">--%>
                <%--Most Viewed                </span>--%>
                <select onChange="alert('not implemented yet')"
                        style="float:right;height:30px;text-transform:uppercase;width:215px;padding:0px 7px;">
                    <option value="/product/notImpl?dir=asc&amp;order=price">
                        Price
                    </option>
                    <option value="/product/notImpl?dir=desc&amp;order=bestsellers">
                        Best Sellers
                    </option>
                    <option value="/product/notImpldir=desc&amp;order=most_viewed" selected="selected">
                        Most Viewed
                    </option>
                    <option value="/product/notImpl?dir=desc&amp;order=savingsoff">
                        Savings (% Off)
                    </option>
                </select>
            </div>
        </div>
    </div>


    <div class="toolbar">
        <div class="pager">
            <p class="amount">
                Showing 64/18879 Products </p>


            <div class="pages" style="display:none;">
                <strong>Page:</strong>
                <ol>
                    <li class="current">${nextPage}</li>
                    <c:if test="${nextPage !=0}">
                        <li><a href="/product/all/?p=${nextPage}">${nextPage}</a></li>
                    </c:if>
                </ol>

            </div>


        </div>
    </div>


    <ul class="products-grid">
        <c:forEach items="${watches}" var="watch">
            <li class="item simple-config" id="product-${watch.id}">
                <div class="product-image-wrapper">
                    <a href="/product/view/?id=${watch.id}" title="" class="product-image"><img
                            src="${watch.mainImage}"
                            alt=""></a>
                </div>
                <div class="product-info">
                    <h2 class="product-name">
                        <a href="/product/view/?id=${watch.id}" title="">
                            <span class="manufacturer">${watch.brand}</span>
                                ${watch.info} </a>

                    </h2>
                    <a href="/product/view/?id=${watch.id}" title="" class="price-link">


                        <div class="price-box">


                            <p class="special-price">
                <span class="price" id="product-price-${watch.id}">
                    <fmt:setLocale value="en_US"/>
                    <fmt:formatNumber value="${watch.price}"
                                      type="currency"/>                </span>
                            </p>


                        </div>


                    </a>

                </div>
            </li>
        </c:forEach>
    </ul>
    <a class="jqLoad" href="/product/all/?p=2">LOAD MORE</a>

    <div class="toolbar-bottom">
        <div class="sorter">
            <div class="sort-by text-right cat-sort-by">
                <div class="selector fixedWidth"><span style="-moz-user-select: none;">
                    Most Viewed                </span><select
                        style="float:right;height:30px;text-transform:uppercase;width:215px;padding:0px 7px;">
                    Price
                    </option>
                    <option value="/product/notImpl/?dir=desc&amp;order=bestsellers">
                        Best Sellers
                    </option>
                    <option value="/product/notImpl/?dir=desc&amp;order=most_viewed"
                            selected="selected">
                        Most Viewed
                    </option>
                    <option value="/product/notImpl/?dir=desc&amp;order=savingsoff">
                        Savings (% Off)
                    </option>
                </select></div>
            </div>
        </div>


        <div class="toolbar">
            <div class="pager">
                <p class="amount">
                    Showing 64/18879 Products </p>


                <div class="pages" style="display:none;">
                    <strong>Page:</strong>
                    <ol>


                        <li>
                            <a class="next i-next" href="/product/notImpl/?p=2" title="Next">
                                <img src="${ctx}/img/pager_arrow_right.gif"
                                     alt="Next" class="v-middle">
                            </a>
                        </li>
                    </ol>

                </div>


            </div>
        </div>


    </div>
</div>
<div id="toPopup" style="display:none">
    <div id="lightwindow_contents"></div>
    <br>
    <a id="close">close</a>

    <div id="lightwindow_navigation"><a id="lightwindow_previous" href="javascript:" title=""><span
            id="lightwindow_previous_title" style="font-size: 16px; font-weight: bold;">Previous</span></a> <a
            id="lightwindow_next" href="javascript:" title="" rel="null"><span id="lightwindow_next_title"
                                                                               style="font-size: 16px; font-weight: bold;">Next</span></a>
    </div>
</div>
<div id="wait" class="loadingwait"><img
        src="${ctx}/img/ajax-loader.gif"><br>Loading..
</div>
<div id="backgroundPopup" style="opacity: 0.7; display: none;"></div>
<script type="text/javascript">
    (function ($) {
        $(document).ready(function () {
            $('.products-grid li:nth-child(2n+3)').addClass('mRow');
            $('.products-grid li:nth-child(3n+4)').addClass('tRow');
            $('.products-grid li:nth-child(4n+5)').addClass('dRow');
        });
    })(jQuery);
</script>
</div>
<script type="text/javascript">
    (function ($) { //create closure so we can safely use $ as alias for jQuery
        $(document).ready(function () {
            $('.featured-products .products-grid li:nth-child(2n+3)').addClass('mRow');
            $('.featured-products .products-grid li:nth-child(2n+3)').addClass('tRow');
            $('.featured-products .products-grid li:nth-child(3n+4)').addClass('dRow');
            $('.fashion-beauty-subcategories a:nth-child(1)').addClass('first');
            $('.fashion-beauty-subcategories a:nth-child(2)').addClass('second');
            $('.fashion-beauty-subcategories a:nth-child(3)').addClass('third');
            $('.fashion-beauty-subcategories a:nth-child(4)').addClass('fourth');
            $('.sales-events-wrapper a:nth-child(2n)').addClass('even');
        });

    })(jQuery);
</script>

<script type="text/javascript">
    function toggle_visibility(id) {
        var e = document.getElementById("plpheaderblock");
        if (e.style.height == '200px') {
            document.getElementById('plpheaderblock').style.height = '50px';
        }
        else
            document.getElementById('plpheaderblock').style.height = '200px';
    }
</script>


<script type="text/javascript">
    mybuys.setPageType("HIGH_LEVEL_CATEGORY");
    mybuys.set("categoryid", "4");
</script>

<script type="text/javascript">
    mybuys.addItemPresentOnPage("84779");
    mybuys.addItemPresentOnPage("53092");
    mybuys.addItemPresentOnPage("84823");
    mybuys.addItemPresentOnPage("84811");
    mybuys.addItemPresentOnPage("84903");
    mybuys.addItemPresentOnPage("33510");
    mybuys.addItemPresentOnPage("33696");
    mybuys.addItemPresentOnPage("39227");
    mybuys.addItemPresentOnPage("91495");
    mybuys.addItemPresentOnPage("90933");
    mybuys.addItemPresentOnPage("35790");
    mybuys.addItemPresentOnPage("61095");
    mybuys.addItemPresentOnPage("62337");
    mybuys.addItemPresentOnPage("52963");
    mybuys.addItemPresentOnPage("35811");
    mybuys.addItemPresentOnPage("58481");
    mybuys.addItemPresentOnPage("62739");
    mybuys.addItemPresentOnPage("91325");
    mybuys.addItemPresentOnPage("70707");
    mybuys.addItemPresentOnPage("72089");
    mybuys.addItemPresentOnPage("28131");
    mybuys.addItemPresentOnPage("30187");
    mybuys.addItemPresentOnPage("71545");
    mybuys.addItemPresentOnPage("35906");
    mybuys.addItemPresentOnPage("30227");
    mybuys.addItemPresentOnPage("37037");
    mybuys.addItemPresentOnPage("71055");
    mybuys.addItemPresentOnPage("71307");
    mybuys.addItemPresentOnPage("30228");
    mybuys.addItemPresentOnPage("30181");
    mybuys.addItemPresentOnPage("28167");
    mybuys.addItemPresentOnPage("58666");
    mybuys.addItemPresentOnPage("28487");
    mybuys.addItemPresentOnPage("30274");
    mybuys.addItemPresentOnPage("40158");
    mybuys.addItemPresentOnPage("68929");
    mybuys.addItemPresentOnPage("63885");
    mybuys.addItemPresentOnPage("51116");
    mybuys.addItemPresentOnPage("40446");
    mybuys.addItemPresentOnPage("61587");
    mybuys.addItemPresentOnPage("40258");
    mybuys.addItemPresentOnPage("32016");
    mybuys.addItemPresentOnPage("30273");
    mybuys.addItemPresentOnPage("38575");
    mybuys.addItemPresentOnPage("30242");
    mybuys.addItemPresentOnPage("40259");
    mybuys.addItemPresentOnPage("35815");
    mybuys.addItemPresentOnPage("38556");
    mybuys.addItemPresentOnPage("66121");
    mybuys.addItemPresentOnPage("28091");
    mybuys.addItemPresentOnPage("32809");
    mybuys.addItemPresentOnPage("40561");
    mybuys.addItemPresentOnPage("61187");
    mybuys.addItemPresentOnPage("33002");
    mybuys.addItemPresentOnPage("68351");
    mybuys.addItemPresentOnPage("30189");
    mybuys.addItemPresentOnPage("66261");
    mybuys.addItemPresentOnPage("84909");
    mybuys.addItemPresentOnPage("32823");
    mybuys.addItemPresentOnPage("72361");
    mybuys.addItemPresentOnPage("80309");
    mybuys.addItemPresentOnPage("30176");
    mybuys.addItemPresentOnPage("28486");
    mybuys.addItemPresentOnPage("30198");        </script>
</div>
</div>
