//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const SelectionSortConfirm = (array) => {
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
    let result = SelectionSort(array);

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
    } //配列にある一番小さい値を先頭に格納する。

    let tmp = array[i];
    array[i] = array[count];
    array[count] = tmp;
  }

  return array;
};

module.exports = SelectionSortConfirm;
