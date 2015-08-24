(function (a) {
    var e = 20, j = 256, h = /\(?([^\s]*):(\d+):\d+\)?/, b = /.*@(.*):(\d*)/;

    function i(k) {
        if (k) {
            return k.replace(/^\s+|\s+$/g, "");
        }
    }

    function d(k) {
        if (!k || !k.s) {
            return;
        }
        var l, m = k.s.length > 0 ? k.s[0] : "", n = k.s.length > 1 ? k.s[1] : "";
        if (m) {
            l = m.match(b);
        }
        if ((!l || l.length != 3) && n) {
            l = n.match(h);
        }
        if (l && l.length == 3) {
            k.f = l[1];
            k.l = l[2];
        }
    }

    function c(n) {
        if (!n) {
            return{};
        }
        var p = {m: (n.m || n.message || "Unknown error"), f: (n.f || n.sourceURL || n.fileName), l: (n.l || n.line || n.lineNumber), s: [], name: n.name, type: n.type, csm: "v1 " + (n.fromOnError ? "onerror" : "ueLogError")}, k, o, l, m = 0;
        if (n && n.stack && n.stack.split) {
            p.csm += " stack";
            k = n.stack.split("\n");
            while (m < k.length && p.s.length < e) {
                o = k[m++];
                if (o) {
                    p.s.push(i(o));
                }
            }
        } else {
            p.csm += " callee";
            l = (n.args || arguments).callee;
            m = 0;
            while (l && m < e) {
                if (!l.skipTrace) {
                    o = l.toString();
                    if (o && o.substr) {
                        p.s.push(o.substr(0, j));
                    }
                }
                l = l.caller;
                m++;
            }
        }
        if (!p.f && p.s.length > 0) {
            d(p);
        }
        return p;
    }

    function g(k) {
        if (!k) {
            return;
        }
        a.ue.log(c(k), "jserr");
    }

    function f(k) {
        if ((!k) || (a.ue_err.ec > a.ue_err.mxe)) {
            return;
        }
        a.ue_err.ec++;
        g(k);
    }

    g.skipTrace = 1;
    c.skipTrace = 1;
    f.skipTrace = 1;
    (function () {
        if (!a.ue_err.erl) {
            return;
        }
        var k = a.ue_err.erl.length, l;
        for (l = 0;
             l < k;
             l++) {
            g(a.ue_err.erl[l]);
        }
        ue_err.erl = [];
    })();
    a.ueLogError = f;
})(ue_csm);