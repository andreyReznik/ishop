var productAddToCartForm = new VarienForm('product_addtocart_form');
productAddToCartForm.submit = function (button, url) {
    if (this.validator.validate()) {
        var form = this.form;
        var oldUrl = form.action;
        if (url) {
            form.action = url;
        }
        var productName = jQuery('#product-name').text().trim();
        var e = null;
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
                    dataType: 'html',
                    type: 'post',
                    data: data,
                    statusCode: {
                        200: function(data) {
                            jQuery('#ajax-loader').hide();
                            if (jQuery('.top-cart')) {
                                jQuery('.top-cart').replaceWith(data);
                                Enterprise.TopCart.initialize('topCartContent');
                                showSuccessPopup(productName);
                            }
                        },
                        404: function(data){
                            jQuery('#ajax-loader').hide();
                            showErrorPopup(productName);
                        }
                    },error:  function(data){
                        jQuery('#ajax-loader').hide();
                        showErrorPopup(productName);
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
var showSuccessPopup = function(productName){
    var popup = '<div id="pdp-success-popup" class="jom-popup"><h3>Added to your Bag!</h3><p>' + productName + '</p><ul class="popup-buttons-list"><li>' +
        '<a href="/product/cart/view" class="popup-cart-button popup-buttons">View My Bag</a></li><li><a onclick="continueshop()" class="popup-shop-button popup-buttons">Continue Shopping</a></li></ul></div>';
    if (jQuery('.giftcard-form').length > 0) {
        jQuery('.giftcard-form input#giftcard_amount_input, .giftcard-form input#giftcard_recipient_name, .giftcard-form input#giftcard_recipient_email, .giftcard-form textarea#giftcard_message').val("");
    }
    jQuery('.page').append(popup);
    popupautoclose();
};

var showErrorPopup = function(productName){
    var popup = '<div id="pdp-success-popup" class="jom-popup"><h3>Unable to add Product</h3><p>' + productName + '</p><ul class="popup-buttons-list"><li><a onclick="continueshop()" class="popup-shop-button popup-buttons">Continue Shopping</a></li></ul></div>';
    jQuery('.page').append(popup);
    popupautoclose();
};
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
