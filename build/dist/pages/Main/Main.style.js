var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from '../../pkg/@emotion/styled.js';
export var Styled = {
  Form: styled.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n  "]))),
  MoneyInput: styled.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    height: 40px;\n    margin: 0;\n    box-sizing: border-box;\n    margin-right: 15px;\n    flex: 1;\n  "]))),
  LottoListTop: styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin: 1rem 0;\n  "]))),
  LottoCountContainer: styled.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin: 0;\n  "]))),
  LottoCount: styled.strong(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    font-size: 1.5rem;\n  "])))
};