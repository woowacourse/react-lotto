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
      <section className="mt-9">
        <div className="d-flex">
          <label className="flex-auto my-0">
            총 {lotteries.length}개를 구매하였습니다.
          </label>
          <div className="flex-auto d-flex justify-end pr-1">
            <label className="switch">
              <input type="checkbox" onChange={this.handleNumberDisplay} />
              <span className="text-base font-normal">번호보기</span>
            </label>
          </div>
        </div>
        <ul
          className={`d-flex pl-0 flex-wrap ${
            isNumberVisible ? 'flex-col' : ''
          }`}
        >
          {lotteries.map(lottery => (
            <li className="d-flex items-center" key={lottery.id}>
              <span className="mx-1 text-4xl">🎟️</span>
              <span className={`ml-3 ${isNumberVisible ? '' : 'd-none'}`}>
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
