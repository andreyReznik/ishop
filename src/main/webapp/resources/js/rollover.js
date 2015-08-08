/*

 buySAFE Rollover Core
 Copyright 2015, buySAFE, Inc.
 $Revision: 1.107 $

 SWFObject v1.4.4/1.5: Flash Player detection and embed - blog.deconcept.com/swfobject/
 SWFObject is (c) 2006/2007 Geoff Stearns

 */
var bs_R = window.bs_R || {}, buySAFE = window.buySAFE || {}, _GUARANTEE = window._GUARANTEE || buySAFE;
(function (a, b) {
    if (!a.sRoot) {
        a.sRootHost = "https://seal.buysafe.com";
        a.sRoot = a.sRootHost + "/private/rollover/";
        for (var d = document.getElementsByTagName("script"), c = 0; c < d.length; c++) {
            var e = d[c].src.substr(0, 100);
            if (e = e.match(/((.*)\/private\/.*\/)rollover(?:\.unpacked)?\.js/i) || e.match(/()(.*)\/Web\/Seal\/gjs.aspx/i)) {
                a.sRootHost = e[2];
                a.sRoot = e[1] || a.sRootHost + "/private/rollover/";
                break
            }
        }
    }
    a.aExecQ = a.aExecQ || [];
    a.onEvent = function (a, b, c) {
        if (a) {
            var d = a.addEventListener;
            a = a.attachEvent;
            d ? d(b, c, !1) : a && a("on" +
                b, c)
        }
    };
    a.onLoad = function (b, c) {
        if (a.fOnLoad || c)b && b(); else a.onEvent(window, "load", b)
    };
    a.AddJS = function (a, b) {
        var c = document.createElement("script");
        c.type = "text/javascript";
        c.async = !0;
        c.src = a;
        window.setTimeout(function () {
            var a = document.getElementsByTagName("script")[0];
            a && a.parentNode && a.parentNode.insertBefore(c, a)
        }, b || 0)
    };
    b.Loaded || (b.Hash || (b.Hash = ""), b.Guarantee || (b.Guarantee = {order: "", total: "", email: ""}), b.Seal || (b.Seal = {bgcolor: "#FFFFFF"}), b.Button || (b.Button = {bgcolor: "#FFFFFF"}), b.Loaded = 1)
})(bs_R,
        buySAFE);
var buySAFESealConfig = buySAFE.Seal, buySAFEButtonConfig = buySAFE.Button;
bs_R._gel = function (a) {
    return document.getElementById(a)
};
bs_R._geln = function (a) {
    return document.getElementsByName(a)
};
bs_R._gelt = function (a) {
    return document.getElementsByTagName(a)
};
bs_R._cel = function (a) {
    return document.createElement(a)
};
bs_R._efp = function (a, b) {
    return document.elementFromPoint(a, b)
};
bs_R._en = encodeURIComponent;
bs_R._l = document.location;
bs_R._st = function (a, b) {
    return window.setTimeout(a, b)
};
if (!window.SWFObject) {
    if ("undefined" == typeof deconcept)var deconcept = {};
    "undefined" == typeof deconcept.util && (deconcept.util = {});
    "undefined" == typeof deconcept.SWFObjectUtil && (deconcept.SWFObjectUtil = {});
    deconcept.SWFObject = function (a, b, d, c, e, f, g, h, k, l, m) {
        bs_R._gel && (this.DETECT_KEY = m ? m : "detectflash", this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY), this.params = {}, this.variables = {}, this.attributes = [], a && this.setAttribute("swf", a), b && this.setAttribute("id", b), d && this.setAttribute("width",
            d), c && this.setAttribute("height", c), e && this.setAttribute("version", new deconcept.PlayerVersion(e.toString().split("."))), this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion(), !window.opera && document.all && 7 < this.installedVer.major && !deconcept.unloadSet && (bs_R.onEvent(window, "beforeunload", deconcept.SWFObjectUtil.prepUnload), deconcept.unloadSet = !0), f && this.addParam("bgcolor", f), this.addParam("quality", h ? h : "high"), this.setAttribute("useExpressInstall", g), this.setAttribute("doExpressInstall", !1),
            this.setAttribute("xiRedirectUrl", k ? k : window.location), this.setAttribute("redirectUrl", ""), l && this.setAttribute("redirectUrl", l))
    };
    deconcept.SWFObject.prototype = {setAttribute: function (a, b) {
        this.attributes[a] = b
    }, getAttribute: function (a) {
        return this.attributes[a]
    }, addParam: function (a, b) {
        this.params[a] = b
    }, getParams: function () {
        return this.params
    }, addVariable: function (a, b) {
        this.variables[a] = b
    }, getVariable: function (a) {
        return this.variables[a]
    }, getVariables: function () {
        return this.variables
    }, getVariablePairs: function () {
        var a =
            [], b, d = this.getVariables();
        for (b in d)a.push(b + "=" + d[b]);
        return a
    }, getSWFHTML: function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
            this.getAttribute("doExpressInstall") && this.addVariable("MMplayerType", "PlugIn");
            var a = '<embed type="application/x-shockwave-flash" src="' + this.getAttribute("swf") + '" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '"', a = a + (' id="' + this.getAttribute("id") + '" name="' + this.getAttribute("id") + '" '), b = this.getParams(),
                d;
            for (d in b)a += [d] + '="' + b[d] + '" ';
            b = this.getVariablePairs().join("&");
            0 < b.length && (a += 'flashvars="' + b + '"');
            a += "/>"
        } else {
            this.getAttribute("doExpressInstall") && this.addVariable("MMplayerType", "ActiveX");
            a = '<object id="' + this.getAttribute("id") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '">';
            a += '<param name="movie" value="' + this.getAttribute("swf") + '" />';
            b = this.getParams();
            for (d in b)a += '<param name="' + d + '" value="' +
                b[d] + '" />';
            b = this.getVariablePairs().join("&");
            0 < b.length && (a += '<param name="flashvars" value="' + b + '" />');
            a += "</object>"
        }
        return a
    }, write: function (a) {
        if (this.getAttribute("useExpressInstall")) {
            var b = new deconcept.PlayerVersion([6, 0, 65]);
            this.installedVer.versionIsValid(b) && !this.installedVer.versionIsValid(this.getAttribute("version")) && (this.setAttribute("doExpressInstall", !0), this.addVariable("MMredirectURL", escape(this.getAttribute("xiRedirectUrl"))), document.title = document.title.slice(0, 47) +
                " - Flash Player Installation", this.addVariable("MMdoctitle", document.title))
        }
        if (this.skipDetect || this.getAttribute("doExpressInstall") || this.installedVer.versionIsValid(this.getAttribute("version")))return("string" == typeof a ? bs_R._gel(a) : a).innerHTML = this.getSWFHTML(), !0;
        "" != this.getAttribute("redirectUrl") && bs_R._l.replace(this.getAttribute("redirectUrl"));
        return!1
    }};
    deconcept.SWFObjectUtil.getPlayerVersion = function () {
        var a = new deconcept.PlayerVersion([0, 0, 0]);
        if (navigator.plugins && navigator.mimeTypes.length) {
            var b =
                navigator.plugins["Shockwave Flash"];
            b && b.description && (a = new deconcept.PlayerVersion(b.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split(".")))
        } else {
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
            } catch (d) {
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), a = new deconcept.PlayerVersion([6, 0, 21]), b.AllowScriptAccess = "always"
                } catch (c) {
                    if (6 == a.major)return a
                }
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (e) {
                }
            }
            null != b && (a = new deconcept.PlayerVersion(b.GetVariable("$version").split(" ")[1].split(",")))
        }
        return a
    };
    deconcept.PlayerVersion = function (a) {
        this.major = null != a[0] ? parseInt(a[0]) : 0;
        this.minor = null != a[1] ? parseInt(a[1]) : 0;
        this.rev = null != a[2] ? parseInt(a[2]) : 0
    };
    deconcept.PlayerVersion.prototype.versionIsValid = function (a) {
        return this.major < a.major ? !1 : this.major > a.major ? !0 : this.minor < a.minor ? !1 : this.minor > a.minor ? !0 : this.rev < a.rev ? !1 : !0
    };
    deconcept.util = {getRequestParameter: function (a) {
        var b = bs_R._l.search || bs_R._l.hash;
        if (b)for (var b = b.substring(1).split("&"), d = 0; d < b.length; d++)if (b[d].substring(0, b[d].indexOf("=")) ==
            a)return b[d].substring(b[d].indexOf("=") + 1);
        return""
    }};
    deconcept.SWFObjectUtil.cleanupSWFs = function () {
        for (var a = bs_R._gelt("OBJECT"), b = a.length - 1; 0 <= b; b--) {
            a[b].style.display = "none";
            for (var d in a[b])"function" == typeof a[b][d] && (a[b][d] = function () {
            })
        }
    };
    deconcept.SWFObjectUtil.prepUnload = function () {
        __flash_unloadHandler = function () {
        };
        __flash_savedUnloadHandler = function () {
        };
        bs_R.onEvent(window, "unload", deconcept.SWFObjectUtil.cleanupSWFs)
    };
    null == Array.prototype.push && (Array.prototype.push = function (a) {
        this[this.length] =
            a;
        return this.length
    });
    var getQueryParamValue = deconcept.util.getRequestParameter, FlashObject = deconcept.SWFObject, SWFObject = deconcept.SWFObject
}
(function (a, b) {
    a._ctx = function (b) {
        b.oncontextmenu = function () {
            return!1
        };
        b.setAttribute(a.sNoPin, !0)
    };
    a.Trim = function (a) {
        return String(a).replace(/^\s+|\s+$/g, "")
    };
    a.Hash = function () {
        return a.Trim(b.Hash)
    };
    a.warn = a.log = function (b, c) {
        window.console && console.log && b && (b.unshift(((new Date - a.T0) / 1E3).toFixed(3)), console.exception || (b = b.join(c || ",")), console.log(b))
    };
    a.err = function (b, c) {
        c && (b += ": " + c.message);
        a._st(function () {
            throw Error("Guarantee: " + b);
        }, 0)
    };
    a.trc = function (b) {
        a.AltSealInfo("bs_R.trcFn",
            b.src, b.name, a.Hash(), "", "Large", "", {src: b.src, name: b.name})
    };
    a.trcFn = function () {
    };
    a.GetXml = function (a) {
        var b;
        window.DOMParser ? b = (new DOMParser).parseFromString(a, "text/xml") : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a));
        return b
    };
    a.isUndef = function (a, b) {
        return"undefined" == typeof a ? b : a
    };
    a.Bool = function (a) {
        return a && "true" == a.toLowerCase()
    };
    a.GetCookieRaw = function (a) {
        for (var b = document.cookie.split("; "), e = 0; e < b.length; e++) {
            var f = b[e].indexOf("="), g = b[e].substring(0, f), f = b[e].substring(f +
                1);
            if (a == g)return f
        }
        return null
    };
    a.GetCookie = function (b) {
        return(b = a.GetCookieRaw(b)) ? unescape(b) : b
    }
})(bs_R, buySAFE);
function buysafe_set_cookie(a, b, d, c, e, f) {
    a = a + "=" + escape(b);
    d && (b = new Date, b.setTime(b.getTime() + 864E5 * d), a += "; expires=" + b.toGMTString());
    c && (a += "; path=" + escape(c));
    e && (a += "; domain=" + escape(e));
    f && (a += "; secure");
    document.cookie = a
}
bs_R.AddBody = function (a) {
    var b = document.body;
    b && (b = b.firstChild) && b.parentNode.insertBefore(a, b)
};
bs_R.BottomSpacer = function (a) {
    bs_R.onLoad(function () {
        var b = bs_R._gel("buySAFE Spacer") || bs_R._cel("div");
        b.id = "buySAFE Spacer";
        a > b.offsetHeight && (b.style.height = a + "px");
        document.body.appendChild(b)
    })
};
bs_R.SetTopMost = function (a, b) {
    b = b || 0;
    if (a && !buySAFE.NoOnTop && a.getBoundingClientRect) {
        var d = a.style, c = function (a) {
            return Number(bs_R.GetStyle(a, "zIndex")) || 0
        }, e = function (a) {
            if (a && !String(a.id).match(/^buysafe|bsg_iframe/i)) {
                var b = a.parentNode;
                b && b.style && (a = (b = e(b)) && c(b) >= c(a) ? b : a);
                return a
            }
        }, f = function (b) {
            if (b) {
                var e = c(b), f = c(a);
                e >= d.zIndex && (d.zIndex = bs_R.nZIndex = e + 1, c(a) == e && (f < e ? d.zIndex = bs_R.nZIndex = 10 * e : b.style.zIndex = e - 1));
                return b
            }
        }, g = a.getBoundingClientRect(), h = bs_R.oDocElem, k = Math.max(g.top,
            0), l = Math.min(g.right, h.clientWidth) - 1, h = Math.min(g.bottom, h.clientHeight) - 1, g = Math.max(g.left, 0);
        f(e(bs_R._efp(g, k)));
        f(e(bs_R._efp(l, k)));
        f(e(bs_R._efp(g, h)));
        f(e(bs_R._efp(l, h)));
        f(e(bs_R._efp(parseInt((g + l) / 2), parseInt((k + h) / 2))));
        10 > b && bs_R._st(function () {
            bs_R.SetTopMost(a, ++b)
        }, 1E3)
    }
};
bs_R.getDevicePrint = function (a) {
    a = a || {};
    var b = buySAFE, d = b.setIpDefinition;
    b.Variation && (a.sno = b.Variation);
    b.VariationName && (a.snn = b.VariationName.replace(/[;=\s]+/g, " "));
    d && d.tn && (a.tn = d.tn);
    b = bs_R.oBrowser;
    b = "br=" + b.name + ";vr=" + b.version + ";os=" + b.os;
    for (name in a)b += ";" + name + "=" + a[name];
    return bs_R._en(b)
};
bs_R.oBSG = bs_R.oBSG || {aSizeQueue: [], id: "BSG_Iframe", idfix: "BSG_Iframe_Fix"};
bs_R.oBSG.Size = function (a) {
    var b = bs_R.oBSG;
    b.fSizing = 1;
    var d = (new Date).valueOf(), c = b.aSizeQueue[0];
    c.start || (c.start = d, c.end = c.start + c.time, c.orig = parseInt(a.height));
    a.height = c.orig + parseInt((c.target - c.orig) * (d < c.end ? (d - c.start) / c.time : 1)) + "px";
    d >= c.end && (b.aSizeQueue.shift(), bs_R.SetTopMost(b.span));
    b.aSizeQueue.length ? bs_R._st(function () {
        b.Size(a)
    }, 20) : b.fSizing = 0
};
bs_R.oBSG.Queue = function (a) {
    var b = bs_R.oBSG;
    b.timerHide && (clearTimeout(b.timerHide), b.timerHide = null);
    b.oFrame && (b.aSizeQueue.push({target: a, time: 500}), b.fSizing || b.Size(b.oFrame))
};
bs_R.oBSG.Show = function () {
    bs_R.oBSG.Queue(bs_R.oBSG.nHeightShow)
};
bs_R.oBSG.Hide = function () {
    bs_R.oBSG.Queue(bs_R.oBSG.nHeightHide)
};
bs_R.oBSG.Toggle = function () {
    var a = bs_R.oBSG, b = bs_R._gel(a.idIMG), d = a.fClosed;
    b && (b.style.backgroundPosition = "-95px " + (d ? "-25px" : "-40px"), d ? a.Show() : a.Hide(), a.fClosed = !d)
};
bs_R.oBSG.OnLoad = function () {
    var a = bs_R.oBSG;
    a.oFrame = bs_R._gel(a.id);
    a.fnAutoShow();
    a.nAutoHide && a.fnAutoHide && (a.timerHide = bs_R._st(function () {
        a.fnAutoHide()
    }, a.nAutoHide))
};
bs_R.oBSG.WriteResponsive = function (a, b, d) {
    var c = bs_R._gel("bs_iframe_responsive"), e = bs_R._gel("bs_iframe_responsive_close");
    c && (c.src = bs_R.sWeb4 + ("Seal" == a ? "StoreInfo?MPHASH=" + d.MPUHash : "Guarantee?gn=" + bs_R._en(bs_R.oBSG.oRS.GuaranteeNumber) + "&e=" + bs_R._en(bs_R.oBSG.oRS.Email)));
    e && (e.onclick = function () {
        this.style.background = "#5c5c5c";
        bs_R.oRollover[b].fHide = 1;
        buysafeOut(bs_R.sRolloverID, 1)
    })
};
bs_R.oBSG.WriteFrame2 = function (a, b) {
    bs_R.oBSG.oRS = b;
    bs_R.oBSG.WriteFrame(a, b.ContentName)
};
bs_R.oBSG.WriteFrame = function (a, b, d) {
    if (b) {
        var c = bs_R.oBSG, e = buySAFE, f = e.Guarantee, g = f.inline;
        d = d || 0;
        var h = bs_R._gel(bs_R.sBSGID);
        if (f.hidden)(new Image).src = c.url + "&IMAGE=BLANK"; else if ("V3" == e.Version || b.match(/responsive/i)) {
            var f = bs_R.oSealRS, e = bs_R.oRollover.HTML.Responsive, k;
            f.SealDone && f.SealName && e && "pending" != e && (k = bs_R._gel(f.SealName + "_a")) ? g ? h ? (c.span = h, h.innerHTML = '<iframe id="bs_iframe_responsive" src="" style="width:inherit; height:inherit; border:0; overflow:hidden;" frameborder="0" border="0" scrolling="no"></iframe>',
                bs_R.oBSG.WriteResponsive("Guarantee", "Responsive", f)) : bs_R.err("WriteGuarantee: Can't find element: " + bs_R.sBSGID) : (bs_R.RollAttach([k], "Responsive", "Guarantee"), buysafeOver("Responsive", k, "Guarantee", "", 1)) : 40 > d && setTimeout(function () {
                bs_R.oBSG.WriteFrame(a, b, d + 1)
            }, 500)
        } else if (k = a + "_iFrameFix", h) {
            c.span = h;
            e = h.style;
            h.innerHTML = "";
            var l = bs_R._cel("div");
            l.id = a + "_div";
            var m = l.style;
            m.display = e.display = "block";
            m.visibility = e.visibility = "visible";
            bs_R.fnCSS(m);
            bs_R.fnCSS(e);
            var p = f.minimize, n = g ? "background:none transparent;height:0;width:0;" :
                "background:url('" + bs_R.sRootSealImgBSG + "shadow.png') no-repeat;height:10px;width:10px;", q = g ? 0 : 14, t = "", u = "", r = "", v = "0", w = 0;
            c.fClosed = 1;
            c.idTXT = a + "_TXT";
            c.idIMG = a + "_IMG";
            var s = bs_R.sCSS, r = s + "height:auto;width:auto;";
            b.match(/^..._Feedback/i) ? (c.nAutoHide = 0, c.fnAutoHide = c.fnAutoShow = c.Toggle, c.nHeightShow = 282, c.nHeightHide = 50, c.nWidth = 700, m.width = e.width = c.nWidth + q + "px", g || (bs_R.SetPersist({ele: h, sPosition: "BCL", Z: 100}), v = "2px 2px 0 2px", w = 4), u = bs_R.sTable + '><tr style="' + r + '"><td style="' + s + n + 'width:auto;"></td><td style="' +
                s + n + 'background-position:right top;"></td></tr><tr style="' + r + '"><td style="' + r + '">', g || (t = '<div style="' + s + 'clear:right;">' + bs_R.sTable + ' align="right" style="position:relative;width:100%;padding:3px 4px 0;cursor:pointer;font-size:9px;" onclick="bs_R.oBSG.Toggle();"><tr style="' + r + '"><td style="' + s + 'text-align:center;height:16px;"><span id="' + c.idIMG + '" style="display:inline-block;height:15px;width:61px;margin:-1px 0 -1px 2px;background:transparent url(' + bs_R.sRootSealImgBSG + 'sprite_201110.png) no-repeat 0 20px;"></span></td></tr></table></div>'),
                r = '</td><td style="' + s + n + 'height:auto;background-position:-990px -10px;"></td></tr></table>') : (c.nAutoHide = 5E3, c.fnAutoHide = c.Hide, c.fnAutoShow = c.Show, c.nHeightShow = 140, c.nHeightHide = 28, c.nWidth = 826, g || bs_R.SetPersist({ele: h, sPosition: "BRL", Z: -10}), l.onmouseover = function () {
                bs_R.RollOver(c.Show)
            }, l.onmouseout = function () {
                bs_R.RollOut(c.Hide)
            }, u = bs_R.sTable + '><tr style="' + r + '"><td style="' + s + n + 'width:auto;"></td></tr><tr style="' + r + '"><td style="' + r + '">', r = "</td></tr></table>");
            g ? c.Show() : 0 < p ? c.nAutoHide =
                p : 0 > p && (c.fClosed = 0);
            l.innerHTML = u + '<div id="' + k + '" style="' + s + "position:relative; background:#f1f1f1; height:100%; width:" + (c.nWidth + w) + 'px;"><div style="' + s + 'position:absolute; top:0; left:0; background:#f1f1f1; width:100%; height:100%; z-index:-1;"></div>' + t + '<div style="' + s + "clear:right; margin:" + v + "; width:" + c.nWidth + 'px;"><iframe src="' + c.url + '&HTML=1" id="' + a + '" name="' + a + '" width="' + c.nWidth + '" height="' + (g ? c.nHeightShow : 0) + '" onload="bs_R.oBSG.OnLoad();" ' + bs_R.sFrameDef + "></iframe></div></div>" +
                r;
            h.appendChild(l);
            (g = bs_R._gel(k)) && bs_R.iFrameFix(k, g, "#f1f1f1");
            f.nospacer || bs_R.BottomSpacer(70)
        } else bs_R.err("WriteGuarantee: Can't find element: " + bs_R.sBSGID)
    }
};
buySAFE.WriteGuarantee = WriteBuySafeGuarantee;
function WriteBuySafeGuarantee(a, b) {
    bs_R.sBSGID = b || bs_R.sBSGID;
    bs_R.fWG = !0;
    bs_R.onLoad(function () {
        function b(a) {
            var c = "";
            if (c = bs_R._gel(a))c = c.value;
            !c && (c = bs_R._geln(a)) && c[0] && (c = c[0].value);
            return c
        }

        var c = buySAFE, e = c.Guarantee;
        e.total = e.subtotal || e.total;
        var f = "", g = "0", h = "";
        if ("HTML" == a)f = b(e.order), g = b(e.total), h = b(e.email); else if ("Yahoo" == a) {
            window.orderNum && (f = orderNum);
            window.orderSubTotal && (g = orderSubTotal);
            var k;
            (k = bs_R._gel("ys_billToEmail")) && k.innerHTML && (h = k.innerHTML)
        } else"ProStores" ==
            a || "JavaScript" == a ? (f = e.order || c.order || "", g = e.total || c.total || "", h = e.email || c.email || "") : "ShopSite" == a ? (window.ss_ordernum && (f = ss_ordernum), window.ss_subtotal && (g = ss_subtotal), window.ss_email && (h = ss_email)) : "Volusion" == a && window.Order && (Order[0] && (f = Order[0]), Order[3] && (g = Order[3]), Order[9] && (h = Order[9]));
        g = String(g).replace(/[\$\s\,\+]+/g, "");
        h = String(h).match(/^\s*([^\s]*)/)[1];
        f = bs_R.Trim(f);
        c = bs_R.oBSG;
        c.url = bs_R.sRootSeal + "Guarantee.aspx?ifID=" + c.id + "&o=" + bs_R._en(f) + "&t=" + bs_R._en(g) + "&e=" +
            bs_R._en(h) + "&DP=" + bs_R.getDevicePrint() + "&HASH=" + bs_R.Hash();
        bs_R.AddJS(c.url + "&JSONP=1&cbf=bs_R.oBSG.WriteFrame2")
    }, 1)
}
bs_R.CheckBlank = function (a) {
    try {
        if (43 == a.fileSize || 2 == a.naturalWidth) {
            var b = a.parentNode;
            "a" == b.tagName.toLowerCase() && -1 < b.href.indexOf("VerifySeal.aspx") && (b.style.display = "none")
        }
    } catch (d) {
    }
};
bs_R.TimeoutNew = function (a, b, d, c) {
    bs_R.oTimeouts[a] = {Target: d, Failed: !1, Interval: bs_R._st(b, c)}
};
bs_R.TimeoutFailed = function (a) {
    a = bs_R.oTimeouts[a];
    clearInterval(a.Interval);
    a.Failed = !0
};
bs_R.TimeoutClear = function (a, b) {
    clearInterval(bs_R.oTimeouts[a].Interval)
};
bs_R.WriteFlash = function (a, b, d, c, e) {
    var f = bs_R._gel(b);
    f ? (buySAFE.NoFlash ? e && (f.style.display = "none") : (e && (f.style.width = f.style.height = "0px"), a.addParam("menu", "false"), a.addParam("AllowScriptAccess", "always"), a.addParam("scale", "noscale"), a.addParam("salign", "tl"), a.write(f)), bs_R.TimeoutNew(d, c, f, buySAFE.SealDelay || 0), bs_R.IsIE && (window[d] = document[d])) : bs_R.err("WriteSeal: Can't find element: " + b)
};
buySAFE.WriteButtonAjax = WriteBuySafeButtonAjax;
function WriteBuySafeButtonAjax(a) {
    eval(a.substr(a.indexOf("WriteBuySafeButton"), a.indexOf("\x3c/script>") - a.indexOf("WriteBuySafeButton")))
}
buySAFE.WriteButtonAjaxInvisible = WriteBuySafeButtonAjaxInvisible;
function WriteBuySafeButtonAjaxInvisible(a) {
    eval(a.substr(a.indexOf("WriteBuySafeButtonInvisible"), a.indexOf("\x3c/script>") - a.indexOf("WriteBuySafeButtonInvisible")))
}
bs_R.SWF_Add = function (a, b) {
    for (var d in b)a.addVariable(d, b[d])
};
bs_R.SWF_Vars = function (a) {
    a = a.replace(/&amp;/gi, "&");
    a = a.split("&");
    for (var b = {}, d = 0; d < a.length; d++) {
        var c = a[d], e = c.indexOf("="), f = c.substring(0, e), c = c.substring(e + 1);
        b[f] = c
    }
    return b
};
bs_R.WriteButton = function (a, b, d, c, e, f) {
    function g(a) {
        return String.fromCharCode(a)
    }

    c = "Invisible" == f ? new SWFObject(b, d, "1", "1", "8", buySAFE.Button.bgcolor) : new SWFObject(b, d, "190", "40", "8", buySAFE.Button.bgcolor);
    var h = bs_R.SWF_Vars(e);
    e = new Date;
    if (1 == e.getDate() || 1 == (new Date(e.getTime() + 864E5)).getDate()) {
        var k = 65, l = parseInt(e.getDate() * Math.random());
        h[bs_R.sT + "m" + g(k++)] = l;
        h[bs_R.sT + "m" + g(k)] = e.getDate() - l
    }
    h.Id && (document.cookie = "BSSCID=" + h.Id + ";");
    "Certified" == h.RolloverType && bs_R.Bool(h.DefaultChecked) &&
        bs_R.Bool(h.Clickable) && (h.RolloverType = "Checked");
    bs_R.SWF_Add(c, h);
    "Invisible" == f ? bs_R.WriteFlash(c, a, d, function () {
        bs_R.ButtonTimeoutInvisible(a, d, b, h)
    }) : bs_R.WriteFlash(c, a, d, function () {
        bs_R.ButtonTimeout(a, d, b, h)
    })
};
buySAFE.WriteButton = WriteBuySafeButton;
function WriteBuySafeButton(a, b, d, c, e) {
    bs_R.CacheImgButton();
    bs_R.WriteButton(a, b, d, c, e, "Default")
}
buySAFE.WriteButtonInvisible = WriteBuySafeButtonInvisible;
function WriteBuySafeButtonInvisible(a, b, d, c, e) {
    bs_R.WriteButton(a, b, d, c, e, "Invisible")
}
bs_R.GetAltButton = function (a, b, d, c, e) {
    var f = d, f = "Receipt" == e || "Seller" == e ? f + "-bg-receipt.gif" : c ? f + "-bg-bonded.gif" : f + "-bg-click.gif";
    return bs_R.sRootSeal + "AltButton.aspx?HASH=" + a + "&I=" + b + "&DP=" + bs_R.getDevicePrint() + "&T=" + (null == c ? d : f + "&TS=" + (new Date).valueOf())
};
bs_R.ButtonTimeoutInvisible = function (a, b, d, c) {
    bs_R.TimeoutFailed(b);
    (new Image(1, 1)).src = bs_R.GetAltButton(c.HASH, c.Id, "dot.gif")
};
bs_R.ButtonTimeout = function (a, b, d, c) {
    var e = c.BondCost;
    bs_R.TimeoutFailed(b);
    c.DefaultChecked = bs_R.Bool(c.DefaultChecked);
    c.Bondable = bs_R.Bool(c.Bondable);
    c.Clickable = bs_R.Bool(c.Clickable);
    var f = bs_R._gel(a);
    if (f) {
        if (bs_R.fFlashPlaceholder || (f.innerHTML = ""), c.Bondable) {
            a = d.substring(d.lastIndexOf("/") + 1).replace(".swf", "");
            d = bs_R._cel("div");
            d.id = "div_" + b;
            bs_R._ctx(d);
            var g = bs_R._cel("div");
            g.id = "div_button_" + b;
            b = g.style;
            b.fontFamily = "Arial, Helvetica, sans-serif;";
            b.backgroundRepeat = "no-repeat";
            b.textAlign = "right";
            b.fontWeight = "bold";
            b.color = "#76777a";
            b.fontSize = "10px";
            a.match(/^BuySafeButton_(?:4280|4348|4886|4900|5670c|5670b|5670a|5774)$/i) ? (b.height = "40px", b.width = bs_R.IsIE ? "190px" : "188px", b.paddingRight = "2px", b.paddingTop = "11px", e = "") : a.match(/^BuySafeButton_[23]$/i) ? (b.height = "13px", b.width = "185px", b.paddingRight = "5px", b.paddingTop = "27px") : (b.height = bs_R.IsIE ? "40px" : "32px", b.width = bs_R.IsIE ? "185px" : "175px", b.paddingRight = "15px", b.paddingTop = "8px", b.color = "#0D2954", b.fontSize = "14px");
            g.oncontextmenu = d.oncontextmenu;
            var h = new Image;
            h.onload = function () {
                192 == h.width && (c.RolloverType = "Free");
                var a = "HASH=" + c.HASH + "&CHECKED=" + c.DefaultChecked + "&LearnMore=" + c.LearnMoreUrl + "&RolloverType=" + c.RolloverType;
                g.style.backgroundImage = "url(" + h.src + ")";
                g.onmouseover = function () {
                    buysafeOver(c.RolloverType, this, "Button", a)
                };
                g.onmouseout = function () {
                    buysafeOut()
                }
            };
            c.Clickable ? (b.cursor = "pointer", c.DefaultChecked ? h.src = bs_R.GetAltButton(c.HASH, c.Id, a, !0, c.RolloverType) : (g.innerHTML = e, h.src = bs_R.GetAltButton(c.HASH,
                c.Id, a, !1, c.RolloverType)), g.onclick = function () {
                window[c.Callback](String(!c.DefaultChecked).toLowerCase())
            }) : h.src = bs_R.GetAltButton(c.HASH, c.Id, a, !0, c.RolloverType);
            d.appendChild(g);
            f.appendChild(d)
        }
    } else bs_R.err("WriteButton: Can't find element: " + a)
};
function SealLoadedCallback(a) {
    bs_R.TimeoutClear(a, a + "_a")
}
function ButtonLoadedCallback(a) {
    bs_R.TimeoutClear(a, "div_" + a)
}
bs_R.GetTarget = function (a) {
    for (var b = {top: 0, left: 0, height: a.height ? parseInt(a.height) : a.offsetHeight, width: a.width ? parseInt(a.width) : a.offsetWidth, offsetWidth: a.offsetWidth, offsetHeight: a.offsetHeight}, d = bs_R.IsIE8 || bs_R.IsOP; a;)b.top += a.offsetTop + (d ? 0 : a.clientTop), bs_R.IsIEQuirks && "relative" == a.style.position || (b.left += a.offsetLeft + (d ? 0 : a.clientLeft)), (a = a.offsetParent) && a.tagName.match(/body|html/i) && (a = null);
    return b
};
bs_R.AltSealTimeoutSSR = function (a, b, d, c) {
    bs_R.TimeoutFailed(b);
    var e = bs_R._gel(a);
    if (e) {
        bs_R.fFlashPlaceholder || (e.innerHTML = "");
        a = bs_R._cel("a");
        a.href = bs_R.sWebVer + "VerifyTrustSeal.aspx?" + d;
        a.target = "_blank";
        a.id = b + "_a";
        var f = bs_R._cel("img");
        f.src = bs_R.sRootVer + "AltSeal.aspx?" + d + "&S=" + c;
        f.id = f.name = b + "_img";
        f.border = 0;
        bs_R._ctx(f);
        a.appendChild(f);
        e.appendChild(a);
        bs_R.RollAttach(bs_R._geln(f.name), "TrustSeal", "TrustSeal", d)
    } else bs_R.err("WriteTrustRatingSeal: Can't find element: " + a)
};
bs_R.AltSealTimeout = function (a, b, d, c, e, f) {
    bs_R.TimeoutFailed(b);
    bs_R.AltSealInfo("bs_R.AltSeal", a, b, d, c, e, f)
};
bs_R.AltSealInfo = function (a, b, d, c, e, f, g, h) {
    var k = new Date;
    bs_R.AddJS(bs_R.sRootSeal + "AltSealInfo.aspx?Info=1&CBF=" + a + "&Elem=" + b + "&SN=" + d + "&HASH=" + c + "&S=" + f + "&T=" + g + "&MSPHASH=" + e + "&DP=" + bs_R.getDevicePrint(h) + "&I=" + (bs_R.GetCookieRaw("BSSCID") || "") + "&TS=" + k.valueOf() + "&PR=" + bs_R._en(document.referrer))
};
bs_R.HideAll = function (a) {
    a.Guarantee.hidden = a.HideSeal = a.HideKickers = 1
};
bs_R.determineSet = function (a, b) {
    if (b.EnableClientDisplay && a.DisplayFlag & 1024) {
        var d = b.setResDefinition, c = b.setIpDefinition;
        a.SNO || (a.SNO = "a");
        if (d)for (var e = bs_R.oDocElem.clientWidth, f = d.screenRes, d = 0; d < f.length; d++)e >= f[d].start && (a.SNO = f[d].t);
        if (c)for (d = a.UniqueId.split("_"), e = 1 < d.length ? d[1] : 0, c = c.setIp, d = 0; d < c.length; d++)e >= c[d].start && e <= c[d].end && (a.SNO = c[d].t);
        b.Variation = a.SNO
    }
};
bs_R.determineKickerName = function (a, b) {
    var d = b.KickerResDefinition, c = b.KickerRxDefinition;
    if (d)for (var e = bs_R.oDocElem.clientWidth, f = d.screenRes, d = 0; d < f.length; d++)e >= f[d].start && (a.kn = f[d].t);
    if (c)for (a.kn = c.init, c = c.defRx, d = 0; d < c.length; d++)RegExp(c[d].rx, "i").exec(c[d].v) && (a.kn = c[d].t)
};
bs_R.AltSealResponse = function (a, b) {
    for (var d = bs_R.GetXml("<xml>" + a + "</xml>").getElementsByTagName("SealResponse")[0] || bs_R._cel("a"), c = bs_R.oSealRS, c = bs_R.oSealRS = {SealDone: 1, SealName: b, DisplayFlag: c.DisplayFlag}, d = d.attributes, e = 0; e < d.length; e++) {
        var f = d[e];
        c[f.name] = f.value
    }
    c.MPUHash = bs_R._en(c.MarketplaceUserHash);
    c.ShowSeal = bs_R.Bool(c.ShowSeal);
    d = buySAFE;
    d.Variation && (c.SNO = d.Variation);
    c.ShowSeal || (c.SealLocation = "");
    var g = c.SealLocation;
    g && (g.match(/\/Web\/Seal\/Flash\/(.*).swf/i) && (c.Seal =
        bs_R.sRootSealImg + RegExp.$1 + ".png"), g.match(/([TB][LR][LMSX])\.swf$/i) && (c.Corner = RegExp.$1), g.match(/AttentionRequired.*swf$/i) && bs_R.Bool(c.PersistantSealOn) && (c.Corner = "BLS"), g.match(/^Custom.*?\/(.*MP\d+\w*)_Seal_...\.swf$/i) && (c.Custom = bs_R.sRootHost + "/" + RegExp.$1, bs_R.determineSet(c, d), "off" == c.SNO ? (c.ShowSeal = 0, bs_R.HideAll(d)) : c.SNO && c.SetName && (c.Custom = c.Custom.replace(RegExp(c.SetName + "$", "i"), c.SNO), c.SetName = c.SNO), c.Seal = c.Custom + "_Seal_" + c.Corner + ".png", c.fCustom = c.RolloverName.match(/^custom/i),
        c.fCustom && "V3" == d.Version && (c.RolloverName = "Responsive")));
    bs_R._st(bs_R.WriteKickers, bs_R.nKickTime);
    bs_R.onLoad(bs_R.WriteKickers);
    var h = d.Callback;
    h && "function" == typeof h && bs_R._st(function () {
        h(g ? c.RolloverName : "")
    }, 100);
    return c
};
bs_R.AltSeal = function (a, b, d, c, e, f, g) {
    g = bs_R.AltSealResponse(g, b);
    var h = g.RolloverName, k = g.RolloverType, l = bs_R._gel(a);
    if (l) {
        bs_R.fFlashPlaceholder || (l.innerHTML = "");
        var m = g.Seal || bs_R.sRootSeal + "AltSeal.aspx?HASH=" + d + "&S=" + e + "&T=" + f + "&MSPHASH=" + c + "&X=png&DP=" + bs_R.getDevicePrint() + "&I=" + (bs_R.GetCookieRaw("BSSCID") || "") + "&TS=" + (new Date).valueOf() + "&PR=" + bs_R._en(document.referrer), p = function (a) {
            function b(d) {
                var e = "none" == a.style.display, f = a.style;
                e && (f.visibility = "hidden", f.display = "inline");
                var g =
                    bs_R.sRollText + "width:100%;text-align:left;color:#ffffff;" + (70 < a.offsetWidth ? "height:16px;line-height:15px;font-size:11px;" : "height:14px;line-height:13px;font-size:8px;");
                e && (f.display = "none", f.visibility = "visible");
                c.style.cssText = g + "bottom:0;left:-1px;";
                c.innerHTML = '<div style="' + g + ';text-align:center;">' + d + "</div>"
            }

            var c = bs_R._cel("div");
            c.className = "buysafe buysafe_seal buysafe_date";
            bs_R._ctx(c);
            b("verifying...");
            bs_R._st(function () {
                b(bs_R.GetDate())
            }, 1E3);
            a.appendChild(c)
        };
        e = bs_R._cel("img");
        e.id = e.name = b + "_img";
        g.fCustom && (e.onload = function () {
            p(l)
        });
        e.src = m;
        e.border = 0;
        bs_R._ctx(e);
        m = bs_R._cel("a");
        m.target = "_blank";
        m.style.fontSize = "0";
        m.id = b + "_a";
        bs_R.oRollNames[e.id] = h;
        g.SealLocation && g.ShowSeal ? g.Corner ? (e.corner = g.Corner, bs_R.AdjustSeal(a, b, "AltSeal", 2, 1, e.corner), e.style.verticalAlign = "bottom") : bs_R.AdjustSeal(a, b, "AltSeal", 0, 0) : bs_R.AdjustSeal(a, b, "AltSeal", 0, 1, "BRS");
        "Responsive" == h ? (e.id = m.id, e.style.cursor = "pointer", l.appendChild(e), bs_R.RollAttach([e], h, "Seal")) : k && "DoesNotApply" !=
            k ? (m.href = bs_R.sVerify + "?PublicToken=" + d + "&MSPHASH=" + c + ("Guarantee" == k ? "&G=1" : ""), m.appendChild(e), l.appendChild(m), buySAFE.NoSealRollover || bs_R.RollAttach([e], h || ("M" == f ? "Certified" : "GenericT"), "Seal")) : l.appendChild(e)
    } else bs_R.err("AltSeal: Can't find element: " + a);
    g.UniqueId && buysafe_set_cookie("buySAFEUID", "BSUID::" + g.UniqueId, "Guarantee" == k ? -1 : 364, "/")
};
buySAFE.WriteTrusteeSeal = WriteBuySafeTrusteeSeal;
function WriteBuySafeTrusteeSeal(a, b, d) {
}
bs_R.getCSSRule = function (a, b) {
    a = a.toLowerCase();
    if (document.styleSheets)for (var d = 0; d < document.styleSheets.length; d++) {
        var c = document.styleSheets[d], e = 0, f = !1;
        do {
            if ((f = c.cssRules ? c.cssRules[e] : c.rules[e]) && f.selectorText.toLowerCase() == a)return"delete" == b ? (c.cssRules ? c.deleteRule(e) : c.removeRule(e), !0) : f;
            e++
        } while (f)
    }
    return!1
};
bs_R.GetStyle = function (a, b) {
    if (a) {
        var d = a.currentStyle || document.defaultView && document.defaultView.getComputedStyle(a, null) || {};
        return b ? d[b] : d
    }
};
function buysafeGetAffiliateURL(a, b, d, c, e, f) {
    bs_R.trc({src: "AffiliateURL", name: bs_R._en(d)});
    a = bs_R._en(d) + "&T=" + bs_R._en(b) + "&U=" + bs_R._en(a) + "&P=" + bs_R._en(c) + "&R=" + bs_R._en(bs_R._l) + "&PR=" + bs_R._en(document.referrer) + "&Q=" + bs_R._en(e) + "&N=" + bs_R._en(f);
    return bs_R.sRootVer + "Verify.aspx?A=" + a
}
bs_R.isDupeSeal = function (a) {
    if (bs_R.oSeals[a])return bs_R.warn(["Guarantee: Skipping duplicate seal request", a]), 1;
    bs_R.oSeals[a] = 1;
    return 0
};
function buySAFEAffiliate(a, b, d, c, e, f, g, h, k, l) {
    this.ElementName = a;
    this.Size = b || "Small";
    this.TargetFullURL = d;
    this.TargetDomainURL = c;
    this.AffilateID = e;
    this.ProgramID = f;
    this.Query = g;
    this.SearchResultNumber = h;
    this.IsEcommerce = k;
    this.Rating = l;
    this.WriteSeal = function () {
        WriteBuySafeAffiliateSeal(this)
    };
    this.WriteTrustSeal = function () {
        WriteBuySafeTrustSeal(this)
    }
}
buySAFE.WriteAffiliateSeal = WriteBuySafeAffiliateSeal;
function WriteBuySafeAffiliateSeal(a, b, d, c, e, f, g, h) {
    bs_R.trc({src: "AffiliateSeal", name: bs_R._en(e)});
    if (!bs_R.isDupeSeal(a)) {
        var k = "buysafeSeal_" + ++bs_R.nSeals;
        bs_R.CacheImgSeal();
        b = "object" != typeof a ? new buySAFEAffiliate(a, b, d, c, e, f, g, h) : a;
        (d = bs_R._gel(b.ElementName)) ? (c = bs_R._cel("a"), c.href = buysafeGetAffiliateURL(b.TargetFullURL, b.TargetDomainURL, b.AffilateID, b.ProgramID, b.Query, b.SearchResultNumber), c.target = "_blank", c.id = k + "_a", a = bs_R._cel("img"), a.src = bs_R.sRootSeal + "SealVerify.aspx?MerchantURL=" +
            bs_R._en(b.TargetDomainURL) + "&Q=" + bs_R._en(b.Query) + "&N=" + bs_R._en(b.SearchResultNumber) + "&A=" + bs_R._en(b.AffiliateID), a.id = a.name = k + "_img", a.border = 0, bs_R._ctx(a), c.appendChild(a), d.appendChild(c), k = "MerchantURL=" + bs_R._en(b.TargetDomainURL), bs_R.RollAttach(bs_R._geln(a.name), "Affiliate", "Affiliate", k)) : bs_R.err("WriteAffiliateSeal: Can't find element: " + a)
    }
}
bs_R.CheckZoom = function (a, b) {
    buySAFE.NoZoomCheck || (a.zoomWidth = a.offsetWidth || a.zoomWidth, a.zoomHeight = a.offsetHeight || a.zoomHeight, bs_R.Display("Seal", a.id, 3 > (window.innerWidth || b.clientWidth) / a.zoomWidth || 3 > (window.innerHeight || b.clientHeight) / a.zoomHeight ? "Hide" : "Show"))
};
bs_R.SimScroll = function (a) {
    a.SimVert();
    a.SimHoriz()
};
bs_R.SetPersist = function (a) {
    function b(b) {
        return(a[b] || 0) + Math.abs(buySAFE[b] || 0)
    }

    var d = a.ele, c = d.style, e = bs_R.oTarget, f = "fixed" == c.position, g = bs_R.oDocElem, h = {VT: "top", HL: "left", VB: "bottom", HR: "right", HC: "left"}, k = {VT: b("Top"), HL: b("Left"), VB: b("Bottom"), HR: b("Right"), Z: b("Z")};
    k.HC = k.VB;
    var l = bs_R.oSealRS;
    if (a.fRollover) {
        var m = "Responsive" == l.RolloverName ? 0 : (l.fCustom ? 0.2 : 0.6) * e.width, l = "Responsive" == l.RolloverName ? 0 : l.fCustom ? e.height - 20 : 0.7 * e.height;
        k.HL += m;
        k.HR += m;
        k.VT += l;
        k.VB += l
    }
    var p = {VT: "_top:expression(document.body.scrollTop  + offsetHeight - offsetHeight + " +
        k.VT + ");", HL: "_left:expression(document.body.scrollLeft + offsetWidth  - offsetWidth  + " + k.HL + ");", VB: "_top:expression(document.body.scrollTop  + document.body.clientHeight - offsetHeight    - " + k.VB + ");", HR: "_left:expression(document.body.scrollLeft + document.body.clientWidth  - offsetWidth     - " + k.HR + ");", HC: "_left:expression(document.body.scrollLeft + ((document.body.clientWidth  - offsetWidth)/2) - 0);"}, l = {VT: function () {
        c.top = pageYOffset + k.VT + "px"
    }, HL: function () {
        c.left = pageXOffset + k.HL + "px"
    },
        VB: function () {
            c.bottom = g.clientHeight - innerHeight - pageYOffset + k.VB + "px"
        }, HR: function () {
            c.right = g.clientWidth - innerWidth - pageXOffset + k.HR + "px"
        }, HC: function () {
            c.left = pageXOffset + (innerWidth - d.offsetWidth) / 2 + "px"
        }, VBabs: function () {
            c.bottom = g.clientHeight - g.offsetHeight + "px"
        }, HCabs: function () {
            c.left = (g.offsetWidth - d.offsetWidth) / 2 + "px"
        }, HRabs: function () {
            c.right = "0px"
        }};
    bs_R.fnCSS(c);
    c.position = "fixed";
    c.left = c.right = c.top = c.bottom = "auto";
    var n = a.sPosition, m = "V" + n.charAt(0), n = "H" + n.charAt(1), q = h[m], t =
        h[n], u = h = "";
    q && t && (h = q + ":" + k[m] + "px;" + t + ":" + k[n] + "px;", u = p[m] + p[n], c[q] = k[m] + "px", c[t] = k[n] + "px", "HC" == n && (h += "left:50%; margin-left:-" + parseInt(d.offsetWidth / 2) + "px", c[t] = "50%", c.marginLeft = "-" + parseInt(d.offsetWidth / 2) + "px"));
    e && (e.tailVert = q, e.tailHoriz = t);
    bs_R.IsIEExpr ? (e = " position: fixed; _position: absolute; ", buySAFE.HideSeal && "none" == c.display && (e += "display:none; "), e = bs_R.IsQuirks ? e + u : e + h, c.cssText = bs_R.sBgDot + e, document.recalc && document.recalc(!0)) : bs_R.IsSimulated && (c.marginLeft = "0px",
        e = d.id == bs_R.sBSGID ? "abs" : "", d.SimVert = l[m + e], d.SimHoriz = l[n + e], bs_R.SimScroll(d), bs_R.onEvent(window, "scroll", function () {
        bs_R.SimScroll(d)
    }));
    f || bs_R.AddBody(d);
    a.fShadow && (c.boxShadow = c.MozBoxShadow = c.WebkitBoxShadow = ("HL" == n ? "3px " : "-3px ") + ("VB" == m ? "-3px " : "3px ") + "3px -1px rgba(0,0,0,0.25)");
    c.zIndex = bs_R.nZIndex + k.Z;
    c.backgroundColor = "transparent"
};
bs_R.AdjustSeal = function (a, b, d, c, e, f) {
    var g = bs_R._gel(b), h = bs_R._gel(a);
    "AltSeal" != d && g && (g.setAttribute("wmode", "transparent"), g.corner = f);
    bs_R._st(function () {
        var b = 1 < d || 1 < c, l = bs_R.oDocElem, m = bs_R.fPersist = parseInt(e);
        !m || !b && buySAFE.StaticOffSeal || (h ? (bs_R.SetPersist({ele: h, sPosition: f, Bottom: bs_R.oSealRS.Bottom, fShadow: bs_R.oSealRS.Shadow}), bs_R.iFrameFix(a, h), buySAFE.SealSpacer && bs_R.BottomSpacer(90)) : bs_R.err("WriteSeal: Can't find element: " + a));
        g ? (g.style.width = (g.width = c) + "px", g.style.height =
            (g.height = d) + "px", h && (h.style.width = c + "px", h.style.height = d + "px", h.style.display = "inline")) : h && (h.style.width = h.style.height = "auto", buySAFE.HideSeal || (h.style.display = "inline"));
        bs_R.SetTopMost(h);
        bs_R.ExecQueue("Seal");
        bs_R.Responsive(1);
        !m || buySAFE.HideSeal || buySAFE.NoZoomCheck || (bs_R.onEvent(window, "resize", function () {
            bs_R.CheckZoom(h, l)
        }), bs_R.onEvent(window, "scroll", function () {
            bs_R.CheckZoom(h, l)
        }), bs_R.CheckZoom(h, l))
    }, bs_R.IsChrome || bs_R.IsSafari ? 100 : 0)
};
function AdjustBuysafeSealCallback(a, b, d, c, e, f, g) {
    bs_R.AdjustSeal(a, b, d, c, e, f);
    a = bs_R.AltSealResponse(unescape(g));
    bs_R.oRollNames[b] = a.RolloverName;
    bs_R.RollRequest(a.RolloverName)
}
buySAFE.WriteSeal = WriteBuySafeSeal;
function WriteBuySafeSeal(a, b, d, c) {
    bs_R.T1 = new Date;
    var e = buySAFE;
    bs_R.fWS = !0;
    if (!bs_R.isDupeSeal(a)) {
        var f = "buysafeseal_" + ++bs_R.nSeals;
        bs_R.CacheImgSeal();
        if ("PersistentSeal" == b || "GuaranteedSeal" == b)b = "Large";
        if ("Small" == a || "Medium" == a || "Large" == a)d = b, b = a, a = "BS_FCompatibleSpan_" + ++bs_R.nSeals, document.write('<span id="' + a + '"></span>');
        c = 130;
        var g = 85;
        "Small" == b ? (c = 85, g = 55) : "Medium" == b && (c = 110, g = 75);
        e = new SWFObject(bs_R.sRootSeal + "Flash/MerchantSeal" + b + ".swf", f, 1, 1, "8", e.Seal.bgcolor);
        d || (d = "HASH=" +
            bs_R.Hash());
        var h = bs_R.SWF_Vars(d);
        h.Size = b;
        h.NAME = f;
        h.ElementName = a;
        h.Width = c;
        h.Height = g;
        bs_R.SWF_Add(e, h);
        bs_R.IsIE && e.addParam("wmode", "transparent");
        bs_R.WriteFlash(e, a, f, function () {
            bs_R.AltSealTimeout(a, f, h.HASH, h.MSPHASH, b, "M")
        }, 1);
        bs_R.RollAttach(bs_R._geln("BuySafeButtonRollover"), "Button", "Button")
    }
}
buySAFE.WriteTrustSeal = WriteBuySafeTrustSeal;
function WriteBuySafeTrustSeal(a, b, d, c, e, f, g, h, k, l) {
    bs_R.trc({src: "TrustSeal", name: "seal"});
    if (!bs_R.isDupeSeal(a)) {
        var m = "buysafeTrustseal_" + ++bs_R.nSeals;
        bs_R.CacheImgSSR();
        b = "object" != typeof a ? new buySAFEAffiliate(a, b, d, c, e, f, g, h, k, l) : a;
        (d = bs_R._gel(b.ElementName)) ? (a = "TrustURL=" + bs_R._en(b.TargetDomainURL), c = bs_R._cel("a"), c.href = bs_R.sWebVer + "VerifyTrustSeal.aspx?" + a, c.target = "_blank", c.id = m + "_a", e = bs_R._cel("img"), null == b.IsEcommerce || null == b.Rating || isNaN(b.Rating) || "" == b.Rating || 0 > parseInt(b.Rating) ||
            4 < parseInt(b.Rating) || 1 != parseInt(b.IsEcommerce) ? (e.src = bs_R.sRootVer + "images/TrustRating/dot.gif", e.id = e.name = m + "_img") : (e.src = bs_R.sRootVer + "images/TrustRating/TrustRating" + b.Rating + ".gif?&Q=" + bs_R._en(b.Query) + "&N=" + bs_R._en(b.SearchResultNumber) + "&A=" + bs_R._en(b.AffilateID), e.id = e.name = m + "_img", e.border = 0, bs_R._ctx(e), c.appendChild(e), d.appendChild(c), bs_R.RollAttach(bs_R._geln(e.name), "TrustSeal", "TrustSeal", a))) : bs_R.err("WriteTrustSeal: Can't find element: " + a)
    }
}
buySAFE.WriteTrustRatingSeal = WriteBuySafeTrustRatingSeal;
function WriteBuySafeTrustRatingSeal(a, b, d) {
    bs_R.trc({src: "TrustRatingSeal", name: "seal"});
    if (!bs_R.isDupeSeal(a)) {
        var c = "buysafetrustseal_" + ++bs_R.nSeals;
        bs_R.CacheImgSSR();
        var e, f;
        "Small" == b && (f = 67, e = 16);
        e = new SWFObject(bs_R.sRootSeal + "Flash/TrustRatingSealLoader" + b + ".swf", c, f, e, "8", buySAFE.Seal.bgcolor);
        d = bs_R.SWF_Vars(d);
        d.NAME = c;
        bs_R.SWF_Add(e, d);
        e.addParam("wmode", "transparent");
        var g = "TrustURL=" + d.TrustURL;
        bs_R.WriteFlash(e, a, c, function () {
            bs_R.AltSealTimeoutSSR(a, c, g, b)
        })
    }
}
bs_R.CacheImg = function (a) {
    a = bs_R.sRootImg + a;
    if (null == bs_R.oImgCache[a]) {
        var b = new Image;
        b.src = a;
        bs_R.oImgCache[a] = b
    }
};
bs_R.CacheImgButton = function () {
    bs_R.nImgDelay && bs_R._st(function () {
        bs_R.CacheImg("rollover_Button_2010_04.png");
        bs_R.CacheImg("rollover_tail.png")
    }, bs_R.nImgDelay)
};
bs_R.CacheImgKicker = function () {
    bs_R.nImgDelay && bs_R._st(function () {
        bs_R.CacheImg("rollover_Kicker_BSG_2011_05.png");
        bs_R.CacheImg("rollover_tail.png")
    }, bs_R.nImgDelay)
};
bs_R.CacheImgSeal = function () {
    bs_R.nImgDelay && bs_R._st(function () {
        bs_R.CacheImg("rollover_2008_01.png");
        bs_R.CacheImg("rollover_BSG_2011_05.png");
        bs_R.CacheImg("rollover_tail.png")
    }, bs_R.nImgDelay)
};
bs_R.CacheImgSSR = function () {
    bs_R.nImgDelay && bs_R._st(function () {
        bs_R.CacheImgSeal();
        bs_R.CacheImg("../../../Web/Verification/images/VerifySeal/tr_state_anim.gif")
    }, bs_R.nImgDelay)
};
bs_R.GetDate = function () {
    var a = new Date;
    return a.getMonth() + 1 + "/" + a.getDate() + "/" + a.getFullYear()
};
bs_R.GetRolloverTail = function (a, b) {
    bs_R.CacheImg("rollover_tail.png");
    return'<div style="' + bs_R.sCSS + "width:230px; height:47px; background: " + ("url('" + bs_R.sRootImg + "rollover_tail.png')") + bs_R.oTail[b] + bs_R.oTail[a] + ' no-repeat transparent;" oncontextmenu="return false;"></div>'
};
bs_R.GetRolloverTemplate = function (a, b, d, c, e, f) {
    bs_R.CacheImg(a);
    return{sBody: '<div style="' + bs_R.sCSS + "width:" + b + 'px; position:relative;"><img src="' + bs_R.sRootImg + a + '" width="' + b + '" height="' + d + '" ' + bs_R.sImgBlockCTX + '/><div style="' + bs_R.sRollText + " font-weight:normal; font-style:italic; color:#00305E; right:12px; bottom:" + f + 'px;"><a style="color:#00305E; text-decoration:underline;" href="' + c + '" target="_blank">' + e + " &raquo;</a></div></div>"}
};
bs_R.GetRolloverButton_2010_04 = function () {
    return bs_R.GetRolloverTemplate("rollover_Button_2010_04.png", 230, 235, bs_R.sLandBond, "see terms and conditions", 45)
};
bs_R.RolloverGetHTML = function (a, b) {
    function d(a, b) {
        return'<div style="' + bs_R.sCSS + "position:absolute;top:0;left:0;bottom:0;right:0;z-index:-2;background:" + a + "; margin:" + b + ';"></div>'
    }

    var c = {sBody: "", sTail: ""}, e = bs_R.sRolloverType, f = bs_R.sRolloverName;
    if (bs_R.oSealRS.DisplayFlag & 2) {
        if ("Button" == e)c = bs_R.GetRolloverButton_2010_04(); else {
            var g = bs_R.oRollover.HTML[f] || "";
            "pending" == g && (g = "");
            c.sBody = g
        }
        "Seal" == e && "AttentionRequired" == f && (c.sTail = '<div><img src="' + bs_R.sRootImg + "atnrq_tail_" + a + "_" + b + '.gif" alt="" ' +
            bs_R.sImgBlockCTX + " /></div>");
        c.sBody && !c.sTail && (c.sTail = bs_R.GetRolloverTail(a, b))
    }
    c.sBody && !bs_R.oSealRS.Custom && (c.sBody = '<div style="' + bs_R.sCSS + 'position:relative;">' + c.sBody + d("#002f5f", "5px 0") + d("#002f5f", "0 5px") + d("#002f5f", "2px") + "</div>");
    bs_R.oSealRS.Custom && "Button" != e && (c.sTail = "");
    return"top" == a ? c.sTail + c.sBody : c.sBody + c.sTail
};
bs_R.WriteHTMLVAR = function (a) {
    for (var b, d = /\[VAR_([^\]]+)]/g; b = d.exec(a);)a = a.replace(b[0], eval(b[1]));
    return a
};
bs_R.WriteKickersHTML = function (a, b) {
    if (a) {
        var d = bs_R._gel(a);
        if (d) {
            d.innerHTML = bs_R.WriteHTMLVAR(b);
            for (var c = bs_R.oRollNames[a], e = /^Rollover_(.*)$/i, f = d.getElementsByTagName("span"), g = 0; !c && g < f.length; g++) {
                var h = f[g];
                if (h) {
                    var k = e.exec(h.id);
                    k && k[1] && (c = k[1], d.removeChild(h))
                }
            }
            buySAFE.NoKickerRollover || c && bs_R.RollAttach([d], c);
            bs_R.ExecQueue("Kicker", a);
            bs_R.Responsive(1, a)
        } else bs_R.err("WriteKickers: Can't find element: " + a)
    }
};
bs_R.GetKicker = function (a, b, d) {
    bs_R.AddJS(bs_R.sRootSeal + "Dynamic.aspx?CBF=bs_R.WriteKickersHTML&Promocode=" + bs_R._en(a) + "&ifID=" + bs_R._en(b) + "&DP=" + bs_R.getDevicePrint(d) + "&HASH=" + bs_R.Hash() + (a.match(/Rating/) ? "&e=e&PK=" + bs_R.oSealRS.MPUHash : ""))
};
bs_R.WriteKickers = function () {
    bs_R.nKickerPass++;
    for (var a = buySAFE, b = ["buySAFE_Kicker", "_GUARANTEE_Kicker"], d = RegExp(b.join("|")), c = [], e = {}, f = 0; f < b.length; f++)for (var g = bs_R._geln(b[f]), h = 0; h < g.length; h++)c.push(g[h]);
    for (h = 0; h < c.length; h++)if ((b = c[h]) && b.id.match(d)) {
        var f = (b.getAttribute("type") || "").match(/(?:\((.*)\) )?(.*)/), g = f[2], k = g + "_" + ++bs_R.nKicker;
        bs_R.oRollNames[k] = f[1];
        a.HideKickers && (b.style.display = "none");
        "none" != b.style.display && (b.style.display = "inline-block");
        "Kicker Dynamic" ==
            g && a.EnableClientDisplay && (bs_R.determineKickerName(e, a), e.kn && (g = e.kn));
        b.setAttribute("name", g);
        b.id = k;
        bs_R.GetKicker(g, k, e)
    }
    1 < bs_R.nKickerPass && !bs_R.nKicker && bs_R.GetKicker("Kicker Custom Null", "", e)
};
bs_R.AltKickers = function (a, b, d, c, e, f, g) {
    bs_R.AltSealResponse(g)
};
buySAFE.WriteKickers = WriteBuySafeKickers;
function WriteBuySafeKickers() {
    bs_R.fWK = !0;
    var a = bs_R.Hash();
    if (a && String(a).match(/^eaccEkXk206%2BSGpYrAUoGhA2Bxg%2F/i))return!1;
    bs_R.AltSealInfo("bs_R.AltKickers", "ele", "seal", a, "", "Large", "")
}
bs_R.Display = function (a, b, d, c, e) {
    var f = {Seal: "inline", Kicker: "inline-block"}, g = bs_R._gel(b);
    if (g) {
        if (f = f[a])g.style.display = "Hide" == d ? "none" : f;
        if ("Kicker" == a && c)if (f = g.getElementsByTagName("img")[0]) {
            var h = f.src.match(/(.*\/Web\/Seal\/images\/MpCustom\/MP\d+(\w)_Kicker_)/i);
            h && h[1] && (c = c.replace(/(?:kicker|custom)[ _]*/ig, ""), f.src = h[1] + c + ".png", c = h[2] + "_Kicker_Custom_" + c, bs_R.RollAttach([g], c))
        } else bs_R.aExecQ.push(["Display", buySAFE, arguments])
    } else e || bs_R.err("Display: Can't find element: " +
        b)
};
buySAFE.Display = function (a, b, d, c, e) {
    "Seal" == a && (buySAFE.NoZoomCheck = 1);
    bs_R.Display(a, b, d, c, e)
};
bs_R.iFrameFix = function (a, b, d) {
    if (!buySAFE.NoIFrame && a && b) {
        var c = bs_R.oFrameFix[a];
        c || (c = bs_R._cel("iframe"), c.id = a + "_frame", c.frameBorder = c.marginHeight = c.marginWidth = 0, c.scrolling = "no", bs_R.oFrameFix[a] = c);
        var e = c.style;
        bs_R.fnCSS(e);
        e.position = "absolute";
        c.width = c.height = e.width = e.height = "1px";
        e.top = e.left = 0;
        e.zIndex = -2;
        d && (e.background = d);
        e.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=0)";
        b.appendChild(c);
        c.width = c.height = e.width = e.height = "100%";
        bs_R.IsIEQuirks && bs_R._st(function () {
            c.height =
                e.height = b.clientHeight + "px"
        }, 500)
    }
};
bs_R.RollHide = function (a) {
    if (a = a || bs_R._gel(bs_R.sRolloverID)) {
        var b = a.style, d = "position:absolute;visibility:hidden;transition:none;";
        b.cssText = d;
        bs_R.IsIEExpr && (b.cssText = d + "_top:expression(0); _left:expression(0);", document.recalc && document.recalc(!0));
        b.top = b.left = "-1000px";
        b.bottom = b.right = "auto";
        a.onmouseover = a.onmouseout = a.onclick = function () {
        }
    }
};
bs_R.RollGet = function () {
    var a = bs_R._gel(bs_R.sRolloverID);
    a || (a = bs_R._cel("div"), a.id = bs_R.sRolloverID, bs_R.RollHide(a), bs_R.AddBody(a));
    return a
};
bs_R.RollShow = function () {
    var a = bs_R.oSealRS, b = bs_R.sRolloverName, d = bs_R.sRolloverType;
    bs_R.trc({src: "rollover", name: b});
    var c = bs_R.RollGet();
    c.onmouseover = function (a) {
        bs_R.oRollover[b].fHide = 0
    };
    c.onmouseout = c.onclick = function (a) {
        a = a || window.event;
        var d = bs_R.oRollover[b];
        if (d.fHide || "Responsive" == b)return 0;
        d.fHide = 1;
        var e = "click" == a.type;
        e && (d.X = a.clientX, d.Y = a.clientY);
        buysafeOut(c.id, e ? 1 : 0)
    };
    c.innerHTML = bs_R.RolloverGetHTML("top", "left");
    var e, f, g = c.style;
    g.transition = "none";
    g.zIndex = bs_R.nZIndex;
    bs_R.fnCSS(g);
    if (!bs_R.fPersist || "Seal" != d && "Guarantee" != d) {
        g.position = "absolute";
        g.top = g.left = 0;
        g.bottom = g.right = "";
        f = bs_R.GetTarget(bs_R.oTarget);
        var h = bs_R.oDocElem;
        e = (window.pageYOffset || h.scrollTop) + h.clientHeight / 2;
        var h = (window.pageXOffset || h.scrollLeft) + h.clientWidth / 2, k = f.top + f.offsetHeight / 2, l = f.left + f.offsetWidth / 2;
        a.Custom && "Button" != d ? (g.top = f.top + "px", g.left = f.left + "px", e = "bottom", f = "right") : (k > e ? (g.top = f.top - c.offsetHeight + 0 + "px", e = "bottom") : (g.top = f.top + f.offsetHeight - 0 + "px", e = "top"),
            l > h ? (g.left = f.left - c.offsetWidth + 0 + "px", f = "right") : (g.left = f.left + f.offsetWidth - 0 + "px", f = "left"))
    } else bs_R.SetPersist({ele: c, sPosition: bs_R.oTarget.corner, Bottom: a.Bottom, fShadow: a.Shadow, fRollover: 1, Z: 100}), e = bs_R.oTarget.tailVert, f = bs_R.oTarget.tailHoriz;
    c.tailVert = e;
    c.innerHTML = bs_R.RolloverGetHTML(e, f);
    "Responsive" == b && bs_R.oBSG.WriteResponsive(d, b, a);
    g.visibility = "visible";
    bs_R.iFrameFix(bs_R.sRolloverID, c)
};
bs_R.RollOver2 = function (a, b) {
    bs_R.oTimer && (a(), bs_R.oRollover[b].fHide = 1)
};
bs_R.RollOut2 = function (a, b) {
    bs_R.oRollover[b].fHide && (a(), bs_R.oRollover[b].fHide = 0)
};
bs_R.RollOver = function (a, b) {
    bs_R.oTimer = bs_R._st(function () {
        bs_R.RollOver2(a, b || bs_R.sRolloverName)
    }, bs_R.nShowTime)
};
bs_R.RollOut = function (a, b) {
    b = b || bs_R.sRolloverName;
    bs_R.oTimer && (clearTimeout(bs_R.oTimer), bs_R.oTimer = null);
    bs_R.oRollover[b] && bs_R.oRollover[b].fHide && bs_R._st(function () {
        bs_R.RollOut2(a, b)
    }, bs_R.nHideTime)
};
function buysafeOver(a, b, d, c, e) {
    buySAFE.NoRollover || "GenericT" == a || ("IMG" != b.tagName || 2 < b.naturalWidth || 2 < b.clientWidth ? (bs_R.sRolloverQuery = c, a = bs_R.sRolloverName = bs_R.oRollNames[b.id] || a, bs_R.sRolloverType = d, bs_R.oTarget = b, bs_R.oRollover[a] = bs_R.oRollover[a] || {}, e ? bs_R.RollShow() : bs_R.RollOver(bs_R.RollShow)) : b.onclick = function () {
        return!1
    })
}
function buysafeOut(a, b) {
    b ? bs_R.RollHide() : bs_R.RollOut(bs_R.RollHide)
}
function buysafeFlashOver(a, b, d) {
    buysafeOver(a, bs_R._gel(b), null == d ? "Button" : d)
}
function buysafeTrustRatingFlashOver(a, b, d, c) {
    buysafeOver(a, bs_R._gel(b), null == d ? "Button" : d, c)
}
function buysafeButtonFlashOver(a, b, d, c) {
    buysafeOver(a, bs_R._gel(b), null == d ? "Button" : d, c)
}
(function (a, b) {
    a.RollCBF = function (b, c) {
        var e = a.oRollover;
        e.HTML[b] = a.WriteHTMLVAR(c);
        var f = a.RollGet();
        "hidden" == f.style.visibility && (f.innerHTML = e.HTML[b], f.innerHTML = "")
    };
    a.RollRequest = function (b) {
        b && !a.oRollover.HTML[b] && (a.oRollover.HTML[b] = "pending", a.AddJS(a.sRootSeal + "Static.aspx?CBF=bs_R.RollCBF&Type=RO&Promocode=" + b + "&ifID=" + b + "&DP=" + a.getDevicePrint() + "&HASH=" + a.Hash()))
    };
    a.RollAttach = function (b, c, e, f) {
        for (var g, h = 0; h < b.length; h++) {
            g = b[h];
            g.onmouseover = function (b) {
                b = b || window.event;
                var d =
                    a.oRollover[c] || {}, g = "click" == b.type;
                (g || d.X != b.clientX || d.Y != b.clientY) && buysafeOver(c, this, e, f, g ? 1 : 0)
            };
            g.onmouseout = function (a) {
                buysafeOut()
            };
            if ("Seal" == e && "Responsive" == c || c.match(/^\w+_Kicker_/))g.onclick = g.onmouseover;
            a._ctx(g)
        }
        g && (a.RollRequest(c), "Button" == c ? a.CacheImgButton() : "BSG_Kicker_Button" == c ? a.CacheImgKicker() : "BSG_Kicker_Seal" == c && a.CacheImgSeal())
    };
    a.ExecQueue = function (b, c) {
        for (var e, f = 0, g = a.aExecQ.length; f++ < g && (e = a.aExecQ.shift());)"Display" == e[0] && (e[2][0] != b || c && e[2][1] != c) ? a.aExecQ.push(e) :
            e[1][e[0]].apply(null, e[2])
    };
    a.Responsive = function (d, c) {
        var e = b.Responsive;
        if (e) {
            var f = e.Kickers, g = e.Seal || {}, h = e.Breakpoints ? 1 : 0, k = (h ? e.Breakpoints : f.widths) || [], l = (h ? f : f.ids) || {}, m = (h ? k[g.Breakpoint - 1] : g.width) || 0, p = 0, n;
            if (f && k)for (; p < k.length && !((n = a.oDocElem.clientWidth) <= k[p]);)p++;
            if (p != e.State || d) {
                e.State = p;
                if (f && l)for (var q in l)c && c != q || (e = h ? l[q][p] : p + l[q], a.Display("Kicker", q, e ? "Show" : "Hide", "Kicker Custom " + e, 1));
                !g.id || c && c != g.id || (b.NoZoomCheck = 1, a.Display("Seal", g.id, n <= m ? "Hide" : "Show"))
            }
        }
    }
})(bs_R,
        buySAFE);
bs_R.SetBrowser = function (a, b) {
    a.oBrowser = a.oBrowser || {str: function (a) {
        for (var c = 0; c < a.length; c++) {
            var e = a[c], f = e.src || b.userAgent, g = e.re || e.name;
            this.tmp = e.ver || e.name;
            if (f.match(g))return e.name
        }
        return""
    }, ver: function (a) {
        return(a = a.match(this.tmp + ".([\\d\\.\\-]+)")) ? a[1] : ""
    }, init: function (d) {
        if (!d.name) {
            var c = b.platform, c = [
                {name: "Windows", src: c, re: "Win"},
                {name: "Mac", src: c},
                {name: "Android"},
                {name: "iOS", re: "iPhone|iPad|iPod"},
                {name: "Linux", src: c}
            ];
            d.name = d.str([
                {name: "Chrome"},
                {name: "Chromium"},
                {name: "Safari",
                    ver: "Android", re: "Android.*Safari"},
                {name: "Safari", ver: "Version"},
                {name: "Opera", ver: "Version"},
                {name: "Firefox"},
                {name: "Netscape"},
                {name: "IEMobile"},
                {name: "MSIE"},
                {name: "MSIE", ver: "rv", re: "Trident"}
            ]);
            d.version = d.ver(b.userAgent) || d.ver(b.appVersion);
            d.vr = parseFloat(d.version);
            d.os = d.str(c);
            a.IsSafari = "Safari" == d.name;
            a.IsChrome = "Chrome" == d.name;
            a.IsIE = "MSIE" == d.name;
            a.IsTouch = "iOS" == d.os || "Android" == d.os;
            a.IsAnSaf = "Android" == d.os && "Safari" == d.name;
            a.IsAnSafOld = a.IsAnSaf && 4 > d.vr;
            a.IsSimulated = "iOS" ==
                d.os && 5.1 > d.vr || a.IsAnSafOld;
            a.IsIE6 = a.IsIE && 6 == d.vr;
            a.IsIE8 = a.IsIE && 8 == d.vr;
            a.IsIElt8 = a.IsIE && 8 > d.vr;
            a.IsIElt10 = a.IsIE && 10 > d.vr;
            a.IsFF = "Firefox" == d.name;
            a.IsOP = "Opera" == d.name;
            a.IsQuirks = "BackCompat" == document.compatMode;
            a.IsIEQuirks = a.IsIE && a.IsQuirks;
            a.IsIEExpr = a.IsIElt8 || a.IsIEQuirks && a.IsIElt10
        }
    }};
    a.oBrowser.init(a.oBrowser)
};
(function (a, b) {
    if (!a.fLoaded) {
        a.fLoaded = 1;
        a.T0 = new Date;
        a.sRolloverID = "buysafeRollover";
        a.sBSGID = "BuySafeGuaranteeSpan";
        a.sT = "Ter";
        a.nPersistH = 70;
        a.nPersistW = 80;
        a.fPersist = !1;
        a.nShowTime = 500;
        a.nHideTime = 500;
        a.oRollover = {HTML: {}};
        a.oSealRS = {DisplayFlag: 2};
        a.sDate = a.GetDate();
        var d = a.sRootHost;
        a.sRootHostWWW = d.replace(/\/\/nsg\.symantec\./i, "//www.NortonShoppingGuarantee.").replace(/\/\/seal\./i, "//www.").replace("http:", "https:");
        a.sRootImg = a.sRoot + "images/";
        a.sRootSeal = d + "/Web/Seal/";
        a.sRootSealImg =
            a.sRootSeal + "images/";
        a.sRootSealImgBSG = a.sRootSealImg + "bsg/";
        a.sRootVer = d + "/Web/Verification/";
        a.sWebVer = a.sRootHostWWW + "/Web/Verification/";
        a.nSeals = 0;
        a.oSeals = {};
        a.oRollNames = {};
        a.nKicker = 0;
        a.nKickerPass = 0;
        a.oImgCache = {};
        a.oTail = {top: " 0px", bottom: " -47px", left: " -35px", right: " 195px"};
        var c = a.sCSS = "border:0;margin:0;padding:0;";
        a.fnCSS = function (a) {
            a.border = a.margin = a.padding = "0"
        };
        a.sNoPin = "data-pin-no-hover";
        var e = ' oncontextmenu="return false;" ' + a.sNoPin + '="true" style="' + c + "visibility:inherit;";
        a.sImgCTX = e + '" ';
        a.sImgBlockCTX = e + 'display:block;" ';
        a.sFont = " font-family:Verdana,Arial,Helvetica,sans-serif;text-decoration:none;text-indent:0;text-transform:none;word-spacing:normal;letter-spacing:normal;";
        a.sRollText = a.sFont + "font-size:10px;text-align:right;position:absolute;" + c;
        a.sBgDot = " background: url('" + d + "/images/dot.gif') fixed right bottom no-repeat; ";
        a.sFrameDef = ' style="display:block;visibility:visible;' + c + '" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" vspace="0" allowtransparency="true" ';
        a.sTable = '<table border="0" cellpadding="0" cellspacing="0" ';
        a.oTimeouts = {};
        a.fFlashPlaceholder = !1;
        a.sVerify = a.sRootHostWWW + "/Web/Seal/VerifySeal.aspx";
        a.sWeb4 = a.sRootHost + "/Web4/Seal/";
        a.sPageHost = a._l.host.replace("www.", "");
        a.oFrameFix = {};
        a.SetBrowser(a, navigator);
        b.NoFlash = 1;
        b.Variation && (b.Variation = String(b.Variation).toLowerCase());
        (b.HideAll || a.IsIE6 || "off" == b.Variation) && a.HideAll(b);
        a.IsTouch && (b.Guarantee.hidden = 1);
        a.nZIndex = a.isUndef(b.zIndex, 10001);
        a.nImgDelay = b.ImageCacheDelay;
        a.nKickTime =
            a.isUndef(b.KickerDelay, 200);
        a.oDocElem = a.IsQuirks ? document.body : document.documentElement;
        a.ExecQueue();
        if (b.Responsive)a.onEvent(window, "resize", function () {
            a.Responsive()
        })
    }
})(bs_R, buySAFE);
bs_R.RollAttach(bs_R._geln("buySAFE Bonded Seller"), "Seller");
