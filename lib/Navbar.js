"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _SearchForm = _interopRequireDefault(require("./SearchForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navbar).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options;

      if (typeof M !== 'undefined') {
        this.instance = M.Sidenav.init(this._sidenav, options);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          brand = _this$props.brand,
          className = _this$props.className,
          extendWith = _this$props.extendWith,
          fixed = _this$props.fixed,
          alignLinks = _this$props.alignLinks,
          centerLogo = _this$props.centerLogo,
          centerChildren = _this$props.centerChildren,
          search = _this$props.search,
          menuIcon = _this$props.menuIcon,
          sidenav = _this$props.sidenav;
      var brandClasses = (0, _classnames.default)({
        'brand-logo': true,
        right: alignLinks == 'left',
        center: centerLogo
      });
      var navCSS = (0, _classnames.default)({
        'nav-extended': extendWith
      }, className);
      var navMobileCSS = (0, _classnames.default)('hide-on-med-and-down', [alignLinks]);

      var links = _react.Children.map(children, function (link, index) {
        return _react.default.createElement("li", {
          key: index
        }, link);
      });

      var sidenavLinks = sidenav ? sidenav : _react.Children.map(children, function (link, index) {
        var clonedLink = link && link.props && link.props.id ? _react.default.cloneElement(link, _objectSpread({}, link.props, {
          id: "sidenav-".concat(link.props.id)
        })) : link;
        return _react.default.createElement("li", {
          key: index
        }, clonedLink);
      });

      var navbar = _react.default.createElement("nav", {
        className: navCSS
      }, _react.default.createElement("div", {
        className: centerChildren ? 'nav-wrapper container' : 'nav-wrapper'
      }, search ? _react.default.createElement(_SearchForm.default, null) : _react.default.createElement(_react.Fragment, null, brand && _react.default.cloneElement(brand, {
        className: (0, _classnames.default)(brand.props.className, brandClasses)
      }), _react.default.createElement("a", {
        href: "#!",
        "data-target": "mobile-nav",
        className: "sidenav-trigger"
      }, menuIcon), _react.default.createElement("ul", {
        className: navMobileCSS
      }, links))), extendWith && _react.default.createElement("div", {
        className: "nav-content"
      }, extendWith));

      if (fixed) {
        navbar = _react.default.createElement("div", {
          className: "navbar-fixed"
        }, navbar);
      }

      return _react.default.createElement(_react.Fragment, null, navbar, _react.default.createElement("ul", {
        id: "mobile-nav",
        className: (0, _classnames.default)('sidenav', [alignLinks]),
        ref: function ref(ul) {
          _this._sidenav = ul;
        }
      }, sidenavLinks));
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.propTypes = {
  brand: _propTypes.default.node,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  extendWith: _propTypes.default.node,
  search: _propTypes.default.bool,

  /**
   * Allows for custom sidenav node, used for mobile view
   */
  sidenav: _propTypes.default.node,

  /**
   * left makes the navbar links left aligned, right makes them right aligned
   */
  alignLinks: _propTypes.default.oneOf(['left', 'right']),

  /**
   * The logo will center itself on medium and down screens.
   * Specifying centerLogo as a prop the logo will always be centered
   */
  centerLogo: _propTypes.default.bool,

  /**
   * The Navbar children will be constrained in a container rather than spread out to the far edges
   */
  centerChildren: _propTypes.default.bool,

  /**
   * Makes the navbar fixed
   */
  fixed: _propTypes.default.bool,

  /**
   * Options hash for the sidenav.
   * More info: https://materializecss.com/sidenav.html#options
   */
  options: _propTypes.default.shape({
    // Side of screen on which Sidenav appears.
    edge: _propTypes.default.oneOf(['left', 'right']),
    // Allow swipe gestures to open / close Sidenav.
    draggable: _propTypes.default.bool,
    // Length in ms of enter transition.
    inDuration: _propTypes.default.number,
    // Length in ms of exit transition.
    outDuration: _propTypes.default.number,
    // Function called when sidenav starts entering.
    onOpenStart: _propTypes.default.func,
    // Function called when sidenav finishes entering.
    onOpenEnd: _propTypes.default.func,
    // Function called when sidenav starts exiting.
    onCloseStart: _propTypes.default.func,
    // Function called when sidenav finishes exiting.
    onCloseEnd: _propTypes.default.func,
    // Prevent page from scrolling while sidenav is open.
    preventScrolling: _propTypes.default.bool
  }),
  menuIcon: _propTypes.default.node.isRequired
};
Navbar.defaultProps = {
  options: {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  },
  menuIcon: _react.default.createElement(_Icon.default, null, "menu")
};
var _default = Navbar;
exports.default = _default;