import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  flex-flow: ${props => props.flexFlow};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-wrap: ${props => props.flexWrap};
  flex-basis: ${props => props.flexBasis};
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => props.flexShrink};
`;
