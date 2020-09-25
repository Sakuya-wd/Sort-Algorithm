//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const QuickSortConfirm = (array) => {
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
    let result = QuickSort(array);

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

const QuickSort = (array) => {
  let begin = 0;
  let end = array.length - 1;

  Swap(array, begin, end);

  return array;
};

const Swap = (array, begin, end) => {
  //配列の中央をpivotとする。
  let middle = array[Math.floor((begin + end) / 2)];
  //pivotより左側を、pivotより値が小さい値のグループとする。
  let left = begin;
  //pivotより右側を、pivotより値が大きい値のグループとする。
  let right = end;

  while (true) {
    //pivotより左側をpivotと比較しpivot以上の値を取得する。
    while (array[left] < middle) {
      left++;
    }

    //pivotより右側をpivotと比較しpivot以下の値を取得する。
    while (middle < array[right]) {
      right--;
    }

    //取得した値を入れ替えれなくなったらループを終了する。
    if (right <= left) {
      break;
    }

    //取得した値を入れ替える。
    let tmp = array[left];
    array[left] = array[right];
    array[right] = tmp;

    left++;
    right--;
  }

  //pivotより左側を分割しながら再帰的にクイックソートを実行する。
  if (begin < left - 1) {
    Swap(array, begin, left - 1);
  }

  //pivotより右側を分割しながら再帰的にクイックソートを実行する。
  if (right + 1 < end) {
    Swap(array, right + 1, end);
  }

  return array;
};

module.exports = QuickSortConfirm;
