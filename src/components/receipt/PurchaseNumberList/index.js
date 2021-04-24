import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PurchaseNumberItem from '../PurchaseNumberItem';

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
          />
        ))}
      </ul>
    );
  }
}

export default PurchaseNumberList;
