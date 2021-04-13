import PriceInputForm from './components/PriceInputForm/PriceInputForm';
// import ResultModal from './components/ResultModal/ResultModal';
// import TicketList from './components/TicketList/TicketList';
// import WinningNumberInput from './components/WinningNumberInput/WinningNumberInput';

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <PriceInputForm />
          {/* <section id="ticket-list-wrapper" className="mt-9 hide">
            <div className="d-flex">
              <label id="ticket-count" className="flex-auto my-0"></label>
              <div className="flex-auto d-flex justify-end pr-1">
                <label id="toggle-detail-mode" className="switch">
                  <input type="checkbox" className="lotto-numbers-toggle-button" />
                  <span className="text-base font-normal">번호보기</span>
                </label>
              </div>
            </div>
            <div id="ticket-list" className="d-flex flex-wrap"></div>
          </section> */}
          <form id="lotto-number-form" className="mt-9 hide">
            <label className="flex-auto d-inline-block mb-3">
              지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
            </label>
            <div className="d-flex">
              <div>
                <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
                <div>
                  <input
                    type="number"
                    className="winning-number mx-1 text-center"
                    name="first"
                    required
                  />
                  <input
                    type="number"
                    className="winning-number mx-1 text-center"
                    name="second"
                    required
                  />
                  <input
                    type="number"
                    className="winning-number mx-1 text-center"
                    name="third"
                    required
                  />
                  <input
                    type="number"
                    className="winning-number mx-1 text-center"
                    name="fourth"
                    required
                  />
                  <input
                    type="number"
                    className="winning-number mx-1 text-center"
                    name="fifth"
                    required
                  />
                  <input
                    type="number"
                    className="winning-number mx-1 text-center"
                    name="sixth"
                    required
                  />
                </div>
              </div>
              <div className="bonus-number-container flex-grow">
                <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
                <div className="d-flex justify-center">
                  <input type="number" className="bonus-number text-center" name="bonus" required />
                </div>
              </div>
            </div>
            <button
              type="submit"
              id="result"
              className="open-result-modal-button mt-5 btn btn-cyan w-100"
            >
              결과 확인하기
            </button>
          </form>
        </div>
      </div>

      <div id="result-modal" className="modal">
        <div className="modal-inner p-10">
          <div className="modal-close">
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
                <tr className="text-center">
                  <td className="p-3">3개</td>
                  <td className="p-3">5,000</td>
                  <td id="fifth" className="p-3">
                    n개
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">4개</td>
                  <td className="p-3">50,000</td>
                  <td id="fourth" className="p-3">
                    n개
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">5개</td>
                  <td className="p-3">1,500,000</td>
                  <td id="third" className="p-3">
                    n개
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">5개 + 보너스볼</td>
                  <td className="p-3">30,000,000</td>
                  <td id="second" className="p-3">
                    n개
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">6개</td>
                  <td className="p-3">2,000,000,000</td>
                  <td id="first" className="p-3">
                    n개
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p id="profit" className="text-center font-bold"></p>
          <div className="d-flex justify-center mt-5">
            <button id="reset" type="reset" className="btn btn-cyan">
              다시 시작하기
            </button>
          </div>
        </div>
      </div>

      <div id="lotto-issue-modal" className="modal">
        <div className="modal-inner modal-inner__ticket-issue p-8">
          <section className="mt-5 text-center">
            <h1>로또 발급하기</h1>
            <div className="mt-3">
              <div
                id="issued-ticket-list"
                className="ticket-box d-flex flex-wrap justify-center"
              ></div>
            </div>
            <div className="mt-3">
              <div>현재 발급 가능한 수량</div>
              <div>
                <span id="issuable-ticket-amount">0</span> 장
              </div>
            </div>
            <div className="mt-5">
              <form id="manual-issue-form" className="p-2">
                <div className="text-center">원하시는 번호를 직접 입력해주세요.</div>
                <div className="d-flex mt-4 justify-center align-center">
                  <input
                    type="number"
                    name="manual-first"
                    className="js-manual-input manual-number mx-1 text-center"
                    required
                  />
                  <input
                    type="number"
                    name="manual-second"
                    className="js-manual-input manual-number mx-1 text-center"
                    required
                  />
                  <input
                    type="number"
                    name="manual-third"
                    className="js-manual-input manual-number mx-1 text-center"
                    required
                  />
                  <input
                    type="number"
                    name="manual-fourth"
                    className="js-manual-input manual-number mx-1 text-center"
                  />
                  <input
                    type="number"
                    name="manual-fifth"
                    className="js-manual-input manual-number mx-1 text-center"
                    required
                  />
                  <input
                    type="number"
                    name="manual-sixth"
                    className="js-manual-input manual-number mx-1 text-center"
                    required
                  />
                  <button
                    type="submit"
                    id="manual-submit"
                    className="btn btn-cyan btn__square ml-2"
                  >
                    발급
                  </button>
                </div>
              </form>
              <button id="lotto-issue-end-button" className="mt-5 btn btn-cyan w-100">
                나머지는 자동 구매
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
