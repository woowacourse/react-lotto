import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  height: 1.25rem;
  padding: 0;
  position: absolute;
  right: 1.875rem;
  top: 1.875rem;
  width: 1.25rem;

  & svg {
    display: inline-block;
    margin: 0;
    padding: 0;

    & path {
      stroke: gray;
      stroke-width: 5;
    }
  }
`;

export const HiddenButtonName = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:active,
  hover {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto;
  }
`;
