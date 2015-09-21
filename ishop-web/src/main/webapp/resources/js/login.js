
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

