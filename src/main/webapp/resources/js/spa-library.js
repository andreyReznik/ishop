/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 */
(function (e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) {
        return new x.fn.init(e, t, r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) {
        return t.toUpperCase()
    }, q = function (e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
    }, _ = function () {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {jquery: f, constructor: x, init: function (e, n, r) {
        var i, o;
        if (!e)return this;
        if ("string" == typeof e) {
            if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n)return!n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
            if (i[1]) {
                if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))for (i in n)x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                return this
            }
            if (o = a.getElementById(i[2]), o && o.parentNode) {
                if (o.id !== i[2])return r.find(e);
                this.length = 1, this[0] = o
            }
            return this.context = a, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
    }, selector: "", length: 0, toArray: function () {
        return g.call(this)
    }, get: function (e) {
        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    }, pushStack: function (e) {
        var t = x.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
    }, each: function (e, t) {
        return x.each(this, e, t)
    }, ready: function (e) {
        return x.ready.promise().done(e), this
    }, slice: function () {
        return this.pushStack(g.apply(this, arguments))
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, eq: function (e) {
        var t = this.length, n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    }, map: function (e) {
        return this.pushStack(x.map(this, function (t, n) {
            return e.call(t, n, t)
        }))
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: h, sort: [].sort, splice: [].splice}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)if (null != (o = arguments[l]))for (i in o)e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
        return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
    }, isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? x.readyWait++ : x.ready(!0)
    }, ready: function (e) {
        if (e === !0 ? !--x.readyWait : !x.isReady) {
            if (!a.body)return setTimeout(x.ready);
            x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
        }
    }, isFunction: function (e) {
        return"function" === x.type(e)
    }, isArray: Array.isArray || function (e) {
        return"array" === x.type(e)
    }, isWindow: function (e) {
        return null != e && e == e.window
    }, isNumeric: function (e) {
        return!isNaN(parseFloat(e)) && isFinite(e)
    }, type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
    }, isPlainObject: function (e) {
        var n;
        if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))return!1;
        try {
            if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf"))return!1
        } catch (r) {
            return!1
        }
        if (x.support.ownLast)for (n in e)return v.call(e, n);
        for (n in e);
        return n === t || v.call(e, n)
    }, isEmptyObject: function (e) {
        var t;
        for (t in e)return!1;
        return!0
    }, error: function (e) {
        throw Error(e)
    }, parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || a;
        var r = k.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
    }, parseJSON: function (n) {
        return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
    }, parseXML: function (n) {
        var r, i;
        if (!n || "string" != typeof n)return null;
        try {
            e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
        } catch (o) {
            r = t
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
    }, noop: function () {
    }, globalEval: function (t) {
        t && x.trim(t) && (e.execScript || function (t) {
            e.eval.call(e, t)
        })(t)
    }, camelCase: function (e) {
        return e.replace(D, "ms-").replace(L, H)
    }, nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, n) {
        var r, i = 0, o = e.length, a = M(e);
        if (n) {
            if (a) {
                for (; o > i; i++)if (r = t.apply(e[i], n), r === !1)break
            } else for (i in e)if (r = t.apply(e[i], n), r === !1)break
        } else if (a) {
            for (; o > i; i++)if (r = t.call(e[i], i, e[i]), r === !1)break
        } else for (i in e)if (r = t.call(e[i], i, e[i]), r === !1)break;
        return e
    }, trim: b && !b.call("\ufeff\u00a0") ? function (e) {
        return null == e ? "" : b.call(e)
    } : function (e) {
        return null == e ? "" : (e + "").replace(C, "")
    }, makeArray: function (e, t) {
        var n = t || [];
        return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
    }, inArray: function (e, t, n) {
        var r;
        if (t) {
            if (m)return m.call(t, e, n);
            for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
        }
        return-1
    }, merge: function (e, n) {
        var r = n.length, i = e.length, o = 0;
        if ("number" == typeof r)for (; r > o; o++)e[i++] = n[o]; else while (n[o] !== t)e[i++] = n[o++];
        return e.length = i, e
    }, grep: function (e, t, n) {
        var r, i = [], o = 0, a = e.length;
        for (n = !!n; a > o; o++)r = !!t(e[o], o), n !== r && i.push(e[o]);
        return i
    }, map: function (e, t, n) {
        var r, i = 0, o = e.length, a = M(e), s = [];
        if (a)for (; o > i; i++)r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e)r = t(e[i], i, n), null != r && (s[s.length] = r);
        return d.apply([], s)
    }, guid: 1, proxy: function (e, n) {
        var r, i, o;
        return"string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () {
            return e.apply(n || this, r.concat(g.call(arguments)))
        }, i.guid = e.guid = e.guid || x.guid++, i) : t
    }, access: function (e, n, r, i, o, a, s) {
        var l = 0, u = e.length, c = null == r;
        if ("object" === x.type(r)) {
            o = !0;
            for (l in r)x.access(e, n, l, r[l], !0, a, s)
        } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
            return c.call(x(e), n)
        })), n))for (; u > l; l++)n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
        return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
    }, now: function () {
        return(new Date).getTime()
    }, swap: function (e, t, n, r) {
        var i, o, a = {};
        for (o in t)a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)e.style[o] = a[o];
        return i
    }}), x.ready.promise = function (t) {
        if (!n)if (n = x.Deferred(), "complete" === a.readyState)setTimeout(x.ready); else if (a.addEventListener)a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1); else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {
            }
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    r = x(a), function (e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function (e, t) {
            return e === t ? (S = !0, 0) : 0
        }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) {
            var t = 0, n = this.length;
            for (; n > t; t++)if (this[t] === e)return t;
            return-1
        }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")}, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {apply: H.length ? function (e, t) {
                _.apply(e, O.call(t))
            } : function (e, t) {
                var n = e.length, r = 0;
                while (e[n++] = t[r++]);
                e.length = n - 1
            }}
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e)return n;
            if (1 !== (l = t.nodeType) && 9 !== l)return[];
            if (h && !i) {
                if (o = Z.exec(e))if (s = o[1]) {
                    if (9 === l) {
                        if (a = t.getElementById(s), !a || !a.parentNode)return n;
                        if (a.id === s)return n.push(a), n
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)return n.push(a), n
                } else {
                    if (o[2])return M.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)return M.apply(n, t.getElementsByClassName(s)), n
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                        while (u--)c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t, x = c.join(",")
                    }
                    if (x)try {
                        return M.apply(n, y.querySelectorAll(x)), n
                    } catch (T) {
                    } finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }

        function st() {
            var e = [];

            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
            }

            return t
        }

        function lt(e) {
            return e[b] = !0, e
        }

        function ut(e) {
            var t = f.createElement("div");
            try {
                return!!e(t)
            } catch (n) {
                return!1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ct(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--)o.attrHandle[n[r]] = t
        }

        function pt(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r)return r;
            if (n)while (n = n.nextSibling)if (n === t)return-1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return"input" === n && t.type === e
            }
        }

        function dt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return("input" === n || "button" === n) && t.type === e
            }
        }

        function ht(e) {
            return lt(function (t) {
                return t = +t, lt(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        s = at.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, r = at.support = {}, p = at.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : w, i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
                p()
            }), r.attributes = ut(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ut(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ut(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), r.getById = ut(function (e) {
                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
            }), r.getById ? (o.find.ID = function (e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete o.find.ID, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
            }), ut(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)while (t = t.parentNode)if (t === e)return!0;
                return!1
            }, A = d.compareDocumentPosition ? function (e, t) {
                if (e === t)return S = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t)return S = !0, 0;
                if (!o || !a)return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a)return pt(e, t);
                r = e;
                while (r = r.parentNode)s.unshift(r);
                r = t;
                while (r = r.parentNode)l.unshift(r);
                while (s[i] === l[i])i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, n) : f
        }, at.matches = function (e, t) {
            return at(e, null, null, t)
        }, at.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))try {
                var n = y.call(e, t);
                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (i) {
            }
            return at(t, f, null, [e]).length > 0
        }, at.contains = function (e, t) {
            return(e.ownerDocument || e) !== f && p(e), v(e, t)
        }, at.attr = function (e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }, at.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, at.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                while (t = e[o++])t === e[o] && (i = n.push(o));
                while (i--)e.splice(n[i], 1)
            }
            return e
        }, a = at.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += a(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r]; r++)n += a(t);
            return n
        }, o = at.selectors = {cacheLength: 50, createPseudo: lt, match: Q, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (e) {
            return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
        }, PSEUDO: function (e) {
            var n, r = !e[5] && e[2];
            return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
        }}, filter: {TAG: function (e) {
            var t = e.replace(rt, it).toLowerCase();
            return"*" === e ? function () {
                return!0
            } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
            }
        }, CLASS: function (e) {
            var t = N[e + " "];
            return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
            })
        }, ATTR: function (e, t, n) {
            return function (r) {
                var i = at.attr(r, e);
                return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
            }
        }, CHILD: function (e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
            return 1 === r && 0 === i ? function (e) {
                return!!e.parentNode
            } : function (t, n, l) {
                var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                if (m) {
                    if (o) {
                        while (g) {
                            p = t;
                            while (p = p[g])if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)return!1;
                            h = g = "only" === e && !h && "nextSibling"
                        }
                        return!0
                    }
                    if (h = [a ? m.firstChild : m.lastChild], a && v) {
                        c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                        while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if (1 === p.nodeType && ++f && p === t) {
                            c[e] = [T, d, f];
                            break
                        }
                    } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T)f = u[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t))break;
                    return f -= i, f === r || 0 === f % r && f / r >= 0
                }
            }
        }, PSEUDO: function (e, t) {
            var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
            return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
                var i, o = r(e, t), a = o.length;
                while (a--)i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
            }) : function (e) {
                return r(e, 0, n)
            }) : r
        }}, pseudos: {not: lt(function (e) {
            var t = [], n = [], r = l(e.replace(z, "$1"));
            return r[b] ? lt(function (e, t, n, i) {
                var o, a = r(e, null, i, []), s = e.length;
                while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
            }) : function (e, i, o) {
                return t[0] = e, r(t, null, o, n), !n.pop()
            }
        }), has: lt(function (e) {
            return function (t) {
                return at(e, t).length > 0
            }
        }), contains: lt(function (e) {
            return function (t) {
                return(t.textContent || t.innerText || a(t)).indexOf(e) > -1
            }
        }), lang: lt(function (e) {
            return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
                var n;
                do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                return!1
            }
        }), target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
        }, root: function (e) {
            return e === d
        }, focus: function (e) {
            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: function (e) {
            return e.disabled === !1
        }, disabled: function (e) {
            return e.disabled === !0
        }, checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return"input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        }, empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return!1;
            return!0
        }, parent: function (e) {
            return!o.pseudos.empty(e)
        }, header: function (e) {
            return tt.test(e.nodeName)
        }, input: function (e) {
            return et.test(e.nodeName)
        }, button: function (e) {
            var t = e.nodeName.toLowerCase();
            return"input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
            var t;
            return"input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
        }, first: ht(function () {
            return[0]
        }), last: ht(function (e, t) {
            return[t - 1]
        }), eq: ht(function (e, t, n) {
            return[0 > n ? n + t : n]
        }), even: ht(function (e, t) {
            var n = 0;
            for (; t > n; n += 2)e.push(n);
            return e
        }), odd: ht(function (e, t) {
            var n = 1;
            for (; t > n; n += 2)e.push(n);
            return e
        }), lt: ht(function (e, t, n) {
            var r = 0 > n ? n + t : n;
            for (; --r >= 0;)e.push(r);
            return e
        }), gt: ht(function (e, t, n) {
            var r = 0 > n ? n + t : n;
            for (; t > ++r;)e.push(r);
            return e
        })}}, o.pseudos.nth = o.pseudos.eq;
        for (n in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})o.pseudos[n] = ft(n);
        for (n in{submit: !0, reset: !0})o.pseudos[n] = dt(n);
        function gt() {
        }

        gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c)return t ? 0 : c.slice(0);
            s = e, l = [], u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({value: n, type: r[0].replace(z, " ")}), s = s.slice(n.length));
                for (a in o.filter)!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({value: n, type: a, matches: r}), s = s.slice(n.length));
                if (!n)break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }

        function yt(e) {
            var t = 0, n = e.length, r = "";
            for (; n > t; t++)r += e[t].value;
            return r
        }

        function vt(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, a = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r])if (1 === t.nodeType || o)return e(t, n, i)
            } : function (t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r])if ((1 === t.nodeType || o) && e(t, n, s))return!0
                } else while (t = t[r])if (1 === t.nodeType || o)if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                    if ((l = u[1]) === !0 || l === i)return l === !0
                } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0)return!0
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)if (!e[i](t, n, r))return!1;
                return!0
            } : e[0]
        }

        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) {
                    u = xt(y, d), r(u, [], s, l), c = u.length;
                    while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [], c = y.length;
                            while (c--)(p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }
                } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
            })
        }

        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) {
                return e === t
            }, s, !0), p = vt(function (e) {
                return F.call(t, e) > -1
            }, s, !0), f = [function (e, n, r) {
                return!a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }];
            for (; i > l; l++)if (n = o.relative[e[l].type])f = [vt(bt(f), n)]; else {
                if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                    for (r = ++l; i > r; r++)if (o.relative[e[r].type])break;
                    return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                }
                f.push(n)
            }
            return bt(f)
        }

        function Ct(e, t) {
            var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++])if (m(h, l, c)) {
                            p.push(h);
                            break
                        }
                        w && (T = k, i = ++n)
                    }
                    r && ((h = !m && h) && v--, s && x.push(h))
                }
                if (v += b, r && b !== v) {
                    g = 0;
                    while (m = t[g++])m(x, y, l, c);
                    if (s) {
                        if (v > 0)while (b--)x[b] || y[b] || (y[b] = q.call(p));
                        y = xt(y)
                    }
                    M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k, u = C), x
            };
            return r ? lt(s) : s
        }

        l = at.compile = function (e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)), n = t.length;
                while (n--)o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r))
            }
            return o
        };
        function Nt(e, t, n) {
            var r = 0, i = t.length;
            for (; i > r; r++)at(e, t[r], n);
            return n
        }

        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t)return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a], o.relative[c = u.type])break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && yt(s), !e)return M.apply(n, i), n;
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)), n
        }

        r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), ut(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function (e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), r.attributes && ut(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ct("value", function (e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), ut(function (e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function (e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
    }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    x.Callbacks = function (e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {add: function () {
            if (l) {
                var t = l.length;
                (function i(t) {
                    x.each(t, function (t, n) {
                        var r = x.type(n);
                        "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                    })
                })(arguments), n ? o = l.length : r && (s = t, c(r))
            }
            return this
        }, remove: function () {
            return l && x.each(arguments, function (e, t) {
                var r;
                while ((r = x.inArray(t, l, r)) > -1)l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
            }), this
        }, has: function (e) {
            return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
        }, empty: function () {
            return l = [], o = 0, this
        }, disable: function () {
            return l = u = r = t, this
        }, disabled: function () {
            return!l
        }, lock: function () {
            return u = t, r || p.disable(), this
        }, locked: function () {
            return!u
        }, fireWith: function (e, t) {
            return!l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
        }, fire: function () {
            return p.fireWith(this, arguments), this
        }, fired: function () {
            return!!i
        }};
        return p
    }, x.extend({Deferred: function (e) {
        var t = [
            ["resolve", "done", x.Callbacks("once memory"), "resolved"],
            ["reject", "fail", x.Callbacks("once memory"), "rejected"],
            ["notify", "progress", x.Callbacks("memory")]
        ], n = "pending", r = {state: function () {
            return n
        }, always: function () {
            return i.done(arguments).fail(arguments), this
        }, then: function () {
            var e = arguments;
            return x.Deferred(function (n) {
                x.each(t, function (t, o) {
                    var a = o[0], s = x.isFunction(e[t]) && e[t];
                    i[o[1]](function () {
                        var e = s && s.apply(this, arguments);
                        e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                    })
                }), e = null
            }).promise()
        }, promise: function (e) {
            return null != e ? x.extend(e, r) : r
        }}, i = {};
        return r.pipe = r.then, x.each(t, function (e, o) {
            var a = o[2], s = o[3];
            r[o[1]] = a.add, s && a.add(function () {
                n = s
            }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                return i[o[0] + "With"](this === i ? r : this, arguments), this
            }, i[o[0] + "With"] = a.fireWith
        }), r.promise(i), e && e.call(i, i), i
    }, when: function (e) {
        var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) {
            return function (r) {
                t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
            }
        }, s, l, u;
        if (r > 1)for (s = Array(r), l = Array(r), u = Array(r); r > t; t++)n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
        return i || o.resolveWith(u, n), o.promise()
    }}), x.support = function (t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length)return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in{submit: !0, change: !0, focusin: !0})d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t))break;
        return t.ownLast = "0" !== f, x(function () {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {zoom: 1} : {}, function () {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n)return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {toJSON: x.noop}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--)delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r))return
                }
                (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    x.extend({cache: {}, noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (e) {
        return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
    }, data: function (e, t, n) {
        return R(e, t, n)
    }, removeData: function (e, t) {
        return W(e, t)
    }, _data: function (e, t, n) {
        return R(e, t, n, !0)
    }, _removeData: function (e, t) {
        return W(e, t, !0)
    }, acceptData: function (e) {
        if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return!1;
        var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
        return!t || t !== !0 && e.getAttribute("classid") === t
    }}), x.fn.extend({data: function (e, n) {
        var r, i, o = null, a = 0, s = this[0];
        if (e === t) {
            if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                for (r = s.attributes; r.length > a; a++)i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                x._data(s, "parsedAttrs", !0)
            }
            return o
        }
        return"object" == typeof e ? this.each(function () {
            x.data(this, e)
        }) : arguments.length > 1 ? this.each(function () {
            x.data(this, e, n)
        }) : s ? $(s, e, x.data(s, e)) : null
    }, removeData: function (e) {
        return this.each(function () {
            x.removeData(this, e)
        })
    }});
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {
                }
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)return!1;
        return!0
    }

    x.extend({queue: function (e, n, r) {
        var i;
        return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
    }, dequeue: function (e, t) {
        t = t || "fx";
        var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () {
            x.dequeue(e, t)
        };
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
    }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return x._data(e, n) || x._data(e, n, {empty: x.Callbacks("once memory").add(function () {
            x._removeData(e, t + "queue"), x._removeData(e, n)
        })})
    }}), x.fn.extend({queue: function (e, n) {
        var r = 2;
        return"string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
            var t = x.queue(this, e, n);
            x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
        })
    }, dequeue: function (e) {
        return this.each(function () {
            x.dequeue(this, e)
        })
    }, delay: function (e, t) {
        return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
    }, promise: function (e, n) {
        var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () {
            --i || o.resolveWith(a, [a])
        };
        "string" != typeof e && (n = e, e = t), e = e || "fx";
        while (s--)r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
        return l(), o.promise(n)
    }});
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({attr: function (e, t) {
        return x.access(this, x.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
        return this.each(function () {
            x.removeAttr(this, e)
        })
    }, prop: function (e, t) {
        return x.access(this, x.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
        return e = x.propFix[e] || e, this.each(function () {
            try {
                this[e] = t, delete this[e]
            } catch (n) {
            }
        })
    }, addClass: function (e) {
        var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
        if (x.isFunction(e))return this.each(function (t) {
            x(this).addClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
            o = 0;
            while (i = t[o++])0 > r.indexOf(" " + i + " ") && (r += i + " ");
            n.className = x.trim(r)
        }
        return this
    }, removeClass: function (e) {
        var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
        if (x.isFunction(e))return this.each(function (t) {
            x(this).removeClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
            o = 0;
            while (i = t[o++])while (r.indexOf(" " + i + " ") >= 0)r = r.replace(" " + i + " ", " ");
            n.className = e ? x.trim(r) : ""
        }
        return this
    }, toggleClass: function (e, t) {
        var n = typeof e;
        return"boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
            x(this).toggleClass(e.call(this, n, this.className, t), t)
        }) : this.each(function () {
            if ("string" === n) {
                var t, r = 0, o = x(this), a = e.match(T) || [];
                while (t = a[r++])o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
            } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
        })
    }, hasClass: function (e) {
        var t = " " + e + " ", n = 0, r = this.length;
        for (; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0)return!0;
        return!1
    }, val: function (e) {
        var n, r, i, o = this[0];
        {
            if (arguments.length)return i = x.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
            });
            if (o)return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
        }
    }}), x.extend({valHooks: {option: {get: function (e) {
        var t = x.find.attr(e, "value");
        return null != t ? t : e.text
    }}, select: {get: function (e) {
        var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
        for (; s > l; l++)if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
            if (t = x(n).val(), o)return t;
            a.push(t)
        }
        return a
    }, set: function (e, t) {
        var n, r, i = e.options, o = x.makeArray(t), a = i.length;
        while (a--)r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
        return n || (e.selectedIndex = -1), o
    }}}, attr: function (e, n, r) {
        var o, a, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
    }, removeAttr: function (e, t) {
        var n, r, i = 0, o = t && t.match(T);
        if (o && 1 === e.nodeType)while (n = o[i++])r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
    }, attrHooks: {type: {set: function (e, t) {
        if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
        }
    }}}, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, r) {
        var i, o, a, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
    }, propHooks: {tabIndex: {get: function (e) {
        var t = x.find.attr(e, "tabindex");
        return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
    }}}}), X = {set: function (e, t, n) {
        return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
    }}, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
            var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function (e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {set: function (e, n, r) {
        return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
    }}), Q || (z = {set: function (e, n, r) {
        var i = e.getAttributeNode(r);
        return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
    }}, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {get: function (e, n) {
        var r = e.getAttributeNode(n);
        return r && r.specified ? r.value : t
    }, set: z.set}, x.attrHooks.contenteditable = {set: function (e, t, n) {
        z.set(e, "" === t ? !1 : t, n)
    }}, x.each(["width", "height"], function (e, n) {
        x.attrHooks[n] = {set: function (e, r) {
            return"" === r ? (e.setAttribute(n, "auto"), r) : t
        }}
    })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
        x.propHooks[t] = {get: function (e) {
            return e.getAttribute(t, 4)
        }}
    }), x.support.style || (x.attrHooks.style = {get: function (e) {
        return e.style.cssText || t
    }, set: function (e, t) {
        return e.style.cssText = t + ""
    }}), x.support.optSelected || (x.propHooks.selected = {get: function (e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
        x.valHooks[this] = {set: function (e, n) {
            return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
        }}, x.support.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return!0
    }

    function ot() {
        return!1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {
        }
    }

    x.event = {global: {}, add: function (e, n, r, o, a) {
        var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
        if (v) {
            r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
            }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
            while (u--)s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".")}, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
            e = null
        }
    }, remove: function (e, t, n, r, i) {
        var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
        if (m && (c = m.events)) {
            t = (t || "").match(T) || [""], u = t.length;
            while (u--)if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                while (o--)a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
            } else for (d in c)x.event.remove(e, d + t[u], n, r, !0);
            x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
        }
    }, trigger: function (n, r, i, o) {
        var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
        if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
            if (!o && !p.noBubble && !x.isWindow(i)) {
                for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)h.push(u), f = u;
                f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
            }
            d = 0;
            while ((u = h[d++]) && !n.isPropagationStopped())n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
            if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                f = i[l], f && (i[l] = null), x.event.triggered = g;
                try {
                    i[g]()
                } catch (y) {
                }
                x.event.triggered = t, f && (i[l] = f)
            }
            return n.result
        }
    }, dispatch: function (e) {
        e = x.event.fix(e);
        var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
        if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
            s = x.event.handlers.call(this, e, u), n = 0;
            while ((o = s[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = o.elem, a = 0;
                while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
            }
            return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
    }, handlers: function (e, n) {
        var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
        if (l && u.nodeType && (!e.button || "click" !== e.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
            for (o = [], a = 0; l > a; a++)i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
            o.length && s.push({elem: u, handlers: o})
        }
        return n.length > l && s.push({elem: this, handlers: n.slice(l)}), s
    }, fix: function (e) {
        if (e[x.expando])return e;
        var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
        s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
        while (t--)n = r[t], e[n] = o[n];
        return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) {
        var r, i, o, s = n.button, l = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
    }}, special: {load: {noBubble: !0}, focus: {trigger: function () {
        if (this !== at() && this.focus)try {
            return this.focus(), !1
        } catch (e) {
        }
    }, delegateType: "focusin"}, blur: {trigger: function () {
        return this === at() && this.blur ? (this.blur(), !1) : t
    }, delegateType: "focusout"}, click: {trigger: function () {
        return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
    }, _default: function (e) {
        return x.nodeName(e.target, "a")
    }}, beforeunload: {postDispatch: function (e) {
        e.result !== t && (e.originalEvent.returnValue = e.result)
    }}}, simulate: function (e, t, n, r) {
        var i = x.extend(new x.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
        r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }}, x.removeEvent = a.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function (e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    }, stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = it, this.stopPropagation()
    }}, x.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        x.event.special[e] = {delegateType: t, bindType: t, handle: function (e) {
            var n, r = this, i = e.relatedTarget, o = e.handleObj;
            return(!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }}
    }), x.support.submitBubbles || (x.event.special.submit = {setup: function () {
        return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
            var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
            r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
                e._submit_bubble = !0
            }), x._data(r, "submitBubbles", !0))
        }), t)
    }, postDispatch: function (e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
    }, teardown: function () {
        return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
    }}), x.support.changeBubbles || (x.event.special.change = {setup: function () {
        return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), x.event.add(this, "click._change", function (e) {
            this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
        })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
                !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
            }), x._data(t, "changeBubbles", !0))
        }), t)
    }, handle: function (e) {
        var n = e.target;
        return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
    }, teardown: function () {
        return x.event.remove(this, "._change"), !Z.test(this.nodeName)
    }}), x.support.focusinBubbles || x.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {setup: function () {
            0 === n++ && a.addEventListener(e, r, !0)
        }, teardown: function () {
            0 === --n && a.removeEventListener(e, r, !0)
        }}
    }), x.fn.extend({on: function (e, n, r, i, o) {
        var a, s;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = t);
            for (a in e)this.on(a, n, r, e[a], o);
            return this
        }
        if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)i = ot; else if (!i)return this;
        return 1 === o && (s = i, i = function (e) {
            return x().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
            x.event.add(this, e, i, r, n)
        })
    }, one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1)
    }, off: function (e, n, r) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
            for (o in e)this.off(o, n, e[o]);
            return this
        }
        return(n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
            x.event.remove(this, e, r, n)
        })
    }, trigger: function (e, t) {
        return this.each(function () {
            x.event.trigger(e, t, this)
        })
    }, triggerHandler: function (e, n) {
        var r = this[0];
        return r ? x.event.trigger(e, n, r, !0) : t
    }});
    var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = {children: !0, contents: !0, next: !0, prev: !0};
    x.fn.extend({find: function (e) {
        var t, n = [], r = this, i = r.length;
        if ("string" != typeof e)return this.pushStack(x(e).filter(function () {
            for (t = 0; i > t; t++)if (x.contains(r[t], this))return!0
        }));
        for (t = 0; i > t; t++)x.find(e, r[t], n);
        return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
    }, has: function (e) {
        var t, n = x(e, this), r = n.length;
        return this.filter(function () {
            for (t = 0; r > t; t++)if (x.contains(this, n[t]))return!0
        })
    }, not: function (e) {
        return this.pushStack(ft(this, e || [], !0))
    }, filter: function (e) {
        return this.pushStack(ft(this, e || [], !1))
    }, is: function (e) {
        return!!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
    }, closest: function (e, t) {
        var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
        for (; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);
            break
        }
        return this.pushStack(o.length > 1 ? x.unique(o) : o)
    }, index: function (e) {
        return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
        var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
        return this.pushStack(x.unique(r))
    }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }});
    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    x.each({parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
        return x.dir(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
        return x.dir(e, "parentNode", n)
    }, next: function (e) {
        return pt(e, "nextSibling")
    }, prev: function (e) {
        return pt(e, "previousSibling")
    }, nextAll: function (e) {
        return x.dir(e, "nextSibling")
    }, prevAll: function (e) {
        return x.dir(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
        return x.dir(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
        return x.dir(e, "previousSibling", n)
    }, siblings: function (e) {
        return x.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
        return x.sibling(e.firstChild)
    }, contents: function (e) {
        return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
    }}, function (e, t) {
        x.fn[e] = function (n, r) {
            var i = x.map(this, t, n);
            return"Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({filter: function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, dir: function (e, n, r) {
        var i = [], o = e[n];
        while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))1 === o.nodeType && i.push(o), o = o[n];
        return i
    }, sibling: function (e, t) {
        var n = [];
        for (; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }});
    function ft(e, t, n) {
        if (x.isFunction(t))return x.grep(e, function (e, r) {
            return!!t.call(e, r, e) !== n
        });
        if (t.nodeType)return x.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t))return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function (e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement)while (t.length)n.createElement(t.pop());
        return n
    }

    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, jt = dt(a), Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({text: function (e) {
        return x.access(this, function (e) {
            return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
        }, null, e, arguments.length)
    }, append: function () {
        return this.domManip(arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Lt(this, e);
                t.appendChild(e)
            }
        })
    }, prepend: function () {
        return this.domManip(arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Lt(this, e);
                t.insertBefore(e, t.firstChild)
            }
        })
    }, before: function () {
        return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
        })
    }, after: function () {
        return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
    }, remove: function (e, t) {
        var n, r = e ? x.filter(e, this) : this, i = 0;
        for (; null != (n = r[i]); i++)t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
        return this
    }, empty: function () {
        var e, t = 0;
        for (; null != (e = this[t]); t++) {
            1 === e.nodeType && x.cleanData(Ft(e, !1));
            while (e.firstChild)e.removeChild(e.firstChild);
            e.options && x.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
    }, clone: function (e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
            return x.clone(this, e, t)
        })
    }, html: function (e) {
        return x.access(this, function (e) {
            var n = this[0] || {}, r = 0, i = this.length;
            if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
            if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                e = e.replace(vt, "<$1></$2>");
                try {
                    for (; i > r; r++)n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                    n = 0
                } catch (o) {
                }
            }
            n && this.empty().append(e)
        }, null, e, arguments.length)
    }, replaceWith: function () {
        var e = x.map(this, function (e) {
            return[e.nextSibling, e.parentNode]
        }), t = 0;
        return this.domManip(arguments, function (n) {
            var r = e[t++], i = e[t++];
            i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
        }, !0), t ? this : this.remove()
    }, detach: function (e) {
        return this.remove(e, !0)
    }, domManip: function (e, t, n) {
        e = d.apply([], e);
        var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
        if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h))return this.each(function (r) {
            var i = p.eq(r);
            g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
        });
        if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
            for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++)i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
            if (o)for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++)i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
            l = r = null
        }
        return this
    }});
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++)x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (r = 0, i = s[n].length; i > r; r++)x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events)x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    x.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
        x.fn[e] = function (e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++)n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }

    x.extend({clone: function (e, t, n) {
        var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
        if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a)r[a] && Ot(i, r[a]);
        if (t)if (n)for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++)Mt(i, r[a]); else Mt(e, o);
        return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
    }, buildFragment: function (e, t, n, r) {
        var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
        for (; p > h; h++)if (o = e[h], o || 0 === o)if ("object" === x.type(o))x.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
            s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
            while (i--)s = s.lastChild;
            if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                while (i--)x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
            }
            x.merge(d, s.childNodes), s.textContent = "";
            while (s.firstChild)s.removeChild(s.firstChild);
            s = f.lastChild
        } else d.push(t.createTextNode(o));
        s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
        while (o = d[h++])if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
            i = 0;
            while (o = s[i++])kt.test(o.type || "") && n.push(o)
        }
        return s = null, f
    }, cleanData: function (e, t) {
        var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
        for (; null != (n = e[s]); s++)if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
            if (a.events)for (r in a.events)f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
            u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
        }
    }, _evalUrl: function (e) {
        return x.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }}), x.fn.extend({wrapAll: function (e) {
        if (x.isFunction(e))return this.each(function (t) {
            x(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
            var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstChild && 1 === e.firstChild.nodeType)e = e.firstChild;
                return e
            }).append(this)
        }
        return this
    }, wrapInner: function (e) {
        return x.isFunction(e) ? this.each(function (t) {
            x(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
            var t = x(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
        })
    }, wrap: function (e) {
        var t = x.isFunction(e);
        return this.each(function (n) {
            x(this).wrapAll(t ? e.call(this, n) : e)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
        }).end()
    }});
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {BODY: "block"}, Qt = {position: "absolute", visibility: "hidden", display: "block"}, Kt = {letterSpacing: 0, fontWeight: 400}, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e)return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--)if (t = en[i] + n, t in e)return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++)r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    x.fn.extend({css: function (e, n) {
        return x.access(this, function (e, n, r) {
            var i, o, a = {}, s = 0;
            if (x.isArray(n)) {
                for (o = Rt(e), i = n.length; i > s; s++)a[n[s]] = x.css(e, n[s], !1, o);
                return a
            }
            return r !== t ? x.style(e, n, r) : x.css(e, n)
        }, e, n, arguments.length > 1)
    }, show: function () {
        return rn(this, !0)
    }, hide: function () {
        return rn(this)
    }, toggle: function (e) {
        return"boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            nn(this) ? x(this).show() : x(this).hide()
        })
    }}), x.extend({cssHooks: {opacity: {get: function (e, t) {
        if (t) {
            var n = Wt(e, "opacity");
            return"" === n ? "1" : n
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": x.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (e, n, r, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o, a, s, l = x.camelCase(n), u = e.style;
            if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t)return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
            if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set"in s && (r = s.set(e, r, i)) === t)))try {
                u[n] = r
            } catch (c) {
            }
        }
    }, css: function (e, n, r, i) {
        var o, a, s, l = x.camelCase(n);
        return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get"in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
    }}), e.getComputedStyle ? (Rt = function (t) {
        return e.getComputedStyle(t, null)
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function (e) {
        return e.currentStyle
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (; 4 > o; o += 2)"margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i))return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a, n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r
    }

    x.each(["height", "width"], function (e, n) {
        x.cssHooks[n] = {get: function (e, r, i) {
            return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
                return sn(e, n, i)
            }) : sn(e, n, i) : t
        }, set: function (e, t, r) {
            var i = r && Rt(e);
            return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
        }}
    }), x.support.opacity || (x.cssHooks.opacity = {get: function (e, t) {
        return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    }, set: function (e, t) {
        var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
        n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
    }}), x(function () {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {get: function (e, n) {
            return n ? x.swap(e, {display: "inline-block"}, Wt, [e, "marginRight"]) : t
        }}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
            x.cssHooks[n] = {get: function (e, r) {
                return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
            }}
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function (e) {
        return!x.expr.filters.hidden(e)
    }), x.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        x.cssHooks[e + t] = {expand: function (n) {
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            for (; 4 > r; r++)i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
            return i
        }}, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({serialize: function () {
        return x.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var e = x.prop(this, "elements");
            return e ? x.makeArray(e) : this
        }).filter(function () {
            var e = this.type;
            return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
        }).map(function (e, t) {
            var n = x(this).val();
            return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
                return{name: t.name, value: e.replace(fn, "\r\n")}
            }) : {name: t.name, value: n.replace(fn, "\r\n")}
        }).get()
    }}), x.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))x.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e)gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t))x.each(t, function (t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== x.type(t))r(e, t); else for (i in t)gn(e + "[" + i + "]", t[i], n, r)
    }

    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        x.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    }, bind: function (e, t, n) {
        return this.on(e, null, t, n)
    }, unbind: function (e, t) {
        return this.off(e, null, t)
    }, delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
    }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }});
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))while (r = o[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {}, a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function (e, l) {
                var c = l(n, r, i);
                return"string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }

        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n)n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }

    x.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn)return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({url: e, type: a, dataType: "html", data: n}).done(function (e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), x.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (e, t) {
        return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
    }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function (e, n) {
        "object" == typeof e && (n = e, e = t), n = n || {};
        var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {readyState: 0, getResponseHeader: function (e) {
            var t;
            if (2 === b) {
                if (!c) {
                    c = {};
                    while (t = Tn.exec(a))c[t[1].toLowerCase()] = t[2]
                }
                t = c[e.toLowerCase()]
            }
            return null == t ? null : t
        }, getAllResponseHeaders: function () {
            return 2 === b ? a : null
        }, setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return b || (e = v[n] = v[n] || e, y[e] = t), this
        }, overrideMimeType: function (e) {
            return b || (p.mimeType = e), this
        }, statusCode: function (e) {
            var t;
            if (e)if (2 > b)for (t in e)m[t] = [m[t], e[t]]; else C.always(e[C.status]);
            return this
        }, abort: function (e) {
            var t = e || w;
            return u && u.abort(t), k(0, t), this
        }};
        if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b)return C;
        l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
        for (i in p.headers)C.setRequestHeader(i, p.headers[i]);
        if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))return C.abort();
        w = "abort";
        for (i in{success: 1, error: 1, complete: 1})C[i](p[i]);
        if (u = qn(jn, p, n, C)) {
            C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                C.abort("timeout")
            }, p.timeout));
            try {
                b = 1, u.send(y, k)
            } catch (N) {
                if (!(2 > b))throw N;
                k(-1, N)
            }
        } else k(-1, "No Transport");
        function k(e, n, r, i) {
            var c, y, v, w, T, N = n;
            2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
        }

        return C
    }, getJSON: function (e, t, n) {
        return x.get(e, t, n, "json")
    }, getScript: function (e, n) {
        return x.get(e, t, n, "script")
    }}), x.each(["get", "post"], function (e, n) {
        x[n] = function (e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({url: e, type: n, dataType: o, data: r, success: i})
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0])u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)for (s in l)if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break
        }
        if (u[0]in r)a = u[0]; else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])for (a in e.converters)u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)for (i in u)if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0)if (a && e["throws"])t = a(t); else try {
                t = a(t)
            } catch (p) {
                return{state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o}
            }
        }
        return{state: "success", data: t}
    }

    x.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (e) {
        return x.globalEval(e), e
    }}}), x.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return{send: function (t, i) {
                n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                    (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                }, r.insertBefore(n, r.firstChild)
            }, abort: function () {
                n && n.onload(t, !0)
            }}
        }
    });
    var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var e = Fn.pop() || x.expando + "_" + vn++;
        return this[e] = !0, e
    }}), x.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () {
        var e;
        for (e in Pn)Pn[e](t, !0)
    };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    x.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return!this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials"in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return{send: function (i, o) {
                var a, s, l = n.xhr();
                if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)l[s] = n.xhrFields[s];
                n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (s in i)l.setRequestHeader(s, i[s])
                } catch (u) {
                }
                l.send(n.hasContent && n.data || null), r = function (e, i) {
                    var s, u, c, p;
                    try {
                        if (r && (i || 4 === l.readyState))if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i)4 !== l.readyState && l.abort(); else {
                            p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                            try {
                                c = l.statusText
                            } catch (f) {
                                c = ""
                            }
                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                        }
                    } catch (d) {
                        i || o(-1, d)
                    }
                    p && o(s, c, p, u)
                }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
            }, abort: function () {
                r && r(t, !0)
            }}
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {"*": [function (e, t) {
        var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20;
        if (a && a[3] !== o) {
            o = o || a[3], i = i || [], a = +r || 1;
            do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
        }
        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
    }]};

    function Kn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++)if (r = i[o].call(n, t, e))return r
    }

    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i)return!1;
            var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length;
            for (; l > a; a++)u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({elem: e, props: x.extend({}, t), opts: x.extend(!0, {specialEasing: {}}, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function (t, n) {
            var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(r), r
        }, stop: function (t) {
            var n = 0, r = t ? u.tweens.length : 0;
            if (i)return this;
            for (i = !0; r > n; n++)u.tweens[n].run(1);
            return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
        }}), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)if (r = Gn[o].call(u, e, c, u.opts))return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {elem: e, anim: u, queue: u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand"in a) {
            o = a.expand(o), delete e[r];
            for (n in o)n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    x.Animation = x.extend(er, {tweener: function (e, t) {
        x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        var n, r = 0, i = e.length;
        for (; i > r; r++)n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
    }, prefilter: function (e, t) {
        t ? Gn.unshift(e) : Gn.push(e)
    }});
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], Vn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show"))continue;
            c[r] = d && d[r] || x.style(e, r)
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
                x(e).hide()
            }), u.done(function () {
                var t;
                x._removeData(e, "fxshow");
                for (t in c)x.style(e, t, c[t])
            });
            for (r in c)a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    x.Tween = rr, rr.prototype = {constructor: rr, init: function (e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
    }, cur: function () {
        var e = rr.propHooks[this.prop];
        return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
    }, run: function (e) {
        var t, n = rr.propHooks[this.prop];
        return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
    }}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {_default: {get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
    }, set: function (e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
    }}}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }}, x.each(["toggle", "show", "hide"], function (e, t) {
        var n = x.fn[t];
        x.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({fadeTo: function (e, t, n, r) {
        return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    }, animate: function (e, t, n, r) {
        var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () {
            var t = er(this, x.extend({}, e), o);
            (i || x._data(this, "finish")) && t.stop(!0)
        };
        return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
    }, stop: function (e, n, r) {
        var i = function (e) {
            var t = e.stop;
            delete e.stop, t(r)
        };
        return"string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
            var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this);
            if (n)a[n] && a[n].stop && i(a[n]); else for (n in a)a[n] && a[n].stop && Jn.test(n) && i(a[n]);
            for (n = o.length; n--;)o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
            (t || !r) && x.dequeue(this, e)
        })
    }, finish: function (e) {
        return e !== !1 && (e = e || "fx"), this.each(function () {
            var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
            for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
        })
    }});
    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    x.each({slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
        x.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t};
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {linear: function (e) {
        return e
    }, swing: function (e) {
        return.5 - Math.cos(e * Math.PI) / 2
    }}, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++)e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function (e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function () {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function () {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {slow: 600, fast: 200, _default: 400}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
        return x.grep(x.timers,function (t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {top: 0, left: 0}, a = this[0], s = a && a.ownerDocument;
        if (s)return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)}) : o
    }, x.offset = {setOffset: function (e, t, n) {
        var r = x.css(e, "position");
        "static" === r && (e.style.position = "relative");
        var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
        l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using"in t ? t.using.call(e, u) : i.css(u)
    }}, x.fn.extend({position: function () {
        if (this[0]) {
            var e, t, n = {top: 0, left: 0}, r = this[0];
            return"fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            var e = this.offsetParent || s;
            while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))e = e.offsetParent;
            return e || s
        })
    }}), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function (i) {
            return x.access(this, function (e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    x.each({Height: "height", Width: "width"}, function (e, n) {
        x.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            x.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function (n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function () {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
        return x
    }))
})(window);

/*
 AngularJS v1.0.7
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (P, T, q) {
    'use strict';
    function m(b, a, c) {
        var d;
        if (b)if (H(b))for (d in b)d != "prototype" && d != "length" && d != "name" && b.hasOwnProperty(d) && a.call(c, b[d], d); else if (b.forEach && b.forEach !== m)b.forEach(a, c); else if (!b || typeof b.length !== "number" ? 0 : typeof b.hasOwnProperty != "function" && typeof b.constructor != "function" || b instanceof K || ca && b instanceof ca || wa.call(b) !== "[object Object]" || typeof b.callee === "function")for (d = 0; d < b.length; d++)a.call(c, b[d], d); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d],
            d);
        return b
    }

    function mb(b) {
        var a = [], c;
        for (c in b)b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }

    function fc(b, a, c) {
        for (var d = mb(b), e = 0; e < d.length; e++)a.call(c, b[d[e]], d[e]);
        return d
    }

    function nb(b) {
        return function (a, c) {
            b(c, a)
        }
    }

    function xa() {
        for (var b = aa.length, a; b;) {
            b--;
            a = aa[b].charCodeAt(0);
            if (a == 57)return aa[b] = "A", aa.join("");
            if (a == 90)aa[b] = "0"; else return aa[b] = String.fromCharCode(a + 1), aa.join("")
        }
        aa.unshift("0");
        return aa.join("")
    }

    function ob(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function v(b) {
        var a =
            b.$$hashKey;
        m(arguments, function (a) {
            a !== b && m(a, function (a, c) {
                b[c] = a
            })
        });
        ob(b, a);
        return b
    }

    function G(b) {
        return parseInt(b, 10)
    }

    function ya(b, a) {
        return v(new (v(function () {
        }, {prototype: b})), a)
    }

    function C() {
    }

    function ma(b) {
        return b
    }

    function I(b) {
        return function () {
            return b
        }
    }

    function w(b) {
        return typeof b == "undefined"
    }

    function y(b) {
        return typeof b != "undefined"
    }

    function L(b) {
        return b != null && typeof b == "object"
    }

    function B(b) {
        return typeof b == "string"
    }

    function Qa(b) {
        return typeof b == "number"
    }

    function na(b) {
        return wa.apply(b) ==
            "[object Date]"
    }

    function E(b) {
        return wa.apply(b) == "[object Array]"
    }

    function H(b) {
        return typeof b == "function"
    }

    function oa(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }

    function Q(b) {
        return B(b) ? b.replace(/^\s*/, "").replace(/\s*$/, "") : b
    }

    function gc(b) {
        return b && (b.nodeName || b.bind && b.find)
    }

    function Ra(b, a, c) {
        var d = [];
        m(b, function (b, g, h) {
            d.push(a.call(c, b, g, h))
        });
        return d
    }

    function za(b, a) {
        if (b.indexOf)return b.indexOf(a);
        for (var c = 0; c < b.length; c++)if (a === b[c])return c;
        return-1
    }

    function Sa(b, a) {
        var c = za(b, a);
        c >= 0 && b.splice(c, 1);
        return a
    }

    function U(b, a) {
        if (oa(b) || b && b.$evalAsync && b.$watch)throw Error("Can't copy Window or Scope");
        if (a) {
            if (b === a)throw Error("Can't copy equivalent objects or arrays");
            if (E(b))for (var c = a.length = 0; c < b.length; c++)a.push(U(b[c])); else {
                c = a.$$hashKey;
                m(a, function (b, c) {
                    delete a[c]
                });
                for (var d in b)a[d] = U(b[d]);
                ob(a, c)
            }
        } else(a = b) && (E(b) ? a = U(b, []) : na(b) ? a = new Date(b.getTime()) : L(b) && (a = U(b, {})));
        return a
    }

    function hc(b, a) {
        var a = a || {}, c;
        for (c in b)b.hasOwnProperty(c) &&
            c.substr(0, 2) !== "$$" && (a[c] = b[c]);
        return a
    }

    function fa(b, a) {
        if (b === a)return!0;
        if (b === null || a === null)return!1;
        if (b !== b && a !== a)return!0;
        var c = typeof b, d;
        if (c == typeof a && c == "object")if (E(b)) {
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++)if (!fa(b[d], a[d]))return!1;
                return!0
            }
        } else if (na(b))return na(a) && b.getTime() == a.getTime(); else {
            if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || oa(b) || oa(a))return!1;
            c = {};
            for (d in b)if (!(d.charAt(0) === "$" || H(b[d]))) {
                if (!fa(b[d], a[d]))return!1;
                c[d] = !0
            }
            for (d in a)if (!c[d] &&
                d.charAt(0) !== "$" && a[d] !== q && !H(a[d]))return!1;
            return!0
        }
        return!1
    }

    function Ta(b, a) {
        var c = arguments.length > 2 ? ha.call(arguments, 2) : [];
        return H(a) && !(a instanceof RegExp) ? c.length ? function () {
            return arguments.length ? a.apply(b, c.concat(ha.call(arguments, 0))) : a.apply(b, c)
        } : function () {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        } : a
    }

    function ic(b, a) {
        var c = a;
        /^\$+/.test(b) ? c = q : oa(a) ? c = "$WINDOW" : a && T === a ? c = "$DOCUMENT" : a && a.$evalAsync && a.$watch && (c = "$SCOPE");
        return c
    }

    function da(b, a) {
        return JSON.stringify(b,
            ic, a ? "  " : null)
    }

    function pb(b) {
        return B(b) ? JSON.parse(b) : b
    }

    function Ua(b) {
        b && b.length !== 0 ? (b = z("" + b), b = !(b == "f" || b == "0" || b == "false" || b == "no" || b == "n" || b == "[]")) : b = !1;
        return b
    }

    function pa(b) {
        b = u(b).clone();
        try {
            b.html("")
        } catch (a) {
        }
        var c = u("<div>").append(b).html();
        try {
            return b[0].nodeType === 3 ? z(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return"<" + z(b)
            })
        } catch (d) {
            return z(c)
        }
    }

    function Va(b) {
        var a = {}, c, d;
        m((b || "").split("&"), function (b) {
            b && (c = b.split("="), d = decodeURIComponent(c[0]),
                a[d] = y(c[1]) ? decodeURIComponent(c[1]) : !0)
        });
        return a
    }

    function qb(b) {
        var a = [];
        m(b, function (b, d) {
            a.push(Wa(d, !0) + (b === !0 ? "" : "=" + Wa(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function Xa(b) {
        return Wa(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Wa(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
    }

    function jc(b, a) {
        function c(a) {
            a && d.push(a)
        }

        var d = [b], e, g, h = ["ng:app", "ng-app", "x-ng-app",
            "data-ng-app"], f = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        m(h, function (a) {
            h[a] = !0;
            c(T.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (m(b.querySelectorAll("." + a), c), m(b.querySelectorAll("." + a + "\\:"), c), m(b.querySelectorAll("[" + a + "]"), c))
        });
        m(d, function (a) {
            if (!e) {
                var b = f.exec(" " + a.className + " ");
                b ? (e = a, g = (b[2] || "").replace(/\s+/g, ",")) : m(a.attributes, function (b) {
                    if (!e && h[b.name])e = a, g = b.value
                })
            }
        });
        e && a(e, g ? [g] : [])
    }

    function rb(b, a) {
        var c = function () {
            b = u(b);
            a = a || [];
            a.unshift(["$provide", function (a) {
                a.value("$rootElement",
                    b)
            }]);
            a.unshift("ng");
            var c = sb(a);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d);
                    c(b)(a)
                })
            }]);
            return c
        }, d = /^NG_DEFER_BOOTSTRAP!/;
        if (P && !d.test(P.name))return c();
        P.name = P.name.replace(d, "");
        Ya.resumeBootstrap = function (b) {
            m(b, function (b) {
                a.push(b)
            });
            c()
        }
    }

    function Za(b, a) {
        a = a || "_";
        return b.replace(kc, function (b, d) {
            return(d ? a : "") + b.toLowerCase()
        })
    }

    function $a(b, a, c) {
        if (!b)throw Error("Argument '" + (a || "?") + "' is " + (c || "required"));
        return b
    }

    function qa(b, a, c) {
        c && E(b) && (b = b[b.length - 1]);
        $a(H(b), a, "not a function, got " + (b && typeof b == "object" ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function lc(b) {
        function a(a, b, e) {
            return a[b] || (a[b] = e())
        }

        return a(a(b, "angular", Object), "module", function () {
            var b = {};
            return function (d, e, g) {
                e && b.hasOwnProperty(d) && (b[d] = null);
                return a(b, d, function () {
                    function a(c, d, e) {
                        return function () {
                            b[e || "push"]([c, d, arguments]);
                            return k
                        }
                    }

                    if (!e)throw Error("No module: " + d);
                    var b = [], c = [], j = a("$injector",
                        "invoke"), k = {_invokeQueue: b, _runBlocks: c, requires: e, name: d, provider: a("$provide", "provider"), factory: a("$provide", "factory"), service: a("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), filter: a("$filterProvider", "register"), controller: a("$controllerProvider", "register"), directive: a("$compileProvider", "directive"), config: j, run: function (a) {
                        c.push(a);
                        return this
                    }};
                    g && j(g);
                    return k
                })
            }
        })
    }

    function tb(b) {
        return b.replace(mc,function (a, b, d, e) {
            return e ? d.toUpperCase() :
                d
        }).replace(nc, "Moz$1")
    }

    function ab(b, a) {
        function c() {
            var e;
            for (var b = [this], c = a, h, f, i, j, k, l; b.length;) {
                h = b.shift();
                f = 0;
                for (i = h.length; f < i; f++) {
                    j = u(h[f]);
                    c ? j.triggerHandler("$destroy") : c = !c;
                    k = 0;
                    for (e = (l = j.children()).length, j = e; k < j; k++)b.push(ca(l[k]))
                }
            }
            return d.apply(this, arguments)
        }

        var d = ca.fn[b], d = d.$original || d;
        c.$original = d;
        ca.fn[b] = c
    }

    function K(b) {
        if (b instanceof K)return b;
        if (!(this instanceof K)) {
            if (B(b) && b.charAt(0) != "<")throw Error("selectors not implemented");
            return new K(b)
        }
        if (B(b)) {
            var a =
                T.createElement("div");
            a.innerHTML = "<div>&#160;</div>" + b;
            a.removeChild(a.firstChild);
            bb(this, a.childNodes);
            this.remove()
        } else bb(this, b)
    }

    function cb(b) {
        return b.cloneNode(!0)
    }

    function ra(b) {
        ub(b);
        for (var a = 0, b = b.childNodes || []; a < b.length; a++)ra(b[a])
    }

    function vb(b, a, c) {
        var d = ba(b, "events");
        ba(b, "handle") && (w(a) ? m(d, function (a, c) {
            db(b, c, a);
            delete d[c]
        }) : w(c) ? (db(b, a, d[a]), delete d[a]) : Sa(d[a], c))
    }

    function ub(b) {
        var a = b[Aa], c = Ba[a];
        c && (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), vb(b)), delete Ba[a],
            b[Aa] = q)
    }

    function ba(b, a, c) {
        var d = b[Aa], d = Ba[d || -1];
        if (y(c))d || (b[Aa] = d = ++oc, d = Ba[d] = {}), d[a] = c; else return d && d[a]
    }

    function wb(b, a, c) {
        var d = ba(b, "data"), e = y(c), g = !e && y(a), h = g && !L(a);
        !d && !h && ba(b, "data", d = {});
        if (e)d[a] = c; else if (g)if (h)return d && d[a]; else v(d, a); else return d
    }

    function Ca(b, a) {
        return(" " + b.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") > -1
    }

    function xb(b, a) {
        a && m(a.split(" "), function (a) {
            b.className = Q((" " + b.className + " ").replace(/[\n\t]/g, " ").replace(" " + Q(a) + " ", " "))
        })
    }

    function yb(b, a) {
        a && m(a.split(" "), function (a) {
            if (!Ca(b, a))b.className = Q(b.className + " " + Q(a))
        })
    }

    function bb(b, a) {
        if (a)for (var a = !a.nodeName && y(a.length) && !oa(a) ? a : [a], c = 0; c < a.length; c++)b.push(a[c])
    }

    function zb(b, a) {
        return Da(b, "$" + (a || "ngController") + "Controller")
    }

    function Da(b, a, c) {
        b = u(b);
        for (b[0].nodeType == 9 && (b = b.find("html")); b.length;) {
            if (c = b.data(a))return c;
            b = b.parent()
        }
    }

    function Ab(b, a) {
        var c = Ea[a.toLowerCase()];
        return c && Bb[b.nodeName] && c
    }

    function pc(b, a) {
        var c = function (c, e) {
            if (!c.preventDefault)c.preventDefault =
                function () {
                    c.returnValue = !1
                };
            if (!c.stopPropagation)c.stopPropagation = function () {
                c.cancelBubble = !0
            };
            if (!c.target)c.target = c.srcElement || T;
            if (w(c.defaultPrevented)) {
                var g = c.preventDefault;
                c.preventDefault = function () {
                    c.defaultPrevented = !0;
                    g.call(c)
                };
                c.defaultPrevented = !1
            }
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            m(a[e || c.type], function (a) {
                a.call(b, c)
            });
            Z <= 8 ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
        };
        c.elem = b;
        return c
    }

    function ga(b) {
        var a = typeof b, c;
        if (a == "object" && b !== null)if (typeof(c = b.$$hashKey) == "function")c = b.$$hashKey(); else {
            if (c === q)c = b.$$hashKey = xa()
        } else c = b;
        return a + ":" + c
    }

    function Fa(b) {
        m(b, this.put, this)
    }

    function eb() {
    }

    function Cb(b) {
        var a, c;
        if (typeof b == "function") {
            if (!(a = b.$inject))a = [], c = b.toString().replace(qc, ""), c = c.match(rc), m(c[1].split(sc), function (b) {
                b.replace(tc, function (b, c, d) {
                    a.push(d)
                })
            }), b.$inject = a
        } else E(b) ? (c = b.length - 1, qa(b[c], "fn"), a = b.slice(0, c)) : qa(b, "fn", !0);
        return a
    }

    function sb(b) {
        function a(a) {
            return function (b, c) {
                if (L(b))m(b, nb(a)); else return a(b, c)
            }
        }

        function c(a, b) {
            if (H(b) || E(b))b = l.instantiate(b);
            if (!b.$get)throw Error("Provider " + a + " must define $get factory method.");
            return k[a + f] = b
        }

        function d(a, b) {
            return c(a, {$get: b})
        }

        function e(a) {
            var b = [];
            m(a, function (a) {
                if (!j.get(a))if (j.put(a, !0), B(a)) {
                    var c = sa(a);
                    b = b.concat(e(c.requires)).concat(c._runBlocks);
                    try {
                        for (var d = c._invokeQueue, c = 0, f = d.length; c < f; c++) {
                            var g = d[c], h = g[0] == "$injector" ? l : l.get(g[0]);
                            h[g[1]].apply(h, g[2])
                        }
                    } catch (p) {
                        throw p.message && (p.message += " from " + a), p;
                    }
                } else if (H(a))try {
                    b.push(l.invoke(a))
                } catch (i) {
                    throw i.message && (i.message += " from " + a), i;
                } else if (E(a))try {
                    b.push(l.invoke(a))
                } catch (o) {
                    throw o.message && (o.message += " from " + String(a[a.length - 1])), o;
                } else qa(a, "module")
            });
            return b
        }

        function g(a, b) {
            function c(d) {
                if (typeof d !== "string")throw Error("Service name expected");
                if (a.hasOwnProperty(d)) {
                    if (a[d] === h)throw Error("Circular dependency: " + i.join(" <- "));
                    return a[d]
                } else try {
                    return i.unshift(d),
                        a[d] = h, a[d] = b(d)
                } finally {
                    i.shift()
                }
            }

            function d(a, b, e) {
                var f = [], j = Cb(a), g, h, i;
                h = 0;
                for (g = j.length; h < g; h++)i = j[h], f.push(e && e.hasOwnProperty(i) ? e[i] : c(i));
                a.$inject || (a = a[g]);
                switch (b ? -1 : f.length) {
                    case 0:
                        return a();
                    case 1:
                        return a(f[0]);
                    case 2:
                        return a(f[0], f[1]);
                    case 3:
                        return a(f[0], f[1], f[2]);
                    case 4:
                        return a(f[0], f[1], f[2], f[3]);
                    case 5:
                        return a(f[0], f[1], f[2], f[3], f[4]);
                    case 6:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5]);
                    case 7:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6]);
                    case 8:
                        return a(f[0], f[1], f[2],
                            f[3], f[4], f[5], f[6], f[7]);
                    case 9:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]);
                    case 10:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9]);
                    default:
                        return a.apply(b, f)
                }
            }

            return{invoke: d, instantiate: function (a, b) {
                var c = function () {
                }, e;
                c.prototype = (E(a) ? a[a.length - 1] : a).prototype;
                c = new c;
                e = d(a, c, b);
                return L(e) ? e : c
            }, get: c, annotate: Cb}
        }

        var h = {}, f = "Provider", i = [], j = new Fa, k = {$provide: {provider: a(c), factory: a(d), service: a(function (a, b) {
            return d(a, ["$injector", function (a) {
                return a.instantiate(b)
            }])
        }),
            value: a(function (a, b) {
                return d(a, I(b))
            }), constant: a(function (a, b) {
                k[a] = b;
                n[a] = b
            }), decorator: function (a, b) {
                var c = l.get(a + f), d = c.$get;
                c.$get = function () {
                    var a = o.invoke(d, c);
                    return o.invoke(b, null, {$delegate: a})
                }
            }}}, l = g(k, function () {
            throw Error("Unknown provider: " + i.join(" <- "));
        }), n = {}, o = n.$injector = g(n, function (a) {
            a = l.get(a + f);
            return o.invoke(a.$get, a)
        });
        m(e(b), function (a) {
            o.invoke(a || C)
        });
        return o
    }

    function uc() {
        var b = !0;
        this.disableAutoScrolling = function () {
            b = !1
        };
        this.$get = ["$window", "$location",
            "$rootScope", function (a, c, d) {
                function e(a) {
                    var b = null;
                    m(a, function (a) {
                        !b && z(a.nodeName) === "a" && (b = a)
                    });
                    return b
                }

                function g() {
                    var b = c.hash(), d;
                    b ? (d = h.getElementById(b)) ? d.scrollIntoView() : (d = e(h.getElementsByName(b))) ? d.scrollIntoView() : b === "top" && a.scrollTo(0, 0) : a.scrollTo(0, 0)
                }

                var h = a.document;
                b && d.$watch(function () {
                    return c.hash()
                }, function () {
                    d.$evalAsync(g)
                });
                return g
            }]
    }

    function vc(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, ha.call(arguments, 1))
            } finally {
                if (p--, p === 0)for (; s.length;)try {
                    s.pop()()
                } catch (b) {
                    c.error(b)
                }
            }
        }

        function g(a, b) {
            (function V() {
                m(t, function (a) {
                    a()
                });
                x = b(V, a)
            })()
        }

        function h() {
            M != f.url() && (M = f.url(), m(N, function (a) {
                a(f.url())
            }))
        }

        var f = this, i = a[0], j = b.location, k = b.history, l = b.setTimeout, n = b.clearTimeout, o = {};
        f.isMock = !1;
        var p = 0, s = [];
        f.$$completeOutstandingRequest = e;
        f.$$incOutstandingRequestCount = function () {
            p++
        };
        f.notifyWhenNoOutstandingRequests = function (a) {
            m(t, function (a) {
                a()
            });
            p === 0 ? a() : s.push(a)
        };
        var t = [], x;
        f.addPollFn = function (a) {
            w(x) && g(100, l);
            t.push(a);
            return a
        };
        var M = j.href, A = a.find("base");
        f.url = function (a, b) {
            if (a) {
                if (M != a)return M = a, d.history ? b ? k.replaceState(null, "", a) : (k.pushState(null, "", a), A.attr("href", A.attr("href"))) : b ? j.replace(a) : j.href = a, f
            } else return j.href.replace(/%27/g, "'")
        };
        var N = [], J = !1;
        f.onUrlChange = function (a) {
            J || (d.history && u(b).bind("popstate", h), d.hashchange ? u(b).bind("hashchange", h) : f.addPollFn(h), J = !0);
            N.push(a);
            return a
        };
        f.baseHref = function () {
            var a = A.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
        };
        var r = {}, $ = "", R = f.baseHref();
        f.cookies = function (a, b) {
            var d, e, f, j;
            if (a)if (b === q)i.cookie = escape(a) + "=;path=" + R + ";expires=Thu, 01 Jan 1970 00:00:00 GMT"; else {
                if (B(b))d = (i.cookie = escape(a) + "=" + escape(b) + ";path=" + R).length + 1, d > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")
            } else {
                if (i.cookie !== $) {
                    $ = i.cookie;
                    d = $.split("; ");
                    r = {};
                    for (f = 0; f < d.length; f++)e = d[f], j = e.indexOf("="), j > 0 && (a = unescape(e.substring(0, j)), r[a] === q && (r[a] = unescape(e.substring(j + 1))))
                }
                return r
            }
        };
        f.defer = function (a, b) {
            var c;
            p++;
            c = l(function () {
                delete o[c];
                e(a)
            }, b || 0);
            o[c] = !0;
            return c
        };
        f.defer.cancel = function (a) {
            return o[a] ? (delete o[a], n(a), e(C), !0) : !1
        }
    }

    function wc() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
            return new vc(b, d, a, c)
        }]
    }

    function xc() {
        this.$get = function () {
            function b(b, d) {
                function e(a) {
                    if (a != l) {
                        if (n) {
                            if (n == a)n = a.n
                        } else n = a;
                        g(a.n, a.p);
                        g(a, l);
                        l = a;
                        l.n = null
                    }
                }

                function g(a, b) {
                    if (a != b) {
                        if (a)a.p = b;
                        if (b)b.n = a
                    }
                }

                if (b in a)throw Error("cacheId " + b + " taken");
                var h = 0, f = v({}, d, {id: b}), i = {}, j = d &&
                    d.capacity || Number.MAX_VALUE, k = {}, l = null, n = null;
                return a[b] = {put: function (a, b) {
                    var c = k[a] || (k[a] = {key: a});
                    e(c);
                    w(b) || (a in i || h++, i[a] = b, h > j && this.remove(n.key))
                }, get: function (a) {
                    var b = k[a];
                    if (b)return e(b), i[a]
                }, remove: function (a) {
                    var b = k[a];
                    if (b) {
                        if (b == l)l = b.p;
                        if (b == n)n = b.n;
                        g(b.n, b.p);
                        delete k[a];
                        delete i[a];
                        h--
                    }
                }, removeAll: function () {
                    i = {};
                    h = 0;
                    k = {};
                    l = n = null
                }, destroy: function () {
                    k = f = i = null;
                    delete a[b]
                }, info: function () {
                    return v({}, f, {size: h})
                }}
            }

            var a = {};
            b.info = function () {
                var b = {};
                m(a, function (a, e) {
                    b[e] =
                        a.info()
                });
                return b
            };
            b.get = function (b) {
                return a[b]
            };
            return b
        }
    }

    function yc() {
        this.$get = ["$cacheFactory", function (b) {
            return b("templates")
        }]
    }

    function Db(b) {
        var a = {}, c = "Directive", d = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, e = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, g = "Template must have exactly one root element. was: ", h = /^\s*(https?|ftp|mailto|file):/;
        this.directive = function i(d, e) {
            B(d) ? ($a(e, "directive"), a.hasOwnProperty(d) || (a[d] = [], b.factory(d + c, ["$injector", "$exceptionHandler", function (b, c) {
                var e = [];
                m(a[d],
                    function (a) {
                        try {
                            var g = b.invoke(a);
                            if (H(g))g = {compile: I(g)}; else if (!g.compile && g.link)g.compile = I(g.link);
                            g.priority = g.priority || 0;
                            g.name = g.name || d;
                            g.require = g.require || g.controller && g.name;
                            g.restrict = g.restrict || "A";
                            e.push(g)
                        } catch (h) {
                            c(h)
                        }
                    });
                return e
            }])), a[d].push(e)) : m(d, nb(i));
            return this
        };
        this.urlSanitizationWhitelist = function (a) {
            return y(a) ? (h = a, this) : h
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", function (b, j, k, l, n, o, p, s, t) {
            function x(a, b, c) {
                a instanceof u || (a = u(a));
                m(a, function (b, c) {
                    b.nodeType == 3 && b.nodeValue.match(/\S+/) && (a[c] = u(b).wrap("<span></span>").parent()[0])
                });
                var d = A(a, b, a, c);
                return function (b, c) {
                    $a(b, "scope");
                    for (var e = c ? ua.clone.call(a) : a, j = 0, g = e.length; j < g; j++) {
                        var h = e[j];
                        (h.nodeType == 1 || h.nodeType == 9) && e.eq(j).data("$scope", b)
                    }
                    M(e, "ng-scope");
                    c && c(e, b);
                    d && d(b, e, e);
                    return e
                }
            }

            function M(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function A(a, b, c, d) {
                function e(a, c, d, g) {
                    var h, i, k, p, o, l, n, t = [];
                    o = 0;
                    for (l = c.length; o < l; o++)t.push(c[o]);
                    n = o = 0;
                    for (l = j.length; o < l; n++)i = t[n], c = j[o++], h = j[o++], c ? (c.scope ? (k = a.$new(L(c.scope)), u(i).data("$scope", k)) : k = a, (p = c.transclude) || !g && b ? c(h, k, i, d, function (b) {
                        return function (c) {
                            var d = a.$new();
                            d.$$transcluded = !0;
                            return b(d, c).bind("$destroy", Ta(d, d.$destroy))
                        }
                    }(p || b)) : c(h, k, i, q, g)) : h && h(a, i.childNodes, q, g)
                }

                for (var j = [], g, h, i, k = 0; k < a.length; k++)h = new ia, g = N(a[k], [], h, d), h = (g = g.length ? J(g, a[k], h, b, c) : null) && g.terminal || !a[k].childNodes || !a[k].childNodes.length ? null :
                    A(a[k].childNodes, g ? g.transclude : b), j.push(g), j.push(h), i = i || g || h;
                return i ? e : null
            }

            function N(a, b, c, g) {
                var j = c.$attr, h;
                switch (a.nodeType) {
                    case 1:
                        r(b, ea(fb(a).toLowerCase()), "E", g);
                        var i, k, o;
                        h = a.attributes;
                        for (var p = 0, l = h && h.length; p < l; p++)if (i = h[p], i.specified)k = i.name, o = ea(k.toLowerCase()), j[o] = k, c[o] = i = Q(Z && k == "href" ? decodeURIComponent(a.getAttribute(k, 2)) : i.value), Ab(a, o) && (c[o] = !0), V(a, b, i, o), r(b, o, "A", g);
                        a = a.className;
                        if (B(a) && a !== "")for (; h = e.exec(a);)o = ea(h[2]), r(b, o, "C", g) && (c[o] = Q(h[3])), a =
                            a.substr(h.index + h[0].length);
                        break;
                    case 3:
                        y(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (h = d.exec(a.nodeValue))o = ea(h[1]), r(b, o, "M", g) && (c[o] = Q(h[2]))
                        } catch (n) {
                        }
                }
                b.sort(F);
                return b
            }

            function J(a, b, c, d, e) {
                function j(a, b) {
                    if (a)a.require = r.require, n.push(a);
                    if (b)b.require = r.require, t.push(b)
                }

                function h(a, b) {
                    var c, d = "data", e = !1;
                    if (B(a)) {
                        for (; (c = a.charAt(0)) == "^" || c == "?";)a = a.substr(1), c == "^" && (d = "inheritedData"), e = e || c == "?";
                        c = b[d]("$" + a + "Controller");
                        if (!c && !e)throw Error("No controller: " + a);
                    } else E(a) && (c = [],
                        m(a, function (a) {
                            c.push(h(a, b))
                        }));
                    return c
                }

                function i(a, d, e, g, j) {
                    var l, s, r, D, M;
                    l = b === e ? c : hc(c, new ia(u(e), c.$attr));
                    s = l.$$element;
                    if (J) {
                        var zc = /^\s*([@=&])\s*(\w*)\s*$/, x = d.$parent || d;
                        m(J.scope, function (a, b) {
                            var c = a.match(zc) || [], e = c[2] || b, c = c[1], g, j, h;
                            d.$$isolateBindings[b] = c + e;
                            switch (c) {
                                case "@":
                                    l.$observe(e, function (a) {
                                        d[b] = a
                                    });
                                    l.$$observers[e].$$scope = x;
                                    break;
                                case "=":
                                    j = o(l[e]);
                                    h = j.assign || function () {
                                        g = d[b] = j(x);
                                        throw Error(Eb + l[e] + " (directive: " + J.name + ")");
                                    };
                                    g = d[b] = j(x);
                                    d.$watch(function () {
                                        var a =
                                            j(x);
                                        a !== d[b] && (a !== g ? g = d[b] = a : h(x, a = g = d[b]));
                                        return a
                                    });
                                    break;
                                case "&":
                                    j = o(l[e]);
                                    d[b] = function (a) {
                                        return j(x, a)
                                    };
                                    break;
                                default:
                                    throw Error("Invalid isolate scope definition for directive " + J.name + ": " + a);
                            }
                        })
                    }
                    y && m(y, function (a) {
                        var b = {$scope: d, $element: s, $attrs: l, $transclude: j};
                        M = a.controller;
                        M == "@" && (M = l[a.name]);
                        s.data("$" + a.name + "Controller", p(M, b))
                    });
                    g = 0;
                    for (r = n.length; g < r; g++)try {
                        D = n[g], D(d, s, l, D.require && h(D.require, s))
                    } catch (A) {
                        k(A, pa(s))
                    }
                    a && a(d, e.childNodes, q, j);
                    g = 0;
                    for (r = t.length; g < r; g++)try {
                        D =
                            t[g], D(d, s, l, D.require && h(D.require, s))
                    } catch (Ac) {
                        k(Ac, pa(s))
                    }
                }

                for (var l = -Number.MAX_VALUE, n = [], t = [], s = null, J = null, A = null, D = c.$$element = u(b), r, F, W, ja, V = d, y, w, Y, v = 0, z = a.length; v < z; v++) {
                    r = a[v];
                    W = q;
                    if (l > r.priority)break;
                    if (Y = r.scope)ta("isolated scope", J, r, D), L(Y) && (M(D, "ng-isolate-scope"), J = r), M(D, "ng-scope"), s = s || r;
                    F = r.name;
                    if (Y = r.controller)y = y || {}, ta("'" + F + "' controller", y[F], r, D), y[F] = r;
                    if (Y = r.transclude)ta("transclusion", ja, r, D), ja = r, l = r.priority, Y == "element" ? (W = u(b), D = c.$$element = u(T.createComment(" " +
                        F + ": " + c[F] + " ")), b = D[0], C(e, u(W[0]), b), V = x(W, d, l)) : (W = u(cb(b)).contents(), D.html(""), V = x(W, d));
                    if (Y = r.template)if (ta("template", A, r, D), A = r, Y = Fb(Y), r.replace) {
                        W = u("<div>" + Q(Y) + "</div>").contents();
                        b = W[0];
                        if (W.length != 1 || b.nodeType !== 1)throw Error(g + Y);
                        C(e, D, b);
                        F = {$attr: {}};
                        a = a.concat(N(b, a.splice(v + 1, a.length - (v + 1)), F));
                        $(c, F);
                        z = a.length
                    } else D.html(Y);
                    if (r.templateUrl)ta("template", A, r, D), A = r, i = R(a.splice(v, a.length - v), i, D, c, e, r.replace, V), z = a.length; else if (r.compile)try {
                        w = r.compile(D, c, V), H(w) ?
                            j(null, w) : w && j(w.pre, w.post)
                    } catch (G) {
                        k(G, pa(D))
                    }
                    if (r.terminal)i.terminal = !0, l = Math.max(l, r.priority)
                }
                i.scope = s && s.scope;
                i.transclude = ja && V;
                return i
            }

            function r(d, e, g, j) {
                var h = !1;
                if (a.hasOwnProperty(e))for (var o, e = b.get(e + c), l = 0, p = e.length; l < p; l++)try {
                    if (o = e[l], (j === q || j > o.priority) && o.restrict.indexOf(g) != -1)d.push(o), h = !0
                } catch (n) {
                    k(n)
                }
                return h
            }

            function $(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                m(a, function (d, e) {
                    e.charAt(0) != "$" && (b[e] && (d += (e === "style" ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                m(b,
                    function (b, g) {
                        g == "class" ? (M(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : g == "style" ? e.attr("style", e.attr("style") + ";" + b) : g.charAt(0) != "$" && !a.hasOwnProperty(g) && (a[g] = b, d[g] = c[g])
                    })
            }

            function R(a, b, c, d, e, j, h) {
                var i = [], k, o, p = c[0], t = a.shift(), s = v({}, t, {controller: null, templateUrl: null, transclude: null, scope: null});
                c.html("");
                l.get(t.templateUrl, {cache: n}).success(function (l) {
                    var n, t, l = Fb(l);
                    if (j) {
                        t = u("<div>" + Q(l) + "</div>").contents();
                        n = t[0];
                        if (t.length != 1 || n.nodeType !== 1)throw Error(g + l);
                        l = {$attr: {}};
                        C(e, c, n);
                        N(n, a, l);
                        $(d, l)
                    } else n = p, c.html(l);
                    a.unshift(s);
                    k = J(a, n, d, h);
                    for (o = A(c[0].childNodes, h); i.length;) {
                        var r = i.pop(), l = i.pop();
                        t = i.pop();
                        var ia = i.pop(), D = n;
                        t !== p && (D = cb(n), C(l, u(t), D));
                        k(function () {
                            b(o, ia, D, e, r)
                        }, ia, D, e, r)
                    }
                    i = null
                }).error(function (a, b, c, d) {
                        throw Error("Failed to load template: " + d.url);
                    });
                return function (a, c, d, e, g) {
                    i ? (i.push(c), i.push(d), i.push(e), i.push(g)) : k(function () {
                        b(o, c, d, e, g)
                    }, c, d, e, g)
                }
            }

            function F(a, b) {
                return b.priority - a.priority
            }

            function ta(a, b, c, d) {
                if (b)throw Error("Multiple directives [" +
                    b.name + ", " + c.name + "] asking for " + a + " on: " + pa(d));
            }

            function y(a, b) {
                var c = j(b, !0);
                c && a.push({priority: 0, compile: I(function (a, b) {
                    var d = b.parent(), e = d.data("$binding") || [];
                    e.push(c);
                    M(d.data("$binding", e), "ng-binding");
                    a.$watch(c, function (a) {
                        b[0].nodeValue = a
                    })
                })})
            }

            function V(a, b, c, d) {
                var e = j(c, !0);
                e && b.push({priority: 100, compile: I(function (a, b, c) {
                    b = c.$$observers || (c.$$observers = {});
                    d === "class" && (e = j(c[d], !0));
                    c[d] = q;
                    (b[d] || (b[d] = [])).$$inter = !0;
                    (c.$$observers && c.$$observers[d].$$scope || a).$watch(e,
                        function (a) {
                            c.$set(d, a)
                        })
                })})
            }

            function C(a, b, c) {
                var d = b[0], e = d.parentNode, g, j;
                if (a) {
                    g = 0;
                    for (j = a.length; g < j; g++)if (a[g] == d) {
                        a[g] = c;
                        break
                    }
                }
                e && e.replaceChild(c, d);
                c[u.expando] = d[u.expando];
                b[0] = c
            }

            var ia = function (a, b) {
                this.$$element = a;
                this.$attr = b || {}
            };
            ia.prototype = {$normalize: ea, $set: function (a, b, c, d) {
                var e = Ab(this.$$element[0], a), g = this.$$observers;
                e && (this.$$element.prop(a, b), d = e);
                this[a] = b;
                d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = Za(a, "-"));
                if (fb(this.$$element[0]) === "A" && a === "href")D.setAttribute("href",
                    b), e = D.href, e.match(h) || (this[a] = b = "unsafe:" + e);
                c !== !1 && (b === null || b === q ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                g && m(g[a], function (a) {
                    try {
                        a(b)
                    } catch (c) {
                        k(c)
                    }
                })
            }, $observe: function (a, b) {
                var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                e.push(b);
                s.$evalAsync(function () {
                    e.$$inter || b(c[a])
                });
                return b
            }};
            var D = t[0].createElement("a"), W = j.startSymbol(), ja = j.endSymbol(), Fb = W == "{{" || ja == "}}" ? ma : function (a) {
                return a.replace(/\{\{/g, W).replace(/}}/g, ja)
            };
            return x
        }]
    }

    function ea(b) {
        return tb(b.replace(Bc,
            ""))
    }

    function Cc() {
        var b = {};
        this.register = function (a, c) {
            L(a) ? v(b, a) : b[a] = c
        };
        this.$get = ["$injector", "$window", function (a, c) {
            return function (d, e) {
                if (B(d)) {
                    var g = d, d = b.hasOwnProperty(g) ? b[g] : gb(e.$scope, g, !0) || gb(c, g, !0);
                    qa(d, g, !0)
                }
                return a.instantiate(d, e)
            }
        }]
    }

    function Dc() {
        this.$get = ["$window", function (b) {
            return u(b.document)
        }]
    }

    function Ec() {
        this.$get = ["$log", function (b) {
            return function (a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function Fc() {
        var b = "{{", a = "}}";
        this.startSymbol = function (a) {
            return a ? (b = a, this) :
                b
        };
        this.endSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", function (c) {
            function d(d, f) {
                for (var i, j, k = 0, l = [], n = d.length, o = !1, p = []; k < n;)(i = d.indexOf(b, k)) != -1 && (j = d.indexOf(a, i + e)) != -1 ? (k != i && l.push(d.substring(k, i)), l.push(k = c(o = d.substring(i + e, j))), k.exp = o, k = j + g, o = !0) : (k != n && l.push(d.substring(k)), k = n);
                if (!(n = l.length))l.push(""), n = 1;
                if (!f || o)return p.length = n, k = function (a) {
                    for (var b = 0, c = n, d; b < c; b++) {
                        if (typeof(d = l[b]) == "function")d = d(a), d == null || d == q ? d = "" : typeof d != "string" && (d = da(d));
                        p[b] = d
                    }
                    return p.join("")
                }, k.exp = d, k.parts = l, k
            }

            var e = b.length, g = a.length;
            d.startSymbol = function () {
                return b
            };
            d.endSymbol = function () {
                return a
            };
            return d
        }]
    }

    function Gb(b) {
        for (var b = b.split("/"), a = b.length; a--;)b[a] = Xa(b[a]);
        return b.join("/")
    }

    function va(b, a) {
        var c = Hb.exec(b), c = {protocol: c[1], host: c[3], port: G(c[5]) || Ib[c[1]] || null, path: c[6] || "/", search: c[8], hash: c[10]};
        if (a)a.$$protocol = c.protocol, a.$$host = c.host, a.$$port = c.port;
        return c
    }

    function ka(b, a, c) {
        return b + "://" + a + (c == Ib[b] ? "" : ":" + c)
    }

    function Gc(b, a, c) {
        var d = va(b);
        return decodeURIComponent(d.path) != a || w(d.hash) || d.hash.indexOf(c) !== 0 ? b : ka(d.protocol, d.host, d.port) + a.substr(0, a.lastIndexOf("/")) + d.hash.substr(c.length)
    }

    function Hc(b, a, c) {
        var d = va(b);
        if (decodeURIComponent(d.path) == a && !w(d.hash) && d.hash.indexOf(c) === 0)return b; else {
            var e = d.search && "?" + d.search || "", g = d.hash && "#" + d.hash || "", h = a.substr(0, a.lastIndexOf("/")), f = d.path.substr(h.length);
            if (d.path.indexOf(h) !== 0)throw Error('Invalid url "' + b + '", missing path prefix "' + h + '" !');
            return ka(d.protocol,
                d.host, d.port) + a + "#" + c + f + e + g
        }
    }

    function hb(b, a, c) {
        a = a || "";
        this.$$parse = function (b) {
            var c = va(b, this);
            if (c.path.indexOf(a) !== 0)throw Error('Invalid url "' + b + '", missing path prefix "' + a + '" !');
            this.$$path = decodeURIComponent(c.path.substr(a.length));
            this.$$search = Va(c.search);
            this.$$hash = c.hash && decodeURIComponent(c.hash) || "";
            this.$$compose()
        };
        this.$$compose = function () {
            var b = qb(this.$$search), c = this.$$hash ? "#" + Xa(this.$$hash) : "";
            this.$$url = Gb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = ka(this.$$protocol,
                this.$$host, this.$$port) + a + this.$$url
        };
        this.$$rewriteAppUrl = function (a) {
            if (a.indexOf(c) == 0)return a
        };
        this.$$parse(b)
    }

    function Ga(b, a, c) {
        var d;
        this.$$parse = function (b) {
            var c = va(b, this);
            if (c.hash && c.hash.indexOf(a) !== 0)throw Error('Invalid url "' + b + '", missing hash prefix "' + a + '" !');
            d = c.path + (c.search ? "?" + c.search : "");
            c = Ic.exec((c.hash || "").substr(a.length));
            this.$$path = c[1] ? (c[1].charAt(0) == "/" ? "" : "/") + decodeURIComponent(c[1]) : "";
            this.$$search = Va(c[3]);
            this.$$hash = c[5] && decodeURIComponent(c[5]) ||
                "";
            this.$$compose()
        };
        this.$$compose = function () {
            var b = qb(this.$$search), c = this.$$hash ? "#" + Xa(this.$$hash) : "";
            this.$$url = Gb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = ka(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + a + this.$$url : "")
        };
        this.$$rewriteAppUrl = function (a) {
            if (a.indexOf(c) == 0)return a
        };
        this.$$parse(b)
    }

    function Jb(b, a, c, d) {
        Ga.apply(this, arguments);
        this.$$rewriteAppUrl = function (b) {
            if (b.indexOf(c) == 0)return c + d + "#" + a + b.substr(c.length)
        }
    }

    function Ha(b) {
        return function () {
            return this[b]
        }
    }

    function Kb(b, a) {
        return function (c) {
            if (w(c))return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Jc() {
        var b = "", a = !1;
        this.hashPrefix = function (a) {
            return y(a) ? (b = a, this) : b
        };
        this.html5Mode = function (b) {
            return y(b) ? (a = b, this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (c, d, e, g) {
            function h(a) {
                c.$broadcast("$locationChangeSuccess", f.absUrl(), a)
            }

            var f, i, j, k = d.url(), l = va(k);
            a ? (i = d.baseHref() || "/", j = i.substr(0, i.lastIndexOf("/")), l = ka(l.protocol, l.host, l.port) + j + "/",
                f = e.history ? new hb(Gc(k, i, b), j, l) : new Jb(Hc(k, i, b), b, l, i.substr(j.length + 1))) : (l = ka(l.protocol, l.host, l.port) + (l.path || "") + (l.search ? "?" + l.search : "") + "#" + b + "/", f = new Ga(k, b, l));
            g.bind("click", function (a) {
                if (!a.ctrlKey && !(a.metaKey || a.which == 2)) {
                    for (var b = u(a.target); z(b[0].nodeName) !== "a";)if (b[0] === g[0] || !(b = b.parent())[0])return;
                    var d = b.prop("href"), e = f.$$rewriteAppUrl(d);
                    d && !b.attr("target") && e && (f.$$parse(e), c.$apply(), a.preventDefault(), P.angular["ff-684208-preventDefault"] = !0)
                }
            });
            f.absUrl() !=
                k && d.url(f.absUrl(), !0);
            d.onUrlChange(function (a) {
                f.absUrl() != a && (c.$broadcast("$locationChangeStart", a, f.absUrl()).defaultPrevented ? d.url(f.absUrl()) : (c.$evalAsync(function () {
                    var b = f.absUrl();
                    f.$$parse(a);
                    h(b)
                }), c.$$phase || c.$digest()))
            });
            var n = 0;
            c.$watch(function () {
                var a = d.url(), b = f.$$replace;
                if (!n || a != f.absUrl())n++, c.$evalAsync(function () {
                    c.$broadcast("$locationChangeStart", f.absUrl(), a).defaultPrevented ? f.$$parse(a) : (d.url(f.absUrl(), b), h(a))
                });
                f.$$replace = !1;
                return n
            });
            return f
        }]
    }

    function Kc() {
        this.$get =
            ["$window", function (b) {
                function a(a) {
                    a instanceof Error && (a.stack ? a = a.message && a.stack.indexOf(a.message) === -1 ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                    return a
                }

                function c(c) {
                    var e = b.console || {}, g = e[c] || e.log || C;
                    return g.apply ? function () {
                        var b = [];
                        m(arguments, function (c) {
                            b.push(a(c))
                        });
                        return g.apply(e, b)
                    } : function (a, b) {
                        g(a, b)
                    }
                }

                return{log: c("log"), warn: c("warn"), info: c("info"), error: c("error")}
            }]
    }

    function Lc(b, a) {
        function c(a) {
            return a.indexOf(t) != -1
        }

        function d() {
            return p + 1 < b.length ? b.charAt(p + 1) : !1
        }

        function e(a) {
            return"0" <= a && a <= "9"
        }

        function g(a) {
            return a == " " || a == "\r" || a == "\t" || a == "\n" || a == "\u000b" || a == "\u00a0"
        }

        function h(a) {
            return"a" <= a && a <= "z" || "A" <= a && a <= "Z" || "_" == a || a == "$"
        }

        function f(a) {
            return a == "-" || a == "+" || e(a)
        }

        function i(a, c, d) {
            d = d || p;
            throw Error("Lexer Error: " + a + " at column" + (y(c) ? "s " + c + "-" + p + " [" + b.substring(c, d) + "]" : " " + d) + " in expression [" + b + "].");
        }

        function j() {
            for (var a = "", c = p; p < b.length;) {
                var g = z(b.charAt(p));
                if (g == "." ||
                    e(g))a += g; else {
                    var j = d();
                    if (g == "e" && f(j))a += g; else if (f(g) && j && e(j) && a.charAt(a.length - 1) == "e")a += g; else if (f(g) && (!j || !e(j)) && a.charAt(a.length - 1) == "e")i("Invalid exponent"); else break
                }
                p++
            }
            a *= 1;
            n.push({index: c, text: a, json: !0, fn: function () {
                return a
            }})
        }

        function k() {
            for (var c = "", d = p, f, j, i, k; p < b.length;) {
                k = b.charAt(p);
                if (k == "." || h(k) || e(k))k == "." && (f = p), c += k; else break;
                p++
            }
            if (f)for (j = p; j < b.length;) {
                k = b.charAt(j);
                if (k == "(") {
                    i = c.substr(f - d + 1);
                    c = c.substr(0, f - d);
                    p = j;
                    break
                }
                if (g(k))j++; else break
            }
            d = {index: d,
                text: c};
            if (Ia.hasOwnProperty(c))d.fn = d.json = Ia[c]; else {
                var l = Lb(c, a);
                d.fn = v(function (a, b) {
                    return l(a, b)
                }, {assign: function (a, b) {
                    return Mb(a, c, b)
                }})
            }
            n.push(d);
            i && (n.push({index: f, text: ".", json: !1}), n.push({index: f + 1, text: i, json: !1}))
        }

        function l(a) {
            var c = p;
            p++;
            for (var d = "", e = a, f = !1; p < b.length;) {
                var g = b.charAt(p);
                e += g;
                if (f)g == "u" ? (g = b.substring(p + 1, p + 5), g.match(/[\da-f]{4}/i) || i("Invalid unicode escape [\\u" + g + "]"), p += 4, d += String.fromCharCode(parseInt(g, 16))) : (f = Mc[g], d += f ? f : g), f = !1; else if (g == "\\")f = !0; else if (g == a) {
                    p++;
                    n.push({index: c, text: e, string: d, json: !0, fn: function () {
                        return d
                    }});
                    return
                } else d += g;
                p++
            }
            i("Unterminated quote", c)
        }

        for (var n = [], o, p = 0, s = [], t, x = ":"; p < b.length;) {
            t = b.charAt(p);
            if (c("\"'"))l(t); else if (e(t) || c(".") && e(d()))j(); else if (h(t)) {
                if (k(), "{,".indexOf(x) != -1 && s[0] == "{" && (o = n[n.length - 1]))o.json = o.text.indexOf(".") == -1
            } else if (c("(){}[].,;:"))n.push({index: p, text: t, json: ":[,".indexOf(x) != -1 && c("{[") || c("}]:,")}), c("{[") && s.unshift(t), c("}]") && s.shift(), p++; else if (g(t)) {
                p++;
                continue
            } else {
                var m = t + d(), A = Ia[t], N = Ia[m];
                N ? (n.push({index: p, text: m, fn: N}), p += 2) : A ? (n.push({index: p, text: t, fn: A, json: "[,:".indexOf(x) != -1 && c("+-")}), p += 1) : i("Unexpected next character ", p, p + 1)
            }
            x = t
        }
        return n
    }

    function Nc(b, a, c, d) {
        function e(a, c) {
            throw Error("Syntax Error: Token '" + c.text + "' " + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
        }

        function g() {
            if (R.length === 0)throw Error("Unexpected end of expression: " + b);
            return R[0]
        }

        function h(a, b, c, d) {
            if (R.length >
                0) {
                var e = R[0], f = e.text;
                if (f == a || f == b || f == c || f == d || !a && !b && !c && !d)return e
            }
            return!1
        }

        function f(b, c, d, f) {
            return(b = h(b, c, d, f)) ? (a && !b.json && e("is not valid json", b), R.shift(), b) : !1
        }

        function i(a) {
            f(a) || e("is unexpected, expecting [" + a + "]", h())
        }

        function j(a, b) {
            return function (c, d) {
                return a(c, d, b)
            }
        }

        function k(a, b, c) {
            return function (d, e) {
                return b(d, e, a, c)
            }
        }

        function l() {
            for (var a = []; ;)if (R.length > 0 && !h("}", ")", ";", "]") && a.push(w()), !f(";"))return a.length == 1 ? a[0] : function (b, c) {
                for (var d, e = 0; e < a.length; e++) {
                    var f =
                        a[e];
                    f && (d = f(b, c))
                }
                return d
            }
        }

        function n() {
            for (var a = f(), b = c(a.text), d = []; ;)if (a = f(":"))d.push(F()); else {
                var e = function (a, c, e) {
                    for (var e = [e], f = 0; f < d.length; f++)e.push(d[f](a, c));
                    return b.apply(a, e)
                };
                return function () {
                    return e
                }
            }
        }

        function o() {
            for (var a = p(), b; ;)if (b = f("||"))a = k(a, b.fn, p()); else return a
        }

        function p() {
            var a = s(), b;
            if (b = f("&&"))a = k(a, b.fn, p());
            return a
        }

        function s() {
            var a = t(), b;
            if (b = f("==", "!="))a = k(a, b.fn, s());
            return a
        }

        function t() {
            var a;
            a = x();
            for (var b; b = f("+", "-");)a = k(a, b.fn, x());
            if (b =
                f("<", ">", "<=", ">="))a = k(a, b.fn, t());
            return a
        }

        function x() {
            for (var a = m(), b; b = f("*", "/", "%");)a = k(a, b.fn, m());
            return a
        }

        function m() {
            var a;
            return f("+") ? A() : (a = f("-")) ? k(r, a.fn, m()) : (a = f("!")) ? j(a.fn, m()) : A()
        }

        function A() {
            var a;
            if (f("("))a = w(), i(")"); else if (f("["))a = N(); else if (f("{"))a = J(); else {
                var b = f();
                (a = b.fn) || e("not a primary expression", b)
            }
            for (var c; b = f("(", "[", ".");)b.text === "(" ? (a = y(a, c), c = null) : b.text === "[" ? (c = a, a = V(a)) : b.text === "." ? (c = a, a = u(a)) : e("IMPOSSIBLE");
            return a
        }

        function N() {
            var a =
                [];
            if (g().text != "]") {
                do a.push(F()); while (f(","))
            }
            i("]");
            return function (b, c) {
                for (var d = [], e = 0; e < a.length; e++)d.push(a[e](b, c));
                return d
            }
        }

        function J() {
            var a = [];
            if (g().text != "}") {
                do {
                    var b = f(), b = b.string || b.text;
                    i(":");
                    var c = F();
                    a.push({key: b, value: c})
                } while (f(","))
            }
            i("}");
            return function (b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f.key] = f.value(b, c)
                }
                return d
            }
        }

        var r = I(0), $, R = Lc(b, d), F = function () {
            var a = o(), c, d;
            return(d = f("=")) ? (a.assign || e("implies assignment but [" + b.substring(0, d.index) + "] can not be assigned to",
                d), c = o(), function (b, d) {
                return a.assign(b, c(b, d), d)
            }) : a
        }, y = function (a, b) {
            var c = [];
            if (g().text != ")") {
                do c.push(F()); while (f(","))
            }
            i(")");
            return function (d, e) {
                for (var f = [], g = b ? b(d, e) : d, j = 0; j < c.length; j++)f.push(c[j](d, e));
                j = a(d, e, g) || C;
                return j.apply ? j.apply(g, f) : j(f[0], f[1], f[2], f[3], f[4])
            }
        }, u = function (a) {
            var b = f().text, c = Lb(b, d);
            return v(function (b, d, e) {
                return c(e || a(b, d), d)
            }, {assign: function (c, d, e) {
                return Mb(a(c, e), b, d)
            }})
        }, V = function (a) {
            var b = F();
            i("]");
            return v(function (c, d) {
                var e = a(c, d), f = b(c,
                    d), g;
                if (!e)return q;
                if ((e = e[f]) && e.then) {
                    g = e;
                    if (!("$$v"in e))g.$$v = q, g.then(function (a) {
                        g.$$v = a
                    });
                    e = e.$$v
                }
                return e
            }, {assign: function (c, d, e) {
                return a(c, e)[b(c, e)] = d
            }})
        }, w = function () {
            for (var a = F(), b; ;)if (b = f("|"))a = k(a, b.fn, n()); else return a
        };
        a ? (F = o, y = u = V = w = function () {
            e("is not valid json", {text: b, index: 0})
        }, $ = A()) : $ = l();
        R.length !== 0 && e("is an unexpected token", R[0]);
        return $
    }

    function Mb(b, a, c) {
        for (var a = a.split("."), d = 0; a.length > 1; d++) {
            var e = a.shift(), g = b[e];
            g || (g = {}, b[e] = g);
            b = g
        }
        return b[a.shift()] =
            c
    }

    function gb(b, a, c) {
        if (!a)return b;
        for (var a = a.split("."), d, e = b, g = a.length, h = 0; h < g; h++)d = a[h], b && (b = (e = b)[d]);
        return!c && H(b) ? Ta(e, b) : b
    }

    function Nb(b, a, c, d, e) {
        return function (g, h) {
            var f = h && h.hasOwnProperty(b) ? h : g, i;
            if (f === null || f === q)return f;
            if ((f = f[b]) && f.then) {
                if (!("$$v"in f))i = f, i.$$v = q, i.then(function (a) {
                    i.$$v = a
                });
                f = f.$$v
            }
            if (!a || f === null || f === q)return f;
            if ((f = f[a]) && f.then) {
                if (!("$$v"in f))i = f, i.$$v = q, i.then(function (a) {
                    i.$$v = a
                });
                f = f.$$v
            }
            if (!c || f === null || f === q)return f;
            if ((f = f[c]) && f.then) {
                if (!("$$v"in
                    f))i = f, i.$$v = q, i.then(function (a) {
                    i.$$v = a
                });
                f = f.$$v
            }
            if (!d || f === null || f === q)return f;
            if ((f = f[d]) && f.then) {
                if (!("$$v"in f))i = f, i.$$v = q, i.then(function (a) {
                    i.$$v = a
                });
                f = f.$$v
            }
            if (!e || f === null || f === q)return f;
            if ((f = f[e]) && f.then) {
                if (!("$$v"in f))i = f, i.$$v = q, i.then(function (a) {
                    i.$$v = a
                });
                f = f.$$v
            }
            return f
        }
    }

    function Lb(b, a) {
        if (ib.hasOwnProperty(b))return ib[b];
        var c = b.split("."), d = c.length, e;
        if (a)e = d < 6 ? Nb(c[0], c[1], c[2], c[3], c[4]) : function (a, b) {
            var e = 0, g;
            do g = Nb(c[e++], c[e++], c[e++], c[e++], c[e++])(a, b), b = q,
                a = g; while (e < d);
            return g
        }; else {
            var g = "var l, fn, p;\n";
            m(c, function (a, b) {
                g += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'
            });
            g += "return s;";
            e = Function("s", "k", g);
            e.toString = function () {
                return g
            }
        }
        return ib[b] = e
    }

    function Oc() {
        var b = {};
        this.$get = ["$filter", "$sniffer", function (a, c) {
            return function (d) {
                switch (typeof d) {
                    case "string":
                        return b.hasOwnProperty(d) ?
                            b[d] : b[d] = Nc(d, !1, a, c.csp);
                    case "function":
                        return d;
                    default:
                        return C
                }
            }
        }]
    }

    function Pc() {
        this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
            return Qc(function (a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function Qc(b, a) {
        function c(a) {
            return a
        }

        function d(a) {
            return h(a)
        }

        var e = function () {
            var f = [], i, j;
            return j = {resolve: function (a) {
                if (f) {
                    var c = f;
                    f = q;
                    i = g(a);
                    c.length && b(function () {
                        for (var a, b = 0, d = c.length; b < d; b++)a = c[b], i.then(a[0], a[1])
                    })
                }
            }, reject: function (a) {
                j.resolve(h(a))
            }, promise: {then: function (b, g) {
                var j = e(), h =
                    function (d) {
                        try {
                            j.resolve((b || c)(d))
                        } catch (e) {
                            a(e), j.reject(e)
                        }
                    }, p = function (b) {
                    try {
                        j.resolve((g || d)(b))
                    } catch (c) {
                        a(c), j.reject(c)
                    }
                };
                f ? f.push([h, p]) : i.then(h, p);
                return j.promise
            }}}
        }, g = function (a) {
            return a && a.then ? a : {then: function (c) {
                var d = e();
                b(function () {
                    d.resolve(c(a))
                });
                return d.promise
            }}
        }, h = function (a) {
            return{then: function (c, g) {
                var h = e();
                b(function () {
                    h.resolve((g || d)(a))
                });
                return h.promise
            }}
        };
        return{defer: e, reject: h, when: function (f, i, j) {
            var k = e(), l, n = function (b) {
                try {
                    return(i || c)(b)
                } catch (d) {
                    return a(d),
                        h(d)
                }
            }, o = function (b) {
                try {
                    return(j || d)(b)
                } catch (c) {
                    return a(c), h(c)
                }
            };
            b(function () {
                g(f).then(function (a) {
                    l || (l = !0, k.resolve(g(a).then(n, o)))
                }, function (a) {
                    l || (l = !0, k.resolve(o(a)))
                })
            });
            return k.promise
        }, all: function (a) {
            var b = e(), c = a.length, d = [];
            c ? m(a, function (a, e) {
                g(a).then(function (a) {
                    e in d || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    e in d || b.reject(a)
                })
            }) : b.resolve(d);
            return b.promise
        }}
    }

    function Rc() {
        var b = {};
        this.when = function (a, c) {
            b[a] = v({reloadOnSearch: !0}, c);
            if (a) {
                var d = a[a.length - 1] == "/" ? a.substr(0,
                    a.length - 1) : a + "/";
                b[d] = {redirectTo: a}
            }
            return this
        };
        this.otherwise = function (a) {
            this.when(null, a);
            return this
        };
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function (a, c, d, e, g, h, f) {
            function i(a, b) {
                for (var b = "^" + b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$", c = "", d = [], e = {}, f = /:(\w+)/g, g, j = 0; (g = f.exec(b)) !== null;)c += b.slice(j, g.index), c += "([^\\/]*)", d.push(g[1]), j = f.lastIndex;
                c += b.substr(j);
                var h = a.match(RegExp(c));
                h && m(d, function (a, b) {
                    e[a] = h[b + 1]
                });
                return h ?
                    e : null
            }

            function j() {
                var b = k(), j = o.current;
                if (b && j && b.$$route === j.$$route && fa(b.pathParams, j.pathParams) && !b.reloadOnSearch && !n)j.params = b.params, U(j.params, d), a.$broadcast("$routeUpdate", j); else if (b || j)n = !1, a.$broadcast("$routeChangeStart", b, j), (o.current = b) && b.redirectTo && (B(b.redirectTo) ? c.path(l(b.redirectTo, b.params)).search(b.params).replace() : c.url(b.redirectTo(b.pathParams, c.path(), c.search())).replace()), e.when(b).then(function () {
                    if (b) {
                        var a = [], c = [], d;
                        m(b.resolve || {}, function (b, d) {
                            a.push(d);
                            c.push(B(b) ? g.get(b) : g.invoke(b))
                        });
                        if (!y(d = b.template))if (y(d = b.templateUrl))d = h.get(d, {cache: f}).then(function (a) {
                            return a.data
                        });
                        y(d) && (a.push("$template"), c.push(d));
                        return e.all(c).then(function (b) {
                            var c = {};
                            m(b, function (b, d) {
                                c[a[d]] = b
                            });
                            return c
                        })
                    }
                }).then(function (c) {
                        if (b == o.current) {
                            if (b)b.locals = c, U(b.params, d);
                            a.$broadcast("$routeChangeSuccess", b, j)
                        }
                    }, function (c) {
                        b == o.current && a.$broadcast("$routeChangeError", b, j, c)
                    })
            }

            function k() {
                var a, d;
                m(b, function (b, e) {
                    if (!d && (a = i(c.path(), e)))d = ya(b,
                        {params: v({}, c.search(), a), pathParams: a}), d.$$route = b
                });
                return d || b[null] && ya(b[null], {params: {}, pathParams: {}})
            }

            function l(a, b) {
                var c = [];
                m((a || "").split(":"), function (a, d) {
                    if (d == 0)c.push(a); else {
                        var e = a.match(/(\w+)(.*)/), f = e[1];
                        c.push(b[f]);
                        c.push(e[2] || "");
                        delete b[f]
                    }
                });
                return c.join("")
            }

            var n = !1, o = {routes: b, reload: function () {
                n = !0;
                a.$evalAsync(j)
            }};
            a.$on("$locationChangeSuccess", j);
            return o
        }]
    }

    function Sc() {
        this.$get = I({})
    }

    function Tc() {
        var b = 10;
        this.digestTtl = function (a) {
            arguments.length && (b =
                a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", function (a, c, d) {
            function e() {
                this.$id = xa();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$listeners = {};
                this.$$isolateBindings = {}
            }

            function g(a) {
                if (i.$$phase)throw Error(i.$$phase + " already in progress");
                i.$$phase = a
            }

            function h(a, b) {
                var c = d(a);
                qa(c, b);
                return c
            }

            function f() {
            }

            e.prototype = {$new: function (a) {
                if (H(a))throw Error("API-CHANGE: Use $controller to instantiate controllers.");
                a ? (a = new e, a.$root = this.$root) : (a = function () {
                }, a.prototype = this, a = new a, a.$id = xa());
                a["this"] = a;
                a.$$listeners = {};
                a.$parent = this;
                a.$$asyncQueue = [];
                a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                a.$$prevSibling = this.$$childTail;
                this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                return a
            }, $watch: function (a, b, c) {
                var d = h(a, "watch"), e = this.$$watchers, g = {fn: b, last: f, get: d, exp: a, eq: !!c};
                if (!H(b)) {
                    var i = h(b || C, "listener");
                    g.fn = function (a, b, c) {
                        i(c)
                    }
                }
                if (!e)e = this.$$watchers = [];
                e.unshift(g);
                return function () {
                    Sa(e, g)
                }
            }, $digest: function () {
                var a, d, e, h, o, p, m, t = b, x, q = [], A, N;
                g("$digest");
                do {
                    m = !1;
                    x = this;
                    do {
                        for (o = x.$$asyncQueue; o.length;)try {
                            x.$eval(o.shift())
                        } catch (J) {
                            c(J)
                        }
                        if (h = x.$$watchers)for (p = h.length; p--;)try {
                            if (a = h[p], (d = a.get(x)) !== (e = a.last) && !(a.eq ? fa(d, e) : typeof d == "number" && typeof e == "number" && isNaN(d) && isNaN(e)))m = !0, a.last = a.eq ? U(d) : d, a.fn(d, e === f ? d : e, x), t < 5 && (A = 4 - t, q[A] || (q[A] = []), N = H(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) :
                                a.exp, N += "; newVal: " + da(d) + "; oldVal: " + da(e), q[A].push(N))
                        } catch (r) {
                            c(r)
                        }
                        if (!(h = x.$$childHead || x !== this && x.$$nextSibling))for (; x !== this && !(h = x.$$nextSibling);)x = x.$parent
                    } while (x = h);
                    if (m && !t--)throw i.$$phase = null, Error(b + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " + da(q));
                } while (m || o.length);
                i.$$phase = null
            }, $destroy: function () {
                if (!(i == this || this.$$destroyed)) {
                    var a = this.$parent;
                    this.$broadcast("$destroy");
                    this.$$destroyed = !0;
                    if (a.$$childHead == this)a.$$childHead =
                        this.$$nextSibling;
                    if (a.$$childTail == this)a.$$childTail = this.$$prevSibling;
                    if (this.$$prevSibling)this.$$prevSibling.$$nextSibling = this.$$nextSibling;
                    if (this.$$nextSibling)this.$$nextSibling.$$prevSibling = this.$$prevSibling;
                    this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                }
            }, $eval: function (a, b) {
                return d(a)(this, b)
            }, $evalAsync: function (a) {
                this.$$asyncQueue.push(a)
            }, $apply: function (a) {
                try {
                    return g("$apply"), this.$eval(a)
                } catch (b) {
                    c(b)
                } finally {
                    i.$$phase = null;
                    try {
                        i.$digest()
                    } catch (d) {
                        throw c(d),
                            d;
                    }
                }
            }, $on: function (a, b) {
                var c = this.$$listeners[a];
                c || (this.$$listeners[a] = c = []);
                c.push(b);
                return function () {
                    c[za(c, b)] = null
                }
            }, $emit: function (a, b) {
                var d = [], e, f = this, g = !1, h = {name: a, targetScope: f, stopPropagation: function () {
                    g = !0
                }, preventDefault: function () {
                    h.defaultPrevented = !0
                }, defaultPrevented: !1}, i = [h].concat(ha.call(arguments, 1)), m, q;
                do {
                    e = f.$$listeners[a] || d;
                    h.currentScope = f;
                    m = 0;
                    for (q = e.length; m < q; m++)if (e[m])try {
                        if (e[m].apply(null, i), g)return h
                    } catch (A) {
                        c(A)
                    } else e.splice(m, 1), m--, q--;
                    f = f.$parent
                } while (f);
                return h
            }, $broadcast: function (a, b) {
                var d = this, e = this, f = {name: a, targetScope: this, preventDefault: function () {
                    f.defaultPrevented = !0
                }, defaultPrevented: !1}, g = [f].concat(ha.call(arguments, 1)), h, i;
                do {
                    d = e;
                    f.currentScope = d;
                    e = d.$$listeners[a] || [];
                    h = 0;
                    for (i = e.length; h < i; h++)if (e[h])try {
                        e[h].apply(null, g)
                    } catch (m) {
                        c(m)
                    } else e.splice(h, 1), h--, i--;
                    if (!(e = d.$$childHead || d !== this && d.$$nextSibling))for (; d !== this && !(e = d.$$nextSibling);)d = d.$parent
                } while (d = e);
                return f
            }};
            var i = new e;
            return i
        }]
    }

    function Uc() {
        this.$get =
            ["$window", function (b) {
                var a = {}, c = G((/android (\d+)/.exec(z(b.navigator.userAgent)) || [])[1]);
                return{history: !(!b.history || !b.history.pushState || c < 4), hashchange: "onhashchange"in b && (!b.document.documentMode || b.document.documentMode > 7), hasEvent: function (c) {
                    if (c == "input" && Z == 9)return!1;
                    if (w(a[c])) {
                        var e = b.document.createElement("div");
                        a[c] = "on" + c in e
                    }
                    return a[c]
                }, csp: !1}
            }]
    }

    function Vc() {
        this.$get = I(P)
    }

    function Ob(b) {
        var a = {}, c, d, e;
        if (!b)return a;
        m(b.split("\n"), function (b) {
            e = b.indexOf(":");
            c = z(Q(b.substr(0,
                e)));
            d = Q(b.substr(e + 1));
            c && (a[c] ? a[c] += ", " + d : a[c] = d)
        });
        return a
    }

    function Pb(b) {
        var a = L(b) ? b : q;
        return function (c) {
            a || (a = Ob(b));
            return c ? a[z(c)] || null : a
        }
    }

    function Qb(b, a, c) {
        if (H(c))return c(b, a);
        m(c, function (c) {
            b = c(b, a)
        });
        return b
    }

    function Wc() {
        var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = this.defaults = {transformResponse: [function (d) {
            B(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = pb(d, !0)));
            return d
        }], transformRequest: [function (a) {
            return L(a) && wa.apply(a) !== "[object File]" ? da(a) : a
        }],
            headers: {common: {Accept: "application/json, text/plain, */*", "X-Requested-With": "XMLHttpRequest"}, post: {"Content-Type": "application/json;charset=utf-8"}, put: {"Content-Type": "application/json;charset=utf-8"}}}, e = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, c, i, j, k) {
            function l(a) {
                function c(a) {
                    var b = v({}, a, {data: Qb(a.data, a.headers, f)});
                    return 200 <= a.status && a.status < 300 ? b : j.reject(b)
                }

                a.method = la(a.method);
                var e = a.transformRequest ||
                    d.transformRequest, f = a.transformResponse || d.transformResponse, g = d.headers, g = v({"X-XSRF-TOKEN": b.cookies()["XSRF-TOKEN"]}, g.common, g[z(a.method)], a.headers), e = Qb(a.data, Pb(g), e), i;
                w(a.data) && delete g["Content-Type"];
                i = n(a, e, g);
                i = i.then(c, c);
                m(s, function (a) {
                    i = a(i)
                });
                i.success = function (b) {
                    i.then(function (c) {
                        b(c.data, c.status, c.headers, a)
                    });
                    return i
                };
                i.error = function (b) {
                    i.then(null, function (c) {
                        b(c.data, c.status, c.headers, a)
                    });
                    return i
                };
                return i
            }

            function n(b, c, d) {
                function e(a, b, c) {
                    m && (200 <= a && a < 300 ? m.put(q,
                        [a, b, Ob(c)]) : m.remove(q));
                    f(b, a, c);
                    i.$apply()
                }

                function f(a, c, d) {
                    c = Math.max(c, 0);
                    (200 <= c && c < 300 ? k.resolve : k.reject)({data: a, status: c, headers: Pb(d), config: b})
                }

                function h() {
                    var a = za(l.pendingRequests, b);
                    a !== -1 && l.pendingRequests.splice(a, 1)
                }

                var k = j.defer(), n = k.promise, m, s, q = o(b.url, b.params);
                l.pendingRequests.push(b);
                n.then(h, h);
                b.cache && b.method == "GET" && (m = L(b.cache) ? b.cache : p);
                if (m)if (s = m.get(q))if (s.then)return s.then(h, h), s; else E(s) ? f(s[1], s[0], U(s[2])) : f(s, 200, {}); else m.put(q, n);
                s || a(b.method,
                    q, c, e, d, b.timeout, b.withCredentials);
                return n
            }

            function o(a, b) {
                if (!b)return a;
                var c = [];
                fc(b, function (a, b) {
                    a == null || a == q || (L(a) && (a = da(a)), c.push(encodeURIComponent(b) + "=" + encodeURIComponent(a)))
                });
                return a + (a.indexOf("?") == -1 ? "?" : "&") + c.join("&")
            }

            var p = c("$http"), s = [];
            m(e, function (a) {
                s.push(B(a) ? k.get(a) : k.invoke(a))
            });
            l.pendingRequests = [];
            (function (a) {
                m(arguments, function (a) {
                    l[a] = function (b, c) {
                        return l(v(c || {}, {method: a, url: b}))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                m(arguments, function (a) {
                    l[a] =
                        function (b, c, d) {
                            return l(v(d || {}, {method: a, url: b, data: c}))
                        }
                })
            })("post", "put");
            l.defaults = d;
            return l
        }]
    }

    function Xc() {
        this.$get = ["$browser", "$window", "$document", function (b, a, c) {
            return Yc(b, Zc, b.defer, a.angular.callbacks, c[0], a.location.protocol.replace(":", ""))
        }]
    }

    function Yc(b, a, c, d, e, g) {
        function h(a, b) {
            var c = e.createElement("script"), d = function () {
                e.body.removeChild(c);
                b && b()
            };
            c.type = "text/javascript";
            c.src = a;
            Z ? c.onreadystatechange = function () {
                /loaded|complete/.test(c.readyState) && d()
            } : c.onload = c.onerror =
                d;
            e.body.appendChild(c)
        }

        return function (e, i, j, k, l, n, o) {
            function p(a, c, d, e) {
                c = (i.match(Hb) || ["", g])[1] == "file" ? d ? 200 : 404 : c;
                a(c == 1223 ? 204 : c, d, e);
                b.$$completeOutstandingRequest(C)
            }

            b.$$incOutstandingRequestCount();
            i = i || b.url();
            if (z(e) == "jsonp") {
                var s = "_" + (d.counter++).toString(36);
                d[s] = function (a) {
                    d[s].data = a
                };
                h(i.replace("JSON_CALLBACK", "angular.callbacks." + s), function () {
                    d[s].data ? p(k, 200, d[s].data) : p(k, -2);
                    delete d[s]
                })
            } else {
                var t = new a;
                t.open(e, i, !0);
                m(l, function (a, b) {
                    a && t.setRequestHeader(b, a)
                });
                var q;
                t.onreadystatechange = function () {
                    if (t.readyState == 4) {
                        var a = t.getAllResponseHeaders(), b = ["Cache-Control", "Content-Language", "Content-Type", "Expires", "Last-Modified", "Pragma"];
                        a || (a = "", m(b, function (b) {
                            var c = t.getResponseHeader(b);
                            c && (a += b + ": " + c + "\n")
                        }));
                        p(k, q || t.status, t.responseText, a)
                    }
                };
                if (o)t.withCredentials = !0;
                t.send(j || "");
                n > 0 && c(function () {
                    q = -1;
                    t.abort()
                }, n)
            }
        }
    }

    function $c() {
        this.$get = function () {
            return{id: "en-us", NUMBER_FORMATS: {DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [
                {minInt: 1, minFrac: 0,
                    maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3},
                {minInt: 1, minFrac: 2, maxFrac: 2, posPre: "\u00a4", posSuf: "", negPre: "(\u00a4", negSuf: ")", gSize: 3, lgSize: 3}
            ], CURRENCY_SYM: "$"}, DATETIME_FORMATS: {MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", "short": "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a"}, pluralCat: function (b) {
                return b === 1 ? "one" : "other"
            }}
        }
    }

    function ad() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (b, a, c, d) {
            function e(e, f, i) {
                var j = c.defer(), k = j.promise, l = y(i) && !i, f = a.defer(function () {
                    try {
                        j.resolve(e())
                    } catch (a) {
                        j.reject(a), d(a)
                    }
                    l || b.$apply()
                }, f), i = function () {
                    delete g[k.$$timeoutId]
                };
                k.$$timeoutId = f;
                g[f] = j;
                k.then(i, i);
                return k
            }

            var g = {};
            e.cancel = function (b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), a.defer.cancel(b.$$timeoutId)) : !1
            };
            return e
        }]
    }

    function Rb(b) {
        function a(a, e) {
            return b.factory(a + c, e)
        }

        var c = "Filter";
        this.register = a;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + c)
            }
        }];
        a("currency", Sb);
        a("date", Tb);
        a("filter", bd);
        a("json", cd);
        a("limitTo", dd);
        a("lowercase", ed);
        a("number", Ub);
        a("orderBy", Vb);
        a("uppercase", fd)
    }

    function bd() {
        return function (b, a) {
            if (!E(b))return b;
            var c = [];
            c.check = function (a) {
                for (var b = 0; b < c.length; b++)if (!c[b](a))return!1;
                return!0
            };
            var d = function (a, b) {
                if (b.charAt(0) === "!")return!d(a, b.substr(1));
                switch (typeof a) {
                    case "boolean":
                    case "number":
                    case "string":
                        return("" + a).toLowerCase().indexOf(b) > -1;
                    case "object":
                        for (var c in a)if (c.charAt(0) !== "$" && d(a[c], b))return!0;
                        return!1;
                    case "array":
                        for (c = 0; c < a.length; c++)if (d(a[c], b))return!0;
                        return!1;
                    default:
                        return!1
                }
            };
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    a =
                    {$: a};
                case "object":
                    for (var e in a)e == "$" ? function () {
                        var b = ("" + a[e]).toLowerCase();
                        b && c.push(function (a) {
                            return d(a, b)
                        })
                    }() : function () {
                        var b = e, f = ("" + a[e]).toLowerCase();
                        f && c.push(function (a) {
                            return d(gb(a, b), f)
                        })
                    }();
                    break;
                case "function":
                    c.push(a);
                    break;
                default:
                    return b
            }
            for (var g = [], h = 0; h < b.length; h++) {
                var f = b[h];
                c.check(f) && g.push(f)
            }
            return g
        }
    }

    function Sb(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            if (w(d))d = a.CURRENCY_SYM;
            return Wb(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g,
                d)
        }
    }

    function Ub(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            return Wb(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function Wb(b, a, c, d, e) {
        if (isNaN(b) || !isFinite(b))return"";
        var g = b < 0, b = Math.abs(b), h = b + "", f = "", i = [], j = !1;
        if (h.indexOf("e") !== -1) {
            var k = h.match(/([\d\.]+)e(-?)(\d+)/);
            k && k[2] == "-" && k[3] > e + 1 ? h = "0" : (f = h, j = !0)
        }
        if (!j) {
            h = (h.split(Xb)[1] || "").length;
            w(e) && (e = Math.min(Math.max(a.minFrac, h), a.maxFrac));
            var h = Math.pow(10, e), b = Math.round(b * h) / h, b = ("" + b).split(Xb), h = b[0], b = b[1] || "", j = 0, k = a.lgSize,
                l = a.gSize;
            if (h.length >= k + l)for (var j = h.length - k, n = 0; n < j; n++)(j - n) % l === 0 && n !== 0 && (f += c), f += h.charAt(n);
            for (n = j; n < h.length; n++)(h.length - n) % k === 0 && n !== 0 && (f += c), f += h.charAt(n);
            for (; b.length < e;)b += "0";
            e && e !== "0" && (f += d + b.substr(0, e))
        }
        i.push(g ? a.negPre : a.posPre);
        i.push(f);
        i.push(g ? a.negSuf : a.posSuf);
        return i.join("")
    }

    function jb(b, a, c) {
        var d = "";
        b < 0 && (d = "-", b = -b);
        for (b = "" + b; b.length < a;)b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function O(b, a, c, d) {
        c = c || 0;
        return function (e) {
            e = e["get" + b]();
            if (c > 0 || e > -c)e += c;
            e === 0 && c == -12 && (e = 12);
            return jb(e, a, d)
        }
    }

    function Ja(b, a) {
        return function (c, d) {
            var e = c["get" + b](), g = la(a ? "SHORT" + b : b);
            return d[g][e]
        }
    }

    function Tb(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                var a = new Date(0), g = 0, h = 0;
                b[9] && (g = G(b[9] + b[10]), h = G(b[9] + b[11]));
                a.setUTCFullYear(G(b[1]), G(b[2]) - 1, G(b[3]));
                a.setUTCHours(G(b[4] || 0) - g, G(b[5] || 0) - h, G(b[6] || 0), G(b[7] || 0))
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e) {
            var g = "", h = [], f, i, e = e || "mediumDate", e = b.DATETIME_FORMATS[e] || e;
            B(c) && (c = gd.test(c) ? G(c) : a(c));
            Qa(c) && (c = new Date(c));
            if (!na(c))return c;
            for (; e;)(i = hd.exec(e)) ? (h = h.concat(ha.call(i, 1)), e = h.pop()) : (h.push(e), e = null);
            m(h, function (a) {
                f = id[a];
                g += f ? f(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function cd() {
        return function (b) {
            return da(b, !0)
        }
    }

    function dd() {
        return function (b, a) {
            if (!(b instanceof Array))return b;
            var a = G(a), c = [], d, e;
            if (!b || !(b instanceof Array))return c;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            a > 0 ? (d = 0, e = a) : (d = b.length + a, e = b.length);
            for (; d < e; d++)c.push(b[d]);
            return c
        }
    }

    function Vb(b) {
        return function (a, c, d) {
            function e(a, b) {
                return Ua(b) ? function (b, c) {
                    return a(c, b)
                } : a
            }

            if (!E(a))return a;
            if (!c)return a;
            for (var c = E(c) ? c : [c], c = Ra(c, function (a) {
                var c = !1, d = a || ma;
                if (B(a)) {
                    if (a.charAt(0) == "+" || a.charAt(0) == "-")c = a.charAt(0) == "-", a = a.substring(1);
                    d = b(a)
                }
                return e(function (a, b) {
                    var c;
                    c = d(a);
                    var e = d(b), f = typeof c, g = typeof e;
                    f == g ? (f == "string" && (c = c.toLowerCase()),
                        f == "string" && (e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = f < g ? -1 : 1;
                    return c
                }, c)
            }), g = [], h = 0; h < a.length; h++)g.push(a[h]);
            return g.sort(e(function (a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (e !== 0)return e
                }
                return 0
            }, d))
        }
    }

    function S(b) {
        H(b) && (b = {link: b});
        b.restrict = b.restrict || "AC";
        return I(b)
    }

    function Yb(b, a) {
        function c(a, c) {
            c = c ? "-" + Za(c, "-") : "";
            b.removeClass((a ? Ka : La) + c).addClass((a ? La : Ka) + c)
        }

        var d = this, e = b.parent().controller("form") || Ma, g = 0, h = d.$error = {};
        d.$name = a.name;
        d.$dirty = !1;
        d.$pristine = !0;
        d.$valid = !0;
        d.$invalid = !1;
        e.$addControl(d);
        b.addClass(Na);
        c(!0);
        d.$addControl = function (a) {
            a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a)
        };
        d.$removeControl = function (a) {
            a.$name && d[a.$name] === a && delete d[a.$name];
            m(h, function (b, c) {
                d.$setValidity(c, !0, a)
            })
        };
        d.$setValidity = function (a, b, j) {
            var k = h[a];
            if (b) {
                if (k && (Sa(k, j), !k.length)) {
                    g--;
                    if (!g)c(b), d.$valid = !0, d.$invalid = !1;
                    h[a] = !1;
                    c(!0, a);
                    e.$setValidity(a, !0, d)
                }
            } else {
                g || c(b);
                if (k) {
                    if (za(k, j) != -1)return
                } else h[a] = k = [], g++, c(!1, a), e.$setValidity(a,
                    !1, d);
                k.push(j);
                d.$valid = !1;
                d.$invalid = !0
            }
        };
        d.$setDirty = function () {
            b.removeClass(Na).addClass(Zb);
            d.$dirty = !0;
            d.$pristine = !1;
            e.$setDirty()
        }
    }

    function X(b) {
        return w(b) || b === "" || b === null || b !== b
    }

    function Oa(b, a, c, d, e, g) {
        var h = function () {
            var c = Q(a.val());
            d.$viewValue !== c && b.$apply(function () {
                d.$setViewValue(c)
            })
        };
        if (e.hasEvent("input"))a.bind("input", h); else {
            var f, i = function () {
                f || (f = g.defer(function () {
                    h();
                    f = null
                }))
            };
            a.bind("keydown", function (a) {
                a = a.keyCode;
                a === 91 || 15 < a && a < 19 || 37 <= a && a <= 40 || i()
            });
            a.bind("change",
                h);
            e.hasEvent("paste") && a.bind("paste cut", i)
        }
        d.$render = function () {
            a.val(X(d.$viewValue) ? "" : d.$viewValue)
        };
        var j = c.ngPattern, k = function (a, b) {
            return X(b) || a.test(b) ? (d.$setValidity("pattern", !0), b) : (d.$setValidity("pattern", !1), q)
        };
        j && (j.match(/^\/(.*)\/$/) ? (j = RegExp(j.substr(1, j.length - 2)), e = function (a) {
            return k(j, a)
        }) : e = function (a) {
            var c = b.$eval(j);
            if (!c || !c.test)throw Error("Expected " + j + " to be a RegExp but was " + c);
            return k(c, a)
        }, d.$formatters.push(e), d.$parsers.push(e));
        if (c.ngMinlength) {
            var l =
                G(c.ngMinlength), e = function (a) {
                return!X(a) && a.length < l ? (d.$setValidity("minlength", !1), q) : (d.$setValidity("minlength", !0), a)
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var n = G(c.ngMaxlength), c = function (a) {
                return!X(a) && a.length > n ? (d.$setValidity("maxlength", !1), q) : (d.$setValidity("maxlength", !0), a)
            };
            d.$parsers.push(c);
            d.$formatters.push(c)
        }
    }

    function kb(b, a) {
        b = "ngClass" + b;
        return S(function (c, d, e) {
            function g(b) {
                if (a === !0 || c.$index % 2 === a)i && !fa(b, i) && h(i), f(b);
                i = U(b)
            }

            function h(a) {
                L(a) && !E(a) && (a = Ra(a, function (a, b) {
                    if (a)return b
                }));
                d.removeClass(E(a) ? a.join(" ") : a)
            }

            function f(a) {
                L(a) && !E(a) && (a = Ra(a, function (a, b) {
                    if (a)return b
                }));
                a && d.addClass(E(a) ? a.join(" ") : a)
            }

            var i = q;
            c.$watch(e[b], g, !0);
            e.$observe("class", function () {
                var a = c.$eval(e[b]);
                g(a, a)
            });
            b !== "ngClass" && c.$watch("$index", function (d, g) {
                var i = d & 1;
                i !== g & 1 && (i === a ? f(c.$eval(e[b])) : h(c.$eval(e[b])))
            })
        })
    }

    var z = function (b) {
        return B(b) ? b.toLowerCase() : b
    }, la = function (b) {
        return B(b) ? b.toUpperCase() : b
    }, Z = G((/msie (\d+)/.exec(z(navigator.userAgent)) ||
        [])[1]), u, ca, ha = [].slice, Pa = [].push, wa = Object.prototype.toString, Ya = P.angular || (P.angular = {}), sa, fb, aa = ["0", "0", "0"];
    C.$inject = [];
    ma.$inject = [];
    fb = Z < 9 ? function (b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && b.scopeName != "HTML" ? la(b.scopeName + ":" + b.nodeName) : b.nodeName
    } : function (b) {
        return b.nodeName ? b.nodeName : b[0].nodeName
    };
    var kc = /[A-Z]/g, jd = {full: "1.0.7", major: 1, minor: 0, dot: 7, codeName: "monochromatic-rainbow"}, Ba = K.cache = {}, Aa = K.expando = "ng-" + (new Date).getTime(), oc = 1, $b = P.document.addEventListener ?
        function (b, a, c) {
            b.addEventListener(a, c, !1)
        } : function (b, a, c) {
        b.attachEvent("on" + a, c)
    }, db = P.document.removeEventListener ? function (b, a, c) {
        b.removeEventListener(a, c, !1)
    } : function (b, a, c) {
        b.detachEvent("on" + a, c)
    }, mc = /([\:\-\_]+(.))/g, nc = /^moz([A-Z])/, ua = K.prototype = {ready: function (b) {
        function a() {
            c || (c = !0, b())
        }

        var c = !1;
        this.bind("DOMContentLoaded", a);
        K(P).bind("load", a)
    }, toString: function () {
        var b = [];
        m(this, function (a) {
            b.push("" + a)
        });
        return"[" + b.join(", ") + "]"
    }, eq: function (b) {
        return b >= 0 ? u(this[b]) : u(this[this.length +
            b])
    }, length: 0, push: Pa, sort: [].sort, splice: [].splice}, Ea = {};
    m("multiple,selected,checked,disabled,readOnly,required".split(","), function (b) {
        Ea[z(b)] = b
    });
    var Bb = {};
    m("input,select,option,textarea,button,form".split(","), function (b) {
        Bb[la(b)] = !0
    });
    m({data: wb, inheritedData: Da, scope: function (b) {
        return Da(b, "$scope")
    }, controller: zb, injector: function (b) {
        return Da(b, "$injector")
    }, removeAttr: function (b, a) {
        b.removeAttribute(a)
    }, hasClass: Ca, css: function (b, a, c) {
        a = tb(a);
        if (y(c))b.style[a] = c; else {
            var d;
            Z <= 8 && (d =
                b.currentStyle && b.currentStyle[a], d === "" && (d = "auto"));
            d = d || b.style[a];
            Z <= 8 && (d = d === "" ? q : d);
            return d
        }
    }, attr: function (b, a, c) {
        var d = z(a);
        if (Ea[d])if (y(c))c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || C).specified ? d : q; else if (y(c))b.setAttribute(a, c); else if (b.getAttribute)return b = b.getAttribute(a, 2), b === null ? q : b
    }, prop: function (b, a, c) {
        if (y(c))b[a] = c; else return b[a]
    }, text: v(Z < 9 ? function (b, a) {
        if (b.nodeType == 1) {
            if (w(a))return b.innerText;
            b.innerText = a
        } else {
            if (w(a))return b.nodeValue;
            b.nodeValue = a
        }
    } : function (b, a) {
        if (w(a))return b.textContent;
        b.textContent = a
    }, {$dv: ""}), val: function (b, a) {
        if (w(a))return b.value;
        b.value = a
    }, html: function (b, a) {
        if (w(a))return b.innerHTML;
        for (var c = 0, d = b.childNodes; c < d.length; c++)ra(d[c]);
        b.innerHTML = a
    }}, function (b, a) {
        K.prototype[a] = function (a, d) {
            var e, g;
            if ((b.length == 2 && b !== Ca && b !== zb ? a : d) === q)if (L(a)) {
                for (e = 0; e < this.length; e++)if (b === wb)b(this[e], a); else for (g in a)b(this[e], g, a[g]);
                return this
            } else {
                if (this.length)return b(this[0],
                    a, d)
            } else {
                for (e = 0; e < this.length; e++)b(this[e], a, d);
                return this
            }
            return b.$dv
        }
    });
    m({removeData: ub, dealoc: ra, bind: function a(c, d, e) {
        var g = ba(c, "events"), h = ba(c, "handle");
        g || ba(c, "events", g = {});
        h || ba(c, "handle", h = pc(c, g));
        m(d.split(" "), function (d) {
            var i = g[d];
            if (!i) {
                if (d == "mouseenter" || d == "mouseleave") {
                    var j = T.body.contains || T.body.compareDocumentPosition ? function (a, c) {
                        var d = a.nodeType === 9 ? a.documentElement : a, e = c && c.parentNode;
                        return a === e || !(!e || !(e.nodeType === 1 && (d.contains ? d.contains(e) : a.compareDocumentPosition &&
                            a.compareDocumentPosition(e) & 16)))
                    } : function (a, c) {
                        if (c)for (; c = c.parentNode;)if (c === a)return!0;
                        return!1
                    };
                    g[d] = [];
                    a(c, {mouseleave: "mouseout", mouseenter: "mouseover"}[d], function (a) {
                        var c = a.relatedTarget;
                        (!c || c !== this && !j(this, c)) && h(a, d)
                    })
                } else $b(c, d, h), g[d] = [];
                i = g[d]
            }
            i.push(e)
        })
    }, unbind: vb, replaceWith: function (a, c) {
        var d, e = a.parentNode;
        ra(a);
        m(new K(c), function (c) {
            d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
            d = c
        })
    }, children: function (a) {
        var c = [];
        m(a.childNodes, function (a) {
            a.nodeType === 1 && c.push(a)
        });
        return c
    }, contents: function (a) {
        return a.childNodes || []
    }, append: function (a, c) {
        m(new K(c), function (c) {
            a.nodeType === 1 && a.appendChild(c)
        })
    }, prepend: function (a, c) {
        if (a.nodeType === 1) {
            var d = a.firstChild;
            m(new K(c), function (c) {
                d ? a.insertBefore(c, d) : (a.appendChild(c), d = c)
            })
        }
    }, wrap: function (a, c) {
        var c = u(c)[0], d = a.parentNode;
        d && d.replaceChild(c, a);
        c.appendChild(a)
    }, remove: function (a) {
        ra(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }, after: function (a, c) {
        var d = a, e = a.parentNode;
        m(new K(c), function (a) {
            e.insertBefore(a,
                d.nextSibling);
            d = a
        })
    }, addClass: yb, removeClass: xb, toggleClass: function (a, c, d) {
        w(d) && (d = !Ca(a, c));
        (d ? yb : xb)(a, c)
    }, parent: function (a) {
        return(a = a.parentNode) && a.nodeType !== 11 ? a : null
    }, next: function (a) {
        if (a.nextElementSibling)return a.nextElementSibling;
        for (a = a.nextSibling; a != null && a.nodeType !== 1;)a = a.nextSibling;
        return a
    }, find: function (a, c) {
        return a.getElementsByTagName(c)
    }, clone: cb, triggerHandler: function (a, c) {
        var d = (ba(a, "events") || {})[c];
        m(d, function (c) {
            c.call(a, null)
        })
    }}, function (a, c) {
        K.prototype[c] =
            function (c, e) {
                for (var g, h = 0; h < this.length; h++)g == q ? (g = a(this[h], c, e), g !== q && (g = u(g))) : bb(g, a(this[h], c, e));
                return g == q ? this : g
            }
    });
    Fa.prototype = {put: function (a, c) {
        this[ga(a)] = c
    }, get: function (a) {
        return this[ga(a)]
    }, remove: function (a) {
        var c = this[a = ga(a)];
        delete this[a];
        return c
    }};
    eb.prototype = {push: function (a, c) {
        var d = this[a = ga(a)];
        d ? d.push(c) : this[a] = [c]
    }, shift: function (a) {
        var c = this[a = ga(a)];
        if (c)return c.length == 1 ? (delete this[a], c[0]) : c.shift()
    }, peek: function (a) {
        if (a = this[ga(a)])return a[0]
    }};
    var rc =
        /^function\s*[^\(]*\(\s*([^\)]*)\)/m, sc = /,/, tc = /^\s*(_?)(\S+?)\1\s*$/, qc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Eb = "Non-assignable model expression: ";
    Db.$inject = ["$provide"];
    var Bc = /^(x[\:\-_]|data[\:\-_])/i, Hb = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/, ac = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/, Ic = ac, Ib = {http: 80, https: 443, ftp: 21};
    hb.prototype = {$$replace: !1, absUrl: Ha("$$absUrl"), url: function (a, c) {
        if (w(a))return this.$$url;
        var d = ac.exec(a);
        d[1] && this.path(decodeURIComponent(d[1]));
        if (d[2] || d[1])this.search(d[3] || "");
        this.hash(d[5] || "", c);
        return this
    }, protocol: Ha("$$protocol"), host: Ha("$$host"), port: Ha("$$port"), path: Kb("$$path", function (a) {
        return a.charAt(0) == "/" ? a : "/" + a
    }), search: function (a, c) {
        if (w(a))return this.$$search;
        y(c) ? c === null ? delete this.$$search[a] : this.$$search[a] = c : this.$$search = B(a) ? Va(a) : a;
        this.$$compose();
        return this
    }, hash: Kb("$$hash", ma), replace: function () {
        this.$$replace = !0;
        return this
    }};
    Ga.prototype = ya(hb.prototype);
    Jb.prototype = ya(Ga.prototype);
    var Ia = {"null": function () {
        return null
    },
        "true": function () {
            return!0
        }, "false": function () {
            return!1
        }, undefined: C, "+": function (a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return y(d) ? y(e) ? d + e : d : y(e) ? e : q
        }, "-": function (a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return(y(d) ? d : 0) - (y(e) ? e : 0)
        }, "*": function (a, c, d, e) {
            return d(a, c) * e(a, c)
        }, "/": function (a, c, d, e) {
            return d(a, c) / e(a, c)
        }, "%": function (a, c, d, e) {
            return d(a, c) % e(a, c)
        }, "^": function (a, c, d, e) {
            return d(a, c) ^ e(a, c)
        }, "=": C, "==": function (a, c, d, e) {
            return d(a, c) == e(a, c)
        }, "!=": function (a, c, d, e) {
            return d(a, c) != e(a, c)
        }, "<": function (a, c, d, e) {
            return d(a, c) < e(a, c)
        }, ">": function (a, c, d, e) {
            return d(a, c) > e(a, c)
        }, "<=": function (a, c, d, e) {
            return d(a, c) <= e(a, c)
        }, ">=": function (a, c, d, e) {
            return d(a, c) >= e(a, c)
        }, "&&": function (a, c, d, e) {
            return d(a, c) && e(a, c)
        }, "||": function (a, c, d, e) {
            return d(a, c) || e(a, c)
        }, "&": function (a, c, d, e) {
            return d(a, c) & e(a, c)
        }, "|": function (a, c, d, e) {
            return e(a, c)(a, c, d(a, c))
        }, "!": function (a, c, d) {
            return!d(a, c)
        }}, Mc = {n: "\n", f: "\u000c", r: "\r", t: "\t", v: "\u000b", "'": "'", '"': '"'}, ib = {}, Zc = P.XMLHttpRequest || function () {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (a) {
        }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (c) {
        }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (d) {
        }
        throw Error("This browser does not support XMLHttpRequest.");
    };
    Rb.$inject = ["$provide"];
    Sb.$inject = ["$locale"];
    Ub.$inject = ["$locale"];
    var Xb = ".", id = {yyyy: O("FullYear", 4), yy: O("FullYear", 2, 0, !0), y: O("FullYear", 1), MMMM: Ja("Month"), MMM: Ja("Month", !0), MM: O("Month", 2, 1), M: O("Month", 1, 1), dd: O("Date", 2), d: O("Date", 1), HH: O("Hours", 2), H: O("Hours", 1), hh: O("Hours", 2, -12), h: O("Hours", 1, -12), mm: O("Minutes", 2), m: O("Minutes", 1), ss: O("Seconds", 2), s: O("Seconds", 1), EEEE: Ja("Day"), EEE: Ja("Day", !0), a: function (a, c) {
        return a.getHours() < 12 ? c.AMPMS[0] : c.AMPMS[1]
    }, Z: function (a) {
        var a =
            -1 * a.getTimezoneOffset(), c = a >= 0 ? "+" : "";
        c += jb(Math[a > 0 ? "floor" : "ceil"](a / 60), 2) + jb(Math.abs(a % 60), 2);
        return c
    }}, hd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, gd = /^\d+$/;
    Tb.$inject = ["$locale"];
    var ed = I(z), fd = I(la);
    Vb.$inject = ["$parse"];
    var kd = I({restrict: "E", compile: function (a, c) {
        Z <= 8 && (!c.href && !c.name && c.$set("href", ""), a.append(T.createComment("IE fix")));
        return function (a, c) {
            c.bind("click", function (a) {
                c.attr("href") || a.preventDefault()
            })
        }
    }}), lb = {};
    m(Ea, function (a, c) {
        var d = ea("ng-" + c);
        lb[d] = function () {
            return{priority: 100, compile: function () {
                return function (a, g, h) {
                    a.$watch(h[d], function (a) {
                        h.$set(c, !!a)
                    })
                }
            }}
        }
    });
    m(["src", "href"], function (a) {
        var c = ea("ng-" + a);
        lb[c] = function () {
            return{priority: 99, link: function (d, e, g) {
                g.$observe(c, function (c) {
                    c && (g.$set(a, c), Z && e.prop(a, g[a]))
                })
            }}
        }
    });
    var Ma = {$addControl: C, $removeControl: C, $setValidity: C, $setDirty: C};
    Yb.$inject = ["$element", "$attrs", "$scope"];
    var Pa = function (a) {
            return["$timeout", function (c) {
                var d = {name: "form", restrict: "E",
                    controller: Yb, compile: function () {
                        return{pre: function (a, d, h, f) {
                            if (!h.action) {
                                var i = function (a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                };
                                $b(d[0], "submit", i);
                                d.bind("$destroy", function () {
                                    c(function () {
                                        db(d[0], "submit", i)
                                    }, 0, !1)
                                })
                            }
                            var j = d.parent().controller("form"), k = h.name || h.ngForm;
                            k && (a[k] = f);
                            j && d.bind("$destroy", function () {
                                j.$removeControl(f);
                                k && (a[k] = q);
                                v(f, Ma)
                            })
                        }}
                    }};
                return a ? v(U(d), {restrict: "EAC"}) : d
            }]
        }, ld = Pa(), md = Pa(!0), nd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        od = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, pd = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, bc = {text: Oa, number: function (a, c, d, e, g, h) {
            Oa(a, c, d, e, g, h);
            e.$parsers.push(function (a) {
                var c = X(a);
                return c || pd.test(a) ? (e.$setValidity("number", !0), a === "" ? null : c ? a : parseFloat(a)) : (e.$setValidity("number", !1), q)
            });
            e.$formatters.push(function (a) {
                return X(a) ? "" : "" + a
            });
            if (d.min) {
                var f = parseFloat(d.min), a = function (a) {
                    return!X(a) && a < f ? (e.$setValidity("min", !1), q) : (e.$setValidity("min", !0), a)
                };
                e.$parsers.push(a);
                e.$formatters.push(a)
            }
            if (d.max) {
                var i = parseFloat(d.max), d = function (a) {
                    return!X(a) && a > i ? (e.$setValidity("max", !1), q) : (e.$setValidity("max", !0), a)
                };
                e.$parsers.push(d);
                e.$formatters.push(d)
            }
            e.$formatters.push(function (a) {
                return X(a) || Qa(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), q)
            })
        }, url: function (a, c, d, e, g, h) {
            Oa(a, c, d, e, g, h);
            a = function (a) {
                return X(a) || nd.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), q)
            };
            e.$formatters.push(a);
            e.$parsers.push(a)
        }, email: function (a, c, d, e, g, h) {
            Oa(a, c, d, e, g, h);
            a = function (a) {
                return X(a) || od.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), q)
            };
            e.$formatters.push(a);
            e.$parsers.push(a)
        }, radio: function (a, c, d, e) {
            w(d.name) && c.attr("name", xa());
            c.bind("click", function () {
                c[0].checked && a.$apply(function () {
                    e.$setViewValue(d.value)
                })
            });
            e.$render = function () {
                c[0].checked = d.value == e.$viewValue
            };
            d.$observe("value", e.$render)
        }, checkbox: function (a, c, d, e) {
            var g = d.ngTrueValue, h = d.ngFalseValue;
            B(g) || (g = !0);
            B(h) || (h = !1);
            c.bind("click",
                function () {
                    a.$apply(function () {
                        e.$setViewValue(c[0].checked)
                    })
                });
            e.$render = function () {
                c[0].checked = e.$viewValue
            };
            e.$formatters.push(function (a) {
                return a === g
            });
            e.$parsers.push(function (a) {
                return a ? g : h
            })
        }, hidden: C, button: C, submit: C, reset: C}, cc = ["$browser", "$sniffer", function (a, c) {
            return{restrict: "E", require: "?ngModel", link: function (d, e, g, h) {
                h && (bc[z(g.type)] || bc.text)(d, e, g, h, c, a)
            }}
        }], La = "ng-valid", Ka = "ng-invalid", Na = "ng-pristine", Zb = "ng-dirty", qd = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse",
            function (a, c, d, e, g) {
                function h(a, c) {
                    c = c ? "-" + Za(c, "-") : "";
                    e.removeClass((a ? Ka : La) + c).addClass((a ? La : Ka) + c)
                }

                this.$modelValue = this.$viewValue = Number.NaN;
                this.$parsers = [];
                this.$formatters = [];
                this.$viewChangeListeners = [];
                this.$pristine = !0;
                this.$dirty = !1;
                this.$valid = !0;
                this.$invalid = !1;
                this.$name = d.name;
                var f = g(d.ngModel), i = f.assign;
                if (!i)throw Error(Eb + d.ngModel + " (" + pa(e) + ")");
                this.$render = C;
                var j = e.inheritedData("$formController") || Ma, k = 0, l = this.$error = {};
                e.addClass(Na);
                h(!0);
                this.$setValidity = function (a, c) {
                    if (l[a] !== !c) {
                        if (c) {
                            if (l[a] && k--, !k)h(!0), this.$valid = !0, this.$invalid = !1
                        } else h(!1), this.$invalid = !0, this.$valid = !1, k++;
                        l[a] = !c;
                        h(c, a);
                        j.$setValidity(a, c, this)
                    }
                };
                this.$setViewValue = function (d) {
                    this.$viewValue = d;
                    if (this.$pristine)this.$dirty = !0, this.$pristine = !1, e.removeClass(Na).addClass(Zb), j.$setDirty();
                    m(this.$parsers, function (a) {
                        d = a(d)
                    });
                    if (this.$modelValue !== d)this.$modelValue = d, i(a, d), m(this.$viewChangeListeners, function (a) {
                        try {
                            a()
                        } catch (d) {
                            c(d)
                        }
                    })
                };
                var n = this;
                a.$watch(function () {
                    var c =
                        f(a);
                    if (n.$modelValue !== c) {
                        var d = n.$formatters, e = d.length;
                        for (n.$modelValue = c; e--;)c = d[e](c);
                        if (n.$viewValue !== c)n.$viewValue = c, n.$render()
                    }
                })
            }], rd = function () {
            return{require: ["ngModel", "^?form"], controller: qd, link: function (a, c, d, e) {
                var g = e[0], h = e[1] || Ma;
                h.$addControl(g);
                c.bind("$destroy", function () {
                    h.$removeControl(g)
                })
            }}
        }, sd = I({require: "ngModel", link: function (a, c, d, e) {
            e.$viewChangeListeners.push(function () {
                a.$eval(d.ngChange)
            })
        }}), dc = function () {
            return{require: "?ngModel", link: function (a, c, d, e) {
                if (e) {
                    d.required = !0;
                    var g = function (a) {
                        if (d.required && (X(a) || a === !1))e.$setValidity("required", !1); else return e.$setValidity("required", !0), a
                    };
                    e.$formatters.push(g);
                    e.$parsers.unshift(g);
                    d.$observe("required", function () {
                        g(e.$viewValue)
                    })
                }
            }}
        }, td = function () {
            return{require: "ngModel", link: function (a, c, d, e) {
                var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                e.$parsers.push(function (a) {
                    var c = [];
                    a && m(a.split(g), function (a) {
                        a && c.push(Q(a))
                    });
                    return c
                });
                e.$formatters.push(function (a) {
                    return E(a) ? a.join(", ") :
                        q
                })
            }}
        }, ud = /^(true|false|\d+)$/, vd = function () {
            return{priority: 100, compile: function (a, c) {
                return ud.test(c.ngValue) ? function (a, c, g) {
                    g.$set("value", a.$eval(g.ngValue))
                } : function (a, c, g) {
                    a.$watch(g.ngValue, function (a) {
                        g.$set("value", a, !1)
                    })
                }
            }}
        }, wd = S(function (a, c, d) {
            c.addClass("ng-binding").data("$binding", d.ngBind);
            a.$watch(d.ngBind, function (a) {
                c.text(a == q ? "" : a)
            })
        }), xd = ["$interpolate", function (a) {
            return function (c, d, e) {
                c = a(d.attr(e.$attr.ngBindTemplate));
                d.addClass("ng-binding").data("$binding", c);
                e.$observe("ngBindTemplate",
                    function (a) {
                        d.text(a)
                    })
            }
        }], yd = [function () {
            return function (a, c, d) {
                c.addClass("ng-binding").data("$binding", d.ngBindHtmlUnsafe);
                a.$watch(d.ngBindHtmlUnsafe, function (a) {
                    c.html(a || "")
                })
            }
        }], zd = kb("", !0), Ad = kb("Odd", 0), Bd = kb("Even", 1), Cd = S({compile: function (a, c) {
            c.$set("ngCloak", q);
            a.removeClass("ng-cloak")
        }}), Dd = [function () {
            return{scope: !0, controller: "@"}
        }], Ed = ["$sniffer", function (a) {
            return{priority: 1E3, compile: function () {
                a.csp = !0
            }}
        }], ec = {};
    m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "),
        function (a) {
            var c = ea("ng-" + a);
            ec[c] = ["$parse", function (d) {
                return function (e, g, h) {
                    var f = d(h[c]);
                    g.bind(z(a), function (a) {
                        e.$apply(function () {
                            f(e, {$event: a})
                        })
                    })
                }
            }]
        });
    var Fd = S(function (a, c, d) {
        c.bind("submit", function () {
            a.$apply(d.ngSubmit)
        })
    }), Gd = ["$http", "$templateCache", "$anchorScroll", "$compile", function (a, c, d, e) {
        return{restrict: "ECA", terminal: !0, compile: function (g, h) {
            var f = h.ngInclude || h.src, i = h.onload || "", j = h.autoscroll;
            return function (g, h) {
                var n = 0, o, p = function () {
                    o && (o.$destroy(), o = null);
                    h.html("")
                };
                g.$watch(f, function (f) {
                    var m = ++n;
                    f ? a.get(f, {cache: c}).success(function (a) {
                        m === n && (o && o.$destroy(), o = g.$new(), h.html(a), e(h.contents())(o), y(j) && (!j || g.$eval(j)) && d(), o.$emit("$includeContentLoaded"), g.$eval(i))
                    }).error(function () {
                        m === n && p()
                    }) : p()
                })
            }
        }}
    }], Hd = S({compile: function () {
        return{pre: function (a, c, d) {
            a.$eval(d.ngInit)
        }}
    }}), Id = S({terminal: !0, priority: 1E3}), Jd = ["$locale", "$interpolate", function (a, c) {
        var d = /{}/g;
        return{restrict: "EA", link: function (e, g, h) {
            var f = h.count, i = g.attr(h.$attr.when), j = h.offset ||
                0, k = e.$eval(i), l = {}, n = c.startSymbol(), o = c.endSymbol();
            m(k, function (a, e) {
                l[e] = c(a.replace(d, n + f + "-" + j + o))
            });
            e.$watch(function () {
                var c = parseFloat(e.$eval(f));
                return isNaN(c) ? "" : (c in k || (c = a.pluralCat(c - j)), l[c](e, g, !0))
            }, function (a) {
                g.text(a)
            })
        }}
    }], Kd = S({transclude: "element", priority: 1E3, terminal: !0, compile: function (a, c, d) {
        return function (a, c, h) {
            var f = h.ngRepeat, h = f.match(/^\s*(.+)\s+in\s+(.*)\s*$/), i, j, k;
            if (!h)throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '" + f + "'.");
            f =
                h[1];
            i = h[2];
            h = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!h)throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" + f + "'.");
            j = h[3] || h[1];
            k = h[2];
            var l = new eb;
            a.$watch(function (a) {
                var e, f, h = a.$eval(i), m = c, q = new eb, y, A, u, w, r, v;
                if (E(h))r = h || []; else {
                    r = [];
                    for (u in h)h.hasOwnProperty(u) && u.charAt(0) != "$" && r.push(u);
                    r.sort()
                }
                y = r.length - 1;
                e = 0;
                for (f = r.length; e < f; e++) {
                    u = h === r ? e : r[e];
                    w = h[u];
                    if (v = l.shift(w)) {
                        A = v.scope;
                        q.push(w, v);
                        if (e !== v.index)v.index = e, m.after(v.element);
                        m = v.element
                    } else A = a.$new();
                    A[j] = w;
                    k && (A[k] = u);
                    A.$index = e;
                    A.$first = e === 0;
                    A.$last = e === y;
                    A.$middle = !(A.$first || A.$last);
                    v || d(A, function (a) {
                        m.after(a);
                        v = {scope: A, element: m = a, index: e};
                        q.push(w, v)
                    })
                }
                for (u in l)if (l.hasOwnProperty(u))for (r = l[u]; r.length;)w = r.pop(), w.element.remove(), w.scope.$destroy();
                l = q
            })
        }
    }}), Ld = S(function (a, c, d) {
        a.$watch(d.ngShow, function (a) {
            c.css("display", Ua(a) ? "" : "none")
        })
    }), Md = S(function (a, c, d) {
        a.$watch(d.ngHide, function (a) {
            c.css("display", Ua(a) ? "none" : "")
        })
    }), Nd = S(function (a, c, d) {
        a.$watch(d.ngStyle, function (a, d) {
            d && a !== d && m(d, function (a, d) {
                c.css(d, "")
            });
            a && c.css(a)
        }, !0)
    }), Od = I({restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {}
    }], link: function (a, c, d, e) {
        var g, h, f;
        a.$watch(d.ngSwitch || d.on, function (i) {
            h && (f.$destroy(), h.remove(), h = f = null);
            if (g = e.cases["!" + i] || e.cases["?"])a.$eval(d.change), f = a.$new(), g(f, function (a) {
                h = a;
                c.append(a)
            })
        })
    }}), Pd = S({transclude: "element", priority: 500, require: "^ngSwitch", compile: function (a, c, d) {
        return function (a, g, h, f) {
            f.cases["!" + c.ngSwitchWhen] = d
        }
    }}), Qd = S({transclude: "element", priority: 500, require: "^ngSwitch", compile: function (a, c, d) {
        return function (a, c, h, f) {
            f.cases["?"] = d
        }
    }}), Rd = S({controller: ["$transclude", "$element", function (a, c) {
        a(function (a) {
            c.append(a)
        })
    }]}), Sd = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function (a, c, d, e, g, h) {
        return{restrict: "ECA", terminal: !0, link: function (a, c, j) {
            function k() {
                var j = d.current && d.current.locals, k = j && j.$template;
                if (k) {
                    c.html(k);
                    l && (l.$destroy(),
                        l = null);
                    var k = g(c.contents()), m = d.current;
                    l = m.scope = a.$new();
                    if (m.controller)j.$scope = l, j = h(m.controller, j), c.children().data("$ngControllerController", j);
                    k(l);
                    l.$emit("$viewContentLoaded");
                    l.$eval(n);
                    e()
                } else c.html(""), l && (l.$destroy(), l = null)
            }

            var l, n = j.onload || "";
            a.$on("$routeChangeSuccess", k);
            k()
        }}
    }], Td = ["$templateCache", function (a) {
        return{restrict: "E", terminal: !0, compile: function (c, d) {
            d.type == "text/ng-template" && a.put(d.id, c[0].text)
        }}
    }], Ud = I({terminal: !0}), Vd = ["$compile", "$parse", function (a, c) {
        var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/, e = {$setViewValue: C};
        return{restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function (a, c, d) {
            var i = this, j = {}, k = e, l;
            i.databound = d.ngModel;
            i.init = function (a, c, d) {
                k = a;
                l = d
            };
            i.addOption = function (c) {
                j[c] = !0;
                k.$viewValue == c && (a.val(c), l.parent() && l.remove())
            };
            i.removeOption = function (a) {
                this.hasOption(a) && (delete j[a],
                    k.$viewValue == a && this.renderUnknownOption(a))
            };
            i.renderUnknownOption = function (c) {
                c = "? " + ga(c) + " ?";
                l.val(c);
                a.prepend(l);
                a.val(c);
                l.prop("selected", !0)
            };
            i.hasOption = function (a) {
                return j.hasOwnProperty(a)
            };
            c.$on("$destroy", function () {
                i.renderUnknownOption = C
            })
        }], link: function (e, h, f, i) {
            function j(a, c, d, e) {
                d.$render = function () {
                    var a = d.$viewValue;
                    e.hasOption(a) ? (z.parent() && z.remove(), c.val(a), a === "" && v.prop("selected", !0)) : w(a) && v ? c.val("") : e.renderUnknownOption(a)
                };
                c.bind("change", function () {
                    a.$apply(function () {
                        z.parent() &&
                        z.remove();
                        d.$setViewValue(c.val())
                    })
                })
            }

            function k(a, c, d) {
                var e;
                d.$render = function () {
                    var a = new Fa(d.$viewValue);
                    m(c.find("option"), function (c) {
                        c.selected = y(a.get(c.value))
                    })
                };
                a.$watch(function () {
                    fa(e, d.$viewValue) || (e = U(d.$viewValue), d.$render())
                });
                c.bind("change", function () {
                    a.$apply(function () {
                        var a = [];
                        m(c.find("option"), function (c) {
                            c.selected && a.push(c.value)
                        });
                        d.$setViewValue(a)
                    })
                })
            }

            function l(e, f, g) {
                function h() {
                    var a = {"": []}, c = [""], d, i, s, u, v;
                    s = g.$modelValue;
                    u = o(e) || [];
                    var w = l ? mb(u) : u, y, x, z;
                    x =
                    {};
                    v = !1;
                    var B, E;
                    p && (v = new Fa(s));
                    for (z = 0; y = w.length, z < y; z++) {
                        x[k] = u[l ? x[l] = w[z] : z];
                        d = m(e, x) || "";
                        if (!(i = a[d]))i = a[d] = [], c.push(d);
                        p ? d = v.remove(n(e, x)) != q : (d = s === n(e, x), v = v || d);
                        B = j(e, x);
                        B = B === q ? "" : B;
                        i.push({id: l ? w[z] : z, label: B, selected: d})
                    }
                    p || (t || s === null ? a[""].unshift({id: "", label: "", selected: !v}) : v || a[""].unshift({id: "?", label: "", selected: !0}));
                    x = 0;
                    for (w = c.length; x < w; x++) {
                        d = c[x];
                        i = a[d];
                        if (r.length <= x)s = {element: A.clone().attr("label", d), label: i.label}, u = [s], r.push(u), f.append(s.element); else if (u =
                            r[x], s = u[0], s.label != d)s.element.attr("label", s.label = d);
                        B = null;
                        z = 0;
                        for (y = i.length; z < y; z++)if (d = i[z], v = u[z + 1]) {
                            B = v.element;
                            if (v.label !== d.label)B.text(v.label = d.label);
                            if (v.id !== d.id)B.val(v.id = d.id);
                            if (B[0].selected !== d.selected)B.prop("selected", v.selected = d.selected)
                        } else d.id === "" && t ? E = t : (E = C.clone()).val(d.id).attr("selected", d.selected).text(d.label), u.push({element: E, label: d.label, id: d.id, selected: d.selected}), B ? B.after(E) : s.element.append(E), B = E;
                        for (z++; u.length > z;)u.pop().element.remove()
                    }
                    for (; r.length >
                               x;)r.pop()[0].element.remove()
                }

                var i;
                if (!(i = s.match(d)))throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + s + "'.");
                var j = c(i[2] || i[1]), k = i[4] || i[6], l = i[5], m = c(i[3] || ""), n = c(i[2] ? i[1] : k), o = c(i[7]), r = [
                    [
                        {element: f, label: ""}
                    ]
                ];
                t && (a(t)(e), t.removeClass("ng-scope"), t.remove());
                f.html("");
                f.bind("change", function () {
                    e.$apply(function () {
                        var a, c = o(e) || [], d = {}, h, i, j, m, s, t;
                        if (p) {
                            i = [];
                            m = 0;
                            for (t = r.length; m < t; m++) {
                                a = r[m];
                                j = 1;
                                for (s = a.length; j < s; j++)if ((h =
                                    a[j].element)[0].selected)h = h.val(), l && (d[l] = h), d[k] = c[h], i.push(n(e, d))
                            }
                        } else h = f.val(), h == "?" ? i = q : h == "" ? i = null : (d[k] = c[h], l && (d[l] = h), i = n(e, d));
                        g.$setViewValue(i)
                    })
                });
                g.$render = h;
                e.$watch(h)
            }

            if (i[1]) {
                for (var n = i[0], o = i[1], p = f.multiple, s = f.ngOptions, t = !1, v, C = u(T.createElement("option")), A = u(T.createElement("optgroup")), z = C.clone(), i = 0, B = h.children(), r = B.length; i < r; i++)if (B[i].value == "") {
                    v = t = B.eq(i);
                    break
                }
                n.init(o, t, z);
                if (p && (f.required || f.ngRequired)) {
                    var E = function (a) {
                        o.$setValidity("required",
                            !f.required || a && a.length);
                        return a
                    };
                    o.$parsers.push(E);
                    o.$formatters.unshift(E);
                    f.$observe("required", function () {
                        E(o.$viewValue)
                    })
                }
                s ? l(e, h, o) : p ? k(e, h, o) : j(e, h, o, n)
            }
        }}
    }], Wd = ["$interpolate", function (a) {
        var c = {addOption: C, removeOption: C};
        return{restrict: "E", priority: 100, compile: function (d, e) {
            if (w(e.value)) {
                var g = a(d.text(), !0);
                g || e.$set("value", d.text())
            }
            return function (a, d, e) {
                var j = d.parent(), k = j.data("$selectController") || j.parent().data("$selectController");
                k && k.databound ? d.prop("selected", !1) : k =
                    c;
                g ? a.$watch(g, function (a, c) {
                    e.$set("value", a);
                    a !== c && k.removeOption(c);
                    k.addOption(a)
                }) : k.addOption(e.value);
                d.bind("$destroy", function () {
                    k.removeOption(e.value)
                })
            }
        }}
    }], Xd = I({restrict: "E", terminal: !0});
    (ca = P.jQuery) ? (u = ca, v(ca.fn, {scope: ua.scope, controller: ua.controller, injector: ua.injector, inheritedData: ua.inheritedData}), ab("remove", !0), ab("empty"), ab("html")) : u = K;
    Ya.element = u;
    (function (a) {
        v(a, {bootstrap: rb, copy: U, extend: v, equals: fa, element: u, forEach: m, injector: sb, noop: C, bind: Ta, toJson: da, fromJson: pb,
            identity: ma, isUndefined: w, isDefined: y, isString: B, isFunction: H, isObject: L, isNumber: Qa, isElement: gc, isArray: E, version: jd, isDate: na, lowercase: z, uppercase: la, callbacks: {counter: 0}});
        sa = lc(P);
        try {
            sa("ngLocale")
        } catch (c) {
            sa("ngLocale", []).provider("$locale", $c)
        }
        sa("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider("$compile", Db).directive({a: kd, input: cc, textarea: cc, form: ld, script: Td, select: Vd, style: Xd, option: Wd, ngBind: wd, ngBindHtmlUnsafe: yd, ngBindTemplate: xd, ngClass: zd, ngClassEven: Bd, ngClassOdd: Ad, ngCsp: Ed,
                ngCloak: Cd, ngController: Dd, ngForm: md, ngHide: Md, ngInclude: Gd, ngInit: Hd, ngNonBindable: Id, ngPluralize: Jd, ngRepeat: Kd, ngShow: Ld, ngSubmit: Fd, ngStyle: Nd, ngSwitch: Od, ngSwitchWhen: Pd, ngSwitchDefault: Qd, ngOptions: Ud, ngView: Sd, ngTransclude: Rd, ngModel: rd, ngList: td, ngChange: sd, required: dc, ngRequired: dc, ngValue: vd}).directive(lb).directive(ec);
            a.provider({$anchorScroll: uc, $browser: wc, $cacheFactory: xc, $controller: Cc, $document: Dc, $exceptionHandler: Ec, $filter: Rb, $interpolate: Fc, $http: Wc, $httpBackend: Xc, $location: Jc,
                $log: Kc, $parse: Oc, $route: Rc, $routeParams: Sc, $rootScope: Tc, $q: Pc, $sniffer: Uc, $templateCache: yc, $timeout: ad, $window: Vc})
        }])
    })(Ya);
    u(T).ready(function () {
        jc(T, rb)
    })
})(window, document);
angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');

/*
 AngularJS v1.0.7
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (C, d, w) {
    'use strict';
    d.module("ngResource", ["ng"]).factory("$resource", ["$http", "$parse", function (x, y) {
        function s(b, e) {
            return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+")
        }

        function t(b, e) {
            this.template = b += "#";
            this.defaults = e || {};
            var a = this.urlParams = {};
            h(b.split(/\W/), function (f) {
                f && RegExp("(^|[^\\\\]):" + f + "\\W").test(b) && (a[f] = !0)
            });
            this.template = b.replace(/\\:/g, ":")
        }

        function u(b, e, a) {
            function f(m, a) {
                var b =
                {}, a = o({}, e, a);
                h(a, function (a, z) {
                    var c;
                    a.charAt && a.charAt(0) == "@" ? (c = a.substr(1), c = y(c)(m)) : c = a;
                    b[z] = c
                });
                return b
            }

            function g(a) {
                v(a || {}, this)
            }

            var k = new t(b), a = o({}, A, a);
            h(a, function (a, b) {
                a.method = d.uppercase(a.method);
                var e = a.method == "POST" || a.method == "PUT" || a.method == "PATCH";
                g[b] = function (b, c, d, B) {
                    var j = {}, i, l = p, q = null;
                    switch (arguments.length) {
                        case 4:
                            q = B, l = d;
                        case 3:
                        case 2:
                            if (r(c)) {
                                if (r(b)) {
                                    l = b;
                                    q = c;
                                    break
                                }
                                l = c;
                                q = d
                            } else {
                                j = b;
                                i = c;
                                l = d;
                                break
                            }
                        case 1:
                            r(b) ? l = b : e ? i = b : j = b;
                            break;
                        case 0:
                            break;
                        default:
                            throw"Expected between 0-4 arguments [params, data, success, error], got " +
                                arguments.length + " arguments.";
                    }
                    var n = this instanceof g ? this : a.isArray ? [] : new g(i);
                    x({method: a.method, url: k.url(o({}, f(i, a.params || {}), j)), data: i}).then(function (b) {
                        var c = b.data;
                        if (c)a.isArray ? (n.length = 0, h(c, function (a) {
                            n.push(new g(a))
                        })) : v(c, n);
                        (l || p)(n, b.headers)
                    }, q);
                    return n
                };
                g.prototype["$" + b] = function (a, d, h) {
                    var m = f(this), j = p, i;
                    switch (arguments.length) {
                        case 3:
                            m = a;
                            j = d;
                            i = h;
                            break;
                        case 2:
                        case 1:
                            r(a) ? (j = a, i = d) : (m = a, j = d || p);
                        case 0:
                            break;
                        default:
                            throw"Expected between 1-3 arguments [params, success, error], got " +
                                arguments.length + " arguments.";
                    }
                    g[b].call(this, m, e ? this : w, j, i)
                }
            });
            g.bind = function (d) {
                return u(b, o({}, e, d), a)
            };
            return g
        }

        var A = {get: {method: "GET"}, save: {method: "POST"}, query: {method: "GET", isArray: !0}, remove: {method: "DELETE"}, "delete": {method: "DELETE"}}, p = d.noop, h = d.forEach, o = d.extend, v = d.copy, r = d.isFunction;
        t.prototype = {url: function (b) {
            var e = this, a = this.template, f, g, b = b || {};
            h(this.urlParams, function (h, c) {
                f = b.hasOwnProperty(c) ? b[c] : e.defaults[c];
                d.isDefined(f) && f !== null ? (g = s(f, !0).replace(/%26/gi, "&").replace(/%3D/gi,
                    "=").replace(/%2B/gi, "+"), a = a.replace(RegExp(":" + c + "(\\W)", "g"), g + "$1")) : a = a.replace(RegExp("(/?):" + c + "(\\W)", "g"), function (a, b, c) {
                    return c.charAt(0) == "/" ? c : b + c
                })
            });
            var a = a.replace(/\/?#$/, ""), k = [];
            h(b, function (a, b) {
                e.urlParams[b] || k.push(s(b) + "=" + s(a))
            });
            k.sort();
            a = a.replace(/\/*$/, "");
            return a + (k.length ? "?" + k.join("&") : "")
        }};
        return u
    }])
})(window, window.angular);

/*
 AngularJS v1.0.7
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (m, f, l) {
    'use strict';
    f.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function (d, b) {
            var c = {}, g = {}, h, i = !1, j = f.copy, k = f.isUndefined;
            b.addPollFn(function () {
                var a = b.cookies();
                h != a && (h = a, j(a, g), j(a, c), i && d.$apply())
            })();
            i = !0;
            d.$watch(function () {
                var a, e, d;
                for (a in g)k(c[a]) && b.cookies(a, l);
                for (a in c)e = c[a], f.isString(e) ? e !== g[a] && (b.cookies(a, e), d = !0) : f.isDefined(g[a]) ? c[a] = g[a] : delete c[a];
                if (d)for (a in e = b.cookies(), c)c[a] !== e[a] && (k(e[a]) ? delete c[a] : c[a] = e[a])
            });
            return c
        }]).factory("$cookieStore",
        ["$cookies", function (d) {
            return{get: function (b) {
                return(b = d[b]) ? f.fromJson(b) : b
            }, put: function (b, c) {
                d[b] = f.toJson(c)
            }, remove: function (b) {
                delete d[b]
            }}
        }])
})(window, window.angular);