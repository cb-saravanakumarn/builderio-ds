import * as _ from "react";
import V, { createContext as dt, useMemo as et, createElement as w, useContext as rt, useCallback as q, forwardRef as N, Children as lt, isValidElement as sn, cloneElement as lo, Fragment as st, useRef as j, useEffect as W, useState as F, useLayoutEffect as Dr, useReducer as Mr } from "react";
import * as bc from "react-dom";
import hc, { flushSync as Lr, createPortal as uo } from "react-dom";
var Xn = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qo;
function vc() {
  if (Qo)
    return Ot;
  Qo = 1;
  var e = V, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, i, l) {
    var u, f = {}, h = null, b = null;
    l !== void 0 && (h = "" + l), i.key !== void 0 && (h = "" + i.key), i.ref !== void 0 && (b = i.ref);
    for (u in i)
      o.call(i, u) && !s.hasOwnProperty(u) && (f[u] = i[u]);
    if (c && c.defaultProps)
      for (u in i = c.defaultProps, i)
        f[u] === void 0 && (f[u] = i[u]);
    return { $$typeof: t, type: c, key: h, ref: b, props: f, _owner: r.current };
  }
  return Ot.Fragment = n, Ot.jsx = a, Ot.jsxs = a, Ot;
}
var It = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function mc() {
  return er || (er = 1, process.env.NODE_ENV !== "production" && function() {
    var e = V, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v = Symbol.iterator, p = "@@iterator";
    function x(g) {
      if (g === null || typeof g != "object")
        return null;
      var T = v && g[v] || g[p];
      return typeof T == "function" ? T : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(g) {
      {
        for (var T = arguments.length, I = new Array(T > 1 ? T - 1 : 0), X = 1; X < T; X++)
          I[X - 1] = arguments[X];
        y("error", g, I);
      }
    }
    function y(g, T, I) {
      {
        var X = $.ReactDebugCurrentFrame, re = X.getStackAddendum();
        re !== "" && (T += "%s", I = I.concat([re]));
        var le = I.map(function(ee) {
          return String(ee);
        });
        le.unshift("Warning: " + T), Function.prototype.apply.call(console[g], console, le);
      }
    }
    var C = !1, E = !1, R = !1, S = !1, O = !1, D;
    D = Symbol.for("react.module.reference");
    function z(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === o || g === s || O || g === r || g === l || g === u || S || g === b || C || E || R || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === f || g.$$typeof === a || g.$$typeof === c || g.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === D || g.getModuleId !== void 0));
    }
    function G(g, T, I) {
      var X = g.displayName;
      if (X)
        return X;
      var re = T.displayName || T.name || "";
      return re !== "" ? I + "(" + re + ")" : I;
    }
    function k(g) {
      return g.displayName || "Context";
    }
    function Z(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case r:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case c:
            var T = g;
            return k(T) + ".Consumer";
          case a:
            var I = g;
            return k(I._context) + ".Provider";
          case i:
            return G(g, g.render, "ForwardRef");
          case f:
            var X = g.displayName || null;
            return X !== null ? X : Z(g.type) || "Memo";
          case h: {
            var re = g, le = re._payload, ee = re._init;
            try {
              return Z(ee(le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, M = 0, K, H, ie, ne, Se, he, me;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function _e() {
      {
        if (M === 0) {
          K = console.log, H = console.info, ie = console.warn, ne = console.error, Se = console.group, he = console.groupCollapsed, me = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        M++;
      }
    }
    function je() {
      {
        if (M--, M === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, g, {
              value: K
            }),
            info: A({}, g, {
              value: H
            }),
            warn: A({}, g, {
              value: ie
            }),
            error: A({}, g, {
              value: ne
            }),
            group: A({}, g, {
              value: Se
            }),
            groupCollapsed: A({}, g, {
              value: he
            }),
            groupEnd: A({}, g, {
              value: me
            })
          });
        }
        M < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = $.ReactCurrentDispatcher, U;
    function se(g, T, I) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (re) {
            var X = re.stack.trim().match(/\n( *(at )?)/);
            U = X && X[1] || "";
          }
        return `
` + U + g;
      }
    }
    var fe = !1, ae;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new ce();
    }
    function oe(g, T) {
      if (!g || fe)
        return "";
      {
        var I = ae.get(g);
        if (I !== void 0)
          return I;
      }
      var X;
      fe = !0;
      var re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var le;
      le = ge.current, ge.current = null, _e();
      try {
        if (T) {
          var ee = function() {
            throw Error();
          };
          if (Object.defineProperty(ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ee, []);
            } catch (We) {
              X = We;
            }
            Reflect.construct(g, [], ee);
          } else {
            try {
              ee.call();
            } catch (We) {
              X = We;
            }
            g.call(ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (We) {
            X = We;
          }
          g();
        }
      } catch (We) {
        if (We && X && typeof We.stack == "string") {
          for (var J = We.stack.split(`
`), ye = X.stack.split(`
`), pe = J.length - 1, ve = ye.length - 1; pe >= 1 && ve >= 0 && J[pe] !== ye[ve]; )
            ve--;
          for (; pe >= 1 && ve >= 0; pe--, ve--)
            if (J[pe] !== ye[ve]) {
              if (pe !== 1 || ve !== 1)
                do
                  if (pe--, ve--, ve < 0 || J[pe] !== ye[ve]) {
                    var Oe = `
` + J[pe].replace(" at new ", " at ");
                    return g.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", g.displayName)), typeof g == "function" && ae.set(g, Oe), Oe;
                  }
                while (pe >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        fe = !1, ge.current = le, je(), Error.prepareStackTrace = re;
      }
      var vt = g ? g.displayName || g.name : "", Jo = vt ? se(vt) : "";
      return typeof g == "function" && ae.set(g, Jo), Jo;
    }
    function $e(g, T, I) {
      return oe(g, !1);
    }
    function we(g) {
      var T = g.prototype;
      return !!(T && T.isReactComponent);
    }
    function Ee(g, T, I) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return oe(g, we(g));
      if (typeof g == "string")
        return se(g);
      switch (g) {
        case l:
          return se("Suspense");
        case u:
          return se("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case i:
            return $e(g.render);
          case f:
            return Ee(g.type, T, I);
          case h: {
            var X = g, re = X._payload, le = X._init;
            try {
              return Ee(le(re), T, I);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, qe = {}, Xt = $.ReactDebugCurrentFrame;
    function pt(g) {
      if (g) {
        var T = g._owner, I = Ee(g.type, g._source, T ? T.type : null);
        Xt.setExtraStackFrame(I);
      } else
        Xt.setExtraStackFrame(null);
    }
    function Nn(g, T, I, X, re) {
      {
        var le = Function.call.bind(De);
        for (var ee in g)
          if (le(g, ee)) {
            var J = void 0;
            try {
              if (typeof g[ee] != "function") {
                var ye = Error((X || "React class") + ": " + I + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              J = g[ee](T, ee, X, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pe) {
              J = pe;
            }
            J && !(J instanceof Error) && (pt(re), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", I, ee, typeof J), pt(null)), J instanceof Error && !(J.message in qe) && (qe[J.message] = !0, pt(re), m("Failed %s type: %s", I, J.message), pt(null));
          }
      }
    }
    var bt = Array.isArray;
    function On(g) {
      return bt(g);
    }
    function qa(g) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, I = T && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return I;
      }
    }
    function Za(g) {
      try {
        return zo(g), !1;
      } catch {
        return !0;
      }
    }
    function zo(g) {
      return "" + g;
    }
    function Bo(g) {
      if (Za(g))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qa(g)), zo(g);
    }
    var Nt = $.ReactCurrentOwner, Ja = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ho, Uo, In;
    In = {};
    function Qa(g) {
      if (De.call(g, "ref")) {
        var T = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function ec(g) {
      if (De.call(g, "key")) {
        var T = Object.getOwnPropertyDescriptor(g, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function tc(g, T) {
      if (typeof g.ref == "string" && Nt.current && T && Nt.current.stateNode !== T) {
        var I = Z(Nt.current.type);
        In[I] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Nt.current.type), g.ref), In[I] = !0);
      }
    }
    function nc(g, T) {
      {
        var I = function() {
          Ho || (Ho = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        I.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function oc(g, T) {
      {
        var I = function() {
          Uo || (Uo = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        I.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var rc = function(g, T, I, X, re, le, ee) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: T,
        ref: I,
        props: ee,
        // Record the component responsible for creating this element.
        _owner: le
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function sc(g, T, I, X, re) {
      {
        var le, ee = {}, J = null, ye = null;
        I !== void 0 && (Bo(I), J = "" + I), ec(T) && (Bo(T.key), J = "" + T.key), Qa(T) && (ye = T.ref, tc(T, re));
        for (le in T)
          De.call(T, le) && !Ja.hasOwnProperty(le) && (ee[le] = T[le]);
        if (g && g.defaultProps) {
          var pe = g.defaultProps;
          for (le in pe)
            ee[le] === void 0 && (ee[le] = pe[le]);
        }
        if (J || ye) {
          var ve = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          J && nc(ee, ve), ye && oc(ee, ve);
        }
        return rc(g, J, ye, re, X, Nt.current, ee);
      }
    }
    var kn = $.ReactCurrentOwner, Xo = $.ReactDebugCurrentFrame;
    function ht(g) {
      if (g) {
        var T = g._owner, I = Ee(g.type, g._source, T ? T.type : null);
        Xo.setExtraStackFrame(I);
      } else
        Xo.setExtraStackFrame(null);
    }
    var jn;
    jn = !1;
    function Dn(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function Go() {
      {
        if (kn.current) {
          var g = Z(kn.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function ac(g) {
      {
        if (g !== void 0) {
          var T = g.fileName.replace(/^.*[\\\/]/, ""), I = g.lineNumber;
          return `

Check your code at ` + T + ":" + I + ".";
        }
        return "";
      }
    }
    var Ko = {};
    function cc(g) {
      {
        var T = Go();
        if (!T) {
          var I = typeof g == "string" ? g : g.displayName || g.name;
          I && (T = `

Check the top-level render call using <` + I + ">.");
        }
        return T;
      }
    }
    function Yo(g, T) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var I = cc(T);
        if (Ko[I])
          return;
        Ko[I] = !0;
        var X = "";
        g && g._owner && g._owner !== kn.current && (X = " It was passed a child from " + Z(g._owner.type) + "."), ht(g), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, X), ht(null);
      }
    }
    function qo(g, T) {
      {
        if (typeof g != "object")
          return;
        if (On(g))
          for (var I = 0; I < g.length; I++) {
            var X = g[I];
            Dn(X) && Yo(X, T);
          }
        else if (Dn(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var re = x(g);
          if (typeof re == "function" && re !== g.entries)
            for (var le = re.call(g), ee; !(ee = le.next()).done; )
              Dn(ee.value) && Yo(ee.value, T);
        }
      }
    }
    function ic(g) {
      {
        var T = g.type;
        if (T == null || typeof T == "string")
          return;
        var I;
        if (typeof T == "function")
          I = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === f))
          I = T.propTypes;
        else
          return;
        if (I) {
          var X = Z(T);
          Nn(I, g.props, "prop", X, g);
        } else if (T.PropTypes !== void 0 && !jn) {
          jn = !0;
          var re = Z(T);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lc(g) {
      {
        for (var T = Object.keys(g.props), I = 0; I < T.length; I++) {
          var X = T[I];
          if (X !== "children" && X !== "key") {
            ht(g), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), ht(null);
            break;
          }
        }
        g.ref !== null && (ht(g), m("Invalid attribute `ref` supplied to `React.Fragment`."), ht(null));
      }
    }
    function Zo(g, T, I, X, re, le) {
      {
        var ee = z(g);
        if (!ee) {
          var J = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = ac(re);
          ye ? J += ye : J += Go();
          var pe;
          g === null ? pe = "null" : On(g) ? pe = "array" : g !== void 0 && g.$$typeof === t ? (pe = "<" + (Z(g.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof g, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pe, J);
        }
        var ve = sc(g, T, I, re, le);
        if (ve == null)
          return ve;
        if (ee) {
          var Oe = T.children;
          if (Oe !== void 0)
            if (X)
              if (On(Oe)) {
                for (var vt = 0; vt < Oe.length; vt++)
                  qo(Oe[vt], g);
                Object.freeze && Object.freeze(Oe);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qo(Oe, g);
        }
        return g === o ? lc(ve) : ic(ve), ve;
      }
    }
    function dc(g, T, I) {
      return Zo(g, T, I, !0);
    }
    function uc(g, T, I) {
      return Zo(g, T, I, !1);
    }
    var fc = uc, pc = dc;
    It.Fragment = o, It.jsx = fc, It.jsxs = pc;
  }()), It;
}
process.env.NODE_ENV === "production" ? Xn.exports = vc() : Xn.exports = mc();
var d = Xn.exports;
function Fr(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Fr(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function gc() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Fr(e)) && (o && (o += " "), o += t);
  return o;
}
const tr = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, nr = gc, ue = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return nr(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: s } = t, a = Object.keys(r).map((l) => {
    const u = n == null ? void 0 : n[l], f = s == null ? void 0 : s[l];
    if (u === null)
      return null;
    const h = tr(u) || tr(f);
    return r[l][h];
  }), c = n && Object.entries(n).reduce((l, u) => {
    let [f, h] = u;
    return h === void 0 || (l[f] = h), l;
  }, {}), i = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((l, u) => {
    let { class: f, className: h, ...b } = u;
    return Object.entries(b).every((v) => {
      let [p, x] = v;
      return Array.isArray(x) ? x.includes({
        ...s,
        ...c
      }[p]) : {
        ...s,
        ...c
      }[p] === x;
    }) ? [
      ...l,
      f,
      h
    ] : l;
  }, []);
  return nr(e, a, i, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function P() {
  return P = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, P.apply(this, arguments);
}
function Te(e, t = []) {
  let n = [];
  function o(s, a) {
    const c = /* @__PURE__ */ dt(a), i = n.length;
    n = [
      ...n,
      a
    ];
    function l(f) {
      const { scope: h, children: b, ...v } = f, p = (h == null ? void 0 : h[e][i]) || c, x = et(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ w(p.Provider, {
        value: x
      }, b);
    }
    function u(f, h) {
      const b = (h == null ? void 0 : h[e][i]) || c, v = rt(b);
      if (v)
        return v;
      if (a !== void 0)
        return a;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return l.displayName = s + "Provider", [
      l,
      u
    ];
  }
  const r = () => {
    const s = n.map((a) => /* @__PURE__ */ dt(a));
    return function(c) {
      const i = (c == null ? void 0 : c[e]) || s;
      return et(
        () => ({
          [`__scope${e}`]: {
            ...c,
            [e]: i
          }
        }),
        [
          c,
          i
        ]
      );
    };
  };
  return r.scopeName = e, [
    o,
    xc(r, ...t)
  ];
}
function xc(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map(
      (r) => ({
        useScope: r(),
        scopeName: r.scopeName
      })
    );
    return function(s) {
      const a = o.reduce((c, { useScope: i, scopeName: l }) => {
        const f = i(s)[`__scope${l}`];
        return {
          ...c,
          ...f
        };
      }, {});
      return et(
        () => ({
          [`__scope${t.scopeName}`]: a
        }),
        [
          a
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function $c(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Vr(...e) {
  return (t) => e.forEach(
    (n) => $c(n, t)
  );
}
function Q(...e) {
  return q(Vr(...e), e);
}
const He = /* @__PURE__ */ N((e, t) => {
  const { children: n, ...o } = e, r = lt.toArray(n), s = r.find(wc);
  if (s) {
    const a = s.props.children, c = r.map((i) => i === s ? lt.count(a) > 1 ? lt.only(null) : /* @__PURE__ */ sn(a) ? a.props.children : null : i);
    return /* @__PURE__ */ w(Gn, P({}, o, {
      ref: t
    }), /* @__PURE__ */ sn(a) ? /* @__PURE__ */ lo(a, void 0, c) : null);
  }
  return /* @__PURE__ */ w(Gn, P({}, o, {
    ref: t
  }), n);
});
He.displayName = "Slot";
const Gn = /* @__PURE__ */ N((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ sn(n) ? /* @__PURE__ */ lo(n, {
    ...yc(o, n.props),
    ref: t ? Vr(t, n.ref) : n.ref
  }) : lt.count(n) > 1 ? lt.only(null) : null;
});
Gn.displayName = "SlotClone";
const Wr = ({ children: e }) => /* @__PURE__ */ w(st, null, e);
function wc(e) {
  return /* @__PURE__ */ sn(e) && e.type === Wr;
}
function yc(e, t) {
  const n = {
    ...t
  };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...c) => {
      s(...c), r(...c);
    } : r && (n[o] = r) : o === "style" ? n[o] = {
      ...r,
      ...s
    } : o === "className" && (n[o] = [
      r,
      s
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function pn(e) {
  const t = e + "CollectionProvider", [n, o] = Te(t), [r, s] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), a = (b) => {
    const { scope: v, children: p } = b, x = V.useRef(null), $ = V.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ V.createElement(r, {
      scope: v,
      itemMap: $,
      collectionRef: x
    }, p);
  }, c = e + "CollectionSlot", i = /* @__PURE__ */ V.forwardRef((b, v) => {
    const { scope: p, children: x } = b, $ = s(c, p), m = Q(v, $.collectionRef);
    return /* @__PURE__ */ V.createElement(He, {
      ref: m
    }, x);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ V.forwardRef((b, v) => {
    const { scope: p, children: x, ...$ } = b, m = V.useRef(null), y = Q(v, m), C = s(l, p);
    return V.useEffect(() => (C.itemMap.set(m, {
      ref: m,
      ...$
    }), () => void C.itemMap.delete(m))), /* @__PURE__ */ V.createElement(He, {
      [u]: "",
      ref: y
    }, x);
  });
  function h(b) {
    const v = s(e + "CollectionConsumer", b);
    return V.useCallback(() => {
      const x = v.collectionRef.current;
      if (!x)
        return [];
      const $ = Array.from(x.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (C, E) => $.indexOf(C.ref.current) - $.indexOf(E.ref.current)
      );
    }, [
      v.collectionRef,
      v.itemMap
    ]);
  }
  return [
    {
      Provider: a,
      Slot: i,
      ItemSlot: f
    },
    h,
    o
  ];
}
function L(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function be(e) {
  const t = j(e);
  return W(() => {
    t.current = e;
  }), et(
    () => (...n) => {
      var o;
      return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...n);
    },
    []
  );
}
function Ne({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = Cc({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, a = s ? e : o, c = be(n), i = q((l) => {
    if (s) {
      const f = typeof l == "function" ? l(e) : l;
      f !== e && c(f);
    } else
      r(l);
  }, [
    s,
    e,
    r,
    c
  ]);
  return [
    a,
    i
  ];
}
function Cc({ defaultProp: e, onChange: t }) {
  const n = F(e), [o] = n, r = j(o), s = be(t);
  return W(() => {
    r.current !== o && (s(o), r.current = o);
  }, [
    o,
    r,
    s
  ]), n;
}
const Ec = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], B = Ec.reduce((e, t) => {
  const n = /* @__PURE__ */ N((o, r) => {
    const { asChild: s, ...a } = o, c = s ? He : t;
    return W(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(c, P({}, a, {
      ref: r
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function zr(e, t) {
  e && Lr(
    () => e.dispatchEvent(t)
  );
}
const Pe = globalThis != null && globalThis.document ? Dr : () => {
};
function Pc(e, t) {
  return Mr((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const xe = (e) => {
  const { present: t, children: n } = e, o = Tc(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : lt.only(n), s = Q(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ lo(r, {
    ref: s
  }) : null;
};
xe.displayName = "Presence";
function Tc(e) {
  const [t, n] = F(), o = j({}), r = j(e), s = j("none"), a = e ? "mounted" : "unmounted", [c, i] = Pc(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return W(() => {
    const l = Gt(o.current);
    s.current = c === "mounted" ? l : "none";
  }, [
    c
  ]), Pe(() => {
    const l = o.current, u = r.current;
    if (u !== e) {
      const h = s.current, b = Gt(l);
      e ? i("MOUNT") : b === "none" || (l == null ? void 0 : l.display) === "none" ? i("UNMOUNT") : i(u && h !== b ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    i
  ]), Pe(() => {
    if (t) {
      const l = (f) => {
        const b = Gt(o.current).includes(f.animationName);
        f.target === t && b && Lr(
          () => i("ANIMATION_END")
        );
      }, u = (f) => {
        f.target === t && (s.current = Gt(o.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      i("ANIMATION_END");
  }, [
    t,
    i
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(c),
    ref: q((l) => {
      l && (o.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Gt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const Sc = _.useId || (() => {
});
let _c = 0;
function Ie(e) {
  const [t, n] = _.useState(Sc());
  return Pe(() => {
    e || n(
      (o) => o ?? String(_c++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Br = "Collapsible", [Rc, Hr] = Te(Br), [Ac, fo] = Rc(Br), Nc = /* @__PURE__ */ N((e, t) => {
  const { __scopeCollapsible: n, open: o, defaultOpen: r, disabled: s, onOpenChange: a, ...c } = e, [i = !1, l] = Ne({
    prop: o,
    defaultProp: r,
    onChange: a
  });
  return /* @__PURE__ */ w(Ac, {
    scope: n,
    disabled: s,
    contentId: Ie(),
    open: i,
    onOpenToggle: q(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ w(B.div, P({
    "data-state": po(i),
    "data-disabled": s ? "" : void 0
  }, c, {
    ref: t
  })));
}), Oc = "CollapsibleTrigger", Ic = /* @__PURE__ */ N((e, t) => {
  const { __scopeCollapsible: n, ...o } = e, r = fo(Oc, n);
  return /* @__PURE__ */ w(B.button, P({
    type: "button",
    "aria-controls": r.contentId,
    "aria-expanded": r.open || !1,
    "data-state": po(r.open),
    "data-disabled": r.disabled ? "" : void 0,
    disabled: r.disabled
  }, o, {
    ref: t,
    onClick: L(e.onClick, r.onOpenToggle)
  }));
}), Ur = "CollapsibleContent", kc = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...o } = e, r = fo(Ur, e.__scopeCollapsible);
  return /* @__PURE__ */ w(
    xe,
    {
      present: n || r.open
    },
    ({ present: s }) => /* @__PURE__ */ w(jc, P({}, o, {
      ref: t,
      present: s
    }))
  );
}), jc = /* @__PURE__ */ N((e, t) => {
  const { __scopeCollapsible: n, present: o, children: r, ...s } = e, a = fo(Ur, n), [c, i] = F(o), l = j(null), u = Q(t, l), f = j(0), h = f.current, b = j(0), v = b.current, p = a.open || c, x = j(p), $ = j();
  return W(() => {
    const m = requestAnimationFrame(
      () => x.current = !1
    );
    return () => cancelAnimationFrame(m);
  }, []), Pe(() => {
    const m = l.current;
    if (m) {
      $.current = $.current || {
        transitionDuration: m.style.transitionDuration,
        animationName: m.style.animationName
      }, m.style.transitionDuration = "0s", m.style.animationName = "none";
      const y = m.getBoundingClientRect();
      f.current = y.height, b.current = y.width, x.current || (m.style.transitionDuration = $.current.transitionDuration, m.style.animationName = $.current.animationName), i(o);
    }
  }, [
    a.open,
    o
  ]), /* @__PURE__ */ w(B.div, P({
    "data-state": po(a.open),
    "data-disabled": a.disabled ? "" : void 0,
    id: a.contentId,
    hidden: !p
  }, s, {
    ref: u,
    style: {
      "--radix-collapsible-content-height": h ? `${h}px` : void 0,
      "--radix-collapsible-content-width": v ? `${v}px` : void 0,
      ...e.style
    }
  }), p && r);
});
function po(e) {
  return e ? "open" : "closed";
}
const Dc = Nc, Mc = Ic, Lc = kc, Fc = /* @__PURE__ */ dt(void 0);
function Et(e) {
  const t = rt(Fc);
  return e || t || "ltr";
}
const at = "Accordion", Vc = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [bo, Wc, zc] = pn(at), [bn, Mh] = Te(at, [
  zc,
  Hr
]), ho = Hr(), Xr = /* @__PURE__ */ V.forwardRef((e, t) => {
  const { type: n, ...o } = e, r = o, s = o;
  return /* @__PURE__ */ V.createElement(bo.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ V.createElement(Xc, P({}, s, {
    ref: t
  })) : /* @__PURE__ */ V.createElement(Uc, P({}, r, {
    ref: t
  })));
});
Xr.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Gr, Bc] = bn(at), [Kr, Hc] = bn(at, {
  collapsible: !1
}), Uc = /* @__PURE__ */ V.forwardRef((e, t) => {
  const { value: n, defaultValue: o, onValueChange: r = () => {
  }, collapsible: s = !1, ...a } = e, [c, i] = Ne({
    prop: n,
    defaultProp: o,
    onChange: r
  });
  return /* @__PURE__ */ V.createElement(Gr, {
    scope: e.__scopeAccordion,
    value: c ? [
      c
    ] : [],
    onItemOpen: i,
    onItemClose: V.useCallback(
      () => s && i(""),
      [
        s,
        i
      ]
    )
  }, /* @__PURE__ */ V.createElement(Kr, {
    scope: e.__scopeAccordion,
    collapsible: s
  }, /* @__PURE__ */ V.createElement(Yr, P({}, a, {
    ref: t
  }))));
}), Xc = /* @__PURE__ */ V.forwardRef((e, t) => {
  const { value: n, defaultValue: o, onValueChange: r = () => {
  }, ...s } = e, [a = [], c] = Ne({
    prop: n,
    defaultProp: o,
    onChange: r
  }), i = V.useCallback(
    (u) => c(
      (f = []) => [
        ...f,
        u
      ]
    ),
    [
      c
    ]
  ), l = V.useCallback(
    (u) => c(
      (f = []) => f.filter(
        (h) => h !== u
      )
    ),
    [
      c
    ]
  );
  return /* @__PURE__ */ V.createElement(Gr, {
    scope: e.__scopeAccordion,
    value: a,
    onItemOpen: i,
    onItemClose: l
  }, /* @__PURE__ */ V.createElement(Kr, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ V.createElement(Yr, P({}, s, {
    ref: t
  }))));
}), [Gc, hn] = bn(at), Yr = /* @__PURE__ */ V.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: o, dir: r, orientation: s = "vertical", ...a } = e, c = V.useRef(null), i = Q(c, t), l = Wc(n), f = Et(r) === "ltr", h = L(e.onKeyDown, (b) => {
    var v;
    if (!Vc.includes(b.key))
      return;
    const p = b.target, x = l().filter((D) => {
      var z;
      return !((z = D.ref.current) !== null && z !== void 0 && z.disabled);
    }), $ = x.findIndex(
      (D) => D.ref.current === p
    ), m = x.length;
    if ($ === -1)
      return;
    b.preventDefault();
    let y = $;
    const C = 0, E = m - 1, R = () => {
      y = $ + 1, y > E && (y = C);
    }, S = () => {
      y = $ - 1, y < C && (y = E);
    };
    switch (b.key) {
      case "Home":
        y = C;
        break;
      case "End":
        y = E;
        break;
      case "ArrowRight":
        s === "horizontal" && (f ? R() : S());
        break;
      case "ArrowDown":
        s === "vertical" && R();
        break;
      case "ArrowLeft":
        s === "horizontal" && (f ? S() : R());
        break;
      case "ArrowUp":
        s === "vertical" && S();
        break;
    }
    const O = y % m;
    (v = x[O].ref.current) === null || v === void 0 || v.focus();
  });
  return /* @__PURE__ */ V.createElement(Gc, {
    scope: n,
    disabled: o,
    direction: r,
    orientation: s
  }, /* @__PURE__ */ V.createElement(bo.Slot, {
    scope: n
  }, /* @__PURE__ */ V.createElement(B.div, P({}, a, {
    "data-orientation": s,
    ref: i,
    onKeyDown: o ? void 0 : h
  }))));
}), Kn = "AccordionItem", [Kc, vo] = bn(Kn), Yc = /* @__PURE__ */ V.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: o, ...r } = e, s = hn(Kn, n), a = Bc(Kn, n), c = ho(n), i = Ie(), l = o && a.value.includes(o) || !1, u = s.disabled || e.disabled;
  return /* @__PURE__ */ V.createElement(Kc, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: i
  }, /* @__PURE__ */ V.createElement(Dc, P({
    "data-orientation": s.orientation,
    "data-state": qr(l)
  }, c, r, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (f) => {
      f ? a.onItemOpen(o) : a.onItemClose(o);
    }
  })));
}), qc = "AccordionHeader", Zc = /* @__PURE__ */ V.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...o } = e, r = hn(at, n), s = vo(qc, n);
  return /* @__PURE__ */ V.createElement(B.h3, P({
    "data-orientation": r.orientation,
    "data-state": qr(s.open),
    "data-disabled": s.disabled ? "" : void 0
  }, o, {
    ref: t
  }));
}), or = "AccordionTrigger", Jc = /* @__PURE__ */ V.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...o } = e, r = hn(at, n), s = vo(or, n), a = Hc(or, n), c = ho(n);
  return /* @__PURE__ */ V.createElement(bo.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ V.createElement(Mc, P({
    "aria-disabled": s.open && !a.collapsible || void 0,
    "data-orientation": r.orientation,
    id: s.triggerId
  }, c, o, {
    ref: t
  })));
}), Qc = "AccordionContent", ei = /* @__PURE__ */ V.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...o } = e, r = hn(at, n), s = vo(Qc, n), a = ho(n);
  return /* @__PURE__ */ V.createElement(Lc, P({
    role: "region",
    "aria-labelledby": s.triggerId,
    "data-orientation": r.orientation
  }, a, o, {
    ref: t,
    style: {
      "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
      "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function qr(e) {
  return e ? "open" : "closed";
}
const ti = Xr, ni = Yc, oi = Zc, ri = Jc, si = ei;
function Zr(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, s;
  for (s = 0; s < o.length; s++)
    r = o[s], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var ai = ["color"], ci = /* @__PURE__ */ N(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = Zr(e, ai);
  return w("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), w("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), ii = ["color"], li = /* @__PURE__ */ N(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = Zr(e, ii);
  return w("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), w("path", {
    d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
function Jr(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++)
        e[t] && (n = Jr(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function di() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
    (e = arguments[n]) && (t = Jr(e)) && (o && (o += " "), o += t);
  return o;
}
const mo = "-";
function ui(e) {
  const t = pi(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  function r(a) {
    const c = a.split(mo);
    return c[0] === "" && c.length !== 1 && c.shift(), Qr(c, t) || fi(a);
  }
  function s(a, c) {
    const i = n[a] || [];
    return c && o[a] ? [...i, ...o[a]] : i;
  }
  return {
    getClassGroupId: r,
    getConflictingClassGroupIds: s
  };
}
function Qr(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Qr(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(mo);
  return (a = t.validators.find(({
    validator: c
  }) => c(s))) == null ? void 0 : a.classGroupId;
}
const rr = /^\[(.+)\]$/;
function fi(e) {
  if (rr.test(e)) {
    const t = rr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function pi(e) {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return hi(Object.entries(e.classGroups), n).forEach(([s, a]) => {
    Yn(a, o, s, t);
  }), o;
}
function Yn(e, t, n, o) {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : sr(t, r);
      s.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (bi(r)) {
        Yn(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([s, a]) => {
      Yn(a, sr(t, s), n, o);
    });
  });
}
function sr(e, t) {
  let n = e;
  return t.split(mo).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}
function bi(e) {
  return e.isThemeGetter;
}
function hi(e, t) {
  return t ? e.map(([n, o]) => {
    const r = o.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([a, c]) => [t + a, c])) : s);
    return [n, r];
  }) : e;
}
function vi(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function r(s, a) {
    n.set(s, a), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(s) {
      let a = n.get(s);
      if (a !== void 0)
        return a;
      if ((a = o.get(s)) !== void 0)
        return r(s, a), a;
    },
    set(s, a) {
      n.has(s) ? n.set(s, a) : r(s, a);
    }
  };
}
const es = "!";
function mi(e) {
  const t = e.separator, n = t.length === 1, o = t[0], r = t.length;
  return function(a) {
    const c = [];
    let i = 0, l = 0, u;
    for (let p = 0; p < a.length; p++) {
      let x = a[p];
      if (i === 0) {
        if (x === o && (n || a.slice(p, p + r) === t)) {
          c.push(a.slice(l, p)), l = p + r;
          continue;
        }
        if (x === "/") {
          u = p;
          continue;
        }
      }
      x === "[" ? i++ : x === "]" && i--;
    }
    const f = c.length === 0 ? a : a.substring(l), h = f.startsWith(es), b = h ? f.substring(1) : f, v = u && u > l ? u - l : void 0;
    return {
      modifiers: c,
      hasImportantModifier: h,
      baseClassName: b,
      maybePostfixModifierPosition: v
    };
  };
}
function gi(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}
function xi(e) {
  return {
    cache: vi(e.cacheSize),
    splitModifiers: mi(e),
    ...ui(e)
  };
}
const $i = /\s+/;
function wi(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, s = /* @__PURE__ */ new Set();
  return e.trim().split($i).map((a) => {
    const {
      modifiers: c,
      hasImportantModifier: i,
      baseClassName: l,
      maybePostfixModifierPosition: u
    } = n(a);
    let f = o(u ? l.substring(0, u) : l), h = !!u;
    if (!f) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (f = o(l), !f)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      h = !1;
    }
    const b = gi(c).join(":");
    return {
      isTailwindClass: !0,
      modifierId: i ? b + es : b,
      classGroupId: f,
      originalClassName: a,
      hasPostfixModifier: h
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: c,
      classGroupId: i,
      hasPostfixModifier: l
    } = a, u = c + i;
    return s.has(u) ? !1 : (s.add(u), r(i, l).forEach((f) => s.add(c + f)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function yi() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ts(t)) && (o && (o += " "), o += n);
  return o;
}
function ts(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = ts(e[o])) && (n && (n += " "), n += t);
  return n;
}
function Ci(e, ...t) {
  let n, o, r, s = a;
  function a(i) {
    const l = t.reduce((u, f) => f(u), e());
    return n = xi(l), o = n.cache.get, r = n.cache.set, s = c, c(i);
  }
  function c(i) {
    const l = o(i);
    if (l)
      return l;
    const u = wi(i, n);
    return r(i, u), u;
  }
  return function() {
    return s(yi.apply(null, arguments));
  };
}
function de(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const ns = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ei = /^\d+\/\d+$/, Pi = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ti = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Si = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _i = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ri = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ai = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function ze(e) {
  return it(e) || Pi.has(e) || Ei.test(e);
}
function Ze(e) {
  return Pt(e, "length", Li);
}
function it(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Kt(e) {
  return Pt(e, "number", it);
}
function kt(e) {
  return !!e && Number.isInteger(Number(e));
}
function Ni(e) {
  return e.endsWith("%") && it(e.slice(0, -1));
}
function Y(e) {
  return ns.test(e);
}
function Je(e) {
  return Ti.test(e);
}
const Oi = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Ii(e) {
  return Pt(e, Oi, os);
}
function ki(e) {
  return Pt(e, "position", os);
}
const ji = /* @__PURE__ */ new Set(["image", "url"]);
function Di(e) {
  return Pt(e, ji, Vi);
}
function Mi(e) {
  return Pt(e, "", Fi);
}
function jt() {
  return !0;
}
function Pt(e, t, n) {
  const o = ns.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}
function Li(e) {
  return Si.test(e) && !_i.test(e);
}
function os() {
  return !1;
}
function Fi(e) {
  return Ri.test(e);
}
function Vi(e) {
  return Ai.test(e);
}
function Wi() {
  const e = de("colors"), t = de("spacing"), n = de("blur"), o = de("brightness"), r = de("borderColor"), s = de("borderRadius"), a = de("borderSpacing"), c = de("borderWidth"), i = de("contrast"), l = de("grayscale"), u = de("hueRotate"), f = de("invert"), h = de("gap"), b = de("gradientColorStops"), v = de("gradientColorStopPositions"), p = de("inset"), x = de("margin"), $ = de("opacity"), m = de("padding"), y = de("saturate"), C = de("scale"), E = de("sepia"), R = de("skew"), S = de("space"), O = de("translate"), D = () => ["auto", "contain", "none"], z = () => ["auto", "hidden", "clip", "visible", "scroll"], G = () => ["auto", Y, t], k = () => [Y, t], Z = () => ["", ze, Ze], A = () => ["auto", it, Y], M = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], K = () => ["solid", "dashed", "dotted", "double", "none"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ne = () => ["", "0", Y], Se = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], he = () => [it, Kt], me = () => [it, Y];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [jt],
      spacing: [ze, Ze],
      blur: ["none", "", Je, Y],
      brightness: he(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Je, Y],
      borderSpacing: k(),
      borderWidth: Z(),
      contrast: he(),
      grayscale: ne(),
      hueRotate: me(),
      invert: ne(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ni, Ze],
      inset: G(),
      margin: G(),
      opacity: he(),
      padding: k(),
      saturate: he(),
      scale: he(),
      sepia: ne(),
      skew: me(),
      space: k(),
      translate: k()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Y]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Je]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Se()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Se()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...M(), Y]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", kt, Y]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: G()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ne()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ne()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", kt, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [jt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", kt, Y]
        }, Y]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": A()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": A()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [jt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [kt, Y]
        }, Y]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": A()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": A()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", Y]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Y]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ie()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ie(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...ie(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [m]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [m]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [m]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [m]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [m]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [m]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [m]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [m]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [m]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [S]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [S]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Y, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Y, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Y, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Je]
        }, Je]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Y, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Y, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Je, Ze]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Kt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [jt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", it, Kt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ze, Y]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Y]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Y]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [$]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [$]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ze, Ze]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ze, Y]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Y]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [$]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...M(), ki]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Ii]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Di]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [$]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...K(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [c]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [$]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: K()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...K()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ze, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ze, Ze]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Z()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [$]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ze, Ze]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Je, Mi]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [jt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [$]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": H()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [i]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Je, Y]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [i]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [$]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Y]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: me()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: me()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Y]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [kt, Y]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [O]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [O]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [R]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [R]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Y]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Y]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ze, Ze, Kt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const zi = /* @__PURE__ */ Ci(Wi);
function te(...e) {
  return zi(di(e));
}
const rs = dt(
  void 0
), Bi = () => {
  const e = rt(rs);
  if (!e)
    throw new Error(
      "useAccordionContext must be used within an AccordionProvider"
    );
  return e;
}, Hi = ({ children: e }) => {
  const [t, n] = F(null);
  return /* @__PURE__ */ d.jsx(rs.Provider, { value: { openItem: t, setOpenItem: n }, children: e });
}, Ui = ue("accordion-item", {
  variants: {
    size: {
      small: "accordion-small",
      regular: "accordion-regular",
      large: "accordion-large"
    }
  },
  defaultVariants: {
    size: "small"
  }
}), Xi = ue("accordion", {
  variants: {
    border: { border: "container-border", "no-border": "" },
    size: {
      small: "accordion-small",
      regular: "accordion-regular",
      large: "accordion-large"
    }
  },
  defaultVariants: {
    border: "border",
    size: "small"
  }
}), Lh = ({
  children: e,
  size: t,
  border: n,
  className: o,
  defaultValue: r,
  type: s,
  value: a = "",
  ...c
}) => {
  const i = (l) => {
    console.log(l, "proq");
  };
  return /* @__PURE__ */ d.jsx(Hi, { children: /* @__PURE__ */ d.jsx(
    ti,
    {
      onValueChange: i,
      className: `accordion ${te(Xi({ border: n }), o)}`,
      ...c,
      type: "single",
      dir: "ltr",
      collapsible: !0,
      children: e
    }
  ) });
}, Fh = V.forwardRef(({ title: e, children: t, size: n, className: o, ...r }, s) => /* @__PURE__ */ d.jsx(
  ni,
  {
    className: te(Ui({ size: n }), o),
    ...r,
    ref: s,
    children: t
  }
)), Vh = V.forwardRef(({ children: e, value: t, ...n }) => {
  const { openItem: o, setOpenItem: r } = Bi(), s = o === t, a = () => {
    r(s ? null : t);
  };
  return /* @__PURE__ */ d.jsxs(
    ri,
    {
      className: "accordion-header",
      onClick: a,
      ...n,
      children: [
        e,
        /* @__PURE__ */ d.jsx("span", { children: s ? /* @__PURE__ */ d.jsx(li, {}) : /* @__PURE__ */ d.jsx(ci, {}) })
      ]
    }
  );
}), Wh = V.forwardRef(({ children: e }) => /* @__PURE__ */ d.jsx(si, { className: "accordion-content", children: e })), zh = ({
  children: e
}) => /* @__PURE__ */ d.jsx(oi, { children: e }), Gi = ue("badge", {
  variants: {
    variant: {
      primary: "badge-primary",
      neutral: "badge-neutral",
      red: "badge-red",
      yellow: "badge-yellow",
      green: "badge-green",
      info: "badge-info",
      brand: "badge-brand"
    },
    size: { regular: "", large: "badge-large" },
    mode: { light: "badge-light", dark: "badge-dark" }
  },
  defaultVariants: {
    variant: "primary",
    mode: "light",
    size: "regular"
  }
}), Ki = _.forwardRef(
  ({ className: e, variant: t, children: n, size: o, mode: r, ...s }) => /* @__PURE__ */ d.jsx(
    "div",
    {
      className: te(Gi({ variant: t, size: o, mode: r }), e),
      ...s,
      children: n
    }
  )
);
Ki.displayName = "Badge";
const Yi = {
  small: "banner-small",
  regular: "banner-regular",
  // Add a missing regular size variant
  large: "banner-large"
}, qi = {
  Default: "banner-theme-default",
  Deep: "banner-theme-deep",
  "Ice and Sand": "banner-dark",
  // Add a new theme option
  customtheme: "banner-theme-iceandsand"
}, Zi = {
  Hero: "banner-hero",
  Communication: "banner-comm"
}, Ji = ue("banner", {
  // Remove unwanted stuff and add missing stuff here
  variants: {
    variant: Zi,
    size: Yi,
    theme: qi
  },
  compoundVariants: [{ variant: "Hero", size: "regular", theme: "Default" }],
  defaultVariants: {
    variant: "Hero",
    theme: "Default",
    size: "regular"
  }
}), Qi = ({
  className: e,
  variant: t,
  children: n,
  size: o,
  theme: r,
  title: s,
  paragraph: a,
  imgSrc: c,
  ...i
}) => /* @__PURE__ */ d.jsxs(
  "div",
  {
    className: `banner ${te(
      Ji({ variant: t, size: o, theme: r }),
      e
    )}`,
    ...i,
    children: [
      /* @__PURE__ */ d.jsxs("div", { className: "banner-content", children: [
        /* @__PURE__ */ d.jsx("h2", { className: "banner-title", children: s || "Unlock a lifetime of subscriber growth and retention" }),
        /* @__PURE__ */ d.jsx("p", { className: "banner-paragraph", children: a || "Thousands of subscription businesses worldwide rely on Chargebee's unique Revenue Growth Management platform to accelerate growth, drive customer success, and manage their businesses in 227 countries and territories." }),
        /* @__PURE__ */ d.jsx("div", { className: "banner-buttons", children: n })
      ] }),
      /* @__PURE__ */ d.jsx("div", { className: "banner-image", children: /* @__PURE__ */ d.jsx(
        "img",
        {
          src: c || "https://cbx.vercel.app/static/media/illustration.4f609f62543c3f4d01c2.png",
          alt: "Banner Image"
        }
      ) })
    ]
  }
);
Qi.displayName = "Banner";
const el = ue(" ", {
  variants: {
    variant: {
      primary: "btn btn-primary",
      neutral: "btn btn-neutral",
      danger: "btn btn-danger",
      warning: "btn btn-warning"
    },
    styleType: {
      default: "",
      outline: "btn-outline",
      text: "btn-text",
      icon: "btn-icon",
      "icon-borderless": "btn-icon-borderless"
    },
    size: {
      small: "btn-small",
      regular: "",
      large: "btn-large"
    },
    fullWidth: {
      true: "btn-full-width"
    },
    disabled: {
      true: "btn-disabled"
    },
    loading: {
      true: "btn-disabled"
    }
  },
  compoundVariants: [
    {
      // variant: "primary",
      // size: "lg",
      // className: "uppercase",
      // **or** if you're a React.js user, `className` may feel more consistent:
      // className: "uppercase"
    }
    // {
    //     variant: "primary",
    //     disabled
    // }
  ],
  defaultVariants: {
    size: "regular",
    variant: "primary",
    styleType: "default",
    fullWidth: !1,
    disabled: !1
  }
}), tl = /* @__PURE__ */ d.jsxs(
  "svg",
  {
    className: "animate-spin -ml-1 mr-3 h-5 w-5 ",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ d.jsx(
        "circle",
        {
          className: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          "stroke-width": "4"
        }
      ),
      /* @__PURE__ */ d.jsx(
        "path",
        {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ]
  }
), nl = _.forwardRef(
  ({
    className: e,
    children: t,
    href: n = !1,
    loading: o = !1,
    styleType: r,
    variant: s,
    asChild: a,
    disabled: c,
    size: i,
    fullWidth: l,
    ...u
  }, f) => {
    const h = a ? He : "button", b = c ? "neutral" : s;
    return /* @__PURE__ */ d.jsx(
      h,
      {
        className: te(
          el({
            styleType: r,
            variant: b,
            size: i,
            className: e,
            fullWidth: l,
            disabled: c,
            loading: o
          })
        ),
        disabled: c || o,
        ref: f,
        ...u,
        children: /* @__PURE__ */ d.jsxs("span", { className: "flex gap-2 items-center", children: [
          t,
          " ",
          o && tl
        ] })
      }
    );
  }
);
nl.displayName = "Button";
const ol = ue("card", {
  variants: {
    depth: {
      flat: "flat",
      raised: "raised",
      regular: "regular"
    },
    padding: {
      large: "padding-large",
      regular: "padding-regular"
    },
    background: {
      transparent: "background-transparent",
      white: "background-white",
      neutral: "background-neutral"
    }
  },
  defaultVariants: {
    depth: "regular",
    padding: "regular",
    background: "white"
  }
}), Bh = V.forwardRef(
  ({ depth: e, padding: t, background: n, children: o, className: r }) => /* @__PURE__ */ d.jsx("div", { className: "card-component", children: /* @__PURE__ */ d.jsx(
    "div",
    {
      className: te(
        ol({ depth: e, padding: t, background: n }),
        r
      ),
      children: o
    }
  ) })
), rl = ue("", {
  variants: {
    variant: {
      basic: "checklist-basic",
      contained: "checklist-contained"
    },
    size: {
      small: "checklist-small",
      regular: "checklist-regular",
      large: "checklist-large"
    },
    width: {
      inline: "",
      full: "checklist-full-width"
    },
    align: {
      vertical: "checklist-vertical",
      horizontal: "checklist-horizontal"
    },
    disabled: { true: "checklist-disabled" }
  },
  defaultVariants: {
    size: "regular",
    width: "inline"
  }
}), sl = [], Hh = V.forwardRef(
  ({
    variant: e,
    align: t,
    className: n,
    options: o,
    width: r,
    size: s,
    title: a,
    listDescription: c,
    onChangeLogic: i
  }, l) => {
    const [u, f] = V.useState(sl), h = (v) => u.filter((p) => p.value === v.value).length > 0, b = ({ label: v, value: p, name: x }) => {
      var $ = [...u];
      h({ label: v, value: p, name: x }) ? ($ = u.filter((y) => y.value !== p), f($)) : ($ = [
        ...u,
        { label: p, value: p, name: x }
      ], f($), i && i($));
    };
    return /* @__PURE__ */ d.jsxs("div", { className: "w-full", children: [
      (a.length > 0 || c) && /* @__PURE__ */ d.jsxs("div", { className: "list-title-description", children: [
        a && /* @__PURE__ */ d.jsx("h4", { className: "list-title", children: a }),
        c && /* @__PURE__ */ d.jsx("p", { children: c })
      ] }),
      /* @__PURE__ */ d.jsx(
        "div",
        {
          className: te(
            "checklist",
            rl({
              align: t,
              className: n,
              variant: e,
              width: r,
              size: s
            })
          ),
          children: o.map((v, p) => /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: te(
                "check-option",
                h(v) ? "check-option-selected" : ""
              ),
              onClick: () => b(v),
              children: [
                e == "contained" && /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx("span", { children: h(v) ? /* @__PURE__ */ d.jsx(cl, {}) : /* @__PURE__ */ d.jsx(al, {}) }) }),
                /* @__PURE__ */ d.jsx(
                  "input",
                  {
                    type: "checkbox",
                    value: v.value,
                    checked: h(v),
                    ref: l,
                    onChange: () => {
                    }
                  }
                ),
                /* @__PURE__ */ d.jsx("label", { htmlFor: v.name, children: v.label })
              ]
            },
            p
          ))
        }
      )
    ] });
  }
), al = () => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 3.75h16.5v16.5H3.75z"
      }
    )
  }
), cl = () => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    children: [
      /* @__PURE__ */ d.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.75 3.75h16.5v16.5H3.75z"
        }
      ),
      /* @__PURE__ */ d.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 12.75L11.25 15L15 9.75"
        }
      )
    ]
  }
), go = dt(void 0), Uh = () => rt(go);
function xo() {
  const e = rt(go);
  if (e === void 0)
    throw new Error(
      "useContainedListContext must be used within a ContainedListProvider"
    );
  return e;
}
const il = ({ children: e, ...t }) => /* @__PURE__ */ d.jsx(go.Provider, { ...t, children: e }), ss = ue("", {
  variants: {
    variant: {
      basic: "list-basic",
      menu: "list-menu"
    },
    padding: {
      small: "list-small",
      regular: "list-regular",
      large: "list-large"
    },
    labels: {
      none: "",
      inline: "labels-inline",
      block: " labels-block",
      rows: " labels-rows"
    },
    align: {
      left: "",
      justified: "justified"
    }
  },
  defaultVariants: {
    variant: "basic",
    padding: "regular",
    align: "left"
  }
}), ll = V.forwardRef(
  ({
    variant: e,
    padding: t,
    className: n,
    labels: o,
    align: r,
    showIndicator: s = !0,
    showSeperator: a = !0,
    children: c,
    boldLabel: i
  }, l) => /* @__PURE__ */ d.jsx(
    il,
    {
      value: {
        variant: e,
        labels: o,
        padding: t,
        showIndicator: s,
        align: r,
        showSeperator: a,
        boldLabel: i
      },
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: l,
          className: te(
            "contained-list ",
            ss({
              variant: e,
              padding: t,
              labels: o,
              className: n
            })
          ),
          children: c
        }
      )
    }
  )
), Xh = ({
  className: e,
  children: t
}) => /* @__PURE__ */ d.jsx(B.div, { className: te("list-title-description", { className: e }), children: t }), Gh = ({
  className: e,
  children: t
}) => /* @__PURE__ */ d.jsxs("h4", { className: te("list-title", { className: e }), children: [
  " ",
  t
] }), Kh = ({
  className: e,
  children: t
}) => /* @__PURE__ */ d.jsx("p", { className: te("", { className: e }), children: t }), dl = ({
  className: e,
  children: t
}) => {
  const { showSeperator: n } = xo();
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: te(`list-items ${n && "!divide-y "}`, {
        className: e
      }),
      children: t
    }
  );
}, ul = ({
  onClick: e,
  indicatorIcon: t,
  asChild: n,
  children: o
}) => {
  const { labels: r, align: s, showIndicator: a } = xo();
  return /* @__PURE__ */ d.jsx(
    B.div,
    {
      asChild: n,
      className: `contained-list-layout ${r === "none" ? "hover:bg-transparent" : " hover:bg-neutral-25"} `,
      onClick: e,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          className: `contained-list-item     ${r === "rows" ? " " : ""}  px-0`,
          children: /* @__PURE__ */ d.jsxs("div", { className: " !items-start", children: [
            /* @__PURE__ */ d.jsx("div", { className: te("", ss({ align: s })), children: o }),
            /* @__PURE__ */ d.jsx("span", { className: "list-item-indicator ", children: a && t && t })
          ] })
        }
      )
    }
  );
}, fl = ({
  children: e,
  boldLabel: t
}) => {
  const { labels: n } = xo();
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: n !== "none" && /* @__PURE__ */ d.jsx("span", { className: `label  ${t && "list-label-bold"}`, children: e }) });
}, pl = ({
  children: e,
  labels: t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: `value text-wrap ${t === "none" ? "hover:!text-primary-500 cursor-pointer hover:underline" : ""}`,
    children: e
  }
), bl = ue(
  "flex",
  // Default class to set display to flex
  {
    variants: {
      gap: {
        none: "c-gap-0",
        small: "c-gap-small",
        regular: "c-gap-regular",
        large: "c-gap-large",
        xlarge: "c-gap-xlarge",
        xxlarge: "c-gap-xxlarge"
      },
      direction: {
        column: "flex-col",
        row: "flex-row"
      },
      justifyContent: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around"
      },
      alignItems: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      },
      wrap: {
        noWrap: "flex-nowrap",
        wrap: "flex-wrap",
        wrapReverse: "flex-wrap-reverse"
      }
    },
    defaultVariants: {
      gap: "regular"
    }
  }
), Yh = V.forwardRef(
  ({ children: e, className: t, ...n }, o) => {
    const r = te(bl({ ...n }), t);
    return /* @__PURE__ */ d.jsx("div", { ref: o, className: r, children: e });
  }
), hl = ue("drawer-container", {
  variants: {
    placement: {
      top: "top",
      right: "right",
      bottom: "bottom",
      left: "left"
    },
    width: {
      narrow: "narrow",
      regular: "regular",
      wide: "wide"
    },
    height: {
      short: "short",
      regular: "regular"
    },
    show: {
      show: "drawer-show",
      hide: ""
    }
  },
  defaultVariants: {
    placement: "top",
    width: "narrow",
    height: "short",
    show: "show"
  }
}), qh = V.forwardRef(
  ({
    onClose: e,
    placement: t,
    width: n,
    height: o,
    show: r,
    className: s,
    title: a,
    children: c,
    hasCloseIcon: i,
    ...l
  }) => (W(() => (r === "show" ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "", () => {
    document.body.style.overflowY = "";
  }), [r]), // <Root modal={false}></Root>
  /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ d.jsx(
      "div",
      {
        onClick: e,
        className: ` ${r === "hide" && "!hidden"} fixed w-full h-screen inset-0 bg-neutral-500 opacity-50 z-50`
      }
    ),
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: te(
          hl({ placement: t, width: n, height: o, show: r }),
          s
        ),
        ...l,
        children: [
          i && /* @__PURE__ */ d.jsx(
            "button",
            {
              className: "drawer-close-button",
              onClick: e,
              "aria-label": "Close Drawer",
              children: /* @__PURE__ */ d.jsx(vl, {})
            }
          ),
          /* @__PURE__ */ d.jsxs("div", { className: "drawer-content ", children: [
            a && /* @__PURE__ */ d.jsx("h4", { className: "h4", children: a }),
            /* @__PURE__ */ d.jsx("div", { children: c })
          ] })
        ]
      }
    )
  ] }))
), vl = () => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
      }
    )
  }
), ml = () => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      }
    )
  }
), gl = () => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
      }
    )
  }
), xl = () => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
      }
    )
  }
), Dt = () => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
      }
    )
  }
), as = () => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      }
    )
  }
), $l = () => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      }
    )
  }
), wl = () => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      }
    )
  }
), yl = {
  none: "",
  close: /* @__PURE__ */ d.jsx(Dt, {}),
  bell: /* @__PURE__ */ d.jsx(as, {}),
  arrowLeftIcon: /* @__PURE__ */ d.jsx(gl, {}),
  arrowRightIcon: /* @__PURE__ */ d.jsx(xl, {}),
  lockIcon: /* @__PURE__ */ d.jsx(ml, {}),
  user: /* @__PURE__ */ d.jsx(wl, {})
}, qn = ue("", {
  variants: {
    variant: {
      input: "inputfield",
      search: "inputfield"
    },
    label: {
      default: "",
      hide: "",
      inline: "inputfield-inline-label"
    },
    inputSize: {
      regular: "inputfield-regular",
      large: "inputfield-large"
    },
    disabled: {
      true: "inputfield-disabled"
    },
    error: {
      true: "inputfield-error"
    },
    withIcon: {
      true: "inputfield-with-icon"
    },
    reset: {
      true: ""
    }
  },
  compoundVariants: [
    {
      variant: "search",
      error: !1,
      label: "hide"
    }
  ],
  defaultVariants: {
    variant: "input",
    inputSize: "regular",
    label: "hide"
  }
}), Cl = _.forwardRef(
  ({
    value: e = "",
    className: t,
    variant: n,
    onChangeLogic: o,
    label: r,
    labelText: s,
    inputSize: a,
    inputWidth: c,
    disabled: i,
    messageText: l,
    error: u,
    withIcon: f,
    iconName: h,
    reset: b,
    readOnly: v,
    ...p
  }, x) => {
    const [$, m] = F(e || ""), y = (R) => {
      R.stopPropagation(), m("");
    }, C = n === "search", E = f ? yl[h] : null;
    return _.useEffect(() => {
      m(e);
    }, [e]), /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: te(
          qn({
            variant: n,
            label: r,
            disabled: i,
            inputSize: a,
            error: u,
            withIcon: f
          }),
          t
        ),
        children: [
          /* @__PURE__ */ d.jsxs("div", { children: [
            r !== "hide" && /* @__PURE__ */ d.jsx(is, { children: s }),
            f && !C && /* @__PURE__ */ d.jsx("span", { className: "icon", children: E }),
            f && C && /* @__PURE__ */ d.jsx("span", { className: "icon", children: /* @__PURE__ */ d.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "currentColor",
                children: /* @__PURE__ */ d.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ d.jsx(
                "input",
                {
                  className: te(
                    "input-field",
                    qn({ inputSize: a }),
                    t
                  ),
                  style: { width: c },
                  value: $,
                  onChange: (R) => {
                    m(R.target.value), o && o(R.target.value);
                  },
                  ref: x,
                  ...p,
                  disabled: i,
                  readOnly: v
                }
              ),
              b && $ && /* @__PURE__ */ d.jsx("button", { type: "button", className: "reset-icon", onClick: y, children: /* @__PURE__ */ d.jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ d.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M6 18L18 6M6 6l12 12"
                    }
                  )
                }
              ) })
            ] })
          ] }),
          l && l.length > 0 && !u && /* @__PURE__ */ d.jsx(cs, { children: l }),
          u && /* @__PURE__ */ d.jsx(ls, { children: l })
        ]
      }
    );
  }
);
Cl.displayName = "InputField";
const cs = _.forwardRef(
  ({ className: e, children: t, ...n }, o) => /* @__PURE__ */ d.jsx("span", { className: "input-message", ...n, ref: o, children: t })
);
cs.displayName = "InputMessage";
const is = _.forwardRef(
  ({ children: e, ...t }, n) => /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx("label", { className: "input-label", ...t, ref: n, children: e }) })
);
is.displayName = "InputLabel";
const ls = _.forwardRef(
  ({ children: e }, t) => /* @__PURE__ */ d.jsxs("div", { className: "flex gap-1 items-center", ref: t, children: [
    /* @__PURE__ */ d.jsx("span", { className: "icon error-icon", children: /* @__PURE__ */ d.jsx($l, {}) }),
    /* @__PURE__ */ d.jsx("span", { className: "input-message error-message", children: e })
  ] })
);
ls.displayName = "InputError";
const Zh = _.forwardRef(
  ({
    className: e,
    variant: t,
    inputSize: n,
    disabled: o,
    error: r,
    ...s
  }, a) => /* @__PURE__ */ d.jsx(
    "div",
    {
      className: te(
        qn({
          variant: t,
          disabled: o,
          inputSize: n
        })
      ),
      children: /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsx("div", { className: "relative", children: /* @__PURE__ */ d.jsx(
        "input",
        {
          className: te("", e),
          ref: a,
          ...s,
          disabled: o
        }
      ) }) })
    }
  )
), Jh = ue("InputCounter", {
  // Remove unwanted stuff and add missing stuff here
  variants: {
    // Make it vertical when on mobile or small screen for Responsive web
    // Style prop is a system prop
    Placement: {
      top: "top",
      bottom: "bottom"
    },
    width: {
      Small: "InputCounter-width-small",
      Regular: "InputCounter-width-regular",
      Large: "InputCounter-width-large"
    }
  },
  defaultVariants: {
    width: "Regular",
    Placement: "top"
  }
}), El = _.forwardRef(
  // ({ width, Placement, children }) => {
  () => /* @__PURE__ */ d.jsxs("div", { className: "input-count input-count-regular max-w-md", children: [
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx("label", { children: "label" }) }),
      /* @__PURE__ */ d.jsxs("div", { className: "w-full", children: [
        /* @__PURE__ */ d.jsx("div", { className: "inputfield inputfield-regular w-full", children: /* @__PURE__ */ d.jsx(
          "input",
          {
            className: "!w-full",
            type: "number",
            placeholder: "",
            value: ""
          }
        ) }),
        /* @__PURE__ */ d.jsx("button", { type: "button", className: "btn btn-neutral btn-default", children: /* @__PURE__ */ d.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            children: /* @__PURE__ */ d.jsx(
              "path",
              {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M19.5 12h-15"
              }
            )
          }
        ) }),
        /* @__PURE__ */ d.jsx("button", { type: "button", className: "btn btn-neutral btn-default", children: /* @__PURE__ */ d.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            children: /* @__PURE__ */ d.jsx(
              "path",
              {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M12 4.5v15m7.5-7.5h-15"
              }
            )
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ d.jsx("span", { className: "flex gap-1" })
  ] })
);
El.displayName = "InputCounter";
const Pl = ue("", {
  variants: {
    size: {
      small: "small",
      regular: "regular",
      large: "large"
    }
  }
}), Qh = V.forwardRef(
  ({ size: e, text: t, ...n }, o) => /* @__PURE__ */ d.jsxs(
    "div",
    {
      ...n,
      ref: o,
      className: te(
        "loader",
        Pl({
          size: e
        })
      ),
      children: [
        /* @__PURE__ */ d.jsx("div", { className: "loader-ring" }),
        t && t.length > 0 && /* @__PURE__ */ d.jsx("span", { className: "loader-text", children: t })
      ]
    }
  )
);
function Tl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = be(e);
  W(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o), () => t.removeEventListener("keydown", o);
  }, [
    n,
    t
  ]);
}
const Zn = "dismissableLayer.update", Sl = "dismissableLayer.pointerDownOutside", _l = "dismissableLayer.focusOutside";
let ar;
const ds = /* @__PURE__ */ dt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), zt = /* @__PURE__ */ N((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: s, onFocusOutside: a, onInteractOutside: c, onDismiss: i, ...l } = e, u = rt(ds), [f, h] = F(null), b = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = F({}), p = Q(
    t,
    (O) => h(O)
  ), x = Array.from(u.layers), [$] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), m = x.indexOf($), y = f ? x.indexOf(f) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, E = y >= m, R = Al((O) => {
    const D = O.target, z = [
      ...u.branches
    ].some(
      (G) => G.contains(D)
    );
    !E || z || (s == null || s(O), c == null || c(O), O.defaultPrevented || i == null || i());
  }, b), S = Nl((O) => {
    const D = O.target;
    [
      ...u.branches
    ].some(
      (G) => G.contains(D)
    ) || (a == null || a(O), c == null || c(O), O.defaultPrevented || i == null || i());
  }, b);
  return Tl((O) => {
    y === u.layers.size - 1 && (r == null || r(O), !O.defaultPrevented && i && (O.preventDefault(), i()));
  }, b), W(() => {
    if (f)
      return o && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (ar = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), cr(), () => {
        o && u.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = ar);
      };
  }, [
    f,
    b,
    o,
    u
  ]), W(() => () => {
    f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), cr());
  }, [
    f,
    u
  ]), W(() => {
    const O = () => v({});
    return document.addEventListener(Zn, O), () => document.removeEventListener(Zn, O);
  }, []), /* @__PURE__ */ w(B.div, P({}, l, {
    ref: p,
    style: {
      pointerEvents: C ? E ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: L(e.onFocusCapture, S.onFocusCapture),
    onBlurCapture: L(e.onBlurCapture, S.onBlurCapture),
    onPointerDownCapture: L(e.onPointerDownCapture, R.onPointerDownCapture)
  }));
}), Rl = /* @__PURE__ */ N((e, t) => {
  const n = rt(ds), o = j(null), r = Q(t, o);
  return W(() => {
    const s = o.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [
    n.branches
  ]), /* @__PURE__ */ w(B.div, P({}, e, {
    ref: r
  }));
});
function Al(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = be(e), o = j(!1), r = j(() => {
  });
  return W(() => {
    const s = (c) => {
      if (c.target && !o.current) {
        let l = function() {
          us(Sl, n, i, {
            discrete: !0
          });
        };
        const i = {
          originalEvent: c
        };
        c.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Nl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = be(e), o = j(!1);
  return W(() => {
    const r = (s) => {
      s.target && !o.current && us(_l, n, {
        originalEvent: s
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function cr() {
  const e = new CustomEvent(Zn);
  document.dispatchEvent(e);
}
function us(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? zr(r, s) : r.dispatchEvent(s);
}
const Ol = zt, Il = Rl, Mn = "focusScope.autoFocusOnMount", Ln = "focusScope.autoFocusOnUnmount", ir = {
  bubbles: !1,
  cancelable: !0
}, $o = /* @__PURE__ */ N((e, t) => {
  const { loop: n = !1, trapped: o = !1, onMountAutoFocus: r, onUnmountAutoFocus: s, ...a } = e, [c, i] = F(null), l = be(r), u = be(s), f = j(null), h = Q(
    t,
    (p) => i(p)
  ), b = j({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  W(() => {
    if (o) {
      let p = function(y) {
        if (b.paused || !c)
          return;
        const C = y.target;
        c.contains(C) ? f.current = C : Qe(f.current, {
          select: !0
        });
      }, x = function(y) {
        if (b.paused || !c)
          return;
        const C = y.relatedTarget;
        C !== null && (c.contains(C) || Qe(f.current, {
          select: !0
        }));
      }, $ = function(y) {
        if (document.activeElement === document.body)
          for (const E of y)
            E.removedNodes.length > 0 && Qe(c);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", x);
      const m = new MutationObserver($);
      return c && m.observe(c, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", x), m.disconnect();
      };
    }
  }, [
    o,
    c,
    b.paused
  ]), W(() => {
    if (c) {
      dr.add(b);
      const p = document.activeElement;
      if (!c.contains(p)) {
        const $ = new CustomEvent(Mn, ir);
        c.addEventListener(Mn, l), c.dispatchEvent($), $.defaultPrevented || (kl(Fl(fs(c)), {
          select: !0
        }), document.activeElement === p && Qe(c));
      }
      return () => {
        c.removeEventListener(Mn, l), setTimeout(() => {
          const $ = new CustomEvent(Ln, ir);
          c.addEventListener(Ln, u), c.dispatchEvent($), $.defaultPrevented || Qe(p ?? document.body, {
            select: !0
          }), c.removeEventListener(Ln, u), dr.remove(b);
        }, 0);
      };
    }
  }, [
    c,
    l,
    u,
    b
  ]);
  const v = q((p) => {
    if (!n && !o || b.paused)
      return;
    const x = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, $ = document.activeElement;
    if (x && $) {
      const m = p.currentTarget, [y, C] = jl(m);
      y && C ? !p.shiftKey && $ === C ? (p.preventDefault(), n && Qe(y, {
        select: !0
      })) : p.shiftKey && $ === y && (p.preventDefault(), n && Qe(C, {
        select: !0
      })) : $ === m && p.preventDefault();
    }
  }, [
    n,
    o,
    b.paused
  ]);
  return /* @__PURE__ */ w(B.div, P({
    tabIndex: -1
  }, a, {
    ref: h,
    onKeyDown: v
  }));
});
function kl(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Qe(o, {
      select: t
    }), document.activeElement !== n)
      return;
}
function jl(e) {
  const t = fs(e), n = lr(t, e), o = lr(t.reverse(), e);
  return [
    n,
    o
  ];
}
function fs(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function lr(e, t) {
  for (const n of e)
    if (!Dl(n, {
      upTo: t
    }))
      return n;
}
function Dl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ml(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Ml(e) && t && e.select();
  }
}
const dr = Ll();
function Ll() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ur(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ur(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function ur(e, t) {
  const n = [
    ...e
  ], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Fl(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Tt = /* @__PURE__ */ N((e, t) => {
  var n;
  const { container: o = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...r } = e;
  return o ? /* @__PURE__ */ hc.createPortal(/* @__PURE__ */ w(B.div, P({}, r, {
    ref: t
  })), o) : null;
}), Vl = Tt;
let Fn = 0;
function wo() {
  W(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : fr()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : fr()), Fn++, () => {
      Fn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (o) => o.remove()
      ), Fn--;
    };
  }, []);
}
function fr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Me = function() {
  return Me = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Me.apply(this, arguments);
};
function ps(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Wl(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, s; o < r; o++)
      (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var nn = "right-scroll-bar-position", on = "width-before-scroll-bar", zl = "with-scroll-bars-hidden", Bl = "--removed-body-scroll-bar-size";
function Vn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Hl(e, t) {
  var n = F(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Ul = typeof window < "u" ? _.useLayoutEffect : _.useEffect, pr = /* @__PURE__ */ new WeakMap();
function Xl(e, t) {
  var n = Hl(t || null, function(o) {
    return e.forEach(function(r) {
      return Vn(r, o);
    });
  });
  return Ul(function() {
    var o = pr.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), a = n.current;
      r.forEach(function(c) {
        s.has(c) || Vn(c, null);
      }), s.forEach(function(c) {
        r.has(c) || Vn(c, a);
      });
    }
    pr.set(n, e);
  }, [e]), n;
}
function Gl(e) {
  return e;
}
function Kl(e, t) {
  t === void 0 && (t = Gl);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, o);
      return n.push(a), function() {
        n = n.filter(function(c) {
          return c !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (o = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(s);
      }
      n = {
        push: function(c) {
          return s(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      o = !0;
      var a = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(s), a = n;
      }
      var i = function() {
        var u = a;
        a = [], u.forEach(s);
      }, l = function() {
        return Promise.resolve().then(i);
      };
      l(), n = {
        push: function(u) {
          a.push(u), l();
        },
        filter: function(u) {
          return a = a.filter(u), n;
        }
      };
    }
  };
  return r;
}
function Yl(e) {
  e === void 0 && (e = {});
  var t = Kl(null);
  return t.options = Me({ async: !0, ssr: !1 }, e), t;
}
var bs = function(e) {
  var t = e.sideCar, n = ps(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return _.createElement(o, Me({}, n));
};
bs.isSideCarExport = !0;
function ql(e, t) {
  return e.useMedium(t), bs;
}
var hs = Yl(), Wn = function() {
}, vn = _.forwardRef(function(e, t) {
  var n = _.useRef(null), o = _.useState({
    onScrollCapture: Wn,
    onWheelCapture: Wn,
    onTouchMoveCapture: Wn
  }), r = o[0], s = o[1], a = e.forwardProps, c = e.children, i = e.className, l = e.removeScrollBar, u = e.enabled, f = e.shards, h = e.sideCar, b = e.noIsolation, v = e.inert, p = e.allowPinchZoom, x = e.as, $ = x === void 0 ? "div" : x, m = ps(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = h, C = Xl([n, t]), E = Me(Me({}, m), r);
  return _.createElement(
    _.Fragment,
    null,
    u && _.createElement(y, { sideCar: hs, removeScrollBar: l, shards: f, noIsolation: b, inert: v, setCallbacks: s, allowPinchZoom: !!p, lockRef: n }),
    a ? _.cloneElement(_.Children.only(c), Me(Me({}, E), { ref: C })) : _.createElement($, Me({}, E, { className: i, ref: C }), c)
  );
});
vn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
vn.classNames = {
  fullWidth: on,
  zeroRight: nn
};
var Zl = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Jl() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Zl();
  return t && e.setAttribute("nonce", t), e;
}
function Ql(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ed(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var td = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Jl()) && (Ql(t, n), ed(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, nd = function() {
  var e = td();
  return function(t, n) {
    _.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, vs = function() {
  var e = nd(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, od = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, zn = function(e) {
  return parseInt(e || "", 10) || 0;
}, rd = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [zn(n), zn(o), zn(r)];
}, sd = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return od;
  var t = rd(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, ad = vs(), $t = "data-scroll-locked", cd = function(e, t, n, o) {
  var r = e.left, s = e.top, a = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(zl, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(c, "px ").concat(o, `;
  }
  body[`).concat($t, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(nn, ` {
    right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(on, ` {
    margin-right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(nn, " .").concat(nn, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(on, " .").concat(on, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat($t, `] {
    `).concat(Bl, ": ").concat(c, `px;
  }
`);
}, br = function() {
  var e = parseInt(document.body.getAttribute($t) || "0", 10);
  return isFinite(e) ? e : 0;
}, id = function() {
  _.useEffect(function() {
    return document.body.setAttribute($t, (br() + 1).toString()), function() {
      var e = br() - 1;
      e <= 0 ? document.body.removeAttribute($t) : document.body.setAttribute($t, e.toString());
    };
  }, []);
}, ld = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  id();
  var s = _.useMemo(function() {
    return sd(r);
  }, [r]);
  return _.createElement(ad, { styles: cd(s, !t, r, n ? "" : "!important") });
}, Jn = !1;
if (typeof window < "u")
  try {
    var Yt = Object.defineProperty({}, "passive", {
      get: function() {
        return Jn = !0, !0;
      }
    });
    window.addEventListener("test", Yt, Yt), window.removeEventListener("test", Yt, Yt);
  } catch {
    Jn = !1;
  }
var mt = Jn ? { passive: !1 } : !1, dd = function(e) {
  return e.tagName === "TEXTAREA";
}, ms = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !dd(e) && n[t] === "visible")
  );
}, ud = function(e) {
  return ms(e, "overflowY");
}, fd = function(e) {
  return ms(e, "overflowX");
}, hr = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = gs(e, n);
    if (o) {
      var r = xs(e, n), s = r[1], a = r[2];
      if (s > a)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, pd = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, bd = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, gs = function(e, t) {
  return e === "v" ? ud(t) : fd(t);
}, xs = function(e, t) {
  return e === "v" ? pd(t) : bd(t);
}, hd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, vd = function(e, t, n, o, r) {
  var s = hd(e, window.getComputedStyle(t).direction), a = s * o, c = n.target, i = t.contains(c), l = !1, u = a > 0, f = 0, h = 0;
  do {
    var b = xs(e, c), v = b[0], p = b[1], x = b[2], $ = p - x - s * v;
    (v || $) && gs(e, c) && (f += $, h += v), c = c.parentNode;
  } while (
    // portaled content
    !i && c !== document.body || // self content
    i && (t.contains(c) || t === c)
  );
  return (u && (r && f === 0 || !r && a > f) || !u && (r && h === 0 || !r && -a > h)) && (l = !0), l;
}, qt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, vr = function(e) {
  return [e.deltaX, e.deltaY];
}, mr = function(e) {
  return e && "current" in e ? e.current : e;
}, md = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, gd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, xd = 0, gt = [];
function $d(e) {
  var t = _.useRef([]), n = _.useRef([0, 0]), o = _.useRef(), r = _.useState(xd++)[0], s = _.useState(function() {
    return vs();
  })[0], a = _.useRef(e);
  _.useEffect(function() {
    a.current = e;
  }, [e]), _.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var p = Wl([e.lockRef.current], (e.shards || []).map(mr), !0).filter(Boolean);
      return p.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), p.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = _.useCallback(function(p, x) {
    if ("touches" in p && p.touches.length === 2)
      return !a.current.allowPinchZoom;
    var $ = qt(p), m = n.current, y = "deltaX" in p ? p.deltaX : m[0] - $[0], C = "deltaY" in p ? p.deltaY : m[1] - $[1], E, R = p.target, S = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in p && S === "h" && R.type === "range")
      return !1;
    var O = hr(S, R);
    if (!O)
      return !0;
    if (O ? E = S : (E = S === "v" ? "h" : "v", O = hr(S, R)), !O)
      return !1;
    if (!o.current && "changedTouches" in p && (y || C) && (o.current = E), !E)
      return !0;
    var D = o.current || E;
    return vd(D, x, p, D === "h" ? y : C, !0);
  }, []), i = _.useCallback(function(p) {
    var x = p;
    if (!(!gt.length || gt[gt.length - 1] !== s)) {
      var $ = "deltaY" in x ? vr(x) : qt(x), m = t.current.filter(function(E) {
        return E.name === x.type && E.target === x.target && md(E.delta, $);
      })[0];
      if (m && m.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!m) {
        var y = (a.current.shards || []).map(mr).filter(Boolean).filter(function(E) {
          return E.contains(x.target);
        }), C = y.length > 0 ? c(x, y[0]) : !a.current.noIsolation;
        C && x.cancelable && x.preventDefault();
      }
    }
  }, []), l = _.useCallback(function(p, x, $, m) {
    var y = { name: p, delta: x, target: $, should: m };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), u = _.useCallback(function(p) {
    n.current = qt(p), o.current = void 0;
  }, []), f = _.useCallback(function(p) {
    l(p.type, vr(p), p.target, c(p, e.lockRef.current));
  }, []), h = _.useCallback(function(p) {
    l(p.type, qt(p), p.target, c(p, e.lockRef.current));
  }, []);
  _.useEffect(function() {
    return gt.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", i, mt), document.addEventListener("touchmove", i, mt), document.addEventListener("touchstart", u, mt), function() {
      gt = gt.filter(function(p) {
        return p !== s;
      }), document.removeEventListener("wheel", i, mt), document.removeEventListener("touchmove", i, mt), document.removeEventListener("touchstart", u, mt);
    };
  }, []);
  var b = e.removeScrollBar, v = e.inert;
  return _.createElement(
    _.Fragment,
    null,
    v ? _.createElement(s, { styles: gd(r) }) : null,
    b ? _.createElement(ld, { gapMode: "margin" }) : null
  );
}
const wd = ql(hs, $d);
var $s = _.forwardRef(function(e, t) {
  return _.createElement(vn, Me({}, e, { ref: t, sideCar: wd }));
});
$s.classNames = vn.classNames;
const yo = $s;
var yd = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, xt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), Jt = {}, Bn = 0, ws = function(e) {
  return e && (e.host || ws(e.parentNode));
}, Cd = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = ws(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ed = function(e, t, n, o) {
  var r = Cd(t, Array.isArray(e) ? e : [e]);
  Jt[n] || (Jt[n] = /* @__PURE__ */ new WeakMap());
  var s = Jt[n], a = [], c = /* @__PURE__ */ new Set(), i = new Set(r), l = function(f) {
    !f || c.has(f) || (c.add(f), l(f.parentNode));
  };
  r.forEach(l);
  var u = function(f) {
    !f || i.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (c.has(h))
        u(h);
      else
        try {
          var b = h.getAttribute(o), v = b !== null && b !== "false", p = (xt.get(h) || 0) + 1, x = (s.get(h) || 0) + 1;
          xt.set(h, p), s.set(h, x), a.push(h), p === 1 && v && Zt.set(h, !0), x === 1 && h.setAttribute(n, "true"), v || h.setAttribute(o, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", h, $);
        }
    });
  };
  return u(t), c.clear(), Bn++, function() {
    a.forEach(function(f) {
      var h = xt.get(f) - 1, b = s.get(f) - 1;
      xt.set(f, h), s.set(f, b), h || (Zt.has(f) || f.removeAttribute(o), Zt.delete(f)), b || f.removeAttribute(n);
    }), Bn--, Bn || (xt = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), Jt = {});
  };
}, Co = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = t || yd(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), Ed(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
const ys = "Dialog", [Cs, ev] = Te(ys), [Pd, Fe] = Cs(ys), Td = (e) => {
  const { __scopeDialog: t, children: n, open: o, defaultOpen: r, onOpenChange: s, modal: a = !0 } = e, c = j(null), i = j(null), [l = !1, u] = Ne({
    prop: o,
    defaultProp: r,
    onChange: s
  });
  return /* @__PURE__ */ w(Pd, {
    scope: t,
    triggerRef: c,
    contentRef: i,
    contentId: Ie(),
    titleId: Ie(),
    descriptionId: Ie(),
    open: l,
    onOpenChange: u,
    onOpenToggle: q(
      () => u(
        (f) => !f
      ),
      [
        u
      ]
    ),
    modal: a
  }, n);
}, Sd = "DialogTrigger", _d = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = Fe(Sd, n), s = Q(t, r.triggerRef);
  return /* @__PURE__ */ w(B.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": Eo(r.open)
  }, o, {
    ref: s,
    onClick: L(e.onClick, r.onOpenToggle)
  }));
}), Es = "DialogPortal", [Rd, Ps] = Cs(Es, {
  forceMount: void 0
}), Ad = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, s = Fe(Es, t);
  return /* @__PURE__ */ w(Rd, {
    scope: t,
    forceMount: n
  }, lt.map(
    o,
    (a) => /* @__PURE__ */ w(xe, {
      present: n || s.open
    }, /* @__PURE__ */ w(Tt, {
      asChild: !0,
      container: r
    }, a))
  ));
}, Qn = "DialogOverlay", Nd = /* @__PURE__ */ N((e, t) => {
  const n = Ps(Qn, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = Fe(Qn, e.__scopeDialog);
  return s.modal ? /* @__PURE__ */ w(xe, {
    present: o || s.open
  }, /* @__PURE__ */ w(Od, P({}, r, {
    ref: t
  }))) : null;
}), Od = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = Fe(Qn, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(yo, {
      as: He,
      allowPinchZoom: !0,
      shards: [
        r.contentRef
      ]
    }, /* @__PURE__ */ w(B.div, P({
      "data-state": Eo(r.open)
    }, o, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...o.style
      }
    })))
  );
}), Mt = "DialogContent", Id = /* @__PURE__ */ N((e, t) => {
  const n = Ps(Mt, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = Fe(Mt, e.__scopeDialog);
  return /* @__PURE__ */ w(xe, {
    present: o || s.open
  }, s.modal ? /* @__PURE__ */ w(kd, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ w(jd, P({}, r, {
    ref: t
  })));
}), kd = /* @__PURE__ */ N((e, t) => {
  const n = Fe(Mt, e.__scopeDialog), o = j(null), r = Q(t, n.contentRef, o);
  return W(() => {
    const s = o.current;
    if (s)
      return Co(s);
  }, []), /* @__PURE__ */ w(Ts, P({}, e, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: L(e.onCloseAutoFocus, (s) => {
      var a;
      s.preventDefault(), (a = n.triggerRef.current) === null || a === void 0 || a.focus();
    }),
    onPointerDownOutside: L(e.onPointerDownOutside, (s) => {
      const a = s.detail.originalEvent, c = a.button === 0 && a.ctrlKey === !0;
      (a.button === 2 || c) && s.preventDefault();
    }),
    onFocusOutside: L(
      e.onFocusOutside,
      (s) => s.preventDefault()
    )
  }));
}), jd = /* @__PURE__ */ N((e, t) => {
  const n = Fe(Mt, e.__scopeDialog), o = j(!1), r = j(!1);
  return /* @__PURE__ */ w(Ts, P({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (s) => {
      var a;
      if ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, s), !s.defaultPrevented) {
        var c;
        o.current || (c = n.triggerRef.current) === null || c === void 0 || c.focus(), s.preventDefault();
      }
      o.current = !1, r.current = !1;
    },
    onInteractOutside: (s) => {
      var a, c;
      (a = e.onInteractOutside) === null || a === void 0 || a.call(e, s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
      const i = s.target;
      ((c = n.triggerRef.current) === null || c === void 0 ? void 0 : c.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault();
    }
  }));
}), Ts = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: s, ...a } = e, c = Fe(Mt, n), i = j(null), l = Q(t, i);
  return wo(), /* @__PURE__ */ w(st, null, /* @__PURE__ */ w($o, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ w(zt, P({
    role: "dialog",
    id: c.contentId,
    "aria-describedby": c.descriptionId,
    "aria-labelledby": c.titleId,
    "data-state": Eo(c.open)
  }, a, {
    ref: l,
    onDismiss: () => c.onOpenChange(!1)
  }))), !1);
}), Dd = "DialogTitle", Md = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = Fe(Dd, n);
  return /* @__PURE__ */ w(B.h2, P({
    id: r.titleId
  }, o, {
    ref: t
  }));
});
const Ld = "DialogClose", Fd = /* @__PURE__ */ N((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = Fe(Ld, n);
  return /* @__PURE__ */ w(B.button, P({
    type: "button"
  }, o, {
    ref: t,
    onClick: L(
      e.onClick,
      () => r.onOpenChange(!1)
    )
  }));
});
function Eo(e) {
  return e ? "open" : "closed";
}
const Vd = Td, Ss = _d, Wd = Ad, zd = Nd, Bd = Id, Hd = Md, _s = Fd, Ud = ue("modal", {
  variants: {
    variant: {
      default: "modal-default",
      fullscreen: "modal-fullscreen"
    },
    size: {
      small: "modal-small",
      regular: "modal-regular",
      large: "modal-large"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "regular"
  }
}), tv = V.forwardRef(
  ({ open: e, ModalTrigger: t, onOpenChange: n, children: o, ...r }) => /* @__PURE__ */ d.jsxs(Vd, { open: e, onOpenChange: n, ...r, children: [
    /* @__PURE__ */ d.jsx(Ss, { asChild: !0, children: t }),
    o
  ] })
), Xd = () => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
      }
    )
  }
), nv = ({
  size: e,
  variant: t,
  className: n,
  title: o,
  children: r,
  hasCloseIcon: s,
  open: a,
  ModalTrigger: c,
  onOpenChange: i,
  ...l
}) => /* @__PURE__ */ d.jsxs(Wd, { children: [
  /* @__PURE__ */ d.jsx(zd, { className: "fixed inset-0 bg-black/50 z-10" }),
  /* @__PURE__ */ d.jsx(Bd, { className: "max-h-screen flex justify-center", ...l, children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `modal ] z-50 shadow ${t === "fullscreen" ? "!m-0 w-[98%] absolute top-5 h-screen" : "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"}  ${te(Ud({ size: e, variant: t }), n)}`,
      children: [
        /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: "flex w-full justify-between items-center modal-header",
            children: [
              /* @__PURE__ */ d.jsx(Hd, { children: o && /* @__PURE__ */ d.jsx("span", { className: "h4", children: o }) }),
              s && /* @__PURE__ */ d.jsx(_s, { className: "modal-close-button relative top-0 right-0", children: /* @__PURE__ */ d.jsx(Xd, {}) })
            ]
          }
        ),
        /* @__PURE__ */ d.jsx("div", { className: "modal-content", children: r })
      ]
    }
  ) })
] }), ov = ({ children: e }) => /* @__PURE__ */ d.jsx(_s, { className: "w-full flex", "aria-label": "Close", asChild: !0, children: e }), rv = ({ children: e }) => /* @__PURE__ */ d.jsx(Ss, { "aria-label": "Open", asChild: !0, children: e }), Gd = ue("", {
  variants: {
    variant: {
      primary: "notification-primary",
      neutral: "notification-neutral",
      red: "notification-red",
      yellow: "notification-yellow",
      green: "notification-green",
      info: "notification-info",
      brand: "notification-brand"
    },
    size: {
      small: "notification-small",
      regular: "",
      large: "notification-large"
    },
    width: {
      inline: "w-fit",
      full: "w-full"
    },
    // icon: {
    //   true: '',
    // },
    text: {
      true: ""
    }
    // action: {
    //   true: '',
    // },
    // close: {
    //   true: '',
    // },
  }
}), sv = ({
  variant: e,
  size: t,
  width: n,
  children: o,
  icon: r,
  action: s,
  close: a,
  iconContent: c,
  actionLogic: i
}) => {
  const [l, u] = F(!0);
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: l && /* @__PURE__ */ d.jsx("div", { className: "w-full", children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: te(
        "notification",
        Gd({
          variant: e,
          size: t,
          // className,
          width: n
          // icon,
          // action,
          // close,
        })
      ),
      children: [
        r && /* @__PURE__ */ d.jsx("span", { className: "notification-icon", children: c || /* @__PURE__ */ d.jsx(as, {}) }),
        /* @__PURE__ */ d.jsx("div", { className: "notification-content", children: o }),
        /* @__PURE__ */ d.jsxs("span", { className: "notification-actions", children: [
          s && /* @__PURE__ */ d.jsx("button", { onClick: i, className: "notification-action", children: "Action" }),
          a && /* @__PURE__ */ d.jsx("span", { className: "notification-close", children: /* @__PURE__ */ d.jsx(
            "button",
            {
              onClick: () => u(!l),
              className: "close-button",
              children: /* @__PURE__ */ d.jsx(Dt, {})
            }
          ) })
        ] })
      ]
    }
  ) }) });
}, Kd = ["top", "right", "bottom", "left"], tt = Math.min, Re = Math.max, an = Math.round, Qt = Math.floor, nt = (e) => ({
  x: e,
  y: e
}), Yd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, qd = {
  start: "end",
  end: "start"
};
function eo(e, t, n) {
  return Re(e, tt(t, n));
}
function Ue(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xe(e) {
  return e.split("-")[0];
}
function St(e) {
  return e.split("-")[1];
}
function Po(e) {
  return e === "x" ? "y" : "x";
}
function To(e) {
  return e === "y" ? "height" : "width";
}
function _t(e) {
  return ["top", "bottom"].includes(Xe(e)) ? "y" : "x";
}
function So(e) {
  return Po(_t(e));
}
function Zd(e, t, n) {
  n === void 0 && (n = !1);
  const o = St(e), r = So(e), s = To(r);
  let a = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = cn(a)), [a, cn(a)];
}
function Jd(e) {
  const t = cn(e);
  return [to(e), t, to(t)];
}
function to(e) {
  return e.replace(/start|end/g, (t) => qd[t]);
}
function Qd(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], s = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? s : a;
    default:
      return [];
  }
}
function eu(e, t, n, o) {
  const r = St(e);
  let s = Qd(Xe(e), n === "start", o);
  return r && (s = s.map((a) => a + "-" + r), t && (s = s.concat(s.map(to)))), s;
}
function cn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Yd[t]);
}
function tu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Rs(e) {
  return typeof e != "number" ? tu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ln(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function gr(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = _t(t), a = So(t), c = To(a), i = Xe(t), l = s === "y", u = o.x + o.width / 2 - r.width / 2, f = o.y + o.height / 2 - r.height / 2, h = o[c] / 2 - r[c] / 2;
  let b;
  switch (i) {
    case "top":
      b = {
        x: u,
        y: o.y - r.height
      };
      break;
    case "bottom":
      b = {
        x: u,
        y: o.y + o.height
      };
      break;
    case "right":
      b = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      b = {
        x: o.x - r.width,
        y: f
      };
      break;
    default:
      b = {
        x: o.x,
        y: o.y
      };
  }
  switch (St(t)) {
    case "start":
      b[a] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      b[a] += h * (n && l ? -1 : 1);
      break;
  }
  return b;
}
const nu = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: a
  } = n, c = s.filter(Boolean), i = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let l = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: u,
    y: f
  } = gr(l, o, i), h = o, b = {}, v = 0;
  for (let p = 0; p < c.length; p++) {
    const {
      name: x,
      fn: $
    } = c[p], {
      x: m,
      y,
      data: C,
      reset: E
    } = await $({
      x: u,
      y: f,
      initialPlacement: o,
      placement: h,
      strategy: r,
      middlewareData: b,
      rects: l,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = m ?? u, f = y ?? f, b = {
      ...b,
      [x]: {
        ...b[x],
        ...C
      }
    }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (l = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : E.rects), {
      x: u,
      y: f
    } = gr(l, h, i)), p = -1);
  }
  return {
    x: u,
    y: f,
    placement: h,
    strategy: r,
    middlewareData: b
  };
};
async function Lt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: a,
    elements: c,
    strategy: i
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: b = 0
  } = Ue(t, e), v = Rs(b), x = c[h ? f === "floating" ? "reference" : "floating" : f], $ = ln(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: i
  })), m = f === "floating" ? {
    ...a.floating,
    x: o,
    y: r
  } : a.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), C = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = ln(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: m,
    offsetParent: y,
    strategy: i
  }) : m);
  return {
    top: ($.top - E.top + v.top) / C.y,
    bottom: (E.bottom - $.bottom + v.bottom) / C.y,
    left: ($.left - E.left + v.left) / C.x,
    right: (E.right - $.right + v.right) / C.x
  };
}
const ou = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: a,
      elements: c,
      middlewareData: i
    } = t, {
      element: l,
      padding: u = 0
    } = Ue(e, t) || {};
    if (l == null)
      return {};
    const f = Rs(u), h = {
      x: n,
      y: o
    }, b = So(r), v = To(b), p = await a.getDimensions(l), x = b === "y", $ = x ? "top" : "left", m = x ? "bottom" : "right", y = x ? "clientHeight" : "clientWidth", C = s.reference[v] + s.reference[b] - h[b] - s.floating[v], E = h[b] - s.reference[b], R = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let S = R ? R[y] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(R))) && (S = c.floating[y] || s.floating[v]);
    const O = C / 2 - E / 2, D = S / 2 - p[v] / 2 - 1, z = tt(f[$], D), G = tt(f[m], D), k = z, Z = S - p[v] - G, A = S / 2 - p[v] / 2 + O, M = eo(k, A, Z), K = !i.arrow && St(r) != null && A !== M && s.reference[v] / 2 - (A < k ? z : G) - p[v] / 2 < 0, H = K ? A < k ? A - k : A - Z : 0;
    return {
      [b]: h[b] + H,
      data: {
        [b]: M,
        centerOffset: A - M - H,
        ...K && {
          alignmentOffset: H
        }
      },
      reset: K
    };
  }
}), ru = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: a,
        initialPlacement: c,
        platform: i,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: p = !0,
        ...x
      } = Ue(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const $ = Xe(r), m = Xe(c) === c, y = await (i.isRTL == null ? void 0 : i.isRTL(l.floating)), C = h || (m || !p ? [cn(c)] : Jd(c));
      !h && v !== "none" && C.push(...eu(c, p, v, y));
      const E = [c, ...C], R = await Lt(t, x), S = [];
      let O = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (u && S.push(R[$]), f) {
        const k = Zd(r, a, y);
        S.push(R[k[0]], R[k[1]]);
      }
      if (O = [...O, {
        placement: r,
        overflows: S
      }], !S.every((k) => k <= 0)) {
        var D, z;
        const k = (((D = s.flip) == null ? void 0 : D.index) || 0) + 1, Z = E[k];
        if (Z)
          return {
            data: {
              index: k,
              overflows: O
            },
            reset: {
              placement: Z
            }
          };
        let A = (z = O.filter((M) => M.overflows[0] <= 0).sort((M, K) => M.overflows[1] - K.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!A)
          switch (b) {
            case "bestFit": {
              var G;
              const M = (G = O.map((K) => [K.placement, K.overflows.filter((H) => H > 0).reduce((H, ie) => H + ie, 0)]).sort((K, H) => K[1] - H[1])[0]) == null ? void 0 : G[0];
              M && (A = M);
              break;
            }
            case "initialPlacement":
              A = c;
              break;
          }
        if (r !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
function xr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function $r(e) {
  return Kd.some((t) => e[t] >= 0);
}
const su = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = Ue(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await Lt(t, {
            ...r,
            elementContext: "reference"
          }), a = xr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: $r(a)
            }
          };
        }
        case "escaped": {
          const s = await Lt(t, {
            ...r,
            altBoundary: !0
          }), a = xr(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: $r(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function au(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), a = Xe(n), c = St(n), i = _t(n) === "y", l = ["left", "top"].includes(a) ? -1 : 1, u = s && i ? -1 : 1, f = Ue(t, e);
  let {
    mainAxis: h,
    crossAxis: b,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return c && typeof v == "number" && (b = c === "end" ? v * -1 : v), i ? {
    x: b * u,
    y: h * l
  } : {
    x: h * l,
    y: b * u
  };
}
const cu = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: a,
        middlewareData: c
      } = t, i = await au(t, e);
      return a === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + i.x,
        y: s + i.y,
        data: {
          ...i,
          placement: a
        }
      };
    }
  };
}, iu = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: c = {
          fn: (x) => {
            let {
              x: $,
              y: m
            } = x;
            return {
              x: $,
              y: m
            };
          }
        },
        ...i
      } = Ue(e, t), l = {
        x: n,
        y: o
      }, u = await Lt(t, i), f = _t(Xe(r)), h = Po(f);
      let b = l[h], v = l[f];
      if (s) {
        const x = h === "y" ? "top" : "left", $ = h === "y" ? "bottom" : "right", m = b + u[x], y = b - u[$];
        b = eo(m, b, y);
      }
      if (a) {
        const x = f === "y" ? "top" : "left", $ = f === "y" ? "bottom" : "right", m = v + u[x], y = v - u[$];
        v = eo(m, v, y);
      }
      const p = c.fn({
        ...t,
        [h]: b,
        [f]: v
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - o
        }
      };
    }
  };
}, lu = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: s,
        middlewareData: a
      } = t, {
        offset: c = 0,
        mainAxis: i = !0,
        crossAxis: l = !0
      } = Ue(e, t), u = {
        x: n,
        y: o
      }, f = _t(r), h = Po(f);
      let b = u[h], v = u[f];
      const p = Ue(c, t), x = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (i) {
        const y = h === "y" ? "height" : "width", C = s.reference[h] - s.floating[y] + x.mainAxis, E = s.reference[h] + s.reference[y] - x.mainAxis;
        b < C ? b = C : b > E && (b = E);
      }
      if (l) {
        var $, m;
        const y = h === "y" ? "width" : "height", C = ["top", "left"].includes(Xe(r)), E = s.reference[f] - s.floating[y] + (C && (($ = a.offset) == null ? void 0 : $[f]) || 0) + (C ? 0 : x.crossAxis), R = s.reference[f] + s.reference[y] + (C ? 0 : ((m = a.offset) == null ? void 0 : m[f]) || 0) - (C ? x.crossAxis : 0);
        v < E ? v = E : v > R && (v = R);
      }
      return {
        [h]: b,
        [f]: v
      };
    }
  };
}, du = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: s
      } = t, {
        apply: a = () => {
        },
        ...c
      } = Ue(e, t), i = await Lt(t, c), l = Xe(n), u = St(n), f = _t(n) === "y", {
        width: h,
        height: b
      } = o.floating;
      let v, p;
      l === "top" || l === "bottom" ? (v = l, p = u === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (p = l, v = u === "end" ? "top" : "bottom");
      const x = b - i[v], $ = h - i[p], m = !t.middlewareData.shift;
      let y = x, C = $;
      if (f) {
        const R = h - i.left - i.right;
        C = u || m ? tt($, R) : R;
      } else {
        const R = b - i.top - i.bottom;
        y = u || m ? tt(x, R) : R;
      }
      if (m && !u) {
        const R = Re(i.left, 0), S = Re(i.right, 0), O = Re(i.top, 0), D = Re(i.bottom, 0);
        f ? C = h - 2 * (R !== 0 || S !== 0 ? R + S : Re(i.left, i.right)) : y = b - 2 * (O !== 0 || D !== 0 ? O + D : Re(i.top, i.bottom));
      }
      await a({
        ...t,
        availableWidth: C,
        availableHeight: y
      });
      const E = await r.getDimensions(s.floating);
      return h !== E.width || b !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ot(e) {
  return As(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ae(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ke(e) {
  var t;
  return (t = (As(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function As(e) {
  return e instanceof Node || e instanceof Ae(e).Node;
}
function Ge(e) {
  return e instanceof Element || e instanceof Ae(e).Element;
}
function Le(e) {
  return e instanceof HTMLElement || e instanceof Ae(e).HTMLElement;
}
function wr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ae(e).ShadowRoot;
}
function Bt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = ke(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function uu(e) {
  return ["table", "td", "th"].includes(ot(e));
}
function _o(e) {
  const t = Ro(), n = ke(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function fu(e) {
  let t = yt(e);
  for (; Le(t) && !mn(t); ) {
    if (_o(t))
      return t;
    t = yt(t);
  }
  return null;
}
function Ro() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function mn(e) {
  return ["html", "body", "#document"].includes(ot(e));
}
function ke(e) {
  return Ae(e).getComputedStyle(e);
}
function gn(e) {
  return Ge(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function yt(e) {
  if (ot(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    wr(e) && e.host || // Fallback.
    Ke(e)
  );
  return wr(t) ? t.host : t;
}
function Ns(e) {
  const t = yt(e);
  return mn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Le(t) && Bt(t) ? t : Ns(t);
}
function Ft(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Ns(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Ae(r);
  return s ? t.concat(a, a.visualViewport || [], Bt(r) ? r : [], a.frameElement && n ? Ft(a.frameElement) : []) : t.concat(r, Ft(r, [], n));
}
function Os(e) {
  const t = ke(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Le(e), s = r ? e.offsetWidth : n, a = r ? e.offsetHeight : o, c = an(n) !== s || an(o) !== a;
  return c && (n = s, o = a), {
    width: n,
    height: o,
    $: c
  };
}
function Ao(e) {
  return Ge(e) ? e : e.contextElement;
}
function wt(e) {
  const t = Ao(e);
  if (!Le(t))
    return nt(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = Os(t);
  let a = (s ? an(n.width) : n.width) / o, c = (s ? an(n.height) : n.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: a,
    y: c
  };
}
const pu = /* @__PURE__ */ nt(0);
function Is(e) {
  const t = Ae(e);
  return !Ro() || !t.visualViewport ? pu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function bu(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ae(e) ? !1 : t;
}
function ut(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = Ao(e);
  let a = nt(1);
  t && (o ? Ge(o) && (a = wt(o)) : a = wt(e));
  const c = bu(s, n, o) ? Is(s) : nt(0);
  let i = (r.left + c.x) / a.x, l = (r.top + c.y) / a.y, u = r.width / a.x, f = r.height / a.y;
  if (s) {
    const h = Ae(s), b = o && Ge(o) ? Ae(o) : o;
    let v = h, p = v.frameElement;
    for (; p && o && b !== v; ) {
      const x = wt(p), $ = p.getBoundingClientRect(), m = ke(p), y = $.left + (p.clientLeft + parseFloat(m.paddingLeft)) * x.x, C = $.top + (p.clientTop + parseFloat(m.paddingTop)) * x.y;
      i *= x.x, l *= x.y, u *= x.x, f *= x.y, i += y, l += C, v = Ae(p), p = v.frameElement;
    }
  }
  return ln({
    width: u,
    height: f,
    x: i,
    y: l
  });
}
const hu = [":popover-open", ":modal"];
function ks(e) {
  return hu.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function vu(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", a = Ke(o), c = t ? ks(t.floating) : !1;
  if (o === a || c && s)
    return n;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = nt(1);
  const u = nt(0), f = Le(o);
  if ((f || !f && !s) && ((ot(o) !== "body" || Bt(a)) && (i = gn(o)), Le(o))) {
    const h = ut(o);
    l = wt(o), u.x = h.x + o.clientLeft, u.y = h.y + o.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - i.scrollLeft * l.x + u.x,
    y: n.y * l.y - i.scrollTop * l.y + u.y
  };
}
function mu(e) {
  return Array.from(e.getClientRects());
}
function js(e) {
  return ut(Ke(e)).left + gn(e).scrollLeft;
}
function gu(e) {
  const t = Ke(e), n = gn(e), o = e.ownerDocument.body, r = Re(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = Re(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -n.scrollLeft + js(e);
  const c = -n.scrollTop;
  return ke(o).direction === "rtl" && (a += Re(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: a,
    y: c
  };
}
function xu(e, t) {
  const n = Ae(e), o = Ke(e), r = n.visualViewport;
  let s = o.clientWidth, a = o.clientHeight, c = 0, i = 0;
  if (r) {
    s = r.width, a = r.height;
    const l = Ro();
    (!l || l && t === "fixed") && (c = r.offsetLeft, i = r.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: c,
    y: i
  };
}
function $u(e, t) {
  const n = ut(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = Le(e) ? wt(e) : nt(1), a = e.clientWidth * s.x, c = e.clientHeight * s.y, i = r * s.x, l = o * s.y;
  return {
    width: a,
    height: c,
    x: i,
    y: l
  };
}
function yr(e, t, n) {
  let o;
  if (t === "viewport")
    o = xu(e, n);
  else if (t === "document")
    o = gu(Ke(e));
  else if (Ge(t))
    o = $u(t, n);
  else {
    const r = Is(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return ln(o);
}
function Ds(e, t) {
  const n = yt(e);
  return n === t || !Ge(n) || mn(n) ? !1 : ke(n).position === "fixed" || Ds(n, t);
}
function wu(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ft(e, [], !1).filter((c) => Ge(c) && ot(c) !== "body"), r = null;
  const s = ke(e).position === "fixed";
  let a = s ? yt(e) : e;
  for (; Ge(a) && !mn(a); ) {
    const c = ke(a), i = _o(a);
    !i && c.position === "fixed" && (r = null), (s ? !i && !r : !i && c.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Bt(a) && !i && Ds(e, a)) ? o = o.filter((u) => u !== a) : r = c, a = yt(a);
  }
  return t.set(e, o), o;
}
function yu(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const a = [...n === "clippingAncestors" ? wu(t, this._c) : [].concat(n), o], c = a[0], i = a.reduce((l, u) => {
    const f = yr(t, u, r);
    return l.top = Re(f.top, l.top), l.right = tt(f.right, l.right), l.bottom = tt(f.bottom, l.bottom), l.left = Re(f.left, l.left), l;
  }, yr(t, c, r));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function Cu(e) {
  const {
    width: t,
    height: n
  } = Os(e);
  return {
    width: t,
    height: n
  };
}
function Eu(e, t, n) {
  const o = Le(t), r = Ke(t), s = n === "fixed", a = ut(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = nt(0);
  if (o || !o && !s)
    if ((ot(t) !== "body" || Bt(r)) && (c = gn(t)), o) {
      const f = ut(t, !0, s, t);
      i.x = f.x + t.clientLeft, i.y = f.y + t.clientTop;
    } else
      r && (i.x = js(r));
  const l = a.left + c.scrollLeft - i.x, u = a.top + c.scrollTop - i.y;
  return {
    x: l,
    y: u,
    width: a.width,
    height: a.height
  };
}
function Cr(e, t) {
  return !Le(e) || ke(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Ms(e, t) {
  const n = Ae(e);
  if (!Le(e) || ks(e))
    return n;
  let o = Cr(e, t);
  for (; o && uu(o) && ke(o).position === "static"; )
    o = Cr(o, t);
  return o && (ot(o) === "html" || ot(o) === "body" && ke(o).position === "static" && !_o(o)) ? n : o || fu(e) || n;
}
const Pu = async function(e) {
  const t = this.getOffsetParent || Ms, n = this.getDimensions;
  return {
    reference: Eu(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(e.floating)
    }
  };
};
function Tu(e) {
  return ke(e).direction === "rtl";
}
const Su = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vu,
  getDocumentElement: Ke,
  getClippingRect: yu,
  getOffsetParent: Ms,
  getElementRects: Pu,
  getClientRects: mu,
  getDimensions: Cu,
  getScale: wt,
  isElement: Ge,
  isRTL: Tu
};
function _u(e, t) {
  let n = null, o;
  const r = Ke(e);
  function s() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function a(c, i) {
    c === void 0 && (c = !1), i === void 0 && (i = 1), s();
    const {
      left: l,
      top: u,
      width: f,
      height: h
    } = e.getBoundingClientRect();
    if (c || t(), !f || !h)
      return;
    const b = Qt(u), v = Qt(r.clientWidth - (l + f)), p = Qt(r.clientHeight - (u + h)), x = Qt(l), m = {
      rootMargin: -b + "px " + -v + "px " + -p + "px " + -x + "px",
      threshold: Re(0, tt(1, i)) || 1
    };
    let y = !0;
    function C(E) {
      const R = E[0].intersectionRatio;
      if (R !== i) {
        if (!y)
          return a();
        R ? a(!1, R) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...m,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, m);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function Ru(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = o, l = Ao(e), u = r || s ? [...l ? Ft(l) : [], ...Ft(t)] : [];
  u.forEach(($) => {
    r && $.addEventListener("scroll", n, {
      passive: !0
    }), s && $.addEventListener("resize", n);
  });
  const f = l && c ? _u(l, n) : null;
  let h = -1, b = null;
  a && (b = new ResizeObserver(($) => {
    let [m] = $;
    m && m.target === l && b && (b.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var y;
      (y = b) == null || y.observe(t);
    })), n();
  }), l && !i && b.observe(l), b.observe(t));
  let v, p = i ? ut(e) : null;
  i && x();
  function x() {
    const $ = ut(e);
    p && ($.x !== p.x || $.y !== p.y || $.width !== p.width || $.height !== p.height) && n(), p = $, v = requestAnimationFrame(x);
  }
  return n(), () => {
    var $;
    u.forEach((m) => {
      r && m.removeEventListener("scroll", n), s && m.removeEventListener("resize", n);
    }), f == null || f(), ($ = b) == null || $.disconnect(), b = null, i && cancelAnimationFrame(v);
  };
}
const Au = iu, Nu = ru, Ou = du, Iu = su, Er = ou, ku = lu, ju = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Su,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return nu(e, t, {
    ...r,
    platform: s
  });
}, Du = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? Er({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Er({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
};
var rn = typeof document < "u" ? Dr : W;
function dn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!dn(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const s = r[o];
      if (!(s === "_owner" && e.$$typeof) && !dn(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ls(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Pr(e, t) {
  const n = Ls(e);
  return Math.round(t * n) / n;
}
function Tr(e) {
  const t = _.useRef(e);
  return rn(() => {
    t.current = e;
  }), t;
}
function Mu(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: c = !0,
    whileElementsMounted: i,
    open: l
  } = e, [u, f] = _.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, b] = _.useState(o);
  dn(h, o) || b(o);
  const [v, p] = _.useState(null), [x, $] = _.useState(null), m = _.useCallback((H) => {
    H !== R.current && (R.current = H, p(H));
  }, []), y = _.useCallback((H) => {
    H !== S.current && (S.current = H, $(H));
  }, []), C = s || v, E = a || x, R = _.useRef(null), S = _.useRef(null), O = _.useRef(u), D = i != null, z = Tr(i), G = Tr(r), k = _.useCallback(() => {
    if (!R.current || !S.current)
      return;
    const H = {
      placement: t,
      strategy: n,
      middleware: h
    };
    G.current && (H.platform = G.current), ju(R.current, S.current, H).then((ie) => {
      const ne = {
        ...ie,
        isPositioned: !0
      };
      Z.current && !dn(O.current, ne) && (O.current = ne, bc.flushSync(() => {
        f(ne);
      }));
    });
  }, [h, t, n, G]);
  rn(() => {
    l === !1 && O.current.isPositioned && (O.current.isPositioned = !1, f((H) => ({
      ...H,
      isPositioned: !1
    })));
  }, [l]);
  const Z = _.useRef(!1);
  rn(() => (Z.current = !0, () => {
    Z.current = !1;
  }), []), rn(() => {
    if (C && (R.current = C), E && (S.current = E), C && E) {
      if (z.current)
        return z.current(C, E, k);
      k();
    }
  }, [C, E, k, z, D]);
  const A = _.useMemo(() => ({
    reference: R,
    floating: S,
    setReference: m,
    setFloating: y
  }), [m, y]), M = _.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), K = _.useMemo(() => {
    const H = {
      position: n,
      left: 0,
      top: 0
    };
    if (!M.floating)
      return H;
    const ie = Pr(M.floating, u.x), ne = Pr(M.floating, u.y);
    return c ? {
      ...H,
      transform: "translate(" + ie + "px, " + ne + "px)",
      ...Ls(M.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: ie,
      top: ne
    };
  }, [n, c, M.floating, u.x, u.y]);
  return _.useMemo(() => ({
    ...u,
    update: k,
    refs: A,
    elements: M,
    floatingStyles: K
  }), [u, k, A, M, K]);
}
const Lu = /* @__PURE__ */ N((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...s } = e;
  return /* @__PURE__ */ w(B.svg, P({}, s, {
    ref: t,
    width: o,
    height: r,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), e.asChild ? n : /* @__PURE__ */ w("polygon", {
    points: "0,0 30,0 15,10"
  }));
}), Fu = Lu;
function Fs(e) {
  const [t, n] = F(void 0);
  return Pe(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let a, c;
        if ("borderBoxSize" in s) {
          const i = s.borderBoxSize, l = Array.isArray(i) ? i[0] : i;
          a = l.inlineSize, c = l.blockSize;
        } else
          a = e.offsetWidth, c = e.offsetHeight;
        n({
          width: a,
          height: c
        });
      });
      return o.observe(e, {
        box: "border-box"
      }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const Vs = "Popper", [Ws, Rt] = Te(Vs), [Vu, zs] = Ws(Vs), Wu = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = F(null);
  return /* @__PURE__ */ w(Vu, {
    scope: t,
    anchor: o,
    onAnchorChange: r
  }, n);
}, zu = "PopperAnchor", Bu = /* @__PURE__ */ N((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, s = zs(zu, n), a = j(null), c = Q(t, a);
  return W(() => {
    s.onAnchorChange((o == null ? void 0 : o.current) || a.current);
  }), o ? null : /* @__PURE__ */ w(B.div, P({}, r, {
    ref: c
  }));
}), Bs = "PopperContent", [Hu, Uu] = Ws(Bs), Xu = /* @__PURE__ */ N((e, t) => {
  var n, o, r, s, a, c, i, l;
  const { __scopePopper: u, side: f = "bottom", sideOffset: h = 0, align: b = "center", alignOffset: v = 0, arrowPadding: p = 0, avoidCollisions: x = !0, collisionBoundary: $ = [], collisionPadding: m = 0, sticky: y = "partial", hideWhenDetached: C = !1, updatePositionStrategy: E = "optimized", onPlaced: R, ...S } = e, O = zs(Bs, u), [D, z] = F(null), G = Q(
    t,
    (Ee) => z(Ee)
  ), [k, Z] = F(null), A = Fs(k), M = (n = A == null ? void 0 : A.width) !== null && n !== void 0 ? n : 0, K = (o = A == null ? void 0 : A.height) !== null && o !== void 0 ? o : 0, H = f + (b !== "center" ? "-" + b : ""), ie = typeof m == "number" ? m : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...m
  }, ne = Array.isArray($) ? $ : [
    $
  ], Se = ne.length > 0, he = {
    padding: ie,
    boundary: ne.filter(qu),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: Se
  }, { refs: me, floatingStyles: Ce, placement: _e, isPositioned: je, middlewareData: ge } = Mu({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: H,
    whileElementsMounted: (...Ee) => Ru(...Ee, {
      animationFrame: E === "always"
    }),
    elements: {
      reference: O.anchor
    },
    middleware: [
      cu({
        mainAxis: h + K,
        alignmentAxis: v
      }),
      x && Au({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? ku() : void 0,
        ...he
      }),
      x && Nu({
        ...he
      }),
      Ou({
        ...he,
        apply: ({ elements: Ee, rects: De, availableWidth: qe, availableHeight: Xt }) => {
          const { width: pt, height: Nn } = De.reference, bt = Ee.floating.style;
          bt.setProperty("--radix-popper-available-width", `${qe}px`), bt.setProperty("--radix-popper-available-height", `${Xt}px`), bt.setProperty("--radix-popper-anchor-width", `${pt}px`), bt.setProperty("--radix-popper-anchor-height", `${Nn}px`);
        }
      }),
      k && Du({
        element: k,
        padding: p
      }),
      Zu({
        arrowWidth: M,
        arrowHeight: K
      }),
      C && Iu({
        strategy: "referenceHidden",
        ...he
      })
    ]
  }), [U, se] = Hs(_e), fe = be(R);
  Pe(() => {
    je && (fe == null || fe());
  }, [
    je,
    fe
  ]);
  const ae = (r = ge.arrow) === null || r === void 0 ? void 0 : r.x, ce = (s = ge.arrow) === null || s === void 0 ? void 0 : s.y, oe = ((a = ge.arrow) === null || a === void 0 ? void 0 : a.centerOffset) !== 0, [$e, we] = F();
  return Pe(() => {
    D && we(window.getComputedStyle(D).zIndex);
  }, [
    D
  ]), /* @__PURE__ */ w("div", {
    ref: me.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...Ce,
      transform: je ? Ce.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: $e,
      "--radix-popper-transform-origin": [
        (c = ge.transformOrigin) === null || c === void 0 ? void 0 : c.x,
        (i = ge.transformOrigin) === null || i === void 0 ? void 0 : i.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ w(Hu, {
    scope: u,
    placedSide: U,
    onArrowChange: Z,
    arrowX: ae,
    arrowY: ce,
    shouldHideArrow: oe
  }, /* @__PURE__ */ w(B.div, P({
    "data-side": U,
    "data-align": se
  }, S, {
    ref: G,
    style: {
      ...S.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: je ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ge.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
}), Gu = "PopperArrow", Ku = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Yu = /* @__PURE__ */ N(function(t, n) {
  const { __scopePopper: o, ...r } = t, s = Uu(Gu, o), a = Ku[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ w("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [a]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0
      }
    }, /* @__PURE__ */ w(Fu, P({}, r, {
      ref: n,
      style: {
        ...r.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
function qu(e) {
  return e !== null;
}
const Zu = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, r, s, a;
    const { placement: c, rects: i, middlewareData: l } = t, f = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, h = f ? 0 : e.arrowWidth, b = f ? 0 : e.arrowHeight, [v, p] = Hs(c), x = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[p], $ = ((o = (r = l.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + h / 2, m = ((s = (a = l.arrow) === null || a === void 0 ? void 0 : a.y) !== null && s !== void 0 ? s : 0) + b / 2;
    let y = "", C = "";
    return v === "bottom" ? (y = f ? x : `${$}px`, C = `${-b}px`) : v === "top" ? (y = f ? x : `${$}px`, C = `${i.floating.height + b}px`) : v === "right" ? (y = `${-b}px`, C = f ? x : `${m}px`) : v === "left" && (y = `${i.floating.width + b}px`, C = f ? x : `${m}px`), {
      data: {
        x: y,
        y: C
      }
    };
  }
});
function Hs(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const No = Wu, xn = Bu, Oo = Xu, Us = Yu, Xs = "Popover", [Gs, av] = Te(Xs, [
  Rt
]), Ht = Rt(), [Ju, ct] = Gs(Xs), Qu = (e) => {
  const { __scopePopover: t, children: n, open: o, defaultOpen: r, onOpenChange: s, modal: a = !1 } = e, c = Ht(t), i = j(null), [l, u] = F(!1), [f = !1, h] = Ne({
    prop: o,
    defaultProp: r,
    onChange: s
  });
  return /* @__PURE__ */ w(No, c, /* @__PURE__ */ w(Ju, {
    scope: t,
    contentId: Ie(),
    triggerRef: i,
    open: f,
    onOpenChange: h,
    onOpenToggle: q(
      () => h(
        (b) => !b
      ),
      [
        h
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: q(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: q(
      () => u(!1),
      []
    ),
    modal: a
  }, n));
}, ef = "PopoverAnchor", tf = /* @__PURE__ */ N((e, t) => {
  const { __scopePopover: n, ...o } = e, r = ct(ef, n), s = Ht(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: c } = r;
  return W(() => (a(), () => c()), [
    a,
    c
  ]), /* @__PURE__ */ w(xn, P({}, s, o, {
    ref: t
  }));
}), nf = "PopoverTrigger", of = /* @__PURE__ */ N((e, t) => {
  const { __scopePopover: n, ...o } = e, r = ct(nf, n), s = Ht(n), a = Q(t, r.triggerRef), c = /* @__PURE__ */ w(B.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": qs(r.open)
  }, o, {
    ref: a,
    onClick: L(e.onClick, r.onOpenToggle)
  }));
  return r.hasCustomAnchor ? c : /* @__PURE__ */ w(xn, P({
    asChild: !0
  }, s), c);
}), Ks = "PopoverPortal", [rf, sf] = Gs(Ks, {
  forceMount: void 0
}), af = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: r } = e, s = ct(Ks, t);
  return /* @__PURE__ */ w(rf, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(xe, {
    present: n || s.open
  }, /* @__PURE__ */ w(Tt, {
    asChild: !0,
    container: r
  }, o)));
}, Vt = "PopoverContent", cf = /* @__PURE__ */ N((e, t) => {
  const n = sf(Vt, e.__scopePopover), { forceMount: o = n.forceMount, ...r } = e, s = ct(Vt, e.__scopePopover);
  return /* @__PURE__ */ w(xe, {
    present: o || s.open
  }, s.modal ? /* @__PURE__ */ w(lf, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ w(df, P({}, r, {
    ref: t
  })));
}), lf = /* @__PURE__ */ N((e, t) => {
  const n = ct(Vt, e.__scopePopover), o = j(null), r = Q(t, o), s = j(!1);
  return W(() => {
    const a = o.current;
    if (a)
      return Co(a);
  }, []), /* @__PURE__ */ w(yo, {
    as: He,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(Ys, P({}, e, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: L(e.onCloseAutoFocus, (a) => {
      var c;
      a.preventDefault(), s.current || (c = n.triggerRef.current) === null || c === void 0 || c.focus();
    }),
    onPointerDownOutside: L(e.onPointerDownOutside, (a) => {
      const c = a.detail.originalEvent, i = c.button === 0 && c.ctrlKey === !0, l = c.button === 2 || i;
      s.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: L(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), df = /* @__PURE__ */ N((e, t) => {
  const n = ct(Vt, e.__scopePopover), o = j(!1), r = j(!1);
  return /* @__PURE__ */ w(Ys, P({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (s) => {
      var a;
      if ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, s), !s.defaultPrevented) {
        var c;
        o.current || (c = n.triggerRef.current) === null || c === void 0 || c.focus(), s.preventDefault();
      }
      o.current = !1, r.current = !1;
    },
    onInteractOutside: (s) => {
      var a, c;
      (a = e.onInteractOutside) === null || a === void 0 || a.call(e, s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
      const i = s.target;
      ((c = n.triggerRef.current) === null || c === void 0 ? void 0 : c.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault();
    }
  }));
}), Ys = /* @__PURE__ */ N((e, t) => {
  const { __scopePopover: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: s, disableOutsidePointerEvents: a, onEscapeKeyDown: c, onPointerDownOutside: i, onFocusOutside: l, onInteractOutside: u, ...f } = e, h = ct(Vt, n), b = Ht(n);
  return wo(), /* @__PURE__ */ w($o, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ w(zt, {
    asChild: !0,
    disableOutsidePointerEvents: a,
    onInteractOutside: u,
    onEscapeKeyDown: c,
    onPointerDownOutside: i,
    onFocusOutside: l,
    onDismiss: () => h.onOpenChange(!1)
  }, /* @__PURE__ */ w(Oo, P({
    "data-state": qs(h.open),
    role: "dialog",
    id: h.contentId
  }, b, f, {
    ref: t,
    style: {
      ...f.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
}), uf = "PopoverClose", ff = /* @__PURE__ */ N((e, t) => {
  const { __scopePopover: n, ...o } = e, r = ct(uf, n);
  return /* @__PURE__ */ w(B.button, P({
    type: "button"
  }, o, {
    ref: t,
    onClick: L(
      e.onClick,
      () => r.onOpenChange(!1)
    )
  }));
}), pf = /* @__PURE__ */ N((e, t) => {
  const { __scopePopover: n, ...o } = e, r = Ht(n);
  return /* @__PURE__ */ w(Us, P({}, r, o, {
    ref: t
  }));
});
function qs(e) {
  return e ? "open" : "closed";
}
const Zs = Qu, bf = tf, Js = of, Qs = af, ea = cf, Io = ff, hf = pf, Sr = ue("", {
  variants: {
    variant: {
      "om-multiple": "om-multiple",
      "om-basic": "om-basic",
      "om-topNav": "om-topNav"
    },
    position: {
      left: "left",
      right: "right",
      bottom: "bottom",
      auto: void 0
    }
  }
}), cv = ({ children: e }) => /* @__PURE__ */ d.jsx(Io, { className: "w-full", "aria-label": "Close", children: e }), iv = V.forwardRef(
  ({
    variant: e,
    menuGroups: t,
    position: n,
    launchIcon: o,
    children: r,
    launchTrigger: s,
    align: a,
    focus: c
  }, i) => {
    const l = t, [u, f] = F(c), h = (b) => {
      f(b);
    };
    return /* @__PURE__ */ d.jsx(Zs, { open: u, onOpenChange: (b) => h(b), children: /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: i,
        className: te(
          "overflow-menu z-[90]",
          Sr({
            variant: e
          })
        ),
        children: [
          /* @__PURE__ */ d.jsx(bf, { children: /* @__PURE__ */ d.jsx(
            Js,
            {
              className: "data-[state=open]:bg-neutral-50 rounded",
              asChild: !0,
              children: s || /* @__PURE__ */ d.jsx(
                "button",
                {
                  className: `overflow-menu-icon ${u && "active-icon"}`,
                  children: o
                }
              )
            }
          ) }),
          /* @__PURE__ */ d.jsx(Qs, { children: /* @__PURE__ */ d.jsx(
            ea,
            {
              className: te(
                "overflow-menu flex items-start",
                Sr({
                  variant: e
                })
              ),
              side: n === "left" || n === "right" || n === "bottom" ? n : void 0,
              align: a,
              updatePositionStrategy: "always",
              children: /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: `overflow-menu-items !relative ${e != "om-topNav" && "!top-3"}`,
                  children: l.map((b, v) => /* @__PURE__ */ d.jsxs("div", { className: "overflow-menu-group", children: [
                    e === "om-multiple" && /* @__PURE__ */ d.jsx("h4", { className: "overflow-menu-group-title ", children: b.title }),
                    e === "om-topNav" && b.title && /* @__PURE__ */ d.jsx("div", { className: "flex flex-col text-regular mb-1.5", children: /* @__PURE__ */ d.jsx("div", { className: "flex flex-col items-center w-full px-3 pt-4", children: /* @__PURE__ */ d.jsx("p", { className: "text-base text-regular p-0", children: b.title }) }) }),
                    /* @__PURE__ */ d.jsxs("ul", { className: "overflow-menu-ul p-0 m-0", children: [
                      r,
                      /* @__PURE__ */ d.jsx(Io, { className: "w-full", "aria-label": "Close", children: b && b.items.map(
                        (p, x) => typeof p.action == "string" ? p.action == "seperator" ? /* @__PURE__ */ d.jsx("div", { className: "w-full border border-neutral-50" }) : /* @__PURE__ */ d.jsx(
                          "a",
                          {
                            className: "contained-list-item",
                            href: p.action,
                            children: /* @__PURE__ */ d.jsx(
                              "li",
                              {
                                className: `!whitespace-pre-wrap !h-auto ${e === "om-multiple" && "max-h-8"} ${p.customclass ? p.customclass : ""}`,
                                children: p.label
                              },
                              x
                            )
                          },
                          x
                        ) : (
                          // todo document Item.Class
                          // <OverflowClose>
                          /* @__PURE__ */ d.jsx(
                            "li",
                            {
                              className: `!whitespace-pre-wrap !h-auto ${e === "om-multiple" && "max-h-8"} ${p.customclass ? p.customclass : ""}`,
                              onClick: p.action ? p.action : () => h(!u),
                              children: p.label
                            },
                            x
                          )
                        )
                        // </OverflowClose>
                      ) })
                    ] })
                  ] }, v))
                }
              )
            }
          ) })
        ]
      }
    ) });
  }
), vf = _.forwardRef((e, t) => /* @__PURE__ */ d.jsx(Vl, { children: /* @__PURE__ */ d.jsx(
  B.div,
  {
    ...e,
    ref: t,
    className: " overlay-main "
  }
) })), ta = ({ children: e, ...t }) => /* @__PURE__ */ d.jsx(Zs, { ...t, children: e }), mf = ({
  children: e,
  ...t
}) => /* @__PURE__ */ d.jsx(Js, { ...t, children: e }), na = V.forwardRef(
  ({ children: e, forceMount: t, arrow: n, arrowColour: o, ...r }, s) => /* @__PURE__ */ d.jsx(Qs, { children: /* @__PURE__ */ d.jsxs(ea, { ...r, ref: s, children: [
    e,
    /* @__PURE__ */ d.jsx(Io, {}),
    n && /* @__PURE__ */ d.jsx(hf, { className: o })
  ] }) })
);
ta.displayName = "Popover";
na.displayName = "PopoverContent";
const Hn = "rovingFocusGroup.onEntryFocus", gf = {
  bubbles: !1,
  cancelable: !0
}, ko = "RovingFocusGroup", [no, oa, xf] = pn(ko), [$f, $n] = Te(ko, [
  xf
]), [wf, yf] = $f(ko), Cf = /* @__PURE__ */ N((e, t) => /* @__PURE__ */ w(no.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(no.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(Ef, P({}, e, {
  ref: t
}))))), Ef = /* @__PURE__ */ N((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: o, loop: r = !1, dir: s, currentTabStopId: a, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: i, onEntryFocus: l, ...u } = e, f = j(null), h = Q(t, f), b = Et(s), [v = null, p] = Ne({
    prop: a,
    defaultProp: c,
    onChange: i
  }), [x, $] = F(!1), m = be(l), y = oa(n), C = j(!1), [E, R] = F(0);
  return W(() => {
    const S = f.current;
    if (S)
      return S.addEventListener(Hn, m), () => S.removeEventListener(Hn, m);
  }, [
    m
  ]), /* @__PURE__ */ w(wf, {
    scope: n,
    orientation: o,
    dir: b,
    loop: r,
    currentTabStopId: v,
    onItemFocus: q(
      (S) => p(S),
      [
        p
      ]
    ),
    onItemShiftTab: q(
      () => $(!0),
      []
    ),
    onFocusableItemAdd: q(
      () => R(
        (S) => S + 1
      ),
      []
    ),
    onFocusableItemRemove: q(
      () => R(
        (S) => S - 1
      ),
      []
    )
  }, /* @__PURE__ */ w(B.div, P({
    tabIndex: x || E === 0 ? -1 : 0,
    "data-orientation": o
  }, u, {
    ref: h,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: L(e.onMouseDown, () => {
      C.current = !0;
    }),
    onFocus: L(e.onFocus, (S) => {
      const O = !C.current;
      if (S.target === S.currentTarget && O && !x) {
        const D = new CustomEvent(Hn, gf);
        if (S.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
          const z = y().filter(
            (M) => M.focusable
          ), G = z.find(
            (M) => M.active
          ), k = z.find(
            (M) => M.id === v
          ), A = [
            G,
            k,
            ...z
          ].filter(Boolean).map(
            (M) => M.ref.current
          );
          ra(A);
        }
      }
      C.current = !1;
    }),
    onBlur: L(
      e.onBlur,
      () => $(!1)
    )
  })));
}), Pf = "RovingFocusGroupItem", Tf = /* @__PURE__ */ N((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: o = !0, active: r = !1, tabStopId: s, ...a } = e, c = Ie(), i = s || c, l = yf(Pf, n), u = l.currentTabStopId === i, f = oa(n), { onFocusableItemAdd: h, onFocusableItemRemove: b } = l;
  return W(() => {
    if (o)
      return h(), () => b();
  }, [
    o,
    h,
    b
  ]), /* @__PURE__ */ w(no.ItemSlot, {
    scope: n,
    id: i,
    focusable: o,
    active: r
  }, /* @__PURE__ */ w(B.span, P({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, a, {
    ref: t,
    onMouseDown: L(e.onMouseDown, (v) => {
      o ? l.onItemFocus(i) : v.preventDefault();
    }),
    onFocus: L(
      e.onFocus,
      () => l.onItemFocus(i)
    ),
    onKeyDown: L(e.onKeyDown, (v) => {
      if (v.key === "Tab" && v.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (v.target !== v.currentTarget)
        return;
      const p = Rf(v, l.orientation, l.dir);
      if (p !== void 0) {
        v.preventDefault();
        let $ = f().filter(
          (m) => m.focusable
        ).map(
          (m) => m.ref.current
        );
        if (p === "last")
          $.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && $.reverse();
          const m = $.indexOf(v.currentTarget);
          $ = l.loop ? Af($, m + 1) : $.slice(m + 1);
        }
        setTimeout(
          () => ra($)
        );
      }
    })
  })));
}), Sf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function _f(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Rf(e, t, n) {
  const o = _f(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(o)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(o)))
    return Sf[o];
}
function ra(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Af(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
const sa = Cf, aa = Tf;
function ca(e) {
  const t = j({
    value: e,
    previous: e
  });
  return et(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const ia = "Radio", [Nf, la] = Te(ia), [Of, If] = Nf(ia), kf = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadio: n, name: o, checked: r = !1, required: s, disabled: a, value: c = "on", onCheck: i, ...l } = e, [u, f] = F(null), h = Q(
    t,
    (p) => f(p)
  ), b = j(!1), v = u ? !!u.closest("form") : !0;
  return /* @__PURE__ */ w(Of, {
    scope: n,
    checked: r,
    disabled: a
  }, /* @__PURE__ */ w(B.button, P({
    type: "button",
    role: "radio",
    "aria-checked": r,
    "data-state": da(r),
    "data-disabled": a ? "" : void 0,
    disabled: a,
    value: c
  }, l, {
    ref: h,
    onClick: L(e.onClick, (p) => {
      r || i == null || i(), v && (b.current = p.isPropagationStopped(), b.current || p.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(Mf, {
    control: u,
    bubbles: !b.current,
    name: o,
    value: c,
    checked: r,
    required: s,
    disabled: a,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), jf = "RadioIndicator", Df = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadio: n, forceMount: o, ...r } = e, s = If(jf, n);
  return /* @__PURE__ */ w(xe, {
    present: o || s.checked
  }, /* @__PURE__ */ w(B.span, P({
    "data-state": da(s.checked),
    "data-disabled": s.disabled ? "" : void 0
  }, r, {
    ref: t
  })));
}), Mf = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, s = j(null), a = ca(n), c = Fs(t);
  return W(() => {
    const i = s.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (a !== n && f) {
      const h = new Event("click", {
        bubbles: o
      });
      f.call(i, n), i.dispatchEvent(h);
    }
  }, [
    a,
    n,
    o
  ]), /* @__PURE__ */ w("input", P({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: n
  }, r, {
    tabIndex: -1,
    ref: s,
    style: {
      ...e.style,
      ...c,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function da(e) {
  return e ? "checked" : "unchecked";
}
const Lf = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], ua = "RadioGroup", [Ff, lv] = Te(ua, [
  $n,
  la
]), fa = $n(), pa = la(), [Vf, Wf] = Ff(ua), zf = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadioGroup: n, name: o, defaultValue: r, value: s, required: a = !1, disabled: c = !1, orientation: i, dir: l, loop: u = !0, onValueChange: f, ...h } = e, b = fa(n), v = Et(l), [p, x] = Ne({
    prop: s,
    defaultProp: r,
    onChange: f
  });
  return /* @__PURE__ */ w(Vf, {
    scope: n,
    name: o,
    required: a,
    disabled: c,
    value: p,
    onValueChange: x
  }, /* @__PURE__ */ w(sa, P({
    asChild: !0
  }, b, {
    orientation: i,
    dir: v,
    loop: u
  }), /* @__PURE__ */ w(B.div, P({
    role: "radiogroup",
    "aria-required": a,
    "aria-orientation": i,
    "data-disabled": c ? "" : void 0,
    dir: v
  }, h, {
    ref: t
  }))));
}), Bf = "RadioGroupItem", Hf = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadioGroup: n, disabled: o, ...r } = e, s = Wf(Bf, n), a = s.disabled || o, c = fa(n), i = pa(n), l = j(null), u = Q(t, l), f = s.value === r.value, h = j(!1);
  return W(() => {
    const b = (p) => {
      Lf.includes(p.key) && (h.current = !0);
    }, v = () => h.current = !1;
    return document.addEventListener("keydown", b), document.addEventListener("keyup", v), () => {
      document.removeEventListener("keydown", b), document.removeEventListener("keyup", v);
    };
  }, []), /* @__PURE__ */ w(aa, P({
    asChild: !0
  }, c, {
    focusable: !a,
    active: f
  }), /* @__PURE__ */ w(kf, P({
    disabled: a,
    required: s.required,
    checked: f
  }, i, r, {
    name: s.name,
    ref: u,
    onCheck: () => s.onValueChange(r.value),
    onKeyDown: L((b) => {
      b.key === "Enter" && b.preventDefault();
    }),
    onFocus: L(r.onFocus, () => {
      var b;
      h.current && ((b = l.current) === null || b === void 0 || b.click());
    })
  })));
}), Uf = /* @__PURE__ */ N((e, t) => {
  const { __scopeRadioGroup: n, ...o } = e, r = pa(n);
  return /* @__PURE__ */ w(Df, P({}, r, o, {
    ref: t
  }));
}), Xf = zf, Gf = Hf, Kf = Uf;
function Yf({
  title: e,
  titleId: t,
  ...n
}, o) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: o,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ _.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
    clipRule: "evenodd"
  }));
}
const qf = _.forwardRef(Yf), Zf = qf, Jf = ue("radio-list", {
  variants: {
    variant: {
      basic: "radio-list-basic",
      contained: "radio-list-contained"
    },
    size: {
      small: "radio-list-small",
      regular: "radio-list-regular",
      large: "radio-list-large"
    },
    width: {
      full: "radio-list-full-width"
    },
    align: {
      vertical: "radio-list-vertical",
      horizontal: "radio-list-horizontal"
    },
    disabled: { true: "radio-list-disabled" },
    format: { rich: "rich-content" }
  }
}), dv = ({
  className: e,
  variant: t,
  size: n,
  align: o = "vertical",
  width: r,
  format: s,
  title: a = "",
  description: c,
  noCheckmark: i,
  children: l,
  onChangeLogic: u,
  defaultValue: f,
  disabled: h = !1,
  ...b
}) => /* @__PURE__ */ d.jsxs("div", { className: "w-full", children: [
  (a.length > 0 || c.length > 0) && /* @__PURE__ */ d.jsxs("div", { className: "list-title-description", children: [
    a && /* @__PURE__ */ d.jsx("h4", { className: "list-title", children: a }),
    c && /* @__PURE__ */ d.jsx("p", { children: c })
  ] }),
  /* @__PURE__ */ d.jsx(
    Xf,
    {
      className: te(
        "group",
        Jf({
          variant: t,
          size: n,
          align: o,
          width: r
        }),
        e
      ),
      onValueChange: (v) => u && u(v),
      defaultValue: f,
      "aria-label": "View density",
      disabled: h,
      ...b,
      children: l
    }
  )
] }), uv = ({
  id: e,
  value: t,
  contained: n,
  children: o,
  richContent: r,
  disabled: s = !1,
  noCheckmark: a = !1,
  ...c
}) => /* @__PURE__ */ d.jsxs(
  "label",
  {
    htmlFor: e,
    className: `radio-option items-center  ${r && "rich-content !items-start !h-auto [&:has([data-state=checked])]:!py-3"} ${n && "[&:has([data-state=checked])]:radio-option-selected !h-auto"}`,
    children: [
      /* @__PURE__ */ d.jsx(
        Gf,
        {
          className: `bg-white ${a && "sr-only"} peer w-[13px] h-[13px] group-[.radio-list-contained]:w-4 group-[.radio-list-contained]:h-4 disabled:opacity-40 border disabled:cursor-not-allowed border-neutral-500 focus:border-neutral-900 data-[state=checked]:border-primary-500 rounded-full outline-none cursor-default`,
          value: t,
          id: e,
          ...c,
          children: /* @__PURE__ */ d.jsx(
            Kf,
            {
              className: `flex items-center justify-center text-primary-400 ${!n && "relative after:content-[''] after:block after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-primary-400"} `,
              children: n && /* @__PURE__ */ d.jsx(Zf, { className: "!h-3 !w-3 !text-primary-400 hidden group-[.radio-list-contained]:block" })
            }
          )
        }
      ),
      /* @__PURE__ */ d.jsx(
        "label",
        {
          className: "peer-disabled:opacity-40 peer-disabled:cursor-not-allowed",
          htmlFor: e,
          children: o
        }
      )
    ]
  }
);
function oo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
const wn = /* @__PURE__ */ N((e, t) => /* @__PURE__ */ w(B.span, P({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), Qf = wn, ep = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], tp = [
  " ",
  "Enter"
], yn = "Select", [Cn, jo, np] = pn(yn), [At, fv] = Te(yn, [
  np,
  Rt
]), Do = Rt(), [op, ft] = At(yn), [rp, sp] = At(yn), ap = (e) => {
  const { __scopeSelect: t, children: n, open: o, defaultOpen: r, onOpenChange: s, value: a, defaultValue: c, onValueChange: i, dir: l, name: u, autoComplete: f, disabled: h, required: b } = e, v = Do(t), [p, x] = F(null), [$, m] = F(null), [y, C] = F(!1), E = Et(l), [R = !1, S] = Ne({
    prop: o,
    defaultProp: r,
    onChange: s
  }), [O, D] = Ne({
    prop: a,
    defaultProp: c,
    onChange: i
  }), z = j(null), G = p ? !!p.closest("form") : !0, [k, Z] = F(/* @__PURE__ */ new Set()), A = Array.from(k).map(
    (M) => M.props.value
  ).join(";");
  return /* @__PURE__ */ w(No, v, /* @__PURE__ */ w(op, {
    required: b,
    scope: t,
    trigger: p,
    onTriggerChange: x,
    valueNode: $,
    onValueNodeChange: m,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: C,
    contentId: Ie(),
    value: O,
    onValueChange: D,
    open: R,
    onOpenChange: S,
    dir: E,
    triggerPointerDownPosRef: z,
    disabled: h
  }, /* @__PURE__ */ w(Cn.Provider, {
    scope: t
  }, /* @__PURE__ */ w(rp, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: q((M) => {
      Z(
        (K) => new Set(K).add(M)
      );
    }, []),
    onNativeOptionRemove: q((M) => {
      Z((K) => {
        const H = new Set(K);
        return H.delete(M), H;
      });
    }, [])
  }, n)), G ? /* @__PURE__ */ w(ma, {
    key: A,
    "aria-hidden": !0,
    required: b,
    tabIndex: -1,
    name: u,
    autoComplete: f,
    value: O,
    onChange: (M) => D(M.target.value),
    disabled: h
  }, O === void 0 ? /* @__PURE__ */ w("option", {
    value: ""
  }) : null, Array.from(k)) : null));
}, cp = "SelectTrigger", ip = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, disabled: o = !1, ...r } = e, s = Do(n), a = ft(cp, n), c = a.disabled || o, i = Q(t, a.onTriggerChange), l = jo(n), [u, f, h] = ga((v) => {
    const p = l().filter(
      (m) => !m.disabled
    ), x = p.find(
      (m) => m.value === a.value
    ), $ = xa(p, v, x);
    $ !== void 0 && a.onValueChange($.value);
  }), b = () => {
    c || (a.onOpenChange(!0), h());
  };
  return /* @__PURE__ */ w(xn, P({
    asChild: !0
  }, s), /* @__PURE__ */ w(B.button, P({
    type: "button",
    role: "combobox",
    "aria-controls": a.contentId,
    "aria-expanded": a.open,
    "aria-required": a.required,
    "aria-autocomplete": "none",
    dir: a.dir,
    "data-state": a.open ? "open" : "closed",
    disabled: c,
    "data-disabled": c ? "" : void 0,
    "data-placeholder": va(a.value) ? "" : void 0
  }, r, {
    ref: i,
    onClick: L(r.onClick, (v) => {
      v.currentTarget.focus();
    }),
    onPointerDown: L(r.onPointerDown, (v) => {
      const p = v.target;
      p.hasPointerCapture(v.pointerId) && p.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && (b(), a.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      }, v.preventDefault());
    }),
    onKeyDown: L(r.onKeyDown, (v) => {
      const p = u.current !== "";
      !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && f(v.key), !(p && v.key === " ") && ep.includes(v.key) && (b(), v.preventDefault());
    })
  })));
}), lp = "SelectValue", dp = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, className: o, style: r, children: s, placeholder: a = "", ...c } = e, i = ft(lp, n), { onValueNodeHasChildrenChange: l } = i, u = s !== void 0, f = Q(t, i.onValueNodeChange);
  return Pe(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ w(B.span, P({}, c, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), va(i.value) ? /* @__PURE__ */ w(st, null, a) : s);
}), up = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, children: o, ...r } = e;
  return /* @__PURE__ */ w(B.span, P({
    "aria-hidden": !0
  }, r, {
    ref: t
  }), o || "▼");
}), fp = (e) => /* @__PURE__ */ w(Tt, P({
  asChild: !0
}, e)), Ct = "SelectContent", pp = /* @__PURE__ */ N((e, t) => {
  const n = ft(Ct, e.__scopeSelect), [o, r] = F();
  if (Pe(() => {
    r(new DocumentFragment());
  }, []), !n.open) {
    const s = o;
    return s ? /* @__PURE__ */ uo(/* @__PURE__ */ w(ba, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w(Cn.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w("div", null, e.children))), s) : null;
  }
  return /* @__PURE__ */ w(bp, P({}, e, {
    ref: t
  }));
}), Be = 10, [ba, En] = At(Ct), bp = /* @__PURE__ */ N((e, t) => {
  const {
    __scopeSelect: n,
    position: o = "item-aligned",
    onCloseAutoFocus: r,
    onEscapeKeyDown: s,
    onPointerDownOutside: a,
    side: c,
    sideOffset: i,
    align: l,
    alignOffset: u,
    arrowPadding: f,
    collisionBoundary: h,
    collisionPadding: b,
    sticky: v,
    hideWhenDetached: p,
    avoidCollisions: x,
    //
    ...$
  } = e, m = ft(Ct, n), [y, C] = F(null), [E, R] = F(null), S = Q(
    t,
    (U) => C(U)
  ), [O, D] = F(null), [z, G] = F(null), k = jo(n), [Z, A] = F(!1), M = j(!1);
  W(() => {
    if (y)
      return Co(y);
  }, [
    y
  ]), wo();
  const K = q((U) => {
    const [se, ...fe] = k().map(
      (oe) => oe.ref.current
    ), [ae] = fe.slice(-1), ce = document.activeElement;
    for (const oe of U)
      if (oe === ce || (oe == null || oe.scrollIntoView({
        block: "nearest"
      }), oe === se && E && (E.scrollTop = 0), oe === ae && E && (E.scrollTop = E.scrollHeight), oe == null || oe.focus(), document.activeElement !== ce))
        return;
  }, [
    k,
    E
  ]), H = q(
    () => K([
      O,
      y
    ]),
    [
      K,
      O,
      y
    ]
  );
  W(() => {
    Z && H();
  }, [
    Z,
    H
  ]);
  const { onOpenChange: ie, triggerPointerDownPosRef: ne } = m;
  W(() => {
    if (y) {
      let U = {
        x: 0,
        y: 0
      };
      const se = (ae) => {
        var ce, oe, $e, we;
        U = {
          x: Math.abs(Math.round(ae.pageX) - ((ce = (oe = ne.current) === null || oe === void 0 ? void 0 : oe.x) !== null && ce !== void 0 ? ce : 0)),
          y: Math.abs(Math.round(ae.pageY) - (($e = (we = ne.current) === null || we === void 0 ? void 0 : we.y) !== null && $e !== void 0 ? $e : 0))
        };
      }, fe = (ae) => {
        U.x <= 10 && U.y <= 10 ? ae.preventDefault() : y.contains(ae.target) || ie(!1), document.removeEventListener("pointermove", se), ne.current = null;
      };
      return ne.current !== null && (document.addEventListener("pointermove", se), document.addEventListener("pointerup", fe, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", se), document.removeEventListener("pointerup", fe, {
          capture: !0
        });
      };
    }
  }, [
    y,
    ie,
    ne
  ]), W(() => {
    const U = () => ie(!1);
    return window.addEventListener("blur", U), window.addEventListener("resize", U), () => {
      window.removeEventListener("blur", U), window.removeEventListener("resize", U);
    };
  }, [
    ie
  ]);
  const [Se, he] = ga((U) => {
    const se = k().filter(
      (ce) => !ce.disabled
    ), fe = se.find(
      (ce) => ce.ref.current === document.activeElement
    ), ae = xa(se, U, fe);
    ae && setTimeout(
      () => ae.ref.current.focus()
    );
  }), me = q((U, se, fe) => {
    const ae = !M.current && !fe;
    (m.value !== void 0 && m.value === se || ae) && (D(U), ae && (M.current = !0));
  }, [
    m.value
  ]), Ce = q(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), _e = q((U, se, fe) => {
    const ae = !M.current && !fe;
    (m.value !== void 0 && m.value === se || ae) && G(U);
  }, [
    m.value
  ]), je = o === "popper" ? _r : hp, ge = je === _r ? {
    side: c,
    sideOffset: i,
    align: l,
    alignOffset: u,
    arrowPadding: f,
    collisionBoundary: h,
    collisionPadding: b,
    sticky: v,
    hideWhenDetached: p,
    avoidCollisions: x
  } : {};
  return /* @__PURE__ */ w(ba, {
    scope: n,
    content: y,
    viewport: E,
    onViewportChange: R,
    itemRefCallback: me,
    selectedItem: O,
    onItemLeave: Ce,
    itemTextRefCallback: _e,
    focusSelectedItem: H,
    selectedItemText: z,
    position: o,
    isPositioned: Z,
    searchRef: Se
  }, /* @__PURE__ */ w(yo, {
    as: He,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w($o, {
    asChild: !0,
    trapped: m.open,
    onMountAutoFocus: (U) => {
      U.preventDefault();
    },
    onUnmountAutoFocus: L(r, (U) => {
      var se;
      (se = m.trigger) === null || se === void 0 || se.focus({
        preventScroll: !0
      }), U.preventDefault();
    })
  }, /* @__PURE__ */ w(zt, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: s,
    onPointerDownOutside: a,
    onFocusOutside: (U) => U.preventDefault(),
    onDismiss: () => m.onOpenChange(!1)
  }, /* @__PURE__ */ w(je, P({
    role: "listbox",
    id: m.contentId,
    "data-state": m.open ? "open" : "closed",
    dir: m.dir,
    onContextMenu: (U) => U.preventDefault()
  }, $, ge, {
    onPlaced: () => A(!0),
    ref: S,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...$.style
    },
    onKeyDown: L($.onKeyDown, (U) => {
      const se = U.ctrlKey || U.altKey || U.metaKey;
      if (U.key === "Tab" && U.preventDefault(), !se && U.key.length === 1 && he(U.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(U.key)) {
        let ae = k().filter(
          (ce) => !ce.disabled
        ).map(
          (ce) => ce.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(U.key) && (ae = ae.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(U.key)) {
          const ce = U.target, oe = ae.indexOf(ce);
          ae = ae.slice(oe + 1);
        }
        setTimeout(
          () => K(ae)
        ), U.preventDefault();
      }
    })
  }))))));
}), hp = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, s = ft(Ct, n), a = En(Ct, n), [c, i] = F(null), [l, u] = F(null), f = Q(
    t,
    (S) => u(S)
  ), h = jo(n), b = j(!1), v = j(!0), { viewport: p, selectedItem: x, selectedItemText: $, focusSelectedItem: m } = a, y = q(() => {
    if (s.trigger && s.valueNode && c && l && p && x && $) {
      const S = s.trigger.getBoundingClientRect(), O = l.getBoundingClientRect(), D = s.valueNode.getBoundingClientRect(), z = $.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const ce = z.left - O.left, oe = D.left - ce, $e = S.left - oe, we = S.width + $e, Ee = Math.max(we, O.width), De = window.innerWidth - Be, qe = oo(oe, [
          Be,
          De - Ee
        ]);
        c.style.minWidth = we + "px", c.style.left = qe + "px";
      } else {
        const ce = O.right - z.right, oe = window.innerWidth - D.right - ce, $e = window.innerWidth - S.right - oe, we = S.width + $e, Ee = Math.max(we, O.width), De = window.innerWidth - Be, qe = oo(oe, [
          Be,
          De - Ee
        ]);
        c.style.minWidth = we + "px", c.style.right = qe + "px";
      }
      const G = h(), k = window.innerHeight - Be * 2, Z = p.scrollHeight, A = window.getComputedStyle(l), M = parseInt(A.borderTopWidth, 10), K = parseInt(A.paddingTop, 10), H = parseInt(A.borderBottomWidth, 10), ie = parseInt(A.paddingBottom, 10), ne = M + K + Z + ie + H, Se = Math.min(x.offsetHeight * 5, ne), he = window.getComputedStyle(p), me = parseInt(he.paddingTop, 10), Ce = parseInt(he.paddingBottom, 10), _e = S.top + S.height / 2 - Be, je = k - _e, ge = x.offsetHeight / 2, U = x.offsetTop + ge, se = M + K + U, fe = ne - se;
      if (se <= _e) {
        const ce = x === G[G.length - 1].ref.current;
        c.style.bottom = "0px";
        const oe = l.clientHeight - p.offsetTop - p.offsetHeight, $e = Math.max(je, ge + (ce ? Ce : 0) + oe + H), we = se + $e;
        c.style.height = we + "px";
      } else {
        const ce = x === G[0].ref.current;
        c.style.top = "0px";
        const $e = Math.max(_e, M + p.offsetTop + (ce ? me : 0) + ge) + fe;
        c.style.height = $e + "px", p.scrollTop = se - _e + p.offsetTop;
      }
      c.style.margin = `${Be}px 0`, c.style.minHeight = Se + "px", c.style.maxHeight = k + "px", o == null || o(), requestAnimationFrame(
        () => b.current = !0
      );
    }
  }, [
    h,
    s.trigger,
    s.valueNode,
    c,
    l,
    p,
    x,
    $,
    s.dir,
    o
  ]);
  Pe(
    () => y(),
    [
      y
    ]
  );
  const [C, E] = F();
  Pe(() => {
    l && E(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const R = q((S) => {
    S && v.current === !0 && (y(), m == null || m(), v.current = !1);
  }, [
    y,
    m
  ]);
  return /* @__PURE__ */ w(vp, {
    scope: n,
    contentWrapper: c,
    shouldExpandOnScrollRef: b,
    onScrollButtonChange: R
  }, /* @__PURE__ */ w("div", {
    ref: i,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: C
    }
  }, /* @__PURE__ */ w(B.div, P({}, r, {
    ref: f,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...r.style
    }
  }))));
}), _r = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, align: o = "start", collisionPadding: r = Be, ...s } = e, a = Do(n);
  return /* @__PURE__ */ w(Oo, P({}, a, s, {
    ref: t,
    align: o,
    collisionPadding: r,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...s.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [vp, mp] = At(Ct, {}), Rr = "SelectViewport", gp = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...o } = e, r = En(Rr, n), s = mp(Rr, n), a = Q(t, r.onViewportChange), c = j(0);
  return /* @__PURE__ */ w(st, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(Cn.Slot, {
    scope: n
  }, /* @__PURE__ */ w(B.div, P({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, o, {
    ref: a,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...o.style
    },
    onScroll: L(o.onScroll, (i) => {
      const l = i.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: f } = s;
      if (f != null && f.current && u) {
        const h = Math.abs(c.current - l.scrollTop);
        if (h > 0) {
          const b = window.innerHeight - Be * 2, v = parseFloat(u.style.minHeight), p = parseFloat(u.style.height), x = Math.max(v, p);
          if (x < b) {
            const $ = x + h, m = Math.min(b, $), y = $ - m;
            u.style.height = m + "px", u.style.bottom === "0px" && (l.scrollTop = y > 0 ? y : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      c.current = l.scrollTop;
    })
  }))));
}), xp = "SelectGroup", [$p, pv] = At(xp), wp = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...o } = e, r = Ie();
  return /* @__PURE__ */ w($p, {
    scope: n,
    id: r
  }, /* @__PURE__ */ w(B.div, P({
    role: "group",
    "aria-labelledby": r
  }, o, {
    ref: t
  })));
}), ro = "SelectItem", [yp, ha] = At(ro), Cp = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, value: o, disabled: r = !1, textValue: s, ...a } = e, c = ft(ro, n), i = En(ro, n), l = c.value === o, [u, f] = F(s ?? ""), [h, b] = F(!1), v = Q(t, ($) => {
    var m;
    return (m = i.itemRefCallback) === null || m === void 0 ? void 0 : m.call(i, $, o, r);
  }), p = Ie(), x = () => {
    r || (c.onValueChange(o), c.onOpenChange(!1));
  };
  if (o === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ w(yp, {
    scope: n,
    value: o,
    disabled: r,
    textId: p,
    isSelected: l,
    onItemTextChange: q(($) => {
      f((m) => {
        var y;
        return m || ((y = $ == null ? void 0 : $.textContent) !== null && y !== void 0 ? y : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ w(Cn.ItemSlot, {
    scope: n,
    value: o,
    disabled: r,
    textValue: u
  }, /* @__PURE__ */ w(B.div, P({
    role: "option",
    "aria-labelledby": p,
    "data-highlighted": h ? "" : void 0,
    "aria-selected": l && h,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0,
    tabIndex: r ? void 0 : -1
  }, a, {
    ref: v,
    onFocus: L(
      a.onFocus,
      () => b(!0)
    ),
    onBlur: L(
      a.onBlur,
      () => b(!1)
    ),
    onPointerUp: L(a.onPointerUp, x),
    onPointerMove: L(a.onPointerMove, ($) => {
      if (r) {
        var m;
        (m = i.onItemLeave) === null || m === void 0 || m.call(i);
      } else
        $.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: L(a.onPointerLeave, ($) => {
      if ($.currentTarget === document.activeElement) {
        var m;
        (m = i.onItemLeave) === null || m === void 0 || m.call(i);
      }
    }),
    onKeyDown: L(a.onKeyDown, ($) => {
      var m;
      ((m = i.searchRef) === null || m === void 0 ? void 0 : m.current) !== "" && $.key === " " || (tp.includes($.key) && x(), $.key === " " && $.preventDefault());
    })
  }))));
}), en = "SelectItemText", Ep = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, className: o, style: r, ...s } = e, a = ft(en, n), c = En(en, n), i = ha(en, n), l = sp(en, n), [u, f] = F(null), h = Q(
    t,
    ($) => f($),
    i.onItemTextChange,
    ($) => {
      var m;
      return (m = c.itemTextRefCallback) === null || m === void 0 ? void 0 : m.call(c, $, i.value, i.disabled);
    }
  ), b = u == null ? void 0 : u.textContent, v = et(
    () => /* @__PURE__ */ w("option", {
      key: i.value,
      value: i.value,
      disabled: i.disabled
    }, b),
    [
      i.disabled,
      i.value,
      b
    ]
  ), { onNativeOptionAdd: p, onNativeOptionRemove: x } = l;
  return Pe(() => (p(v), () => x(v)), [
    p,
    x,
    v
  ]), /* @__PURE__ */ w(st, null, /* @__PURE__ */ w(B.span, P({
    id: i.textId
  }, s, {
    ref: h
  })), i.isSelected && a.valueNode && !a.valueNodeHasChildren ? /* @__PURE__ */ uo(s.children, a.valueNode) : null);
}), Pp = "SelectItemIndicator", Tp = /* @__PURE__ */ N((e, t) => {
  const { __scopeSelect: n, ...o } = e;
  return ha(Pp, n).isSelected ? /* @__PURE__ */ w(B.span, P({
    "aria-hidden": !0
  }, o, {
    ref: t
  })) : null;
});
function va(e) {
  return e === "" || e === void 0;
}
const ma = /* @__PURE__ */ N((e, t) => {
  const { value: n, ...o } = e, r = j(null), s = Q(t, r), a = ca(n);
  return W(() => {
    const c = r.current, i = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(i, "value").set;
    if (a !== n && u) {
      const f = new Event("change", {
        bubbles: !0
      });
      u.call(c, n), c.dispatchEvent(f);
    }
  }, [
    a,
    n
  ]), /* @__PURE__ */ w(wn, {
    asChild: !0
  }, /* @__PURE__ */ w("select", P({}, o, {
    ref: s,
    defaultValue: n
  })));
});
ma.displayName = "BubbleSelect";
function ga(e) {
  const t = be(e), n = j(""), o = j(0), r = q((a) => {
    const c = n.current + a;
    t(c), function i(l) {
      n.current = l, window.clearTimeout(o.current), l !== "" && (o.current = window.setTimeout(
        () => i(""),
        1e3
      ));
    }(c);
  }, [
    t
  ]), s = q(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return W(() => () => window.clearTimeout(o.current), []), [
    n,
    r,
    s
  ];
}
function xa(e, t, n) {
  const r = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = Sp(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter(
    (l) => l !== n
  ));
  const i = a.find(
    (l) => l.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return i !== n ? i : void 0;
}
function Sp(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
const _p = ap, Rp = ip, Ap = dp, Np = up, Op = fp, Ip = pp, kp = gp, jp = wp, Dp = Cp, Mp = Ep, Lp = Tp;
function Fp(e, t) {
  return Mr((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const $a = "ScrollArea", [wa, bv] = Te($a), [Vp, Ve] = wa($a), Wp = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, type: o = "hover", dir: r, scrollHideDelay: s = 600, ...a } = e, [c, i] = F(null), [l, u] = F(null), [f, h] = F(null), [b, v] = F(null), [p, x] = F(null), [$, m] = F(0), [y, C] = F(0), [E, R] = F(!1), [S, O] = F(!1), D = Q(
    t,
    (G) => i(G)
  ), z = Et(r);
  return /* @__PURE__ */ w(Vp, {
    scope: n,
    type: o,
    dir: z,
    scrollHideDelay: s,
    scrollArea: c,
    viewport: l,
    onViewportChange: u,
    content: f,
    onContentChange: h,
    scrollbarX: b,
    onScrollbarXChange: v,
    scrollbarXEnabled: E,
    onScrollbarXEnabledChange: R,
    scrollbarY: p,
    onScrollbarYChange: x,
    scrollbarYEnabled: S,
    onScrollbarYEnabledChange: O,
    onCornerWidthChange: m,
    onCornerHeightChange: C
  }, /* @__PURE__ */ w(B.div, P({
    dir: z
  }, a, {
    ref: D,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": $ + "px",
      "--radix-scroll-area-corner-height": y + "px",
      ...e.style
    }
  })));
}), zp = "ScrollAreaViewport", Bp = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, children: o, ...r } = e, s = Ve(zp, n), a = j(null), c = Q(t, a, s.onViewportChange);
  return /* @__PURE__ */ w(st, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(B.div, P({
    "data-radix-scroll-area-viewport": ""
  }, r, {
    ref: c,
    style: {
      /**
      * We don't support `visible` because the intention is to have at least one scrollbar
      * if this component is used and `visible` will behave like `auto` in that case
      * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
      *
      * We don't handle `auto` because the intention is for the native implementation
      * to be hidden if using this component. We just want to ensure the node is scrollable
      * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
      * the browser from having to work out whether to render native scrollbars or not,
      * we tell it to with the intention of hiding them in CSS.
      */
      overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ w("div", {
    ref: s.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, o)));
}), Ye = "ScrollAreaScrollbar", Hp = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...o } = e, r = Ve(Ye, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: a } = r, c = e.orientation === "horizontal";
  return W(() => (c ? s(!0) : a(!0), () => {
    c ? s(!1) : a(!1);
  }), [
    c,
    s,
    a
  ]), r.type === "hover" ? /* @__PURE__ */ w(Up, P({}, o, {
    ref: t,
    forceMount: n
  })) : r.type === "scroll" ? /* @__PURE__ */ w(Xp, P({}, o, {
    ref: t,
    forceMount: n
  })) : r.type === "auto" ? /* @__PURE__ */ w(ya, P({}, o, {
    ref: t,
    forceMount: n
  })) : r.type === "always" ? /* @__PURE__ */ w(Mo, P({}, o, {
    ref: t
  })) : null;
}), Up = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...o } = e, r = Ve(Ye, e.__scopeScrollArea), [s, a] = F(!1);
  return W(() => {
    const c = r.scrollArea;
    let i = 0;
    if (c) {
      const l = () => {
        window.clearTimeout(i), a(!0);
      }, u = () => {
        i = window.setTimeout(
          () => a(!1),
          r.scrollHideDelay
        );
      };
      return c.addEventListener("pointerenter", l), c.addEventListener("pointerleave", u), () => {
        window.clearTimeout(i), c.removeEventListener("pointerenter", l), c.removeEventListener("pointerleave", u);
      };
    }
  }, [
    r.scrollArea,
    r.scrollHideDelay
  ]), /* @__PURE__ */ w(xe, {
    present: n || s
  }, /* @__PURE__ */ w(ya, P({
    "data-state": s ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), Xp = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...o } = e, r = Ve(Ye, e.__scopeScrollArea), s = e.orientation === "horizontal", a = Tn(
    () => i("SCROLL_END"),
    100
  ), [c, i] = Fp("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return W(() => {
    if (c === "idle") {
      const l = window.setTimeout(
        () => i("HIDE"),
        r.scrollHideDelay
      );
      return () => window.clearTimeout(l);
    }
  }, [
    c,
    r.scrollHideDelay,
    i
  ]), W(() => {
    const l = r.viewport, u = s ? "scrollLeft" : "scrollTop";
    if (l) {
      let f = l[u];
      const h = () => {
        const b = l[u];
        f !== b && (i("SCROLL"), a()), f = b;
      };
      return l.addEventListener("scroll", h), () => l.removeEventListener("scroll", h);
    }
  }, [
    r.viewport,
    s,
    i,
    a
  ]), /* @__PURE__ */ w(xe, {
    present: n || c !== "hidden"
  }, /* @__PURE__ */ w(Mo, P({
    "data-state": c === "hidden" ? "hidden" : "visible"
  }, o, {
    ref: t,
    onPointerEnter: L(
      e.onPointerEnter,
      () => i("POINTER_ENTER")
    ),
    onPointerLeave: L(
      e.onPointerLeave,
      () => i("POINTER_LEAVE")
    )
  })));
}), ya = /* @__PURE__ */ N((e, t) => {
  const n = Ve(Ye, e.__scopeScrollArea), { forceMount: o, ...r } = e, [s, a] = F(!1), c = e.orientation === "horizontal", i = Tn(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      a(c ? l : u);
    }
  }, 10);
  return fn(n.viewport, i), fn(n.content, i), /* @__PURE__ */ w(xe, {
    present: o || s
  }, /* @__PURE__ */ w(Mo, P({
    "data-state": s ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), Mo = /* @__PURE__ */ N((e, t) => {
  const { orientation: n = "vertical", ...o } = e, r = Ve(Ye, e.__scopeScrollArea), s = j(null), a = j(0), [c, i] = F({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = Pa(c.viewport, c.content), u = {
    ...o,
    sizes: c,
    onSizesChange: i,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (h) => s.current = h,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (h) => a.current = h
  };
  function f(h, b) {
    return Jp(h, a.current, c, b);
  }
  return n === "horizontal" ? /* @__PURE__ */ w(Gp, P({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (r.viewport && s.current) {
        const h = r.viewport.scrollLeft, b = Ar(h, c, r.dir);
        s.current.style.transform = `translate3d(${b}px, 0, 0)`;
      }
    },
    onWheelScroll: (h) => {
      r.viewport && (r.viewport.scrollLeft = h);
    },
    onDragScroll: (h) => {
      r.viewport && (r.viewport.scrollLeft = f(h, r.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ w(Kp, P({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (r.viewport && s.current) {
        const h = r.viewport.scrollTop, b = Ar(h, c);
        s.current.style.transform = `translate3d(0, ${b}px, 0)`;
      }
    },
    onWheelScroll: (h) => {
      r.viewport && (r.viewport.scrollTop = h);
    },
    onDragScroll: (h) => {
      r.viewport && (r.viewport.scrollTop = f(h));
    }
  })) : null;
}), Gp = /* @__PURE__ */ N((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, s = Ve(Ye, e.__scopeScrollArea), [a, c] = F(), i = j(null), l = Q(t, i, s.onScrollbarXChange);
  return W(() => {
    i.current && c(getComputedStyle(i.current));
  }, [
    i
  ]), /* @__PURE__ */ w(Ea, P({
    "data-orientation": "horizontal"
  }, r, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": Pn(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, f) => {
      if (s.viewport) {
        const h = s.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(h), Sa(h, f) && u.preventDefault();
      }
    },
    onResize: () => {
      i.current && s.viewport && a && o({
        content: s.viewport.scrollWidth,
        viewport: s.viewport.offsetWidth,
        scrollbar: {
          size: i.current.clientWidth,
          paddingStart: un(a.paddingLeft),
          paddingEnd: un(a.paddingRight)
        }
      });
    }
  }));
}), Kp = /* @__PURE__ */ N((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, s = Ve(Ye, e.__scopeScrollArea), [a, c] = F(), i = j(null), l = Q(t, i, s.onScrollbarYChange);
  return W(() => {
    i.current && c(getComputedStyle(i.current));
  }, [
    i
  ]), /* @__PURE__ */ w(Ea, P({
    "data-orientation": "vertical"
  }, r, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: s.dir === "ltr" ? 0 : void 0,
      left: s.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": Pn(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, f) => {
      if (s.viewport) {
        const h = s.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(h), Sa(h, f) && u.preventDefault();
      }
    },
    onResize: () => {
      i.current && s.viewport && a && o({
        content: s.viewport.scrollHeight,
        viewport: s.viewport.offsetHeight,
        scrollbar: {
          size: i.current.clientHeight,
          paddingStart: un(a.paddingTop),
          paddingEnd: un(a.paddingBottom)
        }
      });
    }
  }));
}), [Yp, Ca] = wa(Ye), Ea = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, sizes: o, hasThumb: r, onThumbChange: s, onThumbPointerUp: a, onThumbPointerDown: c, onThumbPositionChange: i, onDragScroll: l, onWheelScroll: u, onResize: f, ...h } = e, b = Ve(Ye, n), [v, p] = F(null), x = Q(
    t,
    (D) => p(D)
  ), $ = j(null), m = j(""), y = b.viewport, C = o.content - o.viewport, E = be(u), R = be(i), S = Tn(f, 10);
  function O(D) {
    if ($.current) {
      const z = D.clientX - $.current.left, G = D.clientY - $.current.top;
      l({
        x: z,
        y: G
      });
    }
  }
  return W(() => {
    const D = (z) => {
      const G = z.target;
      (v == null ? void 0 : v.contains(G)) && E(z, C);
    };
    return document.addEventListener("wheel", D, {
      passive: !1
    }), () => document.removeEventListener("wheel", D, {
      passive: !1
    });
  }, [
    y,
    v,
    C,
    E
  ]), W(R, [
    o,
    R
  ]), fn(v, S), fn(b.content, S), /* @__PURE__ */ w(Yp, {
    scope: n,
    scrollbar: v,
    hasThumb: r,
    onThumbChange: be(s),
    onThumbPointerUp: be(a),
    onThumbPositionChange: R,
    onThumbPointerDown: be(c)
  }, /* @__PURE__ */ w(B.div, P({}, h, {
    ref: x,
    style: {
      position: "absolute",
      ...h.style
    },
    onPointerDown: L(e.onPointerDown, (D) => {
      D.button === 0 && (D.target.setPointerCapture(D.pointerId), $.current = v.getBoundingClientRect(), m.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", b.viewport && (b.viewport.style.scrollBehavior = "auto"), O(D));
    }),
    onPointerMove: L(e.onPointerMove, O),
    onPointerUp: L(e.onPointerUp, (D) => {
      const z = D.target;
      z.hasPointerCapture(D.pointerId) && z.releasePointerCapture(D.pointerId), document.body.style.webkitUserSelect = m.current, b.viewport && (b.viewport.style.scrollBehavior = ""), $.current = null;
    })
  })));
}), so = "ScrollAreaThumb", qp = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, ...o } = e, r = Ca(so, e.__scopeScrollArea);
  return /* @__PURE__ */ w(xe, {
    present: n || r.hasThumb
  }, /* @__PURE__ */ w(Zp, P({
    ref: t
  }, o)));
}), Zp = /* @__PURE__ */ N((e, t) => {
  const { __scopeScrollArea: n, style: o, ...r } = e, s = Ve(so, n), a = Ca(so, n), { onThumbPositionChange: c } = a, i = Q(
    t,
    (f) => a.onThumbChange(f)
  ), l = j(), u = Tn(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return W(() => {
    const f = s.viewport;
    if (f) {
      const h = () => {
        if (u(), !l.current) {
          const b = Qp(f, c);
          l.current = b, c();
        }
      };
      return c(), f.addEventListener("scroll", h), () => f.removeEventListener("scroll", h);
    }
  }, [
    s.viewport,
    u,
    c
  ]), /* @__PURE__ */ w(B.div, P({
    "data-state": a.hasThumb ? "visible" : "hidden"
  }, r, {
    ref: i,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...o
    },
    onPointerDownCapture: L(e.onPointerDownCapture, (f) => {
      const b = f.target.getBoundingClientRect(), v = f.clientX - b.left, p = f.clientY - b.top;
      a.onThumbPointerDown({
        x: v,
        y: p
      });
    }),
    onPointerUp: L(e.onPointerUp, a.onThumbPointerUp)
  }));
});
function un(e) {
  return e ? parseInt(e, 10) : 0;
}
function Pa(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Pn(e) {
  const t = Pa(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = (e.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function Jp(e, t, n, o = "ltr") {
  const r = Pn(n), s = r / 2, a = t || s, c = r - a, i = n.scrollbar.paddingStart + a, l = n.scrollbar.size - n.scrollbar.paddingEnd - c, u = n.content - n.viewport, f = o === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return Ta([
    i,
    l
  ], f)(e);
}
function Ar(e, t, n = "ltr") {
  const o = Pn(t), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - r, a = t.content - t.viewport, c = s - o, i = n === "ltr" ? [
    0,
    a
  ] : [
    a * -1,
    0
  ], l = oo(e, i);
  return Ta([
    0,
    a
  ], [
    0,
    c
  ])(l);
}
function Ta(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function Sa(e, t) {
  return e > 0 && e < t;
}
const Qp = (e, t = () => {
}) => {
  let n = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, o = 0;
  return function r() {
    const s = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, a = n.left !== s.left, c = n.top !== s.top;
    (a || c) && t(), n = s, o = window.requestAnimationFrame(r);
  }(), () => window.cancelAnimationFrame(o);
};
function Tn(e, t) {
  const n = be(e), o = j(0);
  return W(
    () => () => window.clearTimeout(o.current),
    []
  ), q(() => {
    window.clearTimeout(o.current), o.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function fn(e, t) {
  const n = be(t);
  Pe(() => {
    let o = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        cancelAnimationFrame(o), o = window.requestAnimationFrame(n);
      });
      return r.observe(e), () => {
        window.cancelAnimationFrame(o), r.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
const eb = Wp, tb = Bp, nb = Hp, ob = qp;
function rb({
  title: e,
  titleId: t,
  ...n
}, o) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: o,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ _.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ _.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const sb = _.forwardRef(rb), ab = sb;
function cb({
  title: e,
  titleId: t,
  ...n
}, o) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: o,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ _.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ _.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));
}
const ib = _.forwardRef(cb), lb = ib, Nr = ue("SelectMenu", {
  variants: {
    size: {
      regular: "",
      large: "selectmenu-large"
    },
    widthMenu: {
      inline: "w-min",
      full: "w-full"
    },
    label: {
      default: "",
      inline: "",
      hide: ""
    },
    withIcon: {
      true: "selectmenu-icon"
    }
  }
}), db = ({
  size: e,
  label: t,
  labelText: n,
  placeholder: o,
  widthMenu: r,
  SelectIcon: s,
  children: a,
  ...c
}) => {
  const i = t === "hide", l = t === "default", u = t === "inline";
  return /* @__PURE__ */ d.jsx(
    _p,
    {
      ...c,
      onOpenChange: () => setTimeout(() => {
        document.body.style.pointerEvents = "auto";
      }, 1e3),
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          className: te(
            "selectmenu-container",
            Nr({ widthMenu: r })
          ),
          children: /* @__PURE__ */ d.jsxs("div", { className: "relative space-y-0.5 ", children: [
            !i && l && /* @__PURE__ */ d.jsx("span", { children: /* @__PURE__ */ d.jsx("label", { className: "selectmenu-label", children: n }) }),
            /* @__PURE__ */ d.jsxs(
              Rp,
              {
                className: te(
                  " selectmenu-trigger z-50",
                  Nr({ size: e })
                ),
                children: [
                  /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
                    s && s,
                    u && /* @__PURE__ */ d.jsx("span", { className: "inline-label", children: n }),
                    /* @__PURE__ */ d.jsx(
                      Ap,
                      {
                        placeholder: o,
                        className: " !text-neutral-200 "
                      }
                    )
                  ] }),
                  /* @__PURE__ */ d.jsx(Np, { className: "w-4 h-4 ml-4 text-neutral-500 ", children: /* @__PURE__ */ d.jsx(lb, {}) })
                ]
              }
            ),
            /* @__PURE__ */ d.jsx(Op, { children: /* @__PURE__ */ d.jsx(
              Ip,
              {
                onCloseAutoFocus: (f) => f.preventDefault(),
                avoidCollisions: !1,
                side: "bottom",
                position: "popper",
                align: "start",
                className: "selectmenu-content z-50",
                children: /* @__PURE__ */ d.jsxs(eb, { className: "h-full w-full", type: "auto", children: [
                  /* @__PURE__ */ d.jsx(kp, { asChild: !0, children: /* @__PURE__ */ d.jsx(
                    tb,
                    {
                      className: "h-full w-full",
                      style: { overflowY: void 0 },
                      asChild: !0,
                      children: /* @__PURE__ */ d.jsx(jp, { children: a })
                    }
                  ) }),
                  /* @__PURE__ */ d.jsx(
                    nb,
                    {
                      className: " w-1 p-1 ",
                      orientation: "vertical",
                      children: /* @__PURE__ */ d.jsx(ob, { className: "bg-neutral-50 rounded" })
                    }
                  )
                ] })
              }
            ) })
          ] })
        }
      )
    }
  );
};
db.displayName = "SelectMenu";
const hv = ({
  children: e,
  showIndication: t,
  ...n
}) => /* @__PURE__ */ d.jsxs(Dp, { className: "selectmenu-item pr-1", ...n, children: [
  /* @__PURE__ */ d.jsx(Mp, { children: e }),
  t && /* @__PURE__ */ d.jsx(Lp, { className: "selectmenu-indicator", children: /* @__PURE__ */ d.jsx(ab, { className: "w-4 h-4" }) })
] }), ub = /* @__PURE__ */ N((e, t) => {
  const { pressed: n, defaultPressed: o = !1, onPressedChange: r, ...s } = e, [a = !1, c] = Ne({
    prop: n,
    onChange: r,
    defaultProp: o
  });
  return /* @__PURE__ */ w(B.button, P({
    type: "button",
    "aria-pressed": a,
    "data-state": a ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, s, {
    ref: t,
    onClick: L(e.onClick, () => {
      e.disabled || c(!a);
    })
  }));
}), fb = ub, pb = ue(" ", {
  variants: {
    variant: {
      default: "selector"
    },
    size: {
      default: "",
      small: "selector-small",
      large: "selector-large"
    },
    action: {
      true: "selector-action"
    },
    quantity: {
      true: ""
    },
    quantityWithAction: {
      true: "selector-action"
    },
    disabled: {
      true: "selector-disabled"
    },
    selected: { true: "selector-selected" }
    // quantity: {
    //   true: '',
    // },
    // quantityWithAction: {
    //   true: '',
    // },
  }
}), bb = V.forwardRef(
  ({
    className: e,
    children: t,
    size: n,
    variant: o,
    action: r,
    disabled: s = !1,
    quantity: a,
    quantityWithAction: c,
    quantityValue: i,
    selectorValue: l,
    onActionClick: u,
    onActionIconClick: f,
    asChild: h = !1,
    ...b
  }, v) => {
    const [p, x] = V.useState(!1), [$, m] = V.useState(!1);
    W(() => {
      l != null && m(l);
    }, [l]);
    const y = h ? He : "button", C = (R) => {
      s || (R.stopPropagation(), m(!$), u && u($));
    }, E = () => {
      s || f();
    };
    return /* @__PURE__ */ d.jsxs(
      y,
      {
        className: te(
          $ && "selector-selected",
          pb({
            size: n,
            variant: o,
            action: r,
            disabled: s,
            quantity: a,
            quantityWithAction: c,
            className: e
          })
        ),
        ref: v,
        children: [
          /* @__PURE__ */ d.jsx("span", { onClick: C, children: /* @__PURE__ */ d.jsxs(
            fb,
            {
              pressed: $,
              disabled: s,
              onPressedChange: m,
              ...b,
              children: [
                /* @__PURE__ */ d.jsx("div", { children: t }),
                a && !c && /* @__PURE__ */ d.jsx("span", { className: "quantity", children: i && i > 99 ? "99+" : i })
              ]
            }
          ) }),
          r && ($ || !c) && /* @__PURE__ */ d.jsx("span", { onClick: f, className: "action", children: /* @__PURE__ */ d.jsx(Dt, {}) }),
          c && !$ && /* @__PURE__ */ d.jsx(
            "span",
            {
              className: "action",
              onMouseEnter: () => x(!0),
              onMouseLeave: () => x(!1),
              onClick: E,
              children: p ? /* @__PURE__ */ d.jsx(Dt, {}) : c && i && i > 99 ? "99+" : i
            }
          ),
          $ && c && /* @__PURE__ */ d.jsx("span", { onClick: E, className: "action", children: /* @__PURE__ */ d.jsx(Dt, {}) })
        ]
      }
    );
  }
);
bb.displayName = "Selector";
const vv = () => /* @__PURE__ */ d.jsxs("div", { children: [
  /* @__PURE__ */ d.jsx("div", { className: "c-spacex-0", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-spacex-small", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-spacex-regular", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-spacex-large", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-spacex-xlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-spacex-xxlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-spacey-0", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-spacey-small", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-spacey-regular", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-spacey-large", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-spacey-xlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-spacey-xxlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-p-0", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-p-small", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-p-regular", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-p-large", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-p-xlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-p-xxlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-py-0", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-py-small", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-py-regular", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-py-large", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-py-xlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-py-xxlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-px-0", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-px-small", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-px-regular", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-px-large", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-px-xlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-px-xxlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gap-0", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gap-small", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gap-regular", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gap-large", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gap-xlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gap-xxlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gapx-0", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gapx-small", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gapx-regular", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gapx-large", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gapx-xlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gapx-xxlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gapy-0", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gapy-small", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gapy-regular", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gapy-large", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gapy-xlarge", children: "spaceX 0" }),
  /* @__PURE__ */ d.jsx("div", { className: "c-gapy-xxlarge", children: "spaceX 0" })
] }), _a = "Tabs", [hb, mv] = Te(_a, [
  $n
]), Ra = $n(), [vb, Lo] = hb(_a), mb = /* @__PURE__ */ N((e, t) => {
  const { __scopeTabs: n, value: o, onValueChange: r, defaultValue: s, orientation: a = "horizontal", dir: c, activationMode: i = "automatic", ...l } = e, u = Et(c), [f, h] = Ne({
    prop: o,
    onChange: r,
    defaultProp: s
  });
  return /* @__PURE__ */ w(vb, {
    scope: n,
    baseId: Ie(),
    value: f,
    onValueChange: h,
    orientation: a,
    dir: u,
    activationMode: i
  }, /* @__PURE__ */ w(B.div, P({
    dir: u,
    "data-orientation": a
  }, l, {
    ref: t
  })));
}), gb = "TabsList", xb = /* @__PURE__ */ N((e, t) => {
  const { __scopeTabs: n, loop: o = !0, ...r } = e, s = Lo(gb, n), a = Ra(n);
  return /* @__PURE__ */ w(sa, P({
    asChild: !0
  }, a, {
    orientation: s.orientation,
    dir: s.dir,
    loop: o
  }), /* @__PURE__ */ w(B.div, P({
    role: "tablist",
    "aria-orientation": s.orientation
  }, r, {
    ref: t
  })));
}), $b = "TabsTrigger", wb = /* @__PURE__ */ N((e, t) => {
  const { __scopeTabs: n, value: o, disabled: r = !1, ...s } = e, a = Lo($b, n), c = Ra(n), i = Aa(a.baseId, o), l = Na(a.baseId, o), u = o === a.value;
  return /* @__PURE__ */ w(aa, P({
    asChild: !0
  }, c, {
    focusable: !r,
    active: u
  }), /* @__PURE__ */ w(B.button, P({
    type: "button",
    role: "tab",
    "aria-selected": u,
    "aria-controls": l,
    "data-state": u ? "active" : "inactive",
    "data-disabled": r ? "" : void 0,
    disabled: r,
    id: i
  }, s, {
    ref: t,
    onMouseDown: L(e.onMouseDown, (f) => {
      !r && f.button === 0 && f.ctrlKey === !1 ? a.onValueChange(o) : f.preventDefault();
    }),
    onKeyDown: L(e.onKeyDown, (f) => {
      [
        " ",
        "Enter"
      ].includes(f.key) && a.onValueChange(o);
    }),
    onFocus: L(e.onFocus, () => {
      const f = a.activationMode !== "manual";
      !u && !r && f && a.onValueChange(o);
    })
  })));
}), yb = "TabsContent", Cb = /* @__PURE__ */ N((e, t) => {
  const { __scopeTabs: n, value: o, forceMount: r, children: s, ...a } = e, c = Lo(yb, n), i = Aa(c.baseId, o), l = Na(c.baseId, o), u = o === c.value, f = j(u);
  return W(() => {
    const h = requestAnimationFrame(
      () => f.current = !1
    );
    return () => cancelAnimationFrame(h);
  }, []), /* @__PURE__ */ w(
    xe,
    {
      present: r || u
    },
    ({ present: h }) => /* @__PURE__ */ w(B.div, P({
      "data-state": u ? "active" : "inactive",
      "data-orientation": c.orientation,
      role: "tabpanel",
      "aria-labelledby": i,
      hidden: !h,
      id: l,
      tabIndex: 0
    }, a, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: f.current ? "0s" : void 0
      }
    }), h && s)
  );
});
function Aa(e, t) {
  return `${e}-trigger-${t}`;
}
function Na(e, t) {
  return `${e}-content-${t}`;
}
const Eb = mb, Pb = xb, Tb = wb, Sb = Cb, _b = ue("Tabs", {
  // Remove unwanted stuff and add missing stuff here
  variants: {
    variant: {
      horizontal: "tabs-horizontal",
      vertical: "tabs-vertical"
    },
    tabStyle: {
      lined: "tabs-lined",
      contained: "tabs-contained"
    },
    width: {
      inline: "tabs-inline",
      full: "tabs-full-width"
    },
    size: {
      regular: "tabs-regular",
      large: "tabs-large"
    }
  },
  defaultVariants: {
    variant: "horizontal",
    tabStyle: "lined",
    width: "inline",
    size: "regular"
  }
}), Rb = _.forwardRef(
  ({ defaultTabID: e, children: t, onValueChange: n, tabValue: o }) => {
    const [r, s] = _.useState(o), a = (c) => {
      o && s(c), n && n(c);
    };
    return _.useEffect(() => {
      o && s(o);
    }, [o]), /* @__PURE__ */ d.jsx(
      Eb,
      {
        defaultValue: e,
        value: r,
        onValueChange: a,
        children: t
      }
    );
  }
), Ab = _.forwardRef(
  ({ tabId: e, children: t }) => /* @__PURE__ */ d.jsx(Sb, { value: e || "1", children: t })
), Nb = ({
  className: e,
  tabs: t,
  variant: n,
  tabStyle: o,
  width: r,
  size: s
}) => /* @__PURE__ */ d.jsx(
  Pb,
  {
    className: `tabs ${te(
      _b({ variant: n, tabStyle: o, width: r, size: s }),
      e
    )}`,
    children: t ? t.map((a) => /* @__PURE__ */ d.jsx(
      Tb,
      {
        className: "tab-item data-[state=active]:selected whitespace-nowrap min-w-[80px]",
        value: a.id,
        children: /* @__PURE__ */ d.jsx("a", { children: a.title })
      },
      a.id
    )) : null
  }
);
Rb.displayName = "Tabs";
Ab.displayName = "TabsContent";
Nb.displayName = "TabsList";
const Oa = "ToastProvider", [Fo, Ob, Ib] = pn("Toast"), [Ia, gv] = Te("Toast", [
  Ib
]), [kb, Sn] = Ia(Oa), ka = (e) => {
  const { __scopeToast: t, label: n = "Notification", duration: o = 5e3, swipeDirection: r = "right", swipeThreshold: s = 50, children: a } = e, [c, i] = F(null), [l, u] = F(0), f = j(!1), h = j(!1);
  return /* @__PURE__ */ w(Fo.Provider, {
    scope: t
  }, /* @__PURE__ */ w(kb, {
    scope: t,
    label: n,
    duration: o,
    swipeDirection: r,
    swipeThreshold: s,
    toastCount: l,
    viewport: c,
    onViewportChange: i,
    onToastAdd: q(
      () => u(
        (b) => b + 1
      ),
      []
    ),
    onToastRemove: q(
      () => u(
        (b) => b - 1
      ),
      []
    ),
    isFocusedToastEscapeKeyDownRef: f,
    isClosePausedRef: h
  }, a));
};
ka.propTypes = {
  label(e) {
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const t = `Invalid prop \`label\` supplied to \`${Oa}\`. Expected non-empty \`string\`.`;
      return new Error(t);
    }
    return null;
  }
};
const jb = "ToastViewport", Db = [
  "F8"
], ao = "toast.viewportPause", co = "toast.viewportResume", Mb = /* @__PURE__ */ N((e, t) => {
  const { __scopeToast: n, hotkey: o = Db, label: r = "Notifications ({hotkey})", ...s } = e, a = Sn(jb, n), c = Ob(n), i = j(null), l = j(null), u = j(null), f = j(null), h = Q(t, f, a.onViewportChange), b = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = a.toastCount > 0;
  W(() => {
    const x = ($) => {
      var m;
      o.every(
        (C) => $[C] || $.code === C
      ) && ((m = f.current) === null || m === void 0 || m.focus());
    };
    return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [
    o
  ]), W(() => {
    const x = i.current, $ = f.current;
    if (v && x && $) {
      const m = () => {
        if (!a.isClosePausedRef.current) {
          const R = new CustomEvent(ao);
          $.dispatchEvent(R), a.isClosePausedRef.current = !0;
        }
      }, y = () => {
        if (a.isClosePausedRef.current) {
          const R = new CustomEvent(co);
          $.dispatchEvent(R), a.isClosePausedRef.current = !1;
        }
      }, C = (R) => {
        !x.contains(R.relatedTarget) && y();
      }, E = () => {
        x.contains(document.activeElement) || y();
      };
      return x.addEventListener("focusin", m), x.addEventListener("focusout", C), x.addEventListener("pointermove", m), x.addEventListener("pointerleave", E), window.addEventListener("blur", m), window.addEventListener("focus", y), () => {
        x.removeEventListener("focusin", m), x.removeEventListener("focusout", C), x.removeEventListener("pointermove", m), x.removeEventListener("pointerleave", E), window.removeEventListener("blur", m), window.removeEventListener("focus", y);
      };
    }
  }, [
    v,
    a.isClosePausedRef
  ]);
  const p = q(({ tabbingDirection: x }) => {
    const m = c().map((y) => {
      const C = y.ref.current, E = [
        C,
        ...Jb(C)
      ];
      return x === "forwards" ? E : E.reverse();
    });
    return (x === "forwards" ? m.reverse() : m).flat();
  }, [
    c
  ]);
  return W(() => {
    const x = f.current;
    if (x) {
      const $ = (m) => {
        const y = m.altKey || m.ctrlKey || m.metaKey;
        if (m.key === "Tab" && !y) {
          const O = document.activeElement, D = m.shiftKey;
          if (m.target === x && D) {
            var E;
            (E = l.current) === null || E === void 0 || E.focus();
            return;
          }
          const k = p({
            tabbingDirection: D ? "backwards" : "forwards"
          }), Z = k.findIndex(
            (A) => A === O
          );
          if (Un(k.slice(Z + 1)))
            m.preventDefault();
          else {
            var R, S;
            D ? (R = l.current) === null || R === void 0 || R.focus() : (S = u.current) === null || S === void 0 || S.focus();
          }
        }
      };
      return x.addEventListener("keydown", $), () => x.removeEventListener("keydown", $);
    }
  }, [
    c,
    p
  ]), /* @__PURE__ */ w(Il, {
    ref: i,
    role: "region",
    "aria-label": r.replace("{hotkey}", b),
    tabIndex: -1,
    style: {
      pointerEvents: v ? void 0 : "none"
    }
  }, v && /* @__PURE__ */ w(Or, {
    ref: l,
    onFocusFromOutsideViewport: () => {
      const x = p({
        tabbingDirection: "forwards"
      });
      Un(x);
    }
  }), /* @__PURE__ */ w(Fo.Slot, {
    scope: n
  }, /* @__PURE__ */ w(B.ol, P({
    tabIndex: -1
  }, s, {
    ref: h
  }))), v && /* @__PURE__ */ w(Or, {
    ref: u,
    onFocusFromOutsideViewport: () => {
      const x = p({
        tabbingDirection: "backwards"
      });
      Un(x);
    }
  }));
}), Lb = "ToastFocusProxy", Or = /* @__PURE__ */ N((e, t) => {
  const { __scopeToast: n, onFocusFromOutsideViewport: o, ...r } = e, s = Sn(Lb, n);
  return /* @__PURE__ */ w(wn, P({
    "aria-hidden": !0,
    tabIndex: 0
  }, r, {
    ref: t,
    style: {
      position: "fixed"
    },
    onFocus: (a) => {
      var c;
      const i = a.relatedTarget;
      !((c = s.viewport) !== null && c !== void 0 && c.contains(i)) && o();
    }
  }));
}), _n = "Toast", Fb = "toast.swipeStart", Vb = "toast.swipeMove", Wb = "toast.swipeCancel", zb = "toast.swipeEnd", Bb = /* @__PURE__ */ N((e, t) => {
  const { forceMount: n, open: o, defaultOpen: r, onOpenChange: s, ...a } = e, [c = !0, i] = Ne({
    prop: o,
    defaultProp: r,
    onChange: s
  });
  return /* @__PURE__ */ w(xe, {
    present: n || c
  }, /* @__PURE__ */ w(ja, P({
    open: c
  }, a, {
    ref: t,
    onClose: () => i(!1),
    onPause: be(e.onPause),
    onResume: be(e.onResume),
    onSwipeStart: L(e.onSwipeStart, (l) => {
      l.currentTarget.setAttribute("data-swipe", "start");
    }),
    onSwipeMove: L(e.onSwipeMove, (l) => {
      const { x: u, y: f } = l.detail.delta;
      l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
    }),
    onSwipeCancel: L(e.onSwipeCancel, (l) => {
      l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
    }),
    onSwipeEnd: L(e.onSwipeEnd, (l) => {
      const { x: u, y: f } = l.detail.delta;
      l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), i(!1);
    })
  })));
}), [Hb, Ub] = Ia(_n, {
  onClose() {
  }
}), ja = /* @__PURE__ */ N((e, t) => {
  const { __scopeToast: n, type: o = "foreground", duration: r, open: s, onClose: a, onEscapeKeyDown: c, onPause: i, onResume: l, onSwipeStart: u, onSwipeMove: f, onSwipeCancel: h, onSwipeEnd: b, ...v } = e, p = Sn(_n, n), [x, $] = F(null), m = Q(
    t,
    (A) => $(A)
  ), y = j(null), C = j(null), E = r || p.duration, R = j(0), S = j(E), O = j(0), { onToastAdd: D, onToastRemove: z } = p, G = be(() => {
    var A;
    (x == null ? void 0 : x.contains(document.activeElement)) && ((A = p.viewport) === null || A === void 0 || A.focus()), a();
  }), k = q((A) => {
    !A || A === 1 / 0 || (window.clearTimeout(O.current), R.current = (/* @__PURE__ */ new Date()).getTime(), O.current = window.setTimeout(G, A));
  }, [
    G
  ]);
  W(() => {
    const A = p.viewport;
    if (A) {
      const M = () => {
        k(S.current), l == null || l();
      }, K = () => {
        const H = (/* @__PURE__ */ new Date()).getTime() - R.current;
        S.current = S.current - H, window.clearTimeout(O.current), i == null || i();
      };
      return A.addEventListener(ao, K), A.addEventListener(co, M), () => {
        A.removeEventListener(ao, K), A.removeEventListener(co, M);
      };
    }
  }, [
    p.viewport,
    E,
    i,
    l,
    k
  ]), W(() => {
    s && !p.isClosePausedRef.current && k(E);
  }, [
    s,
    E,
    p.isClosePausedRef,
    k
  ]), W(() => (D(), () => z()), [
    D,
    z
  ]);
  const Z = et(() => x ? Fa(x) : null, [
    x
  ]);
  return p.viewport ? /* @__PURE__ */ w(st, null, Z && /* @__PURE__ */ w(Xb, {
    __scopeToast: n,
    role: "status",
    "aria-live": o === "foreground" ? "assertive" : "polite",
    "aria-atomic": !0
  }, Z), /* @__PURE__ */ w(Hb, {
    scope: n,
    onClose: G
  }, /* @__PURE__ */ uo(/* @__PURE__ */ w(Fo.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ w(Ol, {
    asChild: !0,
    onEscapeKeyDown: L(c, () => {
      p.isFocusedToastEscapeKeyDownRef.current || G(), p.isFocusedToastEscapeKeyDownRef.current = !1;
    })
  }, /* @__PURE__ */ w(B.li, P({
    // Ensure toasts are announced as status list or status when focused
    role: "status",
    "aria-live": "off",
    "aria-atomic": !0,
    tabIndex: 0,
    "data-state": s ? "open" : "closed",
    "data-swipe-direction": p.swipeDirection
  }, v, {
    ref: m,
    style: {
      userSelect: "none",
      touchAction: "none",
      ...e.style
    },
    onKeyDown: L(e.onKeyDown, (A) => {
      A.key === "Escape" && (c == null || c(A.nativeEvent), A.nativeEvent.defaultPrevented || (p.isFocusedToastEscapeKeyDownRef.current = !0, G()));
    }),
    onPointerDown: L(e.onPointerDown, (A) => {
      A.button === 0 && (y.current = {
        x: A.clientX,
        y: A.clientY
      });
    }),
    onPointerMove: L(e.onPointerMove, (A) => {
      if (!y.current)
        return;
      const M = A.clientX - y.current.x, K = A.clientY - y.current.y, H = !!C.current, ie = [
        "left",
        "right"
      ].includes(p.swipeDirection), ne = [
        "left",
        "up"
      ].includes(p.swipeDirection) ? Math.min : Math.max, Se = ie ? ne(0, M) : 0, he = ie ? 0 : ne(0, K), me = A.pointerType === "touch" ? 10 : 2, Ce = {
        x: Se,
        y: he
      }, _e = {
        originalEvent: A,
        delta: Ce
      };
      H ? (C.current = Ce, tn(Vb, f, _e, {
        discrete: !1
      })) : Ir(Ce, p.swipeDirection, me) ? (C.current = Ce, tn(Fb, u, _e, {
        discrete: !1
      }), A.target.setPointerCapture(A.pointerId)) : (Math.abs(M) > me || Math.abs(K) > me) && (y.current = null);
    }),
    onPointerUp: L(e.onPointerUp, (A) => {
      const M = C.current, K = A.target;
      if (K.hasPointerCapture(A.pointerId) && K.releasePointerCapture(A.pointerId), C.current = null, y.current = null, M) {
        const H = A.currentTarget, ie = {
          originalEvent: A,
          delta: M
        };
        Ir(M, p.swipeDirection, p.swipeThreshold) ? tn(zb, b, ie, {
          discrete: !0
        }) : tn(Wb, h, ie, {
          discrete: !0
        }), H.addEventListener(
          "click",
          (ne) => ne.preventDefault(),
          {
            once: !0
          }
        );
      }
    })
  })))), p.viewport))) : null;
});
ja.propTypes = {
  type(e) {
    if (e.type && ![
      "foreground",
      "background"
    ].includes(e.type)) {
      const t = `Invalid prop \`type\` supplied to \`${_n}\`. Expected \`foreground | background\`.`;
      return new Error(t);
    }
    return null;
  }
};
const Xb = (e) => {
  const { __scopeToast: t, children: n, ...o } = e, r = Sn(_n, t), [s, a] = F(!1), [c, i] = F(!1);
  return qb(
    () => a(!0)
  ), W(() => {
    const l = window.setTimeout(
      () => i(!0),
      1e3
    );
    return () => window.clearTimeout(l);
  }, []), c ? null : /* @__PURE__ */ w(Tt, {
    asChild: !0
  }, /* @__PURE__ */ w(wn, o, s && /* @__PURE__ */ w(st, null, r.label, " ", n)));
}, Gb = /* @__PURE__ */ N((e, t) => {
  const { __scopeToast: n, ...o } = e;
  return /* @__PURE__ */ w(B.div, P({}, o, {
    ref: t
  }));
}), Kb = "ToastAction", Da = /* @__PURE__ */ N((e, t) => {
  const { altText: n, ...o } = e;
  return n ? /* @__PURE__ */ w(La, {
    altText: n,
    asChild: !0
  }, /* @__PURE__ */ w(Ma, P({}, o, {
    ref: t
  }))) : null;
});
Da.propTypes = {
  altText(e) {
    return e.altText ? null : new Error(`Missing prop \`altText\` expected on \`${Kb}\``);
  }
};
const Yb = "ToastClose", Ma = /* @__PURE__ */ N((e, t) => {
  const { __scopeToast: n, ...o } = e, r = Ub(Yb, n);
  return /* @__PURE__ */ w(La, {
    asChild: !0
  }, /* @__PURE__ */ w(B.button, P({
    type: "button"
  }, o, {
    ref: t,
    onClick: L(e.onClick, r.onClose)
  })));
}), La = /* @__PURE__ */ N((e, t) => {
  const { __scopeToast: n, altText: o, ...r } = e;
  return /* @__PURE__ */ w(B.div, P({
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": o || void 0
  }, r, {
    ref: t
  }));
});
function Fa(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), Zb(o)) {
      const r = o.ariaHidden || o.hidden || o.style.display === "none", s = o.dataset.radixToastAnnounceExclude === "";
      if (!r)
        if (s) {
          const a = o.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...Fa(o));
    }
  }), t;
}
function tn(e, t, n, { discrete: o }) {
  const r = n.originalEvent.currentTarget, s = new CustomEvent(e, {
    bubbles: !0,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? zr(r, s) : r.dispatchEvent(s);
}
const Ir = (e, t, n = 0) => {
  const o = Math.abs(e.x), r = Math.abs(e.y), s = o > r;
  return t === "left" || t === "right" ? s && o > n : !s && r > n;
};
function qb(e = () => {
}) {
  const t = be(e);
  Pe(() => {
    let n = 0, o = 0;
    return n = window.requestAnimationFrame(
      () => o = window.requestAnimationFrame(t)
    ), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(o);
    };
  }, [
    t
  ]);
}
function Zb(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Jb(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Un(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
const Qb = ka, eh = Mb, th = Bb, nh = Gb, oh = Da, rh = Ma, sh = ue("Toast", {
  // Remove unwanted stuff and add missing stuff here
  variants: {
    variant: {
      Primary: "toast-primary",
      Red: "toast-red",
      Green: "toast-green"
    },
    width: {
      Regular: "toast-regular",
      Wide: "toast-wide"
    }
  },
  defaultVariants: {
    variant: "Primary",
    width: "Wide"
  }
}), ah = _.forwardRef(
  ({
    variant: e,
    width: t,
    icon: n,
    description: o,
    action: r,
    closeAction: s,
    openTime: a = 3e3,
    toastOpen: c,
    setToastOpen: i
  }) => /* @__PURE__ */ d.jsxs(
    Qb,
    {
      duration: a || 1e8,
      swipeDirection: "right",
      children: [
        /* @__PURE__ */ d.jsxs(
          th,
          {
            className: te(
              "toast toast-enter-done ",
              sh({ variant: e, width: t })
            ),
            open: c,
            onOpenChange: i,
            children: [
              /* @__PURE__ */ d.jsx(nh, { className: "toast-copy toast-content", asChild: !0, children: /* @__PURE__ */ d.jsxs("div", { children: [
                n && /* @__PURE__ */ d.jsxs("span", { className: "toast-icon", children: [
                  " ",
                  n
                ] }),
                o
              ] }) }),
              r && /* @__PURE__ */ d.jsx(
                oh,
                {
                  className: "[grid-area:_action]",
                  asChild: !0,
                  altText: "Action",
                  children: /* @__PURE__ */ d.jsxs("div", { children: [
                    typeof r.logic == "function" && /* @__PURE__ */ d.jsx("span", { className: "toast-actions", children: /* @__PURE__ */ d.jsx(
                      "button",
                      {
                        onClick: r.logic ? r.logic : () => alert("clicked"),
                        className: "toast-action",
                        children: r.label
                      }
                    ) }),
                    typeof r.logic == "string" && /* @__PURE__ */ d.jsx("a", { href: r.logic, className: "toast-actions", children: /* @__PURE__ */ d.jsx("button", { className: "toast-action", children: r.label }) })
                  ] })
                }
              ),
              s && /* @__PURE__ */ d.jsx(rh, { children: /* @__PURE__ */ d.jsx("span", { className: "toast-close", children: /* @__PURE__ */ d.jsx("button", { className: "close-button", children: /* @__PURE__ */ d.jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ d.jsx(
                    "path",
                    {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M6 18L18 6M6 6l12 12"
                    }
                  )
                }
              ) }) }) })
            ]
          }
        ),
        /* @__PURE__ */ d.jsx(eh, { className: "[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" })
      ]
    }
  )
);
ah.displayName = "Toast";
const ch = ue("toggle-container", {
  variants: {
    size: {
      small: "small",
      regular: "regular"
    },
    state: {
      disabled: "disabled",
      enabled: "enabled"
    }
  },
  defaultVariants: {
    size: "small",
    state: "enabled"
  }
}), xv = V.forwardRef(
  ({
    size: e,
    title: t,
    accompaniedCopy: n,
    onChange: o,
    state: r,
    checked: s,
    className: a,
    addons: c = ["something"]
  }) => {
    const [i, l] = F(s);
    W(() => {
      l(s);
    }, [s]);
    const u = (f) => {
      o && o(f.target.checked), l(f.target.checked);
    };
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      (t || n) && /* @__PURE__ */ d.jsxs("div", { className: "list-title-description", children: [
        t && /* @__PURE__ */ d.jsx("h4", { className: "list-title", children: t }),
        n && /* @__PURE__ */ d.jsx("p", { children: n })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: te(ch({ size: e, state: r }), a), children: [
        /* @__PURE__ */ d.jsxs("label", { className: `toggle-wrapper ${i ? "on" : "off"}`, children: [
          /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "checkbox",
              className: "toggle-input",
              disabled: r === "disabled",
              onChange: (f) => u(f),
              checked: i
            }
          ),
          /* @__PURE__ */ d.jsx("span", { className: "toggle-slider" })
        ] }),
        c.includes("action-text") && /* @__PURE__ */ d.jsx("span", { className: "toggle-action-text", children: i ? "On" : "Off" })
      ] })
    ] });
  }
), [Rn, $v] = Te("Tooltip", [
  Rt
]), An = Rt(), ih = "TooltipProvider", lh = 700, io = "tooltip.open", [dh, Vo] = Rn(ih), uh = (e) => {
  const { __scopeTooltip: t, delayDuration: n = lh, skipDelayDuration: o = 300, disableHoverableContent: r = !1, children: s } = e, [a, c] = F(!0), i = j(!1), l = j(0);
  return W(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ w(dh, {
    scope: t,
    isOpenDelayed: a,
    delayDuration: n,
    onOpen: q(() => {
      window.clearTimeout(l.current), c(!1);
    }, []),
    onClose: q(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => c(!0),
        o
      );
    }, [
      o
    ]),
    isPointerInTransitRef: i,
    onPointerInTransitChange: q((u) => {
      i.current = u;
    }, []),
    disableHoverableContent: r
  }, s);
}, Wo = "Tooltip", [fh, Ut] = Rn(Wo), ph = (e) => {
  const { __scopeTooltip: t, children: n, open: o, defaultOpen: r = !1, onOpenChange: s, disableHoverableContent: a, delayDuration: c } = e, i = Vo(Wo, e.__scopeTooltip), l = An(t), [u, f] = F(null), h = Ie(), b = j(0), v = a ?? i.disableHoverableContent, p = c ?? i.delayDuration, x = j(!1), [$ = !1, m] = Ne({
    prop: o,
    defaultProp: r,
    onChange: (S) => {
      S ? (i.onOpen(), document.dispatchEvent(new CustomEvent(io))) : i.onClose(), s == null || s(S);
    }
  }), y = et(() => $ ? x.current ? "delayed-open" : "instant-open" : "closed", [
    $
  ]), C = q(() => {
    window.clearTimeout(b.current), x.current = !1, m(!0);
  }, [
    m
  ]), E = q(() => {
    window.clearTimeout(b.current), m(!1);
  }, [
    m
  ]), R = q(() => {
    window.clearTimeout(b.current), b.current = window.setTimeout(() => {
      x.current = !0, m(!0);
    }, p);
  }, [
    p,
    m
  ]);
  return W(() => () => window.clearTimeout(b.current), []), /* @__PURE__ */ w(No, l, /* @__PURE__ */ w(fh, {
    scope: t,
    contentId: h,
    open: $,
    stateAttribute: y,
    trigger: u,
    onTriggerChange: f,
    onTriggerEnter: q(() => {
      i.isOpenDelayed ? R() : C();
    }, [
      i.isOpenDelayed,
      R,
      C
    ]),
    onTriggerLeave: q(() => {
      v ? E() : window.clearTimeout(b.current);
    }, [
      E,
      v
    ]),
    onOpen: C,
    onClose: E,
    disableHoverableContent: v
  }, n));
}, kr = "TooltipTrigger", bh = /* @__PURE__ */ N((e, t) => {
  const { __scopeTooltip: n, ...o } = e, r = Ut(kr, n), s = Vo(kr, n), a = An(n), c = j(null), i = Q(t, c, r.onTriggerChange), l = j(!1), u = j(!1), f = q(
    () => l.current = !1,
    []
  );
  return W(() => () => document.removeEventListener("pointerup", f), [
    f
  ]), /* @__PURE__ */ w(xn, P({
    asChild: !0
  }, a), /* @__PURE__ */ w(B.button, P({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": r.open ? r.contentId : void 0,
    "data-state": r.stateAttribute
  }, o, {
    ref: i,
    onPointerMove: L(e.onPointerMove, (h) => {
      h.pointerType !== "touch" && !u.current && !s.isPointerInTransitRef.current && (r.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: L(e.onPointerLeave, () => {
      r.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: L(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", f, {
        once: !0
      });
    }),
    onFocus: L(e.onFocus, () => {
      l.current || r.onOpen();
    }),
    onBlur: L(e.onBlur, r.onClose),
    onClick: L(e.onClick, r.onClose)
  })));
}), Va = "TooltipPortal", [hh, vh] = Rn(Va, {
  forceMount: void 0
}), mh = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, s = Ut(Va, t);
  return /* @__PURE__ */ w(hh, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(xe, {
    present: n || s.open
  }, /* @__PURE__ */ w(Tt, {
    asChild: !0,
    container: r
  }, o)));
}, Wt = "TooltipContent", gh = /* @__PURE__ */ N((e, t) => {
  const n = vh(Wt, e.__scopeTooltip), { forceMount: o = n.forceMount, side: r = "top", ...s } = e, a = Ut(Wt, e.__scopeTooltip);
  return /* @__PURE__ */ w(xe, {
    present: o || a.open
  }, a.disableHoverableContent ? /* @__PURE__ */ w(Wa, P({
    side: r
  }, s, {
    ref: t
  })) : /* @__PURE__ */ w(xh, P({
    side: r
  }, s, {
    ref: t
  })));
}), xh = /* @__PURE__ */ N((e, t) => {
  const n = Ut(Wt, e.__scopeTooltip), o = Vo(Wt, e.__scopeTooltip), r = j(null), s = Q(t, r), [a, c] = F(null), { trigger: i, onClose: l } = n, u = r.current, { onPointerInTransitChange: f } = o, h = q(() => {
    c(null), f(!1);
  }, [
    f
  ]), b = q((v, p) => {
    const x = v.currentTarget, $ = {
      x: v.clientX,
      y: v.clientY
    }, m = Eh($, x.getBoundingClientRect()), y = Ph($, m), C = Th(p.getBoundingClientRect()), E = _h([
      ...y,
      ...C
    ]);
    c(E), f(!0);
  }, [
    f
  ]);
  return W(() => () => h(), [
    h
  ]), W(() => {
    if (i && u) {
      const v = (x) => b(x, u), p = (x) => b(x, i);
      return i.addEventListener("pointerleave", v), u.addEventListener("pointerleave", p), () => {
        i.removeEventListener("pointerleave", v), u.removeEventListener("pointerleave", p);
      };
    }
  }, [
    i,
    u,
    b,
    h
  ]), W(() => {
    if (a) {
      const v = (p) => {
        const x = p.target, $ = {
          x: p.clientX,
          y: p.clientY
        }, m = (i == null ? void 0 : i.contains(x)) || (u == null ? void 0 : u.contains(x)), y = !Sh($, a);
        m ? h() : y && (h(), l());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [
    i,
    u,
    a,
    l,
    h
  ]), /* @__PURE__ */ w(Wa, P({}, e, {
    ref: s
  }));
}), [$h, wh] = Rn(Wo, {
  isInside: !1
}), Wa = /* @__PURE__ */ N((e, t) => {
  const { __scopeTooltip: n, children: o, "aria-label": r, onEscapeKeyDown: s, onPointerDownOutside: a, ...c } = e, i = Ut(Wt, n), l = An(n), { onClose: u } = i;
  return W(() => (document.addEventListener(io, u), () => document.removeEventListener(io, u)), [
    u
  ]), W(() => {
    if (i.trigger) {
      const f = (h) => {
        const b = h.target;
        b != null && b.contains(i.trigger) && u();
      };
      return window.addEventListener("scroll", f, {
        capture: !0
      }), () => window.removeEventListener("scroll", f, {
        capture: !0
      });
    }
  }, [
    i.trigger,
    u
  ]), /* @__PURE__ */ w(zt, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: s,
    onPointerDownOutside: a,
    onFocusOutside: (f) => f.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ w(Oo, P({
    "data-state": i.stateAttribute
  }, l, c, {
    ref: t,
    style: {
      ...c.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ w(Wr, null, o), /* @__PURE__ */ w($h, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ w(Qf, {
    id: i.contentId,
    role: "tooltip"
  }, r || o))));
}), yh = "TooltipArrow", Ch = /* @__PURE__ */ N((e, t) => {
  const { __scopeTooltip: n, ...o } = e, r = An(n);
  return wh(yh, n).isInside ? null : /* @__PURE__ */ w(Us, P({}, r, o, {
    ref: t
  }));
});
function Eh(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, s)) {
    case s:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Ph(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      o.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      o.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      o.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break;
  }
  return o;
}
function Th(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    {
      x: r,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: o
    },
    {
      x: r,
      y: o
    }
  ];
}
function Sh(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const c = t[s].x, i = t[s].y, l = t[a].x, u = t[a].y;
    i > o != u > o && n < (l - c) * (o - i) / (u - i) + c && (r = !r);
  }
  return r;
}
function _h(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Rh(t);
}
function Rh(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], a = t[t.length - 2];
      if ((s.x - a.x) * (r.y - a.y) >= (s.y - a.y) * (r.x - a.x))
        t.pop();
      else
        break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], a = n[n.length - 2];
      if ((s.x - a.x) * (r.y - a.y) >= (s.y - a.y) * (r.x - a.x))
        n.pop();
      else
        break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const za = uh, Ba = ph, Ha = bh, Ua = mh, Xa = gh, Ga = Ch, Ka = ue("Tooltip", {
  // Remove unwanted stuff and add missing stuff here
  variants: {
    // Make it vertical when on mobile or small screen for Responsive web
    // Style prop is a system prop
    Placement: {
      top: "top",
      bottom: "bottom"
    },
    Align: {
      start: "start",
      center: "center",
      end: "end"
    },
    width: {
      Small: "tooltip-width-small",
      Regular: "tooltip-width-regular",
      Large: "tooltip-width-large"
    }
  },
  defaultVariants: {
    width: "Regular",
    Placement: "top"
  }
}), Ah = _.forwardRef(
  ({ width: e, Placement: t, children: n, open: o, label: r, link: s }) => /* @__PURE__ */ d.jsx(za, { delayDuration: 0, children: /* @__PURE__ */ d.jsxs(Ba, { open: o, children: [
    /* @__PURE__ */ d.jsx(Ha, { asChild: !0, children: n }),
    /* @__PURE__ */ d.jsx(Ua, { children: /* @__PURE__ */ d.jsxs(
      Xa,
      {
        className: te("tooltip relative", Ka({ width: e })),
        sideOffset: 5,
        side: t || "top",
        children: [
          /* @__PURE__ */ d.jsx(Ga, { className: "fill-brand-deep-dark dark:text-neutral-900 !h-1.5 !w-2.5" }),
          /* @__PURE__ */ d.jsxs("div", { className: "tooltip-content m-0 visible relative", children: [
            /* @__PURE__ */ d.jsx("span", { children: r }),
            s && /* @__PURE__ */ d.jsx("span", { className: "tooltip-link visible", children: /* @__PURE__ */ d.jsx(
              "a",
              {
                href: s.href,
                target: "_blank",
                rel: "noopener noreferrer",
                children: s.label
              }
            ) })
          ] })
        ]
      }
    ) })
  ] }) })
), wv = ({ children: e }) => /* @__PURE__ */ d.jsx(Ha, { asChild: !0, children: e }), yv = ({
  width: e,
  Placement: t,
  Align: n,
  children: o,
  ...r
}) => /* @__PURE__ */ d.jsx(Ua, { children: /* @__PURE__ */ d.jsxs(
  Xa,
  {
    className: te("tooltip relative", Ka({ width: e })),
    sideOffset: 5,
    side: t || "top",
    align: n || "start",
    ...r,
    children: [
      /* @__PURE__ */ d.jsx(Ga, { className: "fill-neutral-50 dark:text-neutral-50 !h-1.5 !w-2.5" }),
      /* @__PURE__ */ d.jsx("div", { className: "tooltip-content !shadow-none !bg-neutral-50 !w-min text-black m-0 visible relative", children: o })
    ]
  }
) }), Cv = ({
  children: e,
  open: t,
  onOpenChange: n,
  ...o
}) => /* @__PURE__ */ d.jsx(za, { delayDuration: 0, ...o, children: /* @__PURE__ */ d.jsx(Ba, { open: t, disableHoverableContent: !0, children: e }) });
Ah.displayName = "Tooltip";
function Nh({
  title: e,
  titleId: t,
  ...n
}, o) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: o,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ _.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ _.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const Oh = _.forwardRef(Nh), jr = Oh, Ya = dt(void 0);
function Ih() {
  const e = rt(Ya);
  if (!e)
    throw new Error(
      "useProductSwitcherContext must be used within a ProductSwitcherProvider"
    );
  return e;
}
function kh({
  children: e,
  onListItemClick: t,
  modal: n,
  closePopover: o
}) {
  const [r, s] = F(null), a = {
    selectedItem: r,
    setSelectedItem: s,
    onListItemClick: t,
    modal: n,
    closePopover: o
  };
  return /* @__PURE__ */ d.jsx(Ya.Provider, { value: a, children: e });
}
const Ev = ({
  children: e,
  modal: t,
  onListItemClick: n
}) => {
  const [o, r] = F(!1), s = () => r(!1);
  return /* @__PURE__ */ d.jsx(
    kh,
    {
      modal: t,
      onListItemClick: n,
      closePopover: s,
      children: /* @__PURE__ */ d.jsx(ta, { modal: t, open: o, onOpenChange: r, children: e })
    }
  );
}, Pv = ({
  children: e
}) => /* @__PURE__ */ d.jsx(mf, { asChild: !0, children: /* @__PURE__ */ d.jsx("div", { className: "inline-flex", children: e }) }), Tv = V.forwardRef(({ items: e, ...t }, n) => {
  const {
    selectedItem: o,
    setSelectedItem: r,
    onListItemClick: s,
    modal: a,
    closePopover: c
  } = Ih(), i = (l) => {
    console.log("Item clicked:", l), r(l.label), s && s(l), c();
  };
  return /* @__PURE__ */ d.jsxs(na, { ...t, ref: n, children: [
    a && /* @__PURE__ */ d.jsx(vf, {}),
    /* @__PURE__ */ d.jsx("div", { className: "bg-white shadow-xl", children: /* @__PURE__ */ d.jsx(
      ll,
      {
        labels: "rows",
        onClick: () => {
        },
        padding: "large",
        showIndicator: !0,
        showSeperator: !0,
        variant: "basic",
        children: /* @__PURE__ */ d.jsx(dl, { children: e && e.map((l) => /* @__PURE__ */ d.jsxs(
          ul,
          {
            onClick: () => i(l),
            indicatorIcon: l.accessible ? o === l.label ? /* @__PURE__ */ d.jsx(jr, { className: "w-5 h-5 text-green-400" }) : /* @__PURE__ */ d.jsx(jr, { className: "w-5 h-5 text-gray-400" }) : null,
            children: [
              /* @__PURE__ */ d.jsx(fl, { boldLabel: !0, children: l.label }),
              /* @__PURE__ */ d.jsx(pl, { children: l.value })
            ]
          },
          l.value
        )) })
      }
    ) })
  ] });
});
export {
  Lh as Accordion,
  Wh as AccordionContent,
  zh as AccordionHeader,
  Fh as AccordionItem,
  Hi as AccordionProvider,
  Vh as AccordionTrigger,
  Ki as Badge,
  Qi as Banner,
  nl as Button,
  el as ButtonVariants,
  Yh as CView,
  bl as CViewVariant,
  Bh as Card,
  Hh as CheckList,
  Kh as ContainedDescription,
  Xh as ContainedHeader,
  ll as ContainedList,
  ul as ContainedListItem,
  dl as ContainedListItems,
  fl as ContainedListLabel,
  il as ContainedListProvider,
  pl as ContainedListValue,
  Gh as ContainedTitle,
  qh as Drawer,
  Cl as Input,
  El as InputCounter,
  Jh as InputCounterVariants,
  ls as InputError,
  is as InputLabel,
  cs as InputMessage,
  Qh as Loader,
  tv as Modal,
  ov as ModalClose,
  nv as ModalContent,
  rv as ModalTrigger,
  sv as Notification,
  iv as OverFlowMenu,
  cv as OverflowClose,
  Sr as OverflowVariant,
  vf as Overlay,
  ta as Popover,
  na as PopoverContent,
  mf as PopoverTrigger,
  Ev as ProductSwitcher,
  Tv as ProductSwitcherContent,
  Pv as ProductSwitcherTrigger,
  uv as RadioButton,
  dv as RadioGroup,
  Zh as SearchField,
  hv as SelectItem,
  db as SelectMenu,
  Nr as SelectMenuVariants,
  bb as Selector,
  pb as SelectorVariants,
  vv as Spacing,
  Rb as Tabs,
  Ab as TabsContent,
  Nb as TabsList,
  _b as TabsVariants,
  ah as Toast,
  sh as ToastVariants,
  xv as Toggle,
  Ah as Tooltip,
  yv as TooltipContent,
  wv as TooltipTrigger,
  Ka as TooltipVariants,
  Cv as TooltipWithActions,
  Ui as accordionItemVariants,
  Xi as accordionVariants,
  Gi as badgeVariants,
  Ji as bannerVariants,
  ol as cardVariants,
  hl as drawerVariants,
  Ud as modalVariants,
  ch as toggleVariants,
  Bi as useAccordionContext,
  Uh as useContainedList,
  xo as useContainedListContext
};
//# sourceMappingURL=index.es.js.map
