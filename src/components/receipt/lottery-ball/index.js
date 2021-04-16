import React from 'react';
import './style.scss';

class LotteryBall extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={`lottery-ball ${this.props.colored && 'winning-ball'}`}>
        {this.props.toggled ? this.props.numberValue : '*'}
      </span>
    );
  }
}

export default LotteryBall;
