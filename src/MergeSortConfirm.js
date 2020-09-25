//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const MergeSortConfirm = (array) => {
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
    throw new RangeError("引数が不正です。配列に正の整数を入力してください");

    //ソートするデータの配列が正の整数なら昇順に整列する。
  } else {
    let result = MergeSort(array);

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
