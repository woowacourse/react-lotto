import { useState } from 'react';
import { TicketListWrapper, List } from './TicketList.styles';
import TicketItem from './TicketItem/TicketItem';
import Toggle from '../common/Toggle';

type Props = {
  tickets: Ticket[];
};

const TicketList = ({ tickets }: Props) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const onToggle = (isToggled: boolean) => {
    setIsToggled(isToggled);
  };

  return (
    <TicketListWrapper>
      <div className="ticket-list-header">
        <label className="ticket-list-header-label">
          총 <span>{tickets.length}</span> 개를 구매하였습니다
        </label>
        <div className="flex-auto d-flex justify-end pr-1">
          <Toggle onToggle={onToggle}>번호보기</Toggle>
        </div>
      </div>
      <div className="ticket-list-main">
        <List isToggled={isToggled}>
          {tickets.length === 0 ? (
            <span className="no-tickets">로또를 구매해주세요</span>
          ) : (
            tickets.map(ticket => {
              return (
                <TicketItem
                  key={ticket.id}
                  ticketNumbers={ticket.numbers}
                  isDetailMode={isToggled}
                />
              );
            })
          )}
        </List>
      </div>
    </TicketListWrapper>
  );
};

export default TicketList;
