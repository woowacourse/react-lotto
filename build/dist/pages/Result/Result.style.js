var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from '../../pkg/@emotion/styled.js';
var Styled = {
  WinningNumber: styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n  "]))),
  NumberWrapper: styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n  "]))),
  NumberBorder: styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding: 0.6rem 0.4rem 0.6rem 0.8rem;\n    border: 1px solid lightgray;\n    border-radius: 4px;\n  "]))),
  NumberText: styled.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    font-size: 15px;\n    color: #707070;\n    margin: 0;\n    text-align: center;\n  "]))),
  PlusIcon: styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin: 0 0.4rem;\n  "]))),
  ProfitRateMessage: styled.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    text-align: center;\n    font-size: 22px;\n  "]))),
  ButtonContainer: styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n\n    button {\n      margin-bottom: 1em;\n    }\n  "])))
};
export default Styled;