import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";

import GlobalStyles from "../Styles/GlobalStyles";
import LottoContext from "../Contexts/LottoContext";
import Header from "./Header";
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
        <Header />
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
