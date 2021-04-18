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
        <p className="remain-time-text">
          {this.props.remainTime?.getDate()} 일 {this.props.remainTime?.getHours()} 시
          {this.props.remainTime?.getMinutes()} 분 {this.props.remainTime?.getSeconds()} 초
          남았습니다.
        </p>
      </RemainedTimeWrapper>
    );
  }
}
