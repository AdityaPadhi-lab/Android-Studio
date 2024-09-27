"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
console.clear();
var slides = [{
  title: "Machu Picchu",
  subtitle: "Peru",
  description: "Adventure is never far away",
  image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
}, {
  title: "Chamonix",
  subtitle: "France",
  description: "Let your dreams come true",
  image: "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
}, {
  title: "Mimisa Rocks",
  subtitle: "Australia",
  description: "A piece of heaven",
  image: "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
}, {
  title: "Four",
  subtitle: "Australia",
  description: "A piece of heaven",
  image: "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
}, {
  title: "Five",
  subtitle: "Australia",
  description: "A piece of heaven",
  image: "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
}];
function useTilt(active) {
  var ref = React.useRef(null);
  React.useEffect(function () {
    if (!ref.current || !active) {
      return;
    }
    var state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };
    var el = ref.current;
    var handleMouseMove = function handleMouseMove(e) {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      var px = (state.mouseX - state.rect.left) / state.rect.width;
      var py = (state.mouseY - state.rect.top) / state.rect.height;
      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };
    el.addEventListener("mousemove", handleMouseMove);
    return function () {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);
  return ref;
}
var initialState = {
  slideIndex: 0
};
var slidesReducer = function slidesReducer(state, event) {
  if (event.type === "NEXT") {
    return _objectSpread(_objectSpread({}, state), {}, {
      slideIndex: (state.slideIndex + 1) % slides.length
    });
  }
  if (event.type === "PREV") {
    return _objectSpread(_objectSpread({}, state), {}, {
      slideIndex: state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    });
  }
};
function Slide(_ref) {
  var slide = _ref.slide,
    offset = _ref.offset;
  var active = offset === 0 ? true : null;
  var ref = useTilt(active);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "slide",
    "data-active": active,
    style: {
      "--offset": offset,
      "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "slideBackground",
    style: {
      backgroundImage: "url('".concat(slide.image, "')")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "slideContent",
    style: {
      backgroundImage: "url('".concat(slide.image, "')")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "slideContentInner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "slideTitle"
  }, slide.title), /*#__PURE__*/React.createElement("h3", {
    className: "slideSubtitle"
  }, slide.subtitle), /*#__PURE__*/React.createElement("p", {
    className: "slideDescription"
  }, slide.description))));
}
function App() {
  var _React$useReducer = React.useReducer(slidesReducer, initialState),
    _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
    state = _React$useReducer2[0],
    dispatch = _React$useReducer2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "slides"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return dispatch({
        type: "PREV"
      });
    }
  }, "\u2039"), [].concat(slides, slides, slides).map(function (slide, i) {
    var offset = slides.length + (state.slideIndex - i);
    return /*#__PURE__*/React.createElement(Slide, {
      slide: slide,
      offset: offset,
      key: i
    });
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return dispatch({
        type: "NEXT"
      });
    }
  }, "\u203A"));
}
var elApp = document.getElementById("app");
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), elApp);
