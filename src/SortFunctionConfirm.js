//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const SortFunctionConfirm = (array) => {
  //ソートするデータが配列でない時エラー(例外)を出力する。
  if (DifferentTypeObject(array)) {
    throw new TypeError("引数が不正です。配列で指定してください。");

    //ソートするデータの配列が空の時エラー(例外)を出力する。
  } else if (EmptyArray(array)) {
    throw new RangeError("引数が不正です。配列が空です。");

    //ソートするデータの配列に数字以外が入力された時エラー(例外)を出力する。
  } else if (array.some(DifferentTypeString)) {
    throw new TypeError("引数が不正です。配列に数字以外が入力されています。");

    //ソートするデータの配列に正の整数以外が入力された時エラー(例外)を出力する。
  } else if (array.some(OutOfRange)) {
    throw new RangeError("引数が不正です。配列に正の整数を入力してください。");

    //ソートするデータの配列が正の整数なら昇順に整列する。
  } else {
    let result = SortFunction(array);

    return result;
  }
};

const DifferentTypeObject = (array) => {
  if (typeof array !== "object") return true;

  return false;
};

const EmptyArray = (array) => {
  if (array.length === 0) return true;

  return false;
};

const DifferentTypeString = (array) => {
  if (typeof array === "string") return true;

  return false;
};

const OutOfRange = (array) => {
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
