import { Component } from 'react';
import { getDate, getHours, getMinutes, getSeconds } from '../../utils/date';
import { RemainedTimeWrapper } from './RemainedTime.styles';

type Props = {
  remainTime: number;
};

export default class RemainedTime extends Component<Props> {
  render() {
    const { remainTime } = this.props;

    const date = getDate(remainTime);
    const hours = getHours(remainTime);
    const minutes = getMinutes(remainTime);
    const seconds = getSeconds(remainTime);

    return (
      <RemainedTimeWrapper>
        <p className="remain-time-text">
          당첨발표까지 {date}일 {hours}시 {minutes}분 {seconds}초 남았습니다.
        </p>
      </RemainedTimeWrapper>
    );
  }
}
