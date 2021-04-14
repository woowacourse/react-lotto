import React, { Component } from "react";
import LotteryMachine from "../services/LotteryMachine";
import LotteriesDetail from "./LotteriesDetail";
import PaymentForm from "./PaymentForm";

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
    return (
      <>
        <h1>🎱 행운의 로또</h1>
        <PaymentForm setLotteries={this.setLotteries} />
        <LotteriesDetail lotteries={this.state.lotteries} />
      </>
    );
  }
}

export default App;
