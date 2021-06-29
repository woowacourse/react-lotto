import React from 'react';
import countDown from '../../animations/countDown.json';
import Animation from '../../components/Animation/Animation';
import WinningNumber from '../../components/WinningNumber/WinningNumber';
import useAnimationTimer from '../../hooks/useAnimationTimer';
import { TIME_TO_LAST_COUNT_ANIMATION } from '../../constants/time';

const WinningAnnouncement = ({ isAnimationEnded, setIsAnimationEnded, setIsWinningResultOpen }) => {
  useAnimationTimer(setIsAnimationEnded, TIME_TO_LAST_COUNT_ANIMATION);

  return (
    <>
      {!isAnimationEnded && <Animation height="140px" speed={1} animationData={countDown} />}
      {isAnimationEnded && <WinningNumber setIsWinningResultOpen={setIsWinningResultOpen} />}
    </>
  );
};

export default WinningAnnouncement;
