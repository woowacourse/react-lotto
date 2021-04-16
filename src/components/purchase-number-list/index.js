import React from 'react';
import ToggleButton from '../util-component/toggle';
import PurchaseNumberItem from './purchase-number-item';

class PurchaseNumberList extends React.Component {
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
        <ul>
          <PurchaseNumberItem toggled={this.state.showBalls}></PurchaseNumberItem>
        </ul>
      </div>
    );
  }
}

export default PurchaseNumberList;
