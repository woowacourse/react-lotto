import ALERT_MESSAGE from '../components/constants/alertMessage';
import TICKET from '../components/constants/ticket';

export const isValidPayment = (payment: number) => payment < TICKET.PRICE;

export const alertByPaymentCase = (payment: number) => {
  if (payment < TICKET.PRICE) {
    alert(ALERT_MESSAGE.SHOULD_MORE_THAN_MINIMUM_PAYMENT);
  }
};
