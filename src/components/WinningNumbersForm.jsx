import React, { useState } from 'react';
import { LOTTERY } from '../utils';

function WinningNumbersForm(props) {
  const [isSubmit, setSubmit] = useState(false);
  const [message, setMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    try {
      props.onSubmit();
      setSubmit(true);
      setMessage('');
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-9">
      <label className="flex-auto d-inline-block mb-3">
        지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
      </label>
      <div className="d-flex">
        <div>
          <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
          <div>
            {Array(LOTTERY.NUMBER_COUNT)
              .fill(null)
              .map((_, index) => (
                <input
                  key={`winning-number-${index}`}
                  onChange={props.onWinningNumberChange}
                  data-index={index}
                  className="winning-number mx-1 text-center"
                  type="number"
                  min={LOTTERY.MIN_NUMBER}
                  max={LOTTERY.MAX_NUMBER}
                  required
                  disabled={isSubmit}
                />
              ))}
          </div>
        </div>
        <div className="bonus-number-container flex-grow">
          <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
          <div className="d-flex justify-center">
            <input
              className="bonus-number text-center"
              onChange={props.onBonusNumberChange}
              type="number"
              min={LOTTERY.MIN_NUMBER}
              max={LOTTERY.MAX_NUMBER}
              disabled={isSubmit}
              required
            />
          </div>
        </div>
      </div>
      <p className="text-center">{message}</p>
      <button
        type="submit"
        className="open-result-modal-button mt-5 btn btn-cyan w-100"
      >
        결과 확인하기
      </button>
    </form>
  );
}

export default WinningNumbersForm;
