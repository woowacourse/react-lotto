import { getKRMoneyString } from '../../../utils/format';

interface Props {
  match: number;
  prize: number;
  matchCount: number;
  isBonus?: boolean;
}

const ResultTableRow: React.VFC<Props> = ({ match, prize, matchCount, isBonus }) => {
  return (
    <tr>
      <td>
        {match}개 {isBonus && '+ 보너스볼'}
      </td>
      <td>{getKRMoneyString(prize)}</td>
      <td>{matchCount}개</td>
    </tr>
  );
};

export default ResultTableRow;
