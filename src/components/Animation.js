import { Component } from 'react';
import Lottie from 'react-lottie';

export default class Animation extends Component {
  render() {
    return (
      <Lottie
        height={this.props.height}
        speed={this.props.speed}
        options={{
          animationData: this.props.animationData,
          loop: false,
        }}
      />
    );
  }
}
