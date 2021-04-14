import React from 'react';

export default class PurchaseForm extends React.Component {
  render() {
    return (
      <form className="mt-5 mb-4">
        <h2 className="text-xl font-semibold ">구입할 금액을 입력해주세요.</h2>
        <div className="flex my-2">
          <label htmlFor="purchase-input" className="sr-only">
            구입 금액 입력란
          </label>
          <input
            id="purchase-input"
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            placeholder="구입 금액"
          />
          <button
            type="submit"
            className="font-bold py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white min-w-1/8"
          >
            확인
          </button>
        </div>
      </form>
    );
  }
}
