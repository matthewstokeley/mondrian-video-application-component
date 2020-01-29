"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDatasetButton = exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n\n  border-radius: 2rem;\n  padding: 1rem;\n  transition: all 200ms ease-in; \n  \n  background-color: #2B949E;\n\n  color: #fff;\n\n  &:hover {\n    border-color: 1px solid #000;\n    cursor: pointer;\n    background: #fafafa;\n  }\n  \n  &:focus,\n  &:focus-within {\n    outline: none;\n  }\n  \n  &:active {\n\n  }\n\n  &:visited {\n\n  }\n\n  > span {\n\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = {
  title: 'Button',
  component: Button
};
exports["default"] = _default;

var Button =
/*#__PURE__*/
_styledComponents["default"].button.withConfig({
  displayName: "carousel-component__Button",
  componentId: "grmvoy-0"
})(_templateObject());

var StyledDatasetButton = function StyledDatasetButton(props) {
  return _react["default"].createElement(Button, {
    onclick: "{mediator.listen(event)}"
  }, _react["default"].createElement("span", {
    role: "navigation",
    "aria-label": "Carousel UI Control",
    "aria-pressed": "false",
    "data-direction": "{props.direction}"
  }, "\u2192"));
};

exports.StyledDatasetButton = StyledDatasetButton;
