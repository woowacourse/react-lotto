import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

import { Container } from "./style";

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
      <b>남은 시간: &nbsp;</b>
      <Moment date={remainTime} format="DD일 hh시 mm분 ss초" />
    </Container>
  );
}

Timer.propTypes = {
  targetTime: PropTypes.instanceOf(Date).isRequired,
};

export default Timer;
