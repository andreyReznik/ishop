// ABMNZN SDK 2015-06-02-3k4d8hvl
if (window.amazon == null || window.amazon.Login == null) {
    (function () {
        'use strict';
        var f = void 0, g = !0, h = null, i = !1;

        function j(a) {
            return function () {
                return this[a]
            }
        }

        var k, p, q, r, s, u;

        function aa(a, b) {
            if (a === h || a === f)a = {};
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d !== h && d !== f)for (var e in d)a[e] = d[e]
            }
            return a
        }

        function v(a, b) {
            var c = w.apply(f, arguments), d = c;
            window.console && window.console.log && ("function" == typeof d && (d = d()), d = w("[Amazon.%s] %s", "error", d), window.console.log(d));
            throw Error(c);
        }

        function w(a, b) {
            var c = arguments, d = 1;
            return a.replace(/%((%)|[sid])/g, function (a) {
                if (a[2])return a[2];
                a = c[d++];
                "object" == typeof a && (window.JSON && window.JSON.stringify) && (a = window.JSON.stringify(a));
                return a
            })
        }

        function x(a, b, c) {
            b == h && v("missing %s", a);
            typeof b != c && v("expected %s to be a %s", a, c)
        }

        function ba(a) {
            var b = document.getElementById(a);
            b || (b = document.createElement("div"), b.setAttribute("id", a), b.setAttribute("width", 0), b.setAttribute("height", 0), b.setAttribute("style", "position: absolute; left: -1000px; top: -1000px"), b.style.setAttribute && b.style.setAttribute("cssText", "position: absolute; left: -1000px; top: -1000px"), a = document.getElementById("amazon-root"), a || (a = document.createElement("div"), a.setAttribute("id", "amazon-root"), document.body.appendChild(a)), a.appendChild(b));
            return b
        }

        function ca() {
            this.a = []
        }

        ca.prototype.b = function (a) {
            var b = this.a;
            this.a = [];
            for (var c = 0; c < b.length; c++)b[c].v && this.a.push(b[c]);
            for (c = 0; c < b.length; c++)b[c].r.apply(f, arguments)
        };
        var da, y, A, ea = {'"': '"', "\\": "\\", "/": "/", O: "\b", P: "\f", Q: "\n", R: "\r", S: "\t"}, fa;

        function B(a) {
            throw{name: "SyntaxError", message: a, N: y, text: fa};
        }

        function C(a) {
            a && a !== A && B("Expected '" + a + "' instead of '" + A + "'");
            A = fa.charAt(y);
            y += 1;
            return A
        }

        function ga() {
            var a;
            a = "";
            "-" === A && (a = "-", C("-"));
            for (; "0" <= A && "9" >= A;)a += A, C();
            if ("." === A)for (a += "."; C() && "0" <= A && "9" >= A;)a += A;
            if ("e" === A || "E" === A) {
                a += A;
                C();
                if ("-" === A || "+" === A)a += A, C();
                for (; "0" <= A && "9" >= A;)a += A, C()
            }
            a = +a;
            if (isFinite(a))return a;
            B("Bad number")
        }

        function ha() {
            var a, b, c = "", d;
            if ('"' === A)for (; C();) {
                if ('"' === A)return C(), c;
                if ("\\" === A)if (C(), "u" === A) {
                    for (b = d = 0; 4 > b; b += 1) {
                        a = parseInt(C(), 16);
                        if (!isFinite(a))break;
                        d = 16 * d + a
                    }
                    c += String.fromCharCode(d)
                } else if ("string" === typeof ea[A])c += ea[A]; else break; else c += A
            }
            B("Bad string")
        }

        function D() {
            for (; A && " " >= A;)C()
        }

        function ia() {
            switch (A) {
                case "t":
                    return C("t"), C("r"), C("u"), C("e"), g;
                case "f":
                    return C("f"), C("a"), C("l"), C("s"), C("e"), i;
                case "n":
                    return C("n"), C("u"), C("l"), C("l"), h
            }
            B("Unexpected '" + A + "'")
        }

        var E;
        E = function () {
            D();
            switch (A) {
                case "{":
                    var a;
                    a:{
                        var b = {};
                        if ("{" === A) {
                            C("{");
                            D();
                            if ("}" === A) {
                                C("}");
                                a = b;
                                break a
                            }
                            for (; A;) {
                                a = ha();
                                D();
                                C(":");
                                Object.hasOwnProperty.call(b, a) && B('Duplicate key "' + a + '"');
                                b[a] = E();
                                D();
                                if ("}" === A) {
                                    C("}");
                                    a = b;
                                    break a
                                }
                                C(",");
                                D()
                            }
                        }
                        B("Bad object");
                        a = f
                    }
                    return a;
                case "[":
                    a:{
                        a = [];
                        if ("[" === A) {
                            C("[");
                            D();
                            if ("]" === A) {
                                C("]");
                                break a
                            }
                            for (; A;) {
                                a.push(E());
                                D();
                                if ("]" === A) {
                                    C("]");
                                    break a
                                }
                                C(",");
                                D()
                            }
                        }
                        B("Bad array");
                        a = f
                    }
                    return a;
                case '"':
                    return ha();
                case "-":
                    return ga();
                default:
                    return"0" <= A &&
                        "9" >= A ? ga() : ia()
            }
        };
        da = function (a, b) {
            var c;
            fa = a;
            y = 0;
            A = " ";
            c = E();
            D();
            A && B("Syntax error");
            return"function" === typeof b ? function e(a, c) {
                var n, m, z = a[c];
                if (z && "object" === typeof z)for (n in z)Object.prototype.hasOwnProperty.call(z, n) && (m = e(z, n), m !== f ? z[n] = m : delete z[n]);
                return b.call(a, c, z)
            }({"": c}, "") : c
        };
        var ja;

        function F(a) {
            return 10 > a ? "0" + a : a
        }

        function ka(a) {
            la.lastIndex = 0;
            return la.test(a) ? '"' + a.replace(la, function (a) {
                var c = ma[a];
                return"string" === typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function G(a, b) {
            var c, d, e, l, t = H, n, m = b[a];
            m && ("object" === typeof m && "function" === typeof m.toJSON) && (m = m.toJSON(a));
            "function" === typeof I && (m = I.call(b, a, m));
            switch (typeof m) {
                case "string":
                    return ka(m);
                case "number":
                    return isFinite(m) ? String(m) : "null";
                case "boolean":
                case "null":
                    return String(m);
                case "object":
                    if (!m)return"null";
                    H += J;
                    n = [];
                    if ("[object Array]" === Object.prototype.toString.apply(m)) {
                        l = m.length;
                        for (c = 0; c < l; c += 1)n[c] = G(c, m) || "null";
                        e = 0 === n.length ? "[]" : H ? "[\n" + H + n.join(",\n" + H) + "\n" + t + "]" : "[" +
                            n.join(",") + "]";
                        H = t;
                        return e
                    }
                    if (I && "object" === typeof I) {
                        l = I.length;
                        for (c = 0; c < l; c += 1)"string" === typeof I[c] && (d = I[c], (e = G(d, m)) && n.push(ka(d) + (H ? ": " : ":") + e))
                    } else for (d in m)Object.prototype.hasOwnProperty.call(m, d) && (e = G(d, m)) && n.push(ka(d) + (H ? ": " : ":") + e);
                    e = 0 === n.length ? "{}" : H ? "{\n" + H + n.join(",\n" + H) + "\n" + t + "}" : "{" + n.join(",") + "}";
                    H = t;
                    return e
            }
        }

        "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + F(this.getUTCMonth() + 1) + "-" + F(this.getUTCDate()) + "T" + F(this.getUTCHours()) + ":" + F(this.getUTCMinutes()) + ":" + F(this.getUTCSeconds()) + "Z" : h
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        });
        var la = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, H, J, ma = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, I;
        ja = function (a, b, c) {
            var d;
            J = H = "";
            if ("number" === typeof c)for (d = 0; d < c; d += 1)J += " "; else"string" === typeof c && (J = c);
            if ((I = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length))throw Error("JSON.stringify");
            return G("", {"": a})
        };
        function K(a) {
            var b = "", c;
            for (c in a)b && (b += "&"), b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c] + "");
            return b
        }

        function na(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                "" != d && !a.b.hasOwnProperty(d) && (a.a.push(d), a.b[d] = 1)
            }
        }

        p = function (a) {
            this.a = [];
            a = "string" == typeof a ? a.split(/\s+/) : a;
            this.b = {};
            na(this, a)
        };
        p.prototype.contains = function (a) {
            for (var b = 0; b < a.a.length; b++)if (!this.b.hasOwnProperty(a.a[b]))return i;
            return g
        };
        p.prototype.add = function (a) {
            na(this, a.a)
        };
        p.prototype.toString = function () {
            return this.a.join(" ")
        };
        q = {};
        var oa = h;
        q.t = function () {
            return oa
        };
        q.g = function (a) {
            x("domain", a, "string");
            var a = a.replace(/^\s+|\s+$/g, ""), b = "." + window.location.hostname;
            "." != a.charAt(0) && (a = "." + a);
            b.indexOf(a) != b.length - a.length && v("Site domain must contain the current page's domain");
            oa = a
        };
        q.l = function () {
        };
        q.l.prototype.getItem = function () {
        };
        q.l.setItem = function () {
        };
        q.l.removeItem = function () {
        };
        function L() {
        }

        L.prototype.getItem = function (a) {
            a = RegExp("(?:^|;)\\s*" + escape(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*)(?:;|$)").exec(document.cookie);
            return a == h ? h : unescape(a[1])
        };
        L.prototype.setItem = function (a, b, c) {
            var d;
            d = c == h ? "Fri, 31 Dec 9999 23:59:59 GMT" : (new Date((new Date).getTime() + 1E3 * c)).toGMTString();
            var e = q.t(), e = e == h ? "" : ";Domain=" + e, l = pa(M(window.location.href + "")) ? "" : ";Secure";
            document.cookie = a + "=" + escape(b) + ("session" == c ? "" : ";Expires=" + d) + e + ";Path=/" + l
        };
        L.prototype.removeItem = function (a) {
            q.d.setItem(a, "null", 0)
        };
        q.d = new L;
        function N(a) {
            this.a = a
        }

        N.prototype.getItem = function (a) {
            return this.a.getItem(a)
        };
        N.prototype.setItem = function (a, b, c) {
            this.a.setItem(a, b, c)
        };
        N.prototype.removeItem = function (a) {
            q.d.removeItem(a)
        };
        q.j = new N(q.d);
        r = {C: function (a, b) {
            if ("bearer" == a.token_type) {
                var c = ja({access_token: a.access_token, max_age: b, expiration_date: (new Date).getTime() + 1E3 * b, client_id: s.s(), scope: a.scope});
                q.j.setItem("amazon_Login_state_cache", c, "session")
            }
        }, D: function () {
            var a = q.j.getItem("amazon_Login_state_cache");
            return a != h && (a = da(a), a != h && a.expiration_date > (new Date).getTime()) ? (a.scope = new p(a.scope), a) : h
        }, m: function () {
            q.j.removeItem("amazon_Login_state_cache")
        }};
        function O(a, b, c, d, e, l) {
            this.a = new P(a, b, c);
            ("string" != typeof d || !d) && v("missing or invalid path: %s", d);
            this.e = d;
            "object" == typeof e && (e = K(e));
            e && "string" != typeof e && v("invalid query: %s", e);
            this.c = e || "";
            "object" == typeof l && (l = K(l));
            l && "string" != typeof l && v("invalid fragment: %s", l);
            this.b = l || ""
        }

        function M(a) {
            var b = document.createElement("div");
            b.innerHTML = "<a></a>";
            b.firstChild.href = a;
            b.innerHTML = b.innerHTML;
            a = b.firstChild;
            "" == a.host && (a.href = a.href);
            b = a.port;
            if (!b || "0" == b)b = h;
            var c = a.pathname;
            c ? "/" != c[0] && (c = "/" + c) : c = "/";
            return new O(a.protocol, a.hostname, b, c, a.search.substring(1), a.href.split("#")[1] || "")
        }

        k = O.prototype;
        k.scheme = function () {
            return this.a.scheme()
        };
        k.host = function () {
            return this.a.host()
        };
        k.port = function () {
            return this.a.port()
        };
        k.path = j("e");
        k.f = j("c");
        k.h = j("b");
        function pa(a) {
            var b = "http" == a.a.scheme(), a = a.a.host();
            return b && ("localhost" == a || "127.0.0.1" == a)
        }

        k.toString = function () {
            var a = this.a.toString(), a = a + this.e, a = a + (this.c ? "?" + this.c : "");
            return a += this.b ? "#" + this.b : ""
        };
        function qa(a, b) {
            return new O(b.scheme !== f ? b.scheme : a.scheme(), b.host !== f ? b.host : a.host(), b.port !== f ? b.port : a.port(), b.path !== f ? b.path : a.path(), b.f !== f ? b.f : a.f(), b.h !== f ? b.h : a.h())
        }

        function P(a, b, c) {
            var d;
            ("string" != typeof a || !(d = a.match(/^(https?)(:(\/\/)?)?$/i))) && v("missing or invalid scheme: %s", a);
            this.a = "http" == d[1] ? "http" : "https";
            ("string" != typeof b || !b.match(/^[\w\.\-]+$/)) && v("missing or invalid host: %s", b);
            this.c = b;
            if (c && ((c + "").match(/^\d+$/) || v("invalid port: %s", c), 80 == c && "http" == this.a || 443 == c && "https" == this.a))c = h;
            this.b = c ? c + "" : h
        }

        var ra = /^(http|https):\/\/([a-z0-9\-\.]+)(:(\d+))?$/i;
        P.prototype.scheme = j("a");
        P.prototype.host = j("c");
        P.prototype.port = j("b");
        P.prototype.toString = function () {
            var a;
            a = "" + (this.a + "://");
            a += this.c;
            return a += this.b ? ":" + this.b : ""
        };
        function Q(a, b, c, d) {
            return new O(a.a, a.c, a.b, b, c, d)
        }

        function sa(a) {
            for (var b = "", c = 0; c < a; c++)b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random()));
            return b
        }

        var R = {}, S = h;

        function ta(a) {
            var b = T;
            a:if (window.__toucanForceProxyOriginTo) {
                var b = window.__toucanForceProxyOriginTo, c = b.match(ra);
                if (c)b = new P(c[1], c[2], c[4] ? c[4] - 0 : h); else throw v("invalid origin: %s", b), Error();
            } else if (window.__toucanForceProxyOriginToThisOrigin)b = M(window.location.href + "").a; else {
                if (c = b.host().match(/^([\w\-\.]+\.)?amazon\.([\w\.]+)$/)) {
                    if ("https" == b.scheme()) {
                        b = new P("https", "api-cdn.amazon." + c[2], h);
                        break a
                    }
                    v("no proxy origin; unsupported non-https target origin for amazon: %s", b)
                }
                v("no proxy origin; unsupported target origin: %s",
                    b);
                throw Error();
            }
            c = b;
            if (!S) {
                var d = window.postMessage ? "pm" : "fr";
                window.__toucanForceTransport && (d = window.__toucanForceTransport);
                if ("pm" == d)d = new U; else if ("fr" == d)d = new V; else throw v("unknown transport: %s", d), Error();
                S = d;
                S.b(c, function (a, b) {
                    var c = R[a];
                    c && c.b(b)
                })
            }
            var d = b, e = S, c = d.host().replace(/[^a-z0-9]/ig, "_");
            d.port() && (c += "_" + d.port());
            var c = w("amazon-proxy-%s-%s", d.scheme(), c), l = document.getElementById(c);
            l || (l = document.createElement("iframe"), l.setAttribute("id", c), l.setAttribute("name",
                c), l.setAttribute("src", ua(d, e).toString()), ba("amazon-proxy-root").appendChild(l));
            d = sa(16);
            R[d] || (R[d] = new ca);
            R[d].a.push({r: a, v: i});
            a = b;
            b = {uri: va().toString(), proxy: c, topic: d, version: "1"};
            return Q(a, "/sdk/2015-06-02-3k4d8hvl/topic.html", b, "")
        }

        function va() {
            return qa(M(window.location.href + ""), {f: "", h: ""})
        }

        function ua(a, b) {
            var c = {uri: va().toString(), tr: b.name()};
            return Q(a, "/sdk/2015-06-02-3k4d8hvl/proxy.html", {version: "1"}, c)
        }

        var wa = /^ABMNZNXDC;([\w\d\_\-]+);(.*)$/;

        function xa(a) {
            var b = a.match(wa);
            if (b) {
                a = {};
                a.id = b[1];
                for (var c = {}, b = b[2].split("&"), d = 0; d < b.length; d++) {
                    var e = b[d].split("=");
                    2 == e.length && (c[e[0]] = decodeURIComponent(e[1].replace(/\+/g, " ")))
                }
                a.data = c;
                return a
            }
            return h
        }

        function U() {
            this.a = f
        }

        U.prototype.name = function () {
            return"pm"
        };
        U.prototype.b = function (a, b) {
            if (this.a === f) {
                var c = this.a = new ca, d = function (a) {
                    var b;
                    (b = xa(a.data)) && c.b(a.origin, b.id, b.data)
                };
                window.addEventListener ? window.addEventListener("message", d, i) : window.attachEvent ? window.attachEvent("onmessage", d) : v("cannot attach message event")
            }
            var e = a.toString();
            this.a.a.push({r: function (a, c, d) {
                a != e || b(c, d)
            }, v: g})
        };
        U.prototype.send = function (a, b, c) {
            var d = a.a;
            setTimeout(function () {
                window.parent.postMessage(w("%s;%s;%s", "ABMNZNXDC", b, K(c)), d.toString())
            }, 1)
        };
        function V() {
        }

        V.prototype.name = function () {
            return"fr"
        };
        V.prototype.b = function (a, b) {
            window.__toucanInvokeFragment = function (a, d) {
                b(a, d)
            }
        };
        V.prototype.send = function (a, b, c) {
            var d = a.f();
            (d = d || "") && (d += "&");
            d = d + "ABMNZNXDC" + ("=" + sa(8));
            a = qa(a, {f: d, h: w("%s;%s;%s", "ABMNZNXDC", b, K(c))});
            b = document.createElement("iframe");
            b.setAttribute("src", a.toString());
            document.body.appendChild(b)
        };
        var ya = window.location.href.split("#")[1] || "";
        if (ya) {
            var za = xa(ya);
            za && (document.documentElement.style.display = "none", "function" == typeof window.parent.parent.__toucanInvokeFragment && window.parent.parent.__toucanInvokeFragment(za.id, za.data))
        }
        function Aa() {
            W != h && ("function" == typeof W.close && W.close(), W = h)
        }

        function Ba(a, b, c) {
            b = {client_id: X, redirect_uri: b, response_type: a.response_type, scope: a.scope.toString(), language: Ca, ui_locales: Da};
            a.response_mode && (b.response_mode = a.response_mode);
            a.direct_post_uri && (b.direct_post_uri = a.direct_post_uri);
            a.scope_data && (b.scope_data = a.scope_data);
            Ea && (b.sandbox = g);
            a.state && (b.state = a.state);
            c && (b.exac = c);
            return Q(T, "/ap/oa", b)
        }

        function Fa(a, b, c) {
            Y = i;
            b.access_token != h ? (c = parseInt(b.expires_in, 10), c = 60 >= c ? c : c - Math.min(Math.floor(0.1 * c), 300), r.C(b, c), s.z() ? q.d.setItem("amazon_Login_accessToken", b.access_token, c) : q.d.removeItem("amazon_Login_accessToken")) : c && q.d.removeItem("amazon_Login_accessToken");
            a.u(b);
            a = Ga;
            Ga = [];
            for (b = 0; b < a.length; b++)Ha(a[b])
        }

        function Ia(a, b) {
            var b = b + (-1 == b.indexOf("?") ? "?" : "&"), b = b + K(a), c = M(b), d = M(window.location.href + "");
            "https" != c.scheme() && !pa(c) && v("attempted redirect to %s but scheme is not HTTPS", b);
            c.host() != d.host() && v("attempted redirect to %s but it does not match current host %s", c.host(), d.host());
            c = b;
            Aa();
            window.location.href = c
        }

        function Ja(a) {
            var b = this;
            this.b = a;
            this.n = h;
            this.e = [];
            this.c = h;
            this.a = {status: h, onComplete: function (a) {
                "string" != typeof a && "function" != typeof a && v("onComplete expects handler parameter to be a function or a string");
                var d = b.a.status == Z.p;
                "string" == typeof a ? d ? Ia(b.c, a) : b.n = a : "function" == typeof a && (d ? setTimeout(function () {
                    a(b.a)
                }, 0) : b.e.push(a));
                return b.a
            }}
        }

        function Ha(a) {
            var b = a.b, c = h;
            if (b.interactive == $.ALWAYS)r.m(); else {
                var d = h;
                s.z() && (d = q.d.getItem("amazon_Login_accessToken"));
                if (c = r.D())"token" == b.response_type && b.scope.add(c.scope), d ? d != c.access_token && (r.m(), c = h) : d = c.access_token;
                var e;
                if (c && c.scope.contains(b.scope) && "token" == b.response_type)e = {access_token: c.access_token, token_type: "bearer", expires_in: Math.floor((c.expiration_date - (new Date).getTime()) / 1E3), scope: c.scope.toString()}, b.state != h && (e.state = b.state); else if (b.interactive == $.NEVER) {
                    if (Y) {
                        Ga.push(a);
                        a.o(Z.B);
                        return
                    }
                    if (d) {
                        b = d;
                        Y = g;
                        var l = ba("amazon-client-credentials-root"), c = ba("amazon-client-credentials-root"), t = sa(16), d = document.createElement("iframe");
                        d.setAttribute("name", t);
                        c.appendChild(d);
                        0 == document.getElementsByName(t).length && (c.removeChild(d), d = document.createElement('<iframe name="' + t + '"/>'), c.appendChild(d));
                        d.setAttribute("id", t);
                        var n = document.createElement("form");
                        l.appendChild(n);
                        n.setAttribute("method", "POST");
                        n.setAttribute("target", t);
                        d = ta(function (b) {
                            l.removeChild(n);
                            var c =
                                document.getElementById(t);
                            c != h && c.parentNode != h && c.parentNode.removeChild(c);
                            b == h && (b = {error: "server_error", description: "Server error."});
                            Fa(a, b, i)
                        });
                        c = a.b;
                        b = {client_id: X, exac: b, grant_type: "client_credentials", redirect_uri: d, response_type: c.response_type, scope: c.scope};
                        c.state != h && (b.state = c.state);
                        c.response_mode != h && (b.response_mode = c.response_mode);
                        c.direct_post_uri != h && (b.direct_post_uri = c.direct_post_uri);
                        c.scope_data != h && (b.scope_data = c.scope_data);
                        n.setAttribute("action", Q(T, "/ap/oa", b).toString());
                        n.submit();
                        return
                    }
                    e = {error: "invalid_grant", error_description: "invalid grant"}
                }
                if (e) {
                    setTimeout(function () {
                        a.u(e)
                    }, 0);
                    return
                }
            }
            b = d;
            Y = g;
            c = ta(function (b) {
                Aa();
                Fa(a, b, g)
            });
            b = Ba(a.b, c, b);
            c = (window.screenX !== f ? window.screenX : window.screenLeft) + Math.floor(((window.outerWidth !== f ? window.outerWidth : document.documentElement.clientWidth) - 800) / 2);
            d = (window.screenY !== f ? window.screenY : window.screenTop) + Math.floor(((window.outerHeight !== f ? window.outerHeight : document.documentElement.clientHeight) - 540) / 2);
            c = w("left=%s,top=%s,width=%s,height=%s,location=1,scrollbars=1",
                0 > c ? 0 : c, 0 > d ? 0 : d, 800, 540);
            W = window.open(b.toString(), "amazonloginpopup", c)
        }

        s = {k: {NorthAmerica: "NA", Europe: "EU", AsiaPacific: "APAC"}};
        var $ = {ALWAYS: "always", i: "auto", NEVER: "never"}, W = h, Y = i, Ga = [], Z = {B: "queued", A: "in_progress", p: "complete"}, X = f;
        s.s = function () {
            return X
        };
        s.H = function (a) {
            a.match(/^[\w\-\.]+$/) || v("invalid client ID: %s", a);
            X = a
        };
        var Ka = "www.amazon.com", T = new P("https", Ka, h);
        s.t = function () {
            return Ka
        };
        var Ea = i;
        s.L = function (a) {
            "number" == typeof a && (a = !!a);
            x("sandboxMode", a, "boolean");
            Ea = a
        };
        s.g = function (a) {
            var b = a.match(/^((http|https):\/\/)?([a-z0-9\-\.]+)(:(\d+))?\/?$/i);
            b || v("invalid domain: %s", a);
            var c = b[2] ? b[2].toLowerCase() : "https";
            "https" != c && v("invalid domain: %s; scheme must be https");
            var d = b[3];
            d.match(/^amazon\.[a-z\.]+$/) && (d = "www." + d);
            b = b[5];
            Ka = a;
            T = new P(c, d, b)
        };
        s.K = function (a) {
            a && (a === s.k.Europe ? s.g("https://eu.account.amazon.com") : a === s.k.AsiaPacific ? s.g("https://apac.account.amazon.com") : s.g("https://www.amazon.com"))
        };
        var Ca = "";
        s.I = function (a) {
            Ca = a
        };
        var Da = "";
        s.J = function (a) {
            Da = a
        };
        s.F = function () {
            return T
        };
        var La = i;
        s.z = function () {
            return La
        };
        s.M = function (a) {
            a == h ? v("missing useCookie") : "number" == typeof a ? a = !!a : "boolean" != typeof a && v("expected useCookie to be a boolean");
            La = a
        };
        Ja.prototype.u = function (a) {
            this.c = a;
            aa(this.a, a);
            this.o(Z.p);
            for (a = 0; a < this.e.length; a++)this.e[a](this.a);
            this.n != h && Ia(this.c, this.n)
        };
        Ja.prototype.o = function (a) {
            this.a.status = a
        };
        s.q = function (a, b) {
            2 > arguments.length && v("authorize expects two arguments (options, next)");
            a && "object" != typeof a && v("authorize expects options parameter to be an object");
            b != h && ("function" != typeof b && "string" != typeof b) && v("authorize expects next parameter to be a function or a string");
            var c = aa({interactive: $.i, popup: g, response_type: "token", response_mode: f, direct_post_uri: f, state: f, scope: f, scope_data: f}, a || {});
            x("options.response_type", c.response_type, "string");
            c.scope || v("missing options.scope");
            c.scope.constructor !== Array && "string" != typeof c.scope && v("expected options.scope to be a string or array");
            c.scope = new p(c.scope);
            c.response_mode && x("options.response_mode", c.response_mode, "string");
            c.direct_post_uri && x("options.direct_post_uri", c.direct_post_uri, "string");
            c.scope_data && (c.scope_data = ja(c.scope_data));
            c.interactive == h ? c.interactive = $.i : c.interactive != $.i && (c.interactive != $.ALWAYS && c.interactive != $.NEVER) && v("expected options.scope to be one of '" + $.i + "', '" + $.ALWAYS + "', or '" + $.NEVER +
                "'");
            var a = c, d = new Ja(a), c = d.a;
            d.o(Z.A);
            if (b != h)c.onComplete(b);
            a.popup ? Ha(d) : ("string" != typeof b && v("next must be redirect URI if !options.popup"), d = Ba(a, M(b + ""), h).toString(), window.top.location.href = d);
            return c
        };
        s.G = function () {
            r.m();
            q.d.removeItem("amazon_Login_accessToken")
        };
        function Ma(a, b) {
            var c;
            try {
                c = da(a)
            } catch (d) {
                c = h
            }
            if (c && c.Error) {
                var e = {success: i};
                e.error = w("%s: %s", c.Error.Code || "UnknownError", c.Error.Message || "An unknown error occurred");
                b(e)
            } else c && c.Profile ? (e = {success: g}, e.profile = c.Profile, b(e)) : (e = {success: i, error: "UnknownError: Incomprehensible response from profile endpoint"}, b(e))
        }

        u = {w: function (a, b) {
            if (b == h && "function" == typeof a)b = a, s.q({scope: "profile"}, function (a) {
                a.error == h ? u.w(a.access_token, b) : b({success: i, error: a.error})
            }); else if (x("accessToken", a, "string"), x("callback", b, "function"), window.XMLHttpRequest && "withCredentials"in new window.XMLHttpRequest || "undefined" !== typeof window.XDomainRequest) {
                var c = Q(s.F(), "/ap/user/profile", {access_token: a}, ""), d;
                if (window.XDomainRequest)d = new window.XDomainRequest, d.onload = function () {
                    Ma(d.responseText, b)
                }; else {
                    var e = i;
                    d = new window.XMLHttpRequest;
                    d.onreadystatechange = function () {
                        e || 4 != d.readyState || (e = g, Ma(d.responseText, b))
                    }
                }
                d.open("GET", c, g);
                d.send()
            } else b({success: i, error: "UnsupportedOperation: Cannot retrieve profile in this browser"})
        }};
        window.amazon = window.amazon || {};
        window.amazon.Login = window.amazon.Login || {};
        window.amazon.Login.getClientId = function () {
            return s.s()
        };
        window.amazon.Login.setClientId = function (a) {
            return s.H(a)
        };
        window.amazon.Login.setDomain = function (a) {
            return s.g(a)
        };
        window.amazon.Login.setSandboxMode = function (a) {
            return s.L(a)
        };
        window.amazon.Login.setSiteDomain = function (a) {
            return q.g(a)
        };
        window.amazon.Login.Region = s.k;
        window.amazon.Login.setRegion = function (a) {
            return s.K(a)
        };
        window.amazon.Login.setLanguage = function (a) {
            return s.I(a)
        };
        window.amazon.Login.setLanguageHint = function (a) {
            return s.J(a)
        };
        window.amazon.Login.setUseCookie = function (a) {
            return s.M(a)
        };
        window.amazon.Login.authorize = function (a, b) {
            return s.q(a, b)
        };
        window.amazon.Login.logout = function () {
            return s.G()
        };
        window.amazon.Login.retrieveProfile = function (a, b) {
            return u.w(a, b)
        };
        if ("function" == typeof window.onAmazonLoginReady)window.onAmazonLoginReady();

    })();
}
