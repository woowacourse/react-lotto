import React, { Component } from 'react';
import { RemainedTimeWrapper } from './RemainedTime.styles';

type Props = {
  remainTime: Date | null;
};
export default class RemainedTime extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <RemainedTimeWrapper>
        🎯 로또 당첨 발표까지 🎯
        <p className="remain-time-text">
          <span>{this.props.remainTime?.getDate()}</span> 일&nbsp;
          <span>{this.props.remainTime?.getHours()}</span> 시간&nbsp;
          <span>{this.props.remainTime?.getMinutes()}</span> 분&nbsp;
          <span>{this.props.remainTime?.getSeconds()}</span> 초
        </p>
        남았습니다.
      </RemainedTimeWrapper>
    );
  }
}
