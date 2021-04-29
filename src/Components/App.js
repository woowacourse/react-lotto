import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";

import GlobalStyles from "../Styles/GlobalStyles";
import LottoContext from "../Contexts/LottoContext";
import Main from "./Main";
import Modal from "./Modal";

import LottoResult from "./LottoResult";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const { state } = useContext(LottoContext);

  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <h1>🎱 행운의 로또</h1>
        <Main />
        {state.isModalOpen && (
          <Modal>
            <LottoResult />
          </Modal>
        )}
      </Container>
    </>
  );
};

export default App;
