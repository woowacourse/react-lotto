import React from 'react';
import PropTypes from 'prop-types';
import PurchaseNumberList from './PurchaseNumberList';
import ToggleButton from '../UtilComponent/Toggle';
import './style.scss';

class Receipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleBalls: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      isVisibleBalls: !this.state.isVisibleBalls,
    });
  }

  render() {
    return (
      <div className='purchased-lotto'>
        <div className='sub-title'>
          <p>구입한 로또 번호</p>
          <ToggleButton onHandleToggle={this.handleToggle} />
        </div>
        <PurchaseNumberList
          receipt={this.props.receipt}
          isVisibleBalls={this.state.isVisibleBalls}
        />
      </div>
    );
  }
}

Receipt.propTypes = {
  receipt: PropTypes.array,
};

export default Receipt;
