import React, { Component } from 'react';
import { RemainedTimeIndicatorWrapper } from './RemainedTimeIndicator.styles';

type Props = {
  remainTime: Date | null;
};

export default class RemainedTimeIndicator extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <RemainedTimeIndicatorWrapper>
        <p className="remain-time-text">
          {this.props.remainTime?.getDate()} 일 {this.props.remainTime?.getHours()} 시
          {this.props.remainTime?.getMinutes()} 분 {this.props.remainTime?.getSeconds()} 초
          남았습니다.
        </p>
      </RemainedTimeIndicatorWrapper>
    );
  }
}
