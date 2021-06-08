import React from 'react';
import Lottie from 'react-lottie';

const Animation = ({ height, speed, animationData, loop = false }) => (
  <Lottie
    height={height}
    speed={speed}
    options={{
      animationData,
      loop,
    }}
  />
);

export default Animation;
