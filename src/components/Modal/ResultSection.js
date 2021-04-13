import { Component } from 'react';

export default class ResultSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <table>
        <tr>
          <th>일치 갯수</th>
          <th>당첨금</th>
          <th>당첨 갯수</th>
        </tr>
        <tr>
          <td>3개</td>
          <td>5,000</td>
          <td>
            <span>0</span>개
          </td>
        </tr>
        <tr>
          <td>4개</td>
          <td>50,000</td>
          <td>
            <span>0</span>개
          </td>
        </tr>
        <tr>
          <td>5개</td>
          <td>1,500,000</td>
          <td>
            <span>0</span>개
          </td>
        </tr>
        <tr>
          <td>5개 + 보너스볼</td>
          <td>30,000,000</td>
          <td>
            <span>0</span>개
          </td>
        </tr>
        <tr>
          <td>6개</td>
          <td>2,000,000,000</td>
          <td>
            <span>0</span>개
          </td>
        </tr>
      </table>
    );
  }
}
