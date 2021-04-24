import { Component } from 'react';
import LottoItem from './LottoItem';

export default class LottoListSection extends Component {
  onToggle = () => {
    this.props.setToggleLottoList(!this.props.isLottoListToggled);
  };

  render() {
    const lottoCount = this.props.lottoCount;

    return (
      <section className="mt-5">
        <div className="d-flex justify-space-between items-center">
          <div>
            총 <span>{lottoCount}</span>개를 구매하였습니다.
          </div>
          <label className="toggle-button">
            <input type="checkbox" onChange={this.onToggle} />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <ul className="lotto-list">
          {Array.from({ length: lottoCount }).map((_, index) => (
            <LottoItem
              key={index}
              isToggled={this.props.isLottoListToggled}
              winningNumbers={this.props.winningNumbers}
              bonusNumber={this.props.bonusNumber}
              increaseWinningCounts={this.props.increaseWinningCounts}
              isModalOpened={this.props.isModalOpened}
            />
          ))}
        </ul>
      </section>
    );
  }
}
