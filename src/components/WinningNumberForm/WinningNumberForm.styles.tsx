import styled from 'styled-components';

export const WinningNumberFormWrapper = styled.form`
  padding: 20px;
  border: 1px solid #dae1e6;
  border-radius: 5px;
  width: 100%;
  text-align: center;

  span {
    color: #00bcd4;
  }

  .input-label {
    display: inline-block;
    margin-bottom: 1.25rem;
  }

  .input-caption {
    border-radius: 50%;
    border: none;
    background-color: #dae1e6;
    text-align: center;
    font-weight: bold;
    color: #727277;

    &:focus {
      outline: none;
      background-color: #fff;
      border: 1px solid #dae1e6;
      color: #00bcd4;
    }

    &:hover {
      background-color: #daf5f8;
      cursor: pointer;
    }
  }

  .winning-number-input-wrapper {
    margin-bottom: 1rem;
  }
`;
