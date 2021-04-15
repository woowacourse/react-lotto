import React, { Component } from 'react';

class LotteriesDetail extends Component {
  constructor() {
    super();
    this.state = {
      isNumberVisible: false,
    };
  }

  handleNumberDisplay = () => {
    this.setState({ isNumberVisible: !this.state.isNumberVisible });
  };

  render() {
    const { isNumberVisible } = this.state;
    const { lotteries } = this.props;

    return (
      <section>
        <div className="d-flex">
          <span>총 {lotteries.length}개를 구매하였습니다.</span>
          <div className="flex-auto d-flex justify-end pr-1">
            <label className="switch">
              <input type="checkbox" onChange={this.handleNumberDisplay} />
              <span className="text-base font-normal">번호보기</span>
            </label>
          </div>
        </div>
        <ul className="d-flex">
          {lotteries.map(lottery => (
            <li className="d-flex" key={lottery.id}>
              <span>🎟️</span>
              <span className={isNumberVisible ? '' : 'd-none'}>
                {lottery.numbers.join(', ')}
              </span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default LotteriesDetail;
