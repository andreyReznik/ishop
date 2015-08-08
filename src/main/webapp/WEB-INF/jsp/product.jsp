<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="main col1-layout">
<div class="col-main">

<script type="text/javascript">
    mybuys.setPageType("PRODUCT_DETAILS");
    mybuys.set("productid", "84779");
</script>

<script type="text/javascript">
    /* current product being viewed */
    mybuys.addItemPresentOnPage("84779");
</script>

<script type="text/javascript">
    /* upsell products on page */
</script>

<script type="text/javascript">
    /* related products on page */
</script>
<div id="login-modal" class=" jom-popup mfp-hide ">
    <p style="display:none;" class="jqError"></p>

    <form action="/product/notImpl/" method="post" id="login-form-main">
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
                        <div id="uniform-remember_mewK6BedOwDv" class="checker"><span class="checked"><input
                                name="persistent_remember_me" class="checkbox" id="remember_mewK6BedOwDv"
                                checked="checked" title="Remember Me" type="checkbox"></span></div>
                    </div>
                    <label for="remember_mewK6BedOwDv">Remember Me</label>
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

    <form action="/product/notImpl/" method="post" id="form-register" enctype="multipart/form-data">
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
    <form action="/product/notImpl/" method="post" id="form-password">
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

    <form action="/product/notImpl/" method="post" id="form-follow" enctype="multipart/form-data">
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
        <a href="/product/notImpl/">No thanks, I don’t want to fill this out now.</a>
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
<script type="text/javascript">
    var optionsPrice = new Product.OptionsPrice([]);
</script>
<div id="messages_product_view">
    <div id="turpentine-esi-block-00d1c921eede1cfdd6065d398e82a8ef5b1970c80f9a418d8a9aabbfd1bf965c" style=""></div>
</div>
<div class="product-view">
<form action="/product/notImpl" method="post" id="product_addtocart_form">
<input name="form_key" value="C9BbhfmmcwMSlWH8" type="hidden">

<div class="no-display">
    <input name="product" value="84779" type="hidden">
    <input name="related_product" id="related-products-field" value="" type="hidden">
</div>
<div class="product-essential">
<div class="product-img-box">

<!-- Begin magiczoomplus -->

<div class="MagicToolboxContainer " style="max-width: 490px">
    <div class="onsale-product-container"><a href="javascript:;" id="jqZooomImgPrev" class="corraZoomNav prev">Prev</a>
        <a class="MagicZoomPlus" id="MagicZoomPlusImage71545"
           href="${watch.mainImage}"
           rel="zoom-width:578px;zoom-height:490px;zoom-distance:50;expand-effect:linear;expand-speed:200;restore-speed:200;smoothing-speed:50;pan-zoom:false;preload-selectors-big:true;selectors-effect:false;selectors-effect-speed:300;selectors-mouseover-delay:500;caption-position:left;buttons-display:close;hint-position:bl;hint-opacity:100;disable-expand:false"
           title=""
           style="position: relative; display: inline-block; text-decoration: none; outline: 0px; overflow: hidden; margin: auto; width: auto; height: auto;">
            <span>
            <div id="corraMagicScrollThumbs" class="corraMagicScrollThumbs">
                <img width="100%"
                     src="${watch.mainImage}"
                     alt="${watch.info}">
            </div>
            </span>

            <div class="MagicZoomPup"
                 style="z-index: 10; position: absolute; overflow: hidden; display: none; visibility: hidden; width: 309px; height: 261px; opacity: 0.5; left: 0px; top: 174.5px;"></div>

        </a>

        <a href="javascript:;" id="jqZooomImgNext" class="corraZoomNav next">Next</a>
        <!-- MOVING HINT BELOW IMAGE - HINT SETTING IN MAGICZOOM ADMIN NEEDS TO BE DISABLED  <div class="click-to-enlarge"><a style="cursor:text">CLICK IMAGE TO ENLARGE</a></div> -->
        <div id="MagicToolboxSelectors71545" class="MagicToolboxSelectorsContainer" style="margin-top: 15px">
            <c:forEach items="${images}" var="image">
                <a
                        onclick="magicToolboxOnChangeSelector(this);"
                        href="${image.bigImage}"
                        rel="zoom-id:MagicZoomPlusImage71545;caption-source:a:title;zoom-width:578px;zoom-height:490px;zoom-distance:50;expand-effect:linear;expand-speed:200;restore-speed:200;smoothing-speed:50;pan-zoom:false;preload-selectors-big:true;selectors-effect:false;selectors-effect-speed:300;selectors-mouseover-delay:500;caption-position:left;buttons-display:close;hint-position:bl;hint-opacity:100;"
                        rev="${image.bigImage}"
                        class="MagicThumb-swap" style="outline: none; display: inline-block;"><img
                        src="${image.smallImage}"
                        alt="${watch.info} img1"></a>
            </c:forEach>
        </div>
    </div>
</div>

<!-- End magiczoomplus -->
<img id="image" scr="" style="display: none !important;">
<script type="text/javascript">
    var baseImageUrl = '';
    function changeZoomImage(url, thisObj) {
        jQuery(thisObj).parents(".MagicThumb-expanded").children(":last").find("img:first").attr('src', url);
    }
    jQuery(".MagicZoomPlus").click(function () {
        baseImageUrl = jQuery(this).attr("href");
        setTimeout(function () {
            jQuery('.corraMagicScrollThumbs').slimScroll({"height": (jQuery(".MagicThumb-expanded").height() - 15), "railOpacity": 0.8});
            jQuery(document).undelegate('.MagicZoomPlusCorra', 'mouseenter');
            jQuery(document).undelegate('.MagicZoomPlusCorra', 'mouseleave');
            jQuery(document).undelegate('.MagicZoomPlusCorra', 'click');
            jQuery(document).delegate('.MagicZoomPlusCorra', 'mouseenter', function () {

                changeZoomImage(jQuery(this).attr("data-href"), this);
            });
            jQuery(document).delegate('.MagicZoomPlusCorra', 'mouseleave', function () {
                changeZoomImage(baseImageUrl, this);
            });
            jQuery(document).delegate('.MagicZoomPlusCorra', 'click', function () {
                baseImageUrl = jQuery(this).attr("data-href");
            });
        }, 500);
    });
    jQuery(document).ready(function () {
        MagicScroll.options = {
            'speed': 0,
            'duration': 500,
            'items': 4
        };
        MagicScroll.refresh();
        if (isTouch()) {
            jQuery(".click-to-enlarge a").text("TAP IMAGE TO ZOOM");
        }
        if (isTouch() || checkMediaQuery(997)) {
            String.prototype.times = function (n) {
                return Array.prototype.join.call({length: n + 1}, this);
            };
            if (checkMediaQuery(767)) {
                jQuery(".click-to-enlarge a").hide();
                setTimeout(function () {
                    MagicZoomPlus.stop();
                    jQuery('.MagicZoomPlus').attr('href', 'javascript:;');
                    jQuery('.MagicToolboxSelectorsContainer a[rev="' + jQuery('.MagicZoomPlus img ').attr('src') + '"]').addClass('active-thumb');
                }, 1000);
                jQuery(".MagicZoomPlus").swipe({
                    swipeLeft: function () {
                        var magicScrollEnabled = jQuery(".MagicToolboxSelectorsContainer").hasClass("MagicScroll");
                        var parentOfActive = jQuery(".MagicScrollItem a.active-thumb").parents('.MagicScrollItem');
                        var img = jQuery(".onsale-product-container .MagicZoomPlus img");
                        if (magicScrollEnabled) {
                            if (parentOfActive.next('.MagicScrollItem').find('a').length > 0) {
                                var nextAnchor = parentOfActive.next('.MagicScrollItem').find('a');
                            } else {
                                var nextAnchor = jQuery('.MagicScrollItem:first').find('a');
                            }
                        } else {
                            if (jQuery('.MagicToolboxSelectorsContainer a.active-thumb').next('a').length > 0) {
                                var nextAnchor = jQuery('.MagicToolboxSelectorsContainer a.active-thumb').next('a');
                            } else {
                                var nextAnchor = jQuery('.MagicToolboxSelectorsContainer a:first');
                            }
                        }
                        if (nextAnchor.hasClass('video')) {
                            loadVideo(nextAnchor.attr('data-video'));
                        } else {
                            jQuery(".product-video").remove();
                            img.attr('src', nextAnchor.attr("rev")).show();
                        }
                        jQuery('.MagicToolboxSelectorsContainer a.active-thumb').removeClass("active-thumb");
                        nextAnchor.addClass("active-thumb");

                        return false;
                    },
                    swipeRight: function () {
                        var magicScrollEnabled = jQuery(".MagicToolboxSelectorsContainer").hasClass("MagicScroll");
                        var parentOfActive = jQuery(".MagicScrollItem a.active-thumb").parents('.MagicScrollItem');
                        var img = jQuery(".onsale-product-container .MagicZoomPlus img");
                        if (magicScrollEnabled) {
                            if (parentOfActive.prev('.MagicScrollItem').find('a').length > 0) {
                                var nextAnchor = parentOfActive.prev('.MagicScrollItem').find('a');
                            } else {
                                var nextAnchor = jQuery('.MagicScrollItem:last').find('a');
                            }
                        } else {
                            if (jQuery('.MagicToolboxSelectorsContainer a.active-thumb').prev('a').length > 0) {
                                var nextAnchor = jQuery('.MagicToolboxSelectorsContainer a.active-thumb').prev('a');
                            } else {
                                var nextAnchor = jQuery('.MagicToolboxSelectorsContainer a:last');
                            }
                        }
                        if (nextAnchor.hasClass('video')) {
                            loadVideo(nextAnchor.attr('data-video'));
                        } else {
                            jQuery(".product-video").remove();
                            img.attr('src', nextAnchor.attr("rev")).show();
                        }
                        jQuery('.MagicToolboxSelectorsContainer a.active-thumb').removeClass("active-thumb");
                        nextAnchor.addClass("active-thumb");

                        return false;
                    },
                    threshold: 0
                });
                if (jQuery(".MagicToolboxSelectorsContainer a").length > 3) {
                    if (!jQuery(".MagicToolboxSelectorsContainer").hasClass('MagicScroll')) {
                        jQuery(".MagicToolboxSelectorsContainer").addClass('MagicScroll msborder');
                    }
                    MagicScroll.options = {
                        'speed': 0,
                        'duration': 500,
                        'items': 3
                    };
                }
                MagicScroll.refresh();
                jQuery(document).delegate(".MagicToolboxSelectorsContainer a", 'click', function () {

                    if (!jQuery(this).hasClass('video')) {
                        jQuery(".product-video").remove();
                        var img = jQuery(".onsale-product-container .MagicZoomPlus img");
                        img.attr('src', jQuery(this).attr('rev')).show();
                    }
                    jQuery('a.active-thumb').removeClass('active-thumb');
                    jQuery(this).addClass('active-thumb');
                    return false;
                });
            }
        }
        setTimeout(function () {
            adjustMagiczoom();
        }, 1000);
    });
    jQuery(window).ready(function () {
        if (!isTouch()) {
            jQuery(document).delegate(".MagicToolboxSelectorsContainer a:not('.video')", 'mouseenter', function () {
                jQuery("#product-video").remove();
                var img = jQuery(".onsale-product-container .MagicZoomPlus img");
                img.attr('src', jQuery(this).attr("rev")).show();
            });
            jQuery(document).delegate(".MagicToolboxSelectorsContainer a", 'mouseleave', function () {
                var mainImageUrl = jQuery(".MagicToolboxSelectorsContainer a.active-thumb").attr("rev");
                jQuery(".onsale-product-container .MagicZoomPlus img").attr('src', mainImageUrl);
            });
        }
    });
    function adjustMagiczoom() {
        if (checkMediaQuery(1024) && isTouch()) {
            var zoomImgObj = jQuery("#product_addtocart_form a.MagicZoomPlus");
            var rel = zoomImgObj.attr("rel");
            rel.replace("disable-expand:true", "");
            rel.replace("disable-expand:false", "");
            rel.replace("zoom-position:inner", "");
            zoomImgObj.attr("rel", rel + "zoom-position:inner;disable-expand:true");
            if (checkMediaQuery(767)) {
                MagicZoomPlus.stop();
            } else {
                MagicZoomPlus.refresh();
            }
        } else {
            var zoomImgObj = jQuery("#product_addtocart_form a.MagicZoomPlus");
            var rel = zoomImgObj.attr("rel");
            rel.replace("disable-expand:true", "");
            rel.replace("disable-expand:false", "");
            rel.replace("zoom-position:inner", "");
            zoomImgObj.attr("rel", rel + "disable-expand:false");
            MagicZoomPlus.refresh();
        }
        hideThumbArrows();
    }
    function hideThumbArrows() {
        var thumbCount = checkMediaQuery(997) ? 3 : 4;
        if (jQuery(".MagicThumb-swap").length <= thumbCount) {
            jQuery(".MagicScrollArrows").hide();
        } else {
            jQuery(".MagicScrollArrows").show();
        }

    }
    window.onload = function () {
        hideThumbArrows();
    }
    setTimeout(function () {
        hideThumbArrows();
    }, 3000);
    if (!window.addEventListener) {
        window.attachEvent("orientationchange", function () {
            adjustMagiczoom();
        }, false);
    } else {
        window.addEventListener("orientationchange", function () {
            adjustMagiczoom();
        }, false);
    }
</script>
</div>


<div class="product-shop">
    <div class="product-main-info">
        <h1>
                            <span class="brand-name">
                                ${watch.brand} </span>
                                                <span class="product-name">
                                                    ${watch.info} </span>
                        <span class="product-ids">
	                        	                            Item No. ${watch.model}	                                                </span>
        </h1>

        <script type="application/ld+json">

        </script>
    </div>
    <div class="col2-set product-main-col2-set">
        <div class="col-1">
            <div class="product-type-data-info">
                <div class="price-shipping-info">
                    <div class="pdp-final-price">
                        <p class="final-price">
                            <span><fmt:setLocale value="en_US"/>
                    <fmt:formatNumber value="${watch.price}"
                                      type="currency"/></span>


                        </p>
                    </div>

                </div>

            </div>

            <div class="add-to-box">
                <div class="add-to-cart">

                    <input name="qty" id="qty" maxlength="12" value="0" type="hidden">
                    <%--<button class="button" type="button" onclick="productAddToCartForm.submit(this)"><span><span class="btn btn-5 btn-5a">Buy Now</span></span></button>--%>
                    <button class="button" type="button" onclick="alert('Not implemented yet!')"><span><span
                            class="btn btn-5 btn-5a">Buy Now</span></span></button>
                </div>

            </div>
        </div>
        <div class="col-2">
            <div class="add-to-box">
                <div class="add-to-cart">

                    <button type="button" title="Buy Now" class="button btn-cart"
                            onclick="productAddToCartForm.submit(this)"><span><span>Buy Now</span></span></button>
                </div>

            </div>
            <div class="social-share-buttons-pdp">

            </div>
        </div>
    </div>
</div>
</form>
<div class="col2-set product-bottom-col2-set">
    <div class="col-1">
        <div class="product-collateral">
            <dl style="height: 973px;" id="collateral-tabs" class="collateral-tabs tab-list" name="collateral-tabs">
                <dt style="z-index: 7;" class="tab first active" id="tab-details"><span>Details</span></dt>
                <dd class="tab-container" id="tab-container-details">
                    <div class="tab-content">
                        <div class="product-description">
                            <div class="std">${watch.details}</div>
                        </div>
                        <div class="product-attributes">

                            <div class="attribute-group">
                                <h3>Information</h3>
                                <ul class="attribute-list" id="attribute-list-203">
                                    <li class="first odd">
                                        <label class="label">Brand<span class="prd-tab-colon">:</span></label>

                                        <div class="attribute-data">
                                            <span class="data">${watch.brand}</span>
                                        </div>
                                    </li>
                                    <li class="odd">
                                        <label class="label">Model<span class="prd-tab-colon">:</span></label>

                                        <div class="attribute-data">
                                            <span class="data">${watch.model}</span>
                                        </div>
                                    </li>
                                    <li class="even">
                                        <label class="label">Gender<span class="prd-tab-colon">:</span></label>

                                        <div class="attribute-data">
                                            <span class="data">${watch.gender}</span>
                                        </div>
                                    </li>
                                    <li class="last odd">
                                        <label class="label">Movement<span class="prd-tab-colon">:</span></label>

                                        <div class="attribute-data">
                                            <span class="data">${watch.movement}</span>
                                        </div>
                                    </li>
                                </ul>
                                <script type="text/javascript">decorateGeneric($$('#attribute-list-203 li'), ['odd', 'even', 'first', 'last']);</script>
                            </div>


                        </div>
                    </div>
                </dd>
                <script type="text/javascript">
                    //<![CDATA[
                    var dataForm = new VarienForm('review-form');
                    Validation.addAllThese(
                            [
                                ['validate-rating', 'Please select one of each of the ratings above', function (v) {
                                    var trs = $('product-review-table').select('tr');
                                    var inputs;
                                    var error = 1;

                                    for (var j = 0; j < trs.length; j++) {
                                        var tr = trs[j];
                                        if (j > 0) {
                                            inputs = tr.select('input');

                                            for (i in inputs) {
                                                if (inputs[i].checked == true) {
                                                    error = 0;
                                                }
                                            }

                                            if (error == 1) {
                                                return false;
                                            } else {
                                                error = 1;
                                            }
                                        }
                                    }
                                    return true;
                                }]
                            ]
                    );
                    //]]>


                    jQuery('#review-form').submit(function (e) {
                        e.preventDefault();
                        url = jQuery('#review-form').attr('action');
                        if (dataForm.validator && dataForm.validator.validate()) {
                            var data = jQuery('#review-form').serialize();
                            data += '&isAjax=1';
                            jQuery('#review-loader').show();
                            try {
                                jQuery.ajax({
                                    url: url,
                                    dataType: 'json',
                                    type: 'post',
                                    data: data,
                                    success: function (data) {
                                        jQuery('#review-loader').hide();
                                        if (data.status == "SUCCESS") {
                                            var reviewMessage = '<p class="success">' + data.message + '</p>';
                                            jQuery("#review-form")[0].reset();
                                            jQuery("#review-form").hide();
                                        }
                                        else if (data.status == "ERROR") {
                                            var reviewMessage = '<p class="error">' + data.message + '</p>';
                                        }
                                        jQuery('#review-result').html(reviewMessage);
                                        jQuery('#review-result').show();
                                        if (isTouch()) {
                                            window.location.href = "#tab-reviews";
                                        }
                                        else {
                                            window.location.href = "#collateral-tabs";
                                        }
                                    }
                                });
                            } catch (e) {
                            }
                        }

                    });

                    jQuery('input.radio').click(function () {

                        jQuery(this).closest('tr').find('.rating-star').removeClass('active');
                        jQuery(this).closest('td').prevAll('td').find('.rating-star').addClass('active');
                        jQuery(this).closest('td').find('.rating-star').addClass('active');
                        //jQuery(this).prev('.rating-star').addClass('active');
                    });
                </script>
        </div>
    </div>
    <script type="text/javascript">
        function toggleReview() {
            if (jQuery('#product-review-list').is(':visible')) {
                jQuery('#product-review-list').hide();
                jQuery('#product-reviewform').show();
            } else {
                jQuery('#product-review-list').show();
                jQuery('#product-reviewform').hide();
            }
            collateralTabs.selectTab($('tab-reviews'));
        }
    </script>
</div>
</dd>
<dt style="z-index: 2;" class="tab last" id="tab-questions"><span></span></dt>
<dd style="display: none;" class="tab-container" id="tab-container-questions">
    <div class="tab-content">
        <div class="desktop-questions">
            <script type="text/javascript">var TurnToItemSku = "CZAW1361-10H";
            document.write(unescape("%3Cscript src='" + document.location.protocol + "//static.www.turnto.com/sitedata/" + turnToConfig.siteKey + "/v4_1/" + TurnToItemSku + "/d/itemjs' type='text/javascript'%3E%3C/script%3E"));
            </script>
            <script src="${ctx}/js/itemjs.js" type="text/javascript"></script>
            <span class="TurnToItemInputTeaser"><div class="TTinputTeaserCust1">
                <div class="TTteaserHeaderCust1">Need advice? More information?</div>
                <div style="position:relative">
                    <div id="TTinputTeaserBoxCust1"><a class="TTteaBubble1Cust1" href="javascript:void(0)"
                                                       style="text-decoration:none"></a><input id="TTinputTeaserQCust1"
                                                                                               placeholder="Type in your question."
                                                                                               type="text"> <a
                            class="TTteaNext1Cust1" href="javascript:void(0)"
                            style="display:none;text-decoration:none"></a></div>
                    <div class="TT2clearBoth"></div>
                </div>
                <div id="TTteaserHelpCust1">Press Enter or click Next to search</div>
            </div></span>
            <link rel="stylesheet" href="${ctx}/css/inputteasers-boxed.css">
        </div>
        <div class="mobile-only-quest">
            <span class="TurnToItemTeaser"><div id="TT2ILTbox" class="TurntoItemTeaserClick"><h2>Get FAST answers from
                customers</h2>

                <div id="TT2ILTbutton-holder"><a class="TT2ILTbutton" href="javascript:void(0)"><span><u>ASK</u> a Question</span></a>
                </div>
                <div id="TT2ILTcount-line"></div>
            </div></span>
            <script type="text/javascript" src="${ctx}/js/itemjs_002.js"></script>
        </div>
    </div>
</dd>
</dl>
<script type="text/javascript">
    function updateTabHeight() {
        jQuery("#collateral-tabs").css({'height': jQuery("#collateral-tabs dd:visible").height()});
    }
    var needJQforTab = false;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        if (jQuery.browser == null || typeof jQuery.browser == 'undefined') {
            needJQforTab = true;
        } else if (jQuery.browser.version < 10) {
            needJQforTab = true;
        }
    }
    if (needJQforTab === false) {
        var collateralTabs = new Enterprise.Tabs('collateral-tabs');
        Event.observe(window, 'load', function () {
            collateralTabs.select();
        });
    } else {
        jQuery(document).ready(function () {
            jQuery("#collateral-tabs").addClass('tab-list').css({'height': jQuery("#collateral-tabs dd:first").height()});
            jQuery("#collateral-tabs dd").hide();
            jQuery("#collateral-tabs dt:first").addClass('active');
            jQuery("#collateral-tabs dd:first").show();
            jQuery("#collateral-tabs dt").click(function () {
                jQuery("#collateral-tabs dd").hide();
                jQuery(this).next('dd').show();
                jQuery("#collateral-tabs dt").removeClass('active');
                jQuery(this).addClass('active');
                jQuery("#collateral-tabs").css({'height': jQuery(this).next('dd').height()});
            });
        });
    }
</script>
</div>

</div>
<div class="col-2">


</div>
<div class="clearer"></div>
</div>
<script type="text/javascript">
//<![CDATA[
var productAddToCartForm = new VarienForm('product_addtocart_form');
productAddToCartForm.submit = function (button, url) {
    if (this.validator.validate()) {
        var form = this.form;
        var oldUrl = form.action;
        if (url) {
            form.action = url;
        }
        var e = null;
        if (!url) {
            url = ',/product/84779/form_key/<esi:include src="" />/';
        }
        try {
            if (button.hasClassName('update-cart')) {
                if (document.body.clientWidth <= 997) {
                    jQuery('.col-1').find('input#qty').attr('disabled', true);
                    jQuery('.col-2').find('input#qty').removeAttr('disabled');
                } else {
                    jQuery('.col-2').find('input#qty').attr('disabled', true);
                    jQuery('.col-1').find('input#qty').removeAttr('disabled');
                }
                this.form.submit();
            } else {
                var data = jQuery('#product_addtocart_form').serialize();
                data += '&isAjax=1';
                jQuery('#page-overlay').show();
                jQuery('#ajax-loader').show();
                jQuery.ajax({
                    url: url,
                    dataType: 'json',
                    type: 'post',
                    data: data,
                    success: function (data) {
                        jQuery('#ajax-loader').hide();
                        if (data.status == "SUCCESS") {
                            if (jQuery('.top-cart')) {
                                jQuery('.top-cart').replaceWith(data.sidebar);
                                Enterprise.TopCart.initialize('topCartContent');
                            }
                            var popup = '<div id="pdp-success-popup" class="jom-popup"><h3>Added to your Bag!</h3><p>' + data.message + '</p><ul class="popup-buttons-list"><li><a href="/product/notImpl" class="popup-cart-button popup-buttons">View My Bag</a></li><li><a onclick="continueshop()" class="popup-shop-button popup-buttons">Continue Shopping</a></li></ul></div>';
                            if (jQuery('.giftcard-form').length > 0) {
                                jQuery('.giftcard-form input#giftcard_amount_input, .giftcard-form input#giftcard_recipient_name, .giftcard-form input#giftcard_recipient_email, .giftcard-form textarea#giftcard_message').val("");
                            }
                            jQuery('.page').append(popup);
                            popupautoclose();
                        } else if (data.status == "ERROR") {
                            var popup = '<div id="pdp-success-popup" class="jom-popup"><h3>Unable to add Product</h3><p>' + data.message + '</p><ul class="popup-buttons-list"><li><a onclick="continueshop()" class="popup-shop-button popup-buttons">Continue Shopping</a></li></ul></div>';
                            jQuery('.page').append(popup);
                            popupautoclose();
                        }
                    }
                });
            }
        } catch (e) {
        }
        this.form.action = oldUrl;
        if (e) {
            throw e;
        }
    }
}.bind(productAddToCartForm);
productAddToCartForm.submitWishlist = function (button, url) {
    if (this.validator) {
        var nv = Validation.methods;
        delete Validation.methods['required-entry'];
        delete Validation.methods['validate-one-required'];
        delete Validation.methods['validate-one-required-by-name'];
        // Remove custom datetime validators
        for (var methodName in Validation.methods) {
            if (methodName.match(/^validate-datetime-.*/i)) {
                delete Validation.methods[methodName];
            }
        }
        if (this.validator.validate()) {
            if (url) {
                this.form.action = url;
            }
            var data = jQuery('#product_addtocart_form').serialize();
            data += '&isAjax=1';
            jQuery('#page-overlay').show();
            jQuery('#ajax-loader').show();
            try {
                jQuery.ajax({
                    url: url,
                    dataType: 'json',
                    type: 'post',
                    data: data,
                    success: function (data) {
                        jQuery('#ajax-loader').hide();
                        if (data.status == "SUCCESS") {
                            var popup = '<div id="pdp-success-popup" class="jom-popup"><h3>Saved to your Wishlist</h3><p>' + data.message + '</p><ul class="popup-buttons-list"><li><a href="/product/notImpl" class="popup-cart-button popup-buttons">View My Wishlist</a></li><li><a onclick="continueshop()" class="popup-shop-button popup-buttons">Continue Shopping</a></li></ul></div>';
                            jQuery('.page').append(popup);
                            popupautoclose();
                        } else if (data.status == "ERROR") {
                            var errorMessage = '<ul class="messages"><li class="error-msg"><span class="close-msg"></span><ul><li><span>' + data.message + '</span></li></ul></li></ul>';
                            jQuery('#messages_product_view').html(errorMessage);
                        }
                    }
                });
            } catch (e) {
            }
        }
        Object.extend(Validation.methods, nv);
    }
}.bind(productAddToCartForm);
function addRelatedToCart(id) {
    var data = 'isAjax=1';
    var url = '/product/notImpl';
    url = url.replace("https", "http");
    url = url.substring(0, url.length - 1) + id;
    jQuery('#item-info-' + id).addClass('ajax-loader');
    try {
        jQuery.ajax({
            url: url,
            dataType: 'json',
            type: 'post',
            data: data,
            success: function (data) {
                jQuery('#ajax-loader').hide();
                if (data.status == "SUCCESS") {
                    if (jQuery('.top-cart')) {
                        jQuery('.top-cart').replaceWith(data.sidebar);
                        Enterprise.TopCart.initialize('topCartContent');
                    }
                    jQuery('#item-info-' + id).removeClass('ajax-loader');
                    jQuery('#related-add-' + id).addClass('added-to-cart');
                    jQuery('#related-add-' + id + ' span span').text('Added To Order');
                    jQuery('#related-add-' + id).removeAttr("onclick");
                    jQuery('#item-info-' + id).addClass('fade-out');
                } else if (data.status == "ERROR") {
                    var errorMessage = '<ul class="messages"><li class="error-msg"><span class="close-msg"></span><ul><li><span>' + data.message + '</span></li></ul></li></ul>';
                    jQuery('#messages_product_view').html(errorMessage);
                }
            }
        });
    } catch (e) {
    }
}
function addtoCompare(url) {
    var data = 'isAjax=1';
    jQuery('#page-overlay').show();
    jQuery('#ajax-loader').show();
    try {
        jQuery.ajax({
            url: url,
            dataType: 'json',
            type: 'post',
            data: data,
            success: function (data) {
                jQuery('#ajax-loader').hide();
                if (data.status == "SUCCESS") {
                    var popup = '<div id="pdp-success-popup" class="jom-popup"><h3>Added to Compare List</h3><p>' + data.message + '</p><ul class="popup-buttons-list"><li><a href="#" onclick="comparepopup()" class="popup-cart-button popup-buttons">View Compare List</a></li><li><a onclick="continueshop()" class="popup-shop-button popup-buttons">Continue Shopping</a></li></ul></div>';
                    jQuery('.page').append(popup);
                    popupautoclose();
                } else if (data.status == "ERROR") {
                    var errorMessage = '<ul class="messages"><li class="error-msg"><span class="close-msg"></span><ul><li><span>' + data.message + '</span></li></ul></li></ul>';
                    jQuery('#messages_product_view').html(errorMessage);
                }
            }
        });
    } catch (e) {
    }
}
function loadmoreReviews(pageid) {
    var nextPageUrl = '/product/notImpl' + pageid;
    if (!jQuery('.load-reviews').hasClass('loading')) {
        jQuery('#ajax-review-loader').css({display: 'block'});
        jQuery('.load-reviews').addClass('loading');
        try {
            jQuery.ajax({
                url: nextPageUrl,
                dataType: 'html',
                type: 'get',
                success: function (data) {
                    var response = jQuery('<div/>').html(data);
                    var reviewsList = response.find('#product-reviews-list').html();
                    jQuery('#product-reviews-list').append(reviewsList);
                    jQuery('#ajax-review-loader').css({display: 'none'});
                    if (needJQforTab) {
                        updateTabHeight();
                    } else {
                        collateralTabs.select(); // To update the height of the tab when the content is updated
                    }
                    if (response.find('li.current').next('li').length > 0) {
                        var nextLink = response.find('li.current').next('li').find('a').text();
                        jQuery('.load-reviews').attr('id', nextLink);
                    } else {
                        jQuery('.load-reviews').hide();
                    }
                    jQuery('.load-reviews').removeClass('loading');
                }
            });
        } catch (e) {
        }
    }
    return false;
}
productAddToCartForm.submitLight = function (button, url) {
    if (this.validator) {
        var nv = Validation.methods;
        delete Validation.methods['required-entry'];
        delete Validation.methods['validate-one-required'];
        delete Validation.methods['validate-one-required-by-name'];
        // Remove custom datetime validators
        for (var methodName in Validation.methods) {
            if (methodName.match(/^validate-datetime-.*/i)) {
                delete Validation.methods[methodName];
            }
        }
        if (this.validator.validate()) {
            if (url) {
                this.form.action = url;
            }
            this.form.submit();
        }
        Object.extend(Validation.methods, nv);
    }
}.bind(productAddToCartForm);
//]]>
</script>
<script type="text/javascript">
    function continueshop() {
        if (jQuery('#pdp-success-popup').length > 0) {
            jQuery('#pdp-success-popup').remove();
            jQuery('#page-overlay').fadeOut();
        }
    }
    function loadVideo(vcode) {
        jQuery('.MagicToolboxSelectorsContainer a.active-thumb').removeClass("active-thumb");
        jQuery('.MagicToolboxSelectorsContainer').find("[data-video='" + vcode + "']").addClass('active-thumb');
        var img = jQuery(".onsale-product-container .MagicZoomPlus img");
        if (jQuery(".product-video").length > 0) {
            var imageHeight = jQuery("#product-video").find('iframe').height();
            var imageWidth = jQuery("#product-video").find('iframe').width();
            jQuery(".product-video").remove();
        } else {
            var imageHeight = img.height();
            var imageWidth = img.width();
            img.hide();
        }
        var vidContainer = jQuery("<div>", {"id": "product-video", "class": "product-video"});
        vidContainer.insertAfter(img);
        jQuery(".product-img-box #product-video").html('<iframe width="' + imageHeight + '" height="' + imageWidth + '" src="http://www.youtube.com/embed/' + vcode + '?autohide=1" frameborder="0" allowfullscreen></iframe>');
    }
    function popupautoclose() {
        if (jQuery('#pdp-success-popup').length > 0) {
            setTimeout(function () {
                continueshop();
            }, 5000);
        } else {
            popupautoclose();
        }
    }
    function comparepopup() {
        popWin('/product/notImpl,/', 'compare', 'top:0,left:0,width=820,height=600,resizable=yes,scrollbars=yes');
        continueshop();
    }
    function openTab(tabId) {
        if (!needJQforTab) {

            collateralTabs.selectTab($(tabId));
        }
    }
    function openReviewForm() {
        jQuery('#product-review-list').hide();
        jQuery('#product-reviewform').show();
        openTab('tab-reviews');
    }
    function openReviews() {
        jQuery('#product-reviewform').hide();
        jQuery('#product-review-list').show();
        openTab('tab-reviews');
    }
    function closeRelatedItems() {
        jQuery(".box-related .box-title").removeClass('active');
        jQuery(".box-related .box-content").removeClass('show');
        jQuery(".box-related .box-content").hide();
    }
    function closeUpsellItems() {
        jQuery(".box-up-sell .box-title").removeClass('active');
        jQuery(".box-up-sell .products-grid").removeClass('show');
        jQuery(".box-up-sell .products-grid").hide();
    }
    jQuery(document).ready(function () {
        if (jQuery('#no-reviews-note').length > 0) {
            jQuery('#read-reviews-link').remove();
            jQuery('#no-reviews-note').remove();
            jQuery('#product-reviewform').show();
        }
        jQuery('#page-overlay').click(function () {
            continueshop();
        });
        jQuery('#collateral-tabs dt').click(function () {
            if (document.body.clientWidth < 998) {
                closeRelatedItems();
            }
            if (document.body.clientWidth < 768) {
                closeUpsellItems();
            }
        });
        jQuery(".box-related .box-title h2").click(function () {
            if (checkMediaQuery(997)) {
                if (checkMediaQuery(767)) {
                    closeUpsellItems();
                }
                if (!needJQforTab) {
                    collateralTabs.closeAllTabs();
                }
                if (jQuery(".box-related .box-content").is(':visible')) {
                    closeRelatedItems();
                } else {
                    jQuery(".box-related .box-title").addClass('active');
                    jQuery(".box-related .box-content").addClass('show');
                    jQuery(".box-related .box-content").show();
                }

            }

        });
        jQuery(".box-up-sell .box-title h2").click(function () {
            if (checkMediaQuery(767)) {
                if (!needJQforTab) {
                    collateralTabs.closeAllTabs();
                }
                closeRelatedItems();
                if (jQuery(".box-up-sell .products-grid").is(':visible')) {
                    closeUpsellItems();
                } else {
                    jQuery(".box-up-sell .box-title").addClass('active');
                    jQuery(".box-up-sell .products-grid").addClass('show');
                    jQuery(".box-up-sell .products-grid").show();
                }
            }
        });
        var currentUrl = document.URL;
        urlParts = currentUrl.split('#');
        if (urlParts[1] === "write-review") {
            jQuery('html, body').animate({
                scrollTop: jQuery('#collateral-tabs').offset().top
            }, 500);
            openReviewForm();
        } else if (urlParts[1] === "read-reviews") {
            jQuery('html, body').animate({
                scrollTop: jQuery('#collateral-tabs').offset().top
            }, 500);
            openReviews();
        }
        setTimeout('updateCopmareIcons()', 3000);
    });
    function adjustTabs() {
        if (document.body.clientWidth > 997) {
            openTab('tab-details');
            jQuery(".box-up-sell .box-title").addClass('active');
            jQuery(".box-up-sell .products-grid").addClass('show');
            jQuery(".box-up-sell .products-grid").show();
            jQuery(".box-related .box-title").addClass('active');
            jQuery(".box-related .box-content").addClass('show');
            jQuery(".box-related .box-content").show();
        } else if (document.body.clientWidth > 767) {
            if (!needJQforTab) {
                collateralTabs.closeAllTabs();
            }
            jQuery(".box-up-sell .box-title").addClass('active');
            jQuery(".box-up-sell .products-grid").addClass('show');
            jQuery(".box-up-sell .products-grid").show();
            closeRelatedItems();
        } else {
            if (!needJQforTab) {
                collateralTabs.closeAllTabs();
            }
            closeUpsellItems();
            closeRelatedItems();
        }
    }
    if (!isTouch()) {
        jQuery(window).resize(function () {
            adjustTabs();
        });
    } else {
        if (!window.addEventListener) {
            window.attachEvent("orientationchange", function () {
                adjustTabs();
            }, false);
        }
        else {
            window.addEventListener("orientationchange", function () {
                adjustTabs();
            }, false);
        }
    }
</script>


<script type="application/ld+json">

</script>
</div>
</div>


