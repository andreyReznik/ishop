/**
 * Version: _V1438376751_
 * Copyright 2011 Amazon.com, Inc., or its Affiliates.
 **/

if (!CBA || typeof(CBA) == "undefined") {
    var CBA = {}
}
if (!CBA.Checkout || typeof(CBA.Checkout) == "undefined") {
    CBA.Checkout = new (function () {
        this.ASYNC = new (function () {
            this.Registry = new (function () {
                this.items = new Array();
                this.register = function (J, H, I) {
                    var K = J + "_" + H;
                    this.putEntry(K, I)
                };
                this.getHandler = function (I, H) {
                    var J = I + "_" + H;
                    return this.getEntry(J)
                };
                this.putEntry = function (H, I) {
                    this.items[H] = I
                };
                this.getEntry = function (H) {
                    return this.items[H]
                }
            });
            this.HandleJSONResponse = new (function () {
                this.handleJSONResponse = function (O) {
                    if (!O) {
                        return
                    }
                    var H = O.action;
                    var J = O.pagelets;
                    if (!(H && J)) {
                        return
                    }
                    for (var I = 0; I < J.length; I++) {
                        var M = J[I];
                        var L = M.id;
                        if (L) {
                            var N = M.data;
                            if (N) {
                                var K = CBA.Checkout.ASYNC.Registry.getHandler(L, H);
                                if (K) {
                                    K(N)
                                }
                            }
                        }
                    }
                }
            })
        });
        this.Constants = function () {
            return{UCUI_COMMON_FIELDS_FORM_ID: "#UnifiedCheckoutCommonFieldsForm", UCUI_ADD_CC_FORM_ID: "#AddCreditCardForm_CreditCard", UCUI_ADD_DD_FORM_ID: "#AddBankAccountForm_BankAccount", UCUI_ADD_ADDRESS_FORM_ID: "#AddNewAddressForm_Address", UCUI_ADD_BILLING_ADDRESS_FORM_ID: "#AddNewAddressForm_BillingAddress", UCUI_EDIT_CC_FORM_ID: "#EditCCForm", UCUI_SAVE_CREDIT_CARD_FORM_ID: "#AddCCAndSetPaymentMethodForm", UCUI_SAVE_DIRECT_DEBIT_FORM_ID: "#AddDDAndSetPaymentMethodForm", UCUI_SPC_UPDATE_CC_EXPIRY_FORM_ID: "#SPCUpdateCCExpiryForm", UCUI_APA_CHECKBOX_INPUT_ID: "#apaCheckbox", UCUI_IS_APA_SELECTED_INPUT_NAME: "isAPASelected", POPUP_WIN_WIDTH: 520, POPUP_WIN_HEIGHT: 475, POPUP_WIN_NAME: "OffAmazonPaymentsPopupWindow", BRIDGE_IFRAME_NAME: "OffAmazonPaymentsBridgeIframe", MILLIS: 1000, POPUP_LOADING_HTML: "                 <style>              a {color:#004B91;}             #headerSlots {padding-top: 0; height: 50px;}             #pageLoading #mainContentArea {height: 375px;overflow-y: auto;}              #imgLoading {text-align: center; padding-top: 120px;}             #footerSlots {width: 100%;height: 50px;position: fixed;bottom: 0px;left: 0px;}             #footerSlots #amazonPaymentsLogo {background: url(https://images-na.ssl-images-amazon.com/images/G/01/cba/images/logos/logo_amazonpayments_overlay._V192259298_.gif) no-repeat center top;margin-top: 4px;height: 17px;text-indent: -9999px;}             #footerSlots .AtoZ {font-size: 10px; padding-top: 1px;}             #footerSlots .ap_privacy_info {font-size: 9px;}             div#bottom-6 {left:auto;top:auto;text-align: center;border-top:1px solid #B3B3B3;}             .ap_privacy_info {font-family:Verdana;font-size:10px;font-weight:normal;}         </style>          <div id='pageLoading'>             <div id='wrapper'>                  <div id='headerSlots'></div>                  <div id='mainContentArea'>                      <div id='centerSlots'>                          <div id='center-1'>                              <div id='imgLoading'>                                  <img id='loadingImg' src='https://images-na.ssl-images-amazon.com/images/G/01/ui/loadIndicators/loading-large_labeled.gif'>                             </div>                          </div>                      </div>                  </div>                  <div id='footerSlots'>                      <div id='bottom-6'>                         <div class='amazonPaymentLogo' id='amazonPaymentsLogo'></div>                      </div>                 </div>             </div>         </div>"}
        }();
        this.commonFieldsFormHandler = function (S) {
            var K = S.find("input");
            var Q = jQuery(CBA.Checkout.Constants.UCUI_COMMON_FIELDS_FORM_ID).find("input");
            var N = Q.length;
            var M = "";
            var L = 0;
            for (var O = 0; O < N; O += 1) {
                var I = jQuery(Q[O]);
                var H = I.attr("type");
                var P = I.attr("name");
                var J = I.attr("value");
                var R = K.filter('[name="' + P + '"]');
                if (R.length == 0) {
                    M += '<input type="' + H + '" name="' + P + '" value="' + J + '" />'
                }
            }
            S.append(M)
        };
        this.submitWithCommonFields = function (I) {
            var H = jQuery(I);
            CBA.Checkout.commonFieldsFormHandler(H);
            H.submit()
        };
        this.submitWithCommonFieldsASYNC = function (H) {
            this.submitWithCommonFieldsASYNC(H, null, null)
        };
        this.submitWithCommonFieldsASYNC = function (L, K, J) {
            var I = jQuery(L);
            this.commonFieldsFormHandler(I);
            var H = {target: L, dataType: "json", success: function (M) {
                CBA.Checkout.ASYNC.HandleJSONResponse.handleJSONResponse(M);
                if (K) {
                    K(M, J)
                }
            }};
            I.ajaxSubmit(H);
            return false
        };
        this.submitWithCommonFieldsUsingPopup = function (K, J) {
            var I = jQuery(K);
            CBA.Checkout.commonFieldsFormHandler(I);
            var H = CBA.Checkout.Constants.POPUP_WIN_NAME + J;
            CBA.Checkout.openPopup(H);
            I.attr("target", H);
            I.submit()
        };
        this.submitWithCommonFieldsUsingWindow = function (L, K) {
            var H = jQuery(L);
            CBA.Checkout.commonFieldsFormHandler(H);
            var J = "window" + K;
            var I = window.open("", J);
            H.attr("target", J);
            H.submit()
        };
        this.openPopupPrivacyPolicy = function (J) {
            var I = "width=" + 520 + "height=" + 475 + "resizable=1,scrollbars=1,toolbar=1,status=1";
            var H = "AmazonHelp";
            var K = window.open(J, H, I);
            K.focus()
        };
        this.openPopup = function (L) {
            var K = (window.screen.width - CBA.Checkout.Constants.POPUP_WIN_WIDTH) / 2;
            var J = (window.screen.height - CBA.Checkout.Constants.POPUP_WIN_HEIGHT) / 2;
            if ((K > 0) && (J > 0)) {
                var M = "top=" + J + ",left=" + K + ",width=" + CBA.Checkout.Constants.POPUP_WIN_WIDTH + ",height=" + CBA.Checkout.Constants.POPUP_WIN_HEIGHT + ", resizable=yes,menubar=no,toolbar=no";
                M = M + ",location=yes,status=yes";
                var I = window.open("", L, M);
                try {
                    I.document.write(CBA.Checkout.Constants.POPUP_LOADING_HTML)
                } catch (H) {
                    I.close();
                    I = window.open("", L, M);
                    I.document.write(CBA.Checkout.Constants.POPUP_LOADING_HTML)
                }
                I.focus();
                return I
            }
        };
        this.toggleAPACheckbox = function () {
            var H = jQuery(CBA.Checkout.Constants.UCUI_APA_CHECKBOX_INPUT_ID + ":checked").val();
            var I = (H != null) ? "true" : "false";
            var J = jQuery(CBA.Checkout.Constants.UCUI_COMMON_FIELDS_FORM_ID).find(":input").filter('[name="' + CBA.Checkout.Constants.UCUI_IS_APA_SELECTED_INPUT_NAME + '"]');
            if (J.length == 0) {
                jQuery(CBA.Checkout.Constants.UCUI_COMMON_FIELDS_FORM_ID).append('<input type="hidden" name="' + CBA.Checkout.Constants.UCUI_IS_APA_SELECTED_INPUT_NAME + '" value="' + I + '">')
            } else {
                J.val(I)
            }
        };
        this.appendInputToForm = function (N, L, H) {
            var J = jQuery(N);
            var K = (J.find("input")).filter('[name="' + L + '"]');
            var I = K.length;
            if (I != 0) {
                for (var M = 0; M < I; M++) {
                    K[M].value = H
                }
                return
            }
            J.append('<input type="hidden" name="' + L + '" value="' + H + '"/>')
        };
        this.handleTooltipOnHover = function (H, J) {
            var K = "#" + H + "Tooltip";
            var I = jQuery(K);
            jQuery("#" + H).hover(function (Q) {
                var R = jQuery(this).offset();
                var O = jQuery(this).height();
                var M = jQuery(this).width();
                var N = I.width();
                var L = (R.top + O) + "px";
                var P = (R.left - N / 2) + "px";
                I.css({top: L, left: P, position: "absolute"}).show();
                if (J) {
                    J(Q)
                }
            }, function (L) {
                I.hide();
                if (J) {
                    J(L)
                }
            })
        };
        this.handlePopoverOnHover = function (J, K) {
            var I = "#" + J + "Popover";
            var H = jQuery(I);
            jQuery("#" + J).hover(function (P) {
                var Q = jQuery(this).offset();
                var S = jQuery(this).height();
                var M = jQuery(this).width();
                var L = H.width();
                var T = H.height();
                var R = jQuery(document).width();
                var N = (Q.top - T - 2 * (S)) + "px";
                var O = ((R - L) / 2) + "px";
                H.css({top: N, left: O, position: "absolute"}).show();
                if (K) {
                    K(P)
                }
            }, function (L) {
                H.hide();
                if (K) {
                    K(L)
                }
            })
        };
        this.showA2ZGuarantee = function () {
            jQuery("#a2zBlurb").show()
        };
        this.setupSelectPaymentMethodPagelet = function () {
            jQuery("#cbaCCSelect").change(function () {
                var H = jQuery(this).val();
                if (H) {
                    var I = jQuery("#selectCCForm");
                    CBA.Checkout.commonFieldsFormHandler(I);
                    I.submit()
                }
            });
            jQuery("#ccBillingAddress").hide();
            jQuery("#cbaShowBillingLink").click(function () {
                jQuery("#ccBillingAddress").show();
                jQuery("#cbaBillingLink").hide()
            });
            jQuery("#cbaHideBillingLink").click(function () {
                jQuery("#ccBillingAddress").hide();
                jQuery("#cbaBillingLink").show()
            });
            jQuery("#setBillingToShippingAddressCB").change(function () {
                var I = jQuery(this).attr("checked");
                if (I) {
                    var H = jQuery("#SetBillingToShippingAddressForm");
                    CBA.Checkout.commonFieldsFormHandler(H);
                    H.submit()
                }
            });
            jQuery("#updateExpiryLink").click(function () {
                jQuery("#expiryMessage").hide();
                jQuery("#expiryUpdateForm").show()
            })
        };
        this.setupEditCreditCardPagelet = function () {
            jQuery("#setBillingToShippingAddressCB").change(function () {
                var I = jQuery(this).attr("checked");
                var H = "";
                if (I) {
                    H = jQuery("#EditCCForm [name=newShipToAddressId]")
                }
                jQuery("#SetBillingToShippingAddress [name=billingAddressId]").val(H.val());
                CBA.Checkout.submitWithCommonFields("#SetBillingToShippingAddressForm")
            })
        };
        var b = null;
        var o = null;
        var v = null;
        var q = null;
        var d = null;
        var B = null;
        var w = 10;
        var t = "US";
        this.createAddressInputFieldValidators = function () {
            if (jQuery(CBA.Checkout.Constants.UCUI_ADD_ADDRESS_FORM_ID).length || jQuery(CBA.Checkout.Constants.UCUI_ADD_BILLING_ADDRESS_FORM_ID).length) {
                v = new A(jQuery(CBA.Checkout.Constants.UCUI_ADD_ADDRESS_FORM_ID));
                if (jQuery(CBA.Checkout.Constants.UCUI_ADD_BILLING_ADDRESS_FORM_ID).length) {
                    q = new A(jQuery(CBA.Checkout.Constants.UCUI_ADD_BILLING_ADDRESS_FORM_ID))
                }
                v.addValidator(new j({elementToValidate: jQuery("#address_name"), validateFunctionWrappers: [new c({validateFunction: l, errorIdentifier: "missingDataName"})]}));
                countryCode = jQuery("#address_country").val();
                if (countryCode == t) {
                    if (t == "DE") {
                        v.addValidator(new z({elementToValidate: [jQuery("#address_addressLine1"), jQuery("#address_addressLine2")], validateFunctionWrappers: [new c({validateFunction: m, errorIdentifier: "missingDataAddressLine1"})]}))
                    } else {
                        v.addValidator(new j({elementToValidate: jQuery("#address_addressLine1"), validateFunctionWrappers: [new c({validateFunction: n, errorIdentifier: "missingDataAddressLine1"})]}))
                    }
                    if (t != "JP") {
                        v.addValidator(new j({elementToValidate: jQuery("#address_city"), validateFunctionWrappers: [new c({validateFunction: n, errorIdentifier: "missingDataCity"})]}))
                    }
                    if (t == "US" || t == "JP") {
                        v.addValidator(new j({elementToValidate: jQuery("#address_state"), validateFunctionWrappers: [new c({validateFunction: n, errorIdentifier: "missingDataState"})]}))
                    }
                    v.addValidator(new j({elementToValidate: jQuery("#address_zip"), validateFunctionWrappers: [new c({validateFunction: n, errorIdentifier: "missingDataPostalCode"})]}));
                    v.addValidator(new j({elementToValidate: jQuery("#address_phone"), validateFunctionWrappers: [new c({validateFunction: n, errorIdentifier: "missingDataPhone"})]}))
                } else {
                    v.addValidator(new j({elementToValidate: jQuery("#address_state")}));
                    v.addValidator(new j({elementToValidate: jQuery("#address_phone")}));
                    v.addValidator(new j({elementToValidate: jQuery("#address_zip")}));
                    v.addValidator(new j({elementToValidate: jQuery("#address_addressLine1")}));
                    v.addValidator(new j({elementToValidate: jQuery("#address_addressLine2")}))
                }
                if (q != null) {
                    q.validators = v.validators.slice(0)
                }
            }
        };
        this.createDirectDebitCardInputFieldValidators = function () {
            if (jQuery(CBA.Checkout.Constants.UCUI_ADD_DD_FORM_ID).length) {
                o = new A(jQuery(CBA.Checkout.Constants.UCUI_ADD_DD_FORM_ID));
                o.addValidator(new j({elementToValidate: jQuery("#bankAccountAccountNumber"), validateFunctionWrappers: [new c({validateFunction: n, errorIdentifier: "addBankAccount_BadAccountNumber"}), new c({validateFunction: a, errorIdentifier: "addBankAccount_BadAccountNumber"}), new c({validateFunction: f, errorIdentifier: "addBankAccount_BadAccountNumber"})]}));
                o.addValidator(new j({elementToValidate: jQuery("#bankAccountRoutingNumber"), validateFunctionWrappers: [new c({validateFunction: n, errorIdentifier: "addBankAccount_BadRoutingNumber"}), new c({validateFunction: k, errorIdentifier: "addBankAccount_BadRoutingNumber"}), new c({validateFunction: f, errorIdentifier: "addBankAccount_BadRoutingNumber"})]}));
                o.addValidator(new j({elementToValidate: jQuery("#bankAccountAccountName"), validateFunctionWrappers: [new c({validateFunction: n, errorIdentifier: "addBankAccount_BadAccountName"})]}))
            }
        };
        this.createCreditCardInputFieldValidators = function () {
            if (jQuery(CBA.Checkout.Constants.UCUI_ADD_CC_FORM_ID).length) {
                b = new A(jQuery(CBA.Checkout.Constants.UCUI_ADD_CC_FORM_ID));
                b.addValidator(new j({elementToValidate: jQuery("#cardNumber"), validateFunctionWrappers: [new c({validateFunction: n, errorIdentifier: "addCreditCard_BadNumber"}), new c({validateFunction: e, errorIdentifier: "addCreditCard_BadNumber"}), new c({validateFunction: h, errorIdentifier: "addCreditCard_BadNumber"}), new c({validateFunction: g, errorIdentifier: "addCreditCard_TypeNotAccepted"})]}));
                b.addValidator(new j({elementToValidate: jQuery("#cardHolderName"), validateFunctionWrappers: [new c({validateFunction: n, errorIdentifier: "addCreditCard_NoName"})]}));
                b.addValidator(new j({elementToValidate: jQuery("#expirationmonthandyear"), elementsToHighlight: jQuery("#expirationmonthandyear select"), validateFunctionWrappers: [new c({validateFunction: C, errorIdentifier: "addCreditCard_BadExpiration"})]}))
            }
        };
        this.createSPCCreditCardUpdateValidators = function () {
            if (jQuery(CBA.Checkout.Constants.UCUI_SPC_UPDATE_CC_EXPIRY_FORM_ID).length) {
                d = new A(jQuery(CBA.Checkout.Constants.UCUI_SPC_UPDATE_CC_EXPIRY_FORM_ID));
                d.addValidator(new j({elementToValidate: jQuery("#expiryUpdateForm"), elementsToHighlight: jQuery("#expiryUpdateForm select"), validateFunctionWrappers: [new c({validateFunction: C, errorIdentifier: "addCreditCard_BadExpiration"})]}))
            }
        };
        this.editCreditCardInputFieldValidators = function () {
            if (jQuery(CBA.Checkout.Constants.UCUI_EDIT_CC_FORM_ID).length) {
                B = new A(jQuery(CBA.Checkout.Constants.UCUI_EDIT_CC_FORM_ID));
                B.addValidator(new j({elementToValidate: jQuery("#expiryUpdateForm"), validateFunctionWrappers: [new c({validateFunction: C, errorIdentifier: "editCreditCard_BadExpiration"})]}))
            }
        };
        var F;
        var u;
        this.actionAddCreditCard = function (I, H) {
            F = I;
            u = H + 1;
            this.hideImportantMessage();
            return p(b, CBA.Checkout.Constants.UCUI_SAVE_CREDIT_CARD_FORM_ID)
        };
        this.actionAddCreditCardMobile = function (I, H) {
            F = I;
            u = H + 1;
            this.hideImportantMessage();
            return D(b, CBA.Checkout.Constants.UCUI_SAVE_CREDIT_CARD_FORM_ID)
        };
        this.actionEditCreditCard = function (I, H) {
            F = I;
            u = H + 1;
            this.hideImportantMessage();
            return p(B, CBA.Checkout.Constants.UCUI_EDIT_CC_FORM_ID)
        };
        this.actionAddBankAccount = function () {
            this.hideImportantMessage();
            return p(o, CBA.Checkout.Constants.UCUI_SAVE_DIRECT_DEBIT_FORM_ID)
        };
        this.actionAddAddress = function (H) {
            this.hideImportantMessage();
            CBA.Checkout.createAddressInputFieldValidators();
            return p(v, H)
        };
        this.actionAddAddressMobile = function (H) {
            this.hideImportantMessage();
            CBA.Checkout.createAddressInputFieldValidators();
            return D(v, H)
        };
        this.actionAddBillingAddressMobile = function (H) {
            this.hideImportantMessage();
            countryCode = jQuery("#address_country").val();
            if (countryCode != t) {
                CBA.Checkout.submitWithCommonFields(H);
                return true
            } else {
                return p(q, H)
            }
        };
        this.actionUpdateCreditCardExpiration = function (I, H) {
            F = I;
            u = H + 1;
            this.hideImportantMessage();
            return p(d, CBA.Checkout.Constants.UCUI_SPC_UPDATE_CC_EXPIRY_FORM_ID)
        };
        this.hideImportantMessage = function () {
            jQuery("div.importantMessageBox").hide()
        };
        function p(I, H) {
            I.runAllValidators(true);
            if (I.hasErrors()) {
                return false
            }
            CBA.Checkout.submitWithCommonFields(H);
            return true
        }

        function D(I, H) {
            I.runAllValidators(true);
            if (I.hasErrors()) {
                return false
            }
            CBA.Checkout.submitWithCommonFieldsASYNC(H);
            return true
        }

        function A(H) {
            this.section = H;
            this.errorBlock = H.find(".errorblock");
            this.errorIdentifiers = [];
            this.validators = [];
            this.DEFAULT_PRIORITY = 100;
            this.addError = function (I) {
                this.errorIdentifiers[I] = this.DEFAULT_PRIORITY;
                this.refreshErrorBlock()
            };
            this.removeError = function (I) {
                delete this.errorIdentifiers[I];
                this.refreshErrorBlock()
            };
            this.clearErrors = function () {
                this.errorIdentifiers = [];
                this.clearAllHighlighting();
                this.refreshErrorBlock()
            };
            this.runAllValidators = function (I) {
                if (I) {
                    this.clearErrors()
                }
                for (var J in this.validators) {
                    this.validate(this.validators[J])
                }
            };
            this.clearAllHighlighting = function () {
                for (var I in this.validators) {
                    this.validators[I].refreshHighlight(true)
                }
            };
            this.hasErrors = function () {
                for (var I in this.errorIdentifiers) {
                    return true
                }
                return false
            };
            this.validate = function (L) {
                var N = true;
                var M = [];
                var Q = [];
                for (var J in L.validateFunctionWrappers) {
                    var P = L.validateFunctionWrappers[J];
                    var I = P.invoke(L.elementToValidate);
                    if (I) {
                        M[P.errorIdentifier] = true
                    } else {
                        Q[P.errorIdentifier] = true
                    }
                    N = N && I
                }
                for (var O in M) {
                    this.removeError(O)
                }
                for (var K in Q) {
                    this.addError(K)
                }
                if (N && L.onSuccess) {
                    L.onSuccess()
                } else {
                    if (!N && L.onFailure) {
                        L.onFailure()
                    }
                }
                L.refreshHighlight(N)
            };
            this.addValidator = function (I) {
                this.validators.push(I)
            };
            this.refreshErrorBlock = function () {
                this.errorBlock.find("[error]").hide();
                var J = 0;
                for (var I in this.errorIdentifiers) {
                    var K = "[error=" + I + "]";
                    this.errorBlock.find(K).show();
                    J++
                }
                if (J > 0) {
                    this.errorBlock.show();
                    var L = jQuery.browser.msie ? "tabIndex" : "tabindex";
                    this.errorBlock.attr(L, -1).focus()
                } else {
                    this.errorBlock.hide()
                }
            }
        }

        function j(H) {
            this.elementToValidate = H.elementToValidate;
            this.elementsToHighlight = H.elementsToHighlight || H.elementToValidate;
            this.validateFunctionWrappers = H.validateFunctionWrappers;
            this.onSuccess = H.onSuccess;
            this.onFailure = H.onFailure;
            this.refreshHighlight = function (I) {
                if (I) {
                    this.elementsToHighlight.each(function () {
                        jQuery(this).removeClass("redbox")
                    })
                } else {
                    this.elementsToHighlight.each(function () {
                        jQuery(this).addClass("redbox")
                    })
                }
            }
        }

        function z(H) {
            this.elementToValidate = H.elementToValidate;
            this.elementsToHighlight = H.elementsToHighlight || H.elementToValidate[H.elementToValidate.length - 1];
            this.validateFunctionWrappers = H.validateFunctionWrappers;
            this.onSuccess = H.onSuccess;
            this.onFailure = H.onFailure;
            this.refreshHighlight = function (I) {
                if (I) {
                    this.elementsToHighlight.each(function () {
                        jQuery(this).removeClass("redbox")
                    })
                } else {
                    this.elementsToHighlight.each(function () {
                        jQuery(this).addClass("redbox")
                    })
                }
            }
        }

        function c(H) {
            this.validateFunction = H.validateFunction;
            this.errorIdentifier = H.errorIdentifier;
            this.invoke = function (I) {
                return this.validateFunction(I)
            }
        }

        function y(H) {
            var K = "0123456789";
            var I = true;
            var J;
            for (i = 0; i < H.length && I == true; i++) {
                J = H.charAt(i);
                if (K.indexOf(J) == -1) {
                    I = false
                }
            }
            return I
        }

        function r(H) {
            return jQuery.trim(H)
        }

        function E(H) {
            if (H.length === 0) {
                return false
            }
            var K = 0;
            var I = false;
            for (var J = H.length - 1; J >= 0; --J) {
                var L = parseInt(H.charAt(J), w);
                if (I) {
                    L *= 2;
                    if (L > 9) {
                        L -= 9
                    }
                }
                K += L;
                I = !I
            }
            return(K % 10) === 0
        }

        function G(H) {
            if (!H || typeof(H) == "undefined") {
                return false
            }
            if (H === "Visa" || H === "Mastercard" || H === "Amex" || H === "Discover" || H === "Jcb" || H === "Diners") {
                return true
            }
            return false
        }

        function n(H) {
            return H != null && r(H.val()).length > 0
        }

        function a(H) {
            return r(H.val()).length <= 10
        }

        function k(H) {
            return r(H.val()).length == 8
        }

        function f(H) {
            if (H == null) {
                return false
            } else {
                return y(r(H.val()))
            }
        }

        function m(J) {
            var I = false;
            for (var H = 0; H < J.length; H++) {
                I = I || (J[H] != null && r(J[H].val()).length > 0)
            }
            return I
        }

        function l(H) {
            return n(H) && r(H.val()).length <= 50
        }

        function e(H) {
            return r(H.val()).length >= 10
        }

        function h(H) {
            var I = H.val().replace(/\D/g, "");
            return E(I)
        }

        function g(I) {
            var J = I.val().replace(/\D/g, "");
            var H = x(J);
            if (typeof(H) == "undefined" || H == null) {
                return false
            }
            return G(H.name)
        }

        function C(I) {
            var J = I.find("[name=expirationMonth]").val();
            var H = I.find("[name=expirationYear]").val();
            return parseInt(H, 10) > F || (parseInt(H, 10) == F && parseInt(J, 10) >= u)
        }

        function s() {
            if (t == "US") {
                return{visa: {name: "Visa", regex: /^4/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/visa.gif"}, mastercard: {name: "Mastercard", regex: /^5[1-5]/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/mc.gif"}, diners: {name: "Diners", regex: /^30[0-5]|^36|^38/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/diners.gif"}, amex: {name: "Amex", regex: /^34|^37/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/amex.gif"}, discover: {name: "Discover", regex: /^6011|^65/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/discover.gif"}, jcb: {name: "Jcb", regex: /^35|^2131|^1800/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/jcb.gif"}}
            }
            if (t == "GB") {
                return{visa: {name: "Visa", regex: /^4/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/visa.gif"}, mastercard: {name: "Mastercard", regex: /^5[1-5]/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/mc.gif"}, amex: {name: "Amex", regex: /^34|^37/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/amex.gif"}}
            }
            if (t == "DE") {
                return{visa: {name: "Visa", regex: /^4/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/visa.gif"}, mastercard: {name: "Mastercard", regex: /^5[1-5]/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/mc.gif"}, amex: {name: "Amex", regex: /^34|^37/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/amex.gif"}}
            }
            if (t == "JP") {
                return{visa: {name: "Visa", regex: /^4/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/visa.gif"}, mastercard: {name: "Mastercard", regex: /^5[1-5]/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/mc.gif"}, amex: {name: "Amex", regex: /^34|^37/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/amex.gif"}, jcb: {name: "Jcb", regex: /^35|^2131|^1800/g, img_src: "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/jcb.gif"}}
            }
        }

        function x(J) {
            var K = s();
            for (var I in K) {
                var H = K[I];
                if (J.match(H.regex)) {
                    return H
                }
            }
            return null
        }

        this.showCCType = function (H, I) {
            this.showCCTypeCommon(H, I, "https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/blank.gif")
        };
        this.showCCTypeMobile = function (H, I) {
            this.showCCTypeCommon(H, I, "https://images-na.ssl-images-amazon.com/images/G/01/cba/images/widgets/common/blue.png")
        };
        this.showCCTypeCommon = function (I, K, L) {
            var J = jQuery(I).val();
            var H = x(J);
            if (H && G(H.name)) {
                jQuery(K + " > img").attr("src", H.img_src)
            } else {
                jQuery(K + " > img").attr("src", L)
            }
        };
        this.getCCName = function (H) {
            return x(H).name
        };
        this.bindRadioButtons = function (I) {
            for (var J = 0; J < I.length; J++) {
                var H = I[J];
                jQuery(H).change(function () {
                    var K = jQuery(this).attr("name");
                    var L = jQuery(this).attr("id");
                    if (jQuery(this).attr("checked")) {
                        jQuery('input[name="' + K + '"]').removeAttr("checked")
                    }
                    jQuery(this).attr("checked", "checked")
                })
            }
        };
        this.widgetSendErrMsg = function (L, I, H, J) {
            var K = "apay-OffAmazonPayments_mec_" + L + "=" + I + ";widgetId=" + H;
            this.retryHandler(window.parent, K, J, 1)
        };
        this.widgetSendMsg = function (L, I, H) {
            var K = false;
            var J = L + ";widgetId=" + I;
            this.sendMsg(K, J, H)
        };
        this.redirectSendMsg = function (M, L, I, H) {
            var K = "apay-" + M + ";widgetId=" + H + ";returnUrl=" + L;
            var J = window.opener;
            this.retryHandler(J, K, I, 1)
        };
        this.sendMsg = function (I, L, H) {
            var K = "apay-" + L;
            var J = (I) ? window.opener.parent : window.parent;
            this.retryHandler(J, K, H, 1);
            return true
        };
        this.retryHandler = function (J, L, I, H) {
            try {
                this.sendMessageToBridgeIframe(J, L, I)
            } catch (M) {
                var K = this;
                if (H < 5) {
                    setTimeout(function () {
                        K.retryHandler(J, L, I, H + 1)
                    }, CBA.Checkout.Constants.MILLIS * Math.pow(2, H))
                }
            }
        };
        this.sendMessageToBridgeIframe = function (J, K, I) {
            var H = J.frames[CBA.Checkout.Constants.BRIDGE_IFRAME_NAME];
            if (H && typeof(H) !== "undefined" && typeof(H.sendBridgeMessage) !== "undefined") {
                H.sendBridgeMessage(K, I)
            }
        };
        this.sendMessageToParent = function (L, I) {
            if (typeof(I) != "string") {
                I = String(I)
            }
            var K = false;
            var H = window.parent;
            if (H && typeof(H.postMessage) !== "undefined") {
                try {
                    H.postMessage(L, I);
                    K = true
                } catch (N) {
                }
            }
            if (!K) {
                H = window.top;
                var J = I.search(/#/);
                var M = (J != -1 && J <= I.length) ? I + L : I + "#" + L;
                if (H && !H.closed) {
                    H.location = M
                }
            }
        };
        this.saveWidgetShippingAddress = function (H) {
            if (H.status == "failed") {
                displayErrorMessage(H.content);
                jQuery("#errorWidget").show();
                jQuery("#addressWidget").remove()
            } else {
                updateSelectedAddress(H.content);
                jQuery("#errorWidget").hide()
            }
        };
        this.saveWidgetPaymentMethod = function (H) {
            if (H.status === "failed") {
                displayErrorMessage(H.content);
                jQuery("#errorWidget").show();
                jQuery("#addressWidget").remove()
            } else {
                updateSelectedPaymentInstrument(H.content);
                jQuery("#errorWidget").hide()
            }
        }
    });
    function closePopup() {
        window.close()
    }

    function PopupWinWithDimension(c, e, f) {
        var d = "width=" + e + "height=" + f + "resizable=1,scrollbars=1,toolbar=1,status=1";
        var b = "AmazonHelp";
        var a = window.open(c, b, d);
        a.focus();
        return false
    }
}
jQuery(document).ready(function () {
    CBA.Checkout.createCreditCardInputFieldValidators();
    CBA.Checkout.createDirectDebitCardInputFieldValidators();
    CBA.Checkout.createSPCCreditCardUpdateValidators();
    CBA.Checkout.editCreditCardInputFieldValidators()
});
function refitSelectedAddress() {
    var r = jQuery("#addressName");
    var q = jQuery("#addressLine1");
    var p = jQuery("#addressLine2");
    var j = jQuery("#addressLine3");
    var o = jQuery("#addressCity");
    var n = jQuery("#addressStateZip");
    var m = jQuery("#addressCountry");
    var l = jQuery("#addressPhone");
    var h = jQuery(r).text();
    var g = jQuery(q).text();
    var f = jQuery(p).text();
    var b = jQuery(j).text();
    var e = jQuery(o).text();
    var d = jQuery(n).text();
    var c = jQuery(m).text();
    refit(r, 1);
    refit(q, 1);
    refit(p, 1);
    refit(j, 1);
    refit(o, 1);
    refit(n, 1);
    refit(m, 1);
    if (l != undefined && l != null) {
        refit(l, 1)
    }
    var a = 0;
    var s = 8;
    if (l == undefined || l == null) {
        s--
    }
    var k = num_rows(jQuery("#cba-v2-widget-preview")) - s;
    if (k > 0) {
        jQuery(q).text(g);
        a = refit(q, 1 + k);
        k -= (a - 1)
    }
    if (k > 0) {
        jQuery(p).text(f);
        a = refit(q, 1 + k);
        k -= (a - 1)
    }
    if (k > 0) {
        jQuery(j).text(b);
        a = refit(p, 1 + k);
        k -= (a - 1)
    }
    if (k > 0) {
        jQuery(r).text(h);
        a = refit(r, 1 + k);
        k -= (a - 1)
    }
    if (k > 0) {
        jQuery(n).text(d);
        a = refit(n, 1 + k);
        k -= (a - 1)
    }
}
function num_rows(c) {
    var a = jQuery(c).height();
    jQuery(c).append("<div id='cba-v2-widget-temp-div' style='position:absolute; visibility:hidden'>H</div>");
    var b = jQuery("#cba-v2-widget-temp-div").height();
    jQuery("#cba-v2-widget-temp-div").remove();
    return Math.round(a / b)
}
function refit(c, a) {
    if (num_rows(c) > a) {
        var b = jQuery(c).html();
        jQuery(c).html("<span>" + b + "</span><span>...</span>")
    }
    while (num_rows(c) > a) {
        if (b.length > 0) {
            b = b.substr(0, b.length - 5);
            jQuery(c).html("<span>" + b + "</span><span>...</span>")
        } else {
            break
        }
    }
    return num_rows(c)
};