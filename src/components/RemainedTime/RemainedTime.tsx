import { Component } from 'react';
import { RemainedTimeWrapper } from './RemainedTime.styles';

type Props = {
  remainTime: Date | null;
};

export default class RemainedTime extends Component<Props> {
  render() {
    const date = this.props.remainTime?.getDate();
    const hours = this.props.remainTime?.getHours();
    const minutes = this.props.remainTime?.getMinutes();
    const seconds = this.props.remainTime?.getSeconds();

    return (
      <RemainedTimeWrapper>
        <p className="remain-time-text">
          당첨발표까지 {date}일 {hours}시 {minutes}분 {seconds}초 남았습니다.
        </p>
      </RemainedTimeWrapper>
    );
  }
}
