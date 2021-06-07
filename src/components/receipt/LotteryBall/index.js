import React from 'react';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

const LotteryBall = ({ colored, ballColor, toggled, numberValue }) => {
  return (
    <span className={`lottery-ball ${colored && ballColor && `winning-ball ${ballColor}`}`}>
      {toggled ? numberValue : <FontAwesomeIcon icon={faAsterisk} color='grey' size='xs' />}
    </span>
  );
};

export default LotteryBall;
