import styled from '@emotion/styled';

const Styled = {
  Table: styled.table`
    width: 100%;
    min-width: 400px;
    border-collapse: collapse;
  `,
  TableRow: styled.tr`
    border-bottom: 1px solid #dddddd;

    &:nth-of-type(even) {
      background-color: #f3f3f3;
    }

    &:last-of-type {
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    }
  `,
  TableHeader: styled.th`
    padding: 1em 1.4em;
    text-align: left;
    font-size: 1.2em;
    font-weight: normal;
    background-color: ${(props) => props.theme.colors.primary};
  `,
  TableItem: styled.td`
    padding: 1em 1.4em;
  `,
};

export default Styled;
