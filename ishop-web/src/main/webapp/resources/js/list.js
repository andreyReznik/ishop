
decorateDataList('narrow-by-list');
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


(function ($) {
    $(document).ready(function () {
        $('.products-grid li:nth-child(2n+3)').addClass('mRow');
        $('.products-grid li:nth-child(3n+4)').addClass('tRow');
        $('.products-grid li:nth-child(4n+5)').addClass('dRow');
    });
})(jQuery);

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


(function ($) {
    $(document).ready(function () {
        $('input#id_search').quicksearch('.brands-filter .layerednavigation li');
    });
})(jQuery);



