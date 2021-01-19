//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const SortFunctionConfirm = (array) => {
  if (DifferentTypeObject(array)) {
    throw new TypeError(
      "引数が配列ではありません。引数は配列とし正の整数のみ設定下さい。"
    );
  }

  if (EmptyArray(array)) {
    throw new RangeError(
      "引数の配列が空です。引数は配列とし正の整数のみ設定下さい。"
    );
  }

  if (array.some(DifferentTypeString)) {
    throw new TypeError(
      "引数の配列に正の整数以外があります。引数は配列とし正の整数のみ設定下さい。"
    );
  }

  //引数の配列が正の整数のみの時、配列を昇順に整列する。
  return SortFunction(array);
};

const DifferentTypeObject = (array) => {
  if (typeof array !== "object") return true;
  return false;
};

const EmptyArray = (array) => {
  if (array.length == 0) return true;
  return false;
};

const DifferentTypeString = (array) => {
  if (typeof array === "string") return true;
  if (Math.round(array) != array) return true;
  if (Math.sign(array) == -1) return true;
  return false;
};

const SortFunction = (array) => {
  array.sort(Swap);

  return array;
};

const Swap = (a, b) => {
  //配列の先頭"a"と右隣"b"を比較しa-bで負数ならaをbの前に、正数ならaをbの後ろへ並び替える。
  //処理後はaとbを右に一つずつずらしていく。
  return a - b;
};

module.exports = SortFunctionConfirm;
