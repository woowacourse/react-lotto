import styled from '@emotion/styled';

const Styled = {
  Container: styled.ul`
    list-style: none;
    margin: 2rem 0;
    padding: 0;
  `,
  Lotto: styled.li`
    display: flex;
    align-items: center;

    &::before {
      content: '🎟️';
      font-size: 1.5rem;
      margin-right: 15px;
    }

    & + & {
      margin-top: 10px;
    }
  `,
};

export default Styled;
