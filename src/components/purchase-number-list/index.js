import React from 'react';
import ToggleButton from '../../utils/toggle';
import PurchaseNumberItem from './purchase-number-item';

class PurchaseNumberList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>구입한 로또 번호</p>
        <ToggleButton />
        <ul>
          <PurchaseNumberItem></PurchaseNumberItem>
        </ul>
      </div>
    );
  }
}

export default PurchaseNumberList;
