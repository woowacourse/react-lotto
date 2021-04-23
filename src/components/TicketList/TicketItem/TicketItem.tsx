import { TicketItemWrapper } from './TicketItem.styles';

type Props = {
  ticketNumbers: number[];
  isDetailMode: boolean;
};

const TicketItem = ({ ticketNumbers, isDetailMode }: Props) => {
  return (
    <TicketItemWrapper>
      <span className="ticket-icon">🎟️ </span>
      {isDetailMode && (
        <span className="ticket-numbers">
          {ticketNumbers.map((number, index) => (
            <span key={index} className="ticket-number">
              {number}
            </span>
          ))}
        </span>
      )}
    </TicketItemWrapper>
  );
};

export default TicketItem;
