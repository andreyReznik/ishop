Enterprise.TopMyAccountLinks.initialize('myAccountContent');
jQuery(document).ready(function () {
    jQuery('body').mouseover(function (e) {
        var elem = e.target;
        if (jQuery(elem).parents('#top-myaccount').length > 0 || jQuery(elem).attr("id") === 'top-myaccount') {
            jQuery("#myAccountContent").stop(true, true).show();
            jQuery('.top-myaccount').addClass('expanded');
        }
else {
    jQuery("#myAccountContent").hide();
    jQuery('.top-myaccount').removeClass('expanded');
    }

});

if (!isTouch()) {
    jQuery("#top-myaccount-handle").click(function () {
        if (jQuery("#myAccountContent ul li").length > 2) {
            window.location.href = jQuery(this).attr('data-href');
        }
});
}
});

var liLength = jQuery('#myAccountContent li').length;
if (liLength > 2) {
    jQuery('#my-accunt-menu-user').show();
    jQuery('#my-accunt-menu-guest').hide();
    } else {
    jQuery('#my-accunt-menu-user').hide();
    jQuery('#my-accunt-menu-guest').show();
    }

Event.observe(window, 'scroll', function () {
    if (document.viewport.getScrollOffsets()['top'] >= 400) {
    $('backtop').setStyle({'display': 'block'});
} else {
    $('backtop').setStyle({'display': 'none'});
}
});


jQuery(document).ready(function () {
    jQuery(".owl-carousel").owlCarousel({autoplayTimeout: 6000, autoplayHoverPause: true, autoplay: true});
});

