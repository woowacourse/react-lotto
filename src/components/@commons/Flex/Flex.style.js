import styled from 'styled-components';

export const FlexBox = styled.div`
  align-items: ${props => props.alignItems};
  display: flex;
  flex-basis: ${props => props.flexBasis};
  flex-flow: ${props => props.flexFlow};
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => props.flexShrink};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};

  ${({ css }) => css}
`;
