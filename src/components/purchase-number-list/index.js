import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
          {this.props.receipt.map((ticket) => (
            <PurchaseNumberItem
              key={uuidv4()}
              ticketNumbers={ticket}
              toggled={this.state.showBalls}
            ></PurchaseNumberItem>
          ))}
        </ul>
      </div>
    );
  }
}

export default PurchaseNumberList;
