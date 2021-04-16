import React, { Component } from "react";
import { LotteryMachine } from "../services";
import LotteriesDetail from "./LotteriesDetail";
import PaymentForm from "./PaymentForm";
import WinningNumbersForm from "./WinningNumbersForm";

class App extends Component {
  constructor() {
    super();
    this.lotteryMachine = new LotteryMachine();
    this.state = {
      lotteries: [],
    };
  }

  setLotteries = (money) => {
    const lotteries = this.lotteryMachine.publishLotteries(money);

    this.setState({ lotteries });
  };

  render() {
    const { lotteries } = this.state;

    return (
      <>
        <h1>🎱 행운의 로또</h1>
        <PaymentForm setLotteries={this.setLotteries} />
        {lotteries.length > 0 && (
          <>
            <LotteriesDetail lotteries={lotteries} />
            <WinningNumbersForm />
          </>
        )}
      </>
    );
  }
}

export default App;
