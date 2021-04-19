import styled from '@emotion/styled';

const Styled = {
  Button: styled.button`
    padding: 0 0.8rem;
    height: 44px;
    border: none;
    background-color: ${(props) => props.bgColor || props.theme.colors.primary};
    border-radius: 6px;
    min-width: ${(props) => props.minWidth};
    cursor: pointer;
    font-size: 18px;
    font-family: 'Do Hyeon', sans-serif;
    width: ${(props) => !props.minWidth && '100%'};
  `,
};

export default Styled;
