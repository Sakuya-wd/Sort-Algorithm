//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const HeapSortConfirm = (array) => {
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
  return HeapSort(array);
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

const HeapSort = (array) => {
  //格納するための配列を用意する。
  let TakeOutArray = [];

  for (let i = 0; i < array.length; i++) {
    TakeOutArray[i] = 0;
  }

  let loop = array.length;
  let HeapLoop = 0;

  //全てのノードが格納されるまでソートを実施する。
  for (let i = 0; i < loop - 1; i++) {
    //親ノードを設定する。
    HeapLoop = Math.floor(array.length / 2) - 1;

    for (let j = HeapLoop; j >= 0; j--) {
      swap(j, array, array.length);
    }

    //一番上の親ノードを配列に格納する。
    TakeOutArray[array.length - 1] = array[0];
    array.shift();
    array.unshift(array[array.length - 1]);
    array.pop();
  }

  return TakeOutArray;
};

const swap = (j, array, length) => {
  //子ノードを設定する。
  let l = j * 2 + 1;
  let r = j * 2 + 2;
  let max = j;

  //親ノードと左の子ノードを比較し、左の子ノードが親ノードより大きいなら親子ノードを交換する。
  if (l < length && array[l] > array[max]) {
    let tmp = 0;

    tmp = array[l];
    array[l] = array[max];
    array[max] = tmp;
  }

  //親ノードと右の子ノードを比較し、右の子ノードが親ノードより大きいなら親子ノードを交換する。
  if (r < length && array[r] > array[max]) {
    let tmp = 0;

    tmp = array[r];
    array[r] = array[max];
    array[max] = tmp;
  }

  return array;
};

module.exports = HeapSortConfirm;
