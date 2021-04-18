import React, { Component } from 'react';
import Toggle from '../common/Toggle';
import { TicketListHeader, TicketListWrapper, List } from './TicketList.styles';
import TicketItem from './TicketItem/TicketItem';

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
    this.setState(state => ({ isToggled }));
  }

  render() {
    return (
      <TicketListWrapper>
        <TicketListHeader>
          <label className="ticket-list-header-label">
            총 {this.props.tickets.length}개를 구매하였습니다
          </label>
          <div>
            <Toggle onToggle={this.onToggle}>번호보기</Toggle>
          </div>
        </TicketListHeader>
        <List isToggled={this.state.isToggled}>
          {this.props.tickets.map(ticket => {
            return (
              <TicketItem
                key={ticket.id}
                ticketNumbers={ticket.numbers}
                isDetailMode={this.state.isToggled}
              />
            );
          })}
        </List>
      </TicketListWrapper>
    );
  }
}
