import React, { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const tick = () => callbackRef.current();

    if (delay !== null) {
      const interval = setInterval(tick, delay);

      return () => clearInterval(interval);
    }
  }, [delay]);
};

export default useInterval;
