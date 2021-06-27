import React from 'react';
import PALETTE from '../../constants/palette';
import useLottoBallCanvas from '../../hooks/useLottoBallCanvas';

import './style.scss';

const colors = [PALETTE.YELLOW, PALETTE.ORANGE, PALETTE.BLUE, PALETTE.PURPLE, PALETTE.RED];

const LottoBallCanvas = () => {
  const canvasRef = useLottoBallCanvas(colors);

  return <canvas ref={canvasRef} id='lotto_ball_canvas' />;
};

export default LottoBallCanvas;
