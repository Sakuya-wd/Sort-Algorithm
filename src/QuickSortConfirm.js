//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const QuickSortConfirm = (array) => {
  if (DifferentTypeObject(array)) {
    throw new TypeError(
      "引数が配列ではありません。引数は配列とし正の整数のみ設定下さい。"
    );
  }

  if (EmptyArray(array)) {
    throw new RangeError(
      "引数の配列が空です。引数は配列とし正の整数を設定下さい。"
    );
  }

  if (array.some(DifferentTypeString)) {
    throw new TypeError(
      "引数の配列に正の整数以外があります。引数は配列とし正の整数のみ設定下さい。"
    );
  }

  //引数の配列が正の整数のみの時、配列を昇順に整列する。
  return QuickSort(array);
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

    //取得した値が入れ替えれなくなったらループを終了する。
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

  //pivotより左側を分割しながら再帰的にソートを実行する。
  if (begin < left - 1) {
    Swap(array, begin, left - 1);
  }

  //pivotより右側を分割しながら再帰的にソートを実行する。
  if (right + 1 < end) {
    Swap(array, right + 1, end);
  }

  return array;
};

module.exports = QuickSortConfirm;
