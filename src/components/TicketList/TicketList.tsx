import React, { Component } from 'react';
import Toggle from '../../common/Toggle';
import { TicketListHeader, TicketListWrapper, List } from './TicketList.styles';
import TicketItem from './TicketItem/TicketItem';

// type TicketListProps = {};

export default class TicketList extends Component {
  render() {
    return (
      <TicketListWrapper>
        <TicketListHeader>
          <label className="ticket-list-header-label">총 0개를 구매하였습니다</label>
          <div className="flex-auto d-flex justify-end pr-1">
            <Toggle>번호보기</Toggle>
          </div>
        </TicketListHeader>
        <List>
          <TicketItem />
          <TicketItem />
          <TicketItem />
          <TicketItem />
          <TicketItem />
        </List>
      </TicketListWrapper>
    );
  }
}
