import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PurchaseNumberItem from '../PurchaseNumberItem';

const PurchaseNumberList = ({ receipt, showBalls }) => {
  return (
    <ul>
      {receipt.map((ticket) => (
        <PurchaseNumberItem key={uuidv4()} ticketNumbers={ticket} toggled={showBalls} />
      ))}
    </ul>
  );
};

export default PurchaseNumberList;
