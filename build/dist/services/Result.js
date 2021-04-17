function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { RANKING, RANKING_TABLE, WINNING_TABLE } from '../constants/index.js';
import { getIntersectionCount, initObject } from '../utils/index.js';

var getRanking = function getRanking(lotto, _ref) {
  var winningNumberList = _ref.winningNumberList,
      bonusNumber = _ref.bonusNumber;
  var matchCount = getIntersectionCount(lotto, winningNumberList);

  if (matchCount === 5) {
    var matchBonusCount = getIntersectionCount(lotto, [bonusNumber]);
    matchCount += matchBonusCount && 0.5;
  }

  return RANKING_TABLE[matchCount] || RANKING.NO_PRIZE;
};

export var getWinningResult = function getWinningResult() {
  var lottoList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
      _ref2$winningNumber = _ref2.winningNumber,
      winningNumber = _ref2$winningNumber === void 0 ? {} : _ref2$winningNumber,
      _ref2$bonusNumber = _ref2.bonusNumber,
      bonusNumber = _ref2$bonusNumber === void 0 ? null : _ref2$bonusNumber;

  var winningNumberList = Object.values(winningNumber);
  var winningResult = initObject(Object.values(RANKING).filter(function (ranking) {
    return ranking !== RANKING.NO_PRIZE;
  }), 0);
  Object.values(lottoList).forEach(function (lotto) {
    var ranking = getRanking(lotto, {
      winningNumberList: winningNumberList,
      bonusNumber: bonusNumber
    });

    if (ranking !== RANKING.NO_PRIZE) {
      winningResult = _objectSpread(_objectSpread({}, winningResult), {}, _defineProperty({}, ranking, winningResult[ranking] + 1));
    }
  });
  return winningResult;
};
export var getProfitRate = function getProfitRate(winningResult, moneyInput) {
  var total = Object.entries(winningResult).reduce(function (accumulator, currentValue) {
    var _currentValue = _slicedToArray(currentValue, 2),
        ranking = _currentValue[0],
        winningCount = _currentValue[1];

    return accumulator + WINNING_TABLE[ranking].PRIZE * winningCount;
  }, 0);

  if (total < moneyInput) {
    return Math.floor((total / moneyInput - 1) * 100);
  }

  return Math.floor(total / moneyInput) * 100;
};