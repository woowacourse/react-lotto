import { useState, useCallback } from 'react';
import Toggle from '../common/Toggle';
import { TicketListHeader, TicketListWrapper, List } from './TicketList.styles';
import TicketItem from './TicketItem/TicketItem';

interface Props {
  tickets: Ticket[];
}

const TicketList = ({ tickets }: Props) => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = useCallback(
    (isToggled: boolean) => {
      setIsToggled(isToggled);
    },
    [isToggled]
  );

  return (
    <TicketListWrapper>
      <TicketListHeader>
        <label className="ticket-list-header-label">총 {tickets.length}개를 구매하였습니다</label>
        <div className="flex-auto d-flex justify-end pr-1">
          <Toggle onToggle={onToggle}>번호보기</Toggle>
        </div>
      </TicketListHeader>
      <List isToggled={isToggled}>
        {tickets.map(ticket => {
          return (
            <TicketItem key={ticket.id} ticketNumbers={ticket.numbers} isDetailMode={isToggled} />
          );
        })}
      </List>
    </TicketListWrapper>
  );
};

export default TicketList;
