import { Component } from 'react';
import { toFormattedTimeString, getAnnouncementDate } from '../../utils/lottoUtils';

export default class LotteryCountDown extends Component {
  state = {
    remainTime: 0,
  };

  componentDidMount = () => {
    this.tick();
    this.intervalId = setInterval(this.tick, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  tick = () => {
    const currentTime = new Date();
    const gap = this.props.announcementDate - currentTime;

    if (gap < 1000) {
      this.props.setAnnouncementDate(getAnnouncementDate());
    }

    this.setState({ remainTime: gap });
  };

  render() {
    return (
      <div className="mt-5 text-center">
        <h3 className="m-1">🎉 당첨 번호 발표 시간 🎉</h3>
        <p className="m-1">{this.props.announcementDate.toLocaleString('ko-KR')}</p>
        <p className="mt-1">남은 시간 : {toFormattedTimeString(this.state.remainTime)}</p>
      </div>
    );
  }
}
