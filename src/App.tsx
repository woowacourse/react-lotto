import PriceInput from './components/PriceInput/PriceInput';
import ResultModal from './components/ResultModal/ResultModal';
import TicketList from './components/TicketList/TicketList';
import WinningNumberInput from './components/WinningNumberInput/WinningNumberInput';

function App() {
  return (
    <div className="App">
      <PriceInput />
      <TicketList />
      <WinningNumberInput />
      <ResultModal />
    </div>
  );
}

export default App;
