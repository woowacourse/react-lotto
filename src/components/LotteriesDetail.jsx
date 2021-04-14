import React, { Component } from "react";

class LotteriesDetail extends Component {
  render() {
    return (
      <ul>
        {this.props.lotteries.map((lottery) => (
          <li key={lottery.id}>
            {lottery.id} :{lottery.numbers.join(",")}
          </li>
        ))}
      </ul>
    );
  }
}

export default LotteriesDetail;
