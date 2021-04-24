import { FC, useState } from 'react';
import Toggle from '../common/Toggle';
import { TicketListHeader, TicketListWrapper, List } from './TicketList.styles';
import TicketItem from './TicketItem/TicketItem';
import { Ticket } from '../../types';

interface Props {
  tickets: Ticket[];
}

const TicketList: FC<Props> = ({ tickets }) => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = (isToggled: boolean) => {
    setIsToggled(isToggled);
  };

  return (
    <TicketListWrapper>
      <TicketListHeader>
        <label className="ticket-list-header-label">총 {tickets.length}개를 구매하였습니다</label>
        <div>
          <Toggle onToggle={onToggle}>번호보기</Toggle>
        </div>
      </TicketListHeader>
      <List isToggled={isToggled}>
        {tickets.map(ticket => (
          <TicketItem key={ticket.id} ticketNumbers={ticket.numbers} isDetailMode={isToggled} />
        ))}
      </List>
    </TicketListWrapper>
  );
};

export default TicketList;
