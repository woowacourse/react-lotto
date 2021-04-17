var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from '../../pkg/@emotion/styled.js';
var Styled = {
  Table: styled.table(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    min-width: 400px;\n    border-collapse: collapse;\n  "]))),
  TableRow: styled.tr(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid #dddddd;\n\n    &:nth-of-type(even) {\n      background-color: #f3f3f3;\n    }\n\n    &:last-of-type {\n      border-bottom: 2px solid ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }),
  TableHeader: styled.th(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding: 1em 1.4em;\n    text-align: left;\n    font-size: 1.2em;\n    font-weight: normal;\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  }),
  TableItem: styled.td(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding: 1em 1.4em;\n  "])))
};
export default Styled;