"use client";

import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as y from "react";
import dr from "react";

const SwoopFooterLazy = y.lazy(() =>
  import("./swoop-footer").then((mod) => ({ default: mod.SwoopFooter }))
);

/** Astro/Vite-style JSX helper used by the migrated Ploy bundle. */
const r = { jsx, jsxs, Fragment };

const Ge = (...e) =>
  e
    .filter((t, o, s) => !!t && t.trim() !== "" && s.indexOf(t) === o)
    .join(" ")
    .trim();
const mr = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const pr = e =>
  e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, o, s) =>
    s ? s.toUpperCase() : o.toLowerCase()
  );
const Ce = e => {
  const t = pr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var xr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hr = e => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  return !1;
};
const ur = y.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: s,
      className: a = "",
      children: n,
      iconNode: l,
      ...x
    },
    h
  ) =>
    y.createElement(
      "svg",
      {
        ref: h,
        ...xr,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: s ? (Number(o) * 24) / Number(t) : o,
        className: Ge("lucide", a),
        ...(!n && !hr(x) && { "aria-hidden": "true" }),
        ...x
      },
      [
        ...l.map(([d, g]) => y.createElement(d, g)),
        ...(Array.isArray(n) ? n : [n])
      ]
    )
);
const Oe = (e, t) => {
  const o = y.forwardRef(({ className: s, ...a }, n) =>
    y.createElement(ur, {
      ref: n,
      iconNode: t,
      className: Ge(`lucide-${mr(Ce(e))}`, `lucide-${e}`, s),
      ...a
    })
  );
  return (o.displayName = Ce(e)), o;
};
const gr = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }]
  ],
  br = Oe("menu", gr);
const yr = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ],
  fr = Oe("x", yr);
var wr = Object.defineProperty,
  he = (e, t) => wr(e, "name", { value: t, configurable: !0 });
function me(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
he(me, "setRef");
function Le(...e) {
  return t => {
    let o = !1;
    const s = e.map(a => {
      const n = me(a, t);
      return !o && typeof n == "function" && (o = !0), n;
    });
    if (o)
      return () => {
        for (let a = 0; a < s.length; a++) {
          const n = s[a];
          typeof n == "function" ? n() : me(e[a], null);
        }
      };
  };
}
he(Le, "composeRefs");
function Fe(...e) {
  return y.useCallback(Le(...e), e);
}
he(Fe, "useComposedRefs");
var vr = Object.defineProperty,
  A = (e, t) => vr(e, "name", { value: t, configurable: !0 });
function We(e) {
  const t = y.forwardRef((o, s) => {
    let { children: a, ...n } = o,
      l = null,
      x = !1;
    const h = [];
    pe(a) && typeof ee == "function" && (a = ee(a._payload)),
      y.Children.forEach(a, w => {
        if (De(w)) {
          x = !0;
          const j = w;
          let P = "child" in j.props ? j.props.child : j.props.children;
          pe(P) && typeof ee == "function" && (P = ee(P._payload)),
            (l = Nr(j, P)),
            h.push(l?.props?.children);
        } else h.push(w);
      }),
      l
        ? (l = y.cloneElement(l, void 0, h))
        : !x && y.Children.count(a) === 1 && y.isValidElement(a) && (l = a);
    const d = l ? Be(l) : void 0,
      g = Fe(s, d);
    if (!l) {
      if (a || a === 0) throw new Error(x ? _r(e) : Sr(e));
      return a;
    }
    const b = $e(n, l.props ?? {});
    return l.type !== y.Fragment && (b.ref = s ? g : d), y.cloneElement(l, b);
  });
  return (t.displayName = `${e}.Slot`), t;
}
A(We, "createSlot");
var jr = We("Slot"),
  qe = Symbol.for("radix.slottable");
function kr(e) {
  const t = A(
    o => ("child" in o ? o.children(o.child) : o.children),
    "Slottable"
  );
  return (t.displayName = `${e}.Slottable`), (t.__radixId = qe), t;
}
A(kr, "createSlottable");
var Nr = A((e, t) => {
  if ("child" in e.props) {
    const o = e.props.child;
    return y.isValidElement(o)
      ? y.cloneElement(o, void 0, e.props.children(o.props.children))
      : null;
  }
  return y.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function $e(e, t) {
  const o = { ...t };
  for (const s in t) {
    const a = e[s],
      n = t[s];
    /^on[A-Z]/.test(s)
      ? a && n
        ? (o[s] = (...x) => {
            const h = n(...x);
            return a(...x), h;
          })
        : a && (o[s] = a)
      : s === "style"
      ? (o[s] = { ...a, ...n })
      : s === "className" && (o[s] = [a, n].filter(Boolean).join(" "));
  }
  return { ...e, ...o };
}
A($e, "mergeProps");
function Be(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    o = t && "isReactWarning" in t && t.isReactWarning;
  return o
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (o = t && "isReactWarning" in t && t.isReactWarning),
      o ? e.props.ref : e.props.ref || e.ref);
}
A(Be, "getElementRef");
function De(e) {
  return (
    y.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === qe
  );
}
A(De, "isSlottable");
var Cr = Symbol.for("react.lazy");
function pe(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "$$typeof" in e &&
    e.$$typeof === Cr &&
    "_payload" in e &&
    He(e._payload)
  );
}
A(pe, "isLazyComponent");
function He(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
A(He, "isPromiseLike");
var Sr = A(
    e =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    "createSlotError"
  ),
  _r = A(
    e =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    "createSlottableError"
  ),
  ee = dr[" use ".trim().toString()];
function Ue(e) {
  var t,
    o,
    s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (o = Ue(e[t])) && (s && (s += " "), (s += o));
    } else for (o in e) e[o] && (s && (s += " "), (s += o));
  return s;
}
function Ye() {
  for (var e, t, o = 0, s = "", a = arguments.length; o < a; o++)
    (e = arguments[o]) && (t = Ue(e)) && (s && (s += " "), (s += t));
  return s;
}
const Se = e => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  _e = Ye,
  zr = (e, t) => o => {
    var s;
    if (t?.variants == null) return _e(e, o?.class, o?.className);
    const { variants: a, defaultVariants: n } = t,
      l = Object.keys(a).map(d => {
        const g = o?.[d],
          b = n?.[d];
        if (g === null) return null;
        const w = Se(g) || Se(b);
        return a[d][w];
      }),
      x =
        o &&
        Object.entries(o).reduce((d, g) => {
          let [b, w] = g;
          return w === void 0 || (d[b] = w), d;
        }, {}),
      h =
        t == null || (s = t.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((d, g) => {
              let { class: b, className: w, ...j } = g;
              return Object.entries(j).every(P => {
                let [k, N] = P;
                return Array.isArray(N)
                  ? N.includes({ ...n, ...x }[k])
                  : { ...n, ...x }[k] === N;
              })
                ? [...d, b, w]
                : d;
            }, []);
    return _e(e, l, h, o?.class, o?.className);
  },
  Pr = (e, t) => {
    const o = new Array(e.length + t.length);
    for (let s = 0; s < e.length; s++) o[s] = e[s];
    for (let s = 0; s < t.length; s++) o[e.length + s] = t[s];
    return o;
  },
  Er = (e, t) => ({ classGroupId: e, validator: t }),
  Xe = (e = new Map(), t = null, o) => ({
    nextPart: e,
    validators: t,
    classGroupId: o
  }),
  oe = "-",
  ze = [],
  Ar = "arbitrary..",
  Rr = e => {
    const t = Tr(e),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: s } = e;
    return {
      getClassGroupId: l => {
        if (l.startsWith("[") && l.endsWith("]")) return Ir(l);
        const x = l.split(oe),
          h = x[0] === "" && x.length > 1 ? 1 : 0;
        return Ze(x, h, t);
      },
      getConflictingClassGroupIds: (l, x) => {
        if (x) {
          const h = s[l],
            d = o[l];
          return h ? (d ? Pr(d, h) : h) : d || ze;
        }
        return o[l] || ze;
      }
    };
  },
  Ze = (e, t, o) => {
    if (e.length - t === 0) return o.classGroupId;
    const a = e[t],
      n = o.nextPart.get(a);
    if (n) {
      const d = Ze(e, t + 1, n);
      if (d) return d;
    }
    const l = o.validators;
    if (l === null) return;
    const x = t === 0 ? e.join(oe) : e.slice(t).join(oe),
      h = l.length;
    for (let d = 0; d < h; d++) {
      const g = l[d];
      if (g.validator(x)) return g.classGroupId;
    }
  },
  Ir = e =>
    e.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const t = e.slice(1, -1),
            o = t.indexOf(":"),
            s = t.slice(0, o);
          return s ? Ar + s : void 0;
        })(),
  Tr = e => {
    const { theme: t, classGroups: o } = e;
    return Vr(o, t);
  },
  Vr = (e, t) => {
    const o = Xe();
    for (const s in e) {
      const a = e[s];
      ue(a, o, s, t);
    }
    return o;
  },
  ue = (e, t, o, s) => {
    const a = e.length;
    for (let n = 0; n < a; n++) {
      const l = e[n];
      Mr(l, t, o, s);
    }
  },
  Mr = (e, t, o, s) => {
    if (typeof e == "string") {
      Gr(e, t, o);
      return;
    }
    if (typeof e == "function") {
      Or(e, t, o, s);
      return;
    }
    Lr(e, t, o, s);
  },
  Gr = (e, t, o) => {
    const s = e === "" ? t : Ke(t, e);
    s.classGroupId = o;
  },
  Or = (e, t, o, s) => {
    if (Fr(e)) {
      ue(e(s), t, o, s);
      return;
    }
    t.validators === null && (t.validators = []), t.validators.push(Er(o, e));
  },
  Lr = (e, t, o, s) => {
    const a = Object.entries(e),
      n = a.length;
    for (let l = 0; l < n; l++) {
      const [x, h] = a[l];
      ue(h, Ke(t, x), o, s);
    }
  },
  Ke = (e, t) => {
    let o = e;
    const s = t.split(oe),
      a = s.length;
    for (let n = 0; n < a; n++) {
      const l = s[n];
      let x = o.nextPart.get(l);
      x || ((x = Xe()), o.nextPart.set(l, x)), (o = x);
    }
    return o;
  },
  Fr = e => "isThemeGetter" in e && e.isThemeGetter === !0,
  Wr = e => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      o = Object.create(null),
      s = Object.create(null);
    const a = (n, l) => {
      (o[n] = l), t++, t > e && ((t = 0), (s = o), (o = Object.create(null)));
    };
    return {
      get(n) {
        let l = o[n];
        if (l !== void 0) return l;
        if ((l = s[n]) !== void 0) return a(n, l), l;
      },
      set(n, l) {
        n in o ? (o[n] = l) : a(n, l);
      }
    };
  },
  xe = "!",
  Pe = ":",
  qr = [],
  Ee = (e, t, o, s, a) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: o,
    maybePostfixModifierPosition: s,
    isExternal: a
  }),
  $r = e => {
    const { prefix: t, experimentalParseClassName: o } = e;
    let s = a => {
      const n = [];
      let l = 0,
        x = 0,
        h = 0,
        d;
      const g = a.length;
      for (let k = 0; k < g; k++) {
        const N = a[k];
        if (l === 0 && x === 0) {
          if (N === Pe) {
            n.push(a.slice(h, k)), (h = k + 1);
            continue;
          }
          if (N === "/") {
            d = k;
            continue;
          }
        }
        N === "[" ? l++ : N === "]" ? l-- : N === "(" ? x++ : N === ")" && x--;
      }
      const b = n.length === 0 ? a : a.slice(h);
      let w = b,
        j = !1;
      b.endsWith(xe)
        ? ((w = b.slice(0, -1)), (j = !0))
        : b.startsWith(xe) && ((w = b.slice(1)), (j = !0));
      const P = d && d > h ? d - h : void 0;
      return Ee(n, j, w, P);
    };
    if (t) {
      const a = t + Pe,
        n = s;
      s = l =>
        l.startsWith(a) ? n(l.slice(a.length)) : Ee(qr, !1, l, void 0, !0);
    }
    if (o) {
      const a = s;
      s = n => o({ className: n, parseClassName: a });
    }
    return s;
  },
  Br = e => {
    const t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((o, s) => {
        t.set(o, 1e6 + s);
      }),
      o => {
        const s = [];
        let a = [];
        for (let n = 0; n < o.length; n++) {
          const l = o[n],
            x = l[0] === "[",
            h = t.has(l);
          x || h
            ? (a.length > 0 && (a.sort(), s.push(...a), (a = [])), s.push(l))
            : a.push(l);
        }
        return a.length > 0 && (a.sort(), s.push(...a)), s;
      }
    );
  },
  Dr = e => ({
    cache: Wr(e.cacheSize),
    parseClassName: $r(e),
    sortModifiers: Br(e),
    postfixLookupClassGroupIds: Hr(e),
    ...Rr(e)
  }),
  Hr = e => {
    const t = Object.create(null),
      o = e.postfixLookupClassGroups;
    if (o) for (let s = 0; s < o.length; s++) t[o[s]] = !0;
    return t;
  },
  Ur = /\s+/,
  Yr = (e, t) => {
    const {
        parseClassName: o,
        getClassGroupId: s,
        getConflictingClassGroupIds: a,
        sortModifiers: n,
        postfixLookupClassGroupIds: l
      } = t,
      x = [],
      h = e.trim().split(Ur);
    let d = "";
    for (let g = h.length - 1; g >= 0; g -= 1) {
      const b = h[g],
        {
          isExternal: w,
          modifiers: j,
          hasImportantModifier: P,
          baseClassName: k,
          maybePostfixModifierPosition: N
        } = o(b);
      if (w) {
        d = b + (d.length > 0 ? " " + d : d);
        continue;
      }
      let L = !!N,
        _;
      if (L) {
        const V = k.substring(0, N);
        _ = s(V);
        const m = _ && l[_] ? s(k) : void 0;
        m && m !== _ && ((_ = m), (L = !1));
      } else _ = s(k);
      if (!_) {
        if (!L) {
          d = b + (d.length > 0 ? " " + d : d);
          continue;
        }
        if (((_ = s(k)), !_)) {
          d = b + (d.length > 0 ? " " + d : d);
          continue;
        }
        L = !1;
      }
      const U = j.length === 0 ? "" : j.length === 1 ? j[0] : n(j).join(":"),
        $ = P ? U + xe : U,
        B = $ + _;
      if (x.indexOf(B) > -1) continue;
      x.push(B);
      const D = a(_, L);
      for (let V = 0; V < D.length; ++V) {
        const m = D[V];
        x.push($ + m);
      }
      d = b + (d.length > 0 ? " " + d : d);
    }
    return d;
  },
  Xr = (...e) => {
    let t = 0,
      o,
      s,
      a = "";
    for (; t < e.length; )
      (o = e[t++]) && (s = Je(o)) && (a && (a += " "), (a += s));
    return a;
  },
  Je = e => {
    if (typeof e == "string") return e;
    let t,
      o = "";
    for (let s = 0; s < e.length; s++)
      e[s] && (t = Je(e[s])) && (o && (o += " "), (o += t));
    return o;
  },
  Zr = (e, ...t) => {
    let o, s, a, n;
    const l = h => {
        const d = t.reduce((g, b) => b(g), e());
        return (o = Dr(d)), (s = o.cache.get), (a = o.cache.set), (n = x), x(h);
      },
      x = h => {
        const d = s(h);
        if (d) return d;
        const g = Yr(h, o);
        return a(h, g), g;
      };
    return (n = l), (...h) => n(Xr(...h));
  },
  Kr = [],
  f = e => {
    const t = o => o[e] || Kr;
    return (t.isThemeGetter = !0), t;
  },
  Qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  er = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Jr = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  Qr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  et = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  rt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  tt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ot = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  G = e => Jr.test(e),
  u = e => !!e && !Number.isNaN(Number(e)),
  I = e => !!e && Number.isInteger(Number(e)),
  de = e => e.endsWith("%") && u(e.slice(0, -1)),
  M = e => Qr.test(e),
  rr = () => !0,
  st = e => et.test(e) && !rt.test(e),
  ge = () => !1,
  at = e => tt.test(e),
  nt = e => ot.test(e),
  lt = e => !i(e) && !c(e),
  it = e =>
    e.startsWith("@container") &&
    ((e[10] === "/" && e[11] !== void 0) ||
      (e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10)) ||
      (e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10))),
  ct = e => O(e, sr, ge),
  i = e => Qe.test(e),
  W = e => O(e, ar, st),
  Ae = e => O(e, bt, u),
  dt = e => O(e, lr, rr),
  mt = e => O(e, nr, ge),
  Re = e => O(e, tr, ge),
  pt = e => O(e, or, nt),
  re = e => O(e, ir, at),
  c = e => er.test(e),
  Y = e => q(e, ar),
  xt = e => q(e, nr),
  Ie = e => q(e, tr),
  ht = e => q(e, sr),
  ut = e => q(e, or),
  te = e => q(e, ir, !0),
  gt = e => q(e, lr, !0),
  O = (e, t, o) => {
    const s = Qe.exec(e);
    return s ? (s[1] ? t(s[1]) : o(s[2])) : !1;
  },
  q = (e, t, o = !1) => {
    const s = er.exec(e);
    return s ? (s[1] ? t(s[1]) : o) : !1;
  },
  tr = e => e === "position" || e === "percentage",
  or = e => e === "image" || e === "url",
  sr = e => e === "length" || e === "size" || e === "bg-size",
  ar = e => e === "length",
  bt = e => e === "number",
  nr = e => e === "family-name",
  lr = e => e === "number" || e === "weight",
  ir = e => e === "shadow",
  yt = () => {
    const e = f("color"),
      t = f("font"),
      o = f("text"),
      s = f("font-weight"),
      a = f("tracking"),
      n = f("leading"),
      l = f("breakpoint"),
      x = f("container"),
      h = f("spacing"),
      d = f("radius"),
      g = f("shadow"),
      b = f("inset-shadow"),
      w = f("text-shadow"),
      j = f("drop-shadow"),
      P = f("blur"),
      k = f("perspective"),
      N = f("aspect"),
      L = f("ease"),
      _ = f("animate"),
      U = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column"
      ],
      $ = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom"
      ],
      B = () => [...$(), c, i],
      D = () => ["auto", "hidden", "clip", "visible", "scroll"],
      V = () => ["auto", "contain", "none"],
      m = () => [c, i, h],
      z = () => [G, "full", "auto", ...m()],
      be = () => [I, "none", "subgrid", c, i],
      ye = () => ["auto", { span: ["full", I, c, i] }, I, c, i],
      X = () => [I, "auto", c, i],
      fe = () => ["auto", "min", "max", "fr", c, i],
      ae = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe"
      ],
      H = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe"
      ],
      E = () => ["auto", ...m()],
      F = () => [
        G,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...m()
      ],
      ne = () => [
        G,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...m()
      ],
      le = () => [
        G,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...m()
      ],
      p = () => [e, c, i],
      we = () => [...$(), Ie, Re, { position: [c, i] }],
      ve = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      je = () => ["auto", "cover", "contain", ht, ct, { size: [c, i] }],
      ie = () => [de, Y, W],
      C = () => ["", "none", "full", d, c, i],
      S = () => ["", u, Y, W],
      Z = () => ["solid", "dashed", "dotted", "double"],
      ke = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity"
      ],
      v = () => [u, de, Ie, Re],
      Ne = () => ["", "none", P, c, i],
      K = () => ["none", u, c, i],
      J = () => ["none", u, c, i],
      ce = () => [u, c, i],
      Q = () => [G, "full", ...m()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [M],
        breakpoint: [M],
        color: [rr],
        container: [M],
        "drop-shadow": [M],
        ease: ["in", "out", "in-out"],
        font: [lt],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black"
        ],
        "inset-shadow": [M],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none"
        ],
        radius: [M],
        shadow: [M],
        spacing: ["px", u],
        text: [M],
        "text-shadow": [M],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", G, i, c, N] }],
        container: ["container"],
        "container-type": [{ "@container": ["", "normal", "size", c, i] }],
        "container-named": [it],
        columns: [{ columns: [u, i, c, x] }],
        "break-after": [{ "break-after": U() }],
        "break-before": [{ "break-before": U() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] }
        ],
        "object-position": [{ object: B() }],
        overflow: [{ overflow: D() }],
        "overflow-x": [{ "overflow-x": D() }],
        "overflow-y": [{ "overflow-y": D() }],
        overscroll: [{ overscroll: V() }],
        "overscroll-x": [{ "overscroll-x": V() }],
        "overscroll-y": [{ "overscroll-y": V() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: z() }],
        "inset-x": [{ "inset-x": z() }],
        "inset-y": [{ "inset-y": z() }],
        start: [{ "inset-s": z(), start: z() }],
        end: [{ "inset-e": z(), end: z() }],
        "inset-bs": [{ "inset-bs": z() }],
        "inset-be": [{ "inset-be": z() }],
        top: [{ top: z() }],
        right: [{ right: z() }],
        bottom: [{ bottom: z() }],
        left: [{ left: z() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [I, "auto", c, i] }],
        basis: [{ basis: [G, "full", "auto", x, ...m()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] }
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [u, G, "auto", "initial", "none", i] }],
        grow: [{ grow: ["", u, c, i] }],
        shrink: [{ shrink: ["", u, c, i] }],
        order: [{ order: [I, "first", "last", "none", c, i] }],
        "grid-cols": [{ "grid-cols": be() }],
        "col-start-end": [{ col: ye() }],
        "col-start": [{ "col-start": X() }],
        "col-end": [{ "col-end": X() }],
        "grid-rows": [{ "grid-rows": be() }],
        "row-start-end": [{ row: ye() }],
        "row-start": [{ "row-start": X() }],
        "row-end": [{ "row-end": X() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }
        ],
        "auto-cols": [{ "auto-cols": fe() }],
        "auto-rows": [{ "auto-rows": fe() }],
        gap: [{ gap: m() }],
        "gap-x": [{ "gap-x": m() }],
        "gap-y": [{ "gap-y": m() }],
        "justify-content": [{ justify: [...ae(), "normal"] }],
        "justify-items": [{ "justify-items": [...H(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...H()] }],
        "align-content": [{ content: ["normal", ...ae()] }],
        "align-items": [{ items: [...H(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...H(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": ae() }],
        "place-items": [{ "place-items": [...H(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...H()] }],
        p: [{ p: m() }],
        px: [{ px: m() }],
        py: [{ py: m() }],
        ps: [{ ps: m() }],
        pe: [{ pe: m() }],
        pbs: [{ pbs: m() }],
        pbe: [{ pbe: m() }],
        pt: [{ pt: m() }],
        pr: [{ pr: m() }],
        pb: [{ pb: m() }],
        pl: [{ pl: m() }],
        m: [{ m: E() }],
        mx: [{ mx: E() }],
        my: [{ my: E() }],
        ms: [{ ms: E() }],
        me: [{ me: E() }],
        mbs: [{ mbs: E() }],
        mbe: [{ mbe: E() }],
        mt: [{ mt: E() }],
        mr: [{ mr: E() }],
        mb: [{ mb: E() }],
        ml: [{ ml: E() }],
        "space-x": [{ "space-x": m() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": m() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: F() }],
        "inline-size": [{ inline: ["auto", ...ne()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...ne()] }],
        "max-inline-size": [{ "max-inline": ["none", ...ne()] }],
        "block-size": [{ block: ["auto", ...le()] }],
        "min-block-size": [{ "min-block": ["auto", ...le()] }],
        "max-block-size": [{ "max-block": ["none", ...le()] }],
        w: [{ w: [x, "screen", ...F()] }],
        "min-w": [{ "min-w": [x, "screen", "none", ...F()] }],
        "max-w": [
          { "max-w": [x, "screen", "none", "prose", { screen: [l] }, ...F()] }
        ],
        h: [{ h: ["screen", "lh", ...F()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...F()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...F()] }],
        "font-size": [{ text: ["base", o, Y, W] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [s, gt, dt] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              de,
              i
            ]
          }
        ],
        "font-family": [{ font: [xt, mt, t] }],
        "font-features": [{ "font-features": [i] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [a, c, i] }],
        "line-clamp": [{ "line-clamp": [u, "none", c, Ae] }],
        leading: [{ leading: [n, ...m()] }],
        "list-image": [{ "list-image": ["none", c, i] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", c, i] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] }
        ],
        "placeholder-color": [{ placeholder: p() }],
        "text-color": [{ text: p() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline"
        ],
        "text-decoration-style": [{ decoration: [...Z(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [u, "from-font", "auto", c, W] }
        ],
        "text-decoration-color": [{ decoration: p() }],
        "underline-offset": [{ "underline-offset": [u, "auto", c, i] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case"
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: m() }],
        "tab-size": [{ tab: [I, c, i] }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              c,
              i
            ]
          }
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces"
            ]
          }
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", c, i] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: we() }],
        "bg-repeat": [{ bg: ve() }],
        "bg-size": [{ bg: je() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  I,
                  c,
                  i
                ],
                radial: ["", c, i],
                conic: [I, c, i]
              },
              ut,
              pt
            ]
          }
        ],
        "bg-color": [{ bg: p() }],
        "gradient-from-pos": [{ from: ie() }],
        "gradient-via-pos": [{ via: ie() }],
        "gradient-to-pos": [{ to: ie() }],
        "gradient-from": [{ from: p() }],
        "gradient-via": [{ via: p() }],
        "gradient-to": [{ to: p() }],
        rounded: [{ rounded: C() }],
        "rounded-s": [{ "rounded-s": C() }],
        "rounded-e": [{ "rounded-e": C() }],
        "rounded-t": [{ "rounded-t": C() }],
        "rounded-r": [{ "rounded-r": C() }],
        "rounded-b": [{ "rounded-b": C() }],
        "rounded-l": [{ "rounded-l": C() }],
        "rounded-ss": [{ "rounded-ss": C() }],
        "rounded-se": [{ "rounded-se": C() }],
        "rounded-ee": [{ "rounded-ee": C() }],
        "rounded-es": [{ "rounded-es": C() }],
        "rounded-tl": [{ "rounded-tl": C() }],
        "rounded-tr": [{ "rounded-tr": C() }],
        "rounded-br": [{ "rounded-br": C() }],
        "rounded-bl": [{ "rounded-bl": C() }],
        "border-w": [{ border: S() }],
        "border-w-x": [{ "border-x": S() }],
        "border-w-y": [{ "border-y": S() }],
        "border-w-s": [{ "border-s": S() }],
        "border-w-e": [{ "border-e": S() }],
        "border-w-bs": [{ "border-bs": S() }],
        "border-w-be": [{ "border-be": S() }],
        "border-w-t": [{ "border-t": S() }],
        "border-w-r": [{ "border-r": S() }],
        "border-w-b": [{ "border-b": S() }],
        "border-w-l": [{ "border-l": S() }],
        "divide-x": [{ "divide-x": S() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": S() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Z(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Z(), "hidden", "none"] }],
        "border-color": [{ border: p() }],
        "border-color-x": [{ "border-x": p() }],
        "border-color-y": [{ "border-y": p() }],
        "border-color-s": [{ "border-s": p() }],
        "border-color-e": [{ "border-e": p() }],
        "border-color-bs": [{ "border-bs": p() }],
        "border-color-be": [{ "border-be": p() }],
        "border-color-t": [{ "border-t": p() }],
        "border-color-r": [{ "border-r": p() }],
        "border-color-b": [{ "border-b": p() }],
        "border-color-l": [{ "border-l": p() }],
        "divide-color": [{ divide: p() }],
        "outline-style": [{ outline: [...Z(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [u, c, i] }],
        "outline-w": [{ outline: ["", u, Y, W] }],
        "outline-color": [{ outline: p() }],
        shadow: [{ shadow: ["", "none", g, te, re] }],
        "shadow-color": [{ shadow: p() }],
        "inset-shadow": [{ "inset-shadow": ["none", b, te, re] }],
        "inset-shadow-color": [{ "inset-shadow": p() }],
        "ring-w": [{ ring: S() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: p() }],
        "ring-offset-w": [{ "ring-offset": [u, W] }],
        "ring-offset-color": [{ "ring-offset": p() }],
        "inset-ring-w": [{ "inset-ring": S() }],
        "inset-ring-color": [{ "inset-ring": p() }],
        "text-shadow": [{ "text-shadow": ["none", w, te, re] }],
        "text-shadow-color": [{ "text-shadow": p() }],
        opacity: [{ opacity: [u, c, i] }],
        "mix-blend": [
          { "mix-blend": [...ke(), "plus-darker", "plus-lighter"] }
        ],
        "bg-blend": [{ "bg-blend": ke() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          },
          "mask-no-clip"
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] }
        ],
        "mask-image-linear-pos": [{ "mask-linear": [u] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": v() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": v() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": p() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": p() }],
        "mask-image-t-from-pos": [{ "mask-t-from": v() }],
        "mask-image-t-to-pos": [{ "mask-t-to": v() }],
        "mask-image-t-from-color": [{ "mask-t-from": p() }],
        "mask-image-t-to-color": [{ "mask-t-to": p() }],
        "mask-image-r-from-pos": [{ "mask-r-from": v() }],
        "mask-image-r-to-pos": [{ "mask-r-to": v() }],
        "mask-image-r-from-color": [{ "mask-r-from": p() }],
        "mask-image-r-to-color": [{ "mask-r-to": p() }],
        "mask-image-b-from-pos": [{ "mask-b-from": v() }],
        "mask-image-b-to-pos": [{ "mask-b-to": v() }],
        "mask-image-b-from-color": [{ "mask-b-from": p() }],
        "mask-image-b-to-color": [{ "mask-b-to": p() }],
        "mask-image-l-from-pos": [{ "mask-l-from": v() }],
        "mask-image-l-to-pos": [{ "mask-l-to": v() }],
        "mask-image-l-from-color": [{ "mask-l-from": p() }],
        "mask-image-l-to-color": [{ "mask-l-to": p() }],
        "mask-image-x-from-pos": [{ "mask-x-from": v() }],
        "mask-image-x-to-pos": [{ "mask-x-to": v() }],
        "mask-image-x-from-color": [{ "mask-x-from": p() }],
        "mask-image-x-to-color": [{ "mask-x-to": p() }],
        "mask-image-y-from-pos": [{ "mask-y-from": v() }],
        "mask-image-y-to-pos": [{ "mask-y-to": v() }],
        "mask-image-y-from-color": [{ "mask-y-from": p() }],
        "mask-image-y-to-color": [{ "mask-y-to": p() }],
        "mask-image-radial": [{ "mask-radial": [c, i] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": v() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": v() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": p() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": p() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] }
            ]
          }
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": $() }],
        "mask-image-conic-pos": [{ "mask-conic": [u] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": v() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": v() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": p() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": p() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          }
        ],
        "mask-position": [{ mask: we() }],
        "mask-repeat": [{ mask: ve() }],
        "mask-size": [{ mask: je() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", c, i] }],
        filter: [{ filter: ["", "none", c, i] }],
        blur: [{ blur: Ne() }],
        brightness: [{ brightness: [u, c, i] }],
        contrast: [{ contrast: [u, c, i] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", j, te, re] }],
        "drop-shadow-color": [{ "drop-shadow": p() }],
        grayscale: [{ grayscale: ["", u, c, i] }],
        "hue-rotate": [{ "hue-rotate": [u, c, i] }],
        invert: [{ invert: ["", u, c, i] }],
        saturate: [{ saturate: [u, c, i] }],
        sepia: [{ sepia: ["", u, c, i] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", c, i] }],
        "backdrop-blur": [{ "backdrop-blur": Ne() }],
        "backdrop-brightness": [{ "backdrop-brightness": [u, c, i] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u, c, i] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", u, c, i] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u, c, i] }],
        "backdrop-invert": [{ "backdrop-invert": ["", u, c, i] }],
        "backdrop-opacity": [{ "backdrop-opacity": [u, c, i] }],
        "backdrop-saturate": [{ "backdrop-saturate": [u, c, i] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", u, c, i] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": m() }],
        "border-spacing-x": [{ "border-spacing-x": m() }],
        "border-spacing-y": [{ "border-spacing-y": m() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              c,
              i
            ]
          }
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [u, "initial", c, i] }],
        ease: [{ ease: ["linear", "initial", L, c, i] }],
        delay: [{ delay: [u, c, i] }],
        animate: [{ animate: ["none", _, c, i] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [k, c, i] }],
        "perspective-origin": [{ "perspective-origin": B() }],
        rotate: [{ rotate: K() }],
        "rotate-x": [{ "rotate-x": K() }],
        "rotate-y": [{ "rotate-y": K() }],
        "rotate-z": [{ "rotate-z": K() }],
        scale: [{ scale: J() }],
        "scale-x": [{ "scale-x": J() }],
        "scale-y": [{ "scale-y": J() }],
        "scale-z": [{ "scale-z": J() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: ce() }],
        "skew-x": [{ "skew-x": ce() }],
        "skew-y": [{ "skew-y": ce() }],
        transform: [{ transform: [c, i, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: B() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Q() }],
        "translate-x": [{ "translate-x": Q() }],
        "translate-y": [{ "translate-y": Q() }],
        "translate-z": [{ "translate-z": Q() }],
        "translate-none": ["translate-none"],
        zoom: [{ zoom: [I, c, i] }],
        accent: [{ accent: p() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: p() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light"
            ]
          }
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              c,
              i
            ]
          }
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": p() }],
        "scrollbar-track-color": [{ "scrollbar-track": p() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": ["auto", "stable", "both"] }
        ],
        "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
        "scroll-m": [{ "scroll-m": m() }],
        "scroll-mx": [{ "scroll-mx": m() }],
        "scroll-my": [{ "scroll-my": m() }],
        "scroll-ms": [{ "scroll-ms": m() }],
        "scroll-me": [{ "scroll-me": m() }],
        "scroll-mbs": [{ "scroll-mbs": m() }],
        "scroll-mbe": [{ "scroll-mbe": m() }],
        "scroll-mt": [{ "scroll-mt": m() }],
        "scroll-mr": [{ "scroll-mr": m() }],
        "scroll-mb": [{ "scroll-mb": m() }],
        "scroll-ml": [{ "scroll-ml": m() }],
        "scroll-p": [{ "scroll-p": m() }],
        "scroll-px": [{ "scroll-px": m() }],
        "scroll-py": [{ "scroll-py": m() }],
        "scroll-ps": [{ "scroll-ps": m() }],
        "scroll-pe": [{ "scroll-pe": m() }],
        "scroll-pbs": [{ "scroll-pbs": m() }],
        "scroll-pbe": [{ "scroll-pbe": m() }],
        "scroll-pt": [{ "scroll-pt": m() }],
        "scroll-pr": [{ "scroll-pr": m() }],
        "scroll-pb": [{ "scroll-pb": m() }],
        "scroll-pl": [{ "scroll-pl": m() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", c, i] }
        ],
        fill: [{ fill: ["none", ...p()] }],
        "stroke-w": [{ stroke: [u, Y, W, Ae] }],
        stroke: [{ stroke: ["none", ...p()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
      },
      conflictingClassGroups: {
        "container-named": ["container-type"],
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left"
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction"
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l"
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l"
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z"
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml"
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl"
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      postfixLookupClassGroups: ["container-type"],
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection"
      ]
    };
  },
  ft = Zr(yt);
function se(...e) {
  return ft(Ye(e));
}
const wt = zr(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button font-button text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ploy-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ploy-background-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          primary:
            "border border-ploy-button-primary-border bg-ploy-button-primary-background text-ploy-button-primary-text hover:bg-ploy-button-primary-background/90",
          secondary:
            "border border-ploy-button-secondary-border bg-ploy-button-secondary-background text-ploy-button-secondary-text hover:bg-ploy-button-secondary-background/90",
          outline:
            "border border-ploy-border-primary bg-transparent text-ploy-text-primary hover:bg-ploy-neutral-primary-s2",
          ghost: "text-ploy-text-primary hover:bg-ploy-neutral-primary-s2",
          link: "text-ploy-accent-primary underline-offset-4 hover:underline"
        },
        size: {
          sm: "h-8 px-3 text-xs",
          md: "h-10 px-4",
          lg: "h-12 px-6 text-base",
          icon: "size-10"
        }
      },
      defaultVariants: { variant: "primary", size: "md" }
    }
  ),
  T = y.forwardRef(
    ({ className: e, variant: t, size: o, asChild: s = !1, ...a }, n) => {
      const l = s ? jr : "button";
      return r.jsx(l, {
        ref: n,
        className: se(wt({ variant: t, size: o }), e),
        ...a
      });
    }
  );
T.displayName = "Button";
function cr({ className: e, compact: t = !1 }) {
  return r.jsxs("span", {
    className: se(
      "inline-flex items-center gap-2.5 font-heading font-medium tracking-[-0.045em] text-ploy-text-primary",
      e
    ),
    "aria-label": "Sahel Power",
    children: [
      r.jsxs("span", {
        "aria-hidden": "true",
        className:
          "relative flex size-8 items-center justify-center overflow-hidden rounded-sm bg-ploy-accent-primary",
        children: [
          r.jsx("span", {
            className:
              "absolute h-6 w-[5px] -rotate-[24deg] bg-ploy-neutral-primary",
            style: { left: 11 }
          }),
          r.jsx("span", {
            className:
              "absolute h-6 w-[5px] -rotate-[24deg] bg-ploy-neutral-primary",
            style: { left: 20 }
          })
        ]
      }),
      r.jsxs("span", {
        className: se("leading-none", t ? "text-2xl" : "text-3xl"),
        children: [
          "Sahel ",
          r.jsx("span", { className: "font-normal", children: "Power" })
        ]
      })
    ]
  });
}
const Te = [
  ["Home", "#home"],
  ["How It Works", "#how-it-works"],
  ["Drivers", "#drivers"],
  ["Fleet Charging", "#fleet"],
  ["Businesses", "#businesses"],
  ["Partners", "#partners"]
];
function vt() {
  const [e, t] = y.useState(!1);
  return r.jsxs("header", {
    className: "site-nav absolute inset-x-0 top-0 z-30 text-ploy-text-primary",
    children: [
      r.jsxs("nav", {
        "aria-label": "Main navigation",
        className:
          "mx-auto flex max-w-[1560px] items-center justify-between gap-4 px-5 py-5 md:px-8 lg:px-12",
        children: [
          r.jsx("a", {
            href: "#home",
            className: "site-nav__logo shrink-0",
            onClick: () => t(!1),
            children: r.jsx(cr, { compact: !0 })
          }),
          r.jsx("div", {
            className:
              "site-nav__links hidden items-center xl:flex",
            children: Te.map(([o, s]) =>
              r.jsx(
                "a",
                {
                  href: s,
                  className: "site-nav__link",
                  children: o
                },
                o
              )
            )
          }),
          r.jsx(T, {
            asChild: !0,
            size: "sm",
            className:
              "site-nav__cta hidden shrink-0 px-4 uppercase tracking-[0.08em] sm:inline-flex",
            children: r.jsx("a", {
              href: "#contact",
              children: "Request a Charge"
            })
          }),
          r.jsx("button", {
            type: "button",
            "aria-label": e ? "Close menu" : "Open menu",
            "aria-expanded": e,
            onClick: () => t(!e),
            className:
              "ml-auto inline-flex size-10 items-center justify-center rounded-button border border-ploy-text-primary/40 xl:hidden",
            children: e ? r.jsx(fr, { size: 20 }) : r.jsx(br, { size: 20 })
          })
        ]
      }),
      e &&
        r.jsxs("div", {
          className:
            "site-nav__mobile mx-4 rounded-card border border-ploy-border-primary bg-ploy-background-primary p-5 shadow-lg xl:hidden",
          children: [
            r.jsx("div", {
              className: "grid gap-1",
              children: Te.map(([o, s]) =>
                r.jsx(
                  "a",
                  {
                    href: s,
                    onClick: () => t(!1),
                    className:
                      "site-nav__link site-nav__link--mobile border-b border-ploy-border-primary px-2 py-2.5",
                    children: o
                  },
                  o
                )
              )
            }),
            r.jsx(T, {
              asChild: !0,
              className: "mt-4 w-full",
              children: r.jsx("a", {
                href: "#contact",
                onClick: () => t(!1),
                children: "Request a Charge"
              })
            })
          ]
        })
    ]
  });
}
function kt() {
  return r.jsx(y.Suspense, {
    fallback: r.jsx("footer", {
      className: "swoop-footer min-h-[12rem]",
      "aria-hidden": true
    }),
    children: r.jsx(SwoopFooterLazy, {})
  });
}
const Nt = {
  display:
    "text-5xl leading-[0.98] tracking-[-0.055em] md:text-7xl lg:text-8xl",
  h1: "text-5xl leading-none tracking-[-0.055em] md:text-6xl",
  h2: "text-4xl leading-[1.06] tracking-[-0.045em] md:text-5xl",
  h3: "text-3xl leading-[1.1] tracking-[-0.04em] md:text-4xl",
  h4: "text-2xl leading-tight tracking-[-0.035em] md:text-3xl",
  h5: "text-lg leading-tight tracking-[-0.025em] md:text-xl",
  h6: "text-base leading-tight tracking-[-0.02em]"
};
function R({ as: e, level: t = "h2", className: o, children: s, ...a }) {
  const n = e ?? (t === "display" ? "h1" : t);
  return r.jsx(n, {
    className: se("font-heading font-normal text-balance", Nt[t], o),
    ...a,
    children: s
  });
}
const Ct = "/images/sahel-power-ev-service-accra-hero.jpg";
function St() {
  return r.jsxs("section", {
    id: "home",
    className:
      "hero relative isolate flex h-[100dvh] min-h-[100dvh] max-h-[100dvh] flex-col justify-end overflow-hidden bg-ploy-background-primary text-ploy-text-primary",
    children: [
      r.jsx("img", {
        src: Ct,
        alt:
          "Sahel Power mobile charging van serving an electric vehicle in Accra",
        className:
          "hero__image absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center] md:object-center",
        fetchPriority: "high"
      }),
      r.jsx("div", {
        className:
          "absolute inset-0 -z-10 bg-gradient-to-b from-ploy-background-primary/40 via-transparent via-45% to-ploy-background-primary/95"
      }),
      r.jsxs("div", {
        className:
          "hero__content mx-auto w-full max-w-[1560px] px-5 pb-12 pt-40 md:px-8 md:pb-14 lg:px-12",
        children: [
          r.jsxs("div", {
            className:
              "mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-ploy-text-primary/80",
            children: [
              r.jsx("span", { className: "h-px w-8 bg-ploy-accent-primary" }),
              " Mobile EV charging, Ghana"
            ]
          }),
          r.jsx(R, {
            level: "h1",
            className:
              "hero__title max-w-[14ch] text-left text-[clamp(2.75rem,8vw,6.25rem)] leading-[0.98] tracking-[-0.055em]",
            children: "Power that moves."
          }),
          r.jsxs("div", {
            className:
              "mt-7 flex flex-col justify-between gap-7 md:flex-row md:items-end",
            children: [
              r.jsx("p", {
                className:
                  "hero__intro max-w-xl text-lg leading-relaxed text-ploy-text-primary/90 md:text-xl",
                children:
                  "Sahel Power brings EV charging directly to you. At home, at work, on the road, or across your fleet."
              }),
              r.jsxs("div", {
                className: "hero__actions flex flex-wrap gap-3",
                children: [
                  r.jsx(T, {
                    asChild: !0,
                    size: "lg",
                    className: "hero__cta--primary",
                    children: r.jsx("a", {
                      href: "#contact",
                      children: "Request a Charge"
                    })
                  }),
                  r.jsx(T, {
                    asChild: !0,
                    size: "lg",
                    variant: "secondary",
                    className: "hero__cta--secondary",
                    children: r.jsx("a", {
                      href: "#partners",
                      children: "Partner With Sahel Power"
                    })
                  })
                ]
              })
            ]
          }),
          r.jsxs("div", {
            className:
              "hero__energy mt-12 flex max-w-[430px] items-center gap-3 border-t border-ploy-text-primary/30 pt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-ploy-text-primary/85",
            "aria-label":
              "Illustration of energy flowing from the mobile unit to an electric vehicle",
            children: [
              r.jsx("span", { children: "Mobile unit" }),
              r.jsx("span", {
                className:
                  "relative h-[3px] flex-1 overflow-hidden rounded-full bg-ploy-text-primary/25",
                children: r.jsx("span", {
                  className:
                    "energy-flow absolute inset-y-0 left-0 w-1/3 rounded-full bg-ploy-accent-secondary"
                })
              }),
              r.jsx("span", {
                className: "size-1.5 rounded-full bg-ploy-accent-secondary"
              }),
              r.jsx("span", { children: "EV" })
            ]
          })
        ]
      }),
      r.jsx("button", {
        type: "button",
        className: "hero__scroll",
        "aria-label": "Scroll to next section",
        onClick: () => {
          var e = document.getElementById("how-it-works");
          e && e.scrollIntoView({ behavior: "smooth" });
        },
        children: r.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 22,
          height: 22,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": true,
          children: r.jsx("path", {
            d:
              "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
          })
        })
      })
    ]
  });
}
const _t = [
  {
    title: "Request",
    copy: "Choose your location and tell us what charging you need.",
    image: "/images/sahel-power-step-request-accra.jpg",
    alt: "Sahel Power technician serving a customer for mobile EV charging in Accra"
  },
  {
    title: "Dispatch",
    copy: "A Sahel Power mobile charging unit is sent to your vehicle.",
    image: "/images/sahel-power-step-dispatch-accra.jpg",
    alt: "Sahel Power mobile charging van on a street in Accra"
  },
  {
    title: "Charge",
    copy: "We connect to your EV, charge it, and help you get moving again.",
    image: "/images/sahel-power-step-charge-accra.jpg",
    alt: "Sahel Power technician charging an EV at the roadside in Accra"
  }
];
function zt() {
  return r.jsx("section", {
    id: "how-it-works",
    className:
      "how-it-works scroll-mt-24 border-t border-ploy-border-primary bg-ploy-background-primary",
    children: r.jsxs("div", {
      className:
        "how-it-works__inner mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-16",
      children: [
        r.jsxs("div", {
          className:
            "how-it-works__header grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12",
          children: [
            r.jsxs("div", {
              children: [
                r.jsx("p", {
                  className:
                    "how-it-works__eyebrow mb-4 text-xs font-medium uppercase tracking-[0.22em] text-ploy-accent-secondary",
                  children: "How it works"
                }),
                r.jsx(R, {
                  level: "h1",
                  className: "how-it-works__title uppercase",
                  children: "Stop searching for a charger. We bring it to you."
                })
              ]
            }),
            r.jsx("p", {
              className:
                "how-it-works__lede max-w-md text-base leading-relaxed text-ploy-text-secondary md:text-lg lg:justify-self-end",
              children:
                "Mobile charging is designed to meet your EV where it is parked or operating."
            })
          ]
        }),
        r.jsx("div", {
          className:
            "how-it-works__steps mt-12 grid gap-6 md:grid-cols-3 md:gap-0",
          children: _t.map(e =>
            r.jsxs(
              "article",
              {
                className: "how-it-works__step",
                children: [
                  r.jsx("div", {
                    className:
                      "how-it-works__step-media aspect-[4/3] overflow-hidden",
                    children: r.jsx("img", {
                      src: e.image,
                      alt: e.alt,
                      className: "h-full w-full object-cover",
                      loading: "lazy"
                    })
                  }),
                  r.jsxs("div", {
                    className: "how-it-works__step-body",
                    children: [
                      r.jsxs("h3", {
                        className: "how-it-works__step-title",
                        children: [
                          r.jsx("span", {
                            className: "how-it-works__step-dot",
                            "aria-hidden": "true"
                          }),
                          e.title
                        ]
                      }),
                      r.jsx("p", {
                        className: "how-it-works__step-copy",
                        children: e.copy
                      })
                    ]
                  })
                ]
              },
              e.title
            )
          )
        })
      ]
    })
  });
}
const Pt = [
  ["EV Drivers", "Charging at home, at work, or where the day takes you."],
  [
    "Apartment Communities",
    "Offer residents EV charging without immediately building permanent stations."
  ],
  [
    "Commercial Fleets",
    "Support company vehicles, deliveries, taxis, and ride-hailing EVs."
  ],
  [
    "Dealerships",
    "Charge inventory, customer vehicles, and demonstration vehicles."
  ],
  [
    "Hotels & Businesses",
    "Add EV charging as an amenity without a full charging station."
  ],
  [
    "Events & Temporary Locations",
    "Bring charging capacity to places that need it for a limited time."
  ]
];
function Et() {
  return r.jsx("section", {
    id: "drivers",
    className:
      "who-we-serve scroll-mt-20 border-t border-ploy-border-primary bg-ploy-background-secondary",
    children: r.jsxs("div", {
      className:
        "who-we-serve__inner mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-16",
      children: [
        r.jsxs("div", {
          className:
            "who-we-serve__header grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12",
          children: [
            r.jsxs("div", {
              children: [
                r.jsx("p", {
                  className:
                    "who-we-serve__eyebrow mb-4 text-xs font-medium uppercase tracking-[0.22em] text-ploy-accent-secondary",
                  children: "Who we serve"
                }),
                r.jsx(R, {
                  level: "h1",
                  className: "who-we-serve__title uppercase",
                  children: "Charging for the way you move."
                })
              ]
            }),
            r.jsx("p", {
              className:
                "who-we-serve__lede max-w-md text-base leading-relaxed text-ploy-text-secondary md:text-lg lg:justify-self-end",
              children:
                "One mobile model, many places where vehicles need power."
            })
          ]
        }),
        r.jsxs("div", {
          className:
            "who-we-serve__body mt-12 grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-16",
          children: [
            r.jsxs("figure", {
              className:
                "who-we-serve__figure overflow-hidden rounded-card border border-ploy-border-primary",
              children: [
                r.jsx("img", {
                  src: "/images/sahel-power-audiences-parking-accra.jpg",
                  alt:
                    "Sahel Power technician charging a customer EV in a parking lot in Accra",
                  className:
                    "h-full min-h-[360px] w-full object-cover lg:min-h-[520px]",
                  loading: "lazy"
                }),
                r.jsx("figcaption", {
                  className: "sr-only",
                  children:
                    "Mobile charging at a residential and business development."
                })
              ]
            }),
            r.jsx("div", {
              className: "who-we-serve__grid grid grid-cols-1 sm:grid-cols-2",
              children: Pt.map(([e, t]) =>
                r.jsxs(
                  "article",
                  {
                    className: "who-we-serve__card",
                    children: [
                      r.jsx("h3", {
                        className: "who-we-serve__card-title",
                        children: e
                      }),
                      r.jsx("p", {
                        className: "who-we-serve__card-copy",
                        children: t
                      })
                    ]
                  },
                  e
                )
              )
            })
          ]
        })
      ]
    })
  });
}
const At = [
  "Corporate fleets",
  "Ride-hailing vehicles",
  "Delivery vehicles",
  "Rental fleets",
  "Logistics companies",
  "Government & institutional vehicles"
];
function Rt() {
  return r.jsx("section", {
    id: "fleet",
    className:
      "fleet scroll-mt-20 border-t border-ploy-border-primary bg-ploy-background-primary",
    children: r.jsxs("div", {
      className:
        "fleet__layout grid w-full lg:min-h-[720px] lg:grid-cols-2 lg:items-stretch",
      children: [
        r.jsxs("div", {
          className:
            "fleet__copy flex flex-col justify-center px-6 py-20 md:px-12 lg:px-14 lg:py-24 xl:px-20 xl:py-28",
          children: [
            r.jsx(R, {
              level: "h1",
              className: "fleet__title uppercase",
              children: "Energy for fleets that cannot afford to stop."
            }),
            r.jsx("p", {
              className:
                "fleet__intro mt-8 text-lg leading-relaxed text-ploy-text-secondary md:text-xl",
              children:
                "Sahel Power is developing scheduled and on-demand mobile charging for electric fleets. Bring energy to the vehicles in your operation instead of routing every vehicle through a fixed station."
            }),
            r.jsx("div", {
              className:
                "fleet__tags mt-10 grid w-full max-w-xl grid-cols-2 gap-x-10 md:max-w-2xl md:gap-x-14",
              children: At.map(e =>
                r.jsx(
                  "span",
                  {
                    className:
                      "border-t border-ploy-border-primary py-4 text-sm text-ploy-text-primary md:py-5 md:text-base",
                    children: e
                  },
                  e
                )
              )
            }),
            r.jsx(T, {
              asChild: !0,
              className: "fleet__cta hero__cta--primary mt-10 w-fit",
              size: "lg",
              children: r.jsx("a", {
                href: "#contact",
                children: "Talk to Our Fleet Team"
              })
            })
          ]
        }),
        r.jsx("div", {
          className:
            "fleet__image relative min-h-[340px] overflow-hidden sm:min-h-[440px] lg:min-h-full",
          children: r.jsx("img", {
            src: "/images/sahel-power-fleet-depot-accra.jpg",
            alt:
              "Sahel Power technicians at an electric fleet depot in Accra",
            loading: "lazy",
            className:
              "absolute inset-0 h-full w-full object-cover object-center"
          })
        })
      ]
    })
  });
}
const Ve = [
  [
    "Deployment",
    "A site must be selected and built",
    "Mobile capacity can be positioned where needed"
  ],
  [
    "Upfront infrastructure",
    "Permanent equipment and site work",
    "Can begin without a permanent station at each site"
  ],
  [
    "Demand",
    "Capacity is committed to one location",
    "Charging can follow observed vehicle demand"
  ],
  [
    "Fleet operations",
    "Vehicles travel to the charger",
    "Charging can meet vehicles at their operating base"
  ],
  [
    "Unserved locations",
    "Access depends on station coverage",
    "Mobile units can serve suitable locations without a charger"
  ],
  [
    "Testing a market",
    "Long-term siting decision made first",
    "Test demand before choosing a permanent hub"
  ]
];
function It() {
  return r.jsx("section", {
    id: "why-mobile",
    className:
      "why-mobile border-t border-ploy-border-primary bg-ploy-background-secondary",
    children: r.jsxs("div", {
      className:
        "why-mobile__inner mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-16",
      children: [
        r.jsxs("div", {
          className:
            "why-mobile__header grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16",
          children: [
            r.jsxs("div", {
              children: [
                r.jsx("p", {
                  className:
                    "why-mobile__eyebrow mb-4 text-xs font-medium uppercase tracking-[0.22em] text-ploy-accent-secondary",
                  children: "Comparison"
                }),
                r.jsx(R, {
                  level: "h1",
                  className: "why-mobile__title uppercase",
                  children: "Why mobile charging?"
                })
              ]
            }),
            r.jsx("p", {
              className:
                "why-mobile__lede text-lg leading-relaxed text-ploy-text-secondary md:text-xl",
              children:
                "Fixed stations will have a role. Mobile charging offers a flexible way to serve demand before every location has one."
            })
          ]
        }),
        r.jsx("div", {
          className: "why-mobile__cards mt-10 grid gap-4 md:hidden",
          children: Ve.map(([e, t, o]) =>
            r.jsxs(
              "article",
              {
                className:
                  "why-mobile__card rounded-card border border-ploy-border-primary bg-ploy-background-primary/60 p-5",
                children: [
                  r.jsx("h3", {
                    className: "font-heading text-lg font-normal",
                    children: e
                  }),
                  r.jsxs("div", {
                    className: "mt-4 grid gap-4",
                    children: [
                      r.jsxs("div", {
                        children: [
                          r.jsx("span", {
                            className:
                              "text-[10px] font-medium uppercase tracking-[0.14em] text-ploy-text-secondary",
                            children: "Fixed infrastructure"
                          }),
                          r.jsx("p", {
                            className:
                              "mt-1.5 text-sm leading-relaxed text-ploy-text-secondary",
                            children: t
                          })
                        ]
                      }),
                      r.jsxs("div", {
                        className:
                          "rounded-sm border border-ploy-accent-secondary/25 bg-ploy-accent-secondary/5 p-3",
                        children: [
                          r.jsx("span", {
                            className:
                              "text-[10px] font-medium uppercase tracking-[0.14em] text-ploy-accent-primary",
                            children: "Sahel Power mobile model"
                          }),
                          r.jsx("p", {
                            className:
                              "mt-1.5 text-sm leading-relaxed text-ploy-text-primary",
                            children: o
                          })
                        ]
                      })
                    ]
                  })
                ]
              },
              e
            )
          )
        }),
        r.jsx("div", {
          className: "why-mobile__table-wrap mt-12 hidden md:block",
          children: r.jsxs("table", {
            className: "why-mobile__table w-full border-collapse text-left",
            children: [
              r.jsx("thead", {
                children: r.jsxs("tr", {
                  children: [
                    r.jsx("th", {
                      scope: "col",
                      className: "why-mobile__th why-mobile__th--topic",
                      children: "Consideration"
                    }),
                    r.jsx("th", {
                      scope: "col",
                      className: "why-mobile__th why-mobile__th--fixed",
                      children: "Fixed infrastructure"
                    }),
                    r.jsx("th", {
                      scope: "col",
                      className: "why-mobile__th why-mobile__th--mobile",
                      children: "Sahel Power mobile model"
                    })
                  ]
                })
              }),
              r.jsx("tbody", {
                children: Ve.map(([e, t, o]) =>
                  r.jsxs(
                    "tr",
                    {
                      className: "why-mobile__row",
                      children: [
                        r.jsx("th", {
                          scope: "row",
                          className: "why-mobile__topic",
                          children: e
                        }),
                        r.jsx("td", {
                          className: "why-mobile__cell why-mobile__cell--fixed",
                          children: t
                        }),
                        r.jsx("td", {
                          className:
                            "why-mobile__cell why-mobile__cell--mobile",
                          children: o
                        })
                      ]
                    },
                    e
                  )
                )
              })
            ]
          })
        }),
        r.jsx("blockquote", {
          className: "why-mobile__pullquote mt-14 md:mt-16",
          children: r.jsx("p", {
            children:
              "Infrastructure should follow demand, not guess where demand will appear."
          })
        })
      ]
    })
  });
}
const Me = [
  "Mobile Charging",
  "Charging Demand Data",
  "Fleet Partnerships",
  "Permanent Charging Hubs",
  "Distributed Energy Network"
];
function Tt() {
  return r.jsx("section", {
    id: "about",
    className:
      "network-vision scroll-mt-20 border-t border-ploy-border-primary bg-ploy-background-primary",
    children: r.jsxs("div", {
      className:
        "network-vision__inner mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-16",
      children: [
        r.jsxs("div", {
          className:
            "network-vision__header grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16 xl:gap-24",
          children: [
            r.jsxs("div", {
              children: [
                r.jsx("p", {
                  className:
                    "network-vision__eyebrow mb-4 text-xs font-medium uppercase tracking-[0.22em] text-ploy-accent-secondary",
                  children: "Network vision"
                }),
                r.jsx(R, {
                  level: "h1",
                  className: "network-vision__title uppercase",
                  children: "We're building more than charging vans."
                })
              ]
            }),
            r.jsxs("div", {
              className:
                "network-vision__copy text-lg leading-relaxed text-ploy-text-secondary md:text-xl",
              children: [
                r.jsx("p", {
                  children:
                    "Every future charging session can help reveal where EV energy demand is growing. Sahel Power intends to use that evidence to guide fleet partnerships and the placement of permanent charging hubs."
                }),
                r.jsx("p", {
                  className: "mt-5 font-medium text-ploy-text-primary",
                  children:
                    "Mobile first. Permanent where the demand makes sense."
                })
              ]
            })
          ]
        }),
        r.jsx("ol", {
          className: "network-vision__stages mt-14 md:mt-16",
          children: Me.map((e, t) =>
            r.jsxs(
              "li",
              {
                className: "network-vision__stage",
                children: [
                  r.jsx("span", {
                    className: "network-vision__stage-index",
                    "aria-hidden": "true",
                    children: String(t + 1).padStart(2, "0")
                  }),
                  r.jsx("span", {
                    className: "network-vision__stage-bar",
                    "aria-hidden": "true"
                  }),
                  r.jsx("span", {
                    className: "network-vision__stage-label",
                    children: e
                  }),
                  t < Me.length - 1
                    ? r.jsx("span", {
                        className: "network-vision__stage-node",
                        "aria-hidden": "true"
                      })
                    : null
                ]
              },
              e
            )
          )
        }),
        r.jsx("p", {
          className:
            "network-vision__disclaimer mt-8 max-w-2xl text-sm leading-relaxed text-ploy-text-secondary md:text-base",
          children:
            "A proposed path for the network, not a claim that every stage is operating today."
        })
      ]
    })
  });
}
function Vt() {
  return r.jsx("section", {
    id: "ghana",
    className:
      "ghana border-t border-ploy-border-primary bg-ploy-background-secondary",
    children: r.jsxs("div", {
      className:
        "ghana__inner mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-16",
      children: [
        r.jsxs("div", {
          className:
            "ghana__header grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16 xl:gap-24",
          children: [
            r.jsxs("div", {
              children: [
                r.jsx("p", {
                  className:
                    "ghana__eyebrow mb-4 text-xs font-medium uppercase tracking-[0.22em] text-ploy-accent-secondary",
                  children: "Launching in Ghana"
                }),
                r.jsx(R, {
                  level: "h1",
                  className: "ghana__title uppercase",
                  children: "Built for Ghana's electric future."
                })
              ]
            }),
            r.jsxs("div", {
              className:
                "ghana__panel rounded-card border border-ploy-border-primary bg-ploy-background-primary/50 p-6 md:p-8 lg:p-9",
              children: [
                r.jsx("p", {
                  className:
                    "ghana__lead font-heading text-xl font-normal leading-relaxed text-ploy-text-primary md:text-2xl md:leading-snug",
                  children:
                    "Ghana is where Sahel Power plans to begin building a mobile charging network shaped by how people and fleets actually use electric vehicles."
                }),
                r.jsx("p", {
                  className:
                    "ghana__body mt-6 text-base leading-relaxed text-ploy-text-secondary md:text-lg",
                  children:
                    "As the service develops, Sahel Power intends to work within Ghana's emerging EV charging framework and with relevant authorities, including the Energy Commission, to meet applicable safety, technical, certification, and operating requirements."
                }),
                r.jsx("p", {
                  className:
                    "ghana__disclaimer mt-6 border-l-2 border-ploy-accent-primary/80 pl-4 text-sm leading-relaxed text-ploy-text-secondary md:text-base",
                  children:
                    "This is a statement of intent, not a claim of regulatory approval."
                })
              ]
            })
          ]
        })
      ]
    })
  });
}
const Mt = [
    "Request charging",
    "Select a location",
    "Track the vehicle",
    "See estimated arrival",
    "Monitor progress",
    "View battery percentage",
    "Pay digitally",
    "See charging history"
  ],
  Gt = [
    "Fleet dashboard",
    "Vehicle charging status",
    "Scheduled charging",
    "Energy consumption",
    "Charging history",
    "Fleet analytics"
  ];
function Ot() {
  return r.jsx("section", {
    id: "technology",
    className:
      "technology border-t border-ploy-border-primary bg-ploy-background-primary py-20 md:py-28",
    children: r.jsxs("div", {
      className: "mx-auto max-w-[1560px] px-5 md:px-8 lg:px-12",
      children: [
        r.jsxs("div", {
          className: "mb-12 grid gap-6 md:grid-cols-2",
          children: [
            r.jsxs("div", {
              children: [
                r.jsx("p", {
                  className:
                    "mb-5 text-xs uppercase tracking-[0.18em] text-ploy-accent-primary",
                  children: "Proposed digital experience"
                }),
                r.jsx(R, {
                  className: "technology__title max-w-2xl uppercase",
                  children: "Charging infrastructure powered by software."
                })
              ]
            }),
            r.jsx("p", {
              className: "max-w-lg self-end text-base text-ploy-text-secondary",
              children:
                "The planned customer experience connects a charging request with dispatch, status, payment, and a record of energy delivered. Fleet operators would have their own operational view."
            })
          ]
        }),
        r.jsxs("div", {
          className: "grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.1fr]",
          children: [
            r.jsxs("article", {
              className:
                "rounded-card border border-ploy-border-primary bg-ploy-background-secondary p-6 md:p-9",
              children: [
                r.jsxs("div", {
                  className: "mb-8 flex items-center justify-between",
                  children: [
                    r.jsx("h3", {
                      className: "font-heading text-xl font-normal",
                      children: "For drivers"
                    }),
                    r.jsx("span", {
                      className: "text-xs text-ploy-text-secondary",
                      children: "Interface concept"
                    })
                  ]
                }),
                r.jsx("img", {
                  src: "/images/sahel-power-driver-app-interface-concept.jpg",
                  alt:
                    "Sahel Power mobile app interface concept showing charging request details in Accra",
                  className:
                    "mx-auto block w-full max-w-[300px] h-auto shadow-xl",
                  loading: "lazy",
                  decoding: "async"
                }),
                r.jsx("ul", {
                  className:
                    "mt-9 grid grid-cols-2 gap-x-4 text-xs text-ploy-text-secondary",
                  children: Mt.map(e =>
                    r.jsx(
                      "li",
                      {
                        className: "border-t border-ploy-border-primary py-2.5",
                        children: e
                      },
                      e
                    )
                  )
                })
              ]
            }),
            r.jsxs("article", {
              className:
                "rounded-card border border-ploy-border-primary bg-ploy-background-secondary p-6 md:p-9",
              children: [
                r.jsxs("div", {
                  className: "mb-8 flex items-center justify-between",
                  children: [
                    r.jsx("h3", {
                      className: "font-heading text-xl font-normal",
                      children: "For fleets"
                    }),
                    r.jsx("span", {
                      className: "text-xs text-ploy-text-secondary",
                      children: "Dashboard concept"
                    })
                  ]
                }),
                r.jsxs("div", {
                  className:
                    "rounded-sm border border-ploy-border-primary bg-ploy-background-primary p-5 md:p-7",
                  children: [
                    r.jsxs("div", {
                      className:
                        "flex items-center justify-between border-b border-ploy-border-primary pb-5",
                      children: [
                        r.jsxs("div", {
                          children: [
                            r.jsx("span", {
                              className: "text-xs text-ploy-text-secondary",
                              children: "Sahel Power / Fleet"
                            }),
                            r.jsx("div", {
                              className: "mt-2 font-heading text-lg",
                              children: "Charging overview"
                            })
                          ]
                        }),
                        r.jsx("span", {
                          className:
                            "size-2 rounded-full bg-ploy-accent-secondary"
                        })
                      ]
                    }),
                    r.jsx("div", {
                      className: "mt-6 grid gap-3 sm:grid-cols-3",
                      children: [
                        ["Scheduled", "Charging windows"],
                        ["Vehicles", "Charging status"],
                        ["Energy", "Consumption view"]
                      ].map(([e, t]) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "rounded-sm border border-ploy-border-primary bg-ploy-background-secondary p-4",
                            children: [
                              r.jsx("div", {
                                className: "text-xs text-ploy-text-secondary",
                                children: e
                              }),
                              r.jsx("div", {
                                className: "mt-8 text-sm",
                                children: t
                              }),
                              r.jsx("div", {
                                className:
                                  "mt-4 h-1 w-2/3 rounded-full bg-ploy-accent-primary"
                              })
                            ]
                          },
                          e
                        )
                      )
                    }),
                    r.jsx("div", {
                      className:
                        "mt-6 flex h-24 items-end gap-2 border-b border-ploy-border-primary pb-3",
                      "aria-label": "Illustrative energy consumption chart",
                      children: [
                        36,
                        64,
                        46,
                        80,
                        57,
                        92,
                        68,
                        83,
                        54,
                        72,
                        61,
                        89
                      ].map((e, t) =>
                        r.jsx(
                          "div",
                          {
                            className: "flex-1 bg-ploy-accent-primary/70",
                            style: { height: `${e}%` }
                          },
                          t
                        )
                      )
                    }),
                    r.jsx("div", {
                      className: "mt-3 text-[10px] text-ploy-text-secondary",
                      children: "Illustrative data only"
                    })
                  ]
                }),
                r.jsx("ul", {
                  className:
                    "mt-8 grid grid-cols-2 gap-x-4 text-xs text-ploy-text-secondary",
                  children: Gt.map(e =>
                    r.jsx(
                      "li",
                      {
                        className: "border-t border-ploy-border-primary py-2.5",
                        children: e
                      },
                      e
                    )
                  )
                })
              ]
            })
          ]
        })
      ]
    })
  });
}
const Lt = [
  "Property developers",
  "Apartment operators",
  "Fleet companies",
  "EV dealerships",
  "Auto manufacturers",
  "Energy companies",
  "Financial institutions",
  "Government institutions",
  "Hotels and malls",
  "Investors"
];
function Ft() {
  return r.jsx("section", {
    id: "partners",
    className:
      "partnerships scroll-mt-20 border-t border-ploy-border-primary bg-ploy-background-secondary",
    children: r.jsxs("div", {
      id: "businesses",
      className:
        "partnerships__inner mx-auto max-w-[90rem] scroll-mt-20 px-5 py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-16",
      children: [
        r.jsxs("div", {
          className:
            "partnerships__header grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16 xl:gap-24",
          children: [
            r.jsxs("div", {
              children: [
                r.jsx("p", {
                  className:
                    "partnerships__eyebrow mb-4 text-xs font-medium uppercase tracking-[0.22em] text-ploy-accent-secondary",
                  children: "Work with Sahel Power"
                }),
                r.jsx(R, {
                  level: "h1",
                  className: "partnerships__title uppercase",
                  children: "Build Ghana's EV infrastructure with us."
                })
              ]
            }),
            r.jsxs("div", {
              className: "partnerships__cta-block max-w-md lg:justify-self-end",
              children: [
                r.jsx("p", {
                  className:
                    "partnerships__lede text-base leading-relaxed text-ploy-text-secondary md:text-lg",
                  children:
                    "The charging network will take property, mobility, energy, and capital partners working together."
                }),
                r.jsx(T, {
                  asChild: !0,
                  size: "lg",
                  className: "partnerships__cta hero__cta--primary mt-8 w-fit",
                  children: r.jsx("a", {
                    href: "#contact",
                    children: "Become a Partner"
                  })
                })
              ]
            })
          ]
        }),
        r.jsx("div", {
          className: "partnerships__grid mt-12 md:mt-16",
          children: Lt.map(e =>
            r.jsx(
              "article",
              {
                className: "partnerships__card",
                children: r.jsx("h3", {
                  className: "partnerships__card-title",
                  children: e
                })
              },
              e
            )
          )
        })
      ]
    })
  });
}
function Wt() {
  return r.jsx("section", {
    id: "vision",
    className:
      "investor-vision border-t border-ploy-border-primary bg-ploy-background-primary",
    children: r.jsxs("div", {
      className:
        "investor-vision__inner mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-16",
      children: [
        r.jsxs("div", {
          className:
            "investor-vision__layout grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20",
          children: [
            r.jsxs("div", {
              children: [
                r.jsx("p", {
                  className:
                    "investor-vision__eyebrow mb-4 text-xs font-medium uppercase tracking-[0.22em] text-ploy-accent-secondary",
                  children: "The long view"
                }),
                r.jsx(R, {
                  level: "h1",
                  className: "investor-vision__title uppercase",
                  children:
                    "The charging network can move before it becomes permanent."
                }),
                r.jsx("p", {
                  className:
                    "investor-vision__body mt-8 text-base leading-relaxed text-ploy-text-secondary md:text-lg",
                  children:
                    "Mobile charging could help Sahel Power enter new areas, learn where real demand develops, build customer relationships, and make better-informed choices about future permanent infrastructure."
                }),
                r.jsx("p", {
                  className:
                    "investor-vision__body mt-5 text-sm leading-relaxed text-ploy-text-secondary md:text-base",
                  children:
                    "The aim is a distributed EV charging and energy network, starting in Ghana and designed for other African markets over time."
                })
              ]
            }),
            r.jsxs("figure", {
              className:
                "investor-vision__map overflow-hidden rounded-card border border-ploy-border-primary bg-ploy-background-secondary",
              children: [
                r.jsxs("div", {
                  className:
                    "investor-vision__map-canvas relative aspect-[32/17] overflow-hidden bg-ploy-neutral-inverse",
                  role: "img",
                  "aria-label":
                    "Geographic map of Accra showing its real coastline, streets, and neighborhoods, with four hypothetical interest points. This is not customer or operational data.",
                  children: [
                    r.jsx("img", {
                      src: "/images/accra-openstreetmap.webp",
                      alt: "",
                      loading: "lazy",
                      className:
                        "absolute inset-0 h-full w-full object-cover [filter:grayscale(0.35)_saturate(0.7)_contrast(0.88)_brightness(1.08)]"
                    }),
                    r.jsxs("div", {
                      className:
                        "absolute left-3 top-3 rounded-sm bg-white px-3 py-2 text-ploy-text-inverse shadow-sm md:left-5 md:top-5 md:px-4 md:py-3",
                      children: [
                        r.jsx("span", {
                          className:
                            "block font-heading text-sm leading-tight md:text-base",
                          children: "Greater Accra"
                        }),
                        r.jsx("span", {
                          className:
                            "block text-[10px] leading-tight text-ploy-text-inverse-secondary md:text-xs",
                          children: "Illustrative demand mapping concept"
                        })
                      ]
                    }),
                    [
                      [45, 73],
                      [54, 50],
                      [54, 37],
                      [89, 27]
                    ].map(([e, t], o) =>
                      r.jsx(
                        "span",
                        {
                          className:
                            "absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-ploy-neutral-dark bg-ploy-accent-secondary shadow-sm md:size-5",
                          style: { left: e + "%", top: t + "%" }
                        },
                        o
                      )
                    ),
                    r.jsxs("span", {
                      className:
                        "absolute bottom-2 left-2 flex items-center gap-1.5 rounded-sm bg-white/95 px-2 py-1 text-[10px] font-medium text-ploy-text-inverse md:bottom-3 md:left-3 md:gap-2 md:px-3 md:py-2 md:text-xs",
                      children: [
                        r.jsx("i", {
                          className:
                            "size-2 rounded-full bg-ploy-accent-secondary ring-1 ring-ploy-neutral-dark"
                        }),
                        " Hypothetical interest"
                      ]
                    }),
                    r.jsx("a", {
                      href: "https://www.openstreetmap.org/copyright",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "absolute bottom-2 right-2 rounded-sm bg-white/95 px-2 py-1 text-[10px] text-ploy-text-inverse underline underline-offset-2 md:bottom-3 md:right-3",
                      children: "© OpenStreetMap contributors"
                    })
                  ]
                }),
                r.jsx("figcaption", {
                  className:
                    "investor-vision__caption px-5 py-4 text-xs leading-relaxed text-ploy-text-secondary md:px-6 md:text-sm",
                  children:
                    "Geography and streets are based on OpenStreetMap. Lime markers are fictional examples, not charging sessions, customers, or confirmed locations."
                })
              ]
            })
          ]
        })
      ]
    })
  });
}
async function qt(e, t) {
  const o = await fetch("/_ploy/form-submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      formName: e,
      pageUrl: window.location.href,
      data: t
    }),
    keepalive: !0
  });
  if (!o.ok) throw new Error(`Form submission failed (${o.status})`);
  return { ok: !0 };
}
function $t() {
  const [e, t] = y.useState("idle");
  async function o(s) {
    s.preventDefault();
    const a = s.currentTarget,
      n = Object.fromEntries(new FormData(a).entries());
    t("submitting");
    try {
      await qt("sahel-power-enquiry", n), t("success"), a.reset();
    } catch {
      t("error");
    }
  }
  return r.jsx("section", {
    id: "contact",
    className: "contact scroll-mt-20 border-t border-ploy-border-primary",
    children: r.jsx("div", {
      className:
        "contact__inner mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-16",
      children: r.jsxs("div", {
        className: "contact__card",
        children: [
          r.jsx("span", {
            "aria-hidden": "true",
            className: "contact__accent contact__accent--primary"
          }),
          r.jsx("span", {
            "aria-hidden": "true",
            className: "contact__accent contact__accent--secondary"
          }),
          r.jsxs("div", {
            className: "contact__layout",
            children: [
              r.jsxs("div", {
                className: "contact__copy",
                children: [
                  r.jsx("p", {
                    className: "contact__eyebrow",
                    children: "The next move starts here"
                  }),
                  r.jsx(R, {
                    className: "contact__title uppercase",
                    children:
                      "Wherever the road takes you, power should be within reach."
                  }),
                  r.jsx("p", {
                    className: "contact__lede",
                    children:
                      "Interested in charging, fleet services, or building the network together? Tell us what you need. Sahel Power is launching in Ghana."
                  }),
                  r.jsxs("div", {
                    className: "contact__actions",
                    children: [
                      r.jsx(T, {
                        asChild: !0,
                        size: "lg",
                        className: "contact__cta hero__cta--primary",
                        children: r.jsx("a", {
                          href: "#enquiry-form",
                          children: "Request a Charge"
                        })
                      }),
                      r.jsx(T, {
                        asChild: !0,
                        size: "lg",
                        variant: "secondary",
                        className: "contact__cta hero__cta--secondary",
                        children: r.jsx("a", {
                          href: "#enquiry-form",
                          children: "Partner With Sahel Power"
                        })
                      })
                    ]
                  })
                ]
              }),
              r.jsxs("div", {
                id: "enquiry-form",
                className: "contact__form-panel scroll-mt-24",
                children: [
                  r.jsx("h3", {
                    className: "contact__form-title",
                    children: "Get in touch"
                  }),
                  r.jsx("p", {
                    className: "contact__form-lede",
                    children: "Share a little about your request."
                  }),
                  r.jsxs("form", {
                    onSubmit: o,
                    className: "contact__form",
                    children: [
                      r.jsxs("label", {
                        className: "contact__field",
                        children: [
                          "Name",
                          r.jsx("input", {
                            required: !0,
                            name: "name",
                            autoComplete: "name",
                            placeholder: "Your name",
                            className: "contact__input"
                          })
                        ]
                      }),
                      r.jsxs("label", {
                        className: "contact__field",
                        children: [
                          "Email",
                          r.jsx("input", {
                            required: !0,
                            type: "email",
                            name: "email",
                            autoComplete: "email",
                            placeholder: "you@company.com",
                            className: "contact__input"
                          })
                        ]
                      }),
                      r.jsxs("label", {
                        className: "contact__field",
                        children: [
                          "I'm interested in",
                          r.jsxs("select", {
                            required: !0,
                            name: "interest",
                            defaultValue: "",
                            className: "contact__input contact__select",
                            children: [
                              r.jsx("option", {
                                value: "",
                                disabled: !0,
                                children: "Select an enquiry"
                              }),
                              r.jsx("option", { children: "Request a charge" }),
                              r.jsx("option", { children: "Fleet charging" }),
                              r.jsx("option", { children: "Partnership" }),
                              r.jsx("option", { children: "Careers" }),
                              r.jsx("option", { children: "Something else" })
                            ]
                          })
                        ]
                      }),
                      r.jsxs("label", {
                        className: "contact__field",
                        children: [
                          "Location or organization",
                          r.jsx("input", {
                            name: "locationOrOrganization",
                            placeholder: "Where are you based?",
                            className: "contact__input"
                          })
                        ]
                      }),
                      r.jsxs("label", {
                        className: "contact__field",
                        children: [
                          "Message",
                          r.jsx("textarea", {
                            required: !0,
                            name: "message",
                            rows: 4,
                            placeholder: "Tell us about your charging need",
                            className: "contact__input contact__textarea"
                          })
                        ]
                      }),
                      r.jsx(T, {
                        disabled: e === "submitting",
                        type: "submit",
                        size: "lg",
                        className:
                          "contact__submit hero__cta--primary w-full",
                        children:
                          e === "submitting" ? "Sending..." : "Send Enquiry"
                      }),
                      r.jsx("p", {
                        role: "status",
                        "aria-live": "polite",
                        className: "contact__status",
                        children:
                          e === "success"
                            ? "Thank you. Your enquiry has been received."
                            : e === "error"
                            ? "We couldn't send your enquiry. Please try again."
                            : ""
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    })
  });
}
function Ht() {
  return r.jsxs(r.Fragment, {
    children: [
      r.jsxs("main", {
        className:
          "home relative min-h-screen bg-ploy-background-primary text-ploy-text-primary",
        children: [
          r.jsx(vt, {}),
          r.jsx(St, {}),
          r.jsx(zt, {}),
          r.jsx(Et, {}),
          r.jsx(Rt, {}),
          r.jsx(It, {}),
          r.jsx(Tt, {}),
          r.jsx(Vt, {}),
          r.jsx(Ot, {}),
          r.jsx(Ft, {}),
          r.jsx(Wt, {}),
          r.jsx($t, {})
        ]
      }),
      r.jsx(kt, {})
    ]
  });
}
export { Ht as HomePage };
