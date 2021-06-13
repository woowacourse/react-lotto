import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import PurchaseNumberItem from '../PurchaseNumberItem';

const PurchaseNumberList = ({ tickets, showBalls }) => {
  const numberItemIds = [...Array(tickets.length)].map(() => uuidv4());

  return (
    <ul>
      {tickets.map((ticket, idx) => (
        <PurchaseNumberItem key={numberItemIds[idx]} ticketNumbers={ticket} isToggled={showBalls} />
      ))}
    </ul>
  );
};

export default React.memo(PurchaseNumberList);
