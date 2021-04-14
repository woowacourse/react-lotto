import React, { Component } from 'react';
import { TicketItemWrapper } from './TicketItem.styles';

// type TicketItemProps = {};

export default class TicketItem extends Component {
  render() {
    return (
      <TicketItemWrapper>
        <span className="ticket-icon">🎟️ </span>
        <span className="ticket-number">16, 5, 33, 41, 20, 43</span>
      </TicketItemWrapper>
    );
  }
}
