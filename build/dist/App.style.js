var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from './pkg/@emotion/styled.js';
var Styled = {
  Container: styled.main(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    max-width: 420px;\n    width: 100%;\n    margin: 0 auto;\n    padding: 1.8rem;\n    font-size: 18px;\n    font-family: 'Do Hyeon', sans-serif;\n    min-height: 70vh;\n    box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.2);\n  "]))),
  Title: styled.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font-size: 2.4em;\n    margin: 0;\n  "])))
};
export default Styled;