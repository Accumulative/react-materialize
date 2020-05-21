"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UserShape = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserShape = {
  background: _propTypes.default.string,
  image: _propTypes.default.string,
  name: _propTypes.default.string,
  email: _propTypes.default.string
};
exports.UserShape = UserShape;

var UserView = function UserView(_ref) {
  var background = _ref.background,
      image = _ref.image,
      name = _ref.name,
      email = _ref.email;
  return _react.default.createElement("div", {
    className: "user-view"
  }, background && _react.default.createElement("div", {
    className: "background"
  }, _react.default.createElement("img", {
    src: background
  })), image && _react.default.createElement("a", {
    href: "#!user"
  }, _react.default.createElement("img", {
    className: "circle",
    src: image
  })), name && _react.default.createElement("a", {
    href: "#!name"
  }, _react.default.createElement("span", {
    className: "white-text name"
  }, name)), email && _react.default.createElement("a", {
    href: "#!email"
  }, _react.default.createElement("span", {
    className: "white-text email"
  }, email)));
};

UserView.propTypes = UserShape;
var _default = UserView;
exports.default = _default;