import styled from '@emotion/styled';

const Styled = {
  Container: styled.span`
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-right: 0.4em;
    border-radius: 50%;
    text-align: center;
    background-color: ${({ number, enabled }) => {
      if (!enabled) return 'none';

      if (number < 10) return '#CF9E95';
      else if (number < 20) return '#9B9EC3';
      else if (number < 30) return '#FFDB93';
      else if (number < 40) return '#A8CFAD';
      else return '#FFA8A8';
    }};
  `,
};

export default Styled;
