//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const SelectionSortConfirm = (array) => {
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
  return SelectionSort(array);
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

const SelectionSort = (array) => {
  //ソート済みの値を除外し、全ての値がソートされるまで繰り返す。
  for (let i = 0; i < array.length - 1; i++) {
    let min = array[i];
    let count = min;

    for (let j = i + 1; j < array.length; j++) {
      //配列の先頭とそれ以外の値を比較し一番小さい値を取得する。
      if (min > array[j]) {
        min = array[j];
        count = j;
      }
    }

    //配列にある一番小さい値を先頭に格納する。
    let tmp = array[i];
    array[i] = array[count];
    array[count] = tmp;
  }

  return array;
};

module.exports = SelectionSortConfirm;
