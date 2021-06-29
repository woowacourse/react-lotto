import { useEffect } from 'react';

const useAnimationTimer = (callback, time) =>
  useEffect(() => {
    setTimeout(() => {
      callback(true);
    }, time);
  }, []);

export default useAnimationTimer;
