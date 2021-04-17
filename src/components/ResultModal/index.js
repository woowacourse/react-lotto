import React from "react";
import PropTypes from "prop-types";

import { GUIDE_MESSAGE } from "../../@shared/constants/messages";
import { PRIZE_TABLE, RANKINGS } from "../../@shared/constants/prizeTable";
import { Button, ResultTable, TableRow } from "./style";
import Modal from "../common/Modal";
import BoldText from "../common/BlodText";

const ResultModal = ({
  state: {
    lottoResult: { rankCount, earningRate },
  },
  action: { clear, closeModal },
}) => {
  return (
    <Modal closeModal={closeModal}>
      <h2>🏆 당첨 통계 🏆</h2>
      <ResultTable>
        <thead>
          <TableRow>
            <th>일치 갯수</th>
            <th>당첨금</th>
            <th>당첨 갯수</th>
          </TableRow>
        </thead>
        <tbody>
          {Object.values(RANKINGS).map((ranking, index) => (
            <TableRow key={`${index}-ranking`}>
              <td>{PRIZE_TABLE[ranking].condition}</td>
              <td>{PRIZE_TABLE[ranking].prize}원</td>
              <td>{rankCount[ranking]}개</td>
            </TableRow>
          ))}
        </tbody>
      </ResultTable>
      <BoldText text={GUIDE_MESSAGE.EARNING_RATE(earningRate)}></BoldText>
      <Button type="button" onClick={clear}>
        다시 시작하기
      </Button>
    </Modal>
  );
};

ResultModal.propTypes = {
  state: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired,
};

export default ResultModal;
