import styled from '@emotion/styled';

const Styled = {
  Button: styled.button`
    padding: 0 0.6rem;
    height: 40px;
    border: none;
    background-color: ${(props) => props.bgColor || props.theme.colors.primary};
    border-radius: 6px;
    min-width: 70px;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Do Hyeon', sans-serif;
  `,
};

export default Styled;
