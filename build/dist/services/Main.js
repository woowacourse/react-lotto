function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LOTTO } from '../constants/index.js';
import { getRandomId, shuffle } from '../utils/index.js';

var generateLotto = function generateLotto(baseNumberList) {
  var lottoId = getRandomId();
  var lottoNumberList = shuffle(baseNumberList).slice(0, LOTTO.COUNT).sort(function (a, b) {
    return a - b;
  });
  return _defineProperty({}, lottoId, lottoNumberList);
};

export var purchaseLottoList = function purchaseLottoList(moneyInput) {
  var count = Math.floor(moneyInput / LOTTO.PRICE);
  var baseNumberList = Array.from({
    length: LOTTO.MAX_NUMBER
  }, function (_, index) {
    return index + 1;
  });
  var newLottoList = {};
  Array.from({
    length: count
  }, function () {
    var lotto = generateLotto(baseNumberList);
    newLottoList = _objectSpread(_objectSpread({}, newLottoList), lotto);
  });
  return newLottoList;
};