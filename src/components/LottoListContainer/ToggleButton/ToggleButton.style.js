import styled from 'styled-components';

export const ToggleButtonInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + label #show-number-span {
    background-color: #c71f1f;
  }

  &:checked + label #show-number-span:after {
    left: calc(100% - 22px);
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const ToggleButtonLabel = styled.label`
  align-items: center;
  display: flex;
`;

export const ToggleButtonSpan = styled.span`
  background-color: #d3c5c5;
  border-radius: 60px;
  display: block;
  height: 26px;
  line-height: 2rem;
  margin-left: 3px;
  position: relative;
  transition: background 0.4s;
  width: 50px;

  &:after {
    content: '';
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: #ffffff;
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.4s;
  }
`;
