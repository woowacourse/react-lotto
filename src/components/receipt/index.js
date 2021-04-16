import React from 'react';
import PurchaseNumberList from './purchse-number-list';
import ToggleButton from '../util-component/toggle';

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
      <div>
        <p>구입한 로또 번호</p>
        <ToggleButton onHandleToggle={this.handleToggle} />
        <PurchaseNumberList
          receipt={this.props.receipt}
          showBalls={this.state.showBalls}
        ></PurchaseNumberList>
      </div>
    );
  }
}

export default Receipt;
