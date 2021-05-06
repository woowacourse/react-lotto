import { TicketItemWrapper } from './TicketItem.styles';

interface Props {
  ticketNumbers: number[];
  isDetailMode: boolean;
}

const TicketItem: React.VFC<Props> = ({ ticketNumbers, isDetailMode = false }) => {
  return (
    <TicketItemWrapper>
      <span className="ticket-icon">🎟️ </span>
      {isDetailMode && <span className="ticket-number">{ticketNumbers.join(' ')}</span>}
    </TicketItemWrapper>
  );
};

export default TicketItem;
