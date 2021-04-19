export const MESSAGE = {
  INVALID_PURCHASE_AMOUNT_UNDER_MONETARY_UNIT: '최소 화폐단위 미만의 금액은 입력이 불가합니다.',
  INVALID_PURCHASE_AMOUNT_UNDER_LOTTO_UNIT_PRICE: '1,000원 미만의 금액을 입력이 불가합니다.',
  PURCHASE_AMOUNT_HAS_CHANGE: (change) =>
    `입력된 금액에서 ${change}원을 제외한 금액으로 로또를 구매했습니다.\n거스름돈 챙겨가세요:)`,
};

export const LOTTO_NUMBER_SEPARATOR = ', ';
