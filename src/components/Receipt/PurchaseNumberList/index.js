import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TicketsContext } from '../../../contexts/TicketsContextProvider';

import PurchaseNumberItem from '../PurchaseNumberItem';

const PurchaseNumberList = ({ isColoredBalls, showBalls }) => {
  const { tickets } = useContext(TicketsContext);
  const numberItemIds = [...Array(tickets.length)].map(() => uuidv4());

  return (
    <ul>
      {tickets.map((ticket, idx) => (
        <PurchaseNumberItem
          key={numberItemIds[idx]}
          ticketNumbers={ticket}
          isToggled={showBalls}
          isColoredBalls={isColoredBalls}
        />
      ))}
    </ul>
  );
};

export default React.memo(PurchaseNumberList);
