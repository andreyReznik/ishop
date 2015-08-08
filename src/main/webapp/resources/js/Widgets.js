// create OffAmazonPayments Widgets namespace
if (!OffAmazonPayments || typeof(OffAmazonPayments) == "undefined") {
    var OffAmazonPayments = {}; // Make sure the base namespace exists
}
// store time when we start processing our first JS
OffAmazonPayments.ZERO_TIME = (new Date()).getTime();

var __cba__buttonversion = 0;

/*
 http://www.JSON.org/json2.js
 2010-03-20
 Public Domain.
 NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 See http://www.JSON.org/js.html
 */

if (typeof JSON !== 'object') {
    JSON = {}
}
(function () {
    'use strict';
    function f(n) {
        return n < 10 ? '0' + n : n
    }

    if (typeof Date.prototype.toJSON !== 'function') {
        Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {'\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\'}, rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
            value = value.toJSON(key)
        }
        if (typeof rep === 'function') {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
            case'string':
                return quote(value);
            case'number':
                return isFinite(value) ? String(value) : 'null';
            case'boolean':
            case'null':
                return String(value);
            case'object':
                if (!value) {
                    return'null'
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || 'null'
                    }
                    v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === 'object') {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === 'string') {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                gap = mind;
                return v
        }
    }

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = '';
            indent = '';
            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' '
                }
            } else if (typeof space === 'string') {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify')
            }
            return str('', {'': value})
        }
    }
    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return'\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                j = eval('(' + text + ')');
                return typeof reviver === 'function' ? walk({'': j}, '') : j
            }
            throw new SyntaxError('JSON.parse')
        }
    }
}());
/**
 * Version: _V1438376751_
 * Copyright 2011 Amazon.com, Inc., or its Affiliates.
 **/

/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function (aO, I) {
    function a0() {
        if (!ai.isReady) {
            try {
                M.documentElement.doScroll("left")
            } catch (c) {
                setTimeout(a0, 1);
                return
            }
            ai.ready()
        }
    }

    function E(s, c) {
        c.src ? ai.ajax({url: c.src, async: false, dataType: "script"}) : ai.globalEval(c.text || c.textContent || c.innerHTML || "");
        c.parentNode && c.parentNode.removeChild(c)
    }

    function ap(s, c, K, F, G, w) {
        var A = s.length;
        if (typeof c === "object") {
            for (var J in c) {
                ap(s, J, c[J], F, G, K)
            }
            return s
        }
        if (K !== I) {
            F = !w && F && ai.isFunction(K);
            for (J = 0; J < A; J++) {
                G(s[J], c, F ? K.call(s[J], J, G(s[J], c)) : K, w)
            }
            return s
        }
        return A ? G(s[0], c) : I
    }

    function aF() {
        return(new Date).getTime()
    }

    function an() {
        return false
    }

    function am() {
        return true
    }

    function aK(s, c, w) {
        w[0].type = s;
        return ai.event.handle.apply(c, w)
    }

    function ag(O) {
        var N, L = [], J = [], K = arguments, F, G, s, A, w, c;
        G = ai.data(this, "events");
        if (!(O.liveFired === this || !G || !G.live || O.button && O.type === "click")) {
            O.liveFired = this;
            var P = G.live.slice(0);
            for (A = 0; A < P.length; A++) {
                G = P[A];
                G.origType.replace(ay, "") === O.type ? J.push(G.selector) : P.splice(A--, 1)
            }
            F = ai(O.target).closest(J, O.currentTarget);
            w = 0;
            for (c = F.length; w < c; w++) {
                for (A = 0; A < P.length; A++) {
                    G = P[A];
                    if (F[w].selector === G.selector) {
                        s = F[w].elem;
                        J = null;
                        if (G.preType === "mouseenter" || G.preType === "mouseleave") {
                            J = ai(O.relatedTarget).closest(G.selector)[0]
                        }
                        if (!J || J !== s) {
                            L.push({elem: s, handleObj: G})
                        }
                    }
                }
            }
            w = 0;
            for (c = L.length; w < c; w++) {
                F = L[w];
                O.currentTarget = F.elem;
                O.data = F.handleObj.data;
                O.handleObj = F.handleObj;
                if (F.handleObj.origHandler.apply(F.elem, K) === false) {
                    N = false;
                    break
                }
            }
            return N
        }
    }

    function z(s, c) {
        return"live." + (s && s !== "*" ? s + "." : "") + c.replace(/\./g, "`").replace(/ /g, "&")
    }

    function l(c) {
        return !c || !c.parentNode || c.parentNode.nodeType === 11
    }

    function bj(s, c) {
        var w = 0;
        c.each(function () {
            if (this.nodeName === (s[w] && s[w].nodeName)) {
                var G = ai.data(s[w++]), J = ai.data(this, G);
                if (G = G && G.events) {
                    delete J.handle;
                    J.events = {};
                    for (var A in G) {
                        for (var F in G[A]) {
                            ai.event.add(this, A, G[A][F], G[A][F].data)
                        }
                    }
                }
            }
        })
    }

    function a3(s, c, G) {
        var A, F, w;
        c = c && c[0] ? c[0].ownerDocument || c[0] : M;
        if (s.length === 1 && typeof s[0] === "string" && s[0].length < 512 && c === M && !aP.test(s[0]) && (ai.support.checkClone || !ak.test(s[0]))) {
            F = true;
            if (w = ai.fragments[s[0]]) {
                if (w !== 1) {
                    A = w
                }
            }
        }
        if (!A) {
            A = c.createDocumentFragment();
            ai.clean(s, c, A, G)
        }
        if (F) {
            ai.fragments[s[0]] = w ? A : 1
        }
        return{fragment: A, cacheable: F}
    }

    function aD(s, c) {
        var w = {};
        ai.each(D.concat.apply([], D.slice(0, c)), function () {
            w[this] = s
        });
        return w
    }

    function o(c) {
        return"scrollTo" in c && c.document ? c : c.nodeType === 9 ? c.defaultView || c.parentWindow : false
    }

    var ai = function (s, c) {
        return new ai.fn.init(s, c)
    }, p = aO.jQuery, d = aO.$, M = aO.document, at, a7 = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/, aT = /^.[^:#\[\.,]*$/, ao = /\S/, H = /^(\s|\u00A0)+|(\s|\u00A0)+$/g, q = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, aw = navigator.userAgent, b = false, av = [], aB, a1 = Object.prototype.toString, aV = Object.prototype.hasOwnProperty, az = Array.prototype.push, au = Array.prototype.slice, a6 = Array.prototype.indexOf;
    ai.fn = ai.prototype = {init: function (s, c) {
        var A, w;
        if (!s) {
            return this
        }
        if (s.nodeType) {
            this.context = this[0] = s;
            this.length = 1;
            return this
        }
        if (s === "body" && !c) {
            this.context = M;
            this[0] = M.body;
            this.selector = "body";
            this.length = 1;
            return this
        }
        if (typeof s === "string") {
            if ((A = a7.exec(s)) && (A[1] || !c)) {
                if (A[1]) {
                    w = c ? c.ownerDocument || c : M;
                    if (s = q.exec(s)) {
                        if (ai.isPlainObject(c)) {
                            s = [M.createElement(s[1])];
                            ai.fn.attr.call(s, c, true)
                        } else {
                            s = [w.createElement(s[1])]
                        }
                    } else {
                        s = a3([A[1]], [w]);
                        s = (s.cacheable ? s.fragment.cloneNode(true) : s.fragment).childNodes
                    }
                    return ai.merge(this, s)
                } else {
                    if (c = M.getElementById(A[2])) {
                        if (c.id !== A[2]) {
                            return at.find(s)
                        }
                        this.length = 1;
                        this[0] = c
                    }
                    this.context = M;
                    this.selector = s;
                    return this
                }
            } else {
                if (!c && /^\w+$/.test(s)) {
                    this.selector = s;
                    this.context = M;
                    s = M.getElementsByTagName(s);
                    return ai.merge(this, s)
                } else {
                    return !c || c.jquery ? (c || at).find(s) : ai(c).find(s)
                }
            }
        } else {
            if (ai.isFunction(s)) {
                return at.ready(s)
            }
        }
        if (s.selector !== I) {
            this.selector = s.selector;
            this.context = s.context
        }
        return ai.makeArray(s, this)
    }, selector: "", jquery: "1.4.2", length: 0, size: function () {
        return this.length
    }, toArray: function () {
        return au.call(this, 0)
    }, get: function (c) {
        return c == null ? this.toArray() : c < 0 ? this.slice(c)[0] : this[c]
    }, pushStack: function (s, c, A) {
        var w = ai();
        ai.isArray(s) ? az.apply(w, s) : ai.merge(w, s);
        w.prevObject = this;
        w.context = this.context;
        if (c === "find") {
            w.selector = this.selector + (this.selector ? " " : "") + A
        } else {
            if (c) {
                w.selector = this.selector + "." + c + "(" + A + ")"
            }
        }
        return w
    }, each: function (s, c) {
        return ai.each(this, s, c)
    }, ready: function (c) {
        ai.bindReady();
        if (ai.isReady) {
            c.call(M, ai)
        } else {
            av && av.push(c)
        }
        return this
    }, eq: function (c) {
        return c === -1 ? this.slice(c) : this.slice(c, +c + 1)
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, slice: function () {
        return this.pushStack(au.apply(this, arguments), "slice", au.call(arguments).join(","))
    }, map: function (c) {
        return this.pushStack(ai.map(this, function (s, w) {
            return c.call(s, w, s)
        }))
    }, end: function () {
        return this.prevObject || ai(null)
    }, push: az, sort: [].sort, splice: [].splice};
    ai.fn.init.prototype = ai.fn;
    ai.extend = ai.fn.extend = function () {
        var s = arguments[0] || {}, c = 1, K = arguments.length, F = false, G, w, A, J;
        if (typeof s === "boolean") {
            F = s;
            s = arguments[1] || {};
            c = 2
        }
        if (typeof s !== "object" && !ai.isFunction(s)) {
            s = {}
        }
        if (K === c) {
            s = this;
            --c
        }
        for (; c < K; c++) {
            if ((G = arguments[c]) != null) {
                for (w in G) {
                    A = s[w];
                    J = G[w];
                    if (s !== J) {
                        if (F && J && (ai.isPlainObject(J) || ai.isArray(J))) {
                            A = A && (ai.isPlainObject(A) || ai.isArray(A)) ? A : ai.isArray(J) ? [] : {};
                            s[w] = ai.extend(F, A, J)
                        } else {
                            if (J !== I) {
                                s[w] = J
                            }
                        }
                    }
                }
            }
        }
        return s
    };
    ai.extend({noConflict: function (c) {
        aO.$ = d;
        if (c) {
            aO.jQuery = p
        }
        return ai
    }, isReady: false, ready: function () {
        if (!ai.isReady) {
            if (!M.body) {
                return setTimeout(ai.ready, 13)
            }
            ai.isReady = true;
            if (av) {
                for (var s, c = 0; s = av[c++];) {
                    s.call(M, ai)
                }
                av = null
            }
            ai.fn.triggerHandler && ai(M).triggerHandler("ready")
        }
    }, bindReady: function () {
        if (!b) {
            b = true;
            if (M.readyState === "complete") {
                return ai.ready()
            }
            if (M.addEventListener) {
                M.addEventListener("DOMContentLoaded", aB, false);
                aO.addEventListener("load", ai.ready, false)
            } else {
                if (M.attachEvent) {
                    M.attachEvent("onreadystatechange", aB);
                    aO.attachEvent("onload", ai.ready);
                    var s = false;
                    try {
                        s = aO.frameElement == null
                    } catch (c) {
                    }
                    M.documentElement.doScroll && s && a0()
                }
            }
        }
    }, isFunction: function (c) {
        return a1.call(c) === "[object Function]"
    }, isArray: function (c) {
        return a1.call(c) === "[object Array]"
    }, isPlainObject: function (s) {
        if (!s || a1.call(s) !== "[object Object]" || s.nodeType || s.setInterval) {
            return false
        }
        if (s.constructor && !aV.call(s, "constructor") && !aV.call(s.constructor.prototype, "isPrototypeOf")) {
            return false
        }
        var c;
        for (c in s) {
        }
        return c === I || aV.call(s, c)
    }, isEmptyObject: function (s) {
        for (var c in s) {
            return false
        }
        return true
    }, error: function (c) {
        throw c
    }, parseJSON: function (c) {
        if (typeof c !== "string" || !c) {
            return null
        }
        c = ai.trim(c);
        if (/^[\],:{}\s]*$/.test(c.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            return aO.JSON && aO.JSON.parse ? aO.JSON.parse(c) : (new Function("return " + c))()
        } else {
            ai.error("Invalid JSON: " + c)
        }
    }, noop: function () {
    }, globalEval: function (s) {
        if (s && ao.test(s)) {
            var c = M.getElementsByTagName("head")[0] || M.documentElement, w = M.createElement("script");
            w.type = "text/javascript";
            if (ai.support.scriptEval) {
                w.appendChild(M.createTextNode(s))
            } else {
                w.text = s
            }
            c.insertBefore(w, c.firstChild);
            c.removeChild(w)
        }
    }, nodeName: function (s, c) {
        return s.nodeName && s.nodeName.toUpperCase() === c.toUpperCase()
    }, each: function (s, c, J) {
        var F, G = 0, w = s.length, A = w === I || ai.isFunction(s);
        if (J) {
            if (A) {
                for (F in s) {
                    if (c.apply(s[F], J) === false) {
                        break
                    }
                }
            } else {
                for (; G < w;) {
                    if (c.apply(s[G++], J) === false) {
                        break
                    }
                }
            }
        } else {
            if (A) {
                for (F in s) {
                    if (c.call(s[F], F, s[F]) === false) {
                        break
                    }
                }
            } else {
                for (J = s[0]; G < w && c.call(J, G, J) !== false; J = s[++G]) {
                }
            }
        }
        return s
    }, trim: function (c) {
        return(c || "").replace(H, "")
    }, makeArray: function (s, c) {
        c = c || [];
        if (s != null) {
            s.length == null || typeof s === "string" || ai.isFunction(s) || typeof s !== "function" && s.setInterval ? az.call(c, s) : ai.merge(c, s)
        }
        return c
    }, inArray: function (s, c) {
        if (c.indexOf) {
            return c.indexOf(s)
        }
        for (var A = 0, w = c.length; A < w; A++) {
            if (c[A] === s) {
                return A
            }
        }
        return -1
    }, merge: function (s, c) {
        var F = s.length, w = 0;
        if (typeof c.length === "number") {
            for (var A = c.length; w < A; w++) {
                s[F++] = c[w]
            }
        } else {
            for (; c[w] !== I;) {
                s[F++] = c[w++]
            }
        }
        s.length = F;
        return s
    }, grep: function (s, c, G) {
        for (var A = [], F = 0, w = s.length; F < w; F++) {
            !G !== !c(s[F], F) && A.push(s[F])
        }
        return A
    }, map: function (s, c, J) {
        for (var F = [], G, w = 0, A = s.length; w < A; w++) {
            G = c(s[w], w, J);
            if (G != null) {
                F[F.length] = G
            }
        }
        return F.concat.apply([], F)
    }, guid: 1, proxy: function (s, c, w) {
        if (arguments.length === 2) {
            if (typeof c === "string") {
                w = s;
                s = w[c];
                c = I
            } else {
                if (c && !ai.isFunction(c)) {
                    w = c;
                    c = I
                }
            }
        }
        if (!c && s) {
            c = function () {
                return s.apply(w || this, arguments)
            }
        }
        if (s) {
            c.guid = s.guid = s.guid || c.guid || ai.guid++
        }
        return c
    }, uaMatch: function (c) {
        c = c.toLowerCase();
        c = /(webkit)[ \/]([\w.]+)/.exec(c) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(c) || /(msie) ([\w.]+)/.exec(c) || !/compatible/.test(c) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(c) || [];
        return{browser: c[1] || "", version: c[2] || "0"}
    }, browser: {}});
    aw = ai.uaMatch(aw);
    if (aw.browser) {
        ai.browser[aw.browser] = true;
        ai.browser.version = aw.version
    }
    if (ai.browser.webkit) {
        ai.browser.safari = true
    }
    if (a6) {
        ai.inArray = function (s, c) {
            return a6.call(c, s)
        }
    }
    at = ai(M);
    if (M.addEventListener) {
        aB = function () {
            M.removeEventListener("DOMContentLoaded", aB, false);
            ai.ready()
        }
    } else {
        if (M.attachEvent) {
            aB = function () {
                if (M.readyState === "complete") {
                    M.detachEvent("onreadystatechange", aB);
                    ai.ready()
                }
            }
        }
    }
    (function () {
        ai.support = {};
        var L = M.documentElement, K = M.createElement("script"), J = M.createElement("div"), F = "script" + aF();
        J.style.display = "none";
        J.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var G = J.getElementsByTagName("*"), w = J.getElementsByTagName("a")[0];
        if (!(!G || !G.length || !w)) {
            ai.support = {leadingWhitespace: J.firstChild.nodeType === 3, tbody: !J.getElementsByTagName("tbody").length, htmlSerialize: !!J.getElementsByTagName("link").length, style: /red/.test(w.getAttribute("style")), hrefNormalized: w.getAttribute("href") === "/a", opacity: /^0.55$/.test(w.style.opacity), cssFloat: !!w.style.cssFloat, checkOn: J.getElementsByTagName("input")[0].value === "on", optSelected: M.createElement("select").appendChild(M.createElement("option")).selected, parentNode: J.removeChild(J.appendChild(M.createElement("div"))).parentNode === null, deleteExpando: true, checkClone: false, scriptEval: false, noCloneEvent: true, boxModel: null};
            K.type = "text/javascript";
            try {
                K.appendChild(M.createTextNode("window." + F + "=1;"))
            } catch (A) {
            }
            L.insertBefore(K, L.firstChild);
            if (aO[F]) {
                ai.support.scriptEval = true;
                delete aO[F]
            }
            try {
                delete K.test
            } catch (c) {
                ai.support.deleteExpando = false
            }
            L.removeChild(K);
            if (J.attachEvent && J.fireEvent) {
                J.attachEvent("onclick", function s() {
                    ai.support.noCloneEvent = false;
                    J.detachEvent("onclick", s)
                });
                J.cloneNode(true).fireEvent("onclick")
            }
            J = M.createElement("div");
            J.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            L = M.createDocumentFragment();
            L.appendChild(J.firstChild);
            ai.support.checkClone = L.cloneNode(true).cloneNode(true).lastChild.checked;
            ai(function () {
                var N = M.createElement("div");
                N.style.width = N.style.paddingLeft = "1px";
                M.body.appendChild(N);
                ai.boxModel = ai.support.boxModel = N.offsetWidth === 2;
                M.body.removeChild(N).style.display = "none"
            });
            L = function (N) {
                var P = M.createElement("div");
                N = "on" + N;
                var O = N in P;
                if (!O) {
                    P.setAttribute(N, "return;");
                    O = typeof P[N] === "function"
                }
                return O
            };
            ai.support.submitBubbles = L("submit");
            ai.support.changeBubbles = L("change");
            L = K = J = G = w = null
        }
    })();
    ai.props = {"for": "htmlFor", "class": "className", readonly: "readOnly", maxlength: "maxLength", cellspacing: "cellSpacing", rowspan: "rowSpan", colspan: "colSpan", tabindex: "tabIndex", usemap: "useMap", frameborder: "frameBorder"};
    var aH = "jQuery" + aF(), e = 0, aS = {};
    ai.extend({cache: {}, expando: aH, noData: {embed: true, object: true, applet: true}, data: function (s, c, F) {
        if (!(s.nodeName && ai.noData[s.nodeName.toLowerCase()])) {
            s = s == aO ? aS : s;
            var w = s[aH], A = ai.cache;
            if (!w && typeof c === "string" && F === I) {
                return null
            }
            w || (w = ++e);
            if (typeof c === "object") {
                s[aH] = w;
                A[w] = ai.extend(true, {}, c)
            } else {
                if (!A[w]) {
                    s[aH] = w;
                    A[w] = {}
                }
            }
            s = A[w];
            if (F !== I) {
                s[c] = F
            }
            return typeof c === "string" ? s[c] : s
        }
    }, removeData: function (s, c) {
        if (!(s.nodeName && ai.noData[s.nodeName.toLowerCase()])) {
            s = s == aO ? aS : s;
            var F = s[aH], w = ai.cache, A = w[F];
            if (c) {
                if (A) {
                    delete A[c];
                    ai.isEmptyObject(A) && ai.removeData(s)
                }
            } else {
                if (ai.support.deleteExpando) {
                    delete s[ai.expando]
                } else {
                    s.removeAttribute && s.removeAttribute(ai.expando)
                }
                delete w[F]
            }
        }
    }});
    ai.fn.extend({data: function (s, c) {
        if (typeof s === "undefined" && this.length) {
            return ai.data(this[0])
        } else {
            if (typeof s === "object") {
                return this.each(function () {
                    ai.data(this, s)
                })
            }
        }
        var A = s.split(".");
        A[1] = A[1] ? "." + A[1] : "";
        if (c === I) {
            var w = this.triggerHandler("getData" + A[1] + "!", [A[0]]);
            if (w === I && this.length) {
                w = ai.data(this[0], s)
            }
            return w === I && A[1] ? this.data(A[0]) : w
        } else {
            return this.trigger("setData" + A[1] + "!", [A[0], c]).each(function () {
                ai.data(this, s, c)
            })
        }
    }, removeData: function (c) {
        return this.each(function () {
            ai.removeData(this, c)
        })
    }});
    ai.extend({queue: function (s, c, A) {
        if (s) {
            c = (c || "fx") + "queue";
            var w = ai.data(s, c);
            if (!A) {
                return w || []
            }
            if (!w || ai.isArray(A)) {
                w = ai.data(s, c, ai.makeArray(A))
            } else {
                w.push(A)
            }
            return w
        }
    }, dequeue: function (s, c) {
        c = c || "fx";
        var A = ai.queue(s, c), w = A.shift();
        if (w === "inprogress") {
            w = A.shift()
        }
        if (w) {
            c === "fx" && A.unshift("inprogress");
            w.call(s, function () {
                ai.dequeue(s, c)
            })
        }
    }});
    ai.fn.extend({queue: function (s, c) {
        if (typeof s !== "string") {
            c = s;
            s = "fx"
        }
        if (c === I) {
            return ai.queue(this[0], s)
        }
        return this.each(function () {
            var w = ai.queue(this, s, c);
            s === "fx" && w[0] !== "inprogress" && ai.dequeue(this, s)
        })
    }, dequeue: function (c) {
        return this.each(function () {
            ai.dequeue(this, c)
        })
    }, delay: function (s, c) {
        s = ai.fx ? ai.fx.speeds[s] || s : s;
        c = c || "fx";
        return this.queue(c, function () {
            var w = this;
            setTimeout(function () {
                ai.dequeue(w, c)
            }, s)
        })
    }, clearQueue: function (c) {
        return this.queue(c || "fx", [])
    }});
    var be = /[\n\t]/g, U = /\s+/, a8 = /\r/g, aM = /href|src|style/, aU = /(button|input)/i, ax = /(button|input|object|select|textarea)/i, S = /^(a|area)$/i, aY = /radio|checkbox/;
    ai.fn.extend({attr: function (s, c) {
        return ap(this, s, c, true, ai.attr)
    }, removeAttr: function (c) {
        return this.each(function () {
            ai.attr(this, c, "");
            this.nodeType === 1 && this.removeAttribute(c)
        })
    }, addClass: function (L) {
        if (ai.isFunction(L)) {
            return this.each(function (O) {
                var N = ai(this);
                N.addClass(L.call(this, O, N.attr("class")))
            })
        }
        if (L && typeof L === "string") {
            for (var K = (L || "").split(U), J = 0, F = this.length; J < F; J++) {
                var G = this[J];
                if (G.nodeType === 1) {
                    if (G.className) {
                        for (var w = " " + G.className + " ", A = G.className, c = 0, s = K.length; c < s; c++) {
                            if (w.indexOf(" " + K[c] + " ") < 0) {
                                A += " " + K[c]
                            }
                        }
                        G.className = ai.trim(A)
                    } else {
                        G.className = L
                    }
                }
            }
        }
        return this
    }, removeClass: function (s) {
        if (ai.isFunction(s)) {
            return this.each(function (L) {
                var N = ai(this);
                N.removeClass(s.call(this, L, N.attr("class")))
            })
        }
        if (s && typeof s === "string" || s === I) {
            for (var c = (s || "").split(U), K = 0, F = this.length; K < F; K++) {
                var G = this[K];
                if (G.nodeType === 1 && G.className) {
                    if (s) {
                        for (var w = (" " + G.className + " ").replace(be, " "), A = 0, J = c.length; A < J; A++) {
                            w = w.replace(" " + c[A] + " ", " ")
                        }
                        G.className = ai.trim(w)
                    } else {
                        G.className = ""
                    }
                }
            }
        }
        return this
    }, toggleClass: function (s, c) {
        var A = typeof s, w = typeof c === "boolean";
        if (ai.isFunction(s)) {
            return this.each(function (G) {
                var F = ai(this);
                F.toggleClass(s.call(this, G, F.attr("class"), c), c)
            })
        }
        return this.each(function () {
            if (A === "string") {
                for (var K, G = 0, J = ai(this), L = c, F = s.split(U); K = F[G++];) {
                    L = w ? L : !J.hasClass(K);
                    J[L ? "addClass" : "removeClass"](K)
                }
            } else {
                if (A === "undefined" || A === "boolean") {
                    this.className && ai.data(this, "__className__", this.className);
                    this.className = this.className || s === false ? "" : ai.data(this, "__className__") || ""
                }
            }
        })
    }, hasClass: function (s) {
        s = " " + s + " ";
        for (var c = 0, w = this.length; c < w; c++) {
            if ((" " + this[c].className + " ").replace(be, " ").indexOf(s) > -1) {
                return true
            }
        }
        return false
    }, val: function (s) {
        if (s === I) {
            var c = this[0];
            if (c) {
                if (ai.nodeName(c, "option")) {
                    return(c.attributes.value || {}).specified ? c.value : c.text
                }
                if (ai.nodeName(c, "select")) {
                    var K = c.selectedIndex, F = [], G = c.options;
                    c = c.type === "select-one";
                    if (K < 0) {
                        return null
                    }
                    var w = c ? K : 0;
                    for (K = c ? K + 1 : G.length; w < K; w++) {
                        var A = G[w];
                        if (A.selected) {
                            s = ai(A).val();
                            if (c) {
                                return s
                            }
                            F.push(s)
                        }
                    }
                    return F
                }
                if (aY.test(c.type) && !ai.support.checkOn) {
                    return c.getAttribute("value") === null ? "on" : c.value
                }
                return(c.value || "").replace(a8, "")
            }
            return I
        }
        var J = ai.isFunction(s);
        return this.each(function (L) {
            var P = ai(this), O = s;
            if (this.nodeType === 1) {
                if (J) {
                    O = s.call(this, L, P.val())
                }
                if (typeof O === "number") {
                    O += ""
                }
                if (ai.isArray(O) && aY.test(this.type)) {
                    this.checked = ai.inArray(P.val(), O) >= 0
                } else {
                    if (ai.nodeName(this, "select")) {
                        var N = ai.makeArray(O);
                        ai("option", this).each(function () {
                            this.selected = ai.inArray(ai(this).val(), N) >= 0
                        });
                        if (!N.length) {
                            this.selectedIndex = -1
                        }
                    } else {
                        this.value = O
                    }
                }
            }
        })
    }});
    ai.extend({attrFn: {val: true, css: true, html: true, text: true, data: true, width: true, height: true, offset: true}, attr: function (s, c, G, A) {
        if (!s || s.nodeType === 3 || s.nodeType === 8) {
            return I
        }
        if (A && c in ai.attrFn) {
            return ai(s)[c](G)
        }
        A = s.nodeType !== 1 || !ai.isXMLDoc(s);
        var F = G !== I;
        c = A && ai.props[c] || c;
        if (s.nodeType === 1) {
            var w = aM.test(c);
            if (c in s && A && !w) {
                if (F) {
                    c === "type" && aU.test(s.nodeName) && s.parentNode && ai.error("type property can't be changed");
                    s[c] = G
                }
                if (ai.nodeName(s, "form") && s.getAttributeNode(c)) {
                    return s.getAttributeNode(c).nodeValue
                }
                if (c === "tabIndex") {
                    return(c = s.getAttributeNode("tabIndex")) && c.specified ? c.value : ax.test(s.nodeName) || S.test(s.nodeName) && s.href ? 0 : I
                }
                return s[c]
            }
            if (!ai.support.style && A && c === "style") {
                if (F) {
                    s.style.cssText = "" + G
                }
                return s.style.cssText
            }
            F && s.setAttribute(c, "" + G);
            s = !ai.support.hrefNormalized && A && w ? s.getAttribute(c, 2) : s.getAttribute(c);
            return s === null ? I : s
        }
        return ai.style(s, c, G)
    }});
    var ay = /\.(.*)$/, r = function (c) {
        return c.replace(/[^\w\s\.\|`]/g, function (s) {
            return"\\" + s
        })
    };
    ai.event = {add: function (P, O, L, J) {
        if (!(P.nodeType === 3 || P.nodeType === 8)) {
            if (P.setInterval && P !== aO && !P.frameElement) {
                P = aO
            }
            var K, F;
            if (L.handler) {
                K = L;
                L = K.handler
            }
            if (!L.guid) {
                L.guid = ai.guid++
            }
            if (F = ai.data(P)) {
                var G = F.events = F.events || {}, s = F.handle;
                if (!s) {
                    F.handle = s = function () {
                        return typeof ai !== "undefined" && !ai.event.triggered ? ai.event.handle.apply(s.elem, arguments) : I
                    }
                }
                s.elem = P;
                O = O.split(" ");
                for (var A, w = 0, c; A = O[w++];) {
                    F = K ? ai.extend({}, K) : {handler: L, data: J};
                    if (A.indexOf(".") > -1) {
                        c = A.split(".");
                        A = c.shift();
                        F.namespace = c.slice(0).sort().join(".")
                    } else {
                        c = [];
                        F.namespace = ""
                    }
                    F.type = A;
                    F.guid = L.guid;
                    var Q = G[A], N = ai.event.special[A] || {};
                    if (!Q) {
                        Q = G[A] = [];
                        if (!N.setup || N.setup.call(P, J, c, s) === false) {
                            if (P.addEventListener) {
                                P.addEventListener(A, s, false)
                            } else {
                                P.attachEvent && P.attachEvent("on" + A, s)
                            }
                        }
                    }
                    if (N.add) {
                        N.add.call(P, F);
                        if (!F.handler.guid) {
                            F.handler.guid = L.guid
                        }
                    }
                    Q.push(F);
                    ai.event.global[A] = true
                }
                P = null
            }
        }
    }, global: {}, remove: function (R, Q, O, L) {
        if (!(R.nodeType === 3 || R.nodeType === 8)) {
            var N, J = 0, K, A, G, F, c, T, P = ai.data(R), s = P && P.events;
            if (P && s) {
                if (Q && Q.type) {
                    O = Q.handler;
                    Q = Q.type
                }
                if (!Q || typeof Q === "string" && Q.charAt(0) === ".") {
                    Q = Q || "";
                    for (N in s) {
                        ai.event.remove(R, N + Q)
                    }
                } else {
                    for (Q = Q.split(" "); N = Q[J++];) {
                        F = N;
                        K = N.indexOf(".") < 0;
                        A = [];
                        if (!K) {
                            A = N.split(".");
                            N = A.shift();
                            G = new RegExp("(^|\\.)" + ai.map(A.slice(0).sort(), r).join("\\.(?:.*\\.)?") + "(\\.|$)")
                        }
                        if (c = s[N]) {
                            if (O) {
                                F = ai.event.special[N] || {};
                                for (w = L || 0; w < c.length; w++) {
                                    T = c[w];
                                    if (O.guid === T.guid) {
                                        if (K || G.test(T.namespace)) {
                                            L == null && c.splice(w--, 1);
                                            F.remove && F.remove.call(R, T)
                                        }
                                        if (L != null) {
                                            break
                                        }
                                    }
                                }
                                if (c.length === 0 || L != null && c.length === 1) {
                                    if (!F.teardown || F.teardown.call(R, A) === false) {
                                        aG(R, N, P.handle)
                                    }
                                    delete s[N]
                                }
                            } else {
                                for (var w = 0; w < c.length; w++) {
                                    T = c[w];
                                    if (K || G.test(T.namespace)) {
                                        ai.event.remove(R, F, T.handler, w);
                                        c.splice(w--, 1)
                                    }
                                }
                            }
                        }
                    }
                    if (ai.isEmptyObject(s)) {
                        if (Q = P.handle) {
                            Q.elem = null
                        }
                        delete P.events;
                        delete P.handle;
                        ai.isEmptyObject(P) && ai.removeData(R)
                    }
                }
            }
        }
    }, trigger: function (N, L, K, G) {
        var J = N.type || N;
        if (!G) {
            N = typeof N === "object" ? N[aH] ? N : ai.extend(ai.Event(J), N) : ai.Event(J);
            if (J.indexOf("!") >= 0) {
                N.type = J = J.slice(0, -1);
                N.exclusive = true
            }
            if (!K) {
                N.stopPropagation();
                ai.event.global[J] && ai.each(ai.cache, function () {
                    this.events && this.events[J] && ai.event.trigger(N, L, this.handle.elem)
                })
            }
            if (!K || K.nodeType === 3 || K.nodeType === 8) {
                return I
            }
            N.result = I;
            N.target = K;
            L = ai.makeArray(L);
            L.unshift(N)
        }
        N.currentTarget = K;
        (G = ai.data(K, "handle")) && G.apply(K, L);
        G = K.parentNode || K.ownerDocument;
        try {
            if (!(K && K.nodeName && ai.noData[K.nodeName.toLowerCase()])) {
                if (K["on" + J] && K["on" + J].apply(K, L) === false) {
                    N.result = false
                }
            }
        } catch (A) {
        }
        if (!N.isPropagationStopped() && G) {
            ai.event.trigger(N, L, G, true)
        } else {
            if (!N.isDefaultPrevented()) {
                G = N.target;
                var F, c = ai.nodeName(G, "a") && J === "click", w = ai.event.special[J] || {};
                if ((!w._default || w._default.call(K, N) === false) && !c && !(G && G.nodeName && ai.noData[G.nodeName.toLowerCase()])) {
                    try {
                        if (G[J]) {
                            if (F = G["on" + J]) {
                                G["on" + J] = null
                            }
                            ai.event.triggered = true;
                            G[J]()
                        }
                    } catch (s) {
                    }
                    if (F) {
                        G["on" + J] = F
                    }
                    ai.event.triggered = false
                }
            }
        }
    }, handle: function (s) {
        var c, J, F, G;
        s = arguments[0] = ai.event.fix(s || aO.event);
        s.currentTarget = this;
        c = s.type.indexOf(".") < 0 && !s.exclusive;
        if (!c) {
            J = s.type.split(".");
            s.type = J.shift();
            F = new RegExp("(^|\\.)" + J.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")
        }
        G = ai.data(this, "events");
        J = G[s.type];
        if (G && J) {
            J = J.slice(0);
            G = 0;
            for (var w = J.length; G < w; G++) {
                var A = J[G];
                if (c || F.test(A.namespace)) {
                    s.handler = A.handler;
                    s.data = A.data;
                    s.handleObj = A;
                    A = A.handler.apply(this, arguments);
                    if (A !== I) {
                        s.result = A;
                        if (A === false) {
                            s.preventDefault();
                            s.stopPropagation()
                        }
                    }
                    if (s.isImmediatePropagationStopped()) {
                        break
                    }
                }
            }
        }
        return s.result
    }, props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "), fix: function (s) {
        if (s[aH]) {
            return s
        }
        var c = s;
        s = ai.Event(c);
        for (var A = this.props.length, w; A;) {
            w = this.props[--A];
            s[w] = c[w]
        }
        if (!s.target) {
            s.target = s.srcElement || M
        }
        if (s.target.nodeType === 3) {
            s.target = s.target.parentNode
        }
        if (!s.relatedTarget && s.fromElement) {
            s.relatedTarget = s.fromElement === s.target ? s.toElement : s.fromElement
        }
        if (s.pageX == null && s.clientX != null) {
            c = M.documentElement;
            A = M.body;
            s.pageX = s.clientX + (c && c.scrollLeft || A && A.scrollLeft || 0) - (c && c.clientLeft || A && A.clientLeft || 0);
            s.pageY = s.clientY + (c && c.scrollTop || A && A.scrollTop || 0) - (c && c.clientTop || A && A.clientTop || 0)
        }
        if (!s.which && (s.charCode || s.charCode === 0 ? s.charCode : s.keyCode)) {
            s.which = s.charCode || s.keyCode
        }
        if (!s.metaKey && s.ctrlKey) {
            s.metaKey = s.ctrlKey
        }
        if (!s.which && s.button !== I) {
            s.which = s.button & 1 ? 1 : s.button & 2 ? 3 : s.button & 4 ? 2 : 0
        }
        return s
    }, guid: 100000000, proxy: ai.proxy, special: {ready: {setup: ai.bindReady, teardown: ai.noop}, live: {add: function (c) {
        ai.event.add(this, c.origType, ai.extend({}, c, {handler: ag}))
    }, remove: function (s) {
        var c = true, w = s.origType.replace(ay, "");
        ai.each(ai.data(this, "events").live || [], function () {
            if (w === this.origType.replace(ay, "")) {
                return c = false
            }
        });
        c && ai.event.remove(this, s.origType, ag)
    }}, beforeunload: {setup: function (s, c, w) {
        if (this.setInterval) {
            this.onbeforeunload = w
        }
        return false
    }, teardown: function (s, c) {
        if (this.onbeforeunload === c) {
            this.onbeforeunload = null
        }
    }}}};
    var aG = M.removeEventListener ? function (s, c, w) {
        s.removeEventListener(c, w, false)
    } : function (s, c, w) {
        s.detachEvent("on" + c, w)
    };
    ai.Event = function (c) {
        if (!this.preventDefault) {
            return new ai.Event(c)
        }
        if (c && c.type) {
            this.originalEvent = c;
            this.type = c.type
        } else {
            this.type = c
        }
        this.timeStamp = aF();
        this[aH] = true
    };
    ai.Event.prototype = {preventDefault: function () {
        this.isDefaultPrevented = am;
        var c = this.originalEvent;
        if (c) {
            c.preventDefault && c.preventDefault();
            c.returnValue = false
        }
    }, stopPropagation: function () {
        this.isPropagationStopped = am;
        var c = this.originalEvent;
        if (c) {
            c.stopPropagation && c.stopPropagation();
            c.cancelBubble = true
        }
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = am;
        this.stopPropagation()
    }, isDefaultPrevented: an, isPropagationStopped: an, isImmediatePropagationStopped: an};
    var ae = function (s) {
        var c = s.relatedTarget;
        try {
            for (; c && c !== this;) {
                c = c.parentNode
            }
            if (c !== this) {
                s.type = s.data;
                ai.event.handle.apply(this, arguments)
            }
        } catch (w) {
        }
    }, x = function (c) {
        c.type = c.data;
        ai.event.handle.apply(this, arguments)
    };
    ai.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (s, c) {
        ai.event.special[s] = {setup: function (w) {
            ai.event.add(this, c, w && w.selector ? x : ae, s)
        }, teardown: function (w) {
            ai.event.remove(this, c, w && w.selector ? x : ae)
        }}
    });
    if (!ai.support.submitBubbles) {
        ai.event.special.submit = {setup: function () {
            if (this.nodeName.toLowerCase() !== "form") {
                ai.event.add(this, "click.specialSubmit", function (s) {
                    var c = s.target, w = c.type;
                    if ((w === "submit" || w === "image") && ai(c).closest("form").length) {
                        return aK("submit", this, arguments)
                    }
                });
                ai.event.add(this, "keypress.specialSubmit", function (s) {
                    var c = s.target, w = c.type;
                    if ((w === "text" || w === "password") && ai(c).closest("form").length && s.keyCode === 13) {
                        return aK("submit", this, arguments)
                    }
                })
            } else {
                return false
            }
        }, teardown: function () {
            ai.event.remove(this, ".specialSubmit")
        }}
    }
    if (!ai.support.changeBubbles) {
        var t = /textarea|input|select/i, g, j = function (s) {
            var c = s.type, w = s.value;
            if (c === "radio" || c === "checkbox") {
                w = s.checked
            } else {
                if (c === "select-multiple") {
                    w = s.selectedIndex > -1 ? ai.map(s.options,function (A) {
                        return A.selected
                    }).join("-") : ""
                } else {
                    if (s.nodeName.toLowerCase() === "select") {
                        w = s.selectedIndex
                    }
                }
            }
            return w
        }, bd = function (s, c) {
            var F = s.target, w, A;
            if (!(!t.test(F.nodeName) || F.readOnly)) {
                w = ai.data(F, "_change_data");
                A = j(F);
                if (s.type !== "focusout" || F.type !== "radio") {
                    ai.data(F, "_change_data", A)
                }
                if (!(w === I || A === w)) {
                    if (w != null || A) {
                        s.type = "change";
                        return ai.event.trigger(s, c, F)
                    }
                }
            }
        };
        ai.event.special.change = {filters: {focusout: bd, click: function (s) {
            var c = s.target, w = c.type;
            if (w === "radio" || w === "checkbox" || c.nodeName.toLowerCase() === "select") {
                return bd.call(this, s)
            }
        }, keydown: function (s) {
            var c = s.target, w = c.type;
            if (s.keyCode === 13 && c.nodeName.toLowerCase() !== "textarea" || s.keyCode === 32 && (w === "checkbox" || w === "radio") || w === "select-multiple") {
                return bd.call(this, s)
            }
        }, beforeactivate: function (c) {
            c = c.target;
            ai.data(c, "_change_data", j(c))
        }}, setup: function () {
            if (this.type === "file") {
                return false
            }
            for (var c in g) {
                ai.event.add(this, c + ".specialChange", g[c])
            }
            return t.test(this.nodeName)
        }, teardown: function () {
            ai.event.remove(this, ".specialChange");
            return t.test(this.nodeName)
        }};
        g = ai.event.special.change.filters
    }
    M.addEventListener && ai.each({focus: "focusin", blur: "focusout"}, function (s, c) {
        function w(A) {
            A = ai.event.fix(A);
            A.type = c;
            return ai.event.handle.call(this, A)
        }

        ai.event.special[c] = {setup: function () {
            this.addEventListener(s, w, true)
        }, teardown: function () {
            this.removeEventListener(s, w, true)
        }}
    });
    ai.each(["bind", "one"], function (s, c) {
        ai.fn[c] = function (K, F, G) {
            if (typeof K === "object") {
                for (var w in K) {
                    this[c](w, F, K[w], G)
                }
                return this
            }
            if (ai.isFunction(F)) {
                G = F;
                F = I
            }
            var A = c === "one" ? ai.proxy(G, function (L) {
                ai(this).unbind(L, A);
                return G.apply(this, arguments)
            }) : G;
            if (K === "unload" && c !== "one") {
                this.one(K, F, G)
            } else {
                w = 0;
                for (var J = this.length; w < J; w++) {
                    ai.event.add(this[w], K, A, F)
                }
            }
            return this
        }
    });
    ai.fn.extend({unbind: function (s, c) {
        if (typeof s === "object" && !s.preventDefault) {
            for (var A in s) {
                this.unbind(A, s[A])
            }
        } else {
            A = 0;
            for (var w = this.length; A < w; A++) {
                ai.event.remove(this[A], s, c)
            }
        }
        return this
    }, delegate: function (s, c, A, w) {
        return this.live(c, A, w, s)
    }, undelegate: function (s, c, w) {
        return arguments.length === 0 ? this.unbind("live") : this.die(c, null, w, s)
    }, trigger: function (s, c) {
        return this.each(function () {
            ai.event.trigger(s, c, this)
        })
    }, triggerHandler: function (s, c) {
        if (this[0]) {
            s = ai.Event(s);
            s.preventDefault();
            s.stopPropagation();
            ai.event.trigger(s, c, this[0]);
            return s.result
        }
    }, toggle: function (s) {
        for (var c = arguments, w = 1; w < c.length;) {
            ai.proxy(s, c[w++])
        }
        return this.click(ai.proxy(s, function (A) {
            var F = (ai.data(this, "lastToggle" + s.guid) || 0) % w;
            ai.data(this, "lastToggle" + s.guid, F + 1);
            A.preventDefault();
            return c[F].apply(this, arguments) || false
        }))
    }, hover: function (s, c) {
        return this.mouseenter(s).mouseleave(c || s)
    }});
    var bh = {focus: "focusin", blur: "focusout", mouseenter: "mouseover", mouseleave: "mouseout"};
    ai.each(["live", "die"], function (s, c) {
        ai.fn[c] = function (O, L, N, J) {
            var K, A = 0, G, F, w = J || this.selector, P = J ? this : ai(this.context);
            if (ai.isFunction(L)) {
                N = L;
                L = I
            }
            for (O = (O || "").split(" "); (K = O[A++]) != null;) {
                J = ay.exec(K);
                G = "";
                if (J) {
                    G = J[0];
                    K = K.replace(ay, "")
                }
                if (K === "hover") {
                    O.push("mouseenter" + G, "mouseleave" + G)
                } else {
                    F = K;
                    if (K === "focus" || K === "blur") {
                        O.push(bh[K] + G);
                        K += G
                    } else {
                        K = (bh[K] || K) + G
                    }
                    c === "live" ? P.each(function () {
                        ai.event.add(this, z(K, w), {data: L, selector: w, handler: N, origType: K, origHandler: N, preType: F})
                    }) : P.unbind(z(K, w), N)
                }
            }
            return this
        }
    });
    ai.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (s, c) {
        ai.fn[c] = function (w) {
            return w ? this.bind(c, w) : this.trigger(c)
        };
        if (ai.attrFn) {
            ai.attrFn[c] = true
        }
    });
    aO.attachEvent && !aO.addEventListener && aO.attachEvent("onunload", function () {
        for (var s in ai.cache) {
            if (ai.cache[s].handle) {
                try {
                    ai.event.remove(ai.cache[s].handle.elem)
                } catch (c) {
                }
            }
        }
    });
    (function () {
        function W(ab) {
            for (var aa = "", Z, Y = 0; ab[Y]; Y++) {
                Z = ab[Y];
                if (Z.nodeType === 3 || Z.nodeType === 4) {
                    aa += Z.nodeValue
                } else {
                    if (Z.nodeType !== 8) {
                        aa += W(Z.childNodes)
                    }
                }
            }
            return aa
        }

        function V(bb, ba, ab, aa, Y, Z) {
            Y = 0;
            for (var bm = aa.length; Y < bm; Y++) {
                var bn = aa[Y];
                if (bn) {
                    bn = bn[bb];
                    for (var bl = false; bn;) {
                        if (bn.sizcache === ab) {
                            bl = aa[bn.sizset];
                            break
                        }
                        if (bn.nodeType === 1 && !Z) {
                            bn.sizcache = ab;
                            bn.sizset = Y
                        }
                        if (bn.nodeName.toLowerCase() === ba) {
                            bl = bn;
                            break
                        }
                        bn = bn[bb]
                    }
                    aa[Y] = bl
                }
            }
        }

        function T(bb, ba, ab, aa, Y, Z) {
            Y = 0;
            for (var bm = aa.length; Y < bm; Y++) {
                var bn = aa[Y];
                if (bn) {
                    bn = bn[bb];
                    for (var bl = false; bn;) {
                        if (bn.sizcache === ab) {
                            bl = aa[bn.sizset];
                            break
                        }
                        if (bn.nodeType === 1) {
                            if (!Z) {
                                bn.sizcache = ab;
                                bn.sizset = Y
                            }
                            if (typeof ba !== "string") {
                                if (bn === ba) {
                                    bl = true;
                                    break
                                }
                            } else {
                                if (N.filter(ba, [bn]).length > 0) {
                                    bl = bn;
                                    break
                                }
                            }
                        }
                        bn = bn[bb]
                    }
                    aa[Y] = bl
                }
            }
        }

        var Q = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, R = 0, O = Object.prototype.toString, P = false, K = true;
        [0, 0].sort(function () {
            K = false;
            return 0
        });
        var N = function (bm, bl, ba, ab) {
            ba = ba || [];
            var Z = bl = bl || M;
            if (bl.nodeType !== 1 && bl.nodeType !== 9) {
                return[]
            }
            if (!bm || typeof bm !== "string") {
                return ba
            }
            for (var aa = [], br, bs, bo, bb, bq = true, bn = s(bl), bp = bm; (Q.exec(""), br = Q.exec(bp)) !== null;) {
                bp = br[3];
                aa.push(br[1]);
                if (br[2]) {
                    bb = br[3];
                    break
                }
            }
            if (aa.length > 1 && F.exec(bm)) {
                if (aa.length === 2 && L.relative[aa[0]]) {
                    bs = X(aa[0] + aa[1], bl)
                } else {
                    for (bs = L.relative[aa[0]] ? [bl] : N(aa.shift(), bl); aa.length;) {
                        bm = aa.shift();
                        if (L.relative[bm]) {
                            bm += aa.shift()
                        }
                        bs = X(bm, bs)
                    }
                }
            } else {
                if (!ab && aa.length > 1 && bl.nodeType === 9 && !bn && L.match.ID.test(aa[0]) && !L.match.ID.test(aa[aa.length - 1])) {
                    br = N.find(aa.shift(), bl, bn);
                    bl = br.expr ? N.filter(br.expr, br.set)[0] : br.set[0]
                }
                if (bl) {
                    br = ab ? {expr: aa.pop(), set: c(ab)} : N.find(aa.pop(), aa.length === 1 && (aa[0] === "~" || aa[0] === "+") && bl.parentNode ? bl.parentNode : bl, bn);
                    bs = br.expr ? N.filter(br.expr, br.set) : br.set;
                    if (aa.length > 0) {
                        bo = c(bs)
                    } else {
                        bq = false
                    }
                    for (; aa.length;) {
                        var Y = aa.pop();
                        br = Y;
                        if (L.relative[Y]) {
                            br = aa.pop()
                        } else {
                            Y = ""
                        }
                        if (br == null) {
                            br = bl
                        }
                        L.relative[Y](bo, br, bn)
                    }
                } else {
                    bo = []
                }
            }
            bo || (bo = bs);
            bo || N.error(Y || bm);
            if (O.call(bo) === "[object Array]") {
                if (bq) {
                    if (bl && bl.nodeType === 1) {
                        for (bm = 0; bo[bm] != null; bm++) {
                            if (bo[bm] && (bo[bm] === true || bo[bm].nodeType === 1 && A(bl, bo[bm]))) {
                                ba.push(bs[bm])
                            }
                        }
                    } else {
                        for (bm = 0; bo[bm] != null; bm++) {
                            bo[bm] && bo[bm].nodeType === 1 && ba.push(bs[bm])
                        }
                    }
                } else {
                    ba.push.apply(ba, bo)
                }
            } else {
                c(bo, ba)
            }
            if (bb) {
                N(bb, Z, ba, ab);
                N.uniqueSort(ba)
            }
            return ba
        };
        N.uniqueSort = function (Z) {
            if (J) {
                P = K;
                Z.sort(J);
                if (P) {
                    for (var Y = 1; Y < Z.length; Y++) {
                        Z[Y] === Z[Y - 1] && Z.splice(Y--, 1)
                    }
                }
            }
            return Z
        };
        N.matches = function (Z, Y) {
            return N(Z, null, null, Y)
        };
        N.find = function (bb, ba, ab) {
            var aa, Y;
            if (!bb) {
                return[]
            }
            for (var Z = 0, bm = L.order.length; Z < bm; Z++) {
                var bn = L.order[Z];
                if (Y = L.leftMatch[bn].exec(bb)) {
                    var bl = Y[1];
                    Y.splice(1, 1);
                    if (bl.substr(bl.length - 1) !== "\\") {
                        Y[1] = (Y[1] || "").replace(/\\/g, "");
                        aa = L.find[bn](Y, ba, ab);
                        if (aa != null) {
                            bb = bb.replace(L.match[bn], "");
                            break
                        }
                    }
                }
            }
            aa || (aa = ba.getElementsByTagName("*"));
            return{set: aa, expr: bb}
        };
        N.filter = function (bn, bm, bb, ab) {
            for (var Z = bn, aa = [], bt = bm, bu, bq, bl = bm && bm[0] && s(bm[0]); bn && bm.length;) {
                for (var bs in L.filter) {
                    if ((bu = L.leftMatch[bs].exec(bn)) != null && bu[2]) {
                        var bo = L.filter[bs], br, Y;
                        Y = bu[1];
                        bq = false;
                        bu.splice(1, 1);
                        if (Y.substr(Y.length - 1) !== "\\") {
                            if (bt === aa) {
                                aa = []
                            }
                            if (L.preFilter[bs]) {
                                if (bu = L.preFilter[bs](bu, bt, bb, aa, ab, bl)) {
                                    if (bu === true) {
                                        continue
                                    }
                                } else {
                                    bq = br = true
                                }
                            }
                            if (bu) {
                                for (var ba = 0; (Y = bt[ba]) != null; ba++) {
                                    if (Y) {
                                        br = bo(Y, bu, ba, bt);
                                        var bp = ab ^ !!br;
                                        if (bb && br != null) {
                                            if (bp) {
                                                bq = true
                                            } else {
                                                bt[ba] = false
                                            }
                                        } else {
                                            if (bp) {
                                                aa.push(Y);
                                                bq = true
                                            }
                                        }
                                    }
                                }
                            }
                            if (br !== I) {
                                bb || (bt = aa);
                                bn = bn.replace(L.match[bs], "");
                                if (!bq) {
                                    return[]
                                }
                                break
                            }
                        }
                    }
                }
                if (bn === Z) {
                    if (bq == null) {
                        N.error(bn)
                    } else {
                        break
                    }
                }
                Z = bn
            }
            return bt
        };
        N.error = function (Y) {
            throw"Syntax error, unrecognized expression: " + Y
        };
        var L = N.selectors = {order: ["ID", "NAME", "TAG"], match: {ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch: {}, attrMap: {"class": "className", "for": "htmlFor"}, attrHandle: {href: function (Y) {
            return Y.getAttribute("href")
        }}, relative: {"+": function (ab, aa) {
            var Z = typeof aa === "string", Y = Z && !/\W/.test(aa);
            Z = Z && !Y;
            if (Y) {
                aa = aa.toLowerCase()
            }
            Y = 0;
            for (var ba = ab.length, bb; Y < ba; Y++) {
                if (bb = ab[Y]) {
                    for (; (bb = bb.previousSibling) && bb.nodeType !== 1;) {
                    }
                    ab[Y] = Z || bb && bb.nodeName.toLowerCase() === aa ? bb || false : bb === aa
                }
            }
            Z && N.filter(aa, ab, true)
        }, ">": function (ab, aa) {
            var Z = typeof aa === "string";
            if (Z && !/\W/.test(aa)) {
                aa = aa.toLowerCase();
                for (var Y = 0, ba = ab.length; Y < ba; Y++) {
                    var bb = ab[Y];
                    if (bb) {
                        Z = bb.parentNode;
                        ab[Y] = Z.nodeName.toLowerCase() === aa ? Z : false
                    }
                }
            } else {
                Y = 0;
                for (ba = ab.length; Y < ba; Y++) {
                    if (bb = ab[Y]) {
                        ab[Y] = Z ? bb.parentNode : bb.parentNode === aa
                    }
                }
                Z && N.filter(aa, ab, true)
            }
        }, "": function (ab, aa, Z) {
            var Y = R++, ba = T;
            if (typeof aa === "string" && !/\W/.test(aa)) {
                var bb = aa = aa.toLowerCase();
                ba = V
            }
            ba("parentNode", aa, Y, ab, bb, Z)
        }, "~": function (ab, aa, Z) {
            var Y = R++, ba = T;
            if (typeof aa === "string" && !/\W/.test(aa)) {
                var bb = aa = aa.toLowerCase();
                ba = V
            }
            ba("previousSibling", aa, Y, ab, bb, Z)
        }}, find: {ID: function (aa, Z, Y) {
            if (typeof Z.getElementById !== "undefined" && !Y) {
                return(aa = Z.getElementById(aa[1])) ? [aa] : []
            }
        }, NAME: function (ab, aa) {
            if (typeof aa.getElementsByName !== "undefined") {
                var Z = [];
                aa = aa.getElementsByName(ab[1]);
                for (var Y = 0, ba = aa.length; Y < ba; Y++) {
                    aa[Y].getAttribute("name") === ab[1] && Z.push(aa[Y])
                }
                return Z.length === 0 ? null : Z
            }
        }, TAG: function (Z, Y) {
            return Y.getElementsByTagName(Z[1])
        }}, preFilter: {CLASS: function (ba, ab, Z, Y, bb, bl) {
            ba = " " + ba[1].replace(/\\/g, "") + " ";
            if (bl) {
                return ba
            }
            bl = 0;
            for (var aa; (aa = ab[bl]) != null; bl++) {
                if (aa) {
                    if (bb ^ (aa.className && (" " + aa.className + " ").replace(/[\t\n]/g, " ").indexOf(ba) >= 0)) {
                        Z || Y.push(aa)
                    } else {
                        if (Z) {
                            ab[bl] = false
                        }
                    }
                }
            }
            return false
        }, ID: function (Y) {
            return Y[1].replace(/\\/g, "")
        }, TAG: function (Y) {
            return Y[1].toLowerCase()
        }, CHILD: function (Z) {
            if (Z[1] === "nth") {
                var Y = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(Z[2] === "even" && "2n" || Z[2] === "odd" && "2n+1" || !/\D/.test(Z[2]) && "0n+" + Z[2] || Z[2]);
                Z[2] = Y[1] + (Y[2] || 1) - 0;
                Z[3] = Y[3] - 0
            }
            Z[0] = R++;
            return Z
        }, ATTR: function (ab, aa, Z, Y, ba, bb) {
            aa = ab[1].replace(/\\/g, "");
            if (!bb && L.attrMap[aa]) {
                ab[1] = L.attrMap[aa]
            }
            if (ab[2] === "~=") {
                ab[4] = " " + ab[4] + " "
            }
            return ab
        }, PSEUDO: function (ab, aa, Z, Y, ba) {
            if (ab[1] === "not") {
                if ((Q.exec(ab[3]) || "").length > 1 || /^\w/.test(ab[3])) {
                    ab[3] = N(ab[3], null, null, aa)
                } else {
                    ab = N.filter(ab[3], aa, Z, true ^ ba);
                    Z || Y.push.apply(Y, ab);
                    return false
                }
            } else {
                if (L.match.POS.test(ab[0]) || L.match.CHILD.test(ab[0])) {
                    return true
                }
            }
            return ab
        }, POS: function (Y) {
            Y.unshift(true);
            return Y
        }}, filters: {enabled: function (Y) {
            return Y.disabled === false && Y.type !== "hidden"
        }, disabled: function (Y) {
            return Y.disabled === true
        }, checked: function (Y) {
            return Y.checked === true
        }, selected: function (Y) {
            return Y.selected === true
        }, parent: function (Y) {
            return !!Y.firstChild
        }, empty: function (Y) {
            return !Y.firstChild
        }, has: function (aa, Z, Y) {
            return !!N(Y[3], aa).length
        }, header: function (Y) {
            return/h\d/i.test(Y.nodeName)
        }, text: function (Y) {
            return"text" === Y.type
        }, radio: function (Y) {
            return"radio" === Y.type
        }, checkbox: function (Y) {
            return"checkbox" === Y.type
        }, file: function (Y) {
            return"file" === Y.type
        }, password: function (Y) {
            return"password" === Y.type
        }, submit: function (Y) {
            return"submit" === Y.type
        }, image: function (Y) {
            return"image" === Y.type
        }, reset: function (Y) {
            return"reset" === Y.type
        }, button: function (Y) {
            return"button" === Y.type || Y.nodeName.toLowerCase() === "button"
        }, input: function (Y) {
            return/input|select|textarea|button/i.test(Y.nodeName)
        }}, setFilters: {first: function (Z, Y) {
            return Y === 0
        }, last: function (ab, aa, Z, Y) {
            return aa === Y.length - 1
        }, even: function (Z, Y) {
            return Y % 2 === 0
        }, odd: function (Z, Y) {
            return Y % 2 === 1
        }, lt: function (aa, Z, Y) {
            return Z < Y[3] - 0
        }, gt: function (aa, Z, Y) {
            return Z > Y[3] - 0
        }, nth: function (aa, Z, Y) {
            return Y[3] - 0 === Z
        }, eq: function (aa, Z, Y) {
            return Y[3] - 0 === Z
        }}, filter: {PSEUDO: function (ab, aa, Z, Y) {
            var ba = aa[1], bb = L.filters[ba];
            if (bb) {
                return bb(ab, Z, aa, Y)
            } else {
                if (ba === "contains") {
                    return(ab.textContent || ab.innerText || W([ab]) || "").indexOf(aa[3]) >= 0
                } else {
                    if (ba === "not") {
                        aa = aa[3];
                        Z = 0;
                        for (Y = aa.length; Z < Y; Z++) {
                            if (aa[Z] === ab) {
                                return false
                            }
                        }
                        return true
                    } else {
                        N.error("Syntax error, unrecognized expression: " + ba)
                    }
                }
            }
        }, CHILD: function (ba, ab) {
            var Z = ab[1], Y = ba;
            switch (Z) {
                case"only":
                case"first":
                    for (; Y = Y.previousSibling;) {
                        if (Y.nodeType === 1) {
                            return false
                        }
                    }
                    if (Z === "first") {
                        return true
                    }
                    Y = ba;
                case"last":
                    for (; Y = Y.nextSibling;) {
                        if (Y.nodeType === 1) {
                            return false
                        }
                    }
                    return true;
                case"nth":
                    Z = ab[2];
                    var bb = ab[3];
                    if (Z === 1 && bb === 0) {
                        return true
                    }
                    ab = ab[0];
                    var bl = ba.parentNode;
                    if (bl && (bl.sizcache !== ab || !ba.nodeIndex)) {
                        var aa = 0;
                        for (Y = bl.firstChild; Y; Y = Y.nextSibling) {
                            if (Y.nodeType === 1) {
                                Y.nodeIndex = ++aa
                            }
                        }
                        bl.sizcache = ab
                    }
                    ba = ba.nodeIndex - bb;
                    return Z === 0 ? ba === 0 : ba % Z === 0 && ba / Z >= 0
            }
        }, ID: function (Z, Y) {
            return Z.nodeType === 1 && Z.getAttribute("id") === Y
        }, TAG: function (Z, Y) {
            return Y === "*" && Z.nodeType === 1 || Z.nodeName.toLowerCase() === Y
        }, CLASS: function (Z, Y) {
            return(" " + (Z.className || Z.getAttribute("class")) + " ").indexOf(Y) > -1
        }, ATTR: function (ab, aa) {
            var Z = aa[1];
            ab = L.attrHandle[Z] ? L.attrHandle[Z](ab) : ab[Z] != null ? ab[Z] : ab.getAttribute(Z);
            Z = ab + "";
            var Y = aa[2];
            aa = aa[4];
            return ab == null ? Y === "!=" : Y === "=" ? Z === aa : Y === "*=" ? Z.indexOf(aa) >= 0 : Y === "~=" ? (" " + Z + " ").indexOf(aa) >= 0 : !aa ? Z && ab !== false : Y === "!=" ? Z !== aa : Y === "^=" ? Z.indexOf(aa) === 0 : Y === "$=" ? Z.substr(Z.length - aa.length) === aa : Y === "|=" ? Z === aa || Z.substr(0, aa.length + 1) === aa + "-" : false
        }, POS: function (ab, aa, Z, Y) {
            var ba = L.setFilters[aa[2]];
            if (ba) {
                return ba(ab, Z, aa, Y)
            }
        }}}, F = L.match.POS;
        for (var w in L.match) {
            L.match[w] = new RegExp(L.match[w].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            L.leftMatch[w] = new RegExp(/(^(?:.|\r|\n)*?)/.source + L.match[w].source.replace(/\\(\d+)/g, function (Z, Y) {
                return"\\" + (Y - 0 + 1)
            }))
        }
        var c = function (Z, Y) {
            Z = Array.prototype.slice.call(Z, 0);
            if (Y) {
                Y.push.apply(Y, Z);
                return Y
            }
            return Z
        };
        try {
            Array.prototype.slice.call(M.documentElement.childNodes, 0)
        } catch (G) {
            c = function (ab, aa) {
                aa = aa || [];
                if (O.call(ab) === "[object Array]") {
                    Array.prototype.push.apply(aa, ab)
                } else {
                    if (typeof ab.length === "number") {
                        for (var Z = 0, Y = ab.length; Z < Y; Z++) {
                            aa.push(ab[Z])
                        }
                    } else {
                        for (Z = 0; ab[Z]; Z++) {
                            aa.push(ab[Z])
                        }
                    }
                }
                return aa
            }
        }
        var J;
        if (M.documentElement.compareDocumentPosition) {
            J = function (Z, Y) {
                if (!Z.compareDocumentPosition || !Y.compareDocumentPosition) {
                    if (Z == Y) {
                        P = true
                    }
                    return Z.compareDocumentPosition ? -1 : 1
                }
                Z = Z.compareDocumentPosition(Y) & 4 ? -1 : Z === Y ? 0 : 1;
                if (Z === 0) {
                    P = true
                }
                return Z
            }
        } else {
            if ("sourceIndex" in M.documentElement) {
                J = function (Z, Y) {
                    if (!Z.sourceIndex || !Y.sourceIndex) {
                        if (Z == Y) {
                            P = true
                        }
                        return Z.sourceIndex ? -1 : 1
                    }
                    Z = Z.sourceIndex - Y.sourceIndex;
                    if (Z === 0) {
                        P = true
                    }
                    return Z
                }
            } else {
                if (M.createRange) {
                    J = function (ab, aa) {
                        if (!ab.ownerDocument || !aa.ownerDocument) {
                            if (ab == aa) {
                                P = true
                            }
                            return ab.ownerDocument ? -1 : 1
                        }
                        var Z = ab.ownerDocument.createRange(), Y = aa.ownerDocument.createRange();
                        Z.setStart(ab, 0);
                        Z.setEnd(ab, 0);
                        Y.setStart(aa, 0);
                        Y.setEnd(aa, 0);
                        ab = Z.compareBoundaryPoints(Range.START_TO_END, Y);
                        if (ab === 0) {
                            P = true
                        }
                        return ab
                    }
                }
            }
        }
        (function () {
            var aa = M.createElement("div"), Z = "script" + (new Date).getTime();
            aa.innerHTML = "<a name='" + Z + "'/>";
            var Y = M.documentElement;
            Y.insertBefore(aa, Y.firstChild);
            if (M.getElementById(Z)) {
                L.find.ID = function (ab, ba, bb) {
                    if (typeof ba.getElementById !== "undefined" && !bb) {
                        return(ba = ba.getElementById(ab[1])) ? ba.id === ab[1] || typeof ba.getAttributeNode !== "undefined" && ba.getAttributeNode("id").nodeValue === ab[1] ? [ba] : I : []
                    }
                };
                L.filter.ID = function (ab, ba) {
                    var bb = typeof ab.getAttributeNode !== "undefined" && ab.getAttributeNode("id");
                    return ab.nodeType === 1 && bb && bb.nodeValue === ba
                }
            }
            Y.removeChild(aa);
            Y = aa = null
        })();
        (function () {
            var Y = M.createElement("div");
            Y.appendChild(M.createComment(""));
            if (Y.getElementsByTagName("*").length > 0) {
                L.find.TAG = function (ab, aa) {
                    aa = aa.getElementsByTagName(ab[1]);
                    if (ab[1] === "*") {
                        ab = [];
                        for (var Z = 0; aa[Z]; Z++) {
                            aa[Z].nodeType === 1 && ab.push(aa[Z])
                        }
                        aa = ab
                    }
                    return aa
                }
            }
            Y.innerHTML = "<a href='#'></a>";
            if (Y.firstChild && typeof Y.firstChild.getAttribute !== "undefined" && Y.firstChild.getAttribute("href") !== "#") {
                L.attrHandle.href = function (Z) {
                    return Z.getAttribute("href", 2)
                }
            }
            Y = null
        })();
        M.querySelectorAll && function () {
            var aa = N, Z = M.createElement("div");
            Z.innerHTML = "<p class='TEST'></p>";
            if (!(Z.querySelectorAll && Z.querySelectorAll(".TEST").length === 0)) {
                N = function (ab, bl, bm, ba) {
                    bl = bl || M;
                    if (!ba && bl.nodeType === 9 && !s(bl)) {
                        try {
                            return c(bl.querySelectorAll(ab), bm)
                        } catch (bb) {
                        }
                    }
                    return aa(ab, bl, bm, ba)
                };
                for (var Y in aa) {
                    N[Y] = aa[Y]
                }
                Z = null
            }
        }();
        (function () {
            var Y = M.createElement("div");
            Y.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!(!Y.getElementsByClassName || Y.getElementsByClassName("e").length === 0)) {
                Y.lastChild.className = "e";
                if (Y.getElementsByClassName("e").length !== 1) {
                    L.order.splice(1, 0, "CLASS");
                    L.find.CLASS = function (ab, aa, Z) {
                        if (typeof aa.getElementsByClassName !== "undefined" && !Z) {
                            return aa.getElementsByClassName(ab[1])
                        }
                    };
                    Y = null
                }
            }
        })();
        var A = M.compareDocumentPosition ? function (Z, Y) {
            return !!(Z.compareDocumentPosition(Y) & 16)
        } : function (Z, Y) {
            return Z !== Y && (Z.contains ? Z.contains(Y) : true)
        }, s = function (Y) {
            return(Y = (Y ? Y.ownerDocument || Y : 0).documentElement) ? Y.nodeName !== "HTML" : false
        }, X = function (ab, aa) {
            var Z = [], Y = "", ba;
            for (aa = aa.nodeType ? [aa] : aa; ba = L.match.PSEUDO.exec(ab);) {
                Y += ba[0];
                ab = ab.replace(L.match.PSEUDO, "")
            }
            ab = L.relative[ab] ? ab + "*" : ab;
            ba = 0;
            for (var bb = aa.length; ba < bb; ba++) {
                N(ab, aa[ba], Z)
            }
            return N.filter(Y, Z)
        };
        ai.find = N;
        ai.expr = N.selectors;
        ai.expr[":"] = ai.expr.filters;
        ai.unique = N.uniqueSort;
        ai.text = W;
        ai.isXMLDoc = s;
        ai.contains = A
    })();
    var f = /Until$/, a9 = /^(?:parents|prevUntil|prevAll)/, aW = /,/;
    au = Array.prototype.slice;
    var aL = function (s, c, A) {
        if (ai.isFunction(c)) {
            return ai.grep(s, function (G, F) {
                return !!c.call(G, F, G) === A
            })
        } else {
            if (c.nodeType) {
                return ai.grep(s, function (F) {
                    return F === c === A
                })
            } else {
                if (typeof c === "string") {
                    var w = ai.grep(s, function (F) {
                        return F.nodeType === 1
                    });
                    if (aT.test(c)) {
                        return ai.filter(c, w, !A)
                    } else {
                        c = ai.filter(c, w)
                    }
                }
            }
        }
        return ai.grep(s, function (F) {
            return ai.inArray(F, c) >= 0 === A
        })
    };
    ai.fn.extend({find: function (s) {
        for (var c = this.pushStack("", "find", s), J = 0, F = 0, G = this.length; F < G; F++) {
            J = c.length;
            ai.find(s, this[F], c);
            if (F > 0) {
                for (var w = J; w < c.length; w++) {
                    for (var A = 0; A < J; A++) {
                        if (c[A] === c[w]) {
                            c.splice(w--, 1);
                            break
                        }
                    }
                }
            }
        }
        return c
    }, has: function (s) {
        var c = ai(s);
        return this.filter(function () {
            for (var A = 0, w = c.length; A < w; A++) {
                if (ai.contains(this, c[A])) {
                    return true
                }
            }
        })
    }, not: function (c) {
        return this.pushStack(aL(this, c, false), "not", c)
    }, filter: function (c) {
        return this.pushStack(aL(this, c, true), "filter", c)
    }, is: function (c) {
        return !!c && ai.filter(c, this).length > 0
    }, closest: function (L, K) {
        if (ai.isArray(L)) {
            var J = [], F = this[0], G, w = {}, A;
            if (F && L.length) {
                G = 0;
                for (var c = L.length; G < c; G++) {
                    A = L[G];
                    w[A] || (w[A] = ai.expr.match.POS.test(A) ? ai(A, K || this.context) : A)
                }
                for (; F && F.ownerDocument && F !== K;) {
                    for (A in w) {
                        G = w[A];
                        if (G.jquery ? G.index(F) > -1 : ai(F).is(G)) {
                            J.push({selector: A, elem: F});
                            delete w[A]
                        }
                    }
                    F = F.parentNode
                }
            }
            return J
        }
        var s = ai.expr.match.POS.test(L) ? ai(L, K || this.context) : null;
        return this.map(function (O, N) {
            for (; N && N.ownerDocument && N !== K;) {
                if (s ? s.index(N) > -1 : ai(N).is(L)) {
                    return N
                }
                N = N.parentNode
            }
            return null
        })
    }, index: function (c) {
        if (!c || typeof c === "string") {
            return ai.inArray(this[0], c ? ai(c) : this.parent().children())
        }
        return ai.inArray(c.jquery ? c[0] : c, this)
    }, add: function (s, c) {
        s = typeof s === "string" ? ai(s, c || this.context) : ai.makeArray(s);
        c = ai.merge(this.get(), s);
        return this.pushStack(l(s[0]) || l(c[0]) ? c : ai.unique(c))
    }, andSelf: function () {
        return this.add(this.prevObject)
    }});
    ai.each({parent: function (c) {
        return(c = c.parentNode) && c.nodeType !== 11 ? c : null
    }, parents: function (c) {
        return ai.dir(c, "parentNode")
    }, parentsUntil: function (s, c, w) {
        return ai.dir(s, "parentNode", w)
    }, next: function (c) {
        return ai.nth(c, 2, "nextSibling")
    }, prev: function (c) {
        return ai.nth(c, 2, "previousSibling")
    }, nextAll: function (c) {
        return ai.dir(c, "nextSibling")
    }, prevAll: function (c) {
        return ai.dir(c, "previousSibling")
    }, nextUntil: function (s, c, w) {
        return ai.dir(s, "nextSibling", w)
    }, prevUntil: function (s, c, w) {
        return ai.dir(s, "previousSibling", w)
    }, siblings: function (c) {
        return ai.sibling(c.parentNode.firstChild, c)
    }, children: function (c) {
        return ai.sibling(c.firstChild)
    }, contents: function (c) {
        return ai.nodeName(c, "iframe") ? c.contentDocument || c.contentWindow.document : ai.makeArray(c.childNodes)
    }}, function (s, c) {
        ai.fn[s] = function (F, w) {
            var A = ai.map(this, c, F);
            f.test(s) || (w = F);
            if (w && typeof w === "string") {
                A = ai.filter(w, A)
            }
            A = this.length > 1 ? ai.unique(A) : A;
            if ((this.length > 1 || aW.test(w)) && a9.test(s)) {
                A = A.reverse()
            }
            return this.pushStack(A, s, au.call(arguments).join(","))
        }
    });
    ai.extend({filter: function (s, c, w) {
        if (w) {
            s = ":not(" + s + ")"
        }
        return ai.find.matches(s, c)
    }, dir: function (s, c, A) {
        var w = [];
        for (s = s[c]; s && s.nodeType !== 9 && (A === I || s.nodeType !== 1 || !ai(s).is(A));) {
            s.nodeType === 1 && w.push(s);
            s = s[c]
        }
        return w
    }, nth: function (s, c, A) {
        c = c || 1;
        for (var w = 0; s; s = s[A]) {
            if (s.nodeType === 1 && ++w === c) {
                break
            }
        }
        return s
    }, sibling: function (s, c) {
        for (var w = []; s; s = s.nextSibling) {
            s.nodeType === 1 && s !== c && w.push(s)
        }
        return w
    }});
    var ah = / jQuery\d+="(?:\d+|null)"/g, ar = /^\s+/, B = /(<([\w:]+)[^>]*?)\/>/g, aC = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i, m = /<([\w:]+)/, ac = /<tbody/i, u = /<|&#?\w+;/, aP = /<script|<object|<embed|<option|<style/i, ak = /checked\s*(?:[^=]|=\s*.checked.)/i, bk = function (s, c, w) {
        return aC.test(w) ? s : c + "></" + w + ">"
    }, aJ = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]};
    aJ.optgroup = aJ.option;
    aJ.tbody = aJ.tfoot = aJ.colgroup = aJ.caption = aJ.thead;
    aJ.th = aJ.td;
    if (!ai.support.htmlSerialize) {
        aJ._default = [1, "div<div>", "</div>"]
    }
    ai.fn.extend({text: function (c) {
        if (ai.isFunction(c)) {
            return this.each(function (s) {
                var w = ai(this);
                w.text(c.call(this, s, w.text()))
            })
        }
        if (typeof c !== "object" && c !== I) {
            return this.empty().append((this[0] && this[0].ownerDocument || M).createTextNode(c))
        }
        return ai.text(this)
    }, wrapAll: function (s) {
        if (ai.isFunction(s)) {
            return this.each(function (w) {
                ai(this).wrapAll(s.call(this, w))
            })
        }
        if (this[0]) {
            var c = ai(s, this[0].ownerDocument).eq(0).clone(true);
            this[0].parentNode && c.insertBefore(this[0]);
            c.map(function () {
                for (var w = this; w.firstChild && w.firstChild.nodeType === 1;) {
                    w = w.firstChild
                }
                return w
            }).append(this)
        }
        return this
    }, wrapInner: function (c) {
        if (ai.isFunction(c)) {
            return this.each(function (s) {
                ai(this).wrapInner(c.call(this, s))
            })
        }
        return this.each(function () {
            var s = ai(this), w = s.contents();
            w.length ? w.wrapAll(c) : s.append(c)
        })
    }, wrap: function (c) {
        return this.each(function () {
            ai(this).wrapAll(c)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            ai.nodeName(this, "body") || ai(this).replaceWith(this.childNodes)
        }).end()
    }, append: function () {
        return this.domManip(arguments, true, function (c) {
            this.nodeType === 1 && this.appendChild(c)
        })
    }, prepend: function () {
        return this.domManip(arguments, true, function (c) {
            this.nodeType === 1 && this.insertBefore(c, this.firstChild)
        })
    }, before: function () {
        if (this[0] && this[0].parentNode) {
            return this.domManip(arguments, false, function (s) {
                this.parentNode.insertBefore(s, this)
            })
        } else {
            if (arguments.length) {
                var c = ai(arguments[0]);
                c.push.apply(c, this.toArray());
                return this.pushStack(c, "before", arguments)
            }
        }
    }, after: function () {
        if (this[0] && this[0].parentNode) {
            return this.domManip(arguments, false, function (s) {
                this.parentNode.insertBefore(s, this.nextSibling)
            })
        } else {
            if (arguments.length) {
                var c = this.pushStack(this, "after", arguments);
                c.push.apply(c, ai(arguments[0]).toArray());
                return c
            }
        }
    }, remove: function (s, c) {
        for (var A = 0, w; (w = this[A]) != null; A++) {
            if (!s || ai.filter(s, [w]).length) {
                if (!c && w.nodeType === 1) {
                    ai.cleanData(w.getElementsByTagName("*"));
                    ai.cleanData([w])
                }
                w.parentNode && w.parentNode.removeChild(w)
            }
        }
        return this
    }, empty: function () {
        for (var s = 0, c; (c = this[s]) != null; s++) {
            for (c.nodeType === 1 && ai.cleanData(c.getElementsByTagName("*")); c.firstChild;) {
                c.removeChild(c.firstChild)
            }
        }
        return this
    }, clone: function (s) {
        var c = this.map(function () {
            if (!ai.support.noCloneEvent && !ai.isXMLDoc(this)) {
                var A = this.outerHTML, w = this.ownerDocument;
                if (!A) {
                    A = w.createElement("div");
                    A.appendChild(this.cloneNode(true));
                    A = A.innerHTML
                }
                return ai.clean([A.replace(ah, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(ar, "")], w)[0]
            } else {
                return this.cloneNode(true)
            }
        });
        if (s === true) {
            bj(this, c);
            bj(this.find("*"), c.find("*"))
        }
        return c
    }, html: function (s) {
        if (s === I) {
            return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ah, "") : null
        } else {
            if (typeof s === "string" && !aP.test(s) && (ai.support.leadingWhitespace || !ar.test(s)) && !aJ[(m.exec(s) || ["", ""])[1].toLowerCase()]) {
                s = s.replace(B, bk);
                try {
                    for (var c = 0, A = this.length; c < A; c++) {
                        if (this[c].nodeType === 1) {
                            ai.cleanData(this[c].getElementsByTagName("*"));
                            this[c].innerHTML = s
                        }
                    }
                } catch (w) {
                    this.empty().append(s)
                }
            } else {
                ai.isFunction(s) ? this.each(function (J) {
                    var F = ai(this), G = F.html();
                    F.empty().append(function () {
                        return s.call(this, J, G)
                    })
                }) : this.empty().append(s)
            }
        }
        return this
    }, replaceWith: function (c) {
        if (this[0] && this[0].parentNode) {
            if (ai.isFunction(c)) {
                return this.each(function (s) {
                    var A = ai(this), w = A.html();
                    A.replaceWith(c.call(this, s, w))
                })
            }
            if (typeof c !== "string") {
                c = ai(c).detach()
            }
            return this.each(function () {
                var s = this.nextSibling, w = this.parentNode;
                ai(this).remove();
                s ? ai(s).before(c) : ai(w).append(c)
            })
        } else {
            return this.pushStack(ai(ai.isFunction(c) ? c() : c), "replaceWith", c)
        }
    }, detach: function (c) {
        return this.remove(c, true)
    }, domManip: function (O, N, L) {
        function J(P) {
            return ai.nodeName(P, "table") ? P.getElementsByTagName("tbody")[0] || P.appendChild(P.ownerDocument.createElement("tbody")) : P
        }

        var K, F, G = O[0], s = [], A;
        if (!ai.support.checkClone && arguments.length === 3 && typeof G === "string" && ak.test(G)) {
            return this.each(function () {
                ai(this).domManip(O, N, L, true)
            })
        }
        if (ai.isFunction(G)) {
            return this.each(function (P) {
                var Q = ai(this);
                O[0] = G.call(this, P, N ? Q.html() : I);
                Q.domManip(O, N, L)
            })
        }
        if (this[0]) {
            K = G && G.parentNode;
            K = ai.support.parentNode && K && K.nodeType === 11 && K.childNodes.length === this.length ? {fragment: K} : a3(O, this, s);
            A = K.fragment;
            if (F = A.childNodes.length === 1 ? (A = A.firstChild) : A.firstChild) {
                N = N && ai.nodeName(F, "tr");
                for (var w = 0, c = this.length; w < c; w++) {
                    L.call(N ? J(this[w], F) : this[w], w > 0 || K.cacheable || this.length > 1 ? A.cloneNode(true) : A)
                }
            }
            s.length && ai.each(s, E)
        }
        return this
    }});
    ai.fragments = {};
    ai.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (s, c) {
        ai.fn[s] = function (J) {
            var F = [];
            J = ai(J);
            var G = this.length === 1 && this[0].parentNode;
            if (G && G.nodeType === 11 && G.childNodes.length === 1 && J.length === 1) {
                J[c](this[0]);
                return this
            } else {
                G = 0;
                for (var w = J.length; G < w; G++) {
                    var A = (G > 0 ? this.clone(true) : this).get();
                    ai.fn[c].apply(ai(J[G]), A);
                    F = F.concat(A)
                }
                return this.pushStack(F, s, J.selector)
            }
        }
    });
    ai.extend({clean: function (O, N, L, J) {
        N = N || M;
        if (typeof N.createElement === "undefined") {
            N = N.ownerDocument || N[0] && N[0].ownerDocument || M
        }
        for (var K = [], F = 0, G; (G = O[F]) != null; F++) {
            if (typeof G === "number") {
                G += ""
            }
            if (G) {
                if (typeof G === "string" && !u.test(G)) {
                    G = N.createTextNode(G)
                } else {
                    if (typeof G === "string") {
                        G = G.replace(B, bk);
                        var s = (m.exec(G) || ["", ""])[1].toLowerCase(), A = aJ[s] || aJ._default, w = A[0], c = N.createElement("div");
                        for (c.innerHTML = A[1] + G + A[2]; w--;) {
                            c = c.lastChild
                        }
                        if (!ai.support.tbody) {
                            w = ac.test(G);
                            s = s === "table" && !w ? c.firstChild && c.firstChild.childNodes : A[1] === "<table>" && !w ? c.childNodes : [];
                            for (A = s.length - 1; A >= 0; --A) {
                                ai.nodeName(s[A], "tbody") && !s[A].childNodes.length && s[A].parentNode.removeChild(s[A])
                            }
                        }
                        !ai.support.leadingWhitespace && ar.test(G) && c.insertBefore(N.createTextNode(ar.exec(G)[0]), c.firstChild);
                        G = c.childNodes
                    }
                }
                if (G.nodeType) {
                    K.push(G)
                } else {
                    K = ai.merge(K, G)
                }
            }
        }
        if (L) {
            for (F = 0; K[F]; F++) {
                if (J && ai.nodeName(K[F], "script") && (!K[F].type || K[F].type.toLowerCase() === "text/javascript")) {
                    J.push(K[F].parentNode ? K[F].parentNode.removeChild(K[F]) : K[F])
                } else {
                    K[F].nodeType === 1 && K.splice.apply(K, [F + 1, 0].concat(ai.makeArray(K[F].getElementsByTagName("script"))));
                    L.appendChild(K[F])
                }
            }
        }
        return K
    }, cleanData: function (L) {
        for (var K, J, F = ai.cache, G = ai.event.special, w = ai.support.deleteExpando, A = 0, c; (c = L[A]) != null; A++) {
            if (J = c[ai.expando]) {
                K = F[J];
                if (K.events) {
                    for (var s in K.events) {
                        G[s] ? ai.event.remove(c, s) : aG(c, s, K.handle)
                    }
                }
                if (w) {
                    delete c[ai.expando]
                } else {
                    c.removeAttribute && c.removeAttribute(ai.expando)
                }
                delete F[J]
            }
        }
    }});
    var h = /z-?index|font-?weight|opacity|zoom|line-?height/i, a4 = /alpha\([^)]*\)/, aQ = /opacity=([^)]*)/, aE = /float/i, ad = /-([a-z])/ig, bf = /([A-Z])/g, aZ = /^-?\d+(?:px)?$/i, aI = /^-?\d/, af = {position: "absolute", visibility: "hidden", display: "block"}, y = ["Left", "Right"], k = ["Top", "Bottom"], bi = M.defaultView && M.defaultView.getComputedStyle, al = ai.support.cssFloat ? "cssFloat" : "styleFloat", v = function (s, c) {
        return c.toUpperCase()
    };
    ai.fn.css = function (s, c) {
        return ap(this, s, c, true, function (F, w, A) {
            if (A === I) {
                return ai.curCSS(F, w)
            }
            if (typeof A === "number" && !h.test(w)) {
                A += "px"
            }
            ai.style(F, w, A)
        })
    };
    ai.extend({style: function (s, c, F) {
        if (!s || s.nodeType === 3 || s.nodeType === 8) {
            return I
        }
        if ((c === "width" || c === "height") && parseFloat(F) < 0) {
            F = I
        }
        var w = s.style || s, A = F !== I;
        if (!ai.support.opacity && c === "opacity") {
            if (A) {
                w.zoom = 1;
                c = parseInt(F, 10) + "" === "NaN" ? "" : "alpha(opacity=" + F * 100 + ")";
                s = w.filter || ai.curCSS(s, "filter") || "";
                w.filter = a4.test(s) ? s.replace(a4, c) : c
            }
            return w.filter && w.filter.indexOf("opacity=") >= 0 ? parseFloat(aQ.exec(w.filter)[1]) / 100 + "" : ""
        }
        if (aE.test(c)) {
            c = al
        }
        c = c.replace(ad, v);
        if (A) {
            w[c] = F
        }
        return w[c]
    }, css: function (s, c, J, F) {
        if (c === "width" || c === "height") {
            var G, w = c === "width" ? y : k;

            function A() {
                G = c === "width" ? s.offsetWidth : s.offsetHeight;
                F !== "border" && ai.each(w, function () {
                    F || (G -= parseFloat(ai.curCSS(s, "padding" + this, true)) || 0);
                    if (F === "margin") {
                        G += parseFloat(ai.curCSS(s, "margin" + this, true)) || 0
                    } else {
                        G -= parseFloat(ai.curCSS(s, "border" + this + "Width", true)) || 0
                    }
                })
            }

            s.offsetWidth !== 0 ? A() : ai.swap(s, af, A);
            return Math.max(0, Math.round(G))
        }
        return ai.curCSS(s, c, J)
    }, curCSS: function (s, c, G) {
        var A, F = s.style;
        if (!ai.support.opacity && c === "opacity" && s.currentStyle) {
            A = aQ.test(s.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "" : "";
            return A === "" ? "1" : A
        }
        if (aE.test(c)) {
            c = al
        }
        if (!G && F && F[c]) {
            A = F[c]
        } else {
            if (bi) {
                if (aE.test(c)) {
                    c = "float"
                }
                c = c.replace(bf, "-$1").toLowerCase();
                F = s.ownerDocument.defaultView;
                if (!F) {
                    return null
                }
                if (s = F.getComputedStyle(s, null)) {
                    A = s.getPropertyValue(c)
                }
                if (c === "opacity" && A === "") {
                    A = "1"
                }
            } else {
                if (s.currentStyle) {
                    G = c.replace(ad, v);
                    A = s.currentStyle[c] || s.currentStyle[G];
                    if (!aZ.test(A) && aI.test(A)) {
                        c = F.left;
                        var w = s.runtimeStyle.left;
                        s.runtimeStyle.left = s.currentStyle.left;
                        F.left = G === "fontSize" ? "1em" : A || 0;
                        A = F.pixelLeft + "px";
                        F.left = c;
                        s.runtimeStyle.left = w
                    }
                }
            }
        }
        return A
    }, swap: function (s, c, F) {
        var w = {};
        for (var A in c) {
            w[A] = s.style[A];
            s.style[A] = c[A]
        }
        F.call(s);
        for (A in c) {
            s.style[A] = w[A]
        }
    }});
    if (ai.expr && ai.expr.filters) {
        ai.expr.filters.hidden = function (s) {
            var c = s.offsetWidth, A = s.offsetHeight, w = s.nodeName.toLowerCase() === "tr";
            return c === 0 && A === 0 && !w ? true : c > 0 && A > 0 && !w ? false : ai.curCSS(s, "display") === "none"
        };
        ai.expr.filters.visible = function (c) {
            return !ai.expr.filters.hidden(c)
        }
    }
    var a2 = aF(), aN = /<script(.|\s)*?\/script>/gi, aj = /select|textarea/i, C = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i, aA = /=\?(&|$)/, i = /\?/, n = /(\?|&)_=.*?(&|$)/, a = /^(\w+:)?\/\/([^\/?#]+)/, a5 = /%20/g, aR = ai.fn.load;
    ai.fn.extend({load: function (s, c, G) {
        if (typeof s !== "string") {
            return aR.call(this, s)
        } else {
            if (!this.length) {
                return this
            }
        }
        var A = s.indexOf(" ");
        if (A >= 0) {
            var F = s.slice(A, s.length);
            s = s.slice(0, A)
        }
        A = "GET";
        if (c) {
            if (ai.isFunction(c)) {
                G = c;
                c = null
            } else {
                if (typeof c === "object") {
                    c = ai.param(c, ai.ajaxSettings.traditional);
                    A = "POST"
                }
            }
        }
        var w = this;
        ai.ajax({url: s, type: A, dataType: "html", data: c, complete: function (J, K) {
            if (K === "success" || K === "notmodified") {
                w.html(F ? ai("<div />").append(J.responseText.replace(aN, "")).find(F) : J.responseText)
            }
            G && w.each(G, [J.responseText, K, J])
        }});
        return this
    }, serialize: function () {
        return ai.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            return this.elements ? ai.makeArray(this.elements) : this
        }).filter(function () {
            return this.name && !this.disabled && (this.checked || aj.test(this.nodeName) || C.test(this.type))
        }).map(function (s, c) {
            s = ai(this).val();
            return s == null ? null : ai.isArray(s) ? ai.map(s, function (w) {
                return{name: c.name, value: w}
            }) : {name: c.name, value: s}
        }).get()
    }});
    ai.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (s, c) {
        ai.fn[c] = function (w) {
            return this.bind(c, w)
        }
    });
    ai.extend({get: function (s, c, A, w) {
        if (ai.isFunction(c)) {
            w = w || A;
            A = c;
            c = null
        }
        return ai.ajax({type: "GET", url: s, data: c, success: A, dataType: w})
    }, getScript: function (s, c) {
        return ai.get(s, null, c, "script")
    }, getJSON: function (s, c, w) {
        return ai.get(s, c, w, "json")
    }, post: function (s, c, A, w) {
        if (ai.isFunction(c)) {
            w = w || A;
            A = c;
            c = {}
        }
        return ai.ajax({type: "POST", url: s, data: c, success: A, dataType: w})
    }, ajaxSetup: function (c) {
        ai.extend(ai.ajaxSettings, c)
    }, ajaxSettings: {url: location.href, global: true, type: "GET", contentType: "application/x-www-form-urlencoded", processData: true, async: true, xhr: aO.XMLHttpRequest && (aO.location.protocol !== "file:" || !aO.ActiveXObject) ? function () {
        return new aO.XMLHttpRequest
    } : function () {
        try {
            return new aO.ActiveXObject("Microsoft.XMLHTTP")
        } catch (c) {
        }
    }, accepts: {xml: "application/xml, text/xml", html: "text/html", script: "text/javascript, application/javascript", json: "application/json, text/javascript", text: "text/plain", _default: "*/*"}}, lastModified: {}, etag: {}, ajax: function (aa) {
        function Z() {
            X.success && X.success.call(P, K, R, s);
            X.global && W("ajaxSuccess", [s, X])
        }

        function Y() {
            X.complete && X.complete.call(P, s, R);
            X.global && W("ajaxComplete", [s, X]);
            X.global && !--ai.active && ai.event.trigger("ajaxStop")
        }

        function W(ba, bb) {
            (X.context ? ai(X.context) : ai.event).trigger(ba, bb)
        }

        var X = ai.extend(true, {}, ai.ajaxSettings, aa), Q, R, K, P = aa && aa.context || X, L = X.type.toUpperCase();
        if (X.data && X.processData && typeof X.data !== "string") {
            X.data = ai.param(X.data, X.traditional)
        }
        if (X.dataType === "jsonp") {
            if (L === "GET") {
                aA.test(X.url) || (X.url += (i.test(X.url) ? "&" : "?") + (X.jsonp || "callback") + "=?")
            } else {
                if (!X.data || !aA.test(X.data)) {
                    X.data = (X.data ? X.data + "&" : "") + (X.jsonp || "callback") + "=?"
                }
            }
            X.dataType = "json"
        }
        if (X.dataType === "json" && (X.data && aA.test(X.data) || aA.test(X.url))) {
            Q = X.jsonpCallback || "jsonp" + a2++;
            if (X.data) {
                X.data = (X.data + "").replace(aA, "=" + Q + "$1")
            }
            X.url = X.url.replace(aA, "=" + Q + "$1");
            X.dataType = "script";
            aO[Q] = aO[Q] || function (ba) {
                K = ba;
                Z();
                Y();
                aO[Q] = I;
                try {
                    delete aO[Q]
                } catch (bb) {
                }
                c && c.removeChild(G)
            }
        }
        if (X.dataType === "script" && X.cache === null) {
            X.cache = false
        }
        if (X.cache === false && L === "GET") {
            var F = aF(), w = X.url.replace(n, "$1_=" + F + "$2");
            X.url = w + (w === X.url ? (i.test(X.url) ? "&" : "?") + "_=" + F : "")
        }
        if (X.data && L === "GET") {
            X.url += (i.test(X.url) ? "&" : "?") + X.data
        }
        X.global && !ai.active++ && ai.event.trigger("ajaxStart");
        F = (F = a.exec(X.url)) && (F[1] && F[1] !== location.protocol || F[2] !== location.host);
        if (X.dataType === "script" && L === "GET" && F) {
            var c = M.getElementsByTagName("head")[0] || M.documentElement, G = M.createElement("script");
            G.src = X.url;
            if (X.scriptCharset) {
                G.charset = X.scriptCharset
            }
            if (!Q) {
                var J = false;
                G.onload = G.onreadystatechange = function () {
                    if (!J && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                        J = true;
                        Z();
                        Y();
                        G.onload = G.onreadystatechange = null;
                        c && G.parentNode && c.removeChild(G)
                    }
                }
            }
            c.insertBefore(G, c.firstChild);
            return I
        }
        var A = false, s = X.xhr();
        if (s) {
            X.username ? s.open(L, X.url, X.async, X.username, X.password) : s.open(L, X.url, X.async);
            try {
                if (X.data || aa && aa.contentType) {
                    s.setRequestHeader("Content-Type", X.contentType)
                }
                if (X.ifModified) {
                    ai.lastModified[X.url] && s.setRequestHeader("If-Modified-Since", ai.lastModified[X.url]);
                    ai.etag[X.url] && s.setRequestHeader("If-None-Match", ai.etag[X.url])
                }
                F || s.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                s.setRequestHeader("Accept", X.dataType && X.accepts[X.dataType] ? X.accepts[X.dataType] + ", */*" : X.accepts._default)
            } catch (ab) {
            }
            if (X.beforeSend && X.beforeSend.call(P, s, X) === false) {
                X.global && !--ai.active && ai.event.trigger("ajaxStop");
                s.abort();
                return false
            }
            X.global && W("ajaxSend", [s, X]);
            var V = s.onreadystatechange = function (bb) {
                if (!s || s.readyState === 0 || bb === "abort") {
                    A || Y();
                    A = true;
                    if (s) {
                        s.onreadystatechange = ai.noop
                    }
                } else {
                    if (!A && s && (s.readyState === 4 || bb === "timeout")) {
                        A = true;
                        s.onreadystatechange = ai.noop;
                        R = bb === "timeout" ? "timeout" : !ai.httpSuccess(s) ? "error" : X.ifModified && ai.httpNotModified(s, X.url) ? "notmodified" : "success";
                        var bl;
                        if (R === "success") {
                            try {
                                K = ai.httpData(s, X.dataType, X)
                            } catch (ba) {
                                R = "parsererror";
                                bl = ba
                            }
                        }
                        if (R === "success" || R === "notmodified") {
                            Q || Z()
                        } else {
                            ai.handleError(X, s, R, bl)
                        }
                        Y();
                        bb === "timeout" && s.abort();
                        if (X.async) {
                            s = null
                        }
                    }
                }
            };
            try {
                var T = s.abort;
                s.abort = function () {
                    s && T.call(s);
                    V("abort")
                }
            } catch (O) {
            }
            X.async && X.timeout > 0 && setTimeout(function () {
                s && !A && V("timeout")
            }, X.timeout);
            try {
                s.send(L === "POST" || L === "PUT" || L === "DELETE" ? X.data : null)
            } catch (N) {
                ai.handleError(X, s, null, N);
                Y()
            }
            X.async || V();
            return s
        }
    }, handleError: function (s, c, A, w) {
        if (s.error) {
            s.error.call(s.context || s, c, A, w)
        }
        if (s.global) {
            (s.context ? ai(s.context) : ai.event).trigger("ajaxError", [c, s, w])
        }
    }, active: 0, httpSuccess: function (s) {
        try {
            return !s.status && location.protocol === "file:" || s.status >= 200 && s.status < 300 || s.status === 304 || s.status === 1223 || s.status === 0
        } catch (c) {
        }
        return false
    }, httpNotModified: function (s, c) {
        var A = s.getResponseHeader("Last-Modified"), w = s.getResponseHeader("Etag");
        if (A) {
            ai.lastModified[c] = A
        }
        if (w) {
            ai.etag[c] = w
        }
        return s.status === 304 || s.status === 0
    }, httpData: function (s, c, F) {
        var w = s.getResponseHeader("content-type") || "", A = c === "xml" || !c && w.indexOf("xml") >= 0;
        s = A ? s.responseXML : s.responseText;
        A && s.documentElement.nodeName === "parsererror" && ai.error("parsererror");
        if (F && F.dataFilter) {
            s = F.dataFilter(s, c)
        }
        if (typeof s === "string") {
            if (c === "json" || !c && w.indexOf("json") >= 0) {
                s = ai.parseJSON(s)
            } else {
                if (c === "script" || !c && w.indexOf("javascript") >= 0) {
                    ai.globalEval(s)
                }
            }
        }
        return s
    }, param: function (s, c) {
        function G(J, K) {
            if (ai.isArray(K)) {
                ai.each(K, function (L, N) {
                    c || /\[\]$/.test(J) ? A(J, N) : G(J + "[" + (typeof N === "object" || ai.isArray(N) ? L : "") + "]", N)
                })
            } else {
                !c && K != null && typeof K === "object" ? ai.each(K, function (L, N) {
                    G(J + "[" + L + "]", N)
                }) : A(J, K)
            }
        }

        function A(J, K) {
            K = ai.isFunction(K) ? K() : K;
            F[F.length] = encodeURIComponent(J) + "=" + encodeURIComponent(K)
        }

        var F = [];
        if (c === I) {
            c = ai.ajaxSettings.traditional
        }
        if (ai.isArray(s) || s.jquery) {
            ai.each(s, function () {
                A(this.name, this.value)
            })
        } else {
            for (var w in s) {
                G(w, s[w])
            }
        }
        return F.join("&").replace(a5, "+")
    }});
    var bg = {}, bc = /toggle|show|hide/, aX = /^([+-]=)?([\d+-.]+)(.*)$/, aq, D = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ];
    ai.fn.extend({show: function (s, c) {
        if (s || s === 0) {
            return this.animate(aD("show", 3), s, c)
        } else {
            s = 0;
            for (c = this.length; s < c; s++) {
                var F = ai.data(this[s], "olddisplay");
                this[s].style.display = F || "";
                if (ai.css(this[s], "display") === "none") {
                    F = this[s].nodeName;
                    var w;
                    if (bg[F]) {
                        w = bg[F]
                    } else {
                        var A = ai("<" + F + " />").appendTo("body");
                        w = A.css("display");
                        if (w === "none") {
                            w = "block"
                        }
                        A.remove();
                        bg[F] = w
                    }
                    ai.data(this[s], "olddisplay", w)
                }
            }
            s = 0;
            for (c = this.length; s < c; s++) {
                this[s].style.display = ai.data(this[s], "olddisplay") || ""
            }
            return this
        }
    }, hide: function (s, c) {
        if (s || s === 0) {
            return this.animate(aD("hide", 3), s, c)
        } else {
            s = 0;
            for (c = this.length; s < c; s++) {
                var w = ai.data(this[s], "olddisplay");
                !w && w !== "none" && ai.data(this[s], "olddisplay", ai.css(this[s], "display"))
            }
            s = 0;
            for (c = this.length; s < c; s++) {
                this[s].style.display = "none"
            }
            return this
        }
    }, _toggle: ai.fn.toggle, toggle: function (s, c) {
        var w = typeof s === "boolean";
        if (ai.isFunction(s) && ai.isFunction(c)) {
            this._toggle.apply(this, arguments)
        } else {
            s == null || w ? this.each(function () {
                var A = w ? s : ai(this).is(":hidden");
                ai(this)[A ? "show" : "hide"]()
            }) : this.animate(aD("toggle", 3), s, c)
        }
        return this
    }, fadeTo: function (s, c, w) {
        return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: c}, s, w)
    }, animate: function (s, c, F, w) {
        var A = ai.speed(c, F, w);
        if (ai.isEmptyObject(s)) {
            return this.each(A.complete)
        }
        return this[A.queue === false ? "each" : "queue"](function () {
            var J = ai.extend({}, A), K, L = this.nodeType === 1 && ai(this).is(":hidden"), G = this;
            for (K in s) {
                var N = K.replace(ad, v);
                if (K !== N) {
                    s[N] = s[K];
                    delete s[K];
                    K = N
                }
                if (s[K] === "hide" && L || s[K] === "show" && !L) {
                    return J.complete.call(this)
                }
                if ((K === "height" || K === "width") && this.style) {
                    J.display = ai.css(this, "display");
                    J.overflow = this.style.overflow
                }
                if (ai.isArray(s[K])) {
                    (J.specialEasing = J.specialEasing || {})[K] = s[K][1];
                    s[K] = s[K][0]
                }
            }
            if (J.overflow != null) {
                this.style.overflow = "hidden"
            }
            J.curAnim = ai.extend({}, s);
            ai.each(s, function (P, O) {
                var T = new ai.fx(G, J, P);
                if (bc.test(O)) {
                    T[O === "toggle" ? L ? "show" : "hide" : O](s)
                } else {
                    var R = aX.exec(O), V = T.cur(true) || 0;
                    if (R) {
                        O = parseFloat(R[2]);
                        var Q = R[3] || "px";
                        if (Q !== "px") {
                            G.style[P] = (O || 1) + Q;
                            V = (O || 1) / T.cur(true) * V;
                            G.style[P] = V + Q
                        }
                        if (R[1]) {
                            O = (R[1] === "-=" ? -1 : 1) * O + V
                        }
                        T.custom(V, O, Q)
                    } else {
                        T.custom(V, O, "")
                    }
                }
            });
            return true
        })
    }, stop: function (s, c) {
        var w = ai.timers;
        s && this.queue([]);
        this.each(function () {
            for (var A = w.length - 1; A >= 0; A--) {
                if (w[A].elem === this) {
                    c && w[A](true);
                    w.splice(A, 1)
                }
            }
        });
        c || this.dequeue();
        return this
    }});
    ai.each({slideDown: aD("show", 1), slideUp: aD("hide", 1), slideToggle: aD("toggle", 1), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}}, function (s, c) {
        ai.fn[s] = function (A, w) {
            return this.animate(c, A, w)
        }
    });
    ai.extend({speed: function (s, c, A) {
        var w = s && typeof s === "object" ? s : {complete: A || !A && c || ai.isFunction(s) && s, duration: s, easing: A && c || c && !ai.isFunction(c) && c};
        w.duration = ai.fx.off ? 0 : typeof w.duration === "number" ? w.duration : ai.fx.speeds[w.duration] || ai.fx.speeds._default;
        w.old = w.complete;
        w.complete = function () {
            w.queue !== false && ai(this).dequeue();
            ai.isFunction(w.old) && w.old.call(this)
        };
        return w
    }, easing: {linear: function (s, c, A, w) {
        return A + w * s
    }, swing: function (s, c, A, w) {
        return(-Math.cos(s * Math.PI) / 2 + 0.5) * w + A
    }}, timers: [], fx: function (s, c, w) {
        this.options = c;
        this.elem = s;
        this.prop = w;
        if (!c.orig) {
            c.orig = {}
        }
    }});
    ai.fx.prototype = {update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this);
        (ai.fx.step[this.prop] || ai.fx.step._default)(this);
        if ((this.prop === "height" || this.prop === "width") && this.elem.style) {
            this.elem.style.display = "block"
        }
    }, cur: function (c) {
        if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
            return this.elem[this.prop]
        }
        return(c = parseFloat(ai.css(this.elem, this.prop, c))) && c > -10000 ? c : parseFloat(ai.curCSS(this.elem, this.prop)) || 0
    }, custom: function (s, c, F) {
        function w(G) {
            return A.step(G)
        }

        this.startTime = aF();
        this.start = s;
        this.end = c;
        this.unit = F || this.unit || "px";
        this.now = this.start;
        this.pos = this.state = 0;
        var A = this;
        w.elem = this.elem;
        if (w() && ai.timers.push(w) && !aq) {
            aq = setInterval(ai.fx.tick, 13)
        }
    }, show: function () {
        this.options.orig[this.prop] = ai.style(this.elem, this.prop);
        this.options.show = true;
        this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
        ai(this.elem).show()
    }, hide: function () {
        this.options.orig[this.prop] = ai.style(this.elem, this.prop);
        this.options.hide = true;
        this.custom(this.cur(), 0)
    }, step: function (s) {
        var c = aF(), F = true;
        if (s || c >= this.options.duration + this.startTime) {
            this.now = this.end;
            this.pos = this.state = 1;
            this.update();
            this.options.curAnim[this.prop] = true;
            for (var w in this.options.curAnim) {
                if (this.options.curAnim[w] !== true) {
                    F = false
                }
            }
            if (F) {
                if (this.options.display != null) {
                    this.elem.style.overflow = this.options.overflow;
                    s = ai.data(this.elem, "olddisplay");
                    this.elem.style.display = s ? s : this.options.display;
                    if (ai.css(this.elem, "display") === "none") {
                        this.elem.style.display = "block"
                    }
                }
                this.options.hide && ai(this.elem).hide();
                if (this.options.hide || this.options.show) {
                    for (var A in this.options.curAnim) {
                        ai.style(this.elem, A, this.options.orig[A])
                    }
                }
                this.options.complete.call(this.elem)
            }
            return false
        } else {
            A = c - this.startTime;
            this.state = A / this.options.duration;
            s = this.options.easing || (ai.easing.swing ? "swing" : "linear");
            this.pos = ai.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || s](this.state, A, 0, 1, this.options.duration);
            this.now = this.start + (this.end - this.start) * this.pos;
            this.update()
        }
        return true
    }};
    ai.extend(ai.fx, {tick: function () {
        for (var s = ai.timers, c = 0; c < s.length; c++) {
            s[c]() || s.splice(c--, 1)
        }
        s.length || ai.fx.stop()
    }, stop: function () {
        clearInterval(aq);
        aq = null
    }, speeds: {slow: 600, fast: 200, _default: 400}, step: {opacity: function (c) {
        ai.style(c.elem, "opacity", c.now)
    }, _default: function (c) {
        if (c.elem.style && c.elem.style[c.prop] != null) {
            c.elem.style[c.prop] = (c.prop === "width" || c.prop === "height" ? Math.max(0, c.now) : c.now) + c.unit
        } else {
            c.elem[c.prop] = c.now
        }
    }}});
    if (ai.expr && ai.expr.filters) {
        ai.expr.filters.animated = function (c) {
            return ai.grep(ai.timers,function (s) {
                return c === s.elem
            }).length
        }
    }
    ai.fn.offset = "getBoundingClientRect" in M.documentElement ? function (s) {
        var c = this[0];
        if (s) {
            return this.each(function (F) {
                ai.offset.setOffset(this, s, F)
            })
        }
        if (!c || !c.ownerDocument) {
            return null
        }
        if (c === c.ownerDocument.body) {
            return ai.offset.bodyOffset(c)
        }
        var A = c.getBoundingClientRect(), w = c.ownerDocument;
        c = w.body;
        w = w.documentElement;
        return{top: A.top + (self.pageYOffset || ai.support.boxModel && w.scrollTop || c.scrollTop) - (w.clientTop || c.clientTop || 0), left: A.left + (self.pageXOffset || ai.support.boxModel && w.scrollLeft || c.scrollLeft) - (w.clientLeft || c.clientLeft || 0)}
    } : function (N) {
        var L = this[0];
        if (N) {
            return this.each(function (O) {
                ai.offset.setOffset(this, N, O)
            })
        }
        if (!L || !L.ownerDocument) {
            return null
        }
        if (L === L.ownerDocument.body) {
            return ai.offset.bodyOffset(L)
        }
        ai.offset.initialize();
        var K = L.offsetParent, G = L, J = L.ownerDocument, A, F = J.documentElement, c = J.body;
        G = (J = J.defaultView) ? J.getComputedStyle(L, null) : L.currentStyle;
        for (var w = L.offsetTop, s = L.offsetLeft; (L = L.parentNode) && L !== c && L !== F;) {
            if (ai.offset.supportsFixedPosition && G.position === "fixed") {
                break
            }
            A = J ? J.getComputedStyle(L, null) : L.currentStyle;
            w -= L.scrollTop;
            s -= L.scrollLeft;
            if (L === K) {
                w += L.offsetTop;
                s += L.offsetLeft;
                if (ai.offset.doesNotAddBorder && !(ai.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(L.nodeName))) {
                    w += parseFloat(A.borderTopWidth) || 0;
                    s += parseFloat(A.borderLeftWidth) || 0
                }
                G = K;
                K = L.offsetParent
            }
            if (ai.offset.subtractsBorderForOverflowNotVisible && A.overflow !== "visible") {
                w += parseFloat(A.borderTopWidth) || 0;
                s += parseFloat(A.borderLeftWidth) || 0
            }
            G = A
        }
        if (G.position === "relative" || G.position === "static") {
            w += c.offsetTop;
            s += c.offsetLeft
        }
        if (ai.offset.supportsFixedPosition && G.position === "fixed") {
            w += Math.max(F.scrollTop, c.scrollTop);
            s += Math.max(F.scrollLeft, c.scrollLeft)
        }
        return{top: w, left: s}
    };
    ai.offset = {initialize: function () {
        var s = M.body, c = M.createElement("div"), G, A, F, w = parseFloat(ai.curCSS(s, "marginTop", true)) || 0;
        ai.extend(c.style, {position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden"});
        c.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
        s.insertBefore(c, s.firstChild);
        G = c.firstChild;
        A = G.firstChild;
        F = G.nextSibling.firstChild.firstChild;
        this.doesNotAddBorder = A.offsetTop !== 5;
        this.doesAddBorderForTableAndCells = F.offsetTop === 5;
        A.style.position = "fixed";
        A.style.top = "20px";
        this.supportsFixedPosition = A.offsetTop === 20 || A.offsetTop === 15;
        A.style.position = A.style.top = "";
        G.style.overflow = "hidden";
        G.style.position = "relative";
        this.subtractsBorderForOverflowNotVisible = A.offsetTop === -5;
        this.doesNotIncludeMarginInBodyOffset = s.offsetTop !== w;
        s.removeChild(c);
        ai.offset.initialize = ai.noop
    }, bodyOffset: function (s) {
        var c = s.offsetTop, w = s.offsetLeft;
        ai.offset.initialize();
        if (ai.offset.doesNotIncludeMarginInBodyOffset) {
            c += parseFloat(ai.curCSS(s, "marginTop", true)) || 0;
            w += parseFloat(ai.curCSS(s, "marginLeft", true)) || 0
        }
        return{top: c, left: w}
    }, setOffset: function (s, c, J) {
        if (/static/.test(ai.curCSS(s, "position"))) {
            s.style.position = "relative"
        }
        var F = ai(s), G = F.offset(), w = parseInt(ai.curCSS(s, "top", true), 10) || 0, A = parseInt(ai.curCSS(s, "left", true), 10) || 0;
        if (ai.isFunction(c)) {
            c = c.call(s, J, G)
        }
        J = {top: c.top - G.top + w, left: c.left - G.left + A};
        "using" in c ? c.using.call(s, J) : F.css(J)
    }};
    ai.fn.extend({position: function () {
        if (!this[0]) {
            return null
        }
        var s = this[0], c = this.offsetParent(), A = this.offset(), w = /^body|html$/i.test(c[0].nodeName) ? {top: 0, left: 0} : c.offset();
        A.top -= parseFloat(ai.curCSS(s, "marginTop", true)) || 0;
        A.left -= parseFloat(ai.curCSS(s, "marginLeft", true)) || 0;
        w.top += parseFloat(ai.curCSS(c[0], "borderTopWidth", true)) || 0;
        w.left += parseFloat(ai.curCSS(c[0], "borderLeftWidth", true)) || 0;
        return{top: A.top - w.top, left: A.left - w.left}
    }, offsetParent: function () {
        return this.map(function () {
            for (var c = this.offsetParent || M.body; c && !/^body|html$/i.test(c.nodeName) && ai.css(c, "position") === "static";) {
                c = c.offsetParent
            }
            return c
        })
    }});
    ai.each(["Left", "Top"], function (s, c) {
        var w = "scroll" + c;
        ai.fn[w] = function (F) {
            var G = this[0], A;
            if (!G) {
                return null
            }
            if (F !== I) {
                return this.each(function () {
                    if (A = o(this)) {
                        A.scrollTo(!s ? F : ai(A).scrollLeft(), s ? F : ai(A).scrollTop())
                    } else {
                        this[w] = F
                    }
                })
            } else {
                return(A = o(G)) ? "pageXOffset" in A ? A[s ? "pageYOffset" : "pageXOffset"] : ai.support.boxModel && A.document.documentElement[w] || A.document.body[w] : G[w]
            }
        }
    });
    ai.each(["Height", "Width"], function (s, c) {
        var w = c.toLowerCase();
        ai.fn["inner" + c] = function () {
            return this[0] ? ai.css(this[0], w, false, "padding") : null
        };
        ai.fn["outer" + c] = function (A) {
            return this[0] ? ai.css(this[0], w, false, A ? "margin" : "border") : null
        };
        ai.fn[w] = function (A) {
            var F = this[0];
            if (!F) {
                return A == null ? null : this
            }
            if (ai.isFunction(A)) {
                return this.each(function (G) {
                    var J = ai(this);
                    J[w](A.call(this, G, J[w]()))
                })
            }
            return"scrollTo" in F && F.document ? F.document.compatMode === "CSS1Compat" && F.document.documentElement["client" + c] || F.document.body["client" + c] : F.nodeType === 9 ? Math.max(F.documentElement["client" + c], F.body["scroll" + c], F.documentElement["scroll" + c], F.body["offset" + c], F.documentElement["offset" + c]) : A === I ? ai.css(F, w) : this.css(w, typeof A === "string" ? A : A + "px")
        }
    });
    aO.jQuery = aO.$ = ai
})(window);
/**
 * Version: _V1438376751_
 * Copyright 2011 Amazon.com, Inc., or its Affiliates.
 **/

(function e(b, g, d) {
    function c(m, j) {
        if (!g[m]) {
            if (!b[m]) {
                var i = typeof require == "function" && require;
                if (!j && i) {
                    return i(m, !0)
                }
                if (a) {
                    return a(m, !0)
                }
                var k = new Error("Cannot find module '" + m + "'");
                throw k.code = "MODULE_NOT_FOUND", k
            }
            var h = g[m] = {exports: {}};
            b[m][0].call(h.exports, function (l) {
                var o = b[m][1][l];
                return c(o ? o : l)
            }, h, h.exports, e, b, g, d)
        }
        return g[m].exports
    }

    var a = typeof require == "function" && require;
    for (var f = 0; f < d.length; f++) {
        c(d[f])
    }
    return c
})({1: [function (d, f, j) {
    if (!window.OffAmazonPayments || window.OffAmazonPayments.INITIALIZED !== true) {
        var b = b || {};
        b.jQuery = d("./jquery");
        d("./ArrayPolyfill")();
        b.Metrics = d("../widgets/MetricsCollector");
        var m = d("../widgets/Widgets_core");
        var i = d("./Constants");
        var o = d("./Utilities");
        var q = d("./HostedPayments");
        var n = d("./InlineWidgetError");
        var g = d("./WidgetDesign");
        var h = d("./InlineWidget");
        var l = d("./ConsentWidget");
        var s = d("./WalletWidget");
        var a = d("./AddressBook");
        var k = d("./ButtonCallbacks");
        b.Widgets = m.Widgets;
        b.Widgets.Design = g;
        b.Widgets.InlineWidget = h;
        b.Widgets.InlineWidget.Error = n;
        b.Widgets.Consent = l;
        b.Widgets.Wallet = s;
        b.Widgets.AddressBook = a;
        b.HostedPayments = q;
        b.Button = m.Button;
        b.Button.before_callbacks = k.before_callbacks;
        b.Button.after_callbacks = k.after_callbacks;
        b.Widgets.Utilities = o;
        b.Widgets.Browser = {isiOS: o.isiOS};
        b.Widgets.Utilities.isDynamicButtonUsed = m.isDynamicButtonUsed;
        b.Widgets.Utilities.getButtonPath = d("./ButtonHelper").getButtonPath;
        b.Widgets.Constants = i.constants;
        b.Widgets.WidgetTypes = i.others.WidgetTypes;
        b.Widgets.ButtonTypes = i.others.ButtonTypes;
        b.Widgets.CartOrigins = i.others.CartOrigins;
        b.Widgets.DisplayModes = i.others.DisplayModes;
        b.Widgets.PaymentInstrumentsDisplayOptions = i.others.PaymentInstrumentsDisplayOptions;
        b.Widgets.TaskQueue = d("./TaskQueue").TaskQueue;
        b.Widgets.Task = d("./TaskQueue").Task;
        b.Widgets.EventTypes = d("./EventTypes");
        b.Widgets.Mediator = d("./Mediator").Mediator;
        b.Widgets.mediator = d("./Mediator").instance;
        b.Widgets.taskQueue = d("./TaskQueue").getTaskQueue();
        b.Widgets.setTaskQueue = d("./TaskQueue").setTaskQueue;
        var p = d("./BridgeHelper");
        var r = d("./LPAMetricsHelper");
        b.Widgets.Utilities.setupBridgeIframe = p.setupBridgeIframe;
        b.Widgets.Utilities.onBridgeReady = p.onBridgeReady;
        b.Widgets.Utilities.publishMetricsForLPAButton = r.publishMetricsForLPAButton;
        b.Widgets.Utilities.publishMetricsForLPAButtonLanguage = r.publishMetricsForLPAButtonLanguage;
        b.Widgets.Widget = d("./Widget");
        b.Widgets.CheckoutWidget = d("./CheckoutWidget");
        b.DynamicButton = d("../widgets/DynamicButtons");
        var c = d("../widgets/ABTest");
        b.ABTest = c.ABTest;
        b.Widgets.Utilities.createQueryString = c.createQueryString;
        b.ZERO_TIME = d("./ZeroTime")();
        b.INITIALIZED = true;
        window.OffAmazonPayments = b
    }
}, {"../widgets/ABTest": 24, "../widgets/DynamicButtons": 25, "../widgets/MetricsCollector": 26, "../widgets/Widgets_core": 27, "./AddressBook": 2, "./ArrayPolyfill": 3, "./BridgeHelper": 4, "./ButtonCallbacks": 5, "./ButtonHelper": 6, "./CheckoutWidget": 7, "./ConsentWidget": 8, "./Constants": 9, "./EventTypes": 10, "./HostedPayments": 11, "./InlineWidget": 12, "./InlineWidgetError": 13, "./LPAMetricsHelper": 14, "./Mediator": 16, "./TaskQueue": 17, "./Utilities": 18, "./WalletWidget": 19, "./Widget": 20, "./WidgetDesign": 21, "./ZeroTime": 22, "./jquery": 23}], 2: [function (b, g, d) {
    var c = {Widgets: {}, jQuery: b("./jquery")};
    var l = b("./Utilities");
    var j = b("./Constants");
    var h = b("./LwaLogin");
    var k = b("./InlineWidgetError");
    var f = b("./InlineWidget");
    var i = b("./Mediator").instance;
    var a = b("./EventTypes");
    c.Widgets.AddressBook = function (m) {
        f.call(this, m);
        this.type = j.others.WidgetTypes.AddressBook;
        var n = this.design.width;
        var o = this.design.height;
        switch (this.getDisplayMode()) {
            case j.others.DisplayModes.read:
                if (this.design.checkWidth) {
                    if (n === undefined) {
                        k.RaiseMissingParameterError(this, l.buildParamNameValueMap("design.width", n))
                    } else {
                        this.design.width = l.verifySize(n, undefined, j.constants.ADDRESS_WIDGET.READ.min_width, j.constants.ADDRESS_WIDGET.READ.max_width);
                        k.RaiseOnErrorIfUndefined(this.design.width, j.constants.INVALID_PARAMETER_VALUE_MSG, l.buildParamNameValueMap("design.width", n), this)
                    }
                }
                if (this.design.checkHeight) {
                    if (o === undefined) {
                        k.RaiseMissingParameterError(this, l.buildParamNameValueMap("design.height", o))
                    } else {
                        this.design.height = l.verifySize(o, undefined, j.constants.ADDRESS_WIDGET.READ.min_height, j.constants.ADDRESS_WIDGET.READ.max_height);
                        k.RaiseOnErrorIfUndefined(this.design.height, j.constants.INVALID_PARAMETER_VALUE_MSG, l.buildParamNameValueMap("design.height", o), this)
                    }
                }
                break;
            case j.others.DisplayModes.edit:
                j.constants.ADDRESS_WIDGET_PRESENT = true;
                if (this.design.checkWidth) {
                    if (n === undefined) {
                        k.RaiseMissingParameterError(this, l.buildParamNameValueMap("design.width", n))
                    } else {
                        this.design.width = l.verifySize(n, undefined, j.constants.ADDRESS_WIDGET.EDIT.min_width, j.constants.ADDRESS_WIDGET.EDIT.max_width);
                        k.RaiseOnErrorIfUndefined(this.design.width, j.constants.INVALID_PARAMETER_VALUE_MSG, l.buildParamNameValueMap("design.width", n), this)
                    }
                }
                if (this.design.checkHeight) {
                    if (o === undefined) {
                        k.RaiseMissingParameterError(this, l.buildParamNameValueMap("design.height", o))
                    } else {
                        this.design.height = l.verifySize(o, undefined, j.constants.ADDRESS_WIDGET.EDIT.min_height, j.constants.ADDRESS_WIDGET.EDIT.max_height);
                        k.RaiseOnErrorIfUndefined(this.design.height, j.constants.INVALID_PARAMETER_VALUE_MSG, l.buildParamNameValueMap("design.height", o), this)
                    }
                }
                break
        }
        this.onAddressSelect = m.onAddressSelect;
        this.shippingRestrictions = m.shippingRestrictions;
        this.getDestinationName = function () {
            return m.destinationName
        };
        c.jQuery(this).bind(a.ON_ADDRESS_SELECT_PRE, this, this.onAddrSelectPreHandler);
        c.jQuery(this).bind(a.ON_ADDRESS_SELECT, this, this.onAddrSelectHandler)
    };
    c.Widgets.AddressBook.prototype = l.createSubclass(f.prototype);
    c.Widgets.AddressBook.prototype.constructor = c.Widgets.AddressBook;
    c.Widgets.AddressBook.prototype.onAddrSelectPreHandler = function (p) {
        var m = p.data;
        var n = m.eventValue;
        if (this.getID() === n) {
            var q = i.getWalletWidgets();
            if (typeof q !== "undefined") {
                for (var o = 0; o < q.length; o++) {
                    q[o].hideEventHandler()
                }
            }
        }
    };
    c.Widgets.AddressBook.prototype.onAddrSelectHandler = function (p) {
        var m = p.data;
        var n = m.eventValue;
        this.rendered = true;
        if (this.getID() === n) {
            if (this.onAddressSelect !== undefined) {
                this.onAddressSelect(m)
            }
            if (this.getWidgetCount() > 1) {
                clearTimeout(j.constants.TIMEOUT_ID)
            }
            var q = i.getWalletWidgets();
            if (typeof q !== "undefined") {
                for (var o = 0; o < q.length; o++) {
                    q[o].refreshEventHandler()
                }
            }
        }
    };
    c.Widgets.AddressBook.prototype.renderElements = function () {
        if (this.hasError !== undefined && this.hasError) {
            c.jQuery("#" + this.locationID).empty();
            return false
        }
        var m = this;
        l.setLwaSandboxMode();
        if (typeof h() !== "undefined" && typeof h().Login !== "undefined" && typeof h().Login.getClientId !== "undefined" && typeof h().Login.getClientId() !== "undefined") {
            l.getAccessToken(m, m.renderAddressBook)
        } else {
            m.renderAddressBook(m, "")
        }
    };
    c.Widgets.AddressBook.prototype.renderAddressBook = function (r, t) {
        var m = r.getID() + "IFrame";
        var q = l.createIFrameString(m, r.design.width, r.design.height);
        var n = r.getID() + "Form";
        var p = j.constants.WIDGET_ENDPOINT + j.constants.INLINE_WIDGETS_URI;
        var s = {action: j.constants.ADDRESS_WIDGET_ACTION, referringURL: window.top.location, cartOwnerId: r.getSellerId(), marketplaceSellerId: r.getMarketplaceSellerId(), access_token: t, agreementType: r.agreementType, displayMode: r.getDisplayMode(), widgetId: r.getID(), widgetWidth: r.design.width, widgetHeight: r.design.height, widgetDesignMode: r.design.designMode, browserWindowHeight: r.getBrowserWindowHeight(), widgetPadding: r.design.padding, clientId: l.getClientId()};
        if (typeof r.getContractId() !== "undefined" && r.getContractId() !== null) {
            s.contractId = r.getContractId()
        } else {
            if (typeof r.onOrderReferenceCreate === "function") {
                s.createContract = true
            } else {
                if (typeof r.onBillingAgreementCreate === "function") {
                    s.createContract = true
                } else {
                    if (typeof r.onReady === "function") {
                        s.createContract = true
                    }
                }
            }
        }
        if (r.shippingRestrictions !== undefined) {
            var u = r.encodeShippingRestrictions();
            s.shippingRestrictions = u
        }
        if (r.getDestinationName() !== undefined) {
            s.destinationName = r.getDestinationName()
        }
        k.isMissingParameter("sellerId", r.getSellerId(), r);
        if (r.error && r.error.errorType) {
            s.clientErrorType = r.error.errorType;
            s.clientErrorElementName = r.error.errorElementName;
            s.clientErrorElementValue = r.error.errorElementValue;
            s.clientErrorMessage = r.error.errorMessage
        }
        var o = l.createFormString(n, p, m, s);
        c.jQuery("#" + n).remove();
        l.createWidgetContainer(r.locationID, r.getID(), r.design.width, r.design.height, q, r.type);
        l.createWidgetForm(r.locationID, r.getID(), r.design.width, r.design.height, o, n);
        if (j.constants.BRIDGE_LOAD_COMPLETE) {
            c.jQuery("#" + n).submit()
        }
    };
    g.exports = c.Widgets.AddressBook
}, {"./Constants": 9, "./EventTypes": 10, "./InlineWidget": 12, "./InlineWidgetError": 13, "./LwaLogin": 15, "./Mediator": 16, "./Utilities": 18, "./jquery": 23}], 3: [function (b, a, c) {
    a.exports = function () {
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (f, g) {
                if (this === undefined || this === null) {
                    return -1
                }
                var d = this.length >>> 0;
                g = +g || 0;
                if (Math.abs(g) === Infinity) {
                    g = 0
                }
                if (g < 0) {
                    g += d;
                    if (g < 0) {
                        g = 0
                    }
                }
                for (; g < d; g++) {
                    if (this[g] === f) {
                        return g
                    }
                }
                return -1
            }
        }
    }
}, {}], 4: [function (c, g, f) {
    var d = {jQuery: c("./jquery"), Widgets: {Utilities: {}}};
    var i = c("../widgets/MetricsCollector");
    var j = c("./Constants").constants;
    var a = c("./EventTypes");
    var k = c("../core/Utilities");
    var h = c("../core/Mediator").instance;

    function b() {
        i.Collector.time("iframe-bridge");
        var o = "#" + j.BRIDGE_IFRAME_NAME;
        var n = d.jQuery(o);
        if (typeof(n) === "undefined" || n.length === 0) {
            var q = j.WIDGET_ENDPOINT + j.BRIDGE_WIDGET_URI;
            if (k.readCookie("ap_static_iframe_bridge_source") === "media-central") {
                q = j.WIDGET_ENDPOINT + "/static/" + j.COUNTRY_CODE_TO_LANGUAGE_COUNTRY_MAP[j.COUNTRY_CODE] + "/" + j.CONTEXT + "/bridge"
            }
            var m = k.createIframeStringWithSrc(j.BRIDGE_IFRAME_NAME, q, "1px", "1px");
            d.jQuery(document.body).append(m);
            d.jQuery(o).css("display", "none");
            var p = document.getElementById(j.BRIDGE_IFRAME_NAME);
            p.onload = l
        }
    }

    function l() {
        i.Collector.timeEnd("iframe-bridge");
        j.BRIDGE_LOAD_COMPLETE = true;
        for (var n in h.registry) {
            if (h.registry.hasOwnProperty(n)) {
                var m = h.registry[n];
                d.jQuery(m).trigger(a.DOCUMENT_READY, m)
            }
        }
    }

    g.exports = {setupBridgeIframe: b, onBridgeReady: l}
}, {"../core/Mediator": 16, "../core/Utilities": 18, "../widgets/MetricsCollector": 26, "./Constants": 9, "./EventTypes": 10, "./jquery": 23}], 5: [function (b, a, c) {
    var d = {Button: {}};
    d.Button.after_callbacks = [];
    d.Button.before_callbacks = [];
    a.exports = {before_callbacks: d.Button.before_callbacks, after_callbacks: d.Button.after_callbacks}
}, {}], 6: [function (g, f, h) {
    var b = g("./Utilities");
    var d = g("./Constants");
    var c = g("../widgets/ABTest").ABTest;

    function a(p, m) {
        var i = "";
        var k = "";
        var j = "";
        var l = "";
        if (p !== undefined) {
            i = b.getValueBasedOnInput(d.constants.BUTTON_COLOR_SET, p.color, d.constants.BUTTON_DEFAULT_COLOR);
            k = b.getValueBasedOnInput(d.constants.BUTTON_SIZE_SET, p.size, d.constants.BUTTON_DEFAULT_SIZE);
            j = b.getValueBasedOnInput(d.constants.BUTTON_BACKGROUND_SET, p.background, d.constants.BUTTON_DEFAULT_BACKGROUND)
        } else {
            i = d.constants.BUTTON_DEFAULT_COLOR;
            k = d.constants.BUTTON_DEFAULT_SIZE;
            j = d.constants.BUTTON_DEFAULT_BACKGROUND
        }
        if (c.Utilities.isSellerInABTest(b.getCartOwnerId(), c.Tests.Default)) {
            l = c.Utilities.getButtonPath(i, k)
        } else {
            var o = d.constants.BUTTON_BASE_PATH;
            var n = "";
            if (m) {
                n = "donation/"
            } else {
                n = "pwa/"
            }
            n += i + "/" + k + "/" + j + "/";
            l = o + n
        }
        return l
    }

    f.exports = {getButtonPath: a}
}, {"../widgets/ABTest": 24, "./Constants": 9, "./Utilities": 18}], 7: [function (b, g, d) {
    var c = {jQuery: b("./jquery"), Widgets: {}};
    var a = b("./ButtonHelper");
    var h = b("./Constants");
    var i = b("./Utilities");
    var f = b("../widgets/ABTest").ABTest;
    var k = b("./Widget");
    var j = b("./ZeroTime");
    c.Metrics = b("../widgets/MetricsCollector");
    c.Widgets.ButtonSettings = function (l) {
        if (typeof(l) !== "undefined") {
            this.size = l.size;
            this.color = l.color;
            this.background = l.background
        }
    };
    c.Widgets.CheckoutWidget = function (l) {
        k.call(this, l);
        if (typeof(l.sellerId) !== "undefined" && l.sellerId !== null) {
            h.constants.CartOwnerId = l.sellerId
        }
        this.buttonSettings = new c.Widgets.ButtonSettings(l.buttonSettings)
    };
    c.Widgets.CheckoutWidget.prototype = i.createSubclass(k.prototype);
    c.Widgets.CheckoutWidget.prototype.constructor = c.Widgets.CheckoutWidget;
    c.Widgets.CheckoutWidget.prototype.onErrorCallbackHandler = function (n) {
        var l = n.data;
        var m = l.eventValue;
        if (this.getID() === m) {
            if (typeof(this.onErrorCallback) === "function") {
                this.onErrorCallback(l.error)
            }
        } else {
            delete l.eventValue;
            delete l.error
        }
    };
    c.Widgets.CheckoutWidget.prototype.getPopupWindowName = function () {
        return h.constants.POPUP_WIN_NAME + this.getSellerId()
    };
    c.Widgets.CheckoutWidget.prototype.documentReadyEventHandler = function (m, l) {
        k.prototype.documentReadyEventHandler.call(this, m, l)
    };
    c.Widgets.CheckoutWidget.prototype.bindClickHandler = function (l) {
        var r = this.getPreExistingButtons();
        if (r !== undefined && r.length > 0) {
            for (var o = 0; o < r.length; o++) {
                c.jQuery(r[o]).bind("click", l, l.onClickHandler)
            }
            var q = (new Date()).getTime();
            var n = l.getSellerId();
            var p = new c.Metrics.Collector(n);
            p.addButtonInfoData(c.Metrics.ProductTypes.APA, c.Metrics.PageActions.BUTTON_RENDER, l.buttonType, n);
            p.addCounter("apa-buttonrender");
            var m = j() + this.BUTTON_START_TIME;
            p.addTiming("button-clickable", m, q + c.WIDGET_CORE_EXECUTION_END_TIME);
            p.addTiming("button-clickable-A", m, this.BUTTON_RUNNING_TIME_A + c.WIDGET_CORE_EXECUTION_END_TIME);
            p.addTiming("button-clickable-B", m, this.BUTTON_RUNNING_TIME_B + c.WIDGET_CORE_EXECUTION_END_TIME);
            p.addTiming("button-clickable-C", m, this.BUTTON_RUNNING_TIME_C + c.WIDGET_CORE_EXECUTION_END_TIME);
            p.addTiming("button-clickable-D", m, this.BUTTON_RUNNING_TIME_D + c.WIDGET_CORE_EXECUTION_END_TIME);
            p.addTiming("button-clickable-js-load", j(), q);
            p.publish()
        }
        this.collector.publish()
    };
    c.Widgets.CheckoutWidget.prototype.onClickHandler = function (n) {
        n.data.setupFormTargetArea(n);
        if (typeof(n.data.onOpen) === "undefined" || !n.data.onOpen) {
            try {
                n.data.popupWindow.addEventListener("load", function () {
                    if (i.isiOS()) {
                        n.data.submit()
                    } else {
                        setTimeout(function () {
                            n.data.submit()
                        }, h.constants.TIMER_INTERVAL)
                    }
                });
                n.data.popupWindow.document.close()
            } catch (m) {
                if (window.ueLogError) {
                    var l = {logLevel: "ERROR", attribution: "Widget_core.js", message: "Error caught in addEventListener during onOpen invocation"};
                    window.ueLogError(m, l)
                }
                n.data.submit()
            }
        } else {
            n.data.onOpen(n.data)
        }
    };
    c.Widgets.CheckoutWidget.prototype.setupFormTargetArea = function (l) {
        var m = h.constants.POPUP_WIN_NAME + l.data.getSellerId();
        l.data.popupWindow = i.openPopUp(m);
        l.data.popupWindowName = m
    };
    c.Widgets.CheckoutWidget.prototype.renderElements = function () {
        if (this.hasError !== undefined && this.hasError) {
            c.jQuery("#" + this.locationID).remove();
            return false
        }
        this.BUTTON_RUNNING_TIME_B = (new Date()).getTime();
        var q = this.getPreExistingButtons();
        if (q !== undefined && q.length > 0) {
            this.collector.addCounter("image-present-in-div");
            this.BUTTON_RUNNING_TIME_C = (new Date()).getTime();
            if (f.Utilities.isSellerInABTest(i.getCartOwnerId(), f.Tests.Default)) {
                f.Utilities.bindButtonOnloadActions(q[0])
            }
            return
        }
        this.collector.addCounter("image-added-by-js");
        this.BUTTON_RUNNING_TIME_C = (new Date()).getTime();
        var o = this.buttonSettings;
        var l = this.getID();
        var n = a.getButtonPath(o, this.buttonType === h.others.ButtonTypes.DONATION);
        if (!(f.Utilities.isSellerInABTest(i.getCartOwnerId(), f.Tests.Default))) {
            n += h.constants.BUTTON_PWA_BUTTONNAME
        }
        var m = '<img style="cursor: pointer;" class="amazon-payment-button-loaded" uri="' + n + '" src="' + n + '" id="' + l + '"/>';
        c.jQuery("#" + this.locationID).append(m);
        if (f.Utilities.isSellerInABTest(i.getCartOwnerId(), f.Tests.Default)) {
            var p = this.getPreExistingButtons();
            f.Utilities.bindButtonOnloadActions(p[0])
        }
    };
    c.Widgets.CheckoutWidget.prototype.getPreExistingButtons = function () {
        var o = h.constants.BUTTON_ENDPOINT + h.constants.BUTTON_URI;
        var l = c.jQuery("#" + this.locationID + " img.amazon-payment-button-loaded");
        var n = c.jQuery("#" + this.locationID + " img").filter(function (q, r) {
            var p = c.jQuery(r).attr("src");
            if (typeof(p) !== "undefined" && (p.indexOf(o) === 0 || p.indexOf(h.constants.BUTTON_BASE_PATH) === 0)) {
                return true
            }
        });
        var m = c.jQuery(n.toArray().concat(l.toArray()));
        return m
    };
    g.exports = c.Widgets.CheckoutWidget
}, {"../widgets/ABTest": 24, "../widgets/MetricsCollector": 26, "./ButtonHelper": 6, "./Constants": 9, "./Utilities": 18, "./Widget": 20, "./ZeroTime": 22, "./jquery": 23}], 8: [function (b, g, d) {
    var c = {Widgets: {}, jQuery: b("./jquery")};
    var j = b("./Constants");
    var l = b("./Utilities");
    var k = b("./InlineWidgetError");
    var f = b("./InlineWidget");
    var a = b("./EventTypes");
    var i = b("./Mediator").instance;
    var h = b("./LwaLogin");
    c.Widgets.Consent = function (m) {
        f.call(this, m);
        this.type = j.others.WidgetTypes.Consent;
        var o;
        this.getConsentValue = function () {
            return o
        };
        this.setConsentValue = function (q) {
            o = q
        };
        this.getConsentStatus = this.getConsentValue;
        this.onReady = m.onReady;
        this.onConsent = m.onConsent;
        var n = this.design.width;
        var p = this.design.height;
        i.register(this);
        c.jQuery(this).bind(a.ON_CONSENT_WIDGET_READY, this, this.consentWidgetReadyEventHandler);
        c.jQuery(this).bind(a.ON_CONSENT_STATUS_CHANGED, this, this.consentWidgetStatusChangeEventHandler);
        if (this.design.checkWidth) {
            if (n === undefined) {
                k.RaiseMissingParameterError(this, l.buildParamNameValueMap("design.width", n))
            } else {
                this.design.width = l.verifySize(n, undefined, j.constants.CONSENT_WIDGET.EDIT.min_width, j.constants.CONSENT_WIDGET.EDIT.max_width);
                k.RaiseOnErrorIfUndefined(this.design.width, j.constants.INVALID_PARAMETER_VALUE_MSG, l.buildParamNameValueMap("design.width", n), this)
            }
        }
        if (this.design.checkHeight) {
            if (p === undefined) {
                k.RaiseMissingParameterError(this, l.buildParamNameValueMap("design.height", p))
            } else {
                this.design.height = l.verifySize(p, undefined, j.constants.CONSENT_WIDGET.EDIT.min_height, j.constants.CONSENT_WIDGET.EDIT.max_height);
                k.RaiseOnErrorIfUndefined(this.design.height, j.constants.INVALID_PARAMETER_VALUE_MSG, l.buildParamNameValueMap("design.height", p), this)
            }
        }
    };
    c.Widgets.Consent.prototype = l.createSubclass(f.prototype);
    c.Widgets.Consent.prototype.constructor = c.Widgets.Consent;
    c.Widgets.Consent.prototype.consentWidgetReadyEventHandler = function (o) {
        var m = o.data;
        var n = m.eventValue;
        this.setConsentValue(n);
        if (this.onReady !== undefined) {
            this.onReady(m)
        }
    };
    c.Widgets.Consent.prototype.consentWidgetStatusChangeEventHandler = function (o) {
        var m = o.data;
        var n = m.eventValue;
        this.setConsentValue(n);
        if (this.onConsent !== undefined) {
            this.onConsent(m)
        }
    };
    c.Widgets.Consent.prototype.renderElements = function () {
        if (this.hasError !== undefined && this.hasError) {
            c.jQuery("#" + this.locationID).empty();
            return false
        }
        var m = this;
        if (typeof h() !== "undefined" && typeof h().Login !== "undefined" && typeof h().Login.getClientId !== "undefined" && typeof h().Login.getClientId() !== "undefined") {
            l.getAccessToken(m, m.renderConsent)
        } else {
            m.renderConsent(m, "")
        }
    };
    c.Widgets.Consent.prototype.renderConsent = function (s, n) {
        var r = s.getID() + "IFrame";
        var p = l.createIFrameString(r, s.design.width, s.design.height);
        var t = s.getID() + "Form";
        var m = j.constants.WIDGET_ENDPOINT + j.constants.INLINE_WIDGETS_URI;
        var o = {action: "consentWidget", referringURL: window.top.location, cartOwnerId: s.getSellerId(), contractId: s.getContractId(), access_token: n, displayMode: j.others.DisplayModes.edit, widgetId: s.getID(), widgetWidth: s.design.width, widgetHeight: s.design.height, widgetDesignMode: s.design.designMode, widgetPadding: s.design.padding, browserWindowHeight: s.getBrowserWindowHeight()};
        if (s.error && s.error.errorType) {
            o.clientErrorType = s.error.errorType;
            o.clientErrorElementName = s.error.errorElementName;
            o.clientErrorElementValue = s.error.errorElementValue;
            o.clientErrorMessage = s.error.errorMessage
        }
        var q = l.createFormString(t, m, r, o);
        c.jQuery("#" + t).remove();
        l.createWidgetContainer(s.locationID, s.getID(), s.design.width, s.design.height, p, s.type);
        l.createWidgetForm(s.locationID, s.getID(), s.design.width, s.design.height, q, t);
        if (j.constants.BRIDGE_LOAD_COMPLETE) {
            c.jQuery("#" + t).submit()
        }
    };
    g.exports = c.Widgets.Consent
}, {"./Constants": 9, "./EventTypes": 10, "./InlineWidget": 12, "./InlineWidgetError": 13, "./LwaLogin": 15, "./Mediator": 16, "./Utilities": 18, "./jquery": 23}], 9: [function (b, a, c) {
    var d = {Widgets: {}};
    d.Widgets.Mobile = (function () {
        var g = navigator.userAgent.toLowerCase();
        var f = new Array("iphone", "ipod", "series60", "symbian", "android", "windows ce", "blackberry", "palm");
        return{isMobile: function () {
            for (var j = 0; j < f.length; j++) {
                var h = f[j];
                if (g.search(h) > -1) {
                    return true
                }
            }
            return false
        }}
    })();
    d.Widgets.Constants = {};
    d.Widgets.Constants.POPUP_WIN_WIDTH = 520;
    d.Widgets.Constants.POPUP_WIN_HEIGHT = 475;
    d.Widgets.Constants.POPUP_WIN_NAME = "OffAmazonPaymentsPopupWindow";
    d.Widgets.Constants.AP_LOGO_IMG = "https://images-na.ssl-images-amazon.com/images/G/01/cba/images/logos/logo_amazonpayments_overlay._V192259298_.gif";
    d.Widgets.Constants.AP_CONDITIONS_LINK = "https://payments.amazon.com/sdui/sdui/help?nodeId=6019";
    d.Widgets.Constants.AP_CONDITIONS_STRING = "Conditions of Use";
    d.Widgets.Constants.AP_PRIVACY_LINK = "https://payments.amazon.com/sdui/sdui/help?nodeId=6020";
    d.Widgets.Constants.AP_PRIVACY_STRING = "Privacy Notice";
    d.Widgets.Constants.LOADING_IMAGE_GIF = "https://images-na.ssl-images-amazon.com/images/G/01/ep/loading-large.gif";
    if (d.Widgets.Mobile.isMobile()) {
        d.Widgets.Constants.LOADING_IMAGE_GIF = "https://images-na.ssl-images-amazon.com/images/G/01/ep/loading-large.gif"
    }
    d.Widgets.Constants.POPUP_LOADING_HTML = "         <style>              a {color:#004B91;}             #headerSlots {padding-top: 0; height: 50px;}             #pageLoading #mainContentArea {height: 375px;overflow-y: auto;}              #imgLoading {text-align: center; padding-top: 120px;}             #footerSlots {width: 100%;height: 50px;position: fixed;bottom: 0px;left: 0px;}             #footerSlots #amazonPaymentsLogo {background: url(" + d.Widgets.Constants.AP_LOGO_IMG + ") no-repeat center top;margin-top: 4px;height: 17px;text-indent: -9999px;}             #footerSlots .AtoZ {font-size: 10px; padding-top: 1px;}             #footerSlots .ap_privacy_info {font-size: 9px;}             div#bottom-6 {left:auto;top:auto;text-align: center;border-top:1px solid #B3B3B3;}             .ap_privacy_info {font-family:Verdana;font-size:10px;font-weight:normal;}         </style>          <div id='pageLoading'>             <div id='wrapper'>                  <div id='headerSlots'></div>                  <div id='mainContentArea'>                      <div id='centerSlots'>                          <div id='center-1'>                              <div id='imgLoading'>                                  <img id='loadingImg' src='" + d.Widgets.Constants.LOADING_IMAGE_GIF + "'>                             </div>                          </div>                      </div>                  </div>                  <div id='footerSlots'>                      <div id='bottom-6'>                         <div class='amazonPaymentLogo' id='amazonPaymentsLogo'></div>                      </div>                 </div>             </div>         </div>";
    d.Widgets.Constants.LWA_ENDPOINT = "www.amazon.com";
    d.Widgets.Constants.WIDGET_ENDPOINT = "https://payments.amazon.com";
    d.Widgets.Constants.BUTTON_ENDPOINT = "https://payments.amazon.com";
    d.Widgets.Constants.WALLET_WIDGET_ACTION = "spaWalletWidget";
    d.Widgets.Constants.ADDRESS_WIDGET_ACTION = "spaAddressWidget";
    d.Widgets.Constants.BUTTON_COUNTRY_CODE = "US";
    d.Widgets.Constants.BUTTON_URI = "/gp/widgets/button";
    d.Widgets.Constants.INLINE_WIDGETS_URI = "/gp/widgets/widgets";
    d.Widgets.Constants.BRIDGE_WIDGET_URI = "/gp/widgets/widgets?action=bridge";
    d.Widgets.Constants.CartOwnerId = "";
    d.Widgets.Constants.CSM_URI = "/gp/apa/csm/jsonp?";
    d.Widgets.Constants.HOSTED_PAYMENTS_URI = "/gp/widgets/hosted/init";
    d.Widgets.Constants.BRIDGE_IFRAME_NAME = "OffAmazonPaymentsBridgeIframe";
    d.Widgets.Constants.CONTRACT_FRAME_ID = "OffAmazonPaymentsContractFrame";
    d.Widgets.Constants.CONTRACT_FORM_ID = "OffAmazonPaymentsContractForm";
    d.Widgets.Constants.WIDGETID_PREFIX = "OffAmazonPaymentsWidgets";
    d.Widgets.Constants.WIDGETID_PARAM_NAME = ";widgetId=";
    d.Widgets.Constants.COUNTRY_CODE_TO_LANGUAGE_COUNTRY_MAP = {US: "us", GB: "uk", DE: "de", IN: "uk", JP: "jp"};
    d.Widgets.Constants.BUTTON_BASE_PATH_PREFIX = "https://images-na.ssl-images-amazon.com/images/G/01/EP/offAmazonPayments/";
    d.Widgets.Constants.BUTTON_BASE_PATH_SUFFIX = "/live/prod/image/";
    d.Widgets.Constants.BUTTON_BASE_PATH = d.Widgets.Constants.BUTTON_BASE_PATH_PREFIX + d.Widgets.Constants.COUNTRY_CODE_TO_LANGUAGE_COUNTRY_MAP.US + d.Widgets.Constants.BUTTON_BASE_PATH_SUFFIX;
    d.Widgets.Constants.BUTTON_COLOR_SET = ["orange", "tan"];
    d.Widgets.Constants.BUTTON_SIZE_SET = ["medium", "large", "x-large"];
    d.Widgets.Constants.BUTTON_BACKGROUND_SET = ["dark", "white"];
    d.Widgets.Constants.BUTTON_LWA_COLOR_SET = ["darkgray", "lightgray", "gold"];
    d.Widgets.Constants.BUTTON_LWA_SIZE_SET = ["small", "medium", "large", "x-large"];
    d.Widgets.Constants.BUTTON_LWA_TEXT_SET = ["pwa", "lwa", "editorupdate", "pay", "a", "login", "hostedpayment", "donate", "dwa"];
    d.Widgets.Constants.BUTTON_LWA_TEXT_IMAGE_SET = ["PwA.png", "LwA.png", "EditOrUpdate.png", "Pay.png", "A.png", "Login.png", "PwA.png", "Donate.png", "DwA.png"];
    d.Widgets.Constants.BUTTON_DEFAULT_COLOR = "orange";
    d.Widgets.Constants.BUTTON_DEFAULT_SIZE = "medium";
    d.Widgets.Constants.BUTTON_DEFAULT_BACKGROUND = "dark";
    d.Widgets.Constants.BUTTON_PWA_BUTTONNAME = "button.png";
    d.Widgets.Constants.BUTTON_DEFAULT_COLOR_LWA = "gold";
    d.Widgets.Constants.BUTTON_DEFAULT_SIZE_LWA = "medium";
    d.Widgets.Constants.BUTTON_DEFAULT_TYPE = "LwA";
    d.Widgets.Constants.BUTTON_DEFAULT_TEXT = d.Widgets.Constants.BUTTON_DEFAULT_TYPE + ".png";
    d.Widgets.Constants.SVG_NAMESPACE = "http://www.w3.org/2000/svg";
    d.Widgets.Constants.COUNTRY_CODE = "US";
    d.Widgets.Constants.BUTTON_LWA_MULTILANGUAGE_SUPPORTED_TEXT_IMAGE_MAP = {pwa: "PwA_25102014.png"};
    d.Widgets.Constants.BUTTON_LWA_LANGUAGE_COUNTRY_MAP = {"en-us": "us", "en-gb": "uk", "de-de": "de", "fr-fr": "fr", "it-it": "it", "es-es": "es", "ja-jp": "jp"};
    d.Widgets.Constants.BUTTON_LWA_LANGUAGE_TO_REALM_MAP = {"en-us": "en_GB", "en-gb": "en_GB", en: "en_GB", "fr-fr": "fr_FR", fr: "fr_FR", "it-it": "it_IT", it: "it_IT", "es-es": "es_ES", es: "es_ES", "de-de": "de_DE", de: "de_DE", "ja-jp": "ja_JP", ja: "ja_JP"};
    d.Widgets.Constants.COUNTRY_CODE_TO_REALM_MAP = {us: "en_US", gb: "en_GB", de: "de_DE", jp: "ja_JP"};
    d.Widgets.Constants.REALM_TO_LANGUAGE_COUNTRY_MAP = {en_US: "US", en_GB: "UK", de_DE: "DE", ja_JP: "JP", fr_FR: "FR", it_IT: "IT", es_ES: "ES"};
    d.Widgets.Constants.REALM_TO_COUNTRY_CODE_MAP = {en_US: "US", en_GB: "GB", de_DE: "DE", ja_JP: "JP", fr_FR: "FR", it_IT: "IT", es_ES: "ES"};
    d.Widgets.Constants.FALLBACK_MULTILANGUAGE_BUYER_LANGUAGE_PREFERENCE = {US: "en_US", GB: "en_GB", DE: "en_GB"};
    d.Widgets.Constants.MULTILANGUAGE_SELLER_BLACKLIST = "";
    d.Widgets.Constants.MULTILANGUAGE_MVP_SELLER = "a1qyf8m5pffhe";
    d.Widgets.Constants.MULTILANGUAGE_ALLOWED_COUNTRY_CODES = ["GB", "DE"];
    d.Widgets.Constants.MULTILANGUAGE_ALLOWED_SELLER_LANGUAGE_CODES = ["en-gb", "de-de", "fr-fr", "it-it", "es-es"];
    d.Widgets.Constants.MULTILANGUAGE_MVP_ALLOWED_BUTTON_TYPES = ["pwa"];
    d.Widgets.Constants.MULTILANGUAGE_DEFAULT_BUTTON_IMAGE_SUB_PATH = "lwa/gold/default/";
    d.Widgets.Constants.TIMER_INTERVAL = 100;
    d.Widgets.Constants.IS_SANDBOX = false;
    d.Widgets.Constants.CONTEXT = d.Widgets.Constants.IS_SANDBOX ? "sandbox" : "live";
    d.Widgets.Constants.BRIDGE_LOAD_COMPLETE = false;
    d.Widgets.Constants.ADDRESS_WIDGET_PRESENT = false;
    d.Widgets.Constants.TIMEOUT_ID = null;
    d.Widgets.Constants.ADDRESS_WIDGET = {READ: {min_width: 290, max_width: 600, default_width: 400, min_height: 150, max_height: 400, default_height: 185}, EDIT: {min_width: 280, max_width: 600, default_width: 400, min_height: 228, max_height: 400, default_height: 228}};
    d.Widgets.Constants.WALLET_WIDGET = {READ: {min_width: 290, max_width: 600, default_width: 400, min_height: 150, max_height: 400, default_height: 185}, EDIT: {min_width: 280, max_width: 600, default_width: 400, min_height: 228, max_height: 400, default_height: 228}};
    d.Widgets.Constants.CONSENT_WIDGET = {EDIT: {min_width: 260, max_width: 600, default_width: 400, min_height: 135, max_height: 150, default_height: 228}};
    d.Widgets.Config = {};
    d.Widgets.Config.POLL_FOR_EVENTS = true;
    d.Widgets.Constants.DEFAULT_ADDRESSBOOK_PREF = true;
    d.Widgets.Constants.UNIT_PX = "PX";
    d.Widgets.Constants.INVALID_PARAMETER_VALUE = "InvalidParameterValue";
    d.Widgets.Constants.INVALID_PARAMETER = "InvalidParameter";
    d.Widgets.Constants.INVALID_SMARTPHONE_PARAMETER_VALUE = "InvalidParameterValueSmartPhone";
    d.Widgets.Constants.INVALID_NON_SMARTPHONE_PARAMETER_VALUE = "InvalidParameterValueNonSmartPhone";
    d.Widgets.Constants.MISSING_PARAMETER = "MissingParameter";
    d.Widgets.Constants.MERCHANT_ABORTED = "MerchantAborted";
    d.Widgets.Constants.PARAM_NAME = "${ParamName}";
    d.Widgets.Constants.PARAM_VALUE = "${ParamValue}";
    d.Widgets.Constants.INVALID_VALUE_FOR_USE_AMAZON_ADDRESSBOOK = "Invalid value specified for parameter useAmazonAddressBook";
    d.Widgets.Constants.MISSING_SELLERID = "Required parameter sellerId is not specified.";
    d.Widgets.Constants.INVALID_PARAMETER_VALUE_MSG = "Value " + d.Widgets.Constants.PARAM_VALUE + " assigned to a parameter " + d.Widgets.Constants.PARAM_NAME + " is not valid ";
    d.Widgets.Constants.MISSING_PARAMETER_MSG = "Required parameter " + d.Widgets.Constants.PARAM_NAME + " is not specified.";
    d.Widgets.Constants.MERCHANT_ABORTED_MSG = "The error function was called in the hostedParametersProvider function.";
    d.Widgets.Constants.PARAMETER_VALIDATION_FAILED_MSG = "Parameter validation failed ";
    d.Widgets.Constants.MERCHANTS_INVALID_PARAMETERS_MSG = "Invalid parameters passed, please only provide parameters specified in the integration guide ";
    d.Widgets.Constants.HOSTED_PAYMENTS_ACTION_NONE = "None";
    d.Widgets.Constants.HOSTED_PAYMENTS_ACTION_AUTHORIZE = "Authorize";
    d.Widgets.Constants.HOSTED_PAYMENTS_ACTION_AUTHORIZE_AND_CAPTURE = "AuthorizeAndCapture";
    d.Widgets.Constants.HOSTED_PAYMENTS_WIDGET_ID = "";
    d.Widgets.Constants.HOSTED_HTML_INTERFACE = "HTML";
    d.Widgets.Constants.HOSTED_JAVASCRIPT_INTERFACE = "JavaScript";
    d.Widgets.Constants.HOSTED_EXPERIENCE_TYPE_KEY = "experienceType";
    d.Widgets.Constants.HOSTED_INTERFACE_TYPE_KEY = "interfaceType";
    d.Widgets.Constants.RETURN_URL_MAX_LENGTH = 256;
    d.Widgets.Constants.CURRENCY_CODE_MAX_LENGTH = 3;
    d.Widgets.Constants.SELLER_NOTE_MAX_LENGTH = 1024;
    d.Widgets.Constants.SELLER_ORDER_ID_MAX_LENGTH = 100;
    d.Widgets.Constants.SELLER_STORE_NAME_MAX_LENGTH = 100;
    d.Widgets.Constants.PAYMENT_ACTION_MAX_LENGTH = 20;
    d.Widgets.Constants.LWA_CLIENT_ID_MAX_LENGTH = 256;
    d.Widgets.Constants.IS_DYNAMIC_BUTTON_USED = false;
    d.Widgets.WidgetTypes = {Button: "Button", AddressBook: "AddressBook", Wallet: "Wallet", Consent: "Consent"};
    d.Widgets.ButtonTypes = {BIG_FISH_CHECKOUT: "paymentsOnlyProduct", DONATION: "donationProduct", HOSTED: "hostedPayment", HOSTED_DONATION: "hostedDonation"};
    d.Widgets.CartOrigins = {CartPage: "CartPage", DetailPage: "DetailPage"};
    d.Widgets.DisplayModes = {read: "read", edit: "edit"};
    d.Widgets.PaymentInstrumentsDisplayOptions = {ShowAll: "Default", Default: "Default"};
    a.exports = {config: d.Widgets.Config, constants: d.Widgets.Constants, others: {WidgetTypes: d.Widgets.WidgetTypes, ButtonTypes: d.Widgets.ButtonTypes, CartOrigins: d.Widgets.CartOrigins, DisplayModes: d.Widgets.DisplayModes, PaymentInstrumentsDisplayOptions: d.Widgets.PaymentInstrumentsDisplayOptions}}
}, {}], 10: [function (b, a, c) {
    var d = {Widgets: {}};
    d.Widgets.EventTypes = {DOCUMENT_READY: "OffAmazonPayments.DocumentReadyEvent", REFRESH: "apay-refresh", WIDGET_REFRESH: "apay-widgetrefresh;widgetId=", EXPRESS_CHK_ONAUTHORIZE: "apay-pcId=", ON_ADDRESS_SELECT_PRE: "apay-addressselectpre;widgetId=", ON_ADDRESS_SELECT: "apay-addressselect;widgetId=", ON_PAYMENT_SELECT: "apay-paymentselect;widgetId=", ON_CLOSE: "apay-close;widgetId=", ON_PPH_WIDGET_CLOSE: "apay-close", PRIME_WIDGET_RESIZE: "apay-prime-resize;widgetId=", ON_ERROR: "apay-OffAmazonPayments_mec_", REDIRECT_URL: "apay-redirectUrl;widgetId=", CHANGE_HEIGHT: "apay-changeHeight", ON_CONSENT_WIDGET_READY: "apay-onConsentWidgetReady=", ON_CONSENT_STATUS_CHANGED: "apay-onConsentStatusChanged="};
    a.exports = d.Widgets.EventTypes
}, {}], 11: [function (d, c, f) {
    var g = {jQuery: d("./jquery")};
    var b = d("../core/Constants");
    var a = d("../core/Utilities");
    g.HostedPayments = {};
    g.HostedPayments.done = function (l) {
        try {
            g.HostedPayments.validate(l)
        } catch (i) {
            return false
        }
        var h = b.constants.BUTTON_ENDPOINT + b.constants.HOSTED_PAYMENTS_URI;
        l.action = "hostedInit";
        l.cartOwnerId = l.sellerId;
        var k = Math.floor((Math.random() * 1000000000) + 1).toString();
        var j = a.createFormString(k, h, "_self", l);
        g.jQuery("#" + k).remove();
        g.jQuery("body").append(j);
        g.jQuery("#" + k).submit()
    };
    g.HostedPayments.isHostedPaymentsInput = function (h) {
        return h.type === b.others.ButtonTypes.HOSTED || g.HostedPayments.isHostedDonation(h)
    };
    g.HostedPayments.isHostedDonation = function (h) {
        return h.type === b.others.ButtonTypes.HOSTED_DONATION
    };
    g.HostedPayments.inputTypeToExperienceTypeMap = {hostedPayment: "ExpressPayment", hostedDonation: "ExpressDonation"};
    g.HostedPayments.validate = function (y) {
        var E = "sellerId";
        var p = "amount";
        var A = "returnURL";
        var k = "accessKey";
        var m = "signature";
        var t = "lwaClientId";
        var B = "currencyCode";
        var u = "sellerNote";
        var F = "sellerOrderId";
        var v = "paymentAction";
        var j = "shippingAddressRequired";
        var s = b.constants.HOSTED_EXPERIENCE_TYPE_KEY;
        var q = b.constants.HOSTED_INTERFACE_TYPE_KEY;
        var i;
        if (n()) {
            x();
            throw g.Widgets.Validation.validationException()
        }
        i = h();
        if (i.length > 0) {
            z(i);
            throw g.Widgets.Validation.validationException()
        }
        i = w();
        if (i.length > 0) {
            D(i);
            throw g.Widgets.Validation.validationException()
        }
        if (isNaN(y.amount) || Number(y.amount) <= 0 || Number(y.amount) > 1000000) {
            C(y.amount, p);
            throw g.Widgets.Validation.validationException()
        }
        if (!r()) {
            C(y.paymentAction, v);
            throw g.Widgets.Validation.validationException()
        }
        if (!a.isEmptyOrUndefined(y.shippingAddressRequired) && !a.isBoolean(y.shippingAddressRequired)) {
            C(y.shippingAddressRequired, j);
            throw g.Widgets.Validation.validationException()
        }
        function h() {
            var G = new Array(E, p, A, k, m, t);
            var J = [];
            for (var I = 0; I < G.length; I++) {
                var H = G[I];
                if (a.isEmptyOrUndefined(y[H])) {
                    J.push(H)
                }
            }
            return J
        }

        function w() {
            var G = [];
            l(A, b.constants.RETURN_URL_MAX_LENGTH, G);
            l(B, b.constants.CURRENCY_CODE_MAX_LENGTH, G);
            l(u, b.constants.SELLER_NOTE_MAX_LENGTH, G);
            l(v, b.constants.PAYMENT_ACTION_MAX_LENGTH, G);
            l(F, b.constants.SELLER_ORDER_ID_MAX_LENGTH, G);
            l(t, b.constants.LWA_CLIENT_ID_MAX_LENGTH, G);
            return G
        }

        function l(G, I, H) {
            if (!a.isEmptyOrUndefined(y[G]) && y[G].length > I) {
                H.push(G)
            }
        }

        function n() {
            var G = new Array(E, p, A, k, m, t, B, u, F, v, j, s, q);
            for (var H in y) {
                if (g.jQuery.inArray(H, G) === -1) {
                    return true
                }
            }
        }

        function r() {
            var G = new Array(b.constants.HOSTED_PAYMENTS_ACTION_NONE, b.constants.HOSTED_PAYMENTS_ACTION_AUTHORIZE, b.constants.HOSTED_PAYMENTS_ACTION_AUTHORIZE_AND_CAPTURE);
            return a.isEmptyOrUndefined(y.paymentAction) || g.jQuery.inArray(y.paymentAction, G) !== -1
        }

        function C(I, H) {
            var G = "Value '" + I + "' assigned to a parameter '" + H + "' is not valid";
            o(b.constants.INVALID_PARAMETER_VALUE, G)
        }

        function z(H) {
            var G = "Required parameters missing : " + H;
            o(b.constants.MISSING_PARAMETER, G)
        }

        function D(H) {
            var G = "Parameters '" + H + "' exceeds the maximum allowed length";
            o(b.constants.INVALID_PARAMETER_VALUE, G)
        }

        function x() {
            o(b.constants.INVALID_PARAMETER, b.constants.MERCHANTS_INVALID_PARAMETERS_MSG)
        }

        function o(H, G) {
            a.sendOnErrorCallbackMessage(H, G, b.constants.HOSTED_PAYMENTS_WIDGET_ID)
        }
    };
    c.exports = g.HostedPayments
}, {"../core/Constants": 9, "../core/Utilities": 18, "./jquery": 23}], 12: [function (b, h, f) {
    var d = {Widgets: {}, jQuery: b("./jquery")};
    var l = b("./Widget");
    var j = b("./Constants");
    var k = b("./Utilities");
    var c = b("./WidgetDesign");
    var i = b("./InlineWidgetError");
    var a = b("./EventTypes");
    var g = b("./CheckoutWidget");
    d.Widgets.InlineWidget = function (m) {
        l.call(this, m);
        this.onErrorCallback = m.onError;
        d.jQuery(this).bind(a.ON_ERROR, this, g.prototype.onErrorCallbackHandler);
        var o = m.amazonOrderReferenceId || m.amazonBillingAgreementId || null;
        var n = j.others.DisplayModes.edit;
        if (typeof(m.displayMode) !== "undefined") {
            switch (m.displayMode.toLowerCase()) {
                case j.others.DisplayModes.read.toLowerCase():
                    n = j.others.DisplayModes.read;
                    break;
                case j.others.DisplayModes.edit.toLowerCase():
                    n = j.others.DisplayModes.edit;
                    break;
                default:
                    this.error = new i(j.constants.INVALID_PARAMETER_VALUE, null, "displayMode", m.displayMode)
            }
        }
        var p = j.others.PaymentInstrumentsDisplayOptions.ShowAll;
        this.getDisplayMode = function () {
            return n
        };
        this.getPaymentInstrumentsDisplayOptions = function () {
            return p
        };
        this.design = new c(m.design, this);
        this.agreementType = (!k.isEmptyOrUndefined(m.agreementType)) ? m.agreementType : "";
        this.getContractId = function () {
            return o
        };
        this.setContractId = function (q) {
            o = q
        };
        this.onOrderReferenceCreate = m.onOrderReferenceCreate;
        this.onBillingAgreementCreate = m.onBillingAgreementCreate;
        this.onReady = m.onReady;
        if (typeof this.onOrderReferenceCreate === "function") {
            d.jQuery(this).bind(a.EXPRESS_CHK_ONAUTHORIZE, this, this.onOrderReferenceCreateHandler)
        }
        if (typeof this.onBillingAgreementCreate === "function") {
            d.jQuery(this).bind(a.EXPRESS_CHK_ONAUTHORIZE, this, this.onBillingAgreementCreateHandler)
        }
        if (typeof this.onReady === "function") {
            d.jQuery(this).bind(a.EXPRESS_CHK_ONAUTHORIZE, this, this.onReadyHandler)
        }
        d.jQuery(this).bind(a.REFRESH, this, this.refreshEventHandler);
        d.jQuery(this).bind(a.WIDGET_REFRESH, this, this.widgetRefreshEventHandler);
        d.jQuery(this).bind(a.CHANGE_HEIGHT, this, this.widgetChangeHeightEventHandler)
    };
    d.Widgets.InlineWidget.prototype = k.createSubclass(l.prototype);
    d.Widgets.InlineWidget.prototype.constructor = d.Widgets.InlineWidget;
    d.Widgets.InlineWidget.prototype.refreshEventHandler = function () {
        var o = this.getID() + "Form";
        var n = this.getID() + "IFrame";
        if (d.jQuery("#" + n).length !== 0) {
            d.jQuery("#" + n).remove()
        }
        var m = k.createIFrameString(n, this.design.width, this.design.height);
        d.jQuery("#" + this.getID()).append(m);
        d.jQuery("#" + o).submit()
    };
    d.Widgets.InlineWidget.prototype.hideEventHandler = function () {
        var m = this.getID() + "IFrame";
        k.hide(m)
    };
    d.Widgets.InlineWidget.prototype.widgetRefreshEventHandler = function (o) {
        var m = o.data;
        var n = m.eventValue;
        if (this.getID() === n) {
            this.refreshEventHandler()
        }
    };
    d.Widgets.InlineWidget.prototype.widgetChangeHeightEventHandler = function (p) {
        var m = p.data;
        var q = m.eventValue.split(";");
        var n = q[0];
        var o = q[1];
        if (this.getID() === n) {
            this.changeHeightEventHandler(o)
        }
    };
    d.Widgets.InlineWidget.prototype.onOrderReferenceCreateHandler = function (o) {
        d.jQuery(this).unbind(a.EXPRESS_CHK_ONAUTHORIZE);
        var m = o.data.eventValue;
        var n = {getAmazonOrderReferenceId: function () {
            return m
        }};
        this.onOrderReferenceCreate(n)
    };
    d.Widgets.InlineWidget.prototype.onBillingAgreementCreateHandler = function (n) {
        d.jQuery(this).unbind(a.EXPRESS_CHK_ONAUTHORIZE);
        var m = n.data.eventValue;
        var o = {getAmazonBillingAgreementId: function () {
            return m
        }};
        this.onBillingAgreementCreate(o)
    };
    d.Widgets.InlineWidget.prototype.onReadyHandler = function (o) {
        d.jQuery(this).unbind(a.EXPRESS_CHK_ONAUTHORIZE);
        var n = o.data.eventValue;
        var p = {};
        var m = function () {
            p.getAmazonBillingAgreementId = function () {
                return n
            };
            p.getAmazonOrderReferenceId = function () {
                return n
            };
            return p
        }();
        this.onReady(m)
    };
    d.Widgets.InlineWidget.prototype.getBrowserWindowHeight = function () {
        var m = d.jQuery(window).height();
        if (navigator.userAgent.match(/OS [0-9](_\d)+ like Mac OS X/i) && navigator.userAgent.toLowerCase().indexOf("safari") > -1) {
            m = m + 60
        }
        return m
    };
    d.Widgets.InlineWidget.prototype.changeHeightEventHandler = function (p) {
        var o = this.getID();
        var m = o + "IFrame";
        var r = o + "Form";
        var q = p * 1 + 2;
        d.jQuery("#" + o).height(q + "px");
        d.jQuery("#" + m).height(p + "px");
        document.getElementById(m).height = p;
        d.jQuery("#" + r).children("input:hidden[name='widgetHeight']").val(p);
        if (p >= document.body.clientHeight) {
            var n = d.jQuery("#" + o).offset().top;
            d.jQuery(window).scrollTop(n)
        }
    };
    h.exports = d.Widgets.InlineWidget
}, {"./CheckoutWidget": 7, "./Constants": 9, "./EventTypes": 10, "./InlineWidgetError": 13, "./Utilities": 18, "./Widget": 20, "./WidgetDesign": 21, "./jquery": 23}], 13: [function (d, c, f) {
    var g = {Widgets: {InlineWidget: {}}};
    var b = d("./Constants");
    var a = d("./Utilities");
    g.Widgets.InlineWidget.Error = function (k, i, j, h) {
        this.errorType = k;
        this.errorMessage = i;
        this.errorElementName = j;
        this.errorElementValue = h
    };
    g.Widgets.InlineWidget.Error.SetErrorIfParameterExists = function (k, m, h, i, l) {
        if (m) {
            var j = b.constants.INVALID_PARAMETER_VALUE;
            if (l === "smartphone") {
                j = b.constants.INVALID_SMARTPHONE_PARAMETER_VALUE
            } else {
                if (l === "nonSmartphone") {
                    j = b.constants.INVALID_NON_SMARTPHONE_PARAMETER_VALUE
                }
            }
            i.error = new g.Widgets.InlineWidget.Error(j, h, k, m)
        }
    };
    g.Widgets.InlineWidget.Error.RaiseOnError = function (h, k, i, j) {
        if (!j) {
            j = b.constants.INVALID_PARAMETER_VALUE
        }
        h = a.formatMsg(h, k);
        a.sendOnErrorCallbackMessage(j, h, i.getID());
        i.hasError = true
    };
    g.Widgets.InlineWidget.Error.RaiseOnErrorIfUndefined = function (j, h, l, i, k) {
        if (j === undefined) {
            g.Widgets.InlineWidget.Error.RaiseOnError(h, l, i, k)
        }
    };
    g.Widgets.InlineWidget.Error.RaiseMissingParameterError = function (i, h) {
        g.Widgets.InlineWidget.Error.RaiseOnError(b.constants.MISSING_PARAMETER_MSG, h, i, b.constants.MISSING_PARAMETER)
    };
    g.Widgets.InlineWidget.Error.isMissingParameter = function (i, h, j) {
        if (a.isEmptyOrUndefined(h)) {
            j.error = new g.Widgets.InlineWidget.Error(b.constants.MISSING_PARAMETER, b.constants.MISSING_PARAMETER_MSG, i, h);
            return true
        }
        return false
    };
    c.exports = g.Widgets.InlineWidget.Error
}, {"./Constants": 9, "./Utilities": 18}], 14: [function (b, g, c) {
    var k = b("./Utilities");
    var h = b("../widgets/MetricsCollector");
    var j = b("./Constants");
    var l = b("./ZeroTime");

    function a(m) {
        if (typeof m === "undefined" || m.type === undefined) {
            return"undefined_button_type"
        }
        return m.type.toLowerCase()
    }

    function f(p, r, n, q) {
        var o = new h.Collector(n);
        d(o);
        o.addButtonInfoData(h.ProductTypes.LPA, h.PageActions.BUTTON_RENDER, p.type, n);
        var t = a(p);
        var v = q ? [h.Tags.DYNAMIC, t] : [t];
        o.addCounter("lpa-buttonrender", v);
        if (k.isSellerHidingButton(r)) {
            o.addCounter("lpa-seller-hiding-button")
        }
        var s = p.color || j.constants.BUTTON_DEFAULT_COLOR_LWA;
        var u = p.size || j.constants.BUTTON_DEFAULT_SIZE_LWA;
        var m = p.type || j.constants.BUTTON_DEFAULT_TYPE;
        o.addCounter(s);
        o.addCounter(u);
        o.addCounter(m);
        o.addCounter(s.toLowerCase() + "_" + u.toLowerCase() + "_" + m.toLowerCase());
        o.addTiming("lwa-button-clickable", l() + p.buttonConstructorStartTime, p.buttonConstructorEndTime + OffAmazonPayments.WIDGET_CORE_EXECUTION_END_TIME, v);
        o.addTiming("lwa-button-clickable-js-load", l(), p.buttonConstructorEndTime, v);
        i(o, n, p);
        o.publish()
    }

    function i(o, n, m) {
        var q = k.getLanguageForSeller(n, m);
        if (k.isSellerAllowedForMultiLanguage(n, m)) {
            var p = k.getBrowserLanguagePreference();
            if (k.isValidLanguagePassedBySeller(m)) {
                o.addCounter("lpa-buttonrender-in-seller-language")
            } else {
                if (k.isBrowserLanguageSupported(p)) {
                    o.addCounter("lpa-buttonrender-in-browser-language")
                } else {
                    o.addCounter("lpa-buttonrender-in-default-language")
                }
            }
            o.addCounter("lpa-buttonrender-in-" + q)
        }
    }

    function d(m) {
        m.addTiming("widgets-js-loading", l(), OffAmazonPayments.WIDGET_CORE_EXECUTION_END_TIME)
    }

    g.exports = {getLpaButtonType: a, publishMetricsForLPAButton: f, publishMetricsForLPAButtonLanguage: i, addWidgetsLoadLatencyMetric: d}
}, {"../widgets/MetricsCollector": 26, "./Constants": 9, "./Utilities": 18, "./ZeroTime": 22}], 15: [function (b, a, c) {
    a.exports = function () {
        return window.amazon
    }
}, {}], 16: [function (c, b, d) {
    var f = {jQuery: c("./jquery"), Widgets: {}};
    var a = c("./Constants");
    f.Widgets.Mediator = function () {
        this.widgetCount = 0;
        this.registry = {}
    };
    f.Widgets.Mediator.Reset = function () {
        f.Widgets.mediator.widgetCount = 0;
        f.Widgets.mediator.registry = {}
    };
    f.Widgets.Mediator.prototype.generateUniqWidgetID = function () {
        return this.widgetCount++
    };
    f.Widgets.Mediator.prototype.getNumWidgetCount = function () {
        return this.widgetCount
    };
    f.Widgets.Mediator.prototype.register = function (g) {
        this.registry[g.getID()] = g
    };
    f.Widgets.Mediator.prototype.notifyListeners = function (i) {
        for (var h in this.registry) {
            if (this.registry.hasOwnProperty(h)) {
                var g = this.registry[h];
                g.eventValue = i.eventValue;
                g.error = i.error;
                f.jQuery(g).trigger(i.eventName, g)
            }
        }
    };
    f.Widgets.Mediator.prototype.getWalletWidgets = function () {
        return this.getWidgetsHelper(a.others.WidgetTypes.Wallet)
    };
    f.Widgets.Mediator.prototype.getAddressWidgets = function () {
        return this.getWidgetsHelper(a.others.WidgetTypes.AddressBook)
    };
    f.Widgets.Mediator.prototype.getWidgetsHelper = function (j) {
        var i = [];
        for (var h in this.registry) {
            if (this.registry.hasOwnProperty(h)) {
                var g = this.registry[h];
                if (g.type === j) {
                    i.push(g)
                }
            }
        }
        return i
    };
    f.Widgets.mediator = new f.Widgets.Mediator();
    b.exports = {Mediator: f.Widgets.Mediator, instance: f.Widgets.mediator}
}, {"./Constants": 9, "./jquery": 23}], 17: [function (b, a, c) {
    var d = {Widgets: {}};
    d.Widgets.TaskQueue = function () {
        this.taskQueue = []
    };
    d.Widgets.TaskQueue.prototype.push = function (f) {
        this.taskQueue.push(f)
    };
    d.Widgets.TaskQueue.prototype.pop = function () {
        return this.taskQueue.length > 0 ? this.taskQueue.shift() : null
    };
    d.Widgets.TaskQueue.prototype.isEmpty = function () {
        return(this.taskQueue.length === 0)
    };
    d.Widgets.Task = function () {
    };
    d.Widgets.Task.prototype.execute = function () {
    };
    d.Widgets.taskQueue = new d.Widgets.TaskQueue();
    a.exports = {TaskQueue: d.Widgets.TaskQueue, getTaskQueue: function () {
        return d.Widgets.taskQueue
    }, setTaskQueue: function (f) {
        d.Widgets.taskQueue = f
    }, Task: d.Widgets.Task}
}, {}], 18: [function (d, h, g) {
    var f = {jQuery: d("./jquery"), Widgets: {}};
    var l = d("./Constants");
    var a = d("./EventTypes");
    var j = d("./Mediator").instance;
    var i = d("./LwaLogin");
    var b = d("./TaskQueue");
    var k = d("../widgets/MetricsCollector");
    f.Widgets.Mobile = (function () {
        var n = navigator.userAgent.toLowerCase();
        var m = new Array("iphone", "ipod", "series60", "symbian", "android", "windows ce", "blackberry", "palm");
        return{isMobile: function () {
            for (var p = 0; p < m.length; p++) {
                var o = m[p];
                if (n.search(o) > -1) {
                    return true
                }
            }
            return false
        }}
    })();
    f.Widgets.Utilities = function () {
    };
    f.Widgets.Browser = function () {
    };
    f.Widgets.Browser.isFF = function () {
        return navigator.userAgent.match(/Firefox/i)
    };
    f.Widgets.Utilities.isWin = function () {
        return navigator.userAgent.match(/Windows/i)
    };
    f.Widgets.Utilities.isiOS = function () {
        return(navigator.userAgent.toLowerCase().match(/(ipad|iphone|ipod)/g) ? true : false)
    };
    f.Widgets.Utilities.getClientId = function () {
        if (typeof i() !== "undefined" && typeof i().Login !== "undefined" && typeof i().Login.getClientId() !== "undefined") {
            return i().Login.getClientId()
        }
        return null
    };
    f.Widgets.Utilities.isAmazonPaymentsButtonImage = function (m) {
        return(m.indexOf(l.constants.BUTTON_ENDPOINT + l.constants.BUTTON_URI) === 0 || m.indexOf(l.constants.BUTTON_BASE_PATH_PREFIX) === 0)
    };
    f.Widgets.Utilities.getLanguageForSeller = function (n, m) {
        if (f.Widgets.Utilities.isSellerAllowedForMultiLanguage(n, m)) {
            if (f.Widgets.Utilities.isValidLanguagePassedBySeller(m)) {
                return l.constants.BUTTON_LWA_LANGUAGE_TO_REALM_MAP[m.language.toLowerCase()]
            }
            var o = f.Widgets.Utilities.getBrowserLanguagePreference();
            if (f.Widgets.Utilities.isBrowserLanguageSupported(o)) {
                return f.Widgets.Utilities.getBrowserLanguageToInternalLanguageMapping(o)
            }
            return l.constants.FALLBACK_MULTILANGUAGE_BUYER_LANGUAGE_PREFERENCE[l.constants.BUTTON_COUNTRY_CODE]
        }
        return l.constants.COUNTRY_CODE_TO_REALM_MAP[l.constants.BUTTON_COUNTRY_CODE.toLowerCase()]
    };
    f.Widgets.Utilities.isValidLanguagePassedBySeller = function (m) {
        if (!f.Widgets.Utilities.isEmptyOrUndefined(m.language) && f.Widgets.Utilities.isElementInArray(m.language.toLowerCase(), l.constants.MULTILANGUAGE_ALLOWED_SELLER_LANGUAGE_CODES)) {
            return true
        }
        return false
    };
    f.Widgets.Utilities.isBrowserLanguageSupported = function (m) {
        if (!f.Widgets.Utilities.isEmptyOrUndefined(m) && (m in l.constants.BUTTON_LWA_LANGUAGE_TO_REALM_MAP || m.substr(0, 2) in l.constants.BUTTON_LWA_LANGUAGE_TO_REALM_MAP)) {
            return true
        }
        return false
    };
    f.Widgets.Utilities.getLanguageCountryForSeller = function (n, m) {
        return l.constants.REALM_TO_LANGUAGE_COUNTRY_MAP[f.Widgets.Utilities.getLanguageForSeller(n, m)]
    };
    f.Widgets.Utilities.isSellerBlacklistedForMultiLanguage = function (m) {
        var n = [];
        if (!f.Widgets.Utilities.isEmptyOrUndefined(l.constants.MULTILANGUAGE_SELLER_BLACKLIST)) {
            n = f.Widgets.Utilities.stringToArray(l.constants.MULTILANGUAGE_SELLER_BLACKLIST)
        }
        return f.Widgets.Utilities.isElementInArray(m, n)
    };
    f.Widgets.Utilities.isSellerAllowedForMultiLanguage = function (n, m) {
        if (!f.Widgets.Utilities.isSellerBlacklistedForMultiLanguage(n) && !f.Widgets.Utilities.isSellerAllowed(n, m) && f.Widgets.Utilities.isElementInArray(l.constants.COUNTRY_CODE, l.constants.MULTILANGUAGE_ALLOWED_COUNTRY_CODES)) {
            return true
        }
        return false
    };
    f.Widgets.Utilities.getNavigatorLanguages = function () {
        return navigator.languages
    };
    f.Widgets.Utilities.getBrowserLanguagePreference = function () {
        var o;
        var m = f.Widgets.Utilities.getNavigatorLanguages();
        if (!f.Widgets.Utilities.isEmptyOrUndefined(m)) {
            for (var n = 0; n < m.length; n++) {
                if (m[n].toLowerCase() in l.constants.BUTTON_LWA_LANGUAGE_TO_REALM_MAP) {
                    o = m[n];
                    break
                }
            }
        }
        return o ? o : (navigator.language || navigator.browserLanguage || navigator.userLanguage)
    };
    f.Widgets.Utilities.getBrowserLanguageToInternalLanguageMapping = function (n) {
        var m;
        if (typeof n !== "undefined") {
            m = f.Widgets.Utilities.getValueFromMap(l.constants.BUTTON_LWA_LANGUAGE_TO_REALM_MAP, n, undefined) || f.Widgets.Utilities.getValueFromMap(l.constants.BUTTON_LWA_LANGUAGE_TO_REALM_MAP, n.substr(0, 2), undefined)
        }
        return m
    };
    f.Widgets.Utilities.getValueFromMap = function (m, n, o) {
        if (typeof n !== "undefined" && typeof m !== "undefined" && n.toLowerCase() in m) {
            return m[n.toLowerCase()]
        }
        return o
    };
    f.Widgets.Utilities.flashVersion = function () {
        var r;
        if (!navigator.plugins || (navigator.plugins.length < 1)) {
            return
        }
        try {
            var n = navigator.plugins.length;
            for (var q = 0; q < n; q++) {
                var m = navigator.plugins[q];
                if (m.name.match(/Shockwave Flash/)) {
                    if (m.version) {
                        r = m.version
                    } else {
                        var p = m.description.match(/([0-9.]+)\s+r([0-9.]+)/);
                        r = p && (p[1] + "." + p[2])
                    }
                }
            }
        } catch (s) {
            if (window.ueLogError) {
                var o = {logLevel: "ERROR", attribution: "Widget_core.js", message: "Error setting the flashVersion"};
                window.ueLogError(s, o)
            }
        }
        return r
    };
    f.Widgets.Utilities.initFlash = function () {
        var n;
        if (f.Widgets.Utilities.flashVersion() && f.Widgets.Utilities.isWin() && f.Widgets.Browser.isFF()) {
            var m = document.getElementById("offamazonpayments-swf-container");
            if (!m) {
                m = document.createElement("div");
                m.setAttribute("id", "offamazonpayments-swf-container");
                document.body.appendChild(m);
                n = document.createElement("object");
                n.setAttribute("style", "visibility:hidden");
                n.setAttribute("type", "application/x-shockwave-flash");
                n.setAttribute("data", "");
                n.setAttribute("width", "0");
                n.setAttribute("height", "0");
                m.appendChild(n)
            }
        }
    };
    f.Widgets.Utilities.addLoadEventHandler = function (m) {
        var n = m.element;
        var o = m.method;
        var p = m.params;
        if (n.addEventListener) {
            n.addEventListener("load", function () {
                o(p)
            }, false)
        } else {
            if (n.attachEvent) {
                n.onreadystatechange = function () {
                    if (n.readyState === "loaded" || n.readyState === "complete") {
                        if ("function" === typeof o) {
                            o(p)
                        }
                    }
                }
            } else {
                o(p)
            }
        }
    };
    f.Widgets.Utilities.getCartOwnerId = function () {
        var m = l.constants.CartOwnerId;
        if (f.Widgets.Utilities.isEmptyOrUndefined(m)) {
            m = f.Widgets.Utilities.getUrlQueryParamValue(f.Widgets.Utilities.getWidgetsJsSrc(), "sellerId")
        }
        return m
    };
    f.Widgets.Utilities.getWidgetsJsSrc = function () {
        var o = "";
        var n = /.*OffAmazonPayments.*\/Widgets\.js.*/g;
        var m = document.scripts;
        f.jQuery(m).each(function (r, q) {
            var p = n.exec(q.src);
            if (!f.Widgets.Utilities.isEmptyOrUndefined(p)) {
                o = p[0];
                return false
            }
        });
        return o
    };
    f.Widgets.Utilities.getUrlQueryParamValue = function (n, m) {
        var o = "";
        var p = n.match(m + "=(.*)&") || n.match(m + "=(.*)");
        if (!f.Widgets.Utilities.isEmptyOrUndefined(p)) {
            o = p[1]
        }
        return o
    };
    f.Widgets.Utilities.openPopUp = function (r) {
        var q = (window.screen.width - l.constants.POPUP_WIN_WIDTH) / 2;
        var p = (window.screen.height - l.constants.POPUP_WIN_HEIGHT) / 2;
        var s = "top=" + p + ",left=" + q + ",width=" + l.constants.POPUP_WIN_WIDTH + ",height=" + l.constants.POPUP_WIN_HEIGHT + ", resizable=yes,menubar=no,toolbar=no";
        if (f.jQuery.browser.safari || f.jQuery.browser.msie) {
            s = s + ",location=yes,status=yes"
        }
        var o;
        if (f.Widgets.Mobile.isMobile()) {
            o = window.open("", r)
        } else {
            o = window.open("", r, s)
        }
        try {
            o.document.write(l.constants.POPUP_LOADING_HTML)
        } catch (n) {
            if (window.ueLogError) {
                var m = {logLevel: "ERROR", attribution: "Widget_core.js", message: "Error caught in popup window already opened"};
                window.ueLogError(n, m)
            }
        }
        o.focus();
        return o
    };
    f.Widgets.Utilities.jsonp = (function () {
        var p = false;
        var q = [];
        var o = true;

        function m() {
            p = true;
            while (q.length > 0) {
                var r = q.pop();
                n(r)
            }
        }

        function n(r) {
            if (r.id) {
                f.Widgets.Utilities.addScriptNodetoBody({URI: r.url, id: r.id}, m)
            } else {
                f.jQuery.ajax({url: r.url, dataType: "jsonp", crossDomain: true, success: function (s) {
                    r.success(s);
                    m()
                }, error: r.error})
            }
        }

        return function (r) {
            if (p) {
                n(r)
            } else {
                if (o) {
                    o = false;
                    n(r)
                } else {
                    q.push(r)
                }
            }
        }
    })();
    f.Widgets.Utilities.addScriptNodetoBody = function (s, t) {
        var n = s.id;
        var m = s.URI;
        var q = function (v) {
            if (v.readyState) {
                v.onreadystatechange = function () {
                    if (v.readyState === "loaded" || v.readyState === "complete") {
                        t()
                    }
                }
            } else {
                v.onload = t
            }
        };
        if (typeof(n) !== "undefined" && n !== null && typeof(m) !== "undefined" && m !== null) {
            var o = f.jQuery("#" + n);
            if (o === null || typeof(o) === "undefined" || o.length === 0) {
                var u = document.createElement("script");
                u.id = n;
                u.type = "text/javascript";
                u.src = m;
                if (typeof(t) === "function") {
                    q(u)
                }
                var p = document.getElementsByTagName("body")[0];
                if (p !== null && typeof(p) !== "undefined") {
                    p.appendChild(u)
                } else {
                    var r = document.getElementsByTagName("script")[0];
                    r.parentNode.insertBefore(u, r)
                }
            }
        }
    };
    f.Widgets.Utilities.setupBridgeIframe = function () {
        k.Collector.time("iframe-bridge");
        var o = "#" + l.constants.BRIDGE_IFRAME_NAME;
        var n = f.jQuery(o);
        if (typeof(n) === "undefined" || n.length === 0) {
            var q = l.constants.WIDGET_ENDPOINT + l.constants.BRIDGE_WIDGET_URI;
            if (f.Widgets.Utilities.readCookie("ap_static_iframe_bridge_source") === "media-central") {
                q = l.constants.WIDGET_ENDPOINT + "/static/" + l.constants.COUNTRY_CODE_TO_LANGUAGE_COUNTRY_MAP[l.constants.COUNTRY_CODE] + "/" + l.constants.CONTEXT + "/bridge"
            }
            var m = f.Widgets.Utilities.createIframeStringWithSrc(l.constants.BRIDGE_IFRAME_NAME, q, "1px", "1px");
            f.jQuery(document.body).append(m);
            f.jQuery(o).css("display", "none");
            var p = document.getElementById(l.constants.BRIDGE_IFRAME_NAME);
            p.onload = f.Widgets.Utilities.onBridgeReady
        }
    };
    f.Widgets.Utilities.onBridgeReady = function () {
        k.Collector.timeEnd("iframe-bridge");
        l.constants.BRIDGE_LOAD_COMPLETE = true;
        for (var n in j.registry) {
            if (j.registry.hasOwnProperty(n)) {
                var m = j.registry[n];
                f.jQuery(m).trigger(a.DOCUMENT_READY, m)
            }
        }
    };
    f.Widgets.Utilities.setNewHash = function (m) {
        var n = window.top.location.href;
        n = n.replace(/#.*$/, "#");
        if (m.length > 0) {
            n += m
        }
        window.top.location.replace(n)
    };
    f.Widgets.Utilities.removeFromHash = function (n, m) {
        n = decodeURIComponent(n);
        n = n.replace(m, "");
        n = encodeURIComponent(n);
        return n
    };
    f.Widgets.Utilities.pollTaskQueue = function () {
        while (!b.getTaskQueue().isEmpty()) {
            var m = b.getTaskQueue().pop();
            if (typeof(m.execute) === "function") {
                m.execute()
            }
        }
        window.setTimeout(f.Widgets.Utilities.pollTaskQueue, l.constants.TIMER_INTERVAL)
    };
    f.Widgets.Utilities.pollEvents = function () {
        var n = window.top.location.hash;
        if (!n) {
            return
        }
        n = n.replace(/#/, "");
        var m = f.Widgets.Utilities.parseMessage(n);
        if (typeof(m.stringToBeRemoved) !== "undefined") {
            n = f.Widgets.Utilities.removeFromHash(n, m.stringToBeRemoved);
            f.Widgets.Utilities.setNewHash(n);
            j.notifyListeners(m)
        }
    };
    f.Widgets.Utilities.handleMessage = function (n) {
        if (typeof(n) === "undefined" || n.origin !== l.constants.WIDGET_ENDPOINT) {
            return
        }
        var o = n.data;
        if (typeof(o) === "undefined") {
            return
        }
        var m = f.Widgets.Utilities.parseMessage(o);
        if (typeof(m.eventName) !== "undefined") {
            j.notifyListeners(m)
        }
    };
    f.Widgets.Utilities.parseMessage = function (w) {
        var q = {}, v, t, p;
        if (w.indexOf(a.EXPRESS_CHK_ONAUTHORIZE, 0) >= 0) {
            p = w.indexOf(a.EXPRESS_CHK_ONAUTHORIZE, 0);
            var n = w.substring(p + a.EXPRESS_CHK_ONAUTHORIZE.length);
            q.eventName = a.EXPRESS_CHK_ONAUTHORIZE;
            q.eventValue = n;
            q.stringToBeRemoved = a.EXPRESS_CHK_ONAUTHORIZE + n
        } else {
            if (w.indexOf(a.REFRESH, 0) >= 0) {
                q.eventName = a.REFRESH;
                q.eventValue = "";
                q.stringToBeRemoved = a.REFRESH
            } else {
                if (w.indexOf(a.WIDGET_REFRESH, 0) >= 0) {
                    p = w.indexOf(a.WIDGET_REFRESH, 0);
                    v = w.substring(p + a.WIDGET_REFRESH.length);
                    q.eventName = a.WIDGET_REFRESH;
                    q.eventValue = v;
                    q.stringToBeRemoved = a.WIDGET_REFRESH + v
                } else {
                    if (w.indexOf(a.ON_ADDRESS_SELECT, 0) >= 0) {
                        p = w.indexOf(a.ON_ADDRESS_SELECT, 0);
                        v = w.substring(p + a.ON_ADDRESS_SELECT.length);
                        q.eventName = a.ON_ADDRESS_SELECT;
                        q.eventValue = v;
                        q.stringToBeRemoved = a.ON_ADDRESS_SELECT + v
                    } else {
                        if (w.indexOf(a.ON_ADDRESS_SELECT_PRE, 0) >= 0) {
                            p = w.indexOf(a.ON_ADDRESS_SELECT_PRE, 0);
                            v = w.substring(p + a.ON_ADDRESS_SELECT_PRE.length);
                            q.eventName = a.ON_ADDRESS_SELECT_PRE;
                            q.eventValue = v;
                            q.stringToBeRemoved = a.ON_ADDRESS_SELECT_PRE + v
                        } else {
                            if (w.indexOf(a.ON_PAYMENT_SELECT, 0) >= 0) {
                                p = w.indexOf(a.ON_PAYMENT_SELECT, 0);
                                v = w.substring(p + a.ON_PAYMENT_SELECT.length);
                                q.eventName = a.ON_PAYMENT_SELECT;
                                q.eventValue = v;
                                q.stringToBeRemoved = a.ON_PAYMENT_SELECT + v
                            } else {
                                if (w.indexOf(a.ON_CLOSE, 0) >= 0) {
                                    p = w.indexOf(a.ON_CLOSE, 0);
                                    v = w.substring(p + a.ON_CLOSE.length);
                                    q.eventName = a.ON_CLOSE;
                                    q.eventValue = v;
                                    q.stringToBeRemoved = a.ON_CLOSE + v
                                } else {
                                    if (w.indexOf(a.ON_PPH_WIDGET_CLOSE, 0) >= 0) {
                                        q.eventName = a.ON_PPH_WIDGET_CLOSE;
                                        q.eventValue = "";
                                        q.stringToBeRemoved = a.ON_PPH_WIDGET_CLOSE
                                    } else {
                                        if (w.indexOf(a.ON_CONSENT_WIDGET_READY, 0) >= 0) {
                                            p = w.indexOf(a.ON_CONSENT_WIDGET_READY, 0);
                                            q.eventName = a.ON_CONSENT_WIDGET_READY;
                                            q.eventValue = w.substring(p + a.ON_CONSENT_WIDGET_READY.length);
                                            q.stringToBeRemoved = q.eventName + q.eventValue
                                        } else {
                                            if (w.indexOf(a.ON_CONSENT_STATUS_CHANGED, 0) >= 0) {
                                                p = w.indexOf(a.ON_CONSENT_STATUS_CHANGED, 0);
                                                q.eventName = a.ON_CONSENT_STATUS_CHANGED;
                                                q.eventValue = w.substring(p + a.ON_CONSENT_STATUS_CHANGED.length);
                                                q.stringToBeRemoved = q.eventName + q.eventValue
                                            } else {
                                                if (w.indexOf(a.ON_ERROR, 0) >= 0) {
                                                    p = w.indexOf(a.ON_ERROR);
                                                    t = w.substring(p + a.ON_ERROR.length);
                                                    p = t.indexOf(l.constants.WIDGETID_PARAM_NAME);
                                                    v = t.substring(p + l.constants.WIDGETID_PARAM_NAME.length);
                                                    q.eventName = a.ON_ERROR;
                                                    q.eventValue = v;
                                                    q.stringToBeRemoved = t;
                                                    var o = t.substring(0, p);
                                                    p = o.indexOf("=");
                                                    var u = o.substring(0, p);
                                                    var r = o.substring(p + "=".length);
                                                    q.error = (function (y, x) {
                                                        return{getErrorCode: function () {
                                                            return y
                                                        }, getErrorMessage: function () {
                                                            return x
                                                        }}
                                                    })(u, r)
                                                } else {
                                                    if (w.indexOf(a.REDIRECT_URL, 0) >= 0) {
                                                        p = w.indexOf(a.REDIRECT_URL, 0);
                                                        var m = w.substring(p + a.REDIRECT_URL.length);
                                                        q.eventName = a.REDIRECT_URL;
                                                        q.eventValue = m;
                                                        q.stringToBeRemoved = a.REDIRECT_URL + m
                                                    } else {
                                                        if (w.indexOf(a.CHANGE_HEIGHT, 0) >= 0) {
                                                            p = w.indexOf(a.CHANGE_HEIGHT);
                                                            t = w.substring(p + a.CHANGE_HEIGHT.length);
                                                            p = t.indexOf(l.constants.WIDGETID_PARAM_NAME);
                                                            v = t.substring(p + l.constants.WIDGETID_PARAM_NAME.length);
                                                            q.eventName = a.CHANGE_HEIGHT;
                                                            q.stringToBeRemoved = t;
                                                            var s = t.substring(1, p);
                                                            q.eventValue = v + ";" + s
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return q
    };
    f.Widgets.Utilities.eraseCookie = function (m) {
        f.Widgets.Utilities.createCookie(m, "", -1)
    };
    f.Widgets.Utilities.createCookie = function (o, q, m) {
        var p = "";
        if (m) {
            var n = new Date();
            n.setTime(n.getTime() + (m * 60 * 60 * 1000));
            p = "; expires=" + n.toGMTString()
        }
        document.cookie = o + "=" + q + p + "; path=/"
    };
    f.Widgets.Utilities.isCookiePresent = function (n) {
        var m = f.Widgets.Utilities.readCookie(n);
        if (undefined !== m && null !== m) {
            return true
        } else {
            return false
        }
    };
    f.Widgets.Utilities.readCookie = function (q) {
        if (document.cookie && document.cookie !== "") {
            var o = document.cookie.split(";");
            for (var n = 0; n < o.length; n++) {
                var r = o[n];
                var p = r.split("=");
                var m = p[0].replace(/ /, "");
                if (m.indexOf(q) === 0) {
                    return p[1]
                }
            }
        }
        return null
    };
    f.Widgets.Utilities.createWidgetContainer = function (t, u, o, s, q, r) {
        var v = "Pay with Amazon";
        if (r === l.others.WidgetTypes.Wallet) {
            v = "Payment Method"
        } else {
            if (r === l.others.WidgetTypes.AddressBook) {
                v = "Address Book"
            }
        }
        var m = f.Widgets.Utilities.getDefaultWidgetContainerStyle(o, s, "block");
        var n = 'id="' + u + '"';
        var p = '<div class="widget-container" ' + m + " " + n + ">";
        p += "<h1 style='font-family: Arial, Helvetica, san-serif; margin: 7px; font-size: 14px; font-weight: bold; padding: 0 0 0 30px; background: url(https://images-na.ssl-images-amazon.com/images/G/01/ep/background-image-1x._V364197283_.png) no-repeat -128px 0px; height: 22px; line-height: 22px; position: absolute; z-index: 11; color: #2f3841; top: 0; left: 0'>" + v + "</h1>";
        if (q !== undefined) {
            p += q
        }
        p += "</div>";
        f.jQuery("#" + t).html(p);
        return f.jQuery("#" + u)
    };
    f.Widgets.Utilities.isEmptyOrUndefined = function (m) {
        return(typeof(m) === "undefined" || m === null || m.length === 0)
    };
    f.Widgets.Utilities.isBoolean = function (m) {
        return(typeof(m) === "boolean" || m.toLowerCase() === "true" || m.toLowerCase() === "false")
    };
    f.Widgets.Utilities.getDefaultWidgetContainerStyle = function (o, p, m) {
        m = f.Widgets.Utilities.isEmptyOrUndefined(m) ? "block" : m;
        var n = 'style="padding: 0; margin: 0; overflow: hidden; display: ' + m + "; ";
        if (/%/.test(String(o)) && /%/.test(String(p))) {
            n += "width: " + o + "; height: " + p + "; "
        } else {
            n += "width: " + o + "px; height: " + p + "px; "
        }
        n += "background: url(https://images-na.ssl-images-amazon.com/images/G/01/ep/loading-large._V364197283_.gif) no-repeat 50% 50%; ";
        n += 'position: relative;"';
        return n
    };
    f.Widgets.Utilities.createWidgetForm = function (w, x, p, v, u) {
        var q = f.jQuery("#" + w);
        var s = q.closest("form");
        var n;
        var o;
        if (typeof(s) !== "undefined" && s.length > 0) {
            x += "WidgetForm";
            n = f.Widgets.Utilities.getDefaultWidgetContainerStyle(p, v, "none");
            o = 'id="' + x + '"';
            var t = "<span " + n + " " + o + ">" + u + "</span>";
            f.jQuery(t).insertAfter(s)
        } else {
            var r = f.jQuery("#" + x);
            if (r.length === 0) {
                n = f.Widgets.Utilities.getDefaultWidgetContainerStyle(p, v);
                o = 'id="' + x + '"';
                var m = "<span " + n + " " + o + "></span>";
                q.html(m)
            }
            r = f.jQuery("#" + x);
            r.append(u)
        }
    };
    f.Widgets.Utilities.createIFrameString = function (o, m, n) {
        return f.Widgets.Utilities.createTransparentIframeStringWithSrc(o, "", m, n)
    };
    f.Widgets.Utilities.createTransparentIframeStringWithSrc = function (r, q, n, p) {
        var m = 'style="margin: 0; padding: 0; box-sizing: border-box; -moz-box-sizing: border-box; border: 1px solid #bbb; border-radius: 6px; overflow: hidden; position: absolute; z-index: 12; visibility: visible; top: 0; left: 0"';
        var o = '<iframe id="' + r + '" name="' + r + '" ';
        o += 'src="' + q + '" ';
        o += m;
        o += 'frameborder="no" ';
        o += 'scrolling="no" ';
        o += 'allowTransparency="true" ';
        o += "width=" + n + " height=" + p + " onload=\"OffAmazonPayments.Widgets.Utilities.show('" + r + "')\";></iframe>";
        return o
    };
    f.Widgets.Utilities.createIframeStringWithSrc = function (r, q, n, p) {
        var m = 'style="margin: 0; padding: 0; border-width: 0; overflow: hidden;"';
        var o = '<iframe id="' + r + '" name="' + r + '" ';
        o += 'src="' + q + '" ';
        o += m;
        o += 'frameborder="no" ';
        o += 'scrolling="no" ';
        o += 'allowtransparency="true" ';
        o += "width=" + n + " height=" + p + " onload=\"OffAmazonPayments.Widgets.Utilities.show('" + r + "')\";></iframe>";
        return o
    };
    f.Widgets.Utilities.hide = function (m) {
        f.jQuery("#" + m).css("visibility", "hidden")
    };
    f.Widgets.Utilities.show = function (m) {
        f.jQuery("#" + m).css("visibility", "visible")
    };
    f.Widgets.Utilities.createFormString = function (q, m, r, p) {
        var o = 'style="display: none; margin: 0; padding: 0; border-width: 0; overflow: hidden;"';
        var n = "<form " + o + ' id="' + q + '" ';
        n += 'action="' + m + '" ';
        n += 'method="POST" ';
        if (r !== null && r !== "" && r !== undefined) {
            n += 'target="' + r + '"'
        }
        n += ">";
        f.jQuery.each(p, function (s, t) {
            n += '<input type="hidden" name="' + s + '" value="' + t + '"/>'
        });
        n += "</form>";
        return n
    };
    f.Widgets.Utilities.isValidSizeValue = function (m) {
        if (m === undefined) {
            return false
        }
        if (m.toUpperCase().endsWith(l.constants.UNIT_PX)) {
            m = m.substring(0, m.length - l.constants.UNIT_PX.length)
        }
        if (m === null || typeof(m) === "undefined" || isNaN(m)) {
            return false
        }
        return true
    };
    f.Widgets.Utilities.verifySize = function (o, p, n, m) {
        if (!this.isValidSizeValue(o)) {
            return p
        }
        o = parseFloat(o);
        if (o < n) {
            return n
        }
        if (o > m) {
            return m
        }
        return o
    };
    f.Widgets.Utilities.sendOnErrorCallbackMessage = function (p, n, m) {
        var o = {};
        o.eventName = a.ON_ERROR;
        o.eventValue = m;
        o.error = (function (r, q) {
            return{getErrorCode: function () {
                return r
            }, getErrorMessage: function () {
                return q
            }}
        })(p, n);
        j.notifyListeners(o)
    };
    f.Widgets.Utilities.baseDomainsMatch = function (p, m) {
        if (typeof(p) !== "string" || typeof(m) !== "string") {
            return false
        }
        var n = true;
        var q = p.split(".");
        var o = m.split(".");
        if (q.length >= 2 && o.length >= 2) {
            n = (q[q.length - 1] === o[o.length - 1]) && (q[q.length - 2] === o[o.length - 2])
        }
        return n
    };
    f.Widgets.Utilities.formatMsg = function (m, n) {
        for (var o in n) {
            if (n.hasOwnProperty(o)) {
                m = m.replace(o, n[o])
            }
        }
        return m
    };
    f.Widgets.Utilities.buildParamNameValueMap = function (m, n) {
        var o = {};
        o[l.constants.PARAM_NAME] = m;
        o[l.constants.PARAM_VALUE] = n;
        return o
    };
    f.Widgets.Utilities.getValueBasedOnInput = function (m, o, n) {
        if (typeof o !== "undefined" && m.indexOf(o.toLowerCase()) > -1) {
            return o.toLowerCase()
        }
        return n
    };
    f.Widgets.Utilities.isMultiLanguageMVPSeller = function (n, m) {
        if (!f.Widgets.Utilities.isEmptyOrUndefined(n) && n.toLowerCase() === l.constants.MULTILANGUAGE_MVP_SELLER && !f.Widgets.Utilities.isEmptyOrUndefined(m.type) && f.Widgets.Utilities.isElementInArray(m.type.toLowerCase(), l.constants.MULTILANGUAGE_MVP_ALLOWED_BUTTON_TYPES)) {
            return true
        }
        return false
    };
    f.Widgets.Utilities.getLWAButtonPath = function (o, s, p, m) {
        var r = f.Widgets.Utilities.getLWAButtonBasePath(s);
        var q = "lwa/";
        if (m) {
            q = "donation/"
        }
        q += f.Widgets.Utilities.getValueBasedOnInput(l.constants.BUTTON_LWA_COLOR_SET, o.color, l.constants.BUTTON_DEFAULT_COLOR_LWA);
        q += "/";
        q += f.Widgets.Utilities.getValueBasedOnInput(l.constants.BUTTON_LWA_SIZE_SET, o.size, l.constants.BUTTON_DEFAULT_SIZE_LWA);
        q += "/";
        if (p && !f.Widgets.Utilities.isEmptyOrUndefined(o.language) && f.Widgets.Utilities.isElementInArray(o.language.toLowerCase(), l.constants.MULTILANGUAGE_ALLOWED_SELLER_LANGUAGE_CODES)) {
            return f.Widgets.Utilities.getLWAButtonPathForMVPSeller(o, s, q)
        }
        if (typeof o.type !== "undefined") {
            if (l.constants.BUTTON_LWA_TEXT_SET.indexOf(o.type.toLowerCase()) > -1) {
                q += l.constants.BUTTON_LWA_TEXT_IMAGE_SET[l.constants.BUTTON_LWA_TEXT_SET.indexOf(o.type.toLowerCase())]
            } else {
                q += l.constants.BUTTON_DEFAULT_TEXT
            }
        } else {
            q += l.constants.BUTTON_DEFAULT_TEXT
        }
        var n = r + q;
        return n
    };
    f.Widgets.Utilities.getLWAButtonBasePath = function (o) {
        var n = l.constants.BUTTON_BASE_PATH_PREFIX + l.constants.COUNTRY_CODE_TO_LANGUAGE_COUNTRY_MAP[l.constants.BUTTON_COUNTRY_CODE];
        var m = l.constants.REALM_TO_COUNTRY_CODE_MAP[o];
        if (m.toLowerCase() !== l.constants.BUTTON_COUNTRY_CODE.toLowerCase()) {
            n += "/" + o
        }
        n += l.constants.BUTTON_BASE_PATH_SUFFIX;
        return n
    };
    f.Widgets.Utilities.getLWAButtonPathForMVPSeller = function (o, r, n) {
        var m = l.constants.REALM_TO_LANGUAGE_COUNTRY_MAP[r];
        var q = l.constants.BUTTON_BASE_PATH_PREFIX + m.toLowerCase() + l.constants.BUTTON_BASE_PATH_SUFFIX;
        var p = f.Widgets.Utilities.getValueBasedOnInput(l.constants.BUTTON_LWA_TEXT_SET, o.type, l.constants.BUTTON_DEFAULT_TYPE);
        return q + n + l.constants.BUTTON_LWA_MULTILANGUAGE_SUPPORTED_TEXT_IMAGE_MAP[p]
    };
    f.Widgets.Utilities.getButtonPath = function (t, q) {
        var m = "";
        var o = "";
        var n = "";
        var p = "";
        if (t !== undefined) {
            m = f.Widgets.Utilities.getValueBasedOnInput(l.constants.BUTTON_COLOR_SET, t.color, l.constants.BUTTON_DEFAULT_COLOR);
            o = f.Widgets.Utilities.getValueBasedOnInput(l.constants.BUTTON_SIZE_SET, t.size, l.constants.BUTTON_DEFAULT_SIZE);
            n = f.Widgets.Utilities.getValueBasedOnInput(l.constants.BUTTON_BACKGROUND_SET, t.background, l.constants.BUTTON_DEFAULT_BACKGROUND)
        } else {
            m = l.constants.BUTTON_DEFAULT_COLOR;
            o = l.constants.BUTTON_DEFAULT_SIZE;
            n = l.constants.BUTTON_DEFAULT_BACKGROUND
        }
        if (f.ABTest.Utilities.isSellerInABTest(f.Widgets.Utilities.getCartOwnerId(), f.ABTest.Tests.Default)) {
            p = f.ABTest.Utilities.getButtonPath(m, o)
        } else {
            var s = l.constants.BUTTON_BASE_PATH;
            var r = "";
            if (q) {
                r = "donation/"
            } else {
                r = "pwa/"
            }
            r += m + "/" + o + "/" + n + "/";
            p = s + r
        }
        return p
    };
    f.Widgets.Utilities.isValidDocInclusion = function () {
        var n = true;
        try {
            var o = window.top.document.domain;
            var q = document.domain;
            n = f.Widgets.Utilities.baseDomainsMatch(o, q)
        } catch (p) {
            if (window.ueLogError) {
                var m = {logLevel: "ERROR", attribution: "Widget_core.js", message: "Error caught in isValidDocInclusion"};
                window.ueLogError(p, m)
            }
            n = false
        }
        return n
    };
    f.Widgets.Utilities.performContractAction = function (q, n) {
        var o = f.Widgets.Utilities.createIframeStringWithSrc(l.constants.CONTRACT_FRAME_ID, "", 0, 0);
        f.jQuery("#" + l.constants.CONTRACT_FRAME_ID).remove();
        f.jQuery("body").append(o);
        var m = l.constants.WIDGET_ENDPOINT + l.constants.INLINE_WIDGETS_URI;
        var p = f.Widgets.Utilities.createFormString(l.constants.CONTRACT_FORM_ID, m, l.constants.CONTRACT_FRAME_ID, q);
        f.jQuery("#" + l.constants.CONTRACT_FORM_ID).remove();
        f.jQuery("#" + n).append(p);
        f.jQuery("#" + l.constants.CONTRACT_FORM_ID).submit()
    };
    f.Widgets.Utilities.getAccessToken = function (p, o) {
        f.Widgets.Utilities.setLwADomain();
        var m = {scope: "payments:widget", interactive: "never"};
        var n = i().Login.authorize(m);
        n.onComplete(function (q) {
            if (q.error) {
                o(p, q.error)
            } else {
                o(p, q.access_token)
            }
        })
    };
    f.Widgets.Utilities.setLwaSandboxMode = function () {
        if (l.constants.IS_SANDBOX && typeof i() !== "undefined" && typeof i().Login !== "undefined") {
            i().Login.setSandboxMode(true)
        }
    };
    f.Widgets.Utilities.setLanguage = function (n, m) {
        if (typeof i() !== "undefined" && typeof i().Login !== "undefined") {
            var o = f.Widgets.Utilities.getLanguageForSeller(n, m);
            if (f.Widgets.Utilities.isSellerAllowedForMultiLanguage(n, m) && !f.Widgets.Utilities.isEmptyOrUndefined(m.language)) {
                i().Login.setLanguageHint(o)
            }
        }
    };
    f.Widgets.Utilities.setLwADomain = function () {
        if (typeof i() !== "undefined" && typeof i().Login !== "undefined") {
            i().Login.setDomain(l.constants.LWA_ENDPOINT)
        }
    };
    f.Widgets.Utilities.validationException = function () {
        return l.constants.PARAMETER_VALIDATION_FAILED_MSG
    };
    f.Widgets.Utilities.isSellerHidingButton = function (u) {
        var m = f.jQuery("#" + u).css("display");
        var r = f.jQuery("#" + u + " > img").css("display");
        var x = (m === "none" || r === "none");
        var o = f.jQuery("#" + u).css("opacity");
        var z = f.jQuery("#" + u + " > img").css("opacity");
        var y = (o === "0" || z === "0");
        var n = f.jQuery("#" + u).css("visibility");
        var t = f.jQuery("#" + u + " > img").css("visibility");
        var p = (n === "hidden" || t === "hidden");
        var q = f.jQuery("#" + u).css("position");
        var s = parseInt(f.jQuery("#" + u).css("left"));
        var w = parseInt(f.jQuery("#" + u).css("right"));
        var v = (q === "absolute" && (s < 0 || w < 0));
        return(x || y || p || v)
    };
    f.Widgets.Utilities.isSVGSupported = function () {
        return !!("createElementNS" in document && document.createElementNS(l.constants.SVG_NAMESPACE, "svg").createSVGRect)
    };
    f.Widgets.Utilities.isSellerAllowed = function (n, m) {
        if ((typeof m.height !== "undefined") || (typeof m.width !== "undefined")) {
            return true
        }
        return false
    };
    function c(n) {
        n = n.toLowerCase();
        var m = (n.indexOf("ipod") >= 0 || n.indexOf("iphone") >= 0 || n.indexOf("ipad") >= 0) && !n.match(/\sos\s*6_0/);
        return m === true
    }

    f.Widgets.Utilities.createSubclass = function (m) {
        function n() {
        }

        n.prototype = m;
        return new n()
    };
    f.Widgets.Utilities.imageInDOM = function (m) {
        return m !== undefined && m.width > 1 && m.height > 1
    };
    f.Widgets.Utilities.isElementInArray = function (m, n) {
        if (!f.Widgets.Utilities.isEmptyOrUndefined(m) && !f.Widgets.Utilities.isEmptyOrUndefined(n)) {
            return f.jQuery.inArray(m, n) >= 0
        }
        return false
    };
    f.Widgets.Utilities.removeWhiteSpacesInString = function (m) {
        if (m !== undefined) {
            var n = m.replace(/\s+/g, "");
            return n
        }
        return m
    };
    f.Widgets.Utilities.stringToArray = function (m) {
        var n = f.Widgets.Utilities.removeWhiteSpacesInString(m);
        return n.split(",")
    };
    f.Widgets.Utilities.shouldInvokeSetTimeoutOnSigninForUserAgent = c;
    h.exports = f.Widgets.Utilities
}, {"../widgets/MetricsCollector": 26, "./Constants": 9, "./EventTypes": 10, "./LwaLogin": 15, "./Mediator": 16, "./TaskQueue": 17, "./jquery": 23}], 19: [function (b, g, d) {
    var c = {Widgets: {}, jQuery: b("./jquery")};
    var l = b("./Utilities");
    var j = b("./Constants");
    var h = b("./LwaLogin");
    var k = b("./InlineWidgetError");
    var f = b("./InlineWidget");
    var i = b("./Mediator").instance;
    var a = b("./EventTypes");
    c.Widgets.Wallet = function (m) {
        f.call(this, m);
        this.type = j.others.WidgetTypes.Wallet;
        this.onPaymentSelect = m.onPaymentSelect;
        var n = this.design.width;
        var o = this.design.height;
        switch (this.getDisplayMode()) {
            case j.others.DisplayModes.read:
                if (this.design.checkWidth) {
                    if (n === undefined) {
                        k.RaiseMissingParameterError(this, l.buildParamNameValueMap("design.width", n))
                    } else {
                        this.design.width = l.verifySize(n, undefined, j.constants.WALLET_WIDGET.READ.min_width, j.constants.WALLET_WIDGET.READ.max_width);
                        k.RaiseOnErrorIfUndefined(this.design.width, j.constants.INVALID_PARAMETER_VALUE_MSG, l.buildParamNameValueMap("design.width", n), this)
                    }
                }
                if (this.design.checkHeight) {
                    if (o === undefined) {
                        k.RaiseMissingParameterError(this, l.buildParamNameValueMap("design.height", o))
                    } else {
                        this.design.height = l.verifySize(o, undefined, j.constants.WALLET_WIDGET.READ.min_height, j.constants.WALLET_WIDGET.READ.max_height);
                        k.RaiseOnErrorIfUndefined(this.design.height, j.constants.INVALID_PARAMETER_VALUE_MSG, l.buildParamNameValueMap("design.height", o), this)
                    }
                }
                break;
            case j.others.DisplayModes.edit:
                if (this.design.checkWidth) {
                    if (n === undefined) {
                        k.RaiseMissingParameterError(this, l.buildParamNameValueMap("design.width", n))
                    } else {
                        this.design.width = l.verifySize(n, undefined, j.constants.WALLET_WIDGET.EDIT.min_width, j.constants.WALLET_WIDGET.EDIT.max_width);
                        k.RaiseOnErrorIfUndefined(this.design.width, j.constants.INVALID_PARAMETER_VALUE_MSG, l.buildParamNameValueMap("design.width", n), this)
                    }
                }
                if (this.design.checkHeight) {
                    if (o === undefined) {
                        k.RaiseMissingParameterError(this, l.buildParamNameValueMap("design.height", o))
                    } else {
                        this.design.height = l.verifySize(o, undefined, j.constants.WALLET_WIDGET.EDIT.min_height, j.constants.WALLET_WIDGET.EDIT.max_height);
                        k.RaiseOnErrorIfUndefined(this.design.height, j.constants.INVALID_PARAMETER_VALUE_MSG, l.buildParamNameValueMap("design.height", o), this)
                    }
                }
                break
        }
        c.jQuery(this).bind(a.ON_PAYMENT_SELECT, this, this.onPaymentSelectHandler)
    };
    c.Widgets.Wallet.prototype = l.createSubclass(f.prototype);
    c.Widgets.Wallet.prototype.constructor = c.Widgets.Wallet;
    c.Widgets.Wallet.prototype.onPaymentSelectHandler = function (o) {
        var m = o.data;
        var n = m.eventValue;
        if (this.getID() === n) {
            if (this.onPaymentSelect !== undefined) {
                this.onPaymentSelect(m)
            }
        }
    };
    c.Widgets.Wallet.prototype.renderElements = function () {
        if (this.hasError !== undefined && this.hasError) {
            c.jQuery("#" + this.locationID).empty();
            return false
        }
        var m = this;
        l.setLwaSandboxMode();
        if (typeof h() !== "undefined" && typeof h().Login !== "undefined" && typeof h().Login.getClientId !== "undefined" && typeof h().Login.getClientId() !== "undefined") {
            l.getAccessToken(m, m.renderWallet)
        } else {
            m.renderWallet(m, "")
        }
    };
    c.Widgets.Wallet.prototype.renderWallet = function (r, u) {
        var m = r.getID() + "IFrame";
        var q = l.createIFrameString(m, r.design.width, r.design.height);
        var n = r.getID() + "Form";
        var p = j.constants.WIDGET_ENDPOINT + j.constants.INLINE_WIDGETS_URI;
        var s = {action: j.constants.WALLET_WIDGET_ACTION, referringURL: window.top.location, cartOwnerId: r.getSellerId(), marketplaceSellerId: r.getMarketplaceSellerId(), access_token: u, agreementType: r.agreementType, displayMode: r.getDisplayMode(), widgetId: r.getID(), widgetWidth: r.design.width, widgetHeight: r.design.height, widgetDesignMode: r.design.designMode, widgetPadding: r.design.padding, browserWindowHeight: r.getBrowserWindowHeight(), paymentInstrumentsDisplayOptions: r.getPaymentInstrumentsDisplayOptions(), clientId: l.getClientId()};
        if (typeof r.getContractId() !== "undefined" && r.getContractId() !== null) {
            s.contractId = r.getContractId()
        } else {
            if (typeof r.onOrderReferenceCreate === "function") {
                s.createContract = true
            } else {
                if (typeof r.onBillingAgreementCreate === "function") {
                    s.createContract = true
                } else {
                    if (typeof r.onReady === "function") {
                        s.createContract = true
                    }
                }
            }
        }
        k.isMissingParameter("sellerId", r.getSellerId(), r);
        if (r.error && r.error.errorType) {
            s.clientErrorType = r.error.errorType;
            s.clientErrorElementName = r.error.errorElementName;
            s.clientErrorElementValue = r.error.errorElementValue;
            s.clientErrorMessage = r.error.errorMessage
        }
        var o = l.createFormString(n, p, m, s);
        c.jQuery("#" + n).remove();
        l.createWidgetContainer(r.locationID, r.getID(), r.design.width, r.design.height, q, r.type);
        l.createWidgetForm(r.locationID, r.getID(), r.design.width, r.design.height, o, n);
        var t = i.getAddressWidgets();
        if (j.constants.BRIDGE_LOAD_COMPLETE) {
            if (t.length === 0 || t[0].rendered === true) {
                c.jQuery("#" + n).submit()
            } else {
                j.constants.TIMEOUT_ID = window.setTimeout(function () {
                    c.jQuery("#" + n).submit()
                }, 5000)
            }
        }
    };
    g.exports = c.Widgets.Wallet
}, {"./Constants": 9, "./EventTypes": 10, "./InlineWidget": 12, "./InlineWidgetError": 13, "./LwaLogin": 15, "./Mediator": 16, "./Utilities": 18, "./jquery": 23}], 20: [function (f, d, g) {
    var i = {jQuery: f("./jquery"), Widgets: {}};
    var b = f("./Utilities");
    var c = f("./Constants");
    var a = f("./Mediator").instance;
    var h = f("./EventTypes");
    i.Metrics = f("../widgets/MetricsCollector");
    i.Widgets.Widget = function (k) {
        this.collector = new i.Metrics.Collector();
        this.BUTTON_RUNNING_TIME_A = (new Date()).getTime();
        var j = c.constants.WIDGETID_PREFIX + a.generateUniqWidgetID();
        this.getID = function () {
            return j
        };
        this.getWidgetCount = function () {
            return a.getNumWidgetCount()
        };
        a.register(this);
        i.jQuery(this).bind(h.DOCUMENT_READY, this, this.documentReadyEventHandler);
        this.getSellerId = function () {
            if (b.isEmptyOrUndefined(k.sellerId)) {
                return""
            }
            return k.sellerId
        };
        this.getMarketplaceSellerId = function () {
            if (b.isEmptyOrUndefined(k.marketplaceSellerId)) {
                return""
            }
            return k.marketplaceSellerId
        }
    };
    i.Widgets.Widget.prototype.renderImpl = function () {
        this.renderElements();
        if (this.type === c.others.WidgetTypes.Button) {
            this.BUTTON_RUNNING_TIME_D = (new Date()).getTime();
            this.bindClickHandler(this)
        }
    };
    i.Widgets.Widget.prototype.removeEventListener = i.Widgets.Widget.prototype.detachEvent = function () {
    };
    i.Widgets.Widget.prototype.bind = function (j) {
        var k = b.isValidDocInclusion();
        if (k) {
            this.locationID = j;
            this.renderRequested = true;
            if (typeof this.design !== "undefined" && this.design.designMode !== null && this.design.designMode !== undefined) {
                if ((this.design.designMode === "smartphoneCollapsible" || this.design.designMode === "smartphoneNonCollapsible") && (i.jQuery("#" + j).width() !== null)) {
                    this.design.width = i.jQuery("#" + j).width()
                }
            }
            if (this.type !== c.others.WidgetTypes.Button) {
                this.renderImpl()
            } else {
                if (i.jQuery("#" + this.locationID).length > 0) {
                    this.renderImpl();
                    i.jQuery(this).unbind(h.DOCUMENT_READY, this.documentReadyEventHandler)
                }
            }
        }
        return this
    };
    i.Widgets.Widget.prototype.renderElements = function () {
        return""
    };
    i.Widgets.Widget.prototype.bindClickHandler = function () {
        return""
    };
    i.Widgets.Widget.prototype.documentReadyEventHandler = function (k, j) {
        if (this.renderRequested) {
            j.renderImpl()
        }
    };
    i.Widgets.Widget.prototype.getLocation = function () {
        return this.locationID
    };
    i.Widgets.Widget.prototype.getWidgetType = function () {
        return this.type
    };
    i.Widgets.Widget.prototype.encodeShippingRestrictions = function () {
        var j = JSON.stringify(this.shippingRestrictions);
        var k = j.replace(/\"/g, "&quot;");
        return k
    };
    d.exports = i.Widgets.Widget
}, {"../widgets/MetricsCollector": 26, "./Constants": 9, "./EventTypes": 10, "./Mediator": 16, "./Utilities": 18, "./jquery": 23}], 21: [function (d, c, f) {
    var h = {Widgets: {}, jQuery: d("./jquery")};
    var g = d("./InlineWidgetError");
    var a = d("./Utilities");
    var b = d("./Constants");
    h.Widgets.Design = function (i, j) {
        if (typeof(i) !== "undefined") {
            this.checkWidth = true;
            this.checkHeight = true;
            this.name = i.name;
            this.colorTheme = i.colorTheme;
            if (i.size !== null && i.size !== undefined) {
                this.width = i.size.width;
                this.height = i.size.height
            }
            if (i.designMode !== null && i.designMode !== undefined) {
                if (i.designMode === "smartphoneCollapsible" || i.designMode === "smartphoneNonCollapsible" || i.designMode === "responsive") {
                    this.designMode = i.designMode;
                    g.SetErrorIfParameterExists("design.width", this.width, null, j, "smartphone");
                    this.width = document.body.clientWidth;
                    this.checkWidth = false;
                    if (i.padding !== null && i.padding !== undefined) {
                        if (a.isValidSizeValue(i.padding)) {
                            this.padding = parseFloat(i.padding)
                        } else {
                            g.RaiseOnError(b.constants.INVALID_PARAMETER_VALUE_MSG, a.buildParamNameValueMap("design.padding", i.padding), j)
                        }
                    }
                } else {
                    j.error = new g(b.constants.INVALID_PARAMETER_VALUE, null, "design.designMode", i.designMode)
                }
                if (i.designMode === "smartphoneCollapsible") {
                    this.height = 135;
                    this.checkHeight = false
                } else {
                    if (i.designMode === "responsive") {
                        this.height = "100%";
                        this.width = "100%";
                        this.checkHeight = false;
                        this.checkWidth = false
                    }
                }
            } else {
                this.designMode = "";
                g.SetErrorIfParameterExists("design.padding", i.padding, null, j, "nonSmartphone")
            }
        } else {
            g.RaiseOnErrorIfUndefined(i, b.constants.INVALID_PARAMETER_VALUE_MSG, a.buildParamNameValueMap("design", ""), j)
        }
    };
    c.exports = h.Widgets.Design
}, {"./Constants": 9, "./InlineWidgetError": 13, "./Utilities": 18, "./jquery": 23}], 22: [function (b, a, c) {
    a.exports = function () {
        if (window.OffAmazonPayments) {
            return window.OffAmazonPayments.ZERO_TIME
        } else {
            return 0
        }
    }
}, {}], 23: [function (c, b, d) {
    var a = (window.$);
    var f = a.noConflict(true);
    b.exports = f
}, {}], 24: [function (f, d, g) {
    if (!i || typeof(i) === "undefined") {
        var i = {};
        i.jQuery = f("../core/jquery")
    }
    var b = f("../core/Utilities");
    var c = f("../core/Constants");
    var a = f("../core/ButtonCallbacks");
    i.ABTest = i.ABTest || {};
    i.ABTest.Utilities = i.ABTest.Utilities || {};
    i.ABTest._bepCallback;
    i.ABTest.Constants = {};
    i.ABTest.Constants.IMG_PATH_PREFIX = "ABTesting";
    i.ABTest.Constants.ABTEST_URI = "/gp/widgets/abtests";
    i.ABTest.Constants.TREATMENT_C = "C";
    i.ABTest.Constants.TREATMENT_T1 = "T1";
    i.ABTest.Constants.COOKIE_TIME_TO_LIVE = 24;
    i.ABTest.Utilities.createCookieForABTest = function (k, j) {
        if (k != undefined && j != undefined) {
            b.createCookie(j, k, i.ABTest.Constants.COOKIE_TIME_TO_LIVE)
        }
    };
    i.ABTest.Utilities.buildQueryParamMap = function (l, k, m) {
        var j = l || {};
        j[k] = m;
        return j
    };
    function h(n) {
        var l = "?";
        var m = true;
        for (var j in n) {
            if (n.hasOwnProperty(j)) {
                var k = n[j];
                if (m) {
                    l += j + "=" + encodeURIComponent(k);
                    m = false
                } else {
                    l += "&" + j + "=" + encodeURIComponent(k)
                }
            }
        }
        return l
    }

    i.ABTest.Utilities.ajaxCallForJSONPResponse = function (l, k, j) {
        b.jsonp({url: l, success: k, error: j})
    };
    i.ABTest.Utilities.getExperimentValueAndCallback = function (o, m, n) {
        var s = i.ABTest.Constants.TREATMENT_C;
        var j = "merchantId", l = "abtestName", w = "treatment";

        function t(x) {
            var y = new Array(l, j, w);
            if (!b.isEmptyOrUndefined(x)) {
                for (var z = 0; z < y.length; z++) {
                    if (!x.hasOwnProperty(y[z])) {
                        return false
                    }
                }
                if (x.merchantId === o && x.abtestName === m.testName) {
                    return true
                }
            }
            return false
        }

        function u(x) {
            if (t(x)) {
                s = x.treatment
            }
            if (typeof n === "function") {
                n(s)
            }
            if (!b.isEmptyOrUndefined(m.cookieName)) {
                r(x)
            }
        }

        function r(x) {
            if (t(x)) {
                i.ABTest.Utilities.createCookieForABTest(x.treatment, m.cookieName)
            } else {
                if (b.isCookiePresent(m.cookieName)) {
                    b.eraseCookie(m.cookieName)
                }
            }
            i.ABTest.triggerBEPCallback()
        }

        function k() {
            if (typeof n === "function") {
                n(s)
            }
            if (!b.isEmptyOrUndefined(m) && !b.isEmptyOrUndefined(m.cookieName)) {
                p(m.cookieName)
            }
        }

        function p(x) {
            b.eraseCookie(x);
            i.ABTest.triggerBEPCallback()
        }

        if (b.isEmptyOrUndefined(m) || b.isEmptyOrUndefined(o)) {
            k()
        } else {
            var v, q;
            v = i.ABTest.Utilities.buildQueryParamMap(v, j, o);
            v = i.ABTest.Utilities.buildQueryParamMap(v, l, m.testName);
            q = c.constants.BUTTON_ENDPOINT + i.ABTest.Constants.ABTEST_URI + b.createQueryString(v);
            i.ABTest.Utilities.ajaxCallForJSONPResponse(q, u, k)
        }
    };
    i.ABTest.Utilities.getExperimentValueForABTestDefault = function (j) {
        if (b.imageInDOM(j)) {
            return i.ABTest.Constants.TREATMENT_C
        } else {
            return i.ABTest.Constants.TREATMENT_T1
        }
    };
    i.ABTest.Utilities.getButtonPath = function (j, k) {
        var m = c.constants.BUTTON_ENDPOINT + c.constants.BUTTON_URI;
        var l = "?sellerId=" + c.constants.CartOwnerId + "&size=" + k + "&color=" + j;
        return m + l
    };
    i.ABTest.triggerBEPCallback = function () {
        if (typeof i.ABTest._bepCallback === "function") {
            i.ABTest._bepCallback.call()
        }
    };
    i.ABTest.cookieReady = function (j) {
        if (typeof j === "function") {
            if (i.ABTest.Utilities.isSellerInABTest(b.getCartOwnerId(), i.ABTest.Tests.Default) || i.ABTest.Utilities.isSellerInABTest(b.getCartOwnerId(), i.ABTest.Tests.LPA_BUTTONS)) {
                i.ABTest._bepCallback = j
            } else {
                j()
            }
        }
    };
    i.ABTest.Utilities.bindButtonOnloadActions = function (j) {
        var k = false;
        if (!j.complete) {
            i.jQuery(j).load(function () {
                if (!k) {
                    k = true;
                    i.ABTest.Utilities.buttonOnloadActions(j)
                }
            })
        } else {
            if (!k && (j.height > 0 || j.width > 0)) {
                k = true;
                i.ABTest.Utilities.buttonOnloadActions(j)
            }
        }
    };
    i.ABTest.Utilities.buttonOnloadActions = function (j) {
        i.ABTest.Utilities.createCookieForABTest(i.ABTest.Utilities.getExperimentValueForABTestDefault(j), i.ABTest.Tests.Default.cookieName);
        i.ABTest.triggerBEPCallback()
    };
    i.ABTest.Utilities.getSellersForABTest = function (j) {
        if (!b.isEmptyOrUndefined(j) && !b.isEmptyOrUndefined(j.sellersInTest)) {
            return b.stringToArray(j.sellersInTest)
        }
        return[]
    };
    i.ABTest.Utilities.isSellerInABTest = function (k, j) {
        if (!b.isEmptyOrUndefined(j)) {
            var l = i.ABTest.Utilities.getSellersForABTest(j);
            if (!b.isEmptyOrUndefined(l)) {
                return b.isElementInArray(k, l)
            }
        }
        return false
    };
    i.ABTest.Utilities.isAllowedTreatmentforABTest = function (j, l) {
        var k = b.stringToArray(l);
        return b.isElementInArray(j, k)
    };
    i.ABTest.Utilities._abTestAfter = function (k, j) {
        for (var m in i.ABTest.Tests) {
            var l = i.ABTest.Tests[m];
            if (i.ABTest.Utilities.isSellerInABTest(k, l)) {
                i.ABTest.Utilities.getExperimentValueAndCallback(k, l, l.callback(j))
            }
        }
    };
    i.ABTest.Utilities._abTestBefore = function (k, j) {
        for (var m in i.ABTest.Tests) {
            var l = i.ABTest.Tests[m];
            if (i.ABTest.Utilities.isSellerInABTest(k, l)) {
                i.jQuery("#" + j).hide()
            } else {
                if (b.isCookiePresent(l.cookieName)) {
                    b.eraseCookie(l.cookieName)
                }
            }
        }
    };
    i.ABTest.Utilities._LPA_BUTTONS_AbTestCallback = function (j) {
        return function (k) {
            if (!i.ABTest.Utilities.isAllowedTreatmentforABTest(k, i.ABTest.Tests.LPA_BUTTONS.allowedTreatments)) {
                i.jQuery("#" + j).show()
            }
        }
    };
    i.ABTest.Utilities._MULTI_BUTTONS_AbTestCallback = function (j) {
        return function (l) {
            function n(p) {
                return p.length === 2
            }

            function k(r) {
                var p = r.getElementsByTagName("img");
                for (var q = 0; q < p.length; q++) {
                    imgEle = p[q];
                    imgSrc = imgEle.getAttribute("src");
                    if (b.isAmazonPaymentsButtonImage(imgSrc)) {
                        m(imgSrc)
                    }
                }
            }

            function m(r) {
                var s = "offAmazonPayments";
                var q = r.split(s);
                if (n(q)) {
                    var p = q[0] + s + "/" + i.ABTest.Constants.IMG_PATH_PREFIX + "/" + i.ABTest.Tests.MULTI_BUTTONS.testName + "/" + l + q[1];
                    imgEle.setAttribute("src", p)
                }
            }

            if (i.ABTest.Utilities.isAllowedTreatmentforABTest(l, i.ABTest.Tests.MULTI_BUTTONS.allowedTreatments)) {
                var o = document.getElementById(j);
                k(o)
            }
            i.jQuery("#" + j).show()
        }
    };
    a.before_callbacks.push(i.ABTest.Utilities._abTestBefore);
    a.after_callbacks.push(i.ABTest.Utilities._abTestAfter);
    i.ABTest.Tests = {Default: {testName: "DEFAULT", cookieName: "amz_abtest_default", sellersInTest: "A3NRRKVEBWDYUW,ANPQEYEV86OXS,A31ZWXEAMG3ZFG,A2SKTN79ZRJTQ8", callback: ""}, LPA_BUTTONS: {testName: "LPA_BUTTONS", cookieName: "amz_abtest_default", allowedTreatments: i.ABTest.Constants.TREATMENT_T1, sellersInTest: "", callback: i.ABTest.Utilities._LPA_BUTTONS_AbTestCallback}, MULTI_BUTTONS: {testName: "MULTI_BUTTONS", cookieName: "", allowedTreatments: "C,T1,T2,T3,T4", sellersInTest: "APAEO1IILS0MF,A1RXY0VIYAH206,A2EWAEGWK71Y5C,A1K4HEDARAOQZI,A2YYLTHH1BPNIC,A1XOCBC637EZ46,A3DJ8TIR5ACQFG,A25IPRDQTY26CM,AO39K3BLGGXL7,A2UEG6SE2PLPLT", callback: i.ABTest.Utilities._MULTI_BUTTONS_AbTestCallback}};
    d.exports = {ABTest: i.ABTest, createQueryString: h}
}, {"../core/ButtonCallbacks": 5, "../core/Constants": 9, "../core/Utilities": 18, "../core/jquery": 23}], 25: [function (c, b, d) {
    if (!g || typeof(g) === "undefined") {
        var g = {}
    }
    var h = c("../core/jquery");
    var a = c("../core/Constants");
    var f = c("../core/LPAMetricsHelper");
    g.DynamicButton = g.DynamicButton || {};
    g.DynamicButton.Utilities = g.DynamicButton.Utilities || {};
    g.DynamicButton.Constants = {BUTTON_SCRIPT_BASE_PATH: "https://images-na.ssl-images-amazon.com/images/G/01/EP/offAmazonPayments/live/prod/js/", USER_REQUESTED_DEFAULT_SIZE_PX: 0, DEFAULT_SMILEY_WIDTH_PX: 20.2, DEFAULT_SMILEY_HEIGHT_PX: 21.21, DEFAULT_SANDBOX_WATERMARK_HEIGHT_PX: 21, SMILEY_VERTICAL_POSITION_PCT: 17.67, TEXT_VERTICAL_POSITION_PCT: 33, SANDBOX_WATERMARK_VERTICAL_POSITION_PCT: 66, CONSTRAINT_MIN_HEIGHT_PX: 34, MANDATORY_BUFFER_PX: 2, WIDTH_INDEX: 0, HEIGHT_INDEX: 1, BGCOLOR_START_INDEX: 0, BGCOLOR_END_INDEX: 1, BGCOLOR_BORDER_INDEX: 2, STANDARD_SPACING_DIVIDER: 4, SPACING_TUNER_MULTIPLIER: 0.85, DEFAULT_BACKGROUND_COLOR: "Gold", DEFAULT_SIZE: "medium", DEFAULT_TYPE: "LwA", TEXT_INDEX_FOR_ONLY_SMILEY_BUTTON: 7, RATIO_INDEX: 0, SCALEX_INDEX: 1, SCALEY_INDEX: 2};
    g.DynamicButton.Constants.ButtonCount = 0;
    g.DynamicButton.Constants.BGCOLOR_ARRAY = [
        ["#FAE69B", "#EFC332", "#AA8426"],
        ["#FEFEFE", "#E2E2E2", "#BBBBBB"],
        ["#7F8891", "#434B57", "#313142"]
    ];
    g.DynamicButton.Constants.BUTTON_SIZE_WxH_ARRAY = [
        [
            [76, 32],
            [101, 46],
            [152, 64],
            [202, 92]
        ],
        [
            [156, 32],
            [174, 41],
            [312, 64],
            [390, 92]
        ],
        [
            [72, 30],
            [90, 45],
            [144, 60],
            [180, 90]
        ],
        [
            [148, 30],
            [200, 45],
            [296, 60],
            [400, 90]
        ],
        [
            [120, 35],
            [150, 50],
            [240, 70],
            [300, 100]
        ],
        [
            [168, 30],
            [253, 45],
            [338, 60],
            [505, 90]
        ],
        [
            [134, 22],
            [150, 30],
            [270, 44],
            [300, 60]
        ],
        [
            [32, 32],
            [46, 46],
            [64, 64],
            [92, 92]
        ]
    ];
    g.DynamicButton.Constants.BUTTON_ASPECT_RATIO_DESKTOP = [
        [0.421, 0.205, 0.416, 0.2027, 0.35, 0.178, 0.262, 1],
        [0.421, 0.205, 0.3, 0.2027, 0.35, 0.21, 0.163, 1],
        [0.2, 0.125, 0.35, 0.2027, 0.23, 0.135, 0.23, 1],
        [0.3, 0.165, 0.35, 0.202, 0.3, 0.165, 0.175, 1],
        [0.38, 0.205, 0.38, 0.2027, 0.35, 0.18, 0.22, 1],
        [0.421, 0.157, 0.416, 0.155, 0.35, 0.178, 0.262, 1]
    ];
    g.DynamicButton.Constants.BUTTON_ASPECT_RATIO_TOUCH = [
        [0.455, 0.234, 0.5, 0.225, 0.33, 0.178, 0.272, 1],
        [0.455, 0.235, 0.326, 0.215, 0.33, 0.178, 0.2, 1],
        [0.2, 0.125, 0.35, 0.2027, 0.23, 0.135, 0.23, 1],
        [0.3, 0.165, 0.35, 0.202, 0.3, 0.165, 0.175, 1],
        [0.38, 0.205, 0.38, 0.2027, 0.35, 0.18, 0.22, 1],
        [0.455, 0.162, 0.5, 0.155, 0.33, 0.178, 0.272, 1]
    ];
    g.DynamicButton.Constants.TEXT_SIZE_WxH_ARRAY = [
        [
            [149, 58],
            [503, 58],
            [104, 58],
            [545, 58],
            [196, 49],
            [550, 49],
            [60, 10],
            [0, 0]
        ],
        [
            [149, 58],
            [474, 58],
            [246, 49],
            [572, 57],
            [238, 59],
            [567, 60],
            [120, 12],
            [0, 0]
        ],
        [
            [428, 43],
            [800, 45],
            [155, 53],
            [523, 53],
            [322, 44],
            [693, 42],
            [337, 43],
            [0, 0]
        ],
        [
            [180, 42],
            [528, 43],
            [181, 53],
            [523, 53],
            [185, 44],
            [528, 42],
            [508, 45],
            [0, 0]
        ],
        [
            [140, 53],
            [490, 53],
            [152, 53],
            [493, 53],
            [160, 45],
            [499, 45],
            [355, 45],
            [0, 0]
        ],
        [
            [149, 58],
            [825, 58],
            [104, 58],
            [870, 58],
            [196, 49],
            [550, 49],
            [60, 10],
            [0, 0]
        ]
    ];
    g.DynamicButton.Constants.TEXT_PATH_ADJUSTMENT = [
        [
            [1.1, 0, -29],
            [1, 0, -30],
            [1.2, 0, -12],
            [1.15, 0, -12],
            [1, 0, -28],
            [1, 0, -28],
            [1.1, -61, -73],
            [0, 0, 0]
        ],
        [
            [1.1, 0, -29],
            [1, 0, -30],
            [1, 0, -30],
            [1, 0, -30],
            [1, 0, -28],
            [1, 0, -28],
            [1.1, -91, -497],
            [0, 0, 0]
        ],
        [
            [1, -838, -758],
            [1, -837, -331],
            [1, -838, -548],
            [1, -853, -162],
            [1, -970, -1405],
            [1, -969, -1576],
            [1, -965, -1790],
            [0, 0, 0]
        ],
        [
            [1, -2168, -759],
            [1, -2169, -332],
            [1, -2174, -548],
            [1, -2161, -162],
            [1, -2050, -1417],
            [1, -2048, -1587],
            [1, -2044, -1802],
            [0, 0, 0]
        ],
        [
            [1, -3630, -759],
            [1, -3630, -332],
            [1, -3629, -548],
            [1, -3630, -162],
            [1, -2969, -1417],
            [1, -2973, -1587],
            [1, -2965, -1802],
            [0, 0, 0]
        ],
        [
            [1.1, 0, -29],
            [2.505, 0, -1.054],
            [1.2, 0, -12],
            [2.48, 0, -0.0831],
            [1, 0, -28],
            [1, 0, -28],
            [1.1, -61, -73],
            [0, 0, 0]
        ]
    ];
    g.DynamicButton.Constants.FILEPATH_FOR_TEXT_SVG = [
        ["buttons_en/text_svg_login_en.js", "buttons_en/text_svg_loginwithamazon_en.js", "buttons_en/text_svg_pay_en.js", "buttons_en/text_svg_paywithamazon_en.js", "buttons_en/text_svg_donate_en.js", "buttons_en/text_svg_donatewithamazon_en.js", "buttons_en/text_svg_editorupdate_en.js"],
        ["buttons_de/text_svg_login_de.js", "buttons_de/text_svg_loginwithamazon_de.js", "buttons_de/text_svg_pay_de.js", "buttons_de/text_svg_paywithamazon_de.js", "buttons_de/text_svg_donate_de.js", "buttons_de/text_svg_donatewithamazon_de.js", "buttons_de/text_svg_editorupdate_de.js"],
        ["buttons_fr/text_svg_login_fr.js", "buttons_fr/text_svg_loginwithamazon_fr.js", "buttons_fr/text_svg_pay_fr.js", "buttons_fr/text_svg_paywithamazon_fr.js", "buttons_fr/text_svg_donate_fr.js", "buttons_fr/text_svg_donatewithamazon_fr.js", "buttons_fr/text_svg_editorupdate_fr.js"],
        ["buttons_it/text_svg_login_it.js", "buttons_it/text_svg_loginwithamazon_it.js", "buttons_it/text_svg_pay_it.js", "buttons_it/text_svg_paywithamazon_it.js", "buttons_it/text_svg_donate_it.js", "buttons_it/text_svg_donatewithamazon_it.js", "buttons_it/text_svg_editorupdate_it.js"],
        ["buttons_es/text_svg_login_es.js", "buttons_es/text_svg_loginwithamazon_es.js", "buttons_es/text_svg_pay_es.js", "buttons_es/text_svg_paywithamazon_es.js", "buttons_es/text_svg_donate_es.js", "buttons_es/text_svg_donatewithamazon_es.js", "buttons_es/text_svg_editorupdate_es.js"],
        ["buttons_jp/text_svg_login_jp.js", "buttons_jp/text_svg_loginwithamazon_jp.js", "buttons_jp/text_svg_pay_jp.js", "buttons_jp/text_svg_paywithamazon_jp.js", "buttons_jp/text_svg_donate_jp.js", "buttons_jp/text_svg_donatewithamazon_jp.js", "buttons_jp/text_svg_editorupdate_jp.js"]
    ];
    g.DynamicButton.Constants.A_WITH_SMILEY_SVG = "<g id='a-smile-22x23-svgtest' sketch:type='MSLayerGroup'><g id='Fill-1-+-Fill-2-+-Fill-3' sketch:type='MSShapeGroup'><g id='largearrowtest'><path d='M18.0205355,17.7001083 C15.8375936,19.8531453 12.6735141,21 9.94880581,21 C6.12995073,21 2.69159865,19.1113744 0.0889082165,15.9706025 C-0.116327928,15.7235978 0.0655393031,15.3870055 0.312161615,15.578006 C3.1200882,17.7621669 6.59251251,19.0772232 10.1775893,19.0772232 C12.5973421,19.0772232 15.2564034,18.408201 17.7033605,17.0179364 C18.072625,16.8084885 18.3826645,17.344974 18.0205355,17.7001083' id='Fill-1'></path><path d='M19.2496138,16.3784711 C18.9033645,15.9727011 16.9612157,16.1863688 16.0881456,16.2816746 C15.8241916,16.3108924 15.7817937,16.1004048 16.0208525,15.9472597 C17.5704405,14.9519654 20.1097472,15.2385783 20.4054452,15.5724963 C20.7027739,15.9076069 20.3271722,18.2354925 18.874447,19.3461675 C18.6516951,19.5173005 18.439597,19.425473 18.5380905,19.1997802 C18.8650977,18.4552225 19.5965154,16.7842411 19.2496138,16.3784711' id='Fill-2'></path><path d='M14.9183645,15.2944706 C14.7291152,15.4566817 14.4559166,15.4672362 14.2454983,15.3577113 C13.2961629,14.6084259 13.1284461,14.261251 12.6083058,13.5473493 C11.042979,15.066337 9.93455785,15.5217391 7.90660145,15.5217391 C5.50487092,15.5217391 3.63636364,14.1115843 3.63636364,11.2887656 C3.63636364,9.08373326 4.89160514,7.58542207 6.6784345,6.85084385 C8.2262265,6.20277819 10.388102,6.08486156 12.0416482,5.90976012 L12.0416482,5.55713489 C12.0416482,4.90950179 12.0957065,4.14542278 11.6958572,3.58534041 C11.3486125,3.08728755 10.681561,2.88095507 10.0940069,2.88095507 C9.00648229,2.88095507 8.03906686,3.41214225 7.80166486,4.51128444 C7.75251275,4.7567206 7.56453543,4.99878277 7.30541927,5.01124058 L4.54190736,4.72557607 C4.3087755,4.67695601 4.0475697,4.49709638 4.11561949,4.15865921 C4.75187139,0.964182585 7.78058669,0 10.4944014,0 C11.8819266,0 13.696103,0.35219267 14.789079,1.35297007 C16.1767859,2.58707187 16.0450473,4.23383863 16.0450473,6.02655209 L16.0450473,10.2582279 C16.0450473,11.5314334 16.6008932,12.0892664 17.1210335,12.7749651 C17.3050132,13.0219584 17.3438988,13.3169663 17.1124023,13.4967394 C16.5289367,13.9615715 15.4932898,14.8178729 14.9259054,15.3003535 L14.9183645,15.2944706 Z M12.1816051,8.78803298 C12.1816051,9.81572532 12.2100293,10.6702186 11.6098116,11.5833964 C11.1248483,12.3268174 10.351652,12.7826087 9.49542198,12.7826087 C8.32185346,12.7826087 7.63636329,12.0114826 7.63636329,10.8712907 C7.63636329,8.62558019 9.97220853,8.2173913 12.1816051,8.2173913 L12.1816051,8.78803298 Z' id='Fill-3'></path></g></g></g>";
    g.DynamicButton.Constants.SANDBOX_WATERMARK_SVG = "<g id='sandbox-wrapper' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Sandbox-watermark' sketch:type='MSLayerGroup'><rect id='Rectangle-31' stroke='#F30B08' fill='#FFFFFF' sketch:type='MSShapeGroup' x='1' y='1' width='19' height='19' rx='4'></rect><text id='S' sketch:type='MSTextLayer' font-size='17' font-weight='620' letter-spacing='0.70' fill='#FF0000'><tspan x='5.5' y='16'>S</tspan></text></g></g></g></svg>";
    g.DynamicButton.Utilities.ButtonSpecification = function (n, o, m, k, l, j, p, i) {
        this.text = n;
        this.size = o;
        this.language = j;
        this.bgColor = p;
        this.textColor = i;
        this.heightRequested = m;
        this.widthRequested = k;
        this.isAspectRatioToBeMaintained = l;
        this.smileyHorizontalPositionInPercentage = 0;
        this.textHorizontalPositionInPercentage = 0;
        this.smileyVerticalPositionInPercentage = g.DynamicButton.Constants.SMILEY_VERTICAL_POSITION_PCT;
        this.textVerticalPositionInPercentage = g.DynamicButton.Constants.TEXT_VERTICAL_POSITION_PCT;
        this.textHeightInPx = 0;
        this.textWidthInPx = 0;
        if (this.size % 2 === 0) {
            this.aspectRatio = g.DynamicButton.Constants.BUTTON_ASPECT_RATIO_DESKTOP[this.language][this.text]
        } else {
            this.aspectRatio = g.DynamicButton.Constants.BUTTON_ASPECT_RATIO_TOUCH[this.language][this.text]
        }
        if (!(this.heightRequested === 0 && this.widthRequested === 0)) {
            this.aspectRatio = g.DynamicButton.Constants.BUTTON_ASPECT_RATIO_DESKTOP[this.language][this.text]
        }
        if (this.text === g.DynamicButton.Constants.TEXT_INDEX_FOR_ONLY_SMILEY_BUTTON) {
            this.isTextOnButton = false
        } else {
            this.isTextOnButton = true
        }
        this.smileyTransformationRatio = 0;
        this.buttonHeightInPx = 0;
        this.buttonWidthInPx = 0;
        this.input = {};
        this.sellerId;
        g.DynamicButton.Constants.ButtonCount += 1;
        this.buttonCount = g.DynamicButton.Constants.ButtonCount
    };
    g.DynamicButton.Utilities.calculateSpacingWithText = function (n) {
        n.textWidthInPx = (g.DynamicButton.Constants.TEXT_SIZE_WxH_ARRAY[n.language][n.text][g.DynamicButton.Constants.WIDTH_INDEX] / g.DynamicButton.Constants.TEXT_SIZE_WxH_ARRAY[n.language][n.text][g.DynamicButton.Constants.HEIGHT_INDEX]) * n.textHeightInPx;
        var j = g.DynamicButton.Utilities.getSmileyTextSpacingInPx(n.buttonHeightInPx);
        var i = g.DynamicButton.Constants.DEFAULT_SMILEY_WIDTH_PX * n.smileyTransformationRatio;
        var m = g.DynamicButton.Utilities.getButtonPaddingInPx(j);
        var k = i + j + n.textWidthInPx + m * 2;
        var l = n.buttonWidthInPx / 2 - k / 2;
        n.smileyHorizontalPositionInPercentage = (l + m / 2) / n.buttonWidthInPx * 100;
        n.textHorizontalPositionInPercentage = (l + m / 2 + i + j) / n.buttonWidthInPx * 100;
        return n
    };
    g.DynamicButton.Utilities.calculateSpacingWithoutText = function (k) {
        var j = k.buttonHeightInPx - g.DynamicButton.Utilities.getSmileyVerticalSpacingInPx(k) * 2;
        k.smileyTransformationRatio = j / g.DynamicButton.Constants.DEFAULT_SMILEY_HEIGHT_PX;
        var i = g.DynamicButton.Constants.DEFAULT_SMILEY_WIDTH_PX * k.smileyTransformationRatio;
        k.smileyHorizontalPositionInPercentage = ((k.buttonWidthInPx - i) / 2) / k.buttonWidthInPx * 100;
        k.textHorizontalPositionInPercentage = 0;
        return k
    };
    g.DynamicButton.Utilities.precomputeValues = function (i) {
        i = g.DynamicButton.Utilities.computeDimensions(i);
        i = g.DynamicButton.Utilities.calculateSmileyTransformation(i);
        i = g.DynamicButton.Utilities.calculateTextTransformation(i);
        if (!i.isTextOnButton) {
            i = g.DynamicButton.Utilities.calculateSpacingWithoutText(i)
        } else {
            i = g.DynamicButton.Utilities.calculateSpacingWithText(i)
        }
        return i
    };
    g.DynamicButton.Utilities.computeDimensions = function (n) {
        var j = n.widthRequested;
        var i = n.heightRequested;
        var l;
        if (i === 0 && j === 0) {
            j = g.DynamicButton.Constants.BUTTON_SIZE_WxH_ARRAY[n.text][n.size][g.DynamicButton.Constants.WIDTH_INDEX];
            i = g.DynamicButton.Constants.BUTTON_SIZE_WxH_ARRAY[n.text][n.size][g.DynamicButton.Constants.HEIGHT_INDEX]
        } else {
            if (i === 0) {
                l = g.DynamicButton.Constants.CONSTRAINT_MIN_HEIGHT_PX / n.aspectRatio;
                j = (j > l) ? j : l;
                i = j * n.aspectRatio
            } else {
                if (j === 0) {
                    i = (i > g.DynamicButton.Constants.CONSTRAINT_MIN_HEIGHT_PX) ? i : g.DynamicButton.Constants.CONSTRAINT_MIN_HEIGHT_PX;
                    j = i / n.aspectRatio
                } else {
                    i = (i > g.DynamicButton.Constants.CONSTRAINT_MIN_HEIGHT_PX) ? i : g.DynamicButton.Constants.CONSTRAINT_MIN_HEIGHT_PX;
                    l = i / n.aspectRatio;
                    j = (j > l) ? j : l
                }
            }
        }
        var m = i / n.aspectRatio;
        var k = j * n.aspectRatio;
        if (n.isAspectRatioToBeMaintained) {
            n.buttonWidthInPx = ((j > m) ? m : j);
            n.buttonHeightInPx = ((i > k) ? k : i)
        } else {
            n.buttonWidthInPx = ((j > m) ? j : m);
            n.buttonHeightInPx = i
        }
        return n
    };
    g.DynamicButton.Utilities.calculateSmileyTransformation = function (j) {
        var i = j.buttonHeightInPx - g.DynamicButton.Utilities.getSmileyVerticalSpacingInPx(j) * 2;
        j.smileyTransformationRatio = i / g.DynamicButton.Constants.DEFAULT_SMILEY_HEIGHT_PX;
        return j
    };
    g.DynamicButton.Utilities.calculateTextTransformation = function (i) {
        i.textHeightInPx = i.buttonHeightInPx - g.DynamicButton.Utilities.getTextVerticalSpacingInPx(i) * 2;
        return i
    };
    g.DynamicButton.Utilities.getSmileyVerticalSpacingInPx = function (i) {
        return i.buttonHeightInPx / (100 / i.smileyVerticalPositionInPercentage)
    };
    g.DynamicButton.Utilities.getTextVerticalSpacingInPx = function (i) {
        return i.buttonHeightInPx / (100 / i.textVerticalPositionInPercentage)
    };
    g.DynamicButton.Utilities.getButtonPaddingInPx = function (i) {
        return i / g.DynamicButton.Constants.STANDARD_SPACING_DIVIDER
    };
    g.DynamicButton.Utilities.getSmileyTextSpacingInPx = function (i) {
        return(i / g.DynamicButton.Constants.STANDARD_SPACING_DIVIDER) * g.DynamicButton.Constants.SPACING_TUNER_MULTIPLIER
    };
    g.DynamicButton.Utilities.createBackgroundSVG = function (q) {
        var k = "0 0 " + (q.buttonWidthInPx + 2).toFixed(2) + " " + q.buttonHeightInPx.toFixed(2);
        var o = "<svg width='" + q.buttonWidthInPx.toFixed(2) + "px' height='" + q.buttonHeightInPx.toFixed(2) + "px' viewBox='" + k + "' version='1.1'><defs><linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='LPABtnBgLinearGradient-" + q.buttonCount + "'>";
        var n = g.DynamicButton.Constants.BGCOLOR_ARRAY[q.bgColor][g.DynamicButton.Constants.BGCOLOR_START_INDEX];
        var l = g.DynamicButton.Constants.BGCOLOR_ARRAY[q.bgColor][g.DynamicButton.Constants.BGCOLOR_END_INDEX];
        var i = g.DynamicButton.Constants.BGCOLOR_ARRAY[q.bgColor][g.DynamicButton.Constants.BGCOLOR_BORDER_INDEX];
        var p = "<stop stop-color='" + n + "' offset='0%'></stop><stop stop-color='" + l + "' offset='100%'></stop></linearGradient></defs><g id='Page-5' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>";
        var m = "<g id='Artboard' sketch:type='MSArtboardGroup' stroke='" + i + "' stroke-width='1' fill='url(#LPABtnBgLinearGradient-" + q.buttonCount + ")'><rect id='Rectangle-16' sketch:type='MSShapeGroup' x='1' y='1' width='" + (q.buttonWidthInPx - g.DynamicButton.Constants.MANDATORY_BUFFER_PX).toFixed(2) + "' height='" + (q.buttonHeightInPx - g.DynamicButton.Constants.MANDATORY_BUFFER_PX).toFixed(2) + "' rx='2'>";
        var j = "</rect></g></g></svg>";
        return o + p + m + j
    };
    g.DynamicButton.Utilities.createASmileySVG = function (m) {
        var k = m.textColor;
        var l = "<svg x='" + m.smileyHorizontalPositionInPercentage.toFixed(2) + "%' y='" + m.smileyVerticalPositionInPercentage.toFixed(2) + "%'><g id='Page-5' stroke='none' stroke-width='1' fill-rule='evenodd' sketch:type='MSPage' transform='scale(" + m.smileyTransformationRatio + ")' fill='" + k + "'>";
        var j = "</g></svg>";
        var i = g.DynamicButton.Constants.A_WITH_SMILEY_SVG;
        return l + i + j
    };
    g.DynamicButton.Utilities.getSandboxWatermarkSign = function (n) {
        var j = (n.buttonHeightInPx * (100 - g.DynamicButton.Constants.SANDBOX_WATERMARK_VERTICAL_POSITION_PCT) / 100).toFixed(2);
        var l = (((n.buttonWidthInPx - j - g.DynamicButton.Constants.MANDATORY_BUFFER_PX) / n.buttonWidthInPx) * 100).toFixed(2);
        var m = g.DynamicButton.Constants.SANDBOX_WATERMARK_VERTICAL_POSITION_PCT;
        var k = (j / g.DynamicButton.Constants.DEFAULT_SANDBOX_WATERMARK_HEIGHT_PX).toFixed(2);
        var i = "<svg x='" + l + "%' y='" + m + "%'><svg width='" + j + "px' height='" + j + "px' viewBox='0 0 " + j + " " + j + "' version='1.1'><g transform='scale(" + k + ")'> " + g.DynamicButton.Constants.SANDBOX_WATERMARK_SVG;
        return i
    };
    g.DynamicButton.Utilities.createTextWrapperSVG = function (m, v, w) {
        var r = g.DynamicButton.Constants.TEXT_SIZE_WxH_ARRAY[w.language][w.text][g.DynamicButton.Constants.WIDTH_INDEX];
        var k = g.DynamicButton.Constants.TEXT_SIZE_WxH_ARRAY[w.language][w.text][g.DynamicButton.Constants.HEIGHT_INDEX];
        var q = g.DynamicButton.Constants.TEXT_PATH_ADJUSTMENT[w.language][w.text][g.DynamicButton.Constants.RATIO_INDEX];
        var j = g.DynamicButton.Constants.TEXT_PATH_ADJUSTMENT[w.language][w.text][g.DynamicButton.Constants.SCALEX_INDEX];
        var i = g.DynamicButton.Constants.TEXT_PATH_ADJUSTMENT[w.language][w.text][g.DynamicButton.Constants.SCALEY_INDEX];
        var t = q * w.textWidthInPx / r;
        var p = (r * t).toFixed(2);
        var u = (k * t).toFixed(2);
        var x = j * t;
        var y = i * t;
        var o = "<svg width='" + p + "px' height='" + u + "px' viewBox='0 0 " + p + " " + u + "' version='1.1'><g id='Page-5' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'><g id='Artboard' sketch:type='MSArtboardGroup' transform='translate(" + x + ", " + y + ") scale(" + t + ")' fill='" + w.textColor + "'>";
        var l = "</g></g></svg>";
        var n;
        if (a.constants.IS_SANDBOX) {
            n = g.DynamicButton.Utilities.getSandboxWatermarkSign(w)
        } else {
            n = ""
        }
        var s = g.DynamicButton.Constants.BUTTON_SCRIPT_BASE_PATH + g.DynamicButton.Constants.FILEPATH_FOR_TEXT_SVG[w.language][w.text];
        h.ajaxSetup({cache: true});
        h.getScript(s, function () {
            var z = o + g.DynamicButton.Utilities.getTextSVG() + l;
            var A = "<svg x='" + w.textHorizontalPositionInPercentage.toFixed(2) + "%' y='" + w.textVerticalPositionInPercentage.toFixed(2) + "%'>" + z + "</svg>";
            h("#" + v + " div").html(m + A + n + "</svg>");
            f.publishMetricsForLPAButton(w.input, v, w.sellerId, true)
        });
        return w
    };
    g.DynamicButton.Utilities.mapSelectionBasedOnInput = function (o, j) {
        var q = o.color || g.DynamicButton.Constants.DEFAULT_BACKGROUND_COLOR;
        var r = o.size || g.DynamicButton.Constants.DEFAULT_SIZE;
        var k = o.type || g.DynamicButton.Constants.DEFAULT_TYPE;
        switch (j) {
            case"US":
                languageSelected = 0;
                break;
            case"DE":
                languageSelected = 1;
                break;
            case"FR":
                languageSelected = 2;
                break;
            case"IT":
                languageSelected = 3;
                break;
            case"ES":
                languageSelected = 4;
                break;
            case"JP":
                languageSelected = 5;
                break;
            default:
                languageSelected = 0
        }
        switch (q.toLowerCase()) {
            case"gold":
                bgcolorSelected = 0;
                textColor = "#000000";
                break;
            case"lightgray":
                bgcolorSelected = 1;
                textColor = "#000000";
                break;
            case"darkgray":
                bgcolorSelected = 2;
                textColor = "#FFFFFF";
                break;
            default:
                bgcolorSelected = 0;
                textColor = "#000000"
        }
        var i = ["small", "medium", "large", "x-large"];
        if (i.indexOf(r.toLowerCase()) > -1) {
            sizeSelected = i.indexOf(r.toLowerCase())
        } else {
            sizeSelected = i.indexOf(g.DynamicButton.Constants.DEFAULT_SIZE.toLowerCase())
        }
        var n = ["login", "lwa", "pay", "pwa", "donate", "dwa", "editorupdate", "a"];
        if (n.indexOf(k.toLowerCase()) > -1) {
            textSelected = n.indexOf(k.toLowerCase())
        } else {
            textSelected = n.indexOf(g.DynamicButton.Constants.DEFAULT_TYPE.toLowerCase())
        }
        var p = (typeof(o.height) === "number") ? o.height : g.DynamicButton.Constants.USER_REQUESTED_DEFAULT_SIZE_PX;
        var m = (typeof(o.width) === "number") ? o.width : g.DynamicButton.Constants.USER_REQUESTED_DEFAULT_SIZE_PX;
        var l = (typeof(o.aspectRatio) === "boolean") ? o.aspectRatio : true;
        return new g.DynamicButton.Utilities.ButtonSpecification(textSelected, sizeSelected, p, m, l, languageSelected, bgcolorSelected, textColor)
    };
    g.DynamicButton.Utilities.getNontextSVGComponent = function (l) {
        var j = "<svg xmlns='https://www.w3.org/2000/svg' xmlns:xlink='https://www.w3.org/1999/xlink' width='" + l.buttonWidthInPx.toFixed(2) + "px' height='" + l.buttonHeightInPx.toFixed(2) + "px'>";
        var i = g.DynamicButton.Utilities.createBackgroundSVG(l);
        var k = g.DynamicButton.Utilities.createASmileySVG(l);
        return(j + i + k)
    };
    g.DynamicButton.Utilities.createDynamicButton = function (j, l, i, k) {
        var n = new g.DynamicButton.Utilities.mapSelectionBasedOnInput(j, l);
        n.input = j;
        n.sellerId = k;
        n = g.DynamicButton.Utilities.precomputeValues(n);
        var m = g.DynamicButton.Utilities.getNontextSVGComponent(n);
        if (!n.isTextOnButton) {
            document.getElementById(i).innerHTML = m + "</svg>"
        } else {
            g.DynamicButton.Utilities.createTextWrapperSVG(m, i, n)
        }
        return n
    };
    b.exports = g.DynamicButton
}, {"../core/Constants": 9, "../core/LPAMetricsHelper": 14, "../core/jquery": 23}], 26: [function (d, c, f) {
    var i = d("../core/jquery");
    var a = d("../core/Utilities");
    var b = d("../core/Constants");
    var h = {Metrics: {}};
    var g = {};
    h.Metrics.QueryLogInfoKeys = {SUB_PAGE_TYPE: "sub-page-type", PAGE_ACTION: "page-action", PAGE_TYPE_ID: "page-type-id", SELLER_ID: "merchant-id"};
    h.Metrics.PageActions = {BUTTON_RENDER: "buttonrender", BUTTON_CLICK: "buttonclick"};
    h.Metrics.ProductTypes = {APA: "apa", LPA: "lpa"};
    h.Metrics.MetricKeys = {INFO: "info", ENTRIES: "entries"};
    h.Metrics.Tags = {DYNAMIC: "dynamic"};
    h.Metrics.Collector = function (j) {
        h.Metrics.Collector.prototype.constructor = h.Metrics.Collector;
        this.sellerId = j;
        this.metrics = {};
        this.metrics.counters = [];
        this.metrics.timings = [];
        this.metrics.info = [];
        this.metrics.entries = [];
        this.id = (new Date()).getTime()
    };
    h.Metrics.Collector.prototype.addTiming = function (l, j, m, k) {
        if (!a.isEmptyOrUndefined(l) && j !== null && m !== null) {
            this.metrics.timings.push(this.createTiming(l, j, m, k))
        }
    };
    h.Metrics.Collector.prototype.createTiming = function (m, k, n, l) {
        var j = {};
        j.name = m;
        j.time = n - k;
        j.tags = l || [];
        return j
    };
    h.Metrics.Collector.prototype.addCounter = function (k, j) {
        if (!a.isEmptyOrUndefined(k)) {
            this.metrics.counters.push(this.createCounter(k, j))
        }
    };
    h.Metrics.Collector.prototype.createCounter = function (l, k) {
        var j = {};
        j.name = l;
        j.tags = k || [];
        return j
    };
    h.Metrics.Collector.prototype.addInfoOrEntry = function (j, l, k) {
        if (!a.isEmptyOrUndefined(j) && !a.isEmptyOrUndefined(l)) {
            this.metrics[k].push(this.createInfo(j, l))
        }
    };
    h.Metrics.Collector.prototype.createInfo = function (j, k) {
        var l = {};
        l.name = j;
        l.value = k;
        if (j !== h.Metrics.QueryLogInfoKeys.SELLER_ID) {
            l.value = l.value.toLowerCase()
        }
        return l
    };
    h.Metrics.Collector.prototype.createUrl = function () {
        var j = i.param({sellerId: this.sellerId, data: this.toJSON()});
        return b.constants.WIDGET_ENDPOINT + b.constants.CSM_URI + j
    };
    h.Metrics.Collector.prototype.publish = function () {
        var j = this.createUrl();
        a.jsonp({url: j, id: this.id})
    };
    h.Metrics.Collector.prototype.publishAndInvokeEvent = function (q) {
        var m = q.param;
        var p = q.method;
        var l = this.id;
        var j = this.createUrl();
        var k = false;
        if (typeof(l) !== "undefined" && l !== null && typeof(j) !== "undefined" && j !== null) {
            var n = i("#" + l);
            if (n === null || typeof(n) === "undefined" || n.length === 0) {
                var r = document.createElement("script");
                r.type = "text/javascript";
                r.src = j;
                r.async = false;
                a.addLoadEventHandler({element: r, method: p, params: m});
                var o = document.body;
                if (o !== null && typeof(o) !== "undefined") {
                    o.appendChild(r);
                    k = true
                }
            }
        }
        if (!k) {
            p(m)
        }
    };
    h.Metrics.Collector.prototype.toJSON = function () {
        return JSON.stringify(this.metrics).replace(/"/g, "'")
    };
    h.Metrics.Collector.prototype.addButtonInfoData = function (m, k, j, l) {
        this.addInfoOrEntry(h.Metrics.QueryLogInfoKeys.SUB_PAGE_TYPE, m, h.Metrics.MetricKeys.INFO);
        this.addInfoOrEntry(h.Metrics.QueryLogInfoKeys.PAGE_ACTION, k, h.Metrics.MetricKeys.INFO);
        this.addInfoOrEntry(h.Metrics.QueryLogInfoKeys.PAGE_TYPE_ID, j, h.Metrics.MetricKeys.INFO);
        this.addInfoOrEntry(h.Metrics.QueryLogInfoKeys.SELLER_ID, l, h.Metrics.MetricKeys.INFO)
    };
    h.Metrics.Collector.time = function (k, j) {
        g[k] = {startTime: (new Date()).getTime(), tags: j || []}
    };
    h.Metrics.Collector.timeEnd = function (l, k) {
        var j = g[l], m;
        if (j !== undefined && j !== null) {
            m = new h.Metrics.Collector();
            j.endTime = (new Date()).getTime();
            j.tags = j.tags.concat(k || []);
            m.addTiming(l, j.startTime, j.endTime, k);
            m.publish();
            delete g[l]
        }
        return m
    };
    c.exports = h.Metrics
}, {"../core/Constants": 9, "../core/Utilities": 18, "../core/jquery": 23}], 27: [function (g, i, k) {
    g("../core/ArrayPolyfill")();
    var d = g("./ABTest").ABTest;
    var l = g("./DynamicButtons");
    var o = g("../core/Utilities");
    var s = g("../core/LPAMetricsHelper");
    var j = g("../core/Constants");
    var h = g("../core/EventTypes");
    var p = g("../core/BridgeHelper");
    var a = g("../core/LwaLogin");
    var f = g("../core/CheckoutWidget");
    var r = g("../core/HostedPayments");
    var n = g("../core/ButtonCallbacks");
    var q = g("../core/ZeroTime");
    if (!b || typeof(b) === "undefined") {
        var b = {}
    }
    b.Metrics = g("./MetricsCollector");
    String.prototype.endsWith = function (t) {
        return this.indexOf(t, this.length - t.length) !== -1
    };
    if (!b.Widgets || typeof(b.Widgets) === "undefined") {
        b.Widgets = {};
        b.jQuery = g("../core/jquery");
        b.Widgets.mainCollector = new b.Metrics.Collector();
        var c = g("../core/Mediator").instance;

        function m(t, v, u) {
            return(o.isSellerAllowed(v, u) && o.isSVGSupported() && !o.isSellerAllowedForMultiLanguage(v, u) && !o.isSellerHidingButton(t) && !r.isHostedPaymentsInput(u))
        }

        b.Button = function (y, H, D) {
            j.constants.CartOwnerId = H;
            for (var x = 0; x < n.before_callbacks.length; x++) {
                n.before_callbacks[x].call(null, H, y)
            }
            var v = (new Date()).getTime();
            D.buttonConstructorStartTime = v;
            j.constants.IS_DYNAMIC_BUTTON_USED = m(y, H, D);
            var F = document.getElementById(y);
            var K;
            if (typeof H === "undefined") {
                K = o.buildParamNameValueMap("sellerId", "undefined")
            }
            if (!r.isHostedPaymentsInput(D) && typeof D.authorization !== "function") {
                K = o.buildParamNameValueMap("authorization", "undefined")
            }
            if (r.isHostedPaymentsInput(D) && typeof D.hostedParametersProvider !== "function") {
                K = o.buildParamNameValueMap("hostedParametersProvider", "undefined")
            }
            var B = function () {
                var O = (new Date()).getTime();
                var Q = new b.Metrics.Collector(H);
                var P = s.getLpaButtonType(D);
                var N = j.constants.IS_DYNAMIC_BUTTON_USED ? [b.Metrics.Tags.DYNAMIC, P] : [P];
                Q.addTiming("lpa-button-loading", v, O, N);
                if (d.Utilities.isSellerInABTest(H, d.Tests.MULTI_BUTTONS)) {
                    Q.addTiming("multibutton-abtest-lpa-button-loading", v, O, N)
                } else {
                    Q.addTiming("nonabtest-lpa-button-loading", v, O, N)
                }
                Q.publish()
            };
            var M;
            var u = F.getElementsByTagName("img");
            for (var J = 0; J < u.length; J++) {
                imgEle = u[J];
                C = imgEle.getAttribute("src");
                if (C.indexOf(j.constants.BUTTON_ENDPOINT + j.constants.BUTTON_URI) === 0 || C.indexOf(j.constants.BUTTON_BASE_PATH) === 0) {
                    M = imgEle;
                    break
                }
            }
            var I = j.constants.WIDGETID_PREFIX + c.generateUniqWidgetID();
            if (typeof M === "undefined") {
                var A = b.Widgets.Utilities.getLanguageForSeller(H, D);
                var C = b.Widgets.Utilities.getLWAButtonPath(D, A, b.Widgets.Utilities.isMultiLanguageMVPSeller(H, D), r.isHostedDonation(D));
                if (b.Widgets.Constants.IS_DYNAMIC_BUTTON_USED) {
                    var w = document.createElement("img");
                    w.setAttribute("style", "height: 1px; width: 1px; display:none;");
                    w.onclick = function () {
                        t();
                        if (r.isHostedPaymentsInput(D)) {
                            E()
                        } else {
                            G(w)
                        }
                    };
                    F.appendChild(w);
                    M = document.createElement("div");
                    M.setAttribute("style", "cursor:pointer; display: inline-block;");
                    b.jQuery(M).load(B);
                    F.appendChild(M);
                    var z = o.getLanguageCountryForSeller(H, D);
                    l.Utilities.createDynamicButton(D, z, y, H)
                } else {
                    M = document.createElement("img");
                    M.setAttribute("src", C);
                    M.setAttribute("style", "cursor:pointer;");
                    b.jQuery(M).load(B);
                    F.appendChild(M)
                }
                for (var x = 0; x < n.after_callbacks.length; x++) {
                    n.after_callbacks[x].call(null, H, y)
                }
            }
            M.id = I;
            M.onErrorCallback = D.onError;
            M.getID = function () {
                return this.id
            };
            c.register(M);
            b.Button.bindOnError(M);
            if (typeof K !== "undefined") {
                errorCode = j.constants.INVALID_PARAMETER_VALUE;
                errorMessage = o.formatMsg(j.constants.INVALID_PARAMETER_VALUE_MSG, K);
                o.sendOnErrorCallbackMessage(errorCode, errorMessage, I)
            }
            var L = function (Q) {
                var P = Q.data;
                b.jQuery(P).unbind(h.EXPRESS_CHK_ONAUTHORIZE, P.onSignInEventHandler);
                var O = P.eventValue;
                var R = {};
                var N = function () {
                    if (D.agreementType === "BillingAgreement") {
                        R.getAmazonBillingAgreementId = function () {
                            return O
                        }
                    } else {
                        R.getAmazonOrderReferenceId = function () {
                            return O
                        }
                    }
                    return R
                }();
                D.onSignIn(N)
            };
            var t = function () {
                var P = new b.Metrics.Collector(H);
                P.addButtonInfoData(b.Metrics.ProductTypes.LPA, b.Metrics.PageActions.BUTTON_CLICK, D.type, H);
                var O = s.getLpaButtonType(D);
                var N = j.constants.IS_DYNAMIC_BUTTON_USED ? [b.Metrics.Tags.DYNAMIC, O] : [O];
                P.addCounter("lpa-buttonclick", N);
                P.publish()
            };
            var E = function () {
                var N = j.constants.HOSTED_INTERFACE_TYPE_KEY;
                var O = j.constants.HOSTED_EXPERIENCE_TYPE_KEY;
                j.constants.HOSTED_PAYMENTS_WIDGET_ID = I;
                D.hostedParametersProvider(function (P) {
                    P[O] = r.inputTypeToExperienceTypeMap[D.type];
                    if (P[N] !== j.constants.HOSTED_HTML_INTERFACE) {
                        P[N] = j.constants.HOSTED_JAVASCRIPT_INTERFACE
                    }
                    r.done(P)
                })
            };
            var G = function (N) {
                b.Widgets.Utilities.setLanguage(H, D);
                b.Widgets.Utilities.setLwaSandboxMode();
                b.Widgets.Utilities.setLwADomain();
                D.authorization();
                if (typeof D.onSignIn === "function") {
                    if (typeof D.useAmazonAddressBook === "undefined") {
                        D.useAmazonAddressBook = true
                    }
                    b.jQuery(N).bind(h.EXPRESS_CHK_ONAUTHORIZE, N, L);
                    a().Login.authorize({scope: "payments:widget", interactive: "never"}, function (O) {
                        if (O.error) {
                        } else {
                            params = {action: "connect-lwa", access_token: O.access_token, cartOwnerId: H, clientId: b.Widgets.Utilities.getClientId(), referringUrl: window.location, useAmazonAddressBook: D.useAmazonAddressBook};
                            if (typeof D.language !== "undefined" && D.language.toLowerCase() in j.constants.BUTTON_LWA_LANGUAGE_TO_REALM_MAP) {
                                params.language = j.constants.BUTTON_LWA_LANGUAGE_TO_REALM_MAP[D.language.toLowerCase()]
                            }
                            if (!o.isEmptyOrUndefined(D.agreementType)) {
                                params.agreementType = D.agreementType
                            }
                            o.performContractAction(params, y)
                        }
                    })
                }
            };
            M.onclick = function () {
                t();
                if (r.isHostedPaymentsInput(D)) {
                    E()
                } else {
                    G(M)
                }
            };
            o.initFlash();
            D.buttonConstructorEndTime = (new Date()).getTime();
            if (!j.constants.IS_DYNAMIC_BUTTON_USED) {
                s.publishMetricsForLPAButton(D, y, H, false)
            }
        };
        b.Button.after_callbacks = [];
        b.Button.before_callbacks = [];
        b.Button.bindOnError = function (u) {
            var t = function (v) {
                if (typeof u.onErrorCallback !== "undefined") {
                    u.onErrorCallback(v.data.error)
                }
            };
            b.jQuery(u).bind(h.ON_ERROR, u, t)
        };
        b.Widgets.Button = function (t) {
            this.BUTTON_START_TIME = (new Date()).getTime();
            this.BUTTON_RUNNING_TIME_A = this.BUTTON_START_TIME;
            this.BUTTON_RUNNING_TIME_B = this.BUTTON_START_TIME;
            this.BUTTON_RUNNING_TIME_C = this.BUTTON_START_TIME;
            this.BUTTON_RUNNING_TIME_D = this.BUTTON_START_TIME;
            f.call(this, t);
            if (!d.Utilities.isSellerInABTest(o.getCartOwnerId(), d.Tests.Default) && o.isCookiePresent(d.Tests.Default.cookieName)) {
                o.eraseCookie(d.Tests.Default.cookieName)
            }
            var u;
            this.useAmazonAddressBook = j.constants.DEFAULT_ADDRESSBOOK_PREF;
            this.hasError = false;
            this.onSignIn = t.onSignIn;
            this.onOpen = t.onOpen;
            this.onErrorCallback = t.onError;
            this.authorizationToken = t.authorizationToken;
            this.agreementType = (!o.isEmptyOrUndefined(t.agreementType)) ? t.agreementType : "";
            this.type = j.others.WidgetTypes.Button;
            this.buttonType = j.others.ButtonTypes.BIG_FISH_CHECKOUT;
            this.getContractId = function () {
                return u
            };
            this.setContractId = function (v) {
                u = v
            };
            this.validateAndSetUseAmazonAddressBookField = function (v) {
                if (v !== undefined) {
                    if (typeof v === "boolean") {
                        this.useAmazonAddressBook = v
                    } else {
                        o.sendOnErrorCallbackMessage(j.constants.INVALID_PARAMETER_VALUE, j.constants.INVALID_VALUE_FOR_USE_AMAZON_ADDRESSBOOK, this.getID());
                        this.hasError = true
                    }
                }
            };
            this.setButtonType = function () {
                if (!o.isEmptyOrUndefined(t.buttonType)) {
                    if ("donation" === t.buttonType.toLowerCase()) {
                        this.buttonType = j.others.ButtonTypes.DONATION
                    }
                }
            };
            this.validateSellerId = function (v) {
                if (o.isEmptyOrUndefined(v)) {
                    o.sendOnErrorCallbackMessage(j.constants.MISSING_PARAMETER, j.constants.MISSING_SELLERID, this.getID());
                    this.hasError = true
                }
            };
            b.jQuery(this).bind(h.ON_ERROR, this, f.prototype.onErrorCallbackHandler);
            this.getAmazonOrderReferenceId = this.getContractId;
            this.getAmazonBillingAgreementId = this.getContractId;
            this.validateAndSetUseAmazonAddressBookField(t.useAmazonAddressBook);
            this.validateSellerId(t.sellerId);
            this.setButtonType()
        };
        b.Widgets.Button.prototype = o.createSubclass(f.prototype);
        b.Widgets.Button.prototype.constructor = b.Widgets.Button;
        b.Widgets.Button.prototype.shouldSkipPopup = function () {
            return(this.contractId && this.authorizationToken)
        };
        b.Widgets.Button.prototype.onClickHandler = function (u) {
            var t = u.data.getSellerId();
            var v = new b.Metrics.Collector(t);
            v.addButtonInfoData(b.Metrics.ProductTypes.APA, b.Metrics.PageActions.BUTTON_CLICK, u.data.buttonType, t);
            v.addCounter("apa-buttonclick");
            v.publish();
            if (u.data.shouldSkipPopup()) {
                if (typeof(u.data.onOpen) === "function") {
                    u.data.onOpen(u.data)
                } else {
                    u.data.submit()
                }
            } else {
                o.initFlash();
                u.data.isMobile = false;
                u.data.showCashbackTermsAndConditions = false;
                f.prototype.onClickHandler.call(this, u)
            }
        };
        b.Widgets.Button.prototype.delayedEventHandler = function (t, u) {
            if (u !== null && u !== undefined) {
                if (typeof(u.closed) === "undefined" || u.closed === true) {
                    t.onSignIn(t)
                } else {
                    setTimeout(function () {
                        b.Widgets.Button.prototype.delayedEventHandler(t, u)
                    }, j.constants.TIMER_INTERVAL)
                }
            }
        };
        b.Widgets.Button.prototype.onSignInEventHandler = function (u) {
            var t = u.data;
            if (!t.shouldSkipPopup()) {
                t.setContractId(t.eventValue)
            }
            if (typeof(t.onSignIn) === "function") {
                if (o.shouldInvokeSetTimeoutOnSigninForUserAgent(navigator.userAgent)) {
                    setTimeout(function () {
                        b.Widgets.Button.prototype.delayedEventHandler(t, u.data.popupWindow)
                    }, j.constants.TIMER_INTERVAL)
                } else {
                    var v = new b.Metrics.Collector(t.getSellerId());
                    v.addCounter("onSignInTriggered-" + t.eventValue);
                    v.publishAndInvokeEvent({method: t.onSignIn, param: t})
                }
            }
            b.jQuery(t).unbind(h.EXPRESS_CHK_ONAUTHORIZE, t.onSignInEventHandler)
        };
        b.Widgets.Button.prototype.submit = function () {
            b.jQuery(this).bind(h.EXPRESS_CHK_ONAUTHORIZE, this, this.onSignInEventHandler);
            if (this.shouldSkipPopup()) {
                b.jQuery(this).trigger(h.EXPRESS_CHK_ONAUTHORIZE)
            } else {
                this.popupForm()
            }
        };
        b.Widgets.Button.prototype.popupForm = function () {
            var w = this.getPopupWindowName();
            var y = this.getID() + "Form";
            var x = window.top.location;
            var t = j.constants.WIDGET_ENDPOINT + j.constants.INLINE_WIDGETS_URI;
            var u = {action: "connect", referringURL: x, cartOwnerId: this.getSellerId(), useAmazonAddressBook: this.useAmazonAddressBook, agreementType: this.agreementType};
            if (this.getContractId() !== undefined) {
                u.contractId = this.getContractId()
            }
            var v = o.createFormString(y, t, w, u);
            b.jQuery("#" + y).remove();
            b.jQuery("#" + this.getLocation()).append(v);
            b.jQuery("#" + y).submit()
        };
        b.jQuery(document).ready(function () {
            p.setupBridgeIframe();
            window.setTimeout(o.pollTaskQueue, j.constants.TIMER_INTERVAL);
            if (j.config.POLL_FOR_EVENTS && o.isValidDocInclusion()) {
                setInterval(o.pollEvents, j.constants.TIMER_INTERVAL)
            }
            if (typeof(window.postMessage) !== "undefined") {
                if (window.addEventListener) {
                    window.addEventListener("message", o.handleMessage, false)
                } else {
                    if (window.attachEvent) {
                        window.attachEvent("onmessage", o.handleMessage)
                    }
                }
            }
            b.Widgets.mainCollector.addCounter("_V1438376751_");
            b.Widgets.mainCollector.publish()
        });
        b.Widgets.mainCollector.addTiming("js-loaded", q(), (new Date()).getTime())
    }
    i.exports = {Widgets: b.Widgets, Button: b.Button, isDynamicButtonUsed: m}
}, {"../core/ArrayPolyfill": 3, "../core/BridgeHelper": 4, "../core/ButtonCallbacks": 5, "../core/CheckoutWidget": 7, "../core/Constants": 9, "../core/EventTypes": 10, "../core/HostedPayments": 11, "../core/LPAMetricsHelper": 14, "../core/LwaLogin": 15, "../core/Mediator": 16, "../core/Utilities": 18, "../core/ZeroTime": 22, "../core/jquery": 23, "./ABTest": 24, "./DynamicButtons": 25, "./MetricsCollector": 26}]}, {}, [1]);
/**
 * Version: _V1438376751_
 * Copyright 2011 Amazon.com, Inc., or its Affiliates.
 **/

OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap = {};
OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap["data-ap-seller-id"] = "sellerId";
OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap["data-ap-access-key"] = "accessKey";
OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap["data-ap-lwa-client-id"] = "lwaClientId";
OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap["data-ap-return-url"] = "returnURL";
OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap["data-ap-amount"] = "amount";
OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap["data-ap-currency-code"] = "currencyCode";
OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap["data-ap-note"] = "sellerNote";
OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap["data-ap-signature"] = "signature";
OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap["data-ap-shipping-address-required"] = "shippingAddressRequired";
OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap["data-ap-payment-action"] = "paymentAction";
OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap["data-ap-seller-order-id"] = "sellerOrderId";
OffAmazonPayments.HostedPayments.DonationsParameterProviderFunction = function (c, b, a) {
    var d = {};
    d.interfaceType = OffAmazonPayments.Widgets.Constants.HOSTED_HTML_INTERFACE;
    c.each(OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap, function (e, f) {
        if (b.attr(e)) {
            d[OffAmazonPayments.HostedPayments.htmlAttrToJsParamMap[e]] = b.attr(e)
        }
    });
    a(d)
};
OffAmazonPayments.HostedPayments.LoadButtonInEl = function (e, c, b) {
    if (b === undefined) {
        b = c
    }
    var d = c.attr("id");
    var a = {expressPaymentButton: "hostedPayment", expressDonationButton: "hostedDonation", expressDonationWidget: "hostedDonation"};
    OffAmazonPayments.Button(d, b.attr("data-ap-seller-id"), {type: a[b.attr("data-ap-widget-type")], hostedParametersProvider: function (f) {
        OffAmazonPayments.HostedPayments.DonationsParameterProviderFunction(e, b, f)
    }, onError: function (f) {
        console.debug(f.getErrorCode() + f.getErrorMessage())
    }})
};
OffAmazonPayments.HostedPayments.HtmlButtonLoader = function (a) {
    a("div[data-ap-widget-type=expressPaymentButton],div[data-ap-widget-type=expressDonationButton]").each(function () {
        var b = a(this);
        if (b.attr("id") === "" || b.attr("id") === undefined || b.attr("id") === null) {
            b.attr("id", "ap-button-" + Math.floor((Math.random() * 1000000000) + 1).toString())
        }
        OffAmazonPayments.HostedPayments.LoadButtonInEl(a, b)
    })
};
/**
 * Version: _V1438376751_
 * Copyright 2011 Amazon.com, Inc., or its Affiliates.
 **/

if (typeof OffAmazonPayments === "undefined") {
    OffAmazonPayments = {}
}
if (typeof OffAmazonPayments.HostedPayments === "undefined") {
    OffAmazonPayments.HostedPayments = {}
}
OffAmazonPayments.HostedPayments.Donations = function (e) {
    var d = "https://images-na.ssl-images-amazon.com/images/G/01/EP/offAmazonPayments/common/us/prod/css/donations.css";
    var c = "div[data-ap-widget-type='expressDonationWidget']";

    function f() {
        b(a)
    }

    function b(h) {
        var g = document.createElement("link");
        g.setAttribute("rel", "stylesheet");
        g.setAttribute("type", "text/css");
        g.setAttribute("href", d);
        document.getElementsByTagName("head")[0].appendChild(g);
        h()
    }

    function a() {
        e(c).each(function () {
            new OffAmazonPayments.HostedPayments.Donations.widget(e(this), e)
        })
    }

    f();
    return{cssFileName: d, widgetSelector: c}
};
/**
 * Version: _V1438376751_
 * Copyright 2011 Amazon.com, Inc., or its Affiliates.
 **/

if (typeof OffAmazonPayments === "undefined") {
    OffAmazonPayments = {}
}
if (typeof OffAmazonPayments.HostedPayments === "undefined") {
    OffAmazonPayments.HostedPayments = {}
}
if (typeof OffAmazonPayments.HostedPayments.Donations === "undefined") {
    OffAmazonPayments.HostedPayments.Donations = {}
}
OffAmazonPayments.HostedPayments.Donations.widget = function (N, A) {
    var L, p, G, M, E = N, f, c, s, i, r, h, d = {"ap-light": true, "ap-dark": true};

    function J() {
        l();
        g();
        a();
        w();
        m();
        y()
    }

    function y() {
        if (L.preSelectedAmountsList) {
            h = A(".ap-dw-selected", E);
            p = t(h.html())
        } else {
            h = A(i, E);
            p = t(h.val())
        }
        G = false;
        k();
        q()
    }

    function H(O) {
        O = parseInt(O);
        if (isNaN(O) || O < 0 || O > 3) {
            return 1
        }
        return O
    }

    function m() {
        if (c) {
            c.find(".ap-dw-list-item-link").click(n)
        }
        i.blur(C);
        i.focus(v)
    }

    function k() {
        i.val(B(p))
    }

    function u(O) {
        if (O) {
            h.removeClass("ap-dw-selected");
            h = O
        }
        h.addClass("ap-dw-selected");
        p = t(h.html());
        r.removeClass("ap-dw-selected ap-dw-value-set");
        K();
        k();
        q()
    }

    function I(O) {
        s.addClass("ap-dw-error-active").html(O);
        r.addClass("ap-dw-error-active");
        f.addClass("ap-dw-error-active");
        G = true
    }

    function K() {
        s.removeClass("ap-dw-error-active");
        r.removeClass("ap-dw-error-active");
        f.removeClass("ap-dw-error-active");
        G = false
    }

    function q() {
        E.attr("data-ap-amount", p)
    }

    function D() {
        return p
    }

    function t(O) {
        O = Number(O.replace(/[\$,]/g, ""));
        return(Math.round(O * 100) / 100)
    }

    function n(O) {
        if (h.hasClass("ap-dw-selected") && h.get(0) === O.currentTarget) {
            return
        }
        u(A(O.currentTarget))
    }

    function v() {
        if (i.val() === L.strings.defaultInputAmount || G) {
            i.val("$")
        }
        r.addClass("ap-dw-selected");
        h.removeClass("ap-dw-selected")
    }

    function C() {
        if (e()) {
            p = t(i.val());
            i.val(B(p));
            r.addClass("ap-dw-value-set");
            q()
        }
    }

    function o(O) {
        if (G) {
            O.preventDefault();
            O.stopPropagation();
            return false
        }
        M(O);
        return true
    }

    function B(O) {
        if (typeof O !== "string") {
            O = O.toString()
        }
        O = O.replace(/[,\$]/g, "");
        O = "$" + O.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        return O
    }

    function w() {
        var O = A("img", f);
        M = O.get(0).onclick;
        O.get(0).onclick = null;
        O.bind("click", o)
    }

    function j(O) {
        if (isNaN(O) || O < 0) {
            I(L.errors.invalid);
            return false
        } else {
            if (O < L.minValue) {
                I(L.errors.minValue);
                return false
            } else {
                if (O > L.maxValue) {
                    I(L.errors.maxValue);
                    return false
                }
            }
        }
        K();
        return true
    }

    function e() {
        var O = t(i.val());
        if (i.val() === "" || O === 0) {
            i.val(L.strings.defaultInputAmount);
            return true
        }
        return j(O)
    }

    function a() {
        OffAmazonPayments.HostedPayments.LoadButtonInEl(A, f, E)
    }

    function l() {
        var P = E.attr("data-ap-widget-amount-presets"), O = E.attr("data-ap-widget-default-amount"), Q = E.attr("data-ap-widget-theme");
        L = {minValue: 5, maxValue: 150000, cssTheme: (Q && d[Q]) ? Q : "ap-light", strings: {defaultInputAmount: "$0", donate: "Donate", otherOptions: "Other Options"}, errors: {minValue: "The amount you entered is less than the minimum value", maxValue: "The amount you entered is more than the maximum amount", invalid: "You entered an invalid amount"}};
        if (P) {
            L.preSelectedAmount = H(O);
            L.preSelectedAmountsList = P.split(",")
        } else {
            if (O === "other") {
                L.preSelectedAmount = O
            }
        }
    }

    function g() {
        var S = E.get(0), R = document.createElement("div"), Q = document.createElement("span"), P = document.createElement("div"), O;
        S.className = "ap-dw-container " + L.cssTheme;
        R.className = "ap-dw-main";
        Q.className = "ap-dw-error";
        P.className = "ap-dw-button";
        P.id = "ap-button-" + Math.floor((Math.random() * 1000000000) + 1).toString();
        if (L.preSelectedAmountsList) {
            O = F(R);
            b(O);
            z(O);
            R.appendChild(O)
        } else {
            x(R, true)
        }
        R.appendChild(Q);
        s = A(Q);
        R.appendChild(P);
        f = A(P);
        S.appendChild(R)
    }

    function F(Q) {
        var O = document.createElement("h3"), P = document.createElement("div");
        O.className = "ap-dw-main-heading";
        O.innerHTML = L.strings.donate;
        Q.appendChild(O);
        P.className = "ap-dw-content-container ap-dw-cf";
        return P
    }

    function b(S) {
        var R = document.createElement("ul"), O, P;
        R.className = "ap-dw-list ap-dw-cf";
        for (var Q = 0; Q < 4; Q++) {
            O = document.createElement("li");
            P = document.createElement("a");
            O.className = "ap-dw-list-item";
            if (Q === L.preSelectedAmount) {
                P.className = "ap-dw-list-item-link ap-dw-selected"
            } else {
                P.className = "ap-dw-list-item-link"
            }
            P.innerHTML = "$" + L.preSelectedAmountsList[Q];
            O.appendChild(P);
            R.appendChild(O)
        }
        S.appendChild(R);
        c = A(R)
    }

    function z(R) {
        var S = document.createElement("div"), Q = document.createElement("div"), P = document.createElement("div"), O = document.createElement("h4");
        S.className = "ap-dw-optional ap-dw-cf";
        Q.className = "ap-dw-optional-container";
        P.className = "ap-dw-optional-container";
        O.className = "ap-dw-optional-heading";
        O.innerHTML = L.strings.otherOptions;
        x(P, false);
        Q.appendChild(O);
        S.appendChild(Q);
        S.appendChild(P);
        R.appendChild(S)
    }

    function x(R, Q) {
        var P = document.createElement("div"), O = document.createElement("input");
        Q = Q ? " ap-dw-input-only ap-dw-selected" : "";
        P.className = "ap-dw-optional-input-container" + Q;
        O.className = "ap-dw-optional-input";
        O.type = "text";
        O.value = L.strings.defaultInputAmount;
        P.appendChild(O);
        R.appendChild(P);
        r = A(P);
        i = A(O)
    }

    J();
    return{applyInputFormatRules: B, getAmount: D, getNumberValue: t, handleButtonClick: o}
};
/**
 * Version: _V1438376751_
 * Copyright 2011 Amazon.com, Inc., or its Affiliates.
 **/

if (typeof OffAmazonPayments === "undefined") {
    OffAmazonPayments = {}
}
if (OffAmazonPayments.Loader === undefined) {
    OffAmazonPayments.Loader = {loginJsUrl: "https://api-cdn.amazon.com/sdk/login1.js"}
}
if (OffAmazonPayments.HostedPayments === undefined) {
    OffAmazonPayments.HostedPayments = {}
}
OffAmazonPayments.Loader.LOGINJS_NAME = "OffAmazonPaymentsLoginJS";
OffAmazonPayments.Loader.CanLoadChildScriptsAsynchronously = function () {
    var b = function (c) {
        var d = c.getAttribute("src");
        return(d !== null && d.indexOf("OffAmazonPayments") !== -1 && d.indexOf("Widgets.js") !== -1)
    };
    var a = function () {
        var c = document.getElementsByTagName("script");
        var e, d, f;
        for (d = 0; d < c.length; d++) {
            e = c[d];
            if (b(e)) {
                f = e.getAttribute("async");
                return f !== null && f !== undefined && f !== false
            }
        }
        return false
    };
    if (document.currentScript !== undefined && document.currentScript) {
        return document.currentScript.async
    }
    return a()
};
OffAmazonPayments.Loader.AddLwaScriptIfMissingAndPerformCallback = function (c, b, a) {
    var d = function () {
        for (var e = 0; e < a.length; e++) {
            a[e](c)
        }
    };
    if (typeof b !== "undefined" && b.Login !== undefined) {
        OffAmazonPayments.Loader.SetScriptLoadMetrics();
        c(document).ready(d)
    } else {
        OffAmazonPayments.Loader.ReplaceLoginReadyCallback();
        OffAmazonPayments.Loader.LoadLoginJS(c, d)
    }
};
OffAmazonPayments.Loader.SetScriptLoadMetrics = function () {
    OffAmazonPayments.WIDGET_CORE_EXECUTION_END_TIME = (new Date()).getTime()
};
OffAmazonPayments.Loader.ReplaceLoginReadyCallback = function () {
    var a = window.onAmazonLoginReady || function () {
    };
    window.onAmazonLoginReady = function () {
        OffAmazonPayments.Loader.SetScriptLoadMetrics();
        a()
    }
};
OffAmazonPayments.Loader.loginJSLoaded = function (a) {
    var b = new OffAmazonPayments.Metrics.Collector();
    b.addTiming("login1js-load-time", a, (new Date()).getTime());
    b.publish()
};
OffAmazonPayments.Loader.LoadLoginJS = function (b, d) {
    if (!OffAmazonPayments.Loader.loginJsUrl) {
        b(document).ready(d);
        return
    }
    if (OffAmazonPayments.Loader.CanLoadChildScriptsAsynchronously()) {
        b.ajax({url: OffAmazonPayments.Loader.loginJsUrl, dataType: "script", success: function () {
            b(document).ready(d)
        }})
    } else {
        var a = (new Date()).getTime();
        document.write("<script type='text/javascript' src='" + OffAmazonPayments.Loader.loginJsUrl + "' id= '" + OffAmazonPayments.Loader.LOGINJS_NAME + "'><\/script>");
        var c = document.getElementById(OffAmazonPayments.Loader.LOGINJS_NAME);
        if (c.readyState) {
            c.onreadystatechange = function () {
                if (c.readyState === "loaded" || c.readyState === "complete") {
                    OffAmazonPayments.Loader.loginJSLoaded(a)
                }
            }
        } else {
            c.onload = function () {
                OffAmazonPayments.Loader.loginJSLoaded(a)
            }
        }
        b(document).ready(d)
    }
};
OffAmazonPayments.Loader.WrappedInUserErrorMetrics = function (a) {
    return function () {
        try {
            a()
        } catch (c) {
            var b = new OffAmazonPayments.Metrics.Collector();
            b.addCounter("js-user-error", window.location.host);
            b.publish();
            throw c
        }
    }
};
(function (f) {
    var d = undefined;
    if (typeof amazon !== "undefined") {
        d = amazon
    }
    var b = OffAmazonPayments.Loader.WrappedInUserErrorMetrics;
    var e = b(window.onAmazonPaymentsReady || function () {
    });
    var c = b(window.AmazonPaymentReady || function () {
    });
    var a = [e, c, OffAmazonPayments.HostedPayments.HtmlButtonLoader, OffAmazonPayments.HostedPayments.Donations];
    OffAmazonPayments.Loader.AddLwaScriptIfMissingAndPerformCallback(OffAmazonPayments.jQuery, d, a)
}(OffAmazonPayments.jQuery));
