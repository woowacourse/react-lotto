import React from 'react';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

const LotteryBall = ({ isColored, isToggled, ballColor, numberValue }) => (
  <span className={`lottery-ball ${isColored && ballColor && `winning-ball ${ballColor}`}`}>
    {isToggled ? numberValue : <FontAwesomeIcon icon={faAsterisk} color='grey' size='xs' />}
  </span>
);

export default LotteryBall;
