import React, { Component } from 'react';
import { TicketItemWrapper } from './TicketItem.styles';

type Props = {
  ticketNumbers: number[];
  isDetailMode: boolean;
};

export default class TicketItem extends Component<Props> {
  render() {
    const { isDetailMode, ticketNumbers } = this.props;

    return (
      <TicketItemWrapper>
        <span className="ticket-icon">🎟️ </span>
        {isDetailMode && <span className="ticket-number">{ticketNumbers.join(' ')}</span>}
      </TicketItemWrapper>
    );
  }
}
