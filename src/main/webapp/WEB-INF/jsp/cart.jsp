<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="cart" id="shopping-cart">
<div class="page-title">
    <h1 style="color:black">Shopping Cart</h1>
</div>
<div>
        <c:out value="${cart}" default="default value of c:out" escapeXml="false"/>
        <script type="text/javascript">decorateTable('shopping-cart-table');</script>

</div>
<div class="totals">
    <c:out value="${grandTotal}" default="default value of c:out" escapeXml="false"/>
</div>
<div id="cart-collaterals" class="cart-collaterals">
    <script type="text/javascript">
        //<![CDATA[
        var giftcardForm = new VarienForm('giftcard-form');
        function checkGiftCardStatus() {
            if (giftcardForm.validator && !giftcardForm.validator.validate()) {
                return false;
            }
            new Ajax.Updater(
                    'giftcard_balance_lookup',
                    'http://www.jomashop.com/giftcard/cart/quickCheck/',
                    {
                        onCreate: function () {
                            $('gc-please-wait').show();
                        },
                        onComplete: function () {
                            $('gc-please-wait').hide();
                        },
                        parameters: {giftcard_code: $('giftcard_code').value}
                    }
            );
        }
        //]]>
        if (jQuery("div.v-fix span").text() == '')
            jQuery("div.v-fix span").hide();

    </script>
    <script type="text/javascript">
        (function ($) {
            $(document).ready(function () {
                if ($('.cart-special span').text() != '')
                    window.location.href = "#cart-collaterals";
            });
            $("#giftcard_code").focus(function () {
                $(".cart-special").hide();
                $(".v-fix").removeClass('success error');
            }).click(function () {
                        $("#advice-required-entry-giftcard_code").hide();
                        $(this).removeClass('validation-failed');
                    });

        })(jQuery);
    </script>
</div>

<script type="text/javascript">
    function updateTotal() {

        jQuery('#ajax-loader').show();
        jQuery('#page-overlay').show();
        var estimate_method = jQuery('input[name=estimate_method]:checked').val();
        var updateUrl = 'http://www.jomashop.com/ajaxcartupdate/cart/updateTotal/';
        var isSecure = 1;
        if (isSecure == 1) {
            updateUrl = updateUrl.replace('http', 'https');
        }
        var updater = new Ajax.Request(updateUrl, {
            method: 'get',
            parameters: {estimate_method: estimate_method},
            onComplete: function (response) {
                jQuery('#ajax-loader').hide();
                jQuery('#page-overlay').hide();
                var content = response.responseText.evalJSON();
                if (content != '') {
                    jQuery('#shopping-cart-totals-table').replaceWith(content);
                }
            },
            onFailure: function () {
                //console.log('nothing received');
            }
        });
    }
</script>
</div>
</div>
<script type="text/javascript">
    function updateCart(qty_id, item_id, basePrice) {
        jQuery('#ajax-loader').show();
        jQuery('#page-overlay').show();
        var qty_value = jQuery('#' + qty_id).val();
        var updateUrl = '/product/cart/update/'+item_id+'/'+qty_value;
        var isSecure = 1;
        if (isSecure == 1) {
            updateUrl = updateUrl.replace('http', 'https');
        }
        jQuery.ajax({
            url: updateUrl,
            dataType: 'json',
            type: 'get',
            success: function (data) {
                jQuery('#ajax-loader').hide();
                jQuery('#page-overlay').hide();
                if (data.status == "SUCCESS") {
                    if (jQuery('#shopping-cart-table')) {
                        jQuery('#shopping-cart-table').replaceWith(data.sidebar);
                    }
                    if (jQuery('#shopping-cart-totals-table')) {
                        jQuery('#shopping-cart-totals-table').replaceWith(data.grandTotal);
                    }
                } else if (data.status == "ERROR") {

                }

            }
        });
    }
    (function ($) {
        $(document).ready(function () {
            $('select').uniform();
            $(".qty").keydown(function (e) {
                // Allow: backspace, delete, tab, escape, enter and .
                if ($.inArray(e.keyCode, [8, 9, 27, 46]) !== -1 ||
                    // Allow: Ctrl+A
                        (e.keyCode === 65 && e.ctrlKey === true) ||
                    // Allow: home, end, left, right
                        (e.keyCode >= 35 && e.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });
        });
    })(jQuery);
    jQuery(document).ready(function () {
        jQuery(".cart-collaterals .cart-collateral-box h2").click(function () {
            if (document.body.clientWidth < 998) {
                if (jQuery(this).parent('.cart-collateral-box').find('.cart-collateral-container').is(':visible')) {
                    jQuery(".cart-collaterals .cart-collateral-box h2").removeClass('active');
                    jQuery(".cart-collaterals .cart-collateral-box .cart-collateral-container").hide();
                }
                else {
                    jQuery(".cart-collaterals .cart-collateral-box h2").removeClass('active');
                    jQuery(".cart-collaterals .cart-collateral-box .cart-collateral-container").hide();
                    jQuery(this).addClass('active');
                    jQuery(this).parent('.cart-collateral-box').find('.cart-collateral-container').show();
                }
            }
        });
    });
    function adjustCartTabs() {
        if (document.body.clientWidth > 997) {
            jQuery(".cart-collaterals .cart-collateral-box h2").removeClass('active');
            jQuery(".cart-collaterals .cart-collateral-box .cart-collateral-container").show();
        } else {
            jQuery(".cart-collaterals .cart-collateral-box h2").removeClass('active');
            jQuery(".cart-collaterals .cart-collateral-box .cart-collateral-container").hide();
        }
    }
    if (!isTouch()) {
        jQuery(window).resize(function () {
            adjustCartTabs();
        });
    } else {
        if (!window.addEventListener) {
            window.attachEvent("orientationchange", function () {
                adjustCartTabs();
            }, false);
        }
        else {
            window.addEventListener("orientationchange", function () {
                adjustCartTabs();
            }, false);
        }
    }
</script>

<div id="tcapiScModal" class="jom-popup mfp-hide"></div>
<script>
    //ThriveSavingsCenterwidget[http://thrivecommerce.com]
    jQuery('.tcapiScButton').magnificPopup({callbacks: {open: function () {
        window.tcapiData = {r: document.referrer, q: location.search};
        this.content.html('<script id="tcapiSc" src="//tcapi.io/X5h/sc/' +
                escape(JSON.stringify(window.tcapiData)) + '"><\/script>');
    }}});
</script>
</div>
</div>


