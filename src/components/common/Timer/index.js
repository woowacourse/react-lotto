import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, TimeUnit } from "./style";

function Timer({ targetTime }) {
  const [remainTime, setRemainTime] = useState(
    new Date(targetTime - new Date())
  );

  useEffect(() => {
    const countdown = setInterval(() => {
      if (remainTime > 0) {
        remainTime.setSeconds(remainTime.getSeconds() - 1);
        setRemainTime(new Date(remainTime));
      } else {
        clearInterval(countdown);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [remainTime]);

  return (
    <Container>
      <TimeUnit fontWeight={"900"}>남은 시간: &nbsp;</TimeUnit>
      <TimeUnit>{remainTime.getDate()} 일&nbsp;</TimeUnit>
      <TimeUnit>{remainTime.getHours()}시&nbsp;</TimeUnit>
      <TimeUnit>{remainTime.getMinutes()}분&nbsp;</TimeUnit>
      <TimeUnit>{remainTime.getSeconds()}초</TimeUnit>
    </Container>
  );
}

Timer.propTypes = {
  targetTime: PropTypes.instanceOf(Date).isRequired,
};

export default Timer;
