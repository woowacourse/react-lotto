import { Component } from 'react';
import Lottie from 'react-lottie';

export default class Animation extends Component {
  render() {
    const { height, speed, animationData } = this.props;

    return (
      <Lottie
        height={height}
        speed={speed}
        options={{
          animationData,
          loop: false,
        }}
      />
    );
  }
}
