import { r as react } from './index-370e7390.js';
import { _ as _extends } from './extends-7477639a.js';

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

var e = "-ms-";
var r = "-moz-";
var a = "-webkit-";
var c = "comm";
var n = "rule";
var t = "decl";
var i = "@import";
var p = "@keyframes";
var k = Math.abs;
var d = String.fromCharCode;

function m(e, r) {
  return (((r << 2 ^ z(e, 0)) << 2 ^ z(e, 1)) << 2 ^ z(e, 2)) << 2 ^ z(e, 3);
}

function g(e) {
  return e.trim();
}

function x(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}

function y(e, r, a) {
  return e.replace(r, a);
}

function j(e, r) {
  return e.indexOf(r);
}

function z(e, r) {
  return e.charCodeAt(r) | 0;
}

function C(e, r, a) {
  return e.slice(r, a);
}

function A(e) {
  return e.length;
}

function M(e) {
  return e.length;
}

function O(e, r) {
  return r.push(e), e;
}

function S(e, r) {
  return e.map(r).join("");
}

var q = 1;
var B = 1;
var D = 0;
var E = 0;
var F = 0;
var G = "";

function H(e, r, a, c, n, t, s) {
  return {
    value: e,
    root: r,
    parent: a,
    type: c,
    props: n,
    children: t,
    line: q,
    column: B,
    length: s,
    return: ""
  };
}

function I(e, r, a) {
  return H(e, r.root, r.parent, a, r.props, r.children, 0);
}

function J() {
  return F;
}

function K() {
  F = E > 0 ? z(G, --E) : 0;
  if (B--, F === 10) B = 1, q--;
  return F;
}

function L() {
  F = E < D ? z(G, E++) : 0;
  if (B++, F === 10) B = 1, q++;
  return F;
}

function N() {
  return z(G, E);
}

function P() {
  return E;
}

function Q(e, r) {
  return C(G, e, r);
}

function R(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;

    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;

    case 58:
      return 3;

    case 34:
    case 39:
    case 40:
    case 91:
      return 2;

    case 41:
    case 93:
      return 1;
  }

  return 0;
}

function T(e) {
  return q = B = 1, D = A(G = e), E = 0, [];
}

function U(e) {
  return G = "", e;
}

function V(e) {
  return g(Q(E - 1, _(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}

function X(e) {
  while (F = N()) if (F < 33) L();else break;

  return R(e) > 2 || R(F) > 3 ? "" : " ";
}

function Z(e, r) {
  while (--r && L()) if (F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97) break;

  return Q(e, P() + (r < 6 && N() == 32 && L() == 32));
}

function _(e) {
  while (L()) switch (F) {
    case e:
      return E;

    case 34:
    case 39:
      return _(e === 34 || e === 39 ? e : F);

    case 40:
      if (e === 41) _(e);
      break;

    case 92:
      L();
      break;
  }

  return E;
}

function ee(e, r) {
  while (L()) if (e + F === 47 + 10) break;else if (e + F === 42 + 42 && N() === 47) break;

  return "/*" + Q(r, E - 1) + "*" + d(e === 47 ? e : L());
}

function re(e) {
  while (!R(N())) L();

  return Q(e, E);
}

function ae(e) {
  return U(ce("", null, null, null, [""], e = T(e), 0, [0], e));
}

function ce(e, r, a, c, n, t, s, u, i) {
  var f = 0;
  var o = 0;
  var l = s;
  var v = 0;
  var h = 0;
  var p = 0;
  var b = 1;
  var w = 1;
  var $ = 1;
  var k = 0;
  var m = "";
  var g = n;
  var x = t;
  var j = c;
  var z = m;

  while (w) switch (p = k, k = L()) {
    case 34:
    case 39:
    case 91:
    case 40:
      z += V(k);
      break;

    case 9:
    case 10:
    case 13:
    case 32:
      z += X(p);
      break;

    case 92:
      z += Z(P() - 1, 7);
      continue;

    case 47:
      switch (N()) {
        case 42:
        case 47:
          O(te(ee(L(), P()), r, a), i);
          break;

        default:
          z += "/";
      }

      break;

    case 123 * b:
      u[f++] = A(z) * $;

    case 125 * b:
    case 59:
    case 0:
      switch (k) {
        case 0:
        case 125:
          w = 0;

        case 59 + o:
          if (h > 0 && A(z) - l) O(h > 32 ? se(z + ";", c, a, l - 1) : se(y(z, " ", "") + ";", c, a, l - 2), i);
          break;

        case 59:
          z += ";";

        default:
          O(j = ne(z, r, a, f, o, n, u, m, g = [], x = [], l), t);
          if (k === 123) if (o === 0) ce(z, r, j, j, g, t, l, u, x);else switch (v) {
            case 100:
            case 109:
            case 115:
              ce(e, j, j, c && O(ne(e, j, j, 0, 0, n, u, m, n, g = [], l), x), n, x, l, u, c ? g : x);
              break;

            default:
              ce(z, j, j, j, [""], x, l, u, x);
          }
      }

      f = o = h = 0, b = $ = 1, m = z = "", l = s;
      break;

    case 58:
      l = 1 + A(z), h = p;

    default:
      if (b < 1) if (k == 123) --b;else if (k == 125 && b++ == 0 && K() == 125) continue;

      switch (z += d(k), k * b) {
        case 38:
          $ = o > 0 ? 1 : (z += "\f", -1);
          break;

        case 44:
          u[f++] = (A(z) - 1) * $, $ = 1;
          break;

        case 64:
          if (N() === 45) z += V(L());
          v = N(), o = A(m = z += re(P())), k++;
          break;

        case 45:
          if (p === 45 && A(z) == 2) b = 0;
      }

  }

  return t;
}

function ne(e, r, a, c, t, s, u, i, f, o, l) {
  var v = t - 1;
  var h = t === 0 ? s : [""];
  var p = M(h);

  for (var b = 0, w = 0, $ = 0; b < c; ++b) for (var d = 0, m = C(e, v + 1, v = k(w = u[b])), x = e; d < p; ++d) if (x = g(w > 0 ? h[d] + " " + m : y(m, /&\f/g, h[d]))) f[$++] = x;

  return H(e, r, a, t === 0 ? n : i, f, o, l);
}

function te(e, r, a) {
  return H(e, r, a, c, d(J()), C(e, 2, -2), 0);
}

function se(e, r, a, c) {
  return H(e, r, a, t, C(e, 0, c), C(e, c + 1, -1), c);
}

function ue(c, n) {
  switch (m(c, n)) {
    case 5103:
      return a + "print-" + c + c;

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + c + c;

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + c + r + c + e + c + c;

    case 6828:
    case 4268:
      return a + c + e + c + c;

    case 6165:
      return a + c + e + "flex-" + c + c;

    case 5187:
      return a + c + y(c, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + c;

    case 5443:
      return a + c + e + "flex-item-" + y(c, /flex-|-self/, "") + c;

    case 4675:
      return a + c + e + "flex-line-pack" + y(c, /align-content|flex-|-self/, "") + c;

    case 5548:
      return a + c + e + y(c, "shrink", "negative") + c;

    case 5292:
      return a + c + e + y(c, "basis", "preferred-size") + c;

    case 6060:
      return a + "box-" + y(c, "-grow", "") + a + c + e + y(c, "grow", "positive") + c;

    case 4554:
      return a + y(c, /([^-])(transform)/g, "$1" + a + "$2") + c;

    case 6187:
      return y(y(y(c, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c, "") + c;

    case 5495:
    case 3959:
      return y(c, /(image-set\([^]*)/, a + "$1" + "$`$1");

    case 4968:
      return y(y(c, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + c + c;

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(c, /(.+)-inline(.+)/, a + "$1$2") + c;

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (A(c) - 1 - n > 6) switch (z(c, n + 1)) {
        case 109:
          if (z(c, n + 4) !== 45) break;

        case 102:
          return y(c, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3" + "$1" + r + (z(c, n + 3) == 108 ? "$3" : "$2-$3")) + c;

        case 115:
          return ~j(c, "stretch") ? ue(y(c, "stretch", "fill-available"), n) + c : c;
      }
      break;

    case 4949:
      if (z(c, n + 1) !== 115) break;

    case 6444:
      switch (z(c, A(c) - 3 - (~j(c, "!important") && 10))) {
        case 107:
          return y(c, ":", ":" + a) + c;

        case 101:
          return y(c, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (z(c, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + a + "$2$3" + "$1" + e + "$2box$3") + c;
      }

      break;

    case 5936:
      switch (z(c, n + 11)) {
        case 114:
          return a + c + e + y(c, /[svh]\w+-[tblr]{2}/, "tb") + c;

        case 108:
          return a + c + e + y(c, /[svh]\w+-[tblr]{2}/, "tb-rl") + c;

        case 45:
          return a + c + e + y(c, /[svh]\w+-[tblr]{2}/, "lr") + c;
      }

      return a + c + e + c + c;
  }

  return c;
}

function ie(e, r) {
  var a = "";
  var c = M(e);

  for (var n = 0; n < c; n++) a += r(e[n], n, e, r) || "";

  return a;
}

function fe(e, r, a, s) {
  switch (e.type) {
    case i:
    case t:
      return e.return = e.return || e.value;

    case c:
      return "";

    case n:
      e.value = e.props.join(",");
  }

  return A(a = ie(e.children, s)) ? e.return = e.value + "{" + a + "}" : "";
}

function oe(e) {
  var r = M(e);
  return function (a, c, n, t) {
    var s = "";

    for (var u = 0; u < r; u++) s += e[u](a, c, n, t) || "";

    return s;
  };
}

function le(e) {
  return function (r) {
    if (!r.root) if (r = r.return) e(r);
  };
}

function ve(c, s, u, i) {
  if (!c.return) switch (c.type) {
    case t:
      c.return = ue(c.value, c.length);
      break;

    case p:
      return ie([I(y(c.value, "@", "@" + a), c, "")], i);

    case n:
      if (c.length) return S(c.props, function (n) {
        switch (x(n, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ie([I(y(n, /:(read-\w+)/, ":" + r + "$1"), c, "")], i);

          case "::placeholder":
            return ie([I(y(n, /:(plac\w+)/, ":" + a + "input-$1"), c, ""), I(y(n, /:(plac\w+)/, ":" + r + "$1"), c, ""), I(y(n, /:(plac\w+)/, e + "input-$1"), c, "")], i);
        }

        return "";
      });
  }
}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (R(character)) {
      case 0:
        // &\f
        if (character === 38 && N() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += re(E - 1);
        break;

      case 2:
        parsed[index] += V(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = N() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += d(character);
    }
  } while (character = L());

  return parsed;
};

var getRules = function getRules(value, points) {
  return U(toRules(T(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();

var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};

var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

var defaultStylisPlugins = [ve];

var createCache = function createCache(options) {
  var key = options.key;

  if (key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to

    Array.prototype.forEach.call(ssrStyles, function (node) {
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' ');

      if (attrib[0] !== key) {
        return;
      } // $FlowFixMe


      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  {
    var currentSheet;
    var finalizingPlugins = [fe, le(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = oe(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return ie(ae(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var EmotionCacheContext = /* #__PURE__ */react.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);
EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/react.forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = react.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */react.createContext({});

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    return mergedTheme;
  }

  return _extends({}, outerTheme, {}, theme);
};

var createCacheWithTheme = /* #__PURE__ */weakMemoize(function (outerTheme) {
  return weakMemoize(function (theme) {
    return getTheme(outerTheme, theme);
  });
});

var ThemeProvider = function ThemeProvider(props) {
  var theme = react.useContext(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/react.createElement(ThemeContext.Provider, {
    value: theme
  }, props.children);
};

export { ThemeProvider as T, ThemeContext as a, withEmotionCache as w };
