import styled from "@emotion/styled";

// eslint-disable-next-line import/prefer-default-export
export const TicketList = styled.ul`
  ${({ isNumberVisible }) =>
    !isNumberVisible ? "display: flex; flex-wrap: wrap;" : ""}
`;
