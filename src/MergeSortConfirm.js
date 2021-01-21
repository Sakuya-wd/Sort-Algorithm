//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const MergeSortConfirm = (array) => {
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
  return MergeSort(array);
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

const MergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  //再帰的に配列を二分割していき配列数が1になるまで分割を繰り返えす。
  return alignment(MergeSortConfirm(left), MergeSortConfirm(right));
};

const alignment = (left, right) => {
  //合併するための配列を用意する。
  let alignmentArray = [];

  //分割した要素を昇順に並び替えながら合併していく。
  //分割した配列の先頭を比較し、小さい値から合併用の配列に格納する。
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      alignmentArray.push(left.shift());
    } else {
      alignmentArray.push(right.shift());
    }
  }

  //分割した配列の片方が無くなったら、残りは昇順に合併用の配列に格納する。
  while (left.length) {
    alignmentArray.push(left.shift());
  }

  while (right.length) {
    alignmentArray.push(right.shift());
  }

  return alignmentArray;
};

module.exports = MergeSortConfirm;
