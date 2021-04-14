import PaymentForm from './components/PaymentForm/PaymentForm';
import TicketList from './components/TicketList/TicketList';
import ResultModal from './components/ResultModal/ResultModal';
import WinningNumberInput from './components/WinningNumberInput/WinningNumberInput';
import { AppWrapper } from './App.styles';
import Button from './common/Button';

function App() {
  return (
    <AppWrapper>
      <div className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <PaymentForm />
          <TicketList />
          <WinningNumberInput />
          <Button fullWidth>결과 확인하기</Button>
        </div>
      </div>
      <ResultModal open />
    </AppWrapper>
  );
}

export default App;
