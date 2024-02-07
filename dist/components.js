var F = Object.defineProperty;
var G = (e, t, n) => t in e ? F(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var a = (e, t, n) => (G(e, typeof t != "symbol" ? t + "" : t, n), n);
function _() {
}
function U(e) {
  return e();
}
function I() {
  return /* @__PURE__ */ Object.create(null);
}
function x(e) {
  e.forEach(U);
}
function W(e) {
  return typeof e == "function";
}
function L(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function K(e) {
  return Object.keys(e).length === 0;
}
function h(e, t) {
  e.appendChild(t);
}
function k(e, t, n) {
  e.insertBefore(t, n || null);
}
function w(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function m(e) {
  return document.createElement(e);
}
function d(e) {
  return document.createTextNode(e);
}
function Q() {
  return d(" ");
}
function q(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function z(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function X(e) {
  return Array.from(e.childNodes);
}
function N(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function J(e, t) {
  e.value = t ?? "";
}
function Y(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let S;
function y(e) {
  S = e;
}
const b = [], R = [];
let g = [];
const V = [], Z = /* @__PURE__ */ Promise.resolve();
let A = !1;
function tt() {
  A || (A = !0, Z.then(O));
}
function C(e) {
  g.push(e);
}
const j = /* @__PURE__ */ new Set();
let p = 0;
function O() {
  if (p !== 0)
    return;
  const e = S;
  do {
    try {
      for (; p < b.length; ) {
        const t = b[p];
        p++, y(t), et(t.$$);
      }
    } catch (t) {
      throw b.length = 0, p = 0, t;
    }
    for (y(null), b.length = 0, p = 0; R.length; )
      R.pop()();
    for (let t = 0; t < g.length; t += 1) {
      const n = g[t];
      j.has(n) || (j.add(n), n());
    }
    g.length = 0;
  } while (b.length);
  for (; V.length; )
    V.pop()();
  A = !1, j.clear(), y(e);
}
function et(e) {
  if (e.fragment !== null) {
    e.update(), x(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(C);
  }
}
function nt(e) {
  const t = [], n = [];
  g.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), g = t;
}
const st = /* @__PURE__ */ new Set();
function it(e, t) {
  e && e.i && (st.delete(e), e.i(t));
}
function rt(e, t, n) {
  const { fragment: s, after_update: c } = e.$$;
  s && s.m(t, n), C(() => {
    const o = e.$$.on_mount.map(U).filter(W);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : x(o), e.$$.on_mount = [];
  }), c.forEach(C);
}
function ct(e, t) {
  const n = e.$$;
  n.fragment !== null && (nt(n.after_update), x(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ot(e, t) {
  e.$$.dirty[0] === -1 && (b.push(e), tt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function v(e, t, n, s, c, o, i = null, r = [-1]) {
  const $ = S;
  y(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: _,
    not_equal: c,
    bound: I(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || ($ ? $.$$.context : [])),
    // everything else
    callbacks: I(),
    dirty: r,
    skip_bound: !1,
    root: t.target || $.$$.root
  };
  i && i(u.root);
  let f = !1;
  if (u.ctx = n ? n(e, t.props || {}, (l, H, ...M) => {
    const T = M.length ? M[0] : H;
    return u.ctx && c(u.ctx[l], u.ctx[l] = T) && (!u.skip_bound && u.bound[l] && u.bound[l](T), f && ot(e, l)), H;
  }) : [], u.update(), f = !0, x(u.before_update), u.fragment = s ? s(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = X(t.target);
      u.fragment && u.fragment.l(l), l.forEach(w);
    } else
      u.fragment && u.fragment.c();
    t.intro && it(e.$$.fragment), rt(e, t.target, t.anchor), O();
  }
  y($);
}
let D;
typeof HTMLElement == "function" && (D = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    a(this, "$$ctor");
    /** Slots */
    a(this, "$$s");
    /** The Svelte component instance */
    a(this, "$$c");
    /** Whether or not the custom element is connected */
    a(this, "$$cn", !1);
    /** Component props data */
    a(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    a(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    a(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    a(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    a(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const c = this.$$c.$on(t, n);
      this.$$l_u.set(n, c);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const c = this.$$l_u.get(n);
      c && (c(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(i) {
        return () => {
          let r;
          return {
            c: function() {
              r = m("slot"), i !== "default" && z(r, "name", i);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, l) {
              k(f, r, l);
            },
            d: function(f) {
              f && w(r);
            }
          };
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const s = {}, c = Y(this);
      for (const i of this.$$s)
        i in c && (s[i] = [n(i)]);
      for (const i of this.attributes) {
        const r = this.$$g_p(i.name);
        r in this.$$d || (this.$$d[r] = E(r, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: s,
          $$scope: {
            ctx: []
          }
        }
      });
      const o = () => {
        this.$$r = !0;
        for (const i in this.$$p_d)
          if (this.$$d[i] = this.$$c.$$.ctx[this.$$c.$$.props[i]], this.$$p_d[i].reflect) {
            const r = E(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            r == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, r);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const i in this.$$l)
        for (const r of this.$$l[i]) {
          const $ = this.$$c.$on(i, r);
          this.$$l_u.set(r, $);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var c;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = E(t, s, this.$$p_d, "toProp"), (c = this.$$c) == null || c.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function E(e, t, n, s) {
  var o;
  const c = (o = n[e]) == null ? void 0 : o.type;
  if (t = c === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (c) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (c) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function P(e, t, n, s, c, o) {
  let i = class extends D {
    constructor() {
      super(e, n, c), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (r) => (t[r].attribute || r).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((r) => {
    Object.defineProperty(i.prototype, r, {
      get() {
        return this.$$c && r in this.$$c ? this.$$c[r] : this.$$d[r];
      },
      set($) {
        var u;
        $ = E(r, $, t), this.$$d[r] = $, (u = this.$$c) == null || u.$set({ [r]: $ });
      }
    });
  }), s.forEach((r) => {
    Object.defineProperty(i.prototype, r, {
      get() {
        var $;
        return ($ = this.$$c) == null ? void 0 : $[r];
      }
    });
  }), o && (i = o(i)), e.element = /** @type {any} */
  i, i;
}
class B {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    a(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    a(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ct(this, 1), this.$destroy = _;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!W(n))
      return _;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const c = s.indexOf(n);
      c !== -1 && s.splice(c, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !K(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ut = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ut);
function $t(e) {
  let t, n, s, c, o;
  return {
    c() {
      t = m("main"), n = m("h1"), s = d("Hello "), c = d(
        /*name*/
        e[0]
      ), o = d("!");
    },
    m(i, r) {
      k(i, t, r), h(t, n), h(n, s), h(n, c), h(n, o);
    },
    p(i, [r]) {
      r & /*name*/
      1 && N(
        c,
        /*name*/
        i[0]
      );
    },
    i: _,
    o: _,
    d(i) {
      i && w(t);
    }
  };
}
function lt(e, t, n) {
  let { name: s = "World" } = t;
  return e.$$set = (c) => {
    "name" in c && n(0, s = c.name);
  }, [s];
}
class ft extends B {
  constructor(t) {
    super(), v(this, t, lt, $t, L, { name: 0 });
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(t) {
    this.$$set({ name: t }), O();
  }
}
customElements.define("my-hello", P(ft, { name: {} }, [], [], !0));
function at(e) {
  let t, n, s, c, o;
  return {
    c() {
      t = m("button"), n = d("count is "), s = d(
        /*count*/
        e[0]
      );
    },
    m(i, r) {
      k(i, t, r), h(t, n), h(t, s), c || (o = q(
        t,
        "click",
        /*increment*/
        e[1]
      ), c = !0);
    },
    p(i, [r]) {
      r & /*count*/
      1 && N(
        s,
        /*count*/
        i[0]
      );
    },
    i: _,
    o: _,
    d(i) {
      i && w(t), c = !1, o();
    }
  };
}
function ht(e, t, n) {
  let s = 0;
  return [s, () => {
    n(0, s += 1);
  }];
}
class dt extends B {
  constructor(t) {
    super(), v(this, t, ht, at, L, {});
  }
}
customElements.define("my-counter", P(dt, {}, [], [], !0));
function _t(e) {
  let t, n, s, c, o, i, r, $, u;
  return {
    c() {
      t = m("div"), n = m("h1"), s = d("Hello "), c = d(
        /*name*/
        e[0]
      ), o = d("!"), i = Q(), r = m("input"), z(r, "type", "text");
    },
    m(f, l) {
      k(f, t, l), h(t, n), h(n, s), h(n, c), h(n, o), h(t, i), h(t, r), J(
        r,
        /*name*/
        e[0]
      ), $ || (u = q(
        r,
        "input",
        /*input_input_handler*/
        e[1]
      ), $ = !0);
    },
    p(f, [l]) {
      l & /*name*/
      1 && N(
        c,
        /*name*/
        f[0]
      ), l & /*name*/
      1 && r.value !== /*name*/
      f[0] && J(
        r,
        /*name*/
        f[0]
      );
    },
    i: _,
    o: _,
    d(f) {
      f && w(t), $ = !1, u();
    }
  };
}
function mt(e, t, n) {
  let { name: s = "Peter" } = t;
  function c() {
    s = this.value, n(0, s);
  }
  return e.$$set = (o) => {
    "name" in o && n(0, s = o.name);
  }, [s, c];
}
class pt extends B {
  constructor(t) {
    super(), v(this, t, mt, _t, L, { name: 0 });
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(t) {
    this.$$set({ name: t }), O();
  }
}
customElements.define("my-sayhello", P(pt, { name: {} }, [], [], !0));
//# sourceMappingURL=components.js.map
