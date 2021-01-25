//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const BubbleSortConfirm = (array) => {
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
  return BubbleSort(array);
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

const BubbleSort = (array) => {
  //ソート済みの配列を除ていき、全ての値をソートしていく。
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      //配列の先頭と右隣を比較し、配列の先頭が大きいなら配列の先頭と右隣を交換する。先頭を一つ右に移動する。
      //同様に終端まで左右の比較を行い終端には最も大きい値がソートされる。
      if (array[j] > array[j + 1]) {
        let tmp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = tmp;
      }
    }
  }

  return array;
};

module.exports = BubbleSortConfirm;
