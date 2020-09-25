//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const BubbleSortConfirm = (array) => {
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
    let result = BubbleSort(array);

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

const BubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    //ソート済みの配列を除ていき、全ての値をソートしていく。
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
