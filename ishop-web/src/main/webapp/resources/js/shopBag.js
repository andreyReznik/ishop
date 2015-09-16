

if (jQuery("div.v-fix span").text() == '')
jQuery("div.v-fix span").hide();

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


    function updateCart(qty_id, item_id) {
        jQuery('#ajax-loader').show();
        jQuery('#page-overlay').show();
        var qty_value = jQuery('#' + qty_id).val();
        var updateUrl = '/product/ajax/cart/update/' + item_id + '/' + qty_value;
        var isSecure = 1;
        if (isSecure == 1) {
        updateUrl = updateUrl.replace('http', 'https');
        }
    jQuery.ajax({
        url: updateUrl,
        dataType: 'html',
        type: 'get',
        statusCode: {
        200: function (data) {
        jQuery('#ajax-loader').hide();
        jQuery('#page-overlay').hide();
        if (jQuery('#bag-content')) {
            jQuery('#bag-content').replaceWith(data);
        }
        },
        404: function (data) {
            jQuery('#ajax-loader').hide();
            jQuery('#page-overlay').hide();
            alert('Item not found!');
            }
        },
        error: function (data) {
            jQuery('#ajax-loader').hide();
            jQuery('#page-overlay').hide();
            alert('Error occured. Try later.');
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

        //ThriveSavingsCenterwidget[http://thrivecommerce.com]
        jQuery('.tcapiScButton').magnificPopup({callbacks: {open: function () {
            window.tcapiData = {r: document.referrer, q: location.search};
        this.content.html('<script id="tcapiSc" src="//tcapi.io/X5h/sc/' +
                escape(JSON.stringify(window.tcapiData)) + '"><\/script>');
        }}});

