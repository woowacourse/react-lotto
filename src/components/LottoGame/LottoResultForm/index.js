import React from 'react';
import { LOTTO_NUMBER_COUNT } from '../../../constants/standard';
import { isDuplicate, isValidRange } from '../../../utils/validator';
import { MESSAGE } from '../../../constants/messages';

const LottoResultForm = props => {
  const handleSubmit = event => {
    event.preventDefault();

    const winningNumbers = Array(LOTTO_NUMBER_COUNT)
      .fill()
      .map((_, idx) => Number(event.target[`winning-${idx + 1}`].value));
    const bonusNumber = Number(event.target['bonus'].value);

    if (!isValidRange([...winningNumbers, bonusNumber])) {
      alert(MESSAGE.OUT_RANGED_LOTTO_NUMBERS);
      return;
    }

    if (isDuplicate([...winningNumbers, bonusNumber])) {
      alert(MESSAGE.DUPLICATED_LOTTO_NUMBERS);
      return;
    }

    props.setResultNumbers({ winningNumbers, bonusNumber });
    props.openResultModal();
  };

  return (
    <form className="mt-9" onSubmit={handleSubmit}>
      <div className="flex-auto d-inline-block mb-5">지난 주 당첨번호와 보너스 번호를 입력해주세요.</div>
      <div className="flex">
        <div>
          <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
          <div>
            <input name="winning-1" type="number" className="winning-number mx-1 text-center" required />
            <input name="winning-2" type="number" className="winning-number mx-1 text-center" required />
            <input name="winning-3" type="number" className="winning-number mx-1 text-center" required />
            <input name="winning-4" type="number" className="winning-number mx-1 text-center" required />
            <input name="winning-5" type="number" className="winning-number mx-1 text-center" required />
            <input name="winning-6" type="number" className="winning-number mx-1 text-center" required />
          </div>
        </div>
        <div className="flex-grow">
          <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
          <div className="flex justify-center">
            <input name="bonus" type="number" className="bonus-number text-center" required />
          </div>
        </div>
      </div>
      <button className="mt-5 btn btn-cyan w-full">결과 확인하기</button>
    </form>
  );
};

export default LottoResultForm;
