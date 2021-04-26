import { getKRMoneyString } from '../../../utils/format';

type Props = {
  match: number;
  prize: number;
  matchCount: number;
  isBonus?: boolean;
};

const ResultTableRow = ({ match, prize, matchCount, isBonus }: Props) => {
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
