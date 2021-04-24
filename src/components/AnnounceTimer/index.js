import React, { Component } from 'react';
import { Root, TimerWrapper, Title, TimeArea } from './style';

class AnnounceTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 10,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.timePass();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  timePass() {
    const { minutes, seconds } = this.state;

    if (minutes === 0 && seconds === 0) {
      clearInterval(this.timerId);
      return;
    }

    const nextMinutes = seconds > 0 ? minutes : minutes - 1;
    const nextSeconds = seconds > 0 ? seconds - 1 : 59;

    this.setState({
      minutes: nextMinutes,
      seconds: nextSeconds,
    });
  }

  render() {
    const currentTime =
      String(this.state.minutes).padStart(2, '0') + ': ' + String(this.state.seconds).padStart(2, '0');

    return (
      <Root>
        <TimerWrapper>
          <Title>🎉 당첨 발표까지 남은 시간 🥂</Title>
          <TimeArea>{currentTime}</TimeArea>
        </TimerWrapper>
      </Root>
    );
  }
}

export default AnnounceTimer;
