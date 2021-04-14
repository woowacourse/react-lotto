import React from 'react';

export default class WinningNumberForm extends React.Component {
  render() {
    return (
      <>
        <h2 className="text-xl font-semibold mb-3 mt-6">지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</h2>
        <form className="flex flex-col items-center w-full">
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col">
              <h3 className="mt-0 mb-3 text-center font-semibold text-lg">당첨 번호</h3>
              <div className="flex mx-auto">
                <label htmlFor="winning-number-1" className="sr-only">
                  1번째 당첨 번호
                </label>
                <input id="winning-number-1" type="number" className="mx-1 text-xl text-center w-14 h-14" />
                <label htmlFor="winning-number-2" className="sr-only">
                  2번째 당첨 번호
                </label>
                <input id="winning-number-2" type="number" className="mx-1 text-xl text-center w-14 h-14" />
                <label htmlFor="winning-number-3" className="sr-only">
                  3번째 당첨 번호
                </label>
                <input id="winning-number-3" type="number" className="mx-1 text-xl text-center w-14 h-14" />
                <label htmlFor="winning-number-4" className="sr-only">
                  4번째 당첨 번호
                </label>
                <input id="winning-number-4" type="number" className="mx-1 text-xl text-center w-14 h-14" />
                <label htmlFor="winning-number-5" className="sr-only">
                  5번째 당첨 번호
                </label>
                <input id="winning-number-5" type="number" className="mx-1 text-xl text-center w-14 h-14" />
                <label htmlFor="winning-number-6" className="sr-only">
                  6번째 당첨 번호
                </label>
                <input id="winning-number-6" type="number" className="mx-1 text-xl text-center w-14 h-14" />
              </div>
            </div>

            <div className="flex flex-col ">
              <h3 className="mt-0 mb-3 text-center font-semibold text-lg">보너스 번호</h3>
              <div className="flex justify-center">
                <label htmlFor="bonus-number" className="sr-only">
                  보너스 번호
                </label>
                <input id="bonus-number" type="number" className="mx-1 text-center w-14 h-14" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="font-bold mt-5 py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white w-11/12"
          >
            결과 확인하기
          </button>
        </form>
      </>
    );
  }
}
