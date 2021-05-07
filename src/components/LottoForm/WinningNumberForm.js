import { MESSAGE } from '../../constants';
import { isDuplicatedArray } from '../../utils';

export default function WinningNumberForm({
  lottoCount,
  setBonusNumber,
  setWinningNumbers,
  openModal,
  winningNumbers,
  bonusNumber,
}) {
  const onSubmitWinningNumberForm = (event) => {
    event.preventDefault();

    if (!lottoCount) {
      alert(MESSAGE.ALERT.LOTTO_NOT_EXIST);
      return;
    }

    if (isDuplicatedArray([...Object.values(winningNumbers), bonusNumber])) {
      alert(MESSAGE.ALERT.DUPLICATED_WINNING_NUMBERS);
      return;
    }

    openModal();
  };

  return (
    <section className="w-100 mt-5">
      <form className="w-100 mt-1" onSubmit={onSubmitWinningNumberForm}>
        <label className="w-100">
          지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해 주세요.
          <div className="d-flex mt-3">
            <fieldset id="winning-number-fieldset" className="d-flex flex-col flex-auto">
              <legend className="text-center font-bold">당첨번호</legend>
              <div className="d-flex flex-row justify-space-between">
                {Object.entries(winningNumbers).map(([key, value]) => (
                  <input
                    key={key}
                    value={value || ''}
                    onChange={(event) => {
                      setWinningNumbers({
                        ...winningNumbers,
                        [key]: event.target.valueAsNumber,
                      });
                    }}
                    type="number"
                    min="1"
                    max="45"
                    aria-label={`${
                      Object.keys(winningNumbers).indexOf(key) + 1
                    }번 쨰 당첨번호 입력`}
                    required
                    className="winning-number-input"
                  />
                ))}
              </div>
            </fieldset>
            <fieldset
              id="bonus-number-fieldset"
              className="d-flex flex-col justify-center items-center"
            >
              <legend className="text-center font-bold">보너스</legend>
              <input
                type="number"
                className="winning-number-input"
                min="1"
                max="45"
                value={bonusNumber || ''}
                onChange={(event) => {
                  setBonusNumber(event.target.valueAsNumber);
                }}
                aria-label="보너스 번호 입력"
                required
              />
            </fieldset>
          </div>
        </label>
        <button className="w-100 basic-button mt-3" type="submit">
          결과 확인하기
        </button>
      </form>
    </section>
  );
}
