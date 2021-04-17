import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const TimeUnit = styled.span`
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
`;
