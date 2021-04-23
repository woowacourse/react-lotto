import { RemainedTimeIndicatorWrapper } from './RemainedTimeIndicator.styles';

type RemainedTimeIndicatorProps = {
  remainedTime: Date | null;
};

const RemainedTimeIndicator = ({ remainedTime }: RemainedTimeIndicatorProps) => {
  return (
    <RemainedTimeIndicatorWrapper>
      <p className="remain-time-text">
        {remainedTime?.getDate()} 일 {remainedTime?.getHours()} 시{remainedTime?.getMinutes()} 분{' '}
        {remainedTime?.getSeconds()} 초 남았습니다.
      </p>
    </RemainedTimeIndicatorWrapper>
  );
};

export default RemainedTimeIndicator;
