import React from 'react';
import PropTypes from 'prop-types';
import PurchaseNumberList from './PurchaseNumberList';
import ToggleButton from '../UtilComponent/Toggle';
import './style.scss';

class Receipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBalls: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      showBalls: !this.state.showBalls,
    });
  }

  render() {
    return (
      <div className='purchased-lotto'>
        <div className='sub-title'>
          <p>구입한 로또 번호</p>
          <ToggleButton onHandleToggle={this.handleToggle} />
        </div>
        <PurchaseNumberList receipt={this.props.receipt} showBalls={this.state.showBalls} />
      </div>
    );
  }
}

Receipt.propTypes = {
  receipt: PropTypes.array,
};

export default Receipt;
