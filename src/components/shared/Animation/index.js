/* eslint-disable react/jsx-props-no-spreading */
import { Component } from 'react';
import Lottie from 'react-lottie';

export default class Animation extends Component {
  render() {
    const { animationData, loop, ...others } = this.props;

    return (
      <Lottie
        options={{
          animationData,
          loop,
        }}
        {...others}
      />
    );
  }
}
