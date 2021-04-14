import React from 'react';
import './TicketDetail.css';
export default class TicketDetail extends React.Component {
  render() {
    return (
      <section className="mt-6">
        <div className="flex justify-between mb-2">
          <h2 className="text-xl font-semibold">총 3개를 구매하였습니다.</h2>
          <div className="flex items-center justify-center ">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
                <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 checked:transform checked:translate-x-full checked:bg-red-100" />
              </div>
              <div className="ml-3 font-semibold text-gray-700 font-medium">번호 보기</div>
            </label>
          </div>
        </div>
        <div className="flex flex-wrap flex-col detail-mode">
          <div className="flex items-center my-2">
            <span className="mx-1 text-4xl mr-2">🎟️</span>
            <span className="text-lg">03, 09, 12, 16, 31, 41</span>
          </div>
          <div className="flex items-center my-2">
            <span className="mx-1 text-4xl mr-2">🎟️</span>
            <span className="text-lg">01, 17, 25, 40, 43, 45</span>
          </div>
          <div className="flex items-center my-2">
            <span className="mx-1 text-4xl mr-2">🎟️</span>
            <span className="text-lg">03, 16, 29, 33, 34, 41</span>
          </div>
        </div>
      </section>
    );
  }
}
