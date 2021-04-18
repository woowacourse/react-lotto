import React from 'react';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

class LotteryBall extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={`lottery-ball ${this.props.colored && 'winning-ball'}`}>
        {this.props.toggled ? (
          this.props.numberValue
        ) : (
          <FontAwesomeIcon icon={faAsterisk} color='grey' size='xs' />
        )}
      </span>
    );
  }
}

export default LotteryBall;
