import React, { Component } from 'react';
import { TicketItemWrapper } from './TicketItem.styles';

type Props = {
  ticketNumbers: number[];
  isDetailMode: boolean;
};

export default class TicketItem extends Component<Props> {
  render() {
    return (
      <TicketItemWrapper>
        <span className="ticket-icon">🎟️ </span>
        {this.props.isDetailMode && (
          <span className="ticket-numbers">
            {this.props.ticketNumbers.map(number => {
              return <span className="ticket-number">{number}</span>;
            })}
          </span>
        )}
      </TicketItemWrapper>
    );
  }
}
