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
    const { remainTime } = this.props;
    return (
      <RemainedTimeWrapper>
        🎯 로또 당첨 발표까지 🎯
        <p className="remain-time-text">
          <span>{remainTime?.getDate()}</span> 일&nbsp;
          <span>{remainTime?.getHours()}</span> 시간&nbsp;
          <span>{remainTime?.getMinutes()}</span> 분&nbsp;
          <span>{remainTime?.getSeconds()}</span> 초
        </p>
        남았습니다.
      </RemainedTimeWrapper>
    );
  }
}
