import React, { Component } from 'react';
import { TicketItemWrapper } from './TicketItem.styles';

type Props = {
  ticketNumbers: Ticket;
};

export default class TicketItem extends Component<Props> {
  render() {
    return (
      <TicketItemWrapper>
        <span className="ticket-icon">🎟️ </span>
        <span className="ticket-number">{this.props.ticketNumbers.join(' ')}</span>
      </TicketItemWrapper>
    );
  }
}
