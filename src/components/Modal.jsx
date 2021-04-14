import React from 'react';

export default class Modal extends React.Component {
  render() {
    return (
      <div className="modal max-w-screen-sm mx-auto bg-gray-100 flex fixed inset-0">
        <div className="modal-inner p-10 m-auto relative">
          <div className="modal-close absolute m-4 w-6 top-2 right-2 cursor-pointer">
            <svg className="stroke-current text-blue-500 hover:text-blue-700 stroke-5" viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">🏆 당첨 통계 🏆</h2>
          <div className="d-flex justify-center">
            <table className="">
              <thead>
                <tr className="text-center border-solid border-b-2 border-gray-400">
                  <th className="font-semibold p-3">일치 갯수</th>
                  <th className="font-semibold p-3">당첨금</th>
                  <th className="font-semibold p-3">당첨 갯수</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center  border-solid border-b-2 border-gray-300">
                  <td className="p-3">3개</td>
                  <td className="p-3">5,000</td>
                  <td className="p-3">n개</td>
                </tr>
                <tr className="text-center border-solid border-b-2 border-gray-300">
                  <td className="p-3">4개</td>
                  <td className="p-3">50,000</td>
                  <td className="p-3">n개</td>
                </tr>
                <tr className="text-center border-solid border-b-2 border-gray-300">
                  <td className="p-3">5개</td>
                  <td className="p-3">1,500,000</td>
                  <td className="p-3">n개</td>
                </tr>
                <tr className="text-center border-solid border-b-2 border-gray-300">
                  <td className="p-3">5개 + 보너스볼</td>
                  <td className="p-3">30,000,000</td>
                  <td className="p-3">n개</td>
                </tr>
                <tr className="text-center border-solid border-b-2 border-gray-300">
                  <td className="p-3">6개</td>
                  <td className="p-3">2,000,000,000</td>
                  <td className="p-3">n개</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center font-bold mt-4">당신의 총 수익률은 %입니다.</p>
          <div className="d-flex justify-center mt-5">
            <button
              type="button"
              className="font-bold py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white w-full"
            >
              다시 시작하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
