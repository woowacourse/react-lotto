import React from 'react';
import './style.scss';

class TimeLeft extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeLeft: '--일 --시간 --분 --초',
      now: new Date(),
      announceDate: new Date(),
    };
    this.date = ['April', 24, 2021, '20:45:00'];
    this.ticking = null;
  }

  componentDidMount() {
    this.setState({ announceDate: new Date(this.date.join(' ')) });
  }

  tick() {
    if (this.state.announceDate < this.state.now) {
      this.setState({
        announceDate: new Date(this.state.announceDate.getTime() + 7 * 1000 * 60 * 60 * 24),
      });
    }

    let dateDifference = this.state.announceDate - this.state.now;
    const dayDifference = Math.floor(
      (this.state.announceDate.getTime() - this.state.now.getTime()) / (1000 * 60 * 60 * 24)
    );
    dateDifference -= dayDifference * (1000 * 60 * 60 * 24);
    const hourDifference = Math.floor(dateDifference / (1000 * 60 * 60));
    dateDifference -= hourDifference * (1000 * 60 * 60);

    const minuteDifference = Math.floor(dateDifference / (1000 * 60));
    dateDifference -= minuteDifference * (1000 * 60);

    const secondDifference = Math.floor(dateDifference / 1000);

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
