var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from '../../pkg/@emotion/styled.js';
var Styled = {
  Form: styled.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n  "]))),
  InputGroup: styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    margin: 2rem 0;\n  "]))),
  Fieldset: styled.fieldset(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border: none;\n    padding: 0;\n    margin: 0;\n  "]))),
  NumberInput: styled.input(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    max-width: 26px;\n    min-height: 26px;\n    padding: 0.6rem;\n    font-size: 16px;\n    text-align: center;\n\n    & + & {\n      margin-left: 0.4rem;\n    }\n\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  "]))),
  PlusIcon: styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin: 0 0.4rem;\n  "])))
};
export default Styled;