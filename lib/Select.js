"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _idgen = _interopRequireDefault(require("./idgen"));

var _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(Select, [{
    key: "handleChange",
    value: function handleChange(event) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          multiple = _this$props.multiple;
      var value = event.target.value;

      if (multiple) {
        value = this.instance.getSelectedValues();
      }

      if (onChange) onChange(event);
      this.setState({
        value: value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options;

      if (typeof M !== 'undefined') {
        this.instance = M.FormSelect.init(this._selectRef, options);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var options = this.props.options;

      if (this.instance) {
        this.instance.destroy();
      }

      this.instance = M.FormSelect.init(this._selectRef, options);
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
      var _this2 = this;

      var _this$props2 = this.props,
          s = _this$props2.s,
          m = _this$props2.m,
          l = _this$props2.l,
          xl = _this$props2.xl,
          noLayout = _this$props2.noLayout,
          browserDefault = _this$props2.browserDefault,
          icon = _this$props2.icon,
          label = _this$props2.label,
          selectClassName = _this$props2.selectClassName,
          success = _this$props2.success,
          error = _this$props2.error,
          validate = _this$props2.validate,
          children = _this$props2.children,
          multiple = _this$props2.multiple,
          other = _objectWithoutProperties(_this$props2, ["s", "m", "l", "xl", "noLayout", "browserDefault", "icon", "label", "selectClassName", "success", "error", "validate", "children", "multiple"]);

      var sizes = {
        s: s,
        m: m,
        l: l,
        xl: xl
      };
      var responsiveClasses;

      if (!noLayout) {
        responsiveClasses = {
          col: true
        };

        _constants.default.SIZES.forEach(function (size) {
          responsiveClasses[size + sizes[size]] = sizes[size];
        });
      }

      var wrapperClasses = (0, _classnames.default)('input-field', responsiveClasses);

      var selectProps = _objectSpread({
        type: 'select',
        value: this.state.value,
        multiple: multiple
      }, other);

      var renderLabel = function renderLabel() {
        return label && _react.default.createElement("label", {
          "data-success": success,
          "data-error": error,
          htmlFor: selectProps.id
        }, label);
      };

      var renderIcon = function renderIcon() {
        return icon && _react.default.cloneElement(icon, {
          className: 'prefix'
        });
      };

      var renderOption = function renderOption(child) {
        return (0, _react.cloneElement)(child, {
          key: child.props.value
        });
      };

      var renderOptions = function renderOptions() {
        return _react.Children.map(children, renderOption);
      };

      return _react.default.createElement("div", {
        className: wrapperClasses
      }, renderIcon(), _react.default.createElement("select", _extends({
        value: this.state.value,
        ref: function ref(el) {
          _this2._selectRef = el;
        },
        onChange: this.handleChange,
        className: (0, _classnames.default)(_defineProperty({
          validate: validate,
          multiple: multiple
        }, 'browser-default', browserDefault), selectClassName)
      }, selectProps), renderOptions()), renderLabel());
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  /*
   * Use browser default styles
   */
  browserDefault: _propTypes.default.bool,

  /*
   * Strip away all layout classes such as col and sX
   */
  noLayout: _propTypes.default.bool,

  /*
   * Responsive size for small size screens (Mobile Devices <= 600px)
   */
  s: _propTypes.default.number,

  /*
   * Responsive size for middle size screens (Tablet Devices > 600px)
   */
  m: _propTypes.default.number,

  /*
   * Responsive size for large size screens (Desktop Devices > 992px)
   */
  l: _propTypes.default.number,

  /**
   * Responsive size for extra large screens (Large Desktop Devices > 1200px)
   */
  xl: _propTypes.default.number,

  /*
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /*
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /*
   * prefix icon
   */
  icon: _propTypes.default.node,

  /*
   * label text
   */
  label: _propTypes.default.string,

  /*
   * Input initial value
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),

  /*
   * Add validate class to input
   */
  validate: _propTypes.default.bool,

  /*
   * Custom success message
   */
  success: _propTypes.default.string,

  /*
   * Custom error message
   */
  error: _propTypes.default.string,

  /*
   * Additional classes for input
   */
  selectClassName: _propTypes.default.string,

  /*
   * override type="text"
   */
  type: _propTypes.default.string,

  /*
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /*
   * Render a multiple dropdown,
   * use instance.getSelectedValues()
   * to get array of selected values
   */
  multiple: _propTypes.default.bool,
  children: _propTypes.default.any,

  /**
   * Options for the select
   * <a target="_blank" href="https://materializecss.com/select.html#options">https://materializecss.com/select.html</a>
   */
  options: _propTypes.default.shape({
    classes: _propTypes.default.string,

    /**
     * Options for the dropdown
     * <a target="_blank" href="http://materializecss.com/dropdown.html#options">http://materializecss.com/dropdown.html</a>
     */
    dropdownOptions: _propTypes.default.shape({
      alignment: _propTypes.default.oneOf(['left', 'right']),
      autoTrigger: _propTypes.default.bool,
      constrainWidth: _propTypes.default.bool,
      container: _propTypes.default.node,
      coverTrigger: _propTypes.default.bool,
      closeOnClick: _propTypes.default.bool,
      hover: _propTypes.default.bool,
      inDuration: _propTypes.default.number,
      outDuration: _propTypes.default.number,
      onOpenStart: _propTypes.default.func,
      onOpenEnd: _propTypes.default.func,
      onCloseStart: _propTypes.default.func,
      onCloseEnd: _propTypes.default.func
    })
  })
};
Select.defaultProps = {
  id: "Select-".concat((0, _idgen.default)()),
  options: {
    classes: '',
    dropdownOptions: {
      alignment: 'left',
      autoTrigger: true,
      constrainWidth: true,
      container: null,
      coverTrigger: true,
      closeOnClick: true,
      hover: false,
      inDuration: 150,
      outDuration: 250,
      onOpenStart: null,
      onOpenEnd: null,
      onCloseStart: null,
      onCloseEnd: null
    }
  }
};
var _default = Select;
exports.default = _default;