import React, { Component } from 'react';
import { TicketItemWrapper } from './TicketItem.styles';

type Props = {
  ticketNumbers: Ticket;
  isDetailMode: boolean;
};

export default class TicketItem extends Component<Props> {
  render() {
    return (
      <TicketItemWrapper>
        <span className="ticket-icon">🎟️ </span>
        {this.props.isDetailMode && (
          <span className="ticket-number">{this.props.ticketNumbers.join(' ')}</span>
        )}
      </TicketItemWrapper>
    );
  }
}
