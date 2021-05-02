import React from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";

import GlobalStyles from "../Styles/GlobalStyles";
import Main from "./Main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <h1>🎱 행운의 로또</h1>
        <Main />
      </Container>
    </>
  );
};

export default App;
