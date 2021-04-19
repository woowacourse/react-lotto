import { Component } from 'react';
import WinningNumberList from './WinningNumberList';
import { Animation, Button } from '../../shared';
import { getWinningNumber } from './service';
import { dummyDrawNumber } from '../../../constants';
import { countDown } from '../../../statics';
import './style.css';

const COUNT_DOWN_ANIMATION_DURATION = 3000;
const DRAW_NTH_KEY = 'drwNo';
const DRAW_DATE_KEY = 'drwNoDate';
const drawNth = dummyDrawNumber[DRAW_NTH_KEY];
const drawDate = dummyDrawNumber[DRAW_DATE_KEY].split('-').join('.');

export default class WinningNumbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
    this.removeLoader = this.removeLoader.bind(this);
    this.winningNumber = getWinningNumber();
    this.props.setWinningNumber({ winningNumber: this.winningNumber });
  }

  componentDidMount() {
    setTimeout(this.removeLoader, COUNT_DOWN_ANIMATION_DURATION);
  }

  removeLoader() {
    this.setState({ isLoading: false });
  }

  render() {
    const { onShowUserResult } = this.props;
    const { isLoading } = this.state;

    return isLoading ? (
      <Animation animationData={countDown} loop="false" speed="1" height="140px" />
    ) : (
      <>
        <h2 className="WinningNumbers__title">
          {drawNth}회차 당첨번호 {drawDate}
        </h2>
        <WinningNumberList number={this.winningNumber} />
        <Button type="button" onClick={onShowUserResult}>
          당첨결과 확인하기
        </Button>
      </>
    );
  }
}
