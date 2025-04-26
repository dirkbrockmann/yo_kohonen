(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._neuron_1czyw_1{fill:#fff;stroke:#000;stroke-width:.5px}._synapse_1czyw_7{fill:none;stroke:#000;stroke-width:.5px}._boundary_1czyw_13{stroke:#8b0000;stroke-width:2px;fill:none}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Gi = {
  display_type: "svg",
  debug: !1,
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  display_margin: 5,
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
};
function en(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ui(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Er(t) {
  let n, e, r;
  t.length !== 2 ? (n = en, e = (s, u) => en(t(s), u), r = (s, u) => t(s) - u) : (n = t === en || t === Ui ? t : Yi, e = t, r = t);
  function i(s, u, l = 0, f = s.length) {
    if (l < f) {
      if (n(u, u) !== 0) return f;
      do {
        const c = l + f >>> 1;
        e(s[c], u) < 0 ? l = c + 1 : f = c;
      } while (l < f);
    }
    return l;
  }
  function o(s, u, l = 0, f = s.length) {
    if (l < f) {
      if (n(u, u) !== 0) return f;
      do {
        const c = l + f >>> 1;
        e(s[c], u) <= 0 ? l = c + 1 : f = c;
      } while (l < f);
    }
    return l;
  }
  function a(s, u, l = 0, f = s.length) {
    const c = i(s, u, l, f - 1);
    return c > l && r(s[c - 1], u) > -r(s[c], u) ? c - 1 : c;
  }
  return { left: i, center: a, right: o };
}
function Yi() {
  return 0;
}
function Ki(t) {
  return t === null ? NaN : +t;
}
const Vi = Er(en), Zi = Vi.right;
Er(Ki).center;
const Wi = Math.sqrt(50), Ji = Math.sqrt(10), Qi = Math.sqrt(2);
function ln(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Wi ? 10 : o >= Ji ? 5 : o >= Qi ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? ln(t, n, e * 2) : [s, u, l];
}
function ji(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? ln(n, t, e) : ln(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function Gn(t, n, e) {
  return n = +n, t = +t, e = +e, ln(t, n, e)[2];
}
function to(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Gn(n, t, e) : Gn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Zt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function no(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var eo = { value: () => {
} };
function de() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new rn(e);
}
function rn(t) {
  this._ = t;
}
function ro(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
rn.prototype = de.prototype = {
  constructor: rn,
  on: function(t, n) {
    var e = this._, r = ro(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = io(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Re(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Re(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new rn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function io(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Re(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = eo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Un = "http://www.w3.org/1999/xhtml";
const Fe = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Un,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function wn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Fe.hasOwnProperty(n) ? { space: Fe[n], local: t } : t;
}
function oo(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Un && n.documentElement.namespaceURI === Un ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function ao(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function zr(t) {
  var n = wn(t);
  return (n.local ? ao : oo)(n);
}
function so() {
}
function pe(t) {
  return t == null ? so : function() {
    return this.querySelector(t);
  };
}
function uo(t) {
  typeof t != "function" && (t = pe(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, f = 0; f < a; ++f)
      (u = o[f]) && (l = t.call(u, u.__data__, f, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[f] = l);
  return new I(r, this._parents);
}
function lo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function fo() {
  return [];
}
function Nr(t) {
  return t == null ? fo : function() {
    return this.querySelectorAll(t);
  };
}
function co(t) {
  return function() {
    return lo(t.apply(this, arguments));
  };
}
function ho(t) {
  typeof t == "function" ? t = co(t) : t = Nr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new I(r, i);
}
function Or(t) {
  return function() {
    return this.matches(t);
  };
}
function Ir(t) {
  return function(n) {
    return n.matches(t);
  };
}
var po = Array.prototype.find;
function go(t) {
  return function() {
    return po.call(this.children, t);
  };
}
function yo() {
  return this.firstElementChild;
}
function _o(t) {
  return this.select(t == null ? yo : go(typeof t == "function" ? t : Ir(t)));
}
var mo = Array.prototype.filter;
function wo() {
  return Array.from(this.children);
}
function vo(t) {
  return function() {
    return mo.call(this.children, t);
  };
}
function bo(t) {
  return this.selectAll(t == null ? wo : vo(typeof t == "function" ? t : Ir(t)));
}
function xo(t) {
  typeof t != "function" && (t = Or(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new I(r, this._parents);
}
function kr(t) {
  return new Array(t.length);
}
function Mo() {
  return new I(this._enter || this._groups.map(kr), this._parents);
}
function fn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
fn.prototype = {
  constructor: fn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function $o(t) {
  return function() {
    return t;
  };
}
function Ao(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new fn(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function To(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), f = n.length, c = o.length, h = new Array(f), g;
  for (s = 0; s < f; ++s)
    (u = n[s]) && (h[s] = g = a.call(u, u.__data__, s, n) + "", l.has(g) ? i[s] = u : l.set(g, u));
  for (s = 0; s < c; ++s)
    g = a.call(t, o[s], s, o) + "", (u = l.get(g)) ? (r[s] = u, u.__data__ = o[s], l.delete(g)) : e[s] = new fn(t, o[s]);
  for (s = 0; s < f; ++s)
    (u = n[s]) && l.get(h[s]) === u && (i[s] = u);
}
function So(t) {
  return t.__data__;
}
function Po(t, n) {
  if (!arguments.length) return Array.from(this, So);
  var e = n ? To : Ao, r = this._parents, i = this._groups;
  typeof t != "function" && (t = $o(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var f = r[l], c = i[l], h = c.length, g = Eo(t.call(f, f && f.__data__, l, r)), d = g.length, p = s[l] = new Array(d), b = a[l] = new Array(d), _ = u[l] = new Array(h);
    e(f, c, p, b, _, g, n);
    for (var x = 0, $ = 0, y, w; x < d; ++x)
      if (y = p[x]) {
        for (x >= $ && ($ = x + 1); !(w = b[$]) && ++$ < d; ) ;
        y._next = w || null;
      }
  }
  return a = new I(a, r), a._enter = s, a._exit = u, a;
}
function Eo(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function zo() {
  return new I(this._exit || this._groups.map(kr), this._parents);
}
function No(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Oo(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], f = r[u], c = l.length, h = s[u] = new Array(c), g, d = 0; d < c; ++d)
      (g = l[d] || f[d]) && (h[d] = g);
  for (; u < i; ++u)
    s[u] = e[u];
  return new I(s, this._parents);
}
function Io() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function ko(t) {
  t || (t = Co);
  function n(c, h) {
    return c && h ? t(c.__data__, h.__data__) : !c - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, f = 0; f < s; ++f)
      (l = a[f]) && (u[f] = l);
    u.sort(n);
  }
  return new I(i, this._parents).order();
}
function Co(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ro() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Fo() {
  return Array.from(this);
}
function Lo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Do() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Ho() {
  return !this.node();
}
function qo(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Bo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Xo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Go(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Uo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Yo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Ko(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Vo(t, n) {
  var e = wn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Xo : Bo : typeof n == "function" ? e.local ? Ko : Yo : e.local ? Uo : Go)(e, n));
}
function Cr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Zo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Wo(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Jo(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Qo(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Zo : typeof n == "function" ? Jo : Wo)(t, n, e ?? "")) : xt(this.node(), t);
}
function xt(t, n) {
  return t.style.getPropertyValue(n) || Cr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function jo(t) {
  return function() {
    delete this[t];
  };
}
function ta(t, n) {
  return function() {
    this[t] = n;
  };
}
function na(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function ea(t, n) {
  return arguments.length > 1 ? this.each((n == null ? jo : typeof n == "function" ? na : ta)(t, n)) : this.node()[t];
}
function Rr(t) {
  return t.trim().split(/^|\s+/);
}
function ge(t) {
  return t.classList || new Fr(t);
}
function Fr(t) {
  this._node = t, this._names = Rr(t.getAttribute("class") || "");
}
Fr.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Lr(t, n) {
  for (var e = ge(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Dr(t, n) {
  for (var e = ge(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ra(t) {
  return function() {
    Lr(this, t);
  };
}
function ia(t) {
  return function() {
    Dr(this, t);
  };
}
function oa(t, n) {
  return function() {
    (n.apply(this, arguments) ? Lr : Dr)(this, t);
  };
}
function aa(t, n) {
  var e = Rr(t + "");
  if (arguments.length < 2) {
    for (var r = ge(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? oa : n ? ra : ia)(e, n));
}
function sa() {
  this.textContent = "";
}
function ua(t) {
  return function() {
    this.textContent = t;
  };
}
function la(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function fa(t) {
  return arguments.length ? this.each(t == null ? sa : (typeof t == "function" ? la : ua)(t)) : this.node().textContent;
}
function ca() {
  this.innerHTML = "";
}
function ha(t) {
  return function() {
    this.innerHTML = t;
  };
}
function da(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function pa(t) {
  return arguments.length ? this.each(t == null ? ca : (typeof t == "function" ? da : ha)(t)) : this.node().innerHTML;
}
function ga() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ya() {
  return this.each(ga);
}
function _a() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ma() {
  return this.each(_a);
}
function wa(t) {
  var n = typeof t == "function" ? t : zr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function va() {
  return null;
}
function ba(t, n) {
  var e = typeof t == "function" ? t : zr(t), r = n == null ? va : typeof n == "function" ? n : pe(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function xa() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ma() {
  return this.each(xa);
}
function $a() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Aa() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ta(t) {
  return this.select(t ? Aa : $a);
}
function Sa(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Pa(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Ea(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function za(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Na(t, n, e) {
  return function() {
    var r = this.__on, i, o = Pa(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Oa(t, n, e) {
  var r = Ea(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, f; u < l; ++u)
        for (i = 0, f = s[u]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? Na : za, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function Hr(t, n, e) {
  var r = Cr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Ia(t, n) {
  return function() {
    return Hr(this, t, n);
  };
}
function ka(t, n) {
  return function() {
    return Hr(this, t, n.apply(this, arguments));
  };
}
function Ca(t, n) {
  return this.each((typeof n == "function" ? ka : Ia)(t, n));
}
function* Ra() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var qr = [null];
function I(t, n) {
  this._groups = t, this._parents = n;
}
function Xt() {
  return new I([[document.documentElement]], qr);
}
function Fa() {
  return this;
}
I.prototype = Xt.prototype = {
  constructor: I,
  select: uo,
  selectAll: ho,
  selectChild: _o,
  selectChildren: bo,
  filter: xo,
  data: Po,
  enter: Mo,
  exit: zo,
  join: No,
  merge: Oo,
  selection: Fa,
  order: Io,
  sort: ko,
  call: Ro,
  nodes: Fo,
  node: Lo,
  size: Do,
  empty: Ho,
  each: qo,
  attr: Vo,
  style: Qo,
  property: ea,
  classed: aa,
  text: fa,
  html: pa,
  raise: ya,
  lower: ma,
  append: wa,
  insert: ba,
  remove: Ma,
  clone: Ta,
  datum: Sa,
  on: Oa,
  dispatch: Ca,
  [Symbol.iterator]: Ra
};
function S(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], qr);
}
function La(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Yn(t, n) {
  if (t = La(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Da = { passive: !1 }, Ct = { capture: !0, passive: !1 };
function Rn(t) {
  t.stopImmediatePropagation();
}
function vt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ha(t) {
  var n = t.document.documentElement, e = S(t).on("dragstart.drag", vt, Ct);
  "onselectstart" in n ? e.on("selectstart.drag", vt, Ct) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function qa(t, n) {
  var e = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  n && (r.on("click.drag", vt, Ct), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Wt = (t) => () => t;
function Kn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
Kn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Ba(t) {
  return !t.ctrlKey && !t.button;
}
function Xa() {
  return this.parentNode;
}
function Ga(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Ua() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ya() {
  var t = Ba, n = Xa, e = Ga, r = Ua, i = {}, o = de("start", "drag", "end"), a = 0, s, u, l, f, c = 0;
  function h(y) {
    y.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", _, Da).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(y, w) {
    if (!(f || !t.call(this, y, w))) {
      var T = $(this, n.call(this, y, w), y, w, "mouse");
      T && (S(y.view).on("mousemove.drag", d, Ct).on("mouseup.drag", p, Ct), Ha(y.view), Rn(y), l = !1, s = y.clientX, u = y.clientY, T("start", y));
    }
  }
  function d(y) {
    if (vt(y), !l) {
      var w = y.clientX - s, T = y.clientY - u;
      l = w * w + T * T > c;
    }
    i.mouse("drag", y);
  }
  function p(y) {
    S(y.view).on("mousemove.drag mouseup.drag", null), qa(y.view, l), vt(y), i.mouse("end", y);
  }
  function b(y, w) {
    if (t.call(this, y, w)) {
      var T = y.changedTouches, P = n.call(this, y, w), z = T.length, q, K;
      for (q = 0; q < z; ++q)
        (K = $(this, P, y, w, T[q].identifier, T[q])) && (Rn(y), K("start", y, T[q]));
    }
  }
  function _(y) {
    var w = y.changedTouches, T = w.length, P, z;
    for (P = 0; P < T; ++P)
      (z = i[w[P].identifier]) && (vt(y), z("drag", y, w[P]));
  }
  function x(y) {
    var w = y.changedTouches, T = w.length, P, z;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), P = 0; P < T; ++P)
      (z = i[w[P].identifier]) && (Rn(y), z("end", y, w[P]));
  }
  function $(y, w, T, P, z, q) {
    var K = o.copy(), v = Yn(q || T, w), B, N, R;
    if ((R = e.call(y, new Kn("beforestart", {
      sourceEvent: T,
      target: h,
      identifier: z,
      active: a,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: K
    }), P)) != null)
      return B = R.x - v[0] || 0, N = R.y - v[1] || 0, function Vt(ot, st, _t) {
        var k = v, Cn;
        switch (ot) {
          case "start":
            i[z] = Vt, Cn = a++;
            break;
          case "end":
            delete i[z], --a;
          // falls through
          case "drag":
            v = Yn(_t || st, w), Cn = a;
            break;
        }
        K.call(
          ot,
          y,
          new Kn(ot, {
            sourceEvent: st,
            subject: R,
            target: h,
            identifier: z,
            active: Cn,
            x: v[0] + B,
            y: v[1] + N,
            dx: v[0] - k[0],
            dy: v[1] - k[1],
            dispatch: K
          }),
          P
        );
      };
  }
  return h.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Wt(!!y), h) : t;
  }, h.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Wt(y), h) : n;
  }, h.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Wt(y), h) : e;
  }, h.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Wt(!!y), h) : r;
  }, h.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? h : y;
  }, h.clickDistance = function(y) {
    return arguments.length ? (c = (y = +y) * y, h) : Math.sqrt(c);
  }, h;
}
function ye(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Br(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Gt() {
}
var Rt = 0.7, cn = 1 / Rt, bt = "\\s*([+-]?\\d+)\\s*", Ft = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", X = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ka = /^#([0-9a-f]{3,8})$/, Va = new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`), Za = new RegExp(`^rgb\\(${X},${X},${X}\\)$`), Wa = new RegExp(`^rgba\\(${bt},${bt},${bt},${Ft}\\)$`), Ja = new RegExp(`^rgba\\(${X},${X},${X},${Ft}\\)$`), Qa = new RegExp(`^hsl\\(${Ft},${X},${X}\\)$`), ja = new RegExp(`^hsla\\(${Ft},${X},${X},${Ft}\\)$`), Le = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ye(Gt, ht, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: De,
  // Deprecated! Use color.formatHex.
  formatHex: De,
  formatHex8: ts,
  formatHsl: ns,
  formatRgb: He,
  toString: He
});
function De() {
  return this.rgb().formatHex();
}
function ts() {
  return this.rgb().formatHex8();
}
function ns() {
  return Xr(this).formatHsl();
}
function He() {
  return this.rgb().formatRgb();
}
function ht(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Ka.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? qe(n) : e === 3 ? new O(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Jt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Jt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Va.exec(t)) ? new O(n[1], n[2], n[3], 1) : (n = Za.exec(t)) ? new O(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Wa.exec(t)) ? Jt(n[1], n[2], n[3], n[4]) : (n = Ja.exec(t)) ? Jt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Qa.exec(t)) ? Ge(n[1], n[2] / 100, n[3] / 100, 1) : (n = ja.exec(t)) ? Ge(n[1], n[2] / 100, n[3] / 100, n[4]) : Le.hasOwnProperty(t) ? qe(Le[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function qe(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Jt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new O(t, n, e, r);
}
function es(t) {
  return t instanceof Gt || (t = ht(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function Vn(t, n, e, r) {
  return arguments.length === 1 ? es(t) : new O(t, n, e, r ?? 1);
}
function O(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ye(O, Vn, Br(Gt, {
  brighter(t) {
    return t = t == null ? cn : Math.pow(cn, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Rt : Math.pow(Rt, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new O(ct(this.r), ct(this.g), ct(this.b), hn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Be,
  // Deprecated! Use color.formatHex.
  formatHex: Be,
  formatHex8: rs,
  formatRgb: Xe,
  toString: Xe
}));
function Be() {
  return `#${lt(this.r)}${lt(this.g)}${lt(this.b)}`;
}
function rs() {
  return `#${lt(this.r)}${lt(this.g)}${lt(this.b)}${lt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Xe() {
  const t = hn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ct(this.r)}, ${ct(this.g)}, ${ct(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function hn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ct(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function lt(t) {
  return t = ct(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ge(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new L(t, n, e, r);
}
function Xr(t) {
  if (t instanceof L) return new L(t.h, t.s, t.l, t.opacity);
  if (t instanceof Gt || (t = ht(t)), !t) return new L();
  if (t instanceof L) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new L(a, s, u, t.opacity);
}
function is(t, n, e, r) {
  return arguments.length === 1 ? Xr(t) : new L(t, n, e, r ?? 1);
}
function L(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ye(L, is, Br(Gt, {
  brighter(t) {
    return t = t == null ? cn : Math.pow(cn, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Rt : Math.pow(Rt, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new O(
      Fn(t >= 240 ? t - 240 : t + 120, i, r),
      Fn(t, i, r),
      Fn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new L(Ue(this.h), Qt(this.s), Qt(this.l), hn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = hn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ue(this.h)}, ${Qt(this.s) * 100}%, ${Qt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ue(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Qt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Fn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const _e = (t) => () => t;
function os(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function as(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function ss(t) {
  return (t = +t) == 1 ? Gr : function(n, e) {
    return e - n ? as(n, e, t) : _e(isNaN(n) ? e : n);
  };
}
function Gr(t, n) {
  var e = n - t;
  return e ? os(t, e) : _e(isNaN(t) ? n : t);
}
const dn = function t(n) {
  var e = ss(n);
  function r(i, o) {
    var a = e((i = Vn(i)).r, (o = Vn(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = Gr(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = s(f), i.b = u(f), i.opacity = l(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function us(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function ls(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function fs(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = me(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function cs(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function F(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function hs(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = me(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Zn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ln = new RegExp(Zn.source, "g");
function ds(t) {
  return function() {
    return t;
  };
}
function ps(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Ur(t, n) {
  var e = Zn.lastIndex = Ln.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = Zn.exec(t)) && (i = Ln.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: F(r, i) })), e = Ln.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? ps(u[0].x) : ds(n) : (n = u.length, function(l) {
    for (var f = 0, c; f < n; ++f) s[(c = u[f]).i] = c.x(l);
    return s.join("");
  });
}
function me(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? _e(n) : (e === "number" ? F : e === "string" ? (r = ht(n)) ? (n = r, dn) : Ur : n instanceof ht ? dn : n instanceof Date ? cs : ls(n) ? us : Array.isArray(n) ? fs : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? hs : F)(t, n);
}
function gs(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Ye = 180 / Math.PI, Wn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Yr(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Ye,
    skewX: Math.atan(u) * Ye,
    scaleX: a,
    scaleY: s
  };
}
var jt;
function ys(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Wn : Yr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function _s(t) {
  return t == null || (jt || (jt = document.createElementNS("http://www.w3.org/2000/svg", "g")), jt.setAttribute("transform", t), !(t = jt.transform.baseVal.consolidate())) ? Wn : (t = t.matrix, Yr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Kr(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, f, c, h, g, d) {
    if (l !== c || f !== h) {
      var p = g.push("translate(", null, n, null, e);
      d.push({ i: p - 4, x: F(l, c) }, { i: p - 2, x: F(f, h) });
    } else (c || h) && g.push("translate(" + c + n + h + e);
  }
  function a(l, f, c, h) {
    l !== f ? (l - f > 180 ? f += 360 : f - l > 180 && (l += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: F(l, f) })) : f && c.push(i(c) + "rotate(" + f + r);
  }
  function s(l, f, c, h) {
    l !== f ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: F(l, f) }) : f && c.push(i(c) + "skewX(" + f + r);
  }
  function u(l, f, c, h, g, d) {
    if (l !== c || f !== h) {
      var p = g.push(i(g) + "scale(", null, ",", null, ")");
      d.push({ i: p - 4, x: F(l, c) }, { i: p - 2, x: F(f, h) });
    } else (c !== 1 || h !== 1) && g.push(i(g) + "scale(" + c + "," + h + ")");
  }
  return function(l, f) {
    var c = [], h = [];
    return l = t(l), f = t(f), o(l.translateX, l.translateY, f.translateX, f.translateY, c, h), a(l.rotate, f.rotate, c, h), s(l.skewX, f.skewX, c, h), u(l.scaleX, l.scaleY, f.scaleX, f.scaleY, c, h), l = f = null, function(g) {
      for (var d = -1, p = h.length, b; ++d < p; ) c[(b = h[d]).i] = b.x(g);
      return c.join("");
    };
  };
}
var ms = Kr(ys, "px, ", "px)", "deg)"), ws = Kr(_s, ", ", ")", ")"), Mt = 0, zt = 0, Pt = 0, Vr = 1e3, pn, Nt, gn = 0, dt = 0, vn = 0, Lt = typeof performance == "object" && performance.now ? performance : Date, Zr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function bn() {
  return dt || (Zr(vs), dt = Lt.now() + vn);
}
function vs() {
  dt = 0;
}
function Dt() {
  this._call = this._time = this._next = null;
}
Dt.prototype = Wr.prototype = {
  constructor: Dt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? bn() : +e) + (n == null ? 0 : +n), !this._next && Nt !== this && (Nt ? Nt._next = this : pn = this, Nt = this), this._call = t, this._time = e, Jn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Jn());
  }
};
function Wr(t, n, e) {
  var r = new Dt();
  return r.restart(t, n, e), r;
}
function bs() {
  bn(), ++Mt;
  for (var t = pn, n; t; )
    (n = dt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Mt;
}
function Ke() {
  dt = (gn = Lt.now()) + vn, Mt = zt = 0;
  try {
    bs();
  } finally {
    Mt = 0, Ms(), dt = 0;
  }
}
function xs() {
  var t = Lt.now(), n = t - gn;
  n > Vr && (vn -= n, gn = t);
}
function Ms() {
  for (var t, n = pn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : pn = e);
  Nt = t, Jn(r);
}
function Jn(t) {
  if (!Mt) {
    zt && (zt = clearTimeout(zt));
    var n = t - dt;
    n > 24 ? (t < 1 / 0 && (zt = setTimeout(Ke, t - Lt.now() - vn)), Pt && (Pt = clearInterval(Pt))) : (Pt || (gn = Lt.now(), Pt = setInterval(xs, Vr)), Mt = 1, Zr(Ke));
  }
}
function Ve(t, n, e) {
  var r = new Dt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function $s(t, n, e) {
  var r = new Dt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? bn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var As = de("start", "end", "cancel", "interrupt"), Ts = [], Jr = 0, Ze = 1, Qn = 2, on = 3, We = 4, jn = 5, an = 6;
function xn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Ss(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: As,
    tween: Ts,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Jr
  });
}
function we(t, n) {
  var e = D(t, n);
  if (e.state > Jr) throw new Error("too late; already scheduled");
  return e;
}
function Y(t, n) {
  var e = D(t, n);
  if (e.state > on) throw new Error("too late; already running");
  return e;
}
function D(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Ss(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Wr(o, 0, e.time);
  function o(l) {
    e.state = Ze, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var f, c, h, g;
    if (e.state !== Ze) return u();
    for (f in r)
      if (g = r[f], g.name === e.name) {
        if (g.state === on) return Ve(a);
        g.state === We ? (g.state = an, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[f]) : +f < n && (g.state = an, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[f]);
      }
    if (Ve(function() {
      e.state === on && (e.state = We, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = Qn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Qn) {
      for (e.state = on, i = new Array(h = e.tween.length), f = 0, c = -1; f < h; ++f)
        (g = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++c] = g);
      i.length = c + 1;
    }
  }
  function s(l) {
    for (var f = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = jn, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t, f);
    e.state === jn && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = an, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function Ps(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Qn && r.state < jn, r.state = an, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Es(t) {
  return this.each(function() {
    Ps(this, t);
  });
}
function zs(t, n) {
  var e, r;
  return function() {
    var i = Y(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Ns(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = Y(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function Os(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = D(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? zs : Ns)(e, t, n));
}
function ve(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = Y(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return D(i, r).value[n];
  };
}
function Qr(t, n) {
  var e;
  return (typeof n == "number" ? F : n instanceof ht ? dn : (e = ht(n)) ? (n = e, dn) : Ur)(t, n);
}
function Is(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ks(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Cs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Rs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Fs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Ls(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Ds(t, n) {
  var e = wn(t), r = e === "transform" ? ws : Qr;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Ls : Fs)(e, r, ve(this, "attr." + t, n)) : n == null ? (e.local ? ks : Is)(e) : (e.local ? Rs : Cs)(e, r, n));
}
function Hs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function qs(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Bs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && qs(t, o)), e;
  }
  return i._value = n, i;
}
function Xs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Hs(t, o)), e;
  }
  return i._value = n, i;
}
function Gs(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = wn(t);
  return this.tween(e, (r.local ? Bs : Xs)(r, n));
}
function Us(t, n) {
  return function() {
    we(this, t).delay = +n.apply(this, arguments);
  };
}
function Ys(t, n) {
  return n = +n, function() {
    we(this, t).delay = n;
  };
}
function Ks(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Us : Ys)(n, t)) : D(this.node(), n).delay;
}
function Vs(t, n) {
  return function() {
    Y(this, t).duration = +n.apply(this, arguments);
  };
}
function Zs(t, n) {
  return n = +n, function() {
    Y(this, t).duration = n;
  };
}
function Ws(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Vs : Zs)(n, t)) : D(this.node(), n).duration;
}
function Js(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    Y(this, t).ease = n;
  };
}
function Qs(t) {
  var n = this._id;
  return arguments.length ? this.each(Js(n, t)) : D(this.node(), n).ease;
}
function js(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    Y(this, t).ease = e;
  };
}
function tu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(js(this._id, t));
}
function nu(t) {
  typeof t != "function" && (t = Or(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new tt(r, this._parents, this._name, this._id);
}
function eu(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], f = u.length, c = a[s] = new Array(f), h, g = 0; g < f; ++g)
      (h = u[g] || l[g]) && (c[g] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new tt(a, this._parents, this._name, this._id);
}
function ru(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function iu(t, n, e) {
  var r, i, o = ru(n) ? we : Y;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function ou(t, n) {
  var e = this._id;
  return arguments.length < 2 ? D(this.node(), e).on.on(t) : this.each(iu(e, t, n));
}
function au(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function su() {
  return this.on("end.remove", au(this._id));
}
function uu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = pe(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), f, c, h = 0; h < u; ++h)
      (f = s[h]) && (c = t.call(f, f.__data__, h, s)) && ("__data__" in f && (c.__data__ = f.__data__), l[h] = c, xn(l[h], n, e, h, l, D(f, e)));
  return new tt(o, this._parents, n, e);
}
function lu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Nr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, f, c = 0; c < l; ++c)
      if (f = u[c]) {
        for (var h = t.call(f, f.__data__, c, u), g, d = D(f, e), p = 0, b = h.length; p < b; ++p)
          (g = h[p]) && xn(g, n, e, p, h, d);
        o.push(h), a.push(f);
      }
  return new tt(o, a, n, e);
}
var fu = Xt.prototype.constructor;
function cu() {
  return new fu(this._groups, this._parents);
}
function hu(t, n) {
  var e, r, i;
  return function() {
    var o = xt(this, t), a = (this.style.removeProperty(t), xt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function jr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function du(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = xt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function pu(t, n, e) {
  var r, i, o;
  return function() {
    var a = xt(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), xt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function gu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = Y(this, t), l = u.on, f = u.value[o] == null ? s || (s = jr(n)) : void 0;
    (l !== e || i !== f) && (r = (e = l).copy()).on(a, i = f), u.on = r;
  };
}
function yu(t, n, e) {
  var r = (t += "") == "transform" ? ms : Qr;
  return n == null ? this.styleTween(t, hu(t, r)).on("end.style." + t, jr(t)) : typeof n == "function" ? this.styleTween(t, pu(t, r, ve(this, "style." + t, n))).each(gu(this._id, t)) : this.styleTween(t, du(t, r, n), e).on("end.style." + t, null);
}
function _u(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function mu(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && _u(t, a, e)), r;
  }
  return o._value = n, o;
}
function wu(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, mu(t, n, e ?? ""));
}
function vu(t) {
  return function() {
    this.textContent = t;
  };
}
function bu(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function xu(t) {
  return this.tween("text", typeof t == "function" ? bu(ve(this, "text", t)) : vu(t == null ? "" : t + ""));
}
function Mu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function $u(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Mu(i)), n;
  }
  return r._value = t, r;
}
function Au(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, $u(t));
}
function Tu() {
  for (var t = this._name, n = this._id, e = ti(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var f = D(u, n);
        xn(u, t, e, l, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new tt(r, this._parents, t, e);
}
function Su() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = Y(this, r), f = l.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var Pu = 0;
function tt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function ti() {
  return ++Pu;
}
var V = Xt.prototype;
tt.prototype = {
  constructor: tt,
  select: uu,
  selectAll: lu,
  selectChild: V.selectChild,
  selectChildren: V.selectChildren,
  filter: nu,
  merge: eu,
  selection: cu,
  transition: Tu,
  call: V.call,
  nodes: V.nodes,
  node: V.node,
  size: V.size,
  empty: V.empty,
  each: V.each,
  on: ou,
  attr: Ds,
  attrTween: Gs,
  style: yu,
  styleTween: wu,
  text: xu,
  textTween: Au,
  remove: su,
  tween: Os,
  delay: Ks,
  duration: Ws,
  ease: Qs,
  easeVarying: tu,
  end: Su,
  [Symbol.iterator]: V[Symbol.iterator]
};
function Eu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var zu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Eu
};
function Nu(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ou(t) {
  var n, e;
  t instanceof tt ? (n = t._id, t = t._name) : (n = ti(), (e = zu).time = bn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && xn(u, t, n, l, a, e || Nu(u, n));
  return new tt(r, this._parents, t, n);
}
Xt.prototype.interrupt = Es;
Xt.prototype.transition = Ou;
const te = Math.PI, ne = 2 * te, ut = 1e-6, Iu = ne - ut;
function ni(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function ku(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return ni;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class be {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? ni : ku(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - n, l = i - e, f = a - n, c = s - e, h = f * f + c * c;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > ut) if (!(Math.abs(c * u - l * f) > ut) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let g = r - a, d = i - s, p = u * u + l * l, b = g * g + d * d, _ = Math.sqrt(p), x = Math.sqrt(h), $ = o * Math.tan((te - Math.acos((p + h - b) / (2 * _ * x))) / 2), y = $ / x, w = $ / _;
      Math.abs(y - 1) > ut && this._append`L${n + y * f},${e + y * c}`, this._append`A${o},${o},0,0,${+(c * g > f * d)},${this._x1 = n + w * u},${this._y1 = e + w * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, f = e + u, c = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${f}` : (Math.abs(this._x1 - l) > ut || Math.abs(this._y1 - f) > ut) && this._append`L${l},${f}`, r && (h < 0 && (h = h % ne + ne), h > Iu ? this._append`A${r},${r},0,1,${c},${n - s},${e - u}A${r},${r},0,1,${c},${this._x1 = l},${this._y1 = f}` : h > ut && this._append`A${r},${r},0,${+(h >= te)},${c},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function H() {
  return new be();
}
H.prototype = be.prototype;
function Cu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function yn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function $t(t) {
  return t = yn(Math.abs(t)), t ? t[1] : NaN;
}
function Ru(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Fu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Lu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function _n(t) {
  if (!(n = Lu.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new xe({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
_n.prototype = xe.prototype;
function xe(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
xe.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Du(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var ei;
function Hu(t, n) {
  var e = yn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (ei = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + yn(t, Math.max(0, n + o - 1))[0];
}
function Je(t, n) {
  var e = yn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Qe = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Cu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Je(t * 100, n),
  r: Je,
  s: Hu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function je(t) {
  return t;
}
var tr = Array.prototype.map, nr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function qu(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? je : Ru(tr.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? je : Fu(tr.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(c) {
    c = _n(c);
    var h = c.fill, g = c.align, d = c.sign, p = c.symbol, b = c.zero, _ = c.width, x = c.comma, $ = c.precision, y = c.trim, w = c.type;
    w === "n" ? (x = !0, w = "g") : Qe[w] || ($ === void 0 && ($ = 12), y = !0, w = "g"), (b || h === "0" && g === "=") && (b = !0, h = "0", g = "=");
    var T = p === "$" ? e : p === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", P = p === "$" ? r : /[%p]/.test(w) ? a : "", z = Qe[w], q = /[defgprs%]/.test(w);
    $ = $ === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function K(v) {
      var B = T, N = P, R, Vt, ot;
      if (w === "c")
        N = z(v) + N, v = "";
      else {
        v = +v;
        var st = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? u : z(Math.abs(v), $), y && (v = Du(v)), st && +v == 0 && d !== "+" && (st = !1), B = (st ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + B, N = (w === "s" ? nr[8 + ei / 3] : "") + N + (st && d === "(" ? ")" : ""), q) {
          for (R = -1, Vt = v.length; ++R < Vt; )
            if (ot = v.charCodeAt(R), 48 > ot || ot > 57) {
              N = (ot === 46 ? i + v.slice(R + 1) : v.slice(R)) + N, v = v.slice(0, R);
              break;
            }
        }
      }
      x && !b && (v = n(v, 1 / 0));
      var _t = B.length + v.length + N.length, k = _t < _ ? new Array(_ - _t + 1).join(h) : "";
      switch (x && b && (v = n(k + v, k.length ? _ - N.length : 1 / 0), k = ""), g) {
        case "<":
          v = B + v + N + k;
          break;
        case "=":
          v = B + k + v + N;
          break;
        case "^":
          v = k.slice(0, _t = k.length >> 1) + B + v + N + k.slice(_t);
          break;
        default:
          v = k + B + v + N;
          break;
      }
      return o(v);
    }
    return K.toString = function() {
      return c + "";
    }, K;
  }
  function f(c, h) {
    var g = l((c = _n(c), c.type = "f", c)), d = Math.max(-8, Math.min(8, Math.floor($t(h) / 3))) * 3, p = Math.pow(10, -d), b = nr[8 + d / 3];
    return function(_) {
      return g(p * _) + b;
    };
  }
  return {
    format: l,
    formatPrefix: f
  };
}
var tn, Mn, ri;
Bu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Bu(t) {
  return tn = qu(t), Mn = tn.format, ri = tn.formatPrefix, tn;
}
function Xu(t) {
  return Math.max(0, -$t(Math.abs(t)));
}
function Gu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor($t(n) / 3))) * 3 - $t(Math.abs(t)));
}
function Uu(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, $t(n) - $t(t)) + 1;
}
function Yu(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Ku(t) {
  return function() {
    return t;
  };
}
function Vu(t) {
  return +t;
}
var er = [0, 1];
function wt(t) {
  return t;
}
function ee(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Ku(isNaN(n) ? NaN : 0.5);
}
function Zu(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Wu(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = ee(i, r), o = e(a, o)) : (r = ee(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Ju(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = ee(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = Zi(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function Qu(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ju() {
  var t = er, n = er, e = me, r, i, o, a = wt, s, u, l;
  function f() {
    var h = Math.min(t.length, n.length);
    return a !== wt && (a = Zu(t[0], t[h - 1])), s = h > 2 ? Ju : Wu, u = l = null, c;
  }
  function c(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), n, e)))(r(a(h)));
  }
  return c.invert = function(h) {
    return a(i((l || (l = s(n, t.map(r), F)))(h)));
  }, c.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Vu), f()) : t.slice();
  }, c.range = function(h) {
    return arguments.length ? (n = Array.from(h), f()) : n.slice();
  }, c.rangeRound = function(h) {
    return n = Array.from(h), e = gs, f();
  }, c.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : wt, f()) : a !== wt;
  }, c.interpolate = function(h) {
    return arguments.length ? (e = h, f()) : e;
  }, c.unknown = function(h) {
    return arguments.length ? (o = h, c) : o;
  }, function(h, g) {
    return r = h, i = g, f();
  };
}
function tl() {
  return ju()(wt, wt);
}
function nl(t, n, e, r) {
  var i = to(t, n, e), o;
  switch (r = _n(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Gu(i, a)) && (r.precision = o), ri(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Uu(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Xu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Mn(r);
}
function el(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ji(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return nl(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, f = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); f-- > 0; ) {
      if (l = Gn(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function G() {
  var t = tl();
  return t.copy = function() {
    return Qu(t, G());
  }, Yu.apply(t, arguments), el(t);
}
function mt(t) {
  return function() {
    return t;
  };
}
function rl(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new be(n);
}
function il(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ii(t) {
  this._context = t;
}
ii.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function ol(t) {
  return new ii(t);
}
function al(t) {
  return t[0];
}
function sl(t) {
  return t[1];
}
function ul(t, n) {
  var e = mt(!0), r = null, i = ol, o = null, a = rl(s);
  t = typeof t == "function" ? t : t === void 0 ? al : mt(t), n = typeof n == "function" ? n : n === void 0 ? sl : mt(n);
  function s(u) {
    var l, f = (u = il(u)).length, c, h = !1, g;
    for (r == null && (o = i(g = a())), l = 0; l <= f; ++l)
      !(l < f && e(c = u[l], l, u)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+t(c, l, u), +n(c, l, u));
    if (g) return o = null, g + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : mt(+u), s) : t;
  }, s.y = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : mt(+u), s) : n;
  }, s.defined = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : mt(!!u), s) : e;
  }, s.curve = function(u) {
    return arguments.length ? (i = u, r != null && (o = i(r)), s) : i;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? r = o = null : o = i(r = u), s) : r;
  }, s;
}
function Ot(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Ot.prototype = {
  constructor: Ot,
  scale: function(t) {
    return t === 1 ? this : new Ot(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Ot(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Ot.prototype;
var oi = typeof global == "object" && global && global.Object === Object && global, ll = typeof self == "object" && self && self.Object === Object && self, et = oi || ll || Function("return this")(), U = et.Symbol, ai = Object.prototype, fl = ai.hasOwnProperty, cl = ai.toString, Et = U ? U.toStringTag : void 0;
function hl(t) {
  var n = fl.call(t, Et), e = t[Et];
  try {
    t[Et] = void 0;
    var r = !0;
  } catch {
  }
  var i = cl.call(t);
  return r && (n ? t[Et] = e : delete t[Et]), i;
}
var dl = Object.prototype, pl = dl.toString;
function gl(t) {
  return pl.call(t);
}
var yl = "[object Null]", _l = "[object Undefined]", rr = U ? U.toStringTag : void 0;
function St(t) {
  return t == null ? t === void 0 ? _l : yl : rr && rr in Object(t) ? hl(t) : gl(t);
}
function At(t) {
  return t != null && typeof t == "object";
}
var ml = "[object Symbol]";
function Ut(t) {
  return typeof t == "symbol" || At(t) && St(t) == ml;
}
function $n(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var C = Array.isArray, ir = U ? U.prototype : void 0, or = ir ? ir.toString : void 0;
function si(t) {
  if (typeof t == "string")
    return t;
  if (C(t))
    return $n(t, si) + "";
  if (Ut(t))
    return or ? or.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var wl = /\s/;
function vl(t) {
  for (var n = t.length; n-- && wl.test(t.charAt(n)); )
    ;
  return n;
}
var bl = /^\s+/;
function xl(t) {
  return t && t.slice(0, vl(t) + 1).replace(bl, "");
}
function nt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var ar = NaN, Ml = /^[-+]0x[0-9a-f]+$/i, $l = /^0b[01]+$/i, Al = /^0o[0-7]+$/i, Tl = parseInt;
function Sl(t) {
  if (typeof t == "number")
    return t;
  if (Ut(t))
    return ar;
  if (nt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = nt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = xl(t);
  var e = $l.test(t);
  return e || Al.test(t) ? Tl(t.slice(2), e ? 2 : 8) : Ml.test(t) ? ar : +t;
}
var Pl = 1 / 0, El = 17976931348623157e292;
function Dn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Sl(t), t === Pl || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * El;
  }
  return t === t ? t : 0;
}
function Me(t) {
  return t;
}
var zl = "[object AsyncFunction]", Nl = "[object Function]", Ol = "[object GeneratorFunction]", Il = "[object Proxy]";
function ui(t) {
  if (!nt(t))
    return !1;
  var n = St(t);
  return n == Nl || n == Ol || n == zl || n == Il;
}
var Hn = et["__core-js_shared__"], sr = function() {
  var t = /[^.]+$/.exec(Hn && Hn.keys && Hn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function kl(t) {
  return !!sr && sr in t;
}
var Cl = Function.prototype, Rl = Cl.toString;
function gt(t) {
  if (t != null) {
    try {
      return Rl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Fl = /[\\^$.*+?()[\]{}|]/g, Ll = /^\[object .+?Constructor\]$/, Dl = Function.prototype, Hl = Object.prototype, ql = Dl.toString, Bl = Hl.hasOwnProperty, Xl = RegExp(
  "^" + ql.call(Bl).replace(Fl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gl(t) {
  if (!nt(t) || kl(t))
    return !1;
  var n = ui(t) ? Xl : Ll;
  return n.test(gt(t));
}
function Ul(t, n) {
  return t == null ? void 0 : t[n];
}
function yt(t, n) {
  var e = Ul(t, n);
  return Gl(e) ? e : void 0;
}
var re = yt(et, "WeakMap"), ur = function() {
  try {
    var t = yt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function Yl(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var Kl = 9007199254740991, Vl = /^(?:0|[1-9]\d*)$/;
function An(t, n) {
  var e = typeof t;
  return n = n ?? Kl, !!n && (e == "number" || e != "symbol" && Vl.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Zl(t, n, e) {
  n == "__proto__" && ur ? ur(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Tn(t, n) {
  return t === n || t !== t && n !== n;
}
var Wl = Object.prototype, Jl = Wl.hasOwnProperty;
function Ql(t, n, e) {
  var r = t[n];
  (!(Jl.call(t, n) && Tn(r, e)) || e === void 0 && !(n in t)) && Zl(t, n, e);
}
var jl = 9007199254740991;
function $e(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= jl;
}
function Yt(t) {
  return t != null && $e(t.length) && !ui(t);
}
function tf(t, n, e) {
  if (!nt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Yt(e) && An(n, e.length) : r == "string" && n in e) ? Tn(e[n], t) : !1;
}
var nf = Object.prototype;
function li(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || nf;
  return t === e;
}
function ef(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var rf = "[object Arguments]";
function lr(t) {
  return At(t) && St(t) == rf;
}
var fi = Object.prototype, of = fi.hasOwnProperty, af = fi.propertyIsEnumerable, Ae = lr(/* @__PURE__ */ function() {
  return arguments;
}()) ? lr : function(t) {
  return At(t) && of.call(t, "callee") && !af.call(t, "callee");
};
function sf() {
  return !1;
}
var ci = typeof exports == "object" && exports && !exports.nodeType && exports, fr = ci && typeof module == "object" && module && !module.nodeType && module, uf = fr && fr.exports === ci, cr = uf ? et.Buffer : void 0, lf = cr ? cr.isBuffer : void 0, ie = lf || sf, ff = "[object Arguments]", cf = "[object Array]", hf = "[object Boolean]", df = "[object Date]", pf = "[object Error]", gf = "[object Function]", yf = "[object Map]", _f = "[object Number]", mf = "[object Object]", wf = "[object RegExp]", vf = "[object Set]", bf = "[object String]", xf = "[object WeakMap]", Mf = "[object ArrayBuffer]", $f = "[object DataView]", Af = "[object Float32Array]", Tf = "[object Float64Array]", Sf = "[object Int8Array]", Pf = "[object Int16Array]", Ef = "[object Int32Array]", zf = "[object Uint8Array]", Nf = "[object Uint8ClampedArray]", Of = "[object Uint16Array]", If = "[object Uint32Array]", M = {};
M[Af] = M[Tf] = M[Sf] = M[Pf] = M[Ef] = M[zf] = M[Nf] = M[Of] = M[If] = !0;
M[ff] = M[cf] = M[Mf] = M[hf] = M[$f] = M[df] = M[pf] = M[gf] = M[yf] = M[_f] = M[mf] = M[wf] = M[vf] = M[bf] = M[xf] = !1;
function kf(t) {
  return At(t) && $e(t.length) && !!M[St(t)];
}
function Cf(t) {
  return function(n) {
    return t(n);
  };
}
var hi = typeof exports == "object" && exports && !exports.nodeType && exports, It = hi && typeof module == "object" && module && !module.nodeType && module, Rf = It && It.exports === hi, qn = Rf && oi.process, hr = function() {
  try {
    var t = It && It.require && It.require("util").types;
    return t || qn && qn.binding && qn.binding("util");
  } catch {
  }
}(), dr = hr && hr.isTypedArray, di = dr ? Cf(dr) : kf, Ff = Object.prototype, Lf = Ff.hasOwnProperty;
function pi(t, n) {
  var e = C(t), r = !e && Ae(t), i = !e && !r && ie(t), o = !e && !r && !i && di(t), a = e || r || i || o, s = a ? ef(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || Lf.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    An(l, u))) && s.push(l);
  return s;
}
function gi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Df = gi(Object.keys, Object), Hf = Object.prototype, qf = Hf.hasOwnProperty;
function Bf(t) {
  if (!li(t))
    return Df(t);
  var n = [];
  for (var e in Object(t))
    qf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Sn(t) {
  return Yt(t) ? pi(t) : Bf(t);
}
function Xf(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Gf = Object.prototype, Uf = Gf.hasOwnProperty;
function Yf(t) {
  if (!nt(t))
    return Xf(t);
  var n = li(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Uf.call(t, r)) || e.push(r);
  return e;
}
function Kf(t) {
  return Yt(t) ? pi(t, !0) : Yf(t);
}
var Vf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zf = /^\w*$/;
function Te(t, n) {
  if (C(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Ut(t) ? !0 : Zf.test(t) || !Vf.test(t) || n != null && t in Object(n);
}
var Ht = yt(Object, "create");
function Wf() {
  this.__data__ = Ht ? Ht(null) : {}, this.size = 0;
}
function Jf(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Qf = "__lodash_hash_undefined__", jf = Object.prototype, tc = jf.hasOwnProperty;
function nc(t) {
  var n = this.__data__;
  if (Ht) {
    var e = n[t];
    return e === Qf ? void 0 : e;
  }
  return tc.call(n, t) ? n[t] : void 0;
}
var ec = Object.prototype, rc = ec.hasOwnProperty;
function ic(t) {
  var n = this.__data__;
  return Ht ? n[t] !== void 0 : rc.call(n, t);
}
var oc = "__lodash_hash_undefined__";
function ac(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Ht && n === void 0 ? oc : n, this;
}
function pt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
pt.prototype.clear = Wf;
pt.prototype.delete = Jf;
pt.prototype.get = nc;
pt.prototype.has = ic;
pt.prototype.set = ac;
function sc() {
  this.__data__ = [], this.size = 0;
}
function Pn(t, n) {
  for (var e = t.length; e--; )
    if (Tn(t[e][0], n))
      return e;
  return -1;
}
var uc = Array.prototype, lc = uc.splice;
function fc(t) {
  var n = this.__data__, e = Pn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : lc.call(n, e, 1), --this.size, !0;
}
function cc(t) {
  var n = this.__data__, e = Pn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function hc(t) {
  return Pn(this.__data__, t) > -1;
}
function dc(t, n) {
  var e = this.__data__, r = Pn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function rt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = sc;
rt.prototype.delete = fc;
rt.prototype.get = cc;
rt.prototype.has = hc;
rt.prototype.set = dc;
var qt = yt(et, "Map");
function pc() {
  this.size = 0, this.__data__ = {
    hash: new pt(),
    map: new (qt || rt)(),
    string: new pt()
  };
}
function gc(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function En(t, n) {
  var e = t.__data__;
  return gc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function yc(t) {
  var n = En(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function _c(t) {
  return En(this, t).get(t);
}
function mc(t) {
  return En(this, t).has(t);
}
function wc(t, n) {
  var e = En(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function it(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
it.prototype.clear = pc;
it.prototype.delete = yc;
it.prototype.get = _c;
it.prototype.has = mc;
it.prototype.set = wc;
var vc = "Expected a function";
function Se(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(vc);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Se.Cache || it)(), e;
}
Se.Cache = it;
var bc = 500;
function xc(t) {
  var n = Se(t, function(r) {
    return e.size === bc && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Mc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $c = /\\(\\)?/g, Ac = xc(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Mc, function(e, r, i, o) {
    n.push(i ? o.replace($c, "$1") : r || e);
  }), n;
});
function zn(t) {
  return t == null ? "" : si(t);
}
function Nn(t, n) {
  return C(t) ? t : Te(t, n) ? [t] : Ac(zn(t));
}
function Kt(t) {
  if (typeof t == "string" || Ut(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Pe(t, n) {
  n = Nn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Kt(n[e++])];
  return e && e == r ? t : void 0;
}
function Tc(t, n, e) {
  var r = t == null ? void 0 : Pe(t, n);
  return r === void 0 ? e : r;
}
function Ee(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var pr = U ? U.isConcatSpreadable : void 0;
function Sc(t) {
  return C(t) || Ae(t) || !!(pr && t && t[pr]);
}
function Pc(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = Sc), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Ee(i, s) : i[i.length] = s;
  }
  return i;
}
function Ec(t) {
  var n = t == null ? 0 : t.length;
  return n ? Pc(t) : [];
}
var zc = gi(Object.getPrototypeOf, Object);
function Nc(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Oc(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Nc(t, n, e);
}
var Ic = "\\ud800-\\udfff", kc = "\\u0300-\\u036f", Cc = "\\ufe20-\\ufe2f", Rc = "\\u20d0-\\u20ff", Fc = kc + Cc + Rc, Lc = "\\ufe0e\\ufe0f", Dc = "\\u200d", Hc = RegExp("[" + Dc + Ic + Fc + Lc + "]");
function yi(t) {
  return Hc.test(t);
}
function qc(t) {
  return t.split("");
}
var _i = "\\ud800-\\udfff", Bc = "\\u0300-\\u036f", Xc = "\\ufe20-\\ufe2f", Gc = "\\u20d0-\\u20ff", Uc = Bc + Xc + Gc, Yc = "\\ufe0e\\ufe0f", Kc = "[" + _i + "]", oe = "[" + Uc + "]", ae = "\\ud83c[\\udffb-\\udfff]", Vc = "(?:" + oe + "|" + ae + ")", mi = "[^" + _i + "]", wi = "(?:\\ud83c[\\udde6-\\uddff]){2}", vi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Zc = "\\u200d", bi = Vc + "?", xi = "[" + Yc + "]?", Wc = "(?:" + Zc + "(?:" + [mi, wi, vi].join("|") + ")" + xi + bi + ")*", Jc = xi + bi + Wc, Qc = "(?:" + [mi + oe + "?", oe, wi, vi, Kc].join("|") + ")", jc = RegExp(ae + "(?=" + ae + ")|" + Qc + Jc, "g");
function th(t) {
  return t.match(jc) || [];
}
function nh(t) {
  return yi(t) ? th(t) : qc(t);
}
function eh(t) {
  return function(n) {
    n = zn(n);
    var e = yi(n) ? nh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Oc(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var rh = eh("toUpperCase");
function ih(t) {
  return rh(zn(t).toLowerCase());
}
function oh() {
  this.__data__ = new rt(), this.size = 0;
}
function ah(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function sh(t) {
  return this.__data__.get(t);
}
function uh(t) {
  return this.__data__.has(t);
}
var lh = 200;
function fh(t, n) {
  var e = this.__data__;
  if (e instanceof rt) {
    var r = e.__data__;
    if (!qt || r.length < lh - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new it(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function j(t) {
  var n = this.__data__ = new rt(t);
  this.size = n.size;
}
j.prototype.clear = oh;
j.prototype.delete = ah;
j.prototype.get = sh;
j.prototype.has = uh;
j.prototype.set = fh;
function ch(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Mi() {
  return [];
}
var hh = Object.prototype, dh = hh.propertyIsEnumerable, gr = Object.getOwnPropertySymbols, $i = gr ? function(t) {
  return t == null ? [] : (t = Object(t), ch(gr(t), function(n) {
    return dh.call(t, n);
  }));
} : Mi, ph = Object.getOwnPropertySymbols, gh = ph ? function(t) {
  for (var n = []; t; )
    Ee(n, $i(t)), t = zc(t);
  return n;
} : Mi;
function Ai(t, n, e) {
  var r = n(t);
  return C(t) ? r : Ee(r, e(t));
}
function yr(t) {
  return Ai(t, Sn, $i);
}
function yh(t) {
  return Ai(t, Kf, gh);
}
var se = yt(et, "DataView"), ue = yt(et, "Promise"), le = yt(et, "Set"), _r = "[object Map]", _h = "[object Object]", mr = "[object Promise]", wr = "[object Set]", vr = "[object WeakMap]", br = "[object DataView]", mh = gt(se), wh = gt(qt), vh = gt(ue), bh = gt(le), xh = gt(re), Z = St;
(se && Z(new se(new ArrayBuffer(1))) != br || qt && Z(new qt()) != _r || ue && Z(ue.resolve()) != mr || le && Z(new le()) != wr || re && Z(new re()) != vr) && (Z = function(t) {
  var n = St(t), e = n == _h ? t.constructor : void 0, r = e ? gt(e) : "";
  if (r)
    switch (r) {
      case mh:
        return br;
      case wh:
        return _r;
      case vh:
        return mr;
      case bh:
        return wr;
      case xh:
        return vr;
    }
  return n;
});
var xr = et.Uint8Array, Mh = "__lodash_hash_undefined__";
function $h(t) {
  return this.__data__.set(t, Mh), this;
}
function Ah(t) {
  return this.__data__.has(t);
}
function mn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new it(); ++n < e; )
    this.add(t[n]);
}
mn.prototype.add = mn.prototype.push = $h;
mn.prototype.has = Ah;
function Th(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Sh(t, n) {
  return t.has(n);
}
var Ph = 1, Eh = 2;
function Ti(t, n, e, r, i, o) {
  var a = e & Ph, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), f = o.get(n);
  if (l && f)
    return l == n && f == t;
  var c = -1, h = !0, g = e & Eh ? new mn() : void 0;
  for (o.set(t, n), o.set(n, t); ++c < s; ) {
    var d = t[c], p = n[c];
    if (r)
      var b = a ? r(p, d, c, n, t, o) : r(d, p, c, t, n, o);
    if (b !== void 0) {
      if (b)
        continue;
      h = !1;
      break;
    }
    if (g) {
      if (!Th(n, function(_, x) {
        if (!Sh(g, x) && (d === _ || i(d, _, e, r, o)))
          return g.push(x);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === p || i(d, p, e, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), h;
}
function Si(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function zh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Nh = 1, Oh = 2, Ih = "[object Boolean]", kh = "[object Date]", Ch = "[object Error]", Rh = "[object Map]", Fh = "[object Number]", Lh = "[object RegExp]", Dh = "[object Set]", Hh = "[object String]", qh = "[object Symbol]", Bh = "[object ArrayBuffer]", Xh = "[object DataView]", Mr = U ? U.prototype : void 0, Bn = Mr ? Mr.valueOf : void 0;
function Gh(t, n, e, r, i, o, a) {
  switch (e) {
    case Xh:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Bh:
      return !(t.byteLength != n.byteLength || !o(new xr(t), new xr(n)));
    case Ih:
    case kh:
    case Fh:
      return Tn(+t, +n);
    case Ch:
      return t.name == n.name && t.message == n.message;
    case Lh:
    case Hh:
      return t == n + "";
    case Rh:
      var s = Si;
    case Dh:
      var u = r & Nh;
      if (s || (s = zh), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= Oh, a.set(t, n);
      var f = Ti(s(t), s(n), r, i, o, a);
      return a.delete(t), f;
    case qh:
      if (Bn)
        return Bn.call(t) == Bn.call(n);
  }
  return !1;
}
var Uh = 1, Yh = Object.prototype, Kh = Yh.hasOwnProperty;
function Vh(t, n, e, r, i, o) {
  var a = e & Uh, s = yr(t), u = s.length, l = yr(n), f = l.length;
  if (u != f && !a)
    return !1;
  for (var c = u; c--; ) {
    var h = s[c];
    if (!(a ? h in n : Kh.call(n, h)))
      return !1;
  }
  var g = o.get(t), d = o.get(n);
  if (g && d)
    return g == n && d == t;
  var p = !0;
  o.set(t, n), o.set(n, t);
  for (var b = a; ++c < u; ) {
    h = s[c];
    var _ = t[h], x = n[h];
    if (r)
      var $ = a ? r(x, _, h, n, t, o) : r(_, x, h, t, n, o);
    if (!($ === void 0 ? _ === x || i(_, x, e, r, o) : $)) {
      p = !1;
      break;
    }
    b || (b = h == "constructor");
  }
  if (p && !b) {
    var y = t.constructor, w = n.constructor;
    y != w && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof w == "function" && w instanceof w) && (p = !1);
  }
  return o.delete(t), o.delete(n), p;
}
var Zh = 1, $r = "[object Arguments]", Ar = "[object Array]", nn = "[object Object]", Wh = Object.prototype, Tr = Wh.hasOwnProperty;
function Jh(t, n, e, r, i, o) {
  var a = C(t), s = C(n), u = a ? Ar : Z(t), l = s ? Ar : Z(n);
  u = u == $r ? nn : u, l = l == $r ? nn : l;
  var f = u == nn, c = l == nn, h = u == l;
  if (h && ie(t)) {
    if (!ie(n))
      return !1;
    a = !0, f = !1;
  }
  if (h && !f)
    return o || (o = new j()), a || di(t) ? Ti(t, n, e, r, i, o) : Gh(t, n, u, e, r, i, o);
  if (!(e & Zh)) {
    var g = f && Tr.call(t, "__wrapped__"), d = c && Tr.call(n, "__wrapped__");
    if (g || d) {
      var p = g ? t.value() : t, b = d ? n.value() : n;
      return o || (o = new j()), i(p, b, e, r, o);
    }
  }
  return h ? (o || (o = new j()), Vh(t, n, e, r, i, o)) : !1;
}
function ze(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !At(t) && !At(n) ? t !== t && n !== n : Jh(t, n, e, r, ze, i);
}
var Qh = 1, jh = 2;
function td(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var f = new j(), c;
      if (!(c === void 0 ? ze(l, u, Qh | jh, r, f) : c))
        return !1;
    }
  }
  return !0;
}
function Pi(t) {
  return t === t && !nt(t);
}
function nd(t) {
  for (var n = Sn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Pi(i)];
  }
  return n;
}
function Ei(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function ed(t) {
  var n = nd(t);
  return n.length == 1 && n[0][2] ? Ei(n[0][0], n[0][1]) : function(e) {
    return e === t || td(e, t, n);
  };
}
function rd(t, n) {
  return t != null && n in Object(t);
}
function zi(t, n, e) {
  n = Nn(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Kt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && $e(i) && An(a, i) && (C(t) || Ae(t)));
}
function id(t, n) {
  return t != null && zi(t, n, rd);
}
var od = 1, ad = 2;
function sd(t, n) {
  return Te(t) && Pi(n) ? Ei(Kt(t), n) : function(e) {
    var r = Tc(e, t);
    return r === void 0 && r === n ? id(e, t) : ze(n, r, od | ad);
  };
}
function ud(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function ld(t) {
  return function(n) {
    return Pe(n, t);
  };
}
function fd(t) {
  return Te(t) ? ud(Kt(t)) : ld(t);
}
function Ni(t) {
  return typeof t == "function" ? t : t == null ? Me : typeof t == "object" ? C(t) ? sd(t[0], t[1]) : ed(t) : fd(t);
}
function cd(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var hd = cd();
function dd(t, n) {
  return t && hd(t, n, Sn);
}
function pd(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Yt(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Oi = pd(dd);
function gd(t) {
  return typeof t == "function" ? t : Me;
}
function Bt(t, n) {
  var e = C(t) ? Yl : Oi;
  return e(t, gd(n));
}
function yd(t, n) {
  return $n(n, function(e) {
    return [e, t[e]];
  });
}
function _d(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var md = "[object Map]", wd = "[object Set]";
function vd(t) {
  return function(n) {
    var e = Z(n);
    return e == md ? Si(n) : e == wd ? _d(n) : yd(n, t(n));
  };
}
var Ii = vd(Sn);
function bd(t, n) {
  var e = -1, r = Yt(t) ? Array(t.length) : [];
  return Oi(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Tt(t, n) {
  var e = C(t) ? $n : bd;
  return e(t, Ni(n));
}
var xd = Object.prototype, Md = xd.hasOwnProperty;
function $d(t, n) {
  return t != null && Md.call(t, n);
}
function ki(t, n) {
  return t != null && zi(t, n, $d);
}
function Ad(t, n) {
  return t < n;
}
function Td(t, n, e) {
  for (var r = -1, i = t.length; ++r < i; ) {
    var o = t[r], a = n(o);
    if (a != null && (s === void 0 ? a === a && !Ut(a) : e(a, s)))
      var s = a, u = o;
  }
  return u;
}
function Sd(t) {
  return t && t.length ? Td(t, Me, Ad) : void 0;
}
function Pd(t, n, e, r) {
  if (!nt(t))
    return t;
  n = Nn(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = Kt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var f = s[u];
      l = void 0, l === void 0 && (l = nt(f) ? f : An(n[i + 1]) ? [] : {});
    }
    Ql(s, u, l), s = s[u];
  }
  return t;
}
function Ed(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Pe(t, a);
    e(s, a) && Pd(o, Nn(a, t), s);
  }
  return o;
}
function Ci(t, n) {
  if (t == null)
    return {};
  var e = $n(yh(t), function(r) {
    return [r];
  });
  return n = Ni(n), Ed(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var zd = Math.ceil, Nd = Math.max;
function Od(t, n, e, r) {
  for (var i = -1, o = Nd(zd((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Id(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && tf(n, e, r) && (e = r = void 0), n = Dn(n), e === void 0 ? (e = n, n = 0) : e = Dn(e), r = r === void 0 ? n < e ? 1 : -1 : Dn(r), Od(n, e, r);
  };
}
var On = Id();
function kd() {
  var t = arguments, n = zn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
const Cd = (t, n, e = 12, r = 12) => {
  const i = G().domain([0, e]).range([0, t]), o = G().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return On((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const f = Ec(Tt(l, function(c) {
        return Tt(
          u,
          function(h) {
            return { x: i(h), y: o(c) };
          }
        );
      }));
      return f.length == 1 ? f[0] : f;
    }
  };
}, Rd = "_widget_18g36_1", Fd = "_label_18g36_19", Ld = "_lit_18g36_24", Dd = "_button_18g36_29", Hd = "_symbol_18g36_29", qd = "_radio_18g36_29", Bd = "_radiobutton_18g36_29", Xd = "_selected_18g36_35", Gd = "_toggle_18g36_35", Ud = "_slider_18g36_44", Yd = "_track_18g36_44", Kd = "_track_overlay_18g36_48", Vd = "_handle_18g36_55", m = {
  widget: Rd,
  label: Fd,
  lit: Ld,
  button: Dd,
  symbol: Hd,
  radio: qd,
  radiobutton: Bd,
  selected: Xd,
  toggle: Gd,
  slider: Ud,
  track: Yd,
  track_overlay: Kd,
  handle: Vd
}, Ne = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Oe = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, Zd = (t = 1) => {
  const n = H();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Wd = (t = 1) => {
  const n = H(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Jd = (t = 1) => {
  const n = H();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Qd = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = H();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, jd = (t = 1) => {
  const n = H(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, tp = (t = 1) => {
  const n = H(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, np = (t = 1) => {
  const n = H(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, ep = (t = 1) => {
  var n = H(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, rp = (t = 1) => {
  const n = H(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, fe = (t) => {
  switch (t) {
    case "play":
      return Zd;
    case "forward":
      return Wd;
    case "back":
      return Jd;
    case "pause":
      return Qd;
    case "reload":
      return jd;
    case "capture":
      return tp;
    case "rewind":
      return np;
    case "stop":
      return ep;
    case "push":
      return rp;
  }
}, Ie = () => {
  const t = "button";
  var n = Ne(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(d) {
  }, f = ["play"], c = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? o.x : (o.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? o.y : (o.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    actions: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    click: function() {
      c = (c + 1) % f.length, l(), S(this.parentNode).select("." + m.symbol).attr("d", fe(f[c])(r * e));
    },
    press: function(d) {
      c = (c + 1) % f.length, l(), d.select("#button_" + n).select("." + m.symbol).attr("d", fe(f[c])(r * e));
    }
  };
}, ip = () => {
  const t = "slider", n = Mn(".3f");
  var e = Ne(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, f = function(_) {
  }, c = function(_) {
  }, h = [0, 1], g = 0, d = null, p = G().domain(h).range([0, r]).clamp(!0);
  const b = function(_, x, $ = h) {
    const y = _.select("#slider_" + e);
    p.domain($), g = x, y.selectAll("." + m.handle).transition().attr("cx", p(x)), a && y.select("." + m.label).text(d + " = " + n(g)), f(), c();
  };
  return {
    type: t,
    scale: p,
    id: function(_) {
      return typeof _ > "u" ? e : (e = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? l : (l = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return f = _, this;
      f(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return c = _, this;
      c(_);
    },
    range: function(_) {
      return typeof _ > "u" ? h : (h = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? g : (g = _, this);
    },
    reset: b,
    click: b
  };
}, op = () => {
  const t = "radio";
  var n = Ne(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", l = null, f = function(p) {
  }, c = [], h = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    buttonsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    buttonpadding: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    orientation: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? s.x : (s.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? s.y : (s.y = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return f = p, this;
      f(p);
    },
    choices: function(p) {
      return typeof p > "u" ? c : (c = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    click: function(p, b) {
      h = b, S(this.parentNode).selectAll("." + m.symbol).classed(m.selected, (_) => _ == h), f();
    },
    reset: function(p, b) {
      h = b, p.select("#radio_" + n).selectAll("." + m.symbol).classed(m.selected, (_) => _ == h), f();
    }
  };
}, ap = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = S(o).attr("class", m.widget + " " + m.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", fe(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = Oe(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, Ri = (t, n) => {
  const e = H();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, sp = (t, n) => {
  const e = Mn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Ri(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", m.track_overlay).on("click", function(d) {
    const p = Yn(d, this)[0];
    t.value(a.invert(p)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Ya().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var f, c, h, g = "bottom";
  return t.fontsize && (c = t.labelposition().match(/bottom/i) != null ? Zt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Zt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), c = t.labelposition().match(/bottom/i) != null ? Zt([t.girth() / 2, t.knob()]) + 7 : -Zt([t.girth() / 2, t.knob()]) - 7, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", g = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", m.label).style("text-anchor", h).style("alignment-baseline", g).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + c + ")"), u;
}, up = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(a).attr("class", m.widget + " " + m.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", Ri(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Oe(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, lp = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = no(a), u = G().domain([0, a - 1]).range([0, t.size()]), l = G().domain([0, a - 1]).range([0, t.size()]), f = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = S(f).attr("class", m.widget + " " + m.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + l(b) + ")" : "translate(" + u(b) + ",0)");
  var g, d;
  t.shape() == "rect" ? (g = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (g = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", o / 2)), g.attr("class", m.background).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((b) => b == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const p = Oe(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(b, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", p.valign).attr("transform", "translate(" + p.x + "," + p.y + ")").style("font-size", t.fontsize()).attr("text-anchor", p.anchor), f;
}, Xn = (t, n) => {
  switch (t.type) {
    case "button":
      return ap(t);
    case "slider":
      return sp(t);
    case "radio":
      return lp(t);
    case "toggle":
      return up(t);
  }
}, fp = (t, n) => {
  const e = Cd(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = S("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, A = {
  widgets: {
    slider_size: 400,
    slider_gap: 1.5,
    slider_anchor: { x: 1, y: 9 },
    slider_girth: 12,
    slider_knob: 14,
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 },
    radio: {
      input_space: {
        anchor: { x: 9, y: 1 },
        size: 150,
        orientation: "vertical",
        label_position: "right",
        shape: "circle",
        buttonsize: 30
      },
      geometry: {
        anchor: { x: 1.5, y: 7 },
        size: 300,
        orientation: "horizontal",
        label_position: "right",
        shape: "rect",
        buttonsize: 30
      }
    }
  },
  simulation: {
    delay: 10,
    neuron_size: 5
  }
}, E = {
  dt: 1,
  L: 100,
  agentsize: 1,
  response_magnitude: {
    range: [0, 0.3],
    default: 0.1
  },
  lateral_interaction: {
    range: [0.5, 20],
    default: 6
  },
  input_space: {
    choices: ["circle", "triangle", "square", "cross"],
    default: 0
  },
  geometry: {
    choices: ["256 x 1", "64 x 4", "16 x 16"],
    dimensions: [{ nx: 256, ny: 1 }, { nx: 64, ny: 4 }, { nx: 16, ny: 16 }],
    default: 2
  }
}, Fi = (t) => Tt(Ii(t), (n) => {
  n[1].id = n[0], n[1].label = kd(ih(n[0]), /_/g, " ");
}), Li = (t) => Tt(Ii(t), (n) => n[1]), Di = (t, n) => Bt(t, (e, r) => e.widget = n[r]), cp = (t) => Ci(t, (n) => ki(n, "range")), hp = (t) => Ci(t, (n) => ki(n, "choices"));
G().domain([0, 360]).range([0, 2 * Math.PI]);
G().range([0, 360]).domain([0, 2 * Math.PI]);
const Sr = (t, n) => {
  const e = t.x - n.x, r = t.y - n.y;
  return Math.sqrt(e * e + r * r);
}, Hi = (t, n) => {
  const e = t.x, r = t.y;
  let i = !1;
  for (var o = 0, a = n.length - 1; o < n.length; a = o++) {
    var s = n[o].x, u = n[o].y, l = n[a].x, f = n[a].y, c = u > r != f > r && e < (l - s) * (r - u) / (f - u) + s;
    c && (i = !i);
  }
  return i;
}, ke = cp(E), qi = hp(E);
Fi(ke);
Fi(qi);
const Bi = Li(ke), Xi = Li(qi), sn = Tt(
  Bi,
  (t) => ip().id(t.id).label(t.label).range(t.range).value(t.default).size(A.widgets.slider_size).knob(A.widgets.slider_knob).girth(A.widgets.slider_girth)
), ce = Tt(
  Xi,
  (t) => op().choices(t.choices).id(t.id).value(t.default).orientation(A.widgets.radio[t.id].orientation).labelposition(A.widgets.radio[t.id].label_position).size(A.widgets.radio[t.id].size).shape(A.widgets.radio[t.id].shape).buttonsize(A.widgets.radio[t.id].buttonsize)
);
Di(Bi, sn);
Di(Xi, ce);
const at = Ie().actions(["play", "pause"]), In = Ie().actions(["back"]), kn = Ie().actions(["rewind"]), dp = [at, In, kn], pp = (t, n) => {
  const e = n.position(A.widgets.slider_anchor.x, On(sn.length).map((r) => A.widgets.slider_anchor.y + A.widgets.slider_gap * r));
  Bt(ce, (r) => {
    const i = n.position(A.widgets.radio[r.id()].anchor.x, A.widgets.radio[r.id()].anchor.y);
    r.position(i);
  }), sn.forEach((r, i) => r.position(e[i])), at.position(n.position(A.widgets.playbutton_anchor.x, A.widgets.playbutton_anchor.y)).size(A.widgets.playbutton_size), kn.position(n.position(A.widgets.backbutton_anchor.x, A.widgets.backbutton_anchor.y)), In.position(n.position(A.widgets.resetbutton_anchor.x, A.widgets.resetbutton_anchor.y)), t.selectAll(null).data(sn).enter().append(Xn), t.selectAll(null).data(dp).enter().append(Xn), t.selectAll(null).data(ce).enter().append(Xn);
}, gp = (t) => {
  Bt(ke, (n) => n.widget.reset(t, n.default));
}, yp = (t, n) => [t % n, Math.floor(t / n)], _p = (t, n, e) => n * e + t, mp = (t, n, e) => {
  const r = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let i = [];
  return r.forEach(function(o) {
    var a = o[0], s = o[1], u = yp(t, n), l = u[0], f = u[1], c = l + a, h = f + s;
    c < n && h < e && c >= 0 && h >= 0 && i.push(_p(c, h, n));
  }), i;
}, wp = (t, n) => {
  var e = On(t * n).map(function(r) {
    return { m: r % t, n: Math.floor(r / t) };
  });
  return e.forEach(function(r, i) {
    r.neighbors = mp(i, t, n).map(function(o) {
      return e[o];
    });
  }), e;
}, Ce = {
  circle: On(101).map(function(t) {
    return { x: Math.cos(t / 100 * 2 * Math.PI), y: Math.sin(t / 100 * 2 * Math.PI) };
  }),
  triangle: [{ x: -1, y: -1 }, { x: 1, y: -1 }, { x: 0, y: 1 }, { x: -1, y: -1 }],
  square: [{ x: -1, y: -1 }, { x: 1, y: -1 }, { x: 1, y: 1 }, { x: -1, y: 1 }, { x: -1, y: -1 }],
  cross: [
    { x: 1 / 3, y: -1 / 3 },
    { x: 1, y: -1 / 3 },
    { x: 1, y: 1 / 3 },
    { x: 1 / 3, y: 1 / 3 },
    { x: 1 / 3, y: 1 },
    { x: -1 / 3, y: 1 },
    { x: -1 / 3, y: 1 / 3 },
    { x: -1, y: 1 / 3 },
    { x: -1, y: -1 / 3 },
    { x: -1 / 3, y: -1 / 3 },
    { x: -1 / 3, y: -1 },
    { x: 1 / 3, y: -1 },
    { x: 1 / 3, y: -1 / 3 }
  ]
};
var ft = [], he = [], W = {};
const vp = () => {
  E.timer = {}, E.tick = 0;
  const t = E.geometry.dimensions[E.geometry.widget.value()];
  ft = wp(t.nx, t.ny), he = [], ft.forEach(function(n) {
    n.x = 2 * Math.random() - 1, n.y = 2 * Math.random() - 1, n.neighbors.forEach(function(e) {
      he.push({ source: n, target: e });
    });
  });
}, bp = () => {
  E.tick++, W = { x: 2 * Math.random() - 1, y: 2 * Math.random() - 1 };
  const t = Ce[E.input_space.choices[E.input_space.widget.value()]], n = E.response_magnitude.widget.value(), e = E.lateral_interaction.widget.value();
  if (Hi(W, t)) {
    Bt(ft, (o) => o.state = "clear");
    let r = ft.map((o) => Sr(o, W)), i = ft[r.indexOf(Sd(r))];
    i.state = "winner", Bt(ft, (o) => {
      const a = n * Math.exp(-((o.n - i.n) * (o.n - i.n) + (o.m - i.m) * (o.m - i.m)) / e ** 2);
      let s = Sr(W, o);
      var u = (W.x - o.x) / s, l = (W.y - o.y) / s;
      o.x += a * u, o.y += a * l;
    });
  }
}, xp = "_neuron_1czyw_1", Mp = "_synapse_1czyw_7", $p = "_boundary_1czyw_13", kt = {
  neuron: xp,
  synapse: Mp,
  boundary: $p
}, J = G().domain([-1, 1]), Q = G().domain([-1, 1]);
var Ap = ul().x((t) => J(t.x)).y((t) => Q(t.y));
const Tp = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  J.range([n.display_margin, e - 2 * n.display_margin]), Q.range([r - 2 * n.display_margin, n.display_margin]), t.selectAll("#origin").remove();
  const i = t.append("g").attr("id", "origin");
  i.append("path").datum(Ce[E.input_space.choices[E.input_space.widget.value()]]).attr("d", Ap).attr("class", kt.boundary), i.selectAll(null).data(he).enter().append("line").attr("class", kt.synapse).attr("x1", function(o) {
    return J(o.source.x);
  }).attr("y1", function(o) {
    return Q(o.source.y);
  }).attr("x2", function(o) {
    return J(o.target.x);
  }).attr("y2", function(o) {
    return Q(o.target.y);
  }), i.selectAll(null).data(ft).enter().append("circle").attr("class", kt.neuron).attr("r", A.simulation.neuron_size).attr("transform", function(o) {
    return "translate(" + J(o.x) + "," + Q(o.y) + ")";
  });
}, Sp = (t, n) => {
  const e = Ce[E.input_space.choices[E.input_space.widget.value()]];
  Hi(W, e) && (t.select("#origin").append("circle").attr("r", 2).style("fill", "darkred").attr("transform", "translate(" + J(W.x) + "," + Q(W.y) + ")").transition().duration(500).attr("r", 10).style("opacity", 0).remove(), t.select("#origin").selectAll("." + kt.neuron).attr("transform", function(r) {
    return "translate(" + J(r.x) + "," + Q(r.y) + ")";
  }), t.select("#origin").selectAll("." + kt.synapse).attr("x1", function(r) {
    return J(r.source.x);
  }).attr("y1", function(r) {
    return Q(r.source.y);
  }).attr("x2", function(r) {
    return J(r.target.x);
  }).attr("y2", function(r) {
    return Q(r.target.y);
  }));
};
function Pp(t, n) {
  bp(), Sp(t);
}
function un(t, n) {
  vp(), Tp(t, n);
}
var Pr = {};
const Ep = (t, n) => {
  at.value() == 1 ? Pr = $s(() => Pp(t), A.simulation.delay) : Pr.stop();
}, zp = (t, n, e) => {
  kn.update(() => gp(n)), at.update(() => Ep(t)), In.update(() => un(t, e)), E.input_space.widget.update(() => un(t, e)), E.geometry.widget.update(() => un(t, e));
}, Np = {
  name: "@explorables/yo_kohonen",
  title: "Yo, Kohonen!",
  subtitle: "Kohonen's Self-Organizing Map",
  description: "This explorable illustrates the dynamics of a simple neural network model that is able to self-organize a one- or two-dimensional representation of a complicate input space.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Op(t, n = Gi) {
  const e = fp(t, n), r = e.display, i = e.controls, o = e.grid;
  return pp(i, o), zp(r, i, n), un(r, n), {
    halt() {
      at.value() === 1 && at.press(i);
    },
    reset() {
      at.value() === 1 && at.press(i), kn.press(i), In.press(i);
    },
    config: n,
    meta: Np
  };
}
export {
  Gi as config,
  Op as default,
  Op as load,
  Np as meta
};
