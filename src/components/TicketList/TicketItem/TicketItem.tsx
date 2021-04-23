import { TicketItemWrapper } from './TicketItem.styles';

type TicketItemProps = {
  ticketNumbers: number[];
  isDetailMode: boolean;
};

const TicketItem = ({ ticketNumbers, isDetailMode }: TicketItemProps) => {
  return (
    <TicketItemWrapper>
      <span className="ticket-icon">🎟️ </span>
      {isDetailMode && <span className="ticket-number">{ticketNumbers.join(' ')}</span>}
    </TicketItemWrapper>
  );
};

export default TicketItem;
