import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PurchaseNumberItem from '../purchase-number-item';

class PurchaseNumberList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.receipt.map((ticket) => (
          <PurchaseNumberItem
            key={uuidv4()}
            ticketNumbers={ticket}
            toggled={this.props.showBalls}
          ></PurchaseNumberItem>
        ))}
      </ul>
    );
  }
}

export default PurchaseNumberList;
