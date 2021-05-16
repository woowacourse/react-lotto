import React from 'react';
import { TIME } from '../../constants/number';
import './style.scss';

class TimeLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: '--일 --시간 --분 --초',
      now: new Date(),
      announceDate: new Date(...[2021, 4, 24, 20, 45, 0]),
    };
    this.ticking = null;
  }

  tick() {
    if (this.state.announceDate < this.state.now) {
      this.setState({
        announceDate: new Date(this.state.announceDate.getTime() + TIME.WEEK),
      });
    }

    let dateDifference = this.state.announceDate - this.state.now;
    const dayDifference = Math.floor(
      (this.state.announceDate.getTime() - this.state.now.getTime()) / TIME.DAY
    );
    dateDifference -= dayDifference * TIME.DAY;
    const hourDifference = Math.floor(dateDifference / TIME.HOUR);
    dateDifference -= hourDifference * TIME.HOUR;

    const minuteDifference = Math.floor(dateDifference / TIME.MINUTE);
    dateDifference -= minuteDifference * TIME.MINUTE;

    const secondDifference = Math.floor(dateDifference / TIME.SECOND);

    const newTime = `⏰ ${dayDifference < 10 ? `0${dayDifference}` : dayDifference}일 ${
      hourDifference < 10 ? `0${hourDifference}` : hourDifference
    }시간 ${minuteDifference < 10 ? `0${minuteDifference}` : minuteDifference}분 ${
      secondDifference < 10 ? `0${secondDifference}` : secondDifference
    }초 ⏰`;

    this.setState({
      timeLeft: newTime,
      now: new Date(),
    });
  }

  componentDidMount() {
    this.ticking = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticking);
  }

  render() {
    return (
      <>
        <div className='belt-up'></div>
        <div className='time-container'>
          <div className='time-sub-title'>
            🎁✨🎉🎟🎀🎢🎐 당첨 발표까지 🎊🎄🎈🧨🎇🧧 <span> {this.state.timeLeft} </span>
          </div>
        </div>
      </>
    );
  }
}

export default TimeLeft;
