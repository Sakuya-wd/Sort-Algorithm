//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const InsertionSortConfirm = (array) => {
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
  return InsertionSort(array);
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

const InsertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    //ソート済みの右隣
    let pivot = i;

    for (let j = i - 1; j >= 0; j--) {
      //ソート済みとソート済みの右隣と比較し、右隣が大きなら右隣もソート済みとする。
      if (array[pivot] > array[j]) {
        break;
      } else {
        //ソート済みとソート済みの右隣と比較し、ソート済みが大きならソート済みと右隣を入れ替えていく。
        let tmp = array[pivot];
        array[pivot] = array[j];
        array[j] = tmp;

        pivot--;
      }
    }
  }

  return array;
};

module.exports = InsertionSortConfirm;
