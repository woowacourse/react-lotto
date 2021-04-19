import { PRIZE } from '../utils';
import PrizeTableInfo from './PrizeTableInfo';

function WinningResultModal(props) {
  const { rankCount, earningRate } = props.winningResult;

  return (
    <div className={`modal ${props.isModalOpen ? 'open' : ''}`}>
      <div className="modal-inner p-10">
        <div className="modal-close" onClick={props.closeModal}>
          <svg viewBox="0 0 40 40">
            <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </div>

        <h2 className="text-center">🏆 당첨 통계 🏆</h2>
        <div className="d-flex justify-center">
          <table className="result-table border-collapse border border-black">
            <thead>
              <tr className="text-center">
                <th className="p-3">일치 갯수</th>
                <th className="p-3">당첨금</th>
                <th className="p-3">당첨 갯수</th>
              </tr>
            </thead>
            <tbody>
              <PrizeTableInfo
                winningCount={`${PRIZE.FIFTH.WINNING_COUNT}개`}
                money={PRIZE.FIFTH.MONEY}
                count={`${rankCount[PRIZE.FIFTH.RANK]}개`}
              />
              <PrizeTableInfo
                winningCount={`${PRIZE.FOURTH.WINNING_COUNT}개`}
                money={PRIZE.FOURTH.MONEY}
                count={`${rankCount[PRIZE.FOURTH.RANK]}개`}
              />
              <PrizeTableInfo
                winningCount={`${PRIZE.THIRD.WINNING_COUNT}개`}
                money={PRIZE.THIRD.MONEY}
                count={`${rankCount[PRIZE.THIRD.RANK]}개`}
              />
              <PrizeTableInfo
                winningCount={`${PRIZE.SECOND.WINNING_COUNT}개 + 보너스 볼`}
                money={PRIZE.SECOND.MONEY}
                count={`${rankCount[PRIZE.SECOND.RANK]}개`}
              />
              <PrizeTableInfo
                winningCount={`${PRIZE.FIRST.WINNING_COUNT}개`}
                money={PRIZE.FIRST.MONEY}
                count={`${rankCount[PRIZE.FIRST.RANK]}개`}
              />
            </tbody>
          </table>
        </div>
        <p className="modal__earning-rate text-center font-bold">
          당신의 총 수익률은 {earningRate}%입니다.
        </p>
        <div className="d-flex justify-center mt-5">
          <button
            type="button"
            className="modal__restart-button btn btn-cyan"
            onClick={props.resetApp}
          >
            다시 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default WinningResultModal;
