var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from '../../pkg/@emotion/styled.js';
var Styled = {
  Container: styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    margin-right: 0.4em;\n    border-radius: 50%;\n    text-align: center;\n    background-color: ", ";\n  "])), function (_ref) {
    var number = _ref.number,
        enabled = _ref.enabled;
    if (!enabled) return 'none';
    if (number < 10) return '#CF9E95';else if (number < 20) return '#9B9EC3';else if (number < 30) return '#FFDB93';else if (number < 40) return '#A8CFAD';else return '#FFA8A8';
  })
};
export default Styled;