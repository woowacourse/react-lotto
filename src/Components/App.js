import React, { Component } from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";

import GlobalStyles from "../Styles/GlobalStyles";
import LottoContext from "../Contexts/LottoContext";
import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";

import {
  PRIZE_TABLE,
  RANKINGS,
  LOTTO_PRICE,
  LOTTO_RANGE,
  LOTTO_LENGTH,
} from "../Constants";

import { countMatchedNumbers, createDistinctRandomIntegers } from "../Utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const initialResult = {
  rankCount: {
    [RANKINGS.RANKING1]: 0,
    [RANKINGS.RANKING2]: 0,
    [RANKINGS.RANKING3]: 0,
    [RANKINGS.RANKING4]: 0,
    [RANKINGS.RANKING5]: 0,
    [RANKINGS.NO_PRIZE]: 0,
  },
  earningRate: 0,
};

const initialState = {
  lottos: [],
  isModalOpen: false,
  lottoResult: initialResult,
};

const getRanking = (lottoNumber, winningNumber, bonusNumber) => {
  const numOfMatched = countMatchedNumbers(lottoNumber, winningNumber);

  switch (numOfMatched) {
    case 3:
      return RANKINGS.RANKING5;
    case 4:
      return RANKINGS.RANKING4;
    case 5:
      if (countMatchedNumbers(lottoNumber, [bonusNumber])) {
        return RANKINGS.RANKING2;
      }
      return RANKINGS.RANKING3;
    case 6:
      return RANKINGS.RANKING1;
    default:
      return RANKINGS.NO_PRIZE;
  }
};

const calculateEarningRate = (rankCount, price) => {
  const totalPrize = Object.values(RANKINGS).reduce((acc, ranking) => {
    return acc + rankCount[ranking] * PRIZE_TABLE[ranking].prize;
  }, 0);

  return Math.round(((totalPrize - price) / price) * 100);
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.action = {
      createLottos: (lottoCount) => {
        const lottos = Array.from({ length: lottoCount }, () =>
          createDistinctRandomIntegers(
            LOTTO_RANGE.FROM,
            LOTTO_RANGE.TO,
            LOTTO_LENGTH
          )
        );

        this.setState({ lottos });
      },

      updateLottoResult: (winningNumbers, bonusNumber) => {
        const result = {
          ...initialResult,
          rankCount: { ...initialResult.rankCount },
        };

        const price = this.state.lottos.length * LOTTO_PRICE;

        this.state.lottos.forEach((lotto) => {
          const ranking = getRanking(lotto, winningNumbers, bonusNumber);
          result.rankCount[ranking] += 1;
        });

        result.earningRate = calculateEarningRate(result.rankCount, price);

        this.setState({ lottoResult: result });
      },

      openModal: () => {
        this.setState({ isModalOpen: true });
      },

      closeModal: () => {
        this.setState({ isModalOpen: false });
      },

      clear: () => {
        this.setState(initialState);
      },
    };
  }

  render() {
    return (
      <>
        <Global styles={GlobalStyles} />
        <LottoContext.Provider
          value={{ state: this.state, action: this.action }}
        >
          <Container>
            <Header />
            <Main />
            {this.state.isModalOpen && <Modal />}
          </Container>
        </LottoContext.Provider>
      </>
    );
  }
}
