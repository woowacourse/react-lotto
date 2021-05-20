import { useEffect, useState } from "react";

const CountDown = ({ initialTimeBySecond, onCountDownEnded, children }) => {
  const [intervalId, setIntervalId] = useState(null);
  const [timeToLeft, setTimeToLeft] = useState(initialTimeBySecond);

  useEffect(() => {
    const newId = setInterval(() => {
      setTimeToLeft((prev) => prev - 1);
    }, 1000);

    setIntervalId(newId);

    return () => {
      clearInterval(newId);
    };
  }, []);

  useEffect(() => {
    if (timeToLeft === 0) {
      clearInterval(intervalId);
      onCountDownEnded();
    }
  }, [timeToLeft]);

  return (
    <div className="count-down">
      {children}
      <div className="count-down__time-to-left">
        <p>남은 시간 : {timeToLeft}</p>
      </div>
    </div>
  );
};

export default CountDown;
