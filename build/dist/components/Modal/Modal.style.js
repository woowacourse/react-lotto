var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from '../../pkg/@emotion/styled.js';
var Styled = {
  Dimmer: styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    z-index: 2;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]))),
  Container: styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    z-index: 2;\n    width: 80%;\n    max-width: 600px;\n    background-color: white;\n    min-height: 300px;\n    padding: 1.6rem;\n    border-radius: 10px;\n  "]))),
  CloseButton: styled.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin: 10px;\n    width: 30px;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    cursor: pointer;\n    background: none;\n    border: none;\n\n    svg {\n      display: block;\n      pointer-events: none;\n    }\n\n    .close-x {\n      stroke: gray;\n      fill: transparent;\n      stroke-linecap: round;\n      stroke-width: 5;\n      pointer-events: none;\n    }\n  "]))),
  Title: styled.h3(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    font-size: 1.7em;\n  "])))
};
export default Styled;