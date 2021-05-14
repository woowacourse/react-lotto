import React from 'react';
import PropTypes from 'prop-types';
import { LOTTO } from '../../constants/lottoData';
import { ERROR_MESSAGE } from '../../constants/messages';
import { PriceFormContainer, PriceLabel, SubmitButtonContainer } from './styles';
import TextButton from '../common/Button/TextButton';

const validatePrice = (price) => {
  if (Number.isNaN(price)) {
    return ERROR_MESSAGE.TYPE_ERROR(price);
  }

  if (price < LOTTO.PRICE) {
    return ERROR_MESSAGE.LESS_THAN_MIN_PRICE;
  }

  if (price % 1 > 0) {
    return ERROR_MESSAGE.INVALID_AMOUNT;
  }

  return '';
};

const PriceForm = ({ price, setPrice, createLottoList }) => {
  const onSubmitPrice = (event) => {
    event.preventDefault();

    const errorMessage = validatePrice(price);

    if (errorMessage !== '') {
      alert(errorMessage);

      return;
    }

    const change = price % LOTTO.PRICE;
    if (change > 0) {
      alert(ERROR_MESSAGE.HAS_CHANGE(change));
    }

    createLottoList();
  };

  const onChange = ({ target: { value } }) => {
    setPrice(Number(value));
  };

  return (
    <PriceFormContainer>
      <form onSubmit={onSubmitPrice}>
        <PriceLabel>
          <span>구입할 금액을 입력해주세요.</span>
          <input
            value={price === 0 ? '' : price}
            onChange={onChange}
            name="price"
            placeholder="구입 금액"
            type="number"
            min="1000"
            max="10000000"
            step="1000"
          />
        </PriceLabel>
        <SubmitButtonContainer>
          <TextButton>확인</TextButton>
        </SubmitButtonContainer>
      </form>
    </PriceFormContainer>
  );
};

PriceForm.propTypes = {
  price: PropTypes.number,
  setPrice: PropTypes.func,
  createLottoList: PropTypes.func.isRequired,
};

export default PriceForm;
