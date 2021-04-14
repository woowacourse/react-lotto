import { Component } from 'react';

export default class ResultSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <table className="mt-3">
        <tr>
          <th className="p-2">일치 갯수</th>
          <th className="p-2">당첨금</th>
          <th className="p-2">당첨 갯수</th>
        </tr>
        <tr className="text-center">
          <td className="p-2">3개</td>
          <td className="p-2">5,000</td>
          <td className="p-2">
            <span>0</span>개
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-2">4개</td>
          <td className="p-2">50,000</td>
          <td className="p-2">
            <span>0</span>개
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-2">5개</td>
          <td className="p-2">1,500,000</td>
          <td className="p-2">
            <span>0</span>개
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-2">5개 + 보너스볼</td>
          <td className="p-2">30,000,000</td>
          <td className="p-2">
            <span>0</span>개
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-2">6개</td>
          <td className="p-2">2,000,000,000</td>
          <td className="p-2">
            <span>0</span>개
          </td>
        </tr>
      </table>
    );
  }
}
