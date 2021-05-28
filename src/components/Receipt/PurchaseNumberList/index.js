import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PurchaseNumberItem from '../PurchaseNumberItem';

class PurchaseNumberList extends React.Component {
  constructor(props) {
    super(props);
    this.numberItemIds = [...Array(this.props.receipt.length)].map(() => uuidv4());
  }

  render() {
    return (
      <ul>
        {this.props.receipt.map((ticket, idx) => (
          <PurchaseNumberItem
            key={this.numberItemIds[idx]}
            ticketNumbers={ticket}
            toggled={this.props.showBalls}
          />
        ))}
      </ul>
    );
  }
}

export default React.memo(PurchaseNumberList);
