/**
 * Version: _V1438376751_
 * Copyright 2011 Amazon.com, Inc., or its Affiliates.
 **/

if (typeof(PYOP) === "undefined") {
    PYOP = {}
}
if (typeof(PYOP.Widget) === "undefined") {
    PYOP.Widget = {}
}
PYOP.Widget = new (function () {
    this.innerHeight = document.body.clientHeight || window.innerHeight;
    this.innerWidth = document.body.clientWidth || window.innerWidth;
    this.PaddingTopBottom = 100;
    this.PaddingLeftRight = 43;
    this.innerErrorContainerStyle = function (b, a) {
        return{height: (b - PYOP.Widget.PaddingTopBottom) + "px", width: (a - PYOP.Widget.PaddingLeftRight) + "px"}
    };
    this.applyInnerErrorContainerStyle = function () {
        angular.element(".widget-browser-unsupported .box-container").css(PYOP.Widget.innerErrorContainerStyle(PYOP.Widget.innerHeight, PYOP.Widget.innerWidth))
    };
    this.showGeneralErrorMessage = function () {
        if (angular.element(".widget-browser-unsupported .upgrade").is(":hidden")) {
            angular.element(".widget-browser-unsupported").show();
            angular.element(".widget-browser-unsupported .general").show();
            angular.element(".widget-browser-unsupported .upgrade").hide();
            angular.element(".widget-inner-section").hide();
            angular.element(".pagination-container").hide()
        }
    };
    this.showCookieErrorMessage = function () {
        if (angular.element(".widget-browser-unsupported .upgrade").is(":hidden")) {
            angular.element(".widget-browser-unsupported").show();
            angular.element(".widget-browser-unsupported .cookie").show();
            angular.element(".widget-browser-unsupported .upgrade").hide();
            angular.element(".widget-browser-unsupported .general").hide();
            angular.element(".widget-inner-section").hide();
            angular.element(".pagination-container").hide()
        }
    }
});
var SpaWidget = SpaWidget || {};
SpaWidget.Utils = SpaWidget.Utils || {};
SpaWidget.Utils.appendSizeCodeToImageUrl = function (a, c) {
    var d = a.substring(a.lastIndexOf("."));
    var b = a.substring(0, a.lastIndexOf("."));
    return b + c + d
};
var application = angular.module("widget", ["ngCookies"]).filter("startFrom",function () {
    return function (a, b) {
        b = +b;
        if (a instanceof Array) {
            return a.slice(b)
        }
    }
}).filter("truncateAddressName",function () {
    return function (a) {
        if (a === "" || typeof a === "undefined" || a === null) {
            return""
        } else {
            names = a.split(" ");
            if (names.length === 1) {
                return names[0]
            } else {
                return names[0] + " " + names[1].substring(0, 1) + "."
            }
        }
    }
}).provider("$exceptionHandler", {$get: ["errorLogService", function (a) {
    return a
}]}).factory("errorLogService", ["$log", function (b) {
    function a(c, d) {
        b.error.apply(b, arguments);
        PYOP.Widget.applyInnerErrorContainerStyle();
        PYOP.Widget.showGeneralErrorMessage()
    }

    return a
}]).constant("READ", "Read").constant("SMARTPHONE_COLLAPSIBLE", "smartphoneCollapsible").constant("INVALID_WIDGET_SIZE_CODE", "InvalidWidgetSize").constant("INVALID_WIDGET_SIZE_DESCRIPTION", "The widget container size is not in min/max range allowed or invalid").constant("WIDGET_SIZE", {WALLET_MIN_WIDTH_EDIT: 260, WALLET_MIN_HEIGHT_EDIT: 226, ADDRESS_MIN_WIDTH_EDIT: 260, ADDRESS_MIN_HEIGHT_EDIT: 226, WALLET_MIN_WIDTH_READ: 260, WALLET_MIN_HEIGHT_READ: 185, ADDRESS_MIN_WIDTH_READ: 260, ADDRESS_MIN_HEIGHT_READ: 185}).constant("WIDGET_TYPE", {WALLET: "WALLET", ADDRESS: "ADDRESS"}).factory("checkWidgetSizeService", ["READ", "WIDGET_SIZE", "WIDGET_TYPE", "INVALID_WIDGET_SIZE_CODE", "INVALID_WIDGET_SIZE_DESCRIPTION", function (b, f, a, c, e) {
    var d = {};
    d.validateSize = function (j, h, g, i) {
        validateSizeState = true;
        if (j === a.WALLET && h !== b) {
            if ((g < f.WALLET_MIN_WIDTH_EDIT) || (i < f.WALLET_MIN_HEIGHT_EDIT)) {
                validateSizeState = false
            }
        } else {
            if (j === a.WALLET && h === b) {
                if ((g < f.WALLET_MIN_WIDTH_READ) || (i < f.WALLET_MIN_HEIGHT_READ)) {
                    validateSizeState = false
                }
            } else {
                if (j === a.ADDRESS && h !== b) {
                    if ((g < f.ADDRESS_MIN_WIDTH_EDIT) || (i < f.ADDRESS_MIN_HEIGHT_EDIT)) {
                        validateSizeState = false
                    }
                } else {
                    if (j === a.ADDRESS && h === b) {
                        if ((g < f.ADDRESS_MIN_WIDTH_READ) || (i < f.ADDRESS_MIN_HEIGHT_READ)) {
                            validateSizeState = false
                        }
                    }
                }
            }
        }
        if (validateSizeState === false) {
            CBA.Checkout.widgetSendErrMsg(c, e, commonWidgetParams.widgetId, commonWidgetParams.referringURL)
        }
    };
    return d
}]).factory("errorService", ["$location", "$cookies", "$cookieStore", function (d, a, c) {
    var b = {};
    b.handleError = function (e) {
        if ((e.errorCode[0] === "AddressNotSelected") || (e.errorCode[0] === "BuyerRegionMissMatch")) {
            d.path("/warning")
        } else {
            if (e.errorCode[0] === "BuyerCredentialMissing") {
                d.path("/warning");
                if (typeof a["session-id"] === "undefined") {
                    PYOP.Widget.showCookieErrorMessage()
                }
            } else {
                d.path("/error")
            }
        }
        if (e.merchantCallbackMode === "true") {
            CBA.Checkout.widgetSendErrMsg(e.merchantErrorCode, e.merchantErrorMessage, e.widgetId, e.merchantPageUrl)
        }
        return e.content[0]
    };
    return b
}]).factory("locationService", ["$location", "READ", "SMARTPHONE_COLLAPSIBLE", function (b, a, c) {
    var d = {};
    d.changeAndReplace = function (e) {
        b.path(e);
        b.replace()
    };
    d.routeFromResponse = function (e) {
        if ((e.length === 0) && (commonWidgetParams.widgetDesignMode === c)) {
            d.changeAndReplace("/empty-collapsible")
        } else {
            if ((e.length === 0) && (commonWidgetParams.displayMode !== a)) {
                d.changeAndReplace("/empty")
            } else {
                if ((e.length === 0) && (commonWidgetParams.displayMode === a)) {
                    d.changeAndReplace("/empty-read-only")
                } else {
                    if (commonWidgetParams.widgetDesignMode === c) {
                        d.changeAndReplace("/list-collapsible")
                    } else {
                        if (commonWidgetParams.displayMode === a && e[0].selected !== true) {
                            d.changeAndReplace("/empty-read-only")
                        } else {
                            if (commonWidgetParams.displayMode === a) {
                                d.changeAndReplace("/read-only")
                            }
                        }
                    }
                }
            }
        }
    };
    return d
}]).factory("paginationService",function () {
    var b = {};
    var a = [];
    b.setResource = function (c) {
        a = c
    };
    b.numPagesWithAddButton = function (c) {
        return Math.ceil((a.length + 1) / c)
    };
    b.numItems = function () {
        return a.length
    };
    b.numPages = function (c) {
        return Math.ceil(a.length / c)
    };
    return b
}).config(["$routeProvider", function (a) {
    a.when("/list", {templateUrl: "list"}).when("/list-collapsible", {templateUrl: "list"}).when("/error", {templateUrl: "error"}).when("/warning", {templateUrl: "warning"}).when("/empty", {templateUrl: "empty"}).when("/empty-collapsible", {templateUrl: "empty-collapsible"}).when("/read-only", {templateUrl: "read-only"}).when("/empty-read-only", {templateUrl: "empty-read-only"})
}]).controller("mainCtrl", ["$scope", "$rootScope", "$window", "$location", "paginationService", "READ", "SMARTPHONE_COLLAPSIBLE", "checkWidgetSizeService", "WIDGET_TYPE", function (k, h, b, d, e, a, f, j, c) {
    k.widgetLoading = true;
    k.disableWidget = true;
    h.showLoading = false;
    h.isExpanded = false;
    k.svaPopup = false;
    k.checkWidgetSizeState = false;
    if (!(typeof(commonWidgetParams) === "undefined")) {
        if (commonWidgetParams.contractId !== "") {
            CBA.Checkout.sendMsg(false, "pcId=" + commonWidgetParams.contractId, commonWidgetParams.referringURL)
        }
        k.smartphoneCollapsible = (commonWidgetParams.widgetDesignMode === f)
    }
    k.currentPage = 0;
    var i = angular.element(b);
    k.version = "1.0.0";
    k.windowWidth = 0;
    k.windowHeight = 0;
    var g = function () {
        k.windowWidth = i.width();
        k.windowHeight = i.height();
        k.column = 1;
        if (k.windowWidth >= 398) {
            k.column = 2
        }
        k.pageSize = Math.floor((k.windowHeight - 150) / 38) * k.column;
        k.errorHeight = function () {
            return{height: (k.windowHeight - 100) + "px", width: (k.windowWidth - 43) + "px"}
        }
    };
    k.safeApply = function (m) {
        var l = this.$root.$$phase;
        if (l == "$apply" || l == "$digest") {
            if (m && (typeof(m) === "function")) {
                m()
            }
        } else {
            this.$apply(m)
        }
    };
    i.bind("resize", function () {
        k.safeApply(function () {
            g()
        })
    });
    g();
    k.checkWidgetSize = function () {
        if (typeof(paymentListResponse) !== "undefined") {
            j.validateSize(c.WALLET, commonWidgetParams.displayMode, k.windowWidth, k.windowHeight)
        } else {
            if (typeof(addressListResponse) !== "undefined") {
                j.validateSize(c.ADDRESS, commonWidgetParams.displayMode, k.windowWidth, k.windowHeight)
            }
        }
    };
    k.checkCurrentPageSizeLimitOnResize = function (n, l, m) {
        if (((n + 1) * l) > m) {
            n = Math.floor(m / l);
            if ((m % l) === 0) {
                n = n - 1
            }
        }
        return n
    };
    k.pageNumber = function () {
        return k.currentPage = k.checkCurrentPageSizeLimitOnResize(k.currentPage, k.pageSize, k.numItems())
    };
    k.showPaginationButton = function () {
        if (d.path() === "/list" || d.path() === "/list-collapsible") {
            if (k.numPages() > 1) {
                return true
            }
        }
        return false
    };
    k.showPaginationInfo = function () {
        return k.showPaginationButton()
    };
    k.showAllItemsText = function () {
        if (k.numPages() === 1) {
            if ((commonWidgetParams.displayMode !== a) && (!k.showPaginationButton() || (k.numItems()) < k.pageSize)) {
                if (k.smartphoneCollapsible === true) {
                    return h.isExpanded
                } else {
                    return true
                }
            }
        }
        return false
    };
    k.showAddItemLink = function () {
        if (typeof(commonWidgetParams) !== "undefined") {
            return(commonWidgetParams.displayMode !== a) && ((k.showPaginationButton() === true) || (k.numItems() === k.pageSize))
        }
        return false
    };
    k.hideFooter = function () {
        return(d.path() !== "/list") || (k.numPagesWithAddButton() > 1)
    };
    k.numPagesWithAddButton = function () {
        return e.numPagesWithAddButton(k.pageSize)
    };
    k.numItems = function () {
        return e.numItems()
    };
    k.numPages = function () {
        return e.numPages(k.pageSize)
    };
    k.prevPage = function () {
        if (k.currentPage > 0) {
            k.currentPage = k.currentPage - 1
        }
    };
    k.nextPage = function () {
        if (k.currentPage < k.numPages() - 1) {
            k.currentPage = k.currentPage + 1
        }
    };
    k.privacyPolicy = function (l) {
        CBA.Checkout.openPopupPrivacyPolicy(l)
    };
    k.toggleCollapsible = function (l) {
        if (k.smartphoneCollapsible) {
            if (h.isExpanded === false) {
                if (l !== "updateNonCollapsible") {
                    CBA.Checkout.widgetSendMsg("changeHeight;265", commonWidgetParams.widgetId, commonWidgetParams.referringURL)
                } else {
                    return false
                }
            } else {
                CBA.Checkout.widgetSendMsg("changeHeight;135", commonWidgetParams.widgetId, commonWidgetParams.referringURL)
            }
            h.isExpanded = !h.isExpanded
        }
    };
    k.openSVAPopup = function (l) {
        k.svaPopup = true;
        if (l.stopPropagation) {
            l.stopPropagation()
        }
        if (l.preventDefault) {
            l.preventDefault()
        }
        l.cancelBubble = true;
        l.returnValue = false
    };
    k.closeSVAPopup = function () {
        k.svaPopup = false
    }
}]).controller("addressCtrl", ["$scope", "$http", "$rootScope", "locationService", "paginationService", "errorService", function (b, f, a, e, d, c) {
    e.changeAndReplace("/list");
    if ((typeof(commonWidgetParams) === "undefined") && (typeof errorDetails === "undefined")) {
        b.widgetLoading = false;
        b.error = c.handleError(genericError.data)
    } else {
        if (typeof errorDetails === "undefined") {
            b.disableWidget = false;
            if (addressListResponse.data.status === "success") {
                b.addresses = addressListResponse.data.content.addresses;
                e.routeFromResponse(b.addresses);
                if (b.addresses.length > 0) {
                    if (b.addresses[0].isValid !== false) {
                        CBA.Checkout.widgetSendMsg("addressselect", commonWidgetParams.widgetId, commonWidgetParams.referringURL)
                    }
                    b.selectedAddress = b.addresses[0];
                    d.setResource(b.addresses)
                }
            } else {
                b.error = c.handleError(addressListResponse.data)
            }
            b.widgetLoading = false
        } else {
            b.widgetLoading = false;
            b.error = c.handleError(errorDetails.data)
        }
    }
    b.hasAddress = function () {
        return b.addresses.length > 0
    };
    b.addressButtonClickHandler = function (g) {
        if (g.isValid) {
            b.setSelectedAddress(g)
        } else {
            b.editAddress(g)
        }
    };
    b.setSelectedAddress = function (g) {
        if (g.addressId === b.selectedAddress.addressId) {
            if (b.smartphoneCollapsible === true) {
                b.toggleCollapsible()
            }
            return false
        }
        a.showLoading = true;
        setShippingAddressParams.selectedShipToAddressId = b.selectedAddress.addressId;
        setShippingAddressParams.newShipToAddressId = g.addressId;
        CBA.Checkout.widgetSendMsg("addressselectpre", commonWidgetParams.widgetId, commonWidgetParams.referringURL);
        f.post("/gp/widgets/widgets", $.param(setShippingAddressParams), {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).success(function (h) {
            if (h.data.status === "success") {
                b.selectedAddress = g;
                if (b.smartphoneCollapsible === true) {
                    b.toggleCollapsible()
                }
                CBA.Checkout.widgetSendMsg("addressselect", commonWidgetParams.widgetId, commonWidgetParams.referringURL)
            } else {
                b.error = c.handleError(h.data)
            }
            a.showLoading = false
        })
    };
    b.editAddress = function (g) {
        b.toggleCollapsible();
        if (commonWidgetParams.deviceType === "Mobile") {
            CBA.Checkout.appendInputToForm("#editShippingAddressMobileForm", "newShipToAddressId", g.addressId);
            CBA.Checkout.submitWithCommonFieldsUsingWindow("#editShippingAddressMobileForm", commonWidgetParams.cartOwnerId)
        } else {
            CBA.Checkout.appendInputToForm("#editShippingAddressForm", "newShipToAddressId", g.addressId);
            CBA.Checkout.submitWithCommonFieldsUsingPopup("#editShippingAddressForm", commonWidgetParams.cartOwnerId)
        }
    };
    b.isSelected = function (g) {
        return b.selectedAddress.addressId === g
    };
    b.addNewAddressAndToggleCollapsible = function () {
        b.toggleCollapsible();
        b.addNewAddress()
    };
    b.addNewAddress = function () {
        if (commonWidgetParams.deviceType === "Mobile") {
            if (commonWidgetParams.isSandbox === "true") {
                CBA.Checkout.submitWithCommonFieldsUsingWindow("#addShippingAddressForm", commonWidgetParams.cartOwnerId)
            } else {
                CBA.Checkout.submitWithCommonFieldsUsingWindow("#AddShippingAddressAddPaymentMethodSelectAndAddBillingAddress", commonWidgetParams.cartOwnerId)
            }
        } else {
            CBA.Checkout.submitWithCommonFieldsUsingPopup("#addShippingAddressForm", commonWidgetParams.cartOwnerId)
        }
    }
}]).controller("walletCtrl", ["$scope", "$http", "$rootScope", "locationService", "errorService", "paginationService", "$http", function (b, f, a, e, d, c) {
    b.showSvaBalance = false;
    b.svaBalance = "$0";
    b.useSva = false;
    e.changeAndReplace("/list");
    b.isValid = function (g) {
        return((g.isExpired === false) && (g.isBillingAddressPresent === true) && (g.isDeclined === false) && (g.isSuppressedAmex !== true) && (g.isDisabled === false))
    };
    b.isAmazonPLCC = function (g) {
        return g.paymentCardType === "AMAZONPLCC"
    };
    b.openASCInfoPopup = function () {
        window.open("http://www.amazon.com/gp/cobrandcard/marketing.html?ie=UTF8&inc=9018&place=slpp&plattr=NOPP0001&pop-up=1&pr=conplcc&ref=ox_pay_page_storecard_help", "Amazon_Store_Card_Info_Page", "location=no,scrollbars=1,left=50,top=50")
    };
    b.isIE8 = function () {
        var g = navigator.userAgent.toLowerCase();
        return(g.indexOf("msie") !== -1) && parseInt(g.split("msie")[1]) === 8
    };
    b.applySuppressionCasesToPaymentMethods = function (g) {
        if (g.suppressAmex) {
            for (var h = g.paymentMethods.length - 1; h > -1; h--) {
                if (g.paymentMethods[h].paymentCardType === "AMERICANEXPRESS" || g.paymentMethods[h].paymentCardType === "AMEX") {
                    g.paymentMethods[h].isSuppressedAmex = true
                }
            }
        }
        return g.paymentMethods
    };
    if ((typeof(commonWidgetParams) === "undefined") && (typeof errorDetails === "undefined")) {
        b.widgetLoading = false;
        b.error = d.handleError(genericError.data)
    } else {
        if (typeof errorDetails === "undefined") {
            b.disableWidget = false;
            if (paymentListResponse.data.status === "success") {
                b.paymentMethods = b.applySuppressionCasesToPaymentMethods(paymentListResponse.data.content);
                e.routeFromResponse(b.paymentMethods);
                if (paymentListResponse.data.content.svaBalance) {
                    b.showSvaBalance = true;
                    b.svaBalance = paymentListResponse.data.content.svaBalance;
                    b.useSva = setPaymentMethodParams.isAPASelected
                }
                if (b.paymentMethods.length > 0) {
                    if (b.isValid(b.paymentMethods[0]) === true) {
                        CBA.Checkout.widgetSendMsg("paymentselect", commonWidgetParams.widgetId, commonWidgetParams.referringURL)
                    }
                    b.selectedPaymentMethod = b.paymentMethods[0];
                    c.setResource(b.paymentMethods)
                }
            } else {
                b.error = d.handleError(paymentListResponse.data)
            }
            b.widgetLoading = false
        } else {
            b.widgetLoading = false;
            b.error = d.handleError(errorDetails.data)
        }
    }
    b.hasPaymentMethods = function () {
        return b.paymentMethods.length > 0
    };
    b.paymentButtonClickHandler = function (g) {
        if (b.isValid(g)) {
            b.setSelectedPaymentMethod(g)
        } else {
            if (g.isDisabled === false && g.isSuppressedAmex !== true) {
                b.editPaymentMethod(g)
            }
        }
    };
    b.toggleUseSva = function () {
        b.useSva = !b.useSva;
        setPaymentMethodParams.isAPASelected = b.useSva;
        b.setSelectedPaymentMethod(b.selectedPaymentMethod, false)
    };
    b.setSelectedPaymentMethod = function (g, h) {
        if (g.isSuppressedAmex) {
            return false
        }
        if (g.paymentInstrumentId === b.selectedPaymentMethod.paymentInstrumentId && h !== false) {
            if (b.smartphoneCollapsible === true) {
                b.toggleCollapsible()
            }
            return false
        }
        a.showLoading = true;
        setPaymentMethodParams.selectedCCInstrumentId = b.selectedPaymentMethod.paymentInstrumentId;
        setPaymentMethodParams.newCCInstrumentId = g.paymentInstrumentId;
        f.post("/gp/widgets/widgets", $.param(setPaymentMethodParams), {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).success(function (i) {
            if (i.data.status === "success") {
                b.selectedPaymentMethod = g;
                b.useSva = setPaymentMethodParams.isAPASelected;
                if (b.smartphoneCollapsible === true) {
                    b.toggleCollapsible("updateNonCollapsible")
                }
                CBA.Checkout.widgetSendMsg("paymentselect", commonWidgetParams.widgetId, commonWidgetParams.referringURL)
            } else {
                b.error = d.handleError(i.data)
            }
            a.showLoading = false
        })
    };
    b.isUpdateAction = function (g) {
        if (typeof(g) !== "undefined") {
            if (g.paymentCardType === "BANKACCOUNT" || g.paymentCardType === "AMERICANEXPRESS" || g.paymentCardType === "AMEX") {
                b.addNewPaymentMethod()
            } else {
                b.editPaymentMethod(g)
            }
        }
    };
    b.editPaymentMethod = function (g) {
        b.toggleCollapsible("updateNonCollapsible");
        CBA.Checkout.appendInputToForm("#EditCreditCardForm", "selectedCCInstrumentId", g.paymentInstrumentId);
        CBA.Checkout.appendInputToForm("#EditCreditCardForm", "isBillingAddressValid", g.isBillingAddressPresent);
        if (commonWidgetParams.deviceType === "Mobile") {
            CBA.Checkout.submitWithCommonFieldsUsingWindow("#EditCreditCardForm", commonWidgetParams.cartOwnerId)
        } else {
            CBA.Checkout.submitWithCommonFieldsUsingPopup("#EditCreditCardForm", commonWidgetParams.cartOwnerId)
        }
    };
    b.addNewPaymentMethodAndToggleCollapsible = function () {
        b.toggleCollapsible();
        b.addNewPaymentMethod()
    };
    b.addNewPaymentMethod = function () {
        if (commonWidgetParams.deviceType === "Mobile") {
            CBA.Checkout.submitWithCommonFieldsUsingWindow("#AddPaymentMethodForm", commonWidgetParams.cartOwnerId)
        } else {
            CBA.Checkout.submitWithCommonFieldsUsingPopup("#AddPaymentMethodForm", commonWidgetParams.cartOwnerId)
        }
    };
    b.isSelected = function (g) {
        return b.selectedPaymentMethod.paymentInstrumentId == g && b.isValid(b.selectedPaymentMethod)
    };
    b.isUpdateText = function (h, j) {
        var g = {statusTextMap: statusTextTranslations, infoTextMap: infoTextTranslations, buttonTextMap: buttonStatusTextTranslations};
        var i = g[j];
        if ((h.isSuppressedAmex === true)) {
            return i.isSuppressedAmex
        } else {
            if (h.isDeclined) {
                if ((h.isExpired === true) && (h.isBillingAddressPresent === false)) {
                    return i.isDeclinedMissingBillingAddressAndExpired
                } else {
                    if (h.isExpired === true) {
                        return i.isDeclinedExpired
                    } else {
                        if (h.isBillingAddressPresent === false) {
                            return i.isDeclinedMissingBillingAddress
                        }
                    }
                }
                return i.isDeclinedDeclined
            } else {
                if ((h.isDisabled === true)) {
                    return i.isDisabled
                } else {
                    if ((h.isExpired === true) && (h.isBillingAddressPresent === false)) {
                        return i.isExpiredAndMissingBillingAddress
                    } else {
                        if (h.isExpired === true) {
                            return i.isExpired
                        } else {
                            if (h.isBillingAddressPresent === false) {
                                return i.isMissingBillingAddress
                            }
                        }
                    }
                }
            }
        }
    }
}]).directive("pmtMethodViewSelected",function () {
    var b = "_SR34,21_";

    function a(d, f, e) {
        d.$watch("pmtMethod", function (h, g) {
            c(h, g, f)
        })
    }

    function c(e, d, f) {
        f.removeClass("ATMRAILS-left " + d.paymentCardType + "-left");
        if (angular.isString(e.issuerDisplayImageUrl)) {
            f.addClass("ATMRAILS-left");
            f.css({"background-image": "url(" + SpaWidget.Utils.appendSizeCodeToImageUrl(e.issuerDisplayImageUrl, b) + ")"})
        } else {
            f.removeAttr("style");
            f.addClass(e.paymentCardType + "-left")
        }
    }

    return{restrict: "A", scope: {pmtMethod: "=", isUpdateText: "="}, link: a, templateUrl: "pmt-method-selected"}
}).directive("pmtMethodViewButton", function () {
    var a = "_SR34,21_";

    function b(c, e, d) {
        if (angular.isString(c.pmtMethod.issuerDisplayImageUrl)) {
            e.addClass("ATMRAILS");
            e.css({"background-image": "url(" + SpaWidget.Utils.appendSizeCodeToImageUrl(c.pmtMethod.issuerDisplayImageUrl, a) + ")"})
        } else {
            e.addClass(c.pmtMethod.paymentCardType)
        }
    }

    return{restrict: "A", scope: {pmtMethod: "=", isUpdateText: "="}, link: b, templateUrl: "pmt-method-button"}
});