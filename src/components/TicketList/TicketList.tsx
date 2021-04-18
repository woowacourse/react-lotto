import React, { Component } from 'react';
import Toggle from '../common/Toggle';
import { TicketListWrapper, List } from './TicketList.styles';
import TicketItem from './TicketItem/TicketItem';
import Wrapper from '../common/Wrapper';

type Props = {
  tickets: Ticket[];
};

type State = {
  isToggled: boolean;
};

export default class TicketList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isToggled: false,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(isToggled: boolean) {
    this.setState({ isToggled });
  }

  render() {
    return (
      <TicketListWrapper>
        <div className="ticket-list-header">
          <label className="ticket-list-header-label">
            총 <span>{this.props.tickets.length}</span> 개를 구매하였습니다
          </label>
          <div className="flex-auto d-flex justify-end pr-1">
            <Toggle onToggle={this.onToggle}>번호보기</Toggle>
          </div>
        </div>
        <div className="ticket-list-main">
          <List isToggled={this.state.isToggled}>
            {this.props.tickets.length === 0 ? (
              <span className="no-tickets">로또를 구매해주세요</span>
            ) : (
              this.props.tickets.map(ticket => {
                return (
                  <TicketItem
                    key={ticket.id}
                    ticketNumbers={ticket.numbers}
                    isDetailMode={this.state.isToggled}
                  />
                );
              })
            )}
          </List>
        </div>
      </TicketListWrapper>
    );
  }
}
