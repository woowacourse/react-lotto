var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from '../../pkg/@emotion/styled.js';
var Styled = {
  Button: styled.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 0 0.8rem;\n    height: 44px;\n    border: none;\n    background-color: ", ";\n    border-radius: 6px;\n    min-width: ", ";\n    cursor: pointer;\n    font-size: 18px;\n    font-family: 'Do Hyeon', sans-serif;\n    width: ", ";\n  "])), function (props) {
    return props.bgColor || props.theme.colors.primary;
  }, function (props) {
    return props.minWidth;
  }, function (props) {
    return !props.minWidth && '100%';
  })
};
export default Styled;