var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from '../../pkg/@emotion/styled.js';
var Styled = {
  Container: styled.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    list-style: none;\n    margin: 2rem 0;\n    padding: 0;\n  "]))),
  Lotto: styled.li(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n\n    &::before {\n      content: '\uD83C\uDF9F\uFE0F';\n      font-size: 1.5rem;\n      margin-right: 15px;\n    }\n\n    & + & {\n      margin-top: 10px;\n    }\n  "])))
};
export default Styled;