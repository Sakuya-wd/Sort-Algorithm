//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const BucketSortConfirm = (array) => {
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
  return BucketSort(array);
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

const BucketSort = (array) => {
  let BucketArray = [];
  let TakeOutArray = [];
  let BucketCnt = 0;
  let TakeOutCnt = 0;

  //配列にある最大値分のバケット(配列)を用意する。
  for (let i = 0; i <= Math.max.apply(null, array); i++) {
    BucketArray[i] = 0;
  }

  //バケットから値を取り出したあと格納するための配列を用意する。
  for (let i = 0; i < array.length; i++) {
    TakeOutArray[i] = 0;
  }

  //配列の先頭から値を取り出し、値と一致する番号を持つバケットに格納する。
  for (let i = 0; i <= Math.max.apply(null, array); i++) {
    BucketCnt = array[i];
    BucketArray[BucketCnt]++;
  }

  //バケットに全て格納後、バケットの先頭から順に値を取り出す。
  for (let i = 0; i <= Math.max.apply(null, array); i++) {
    if (BucketArray[i] > 0) {
      for (let j = 0; j < BucketArray[i]; j++) {
        TakeOutArray[TakeOutCnt] = i;
        TakeOutCnt++;
      }
    }
  }

  return TakeOutArray;
};

module.exports = BucketSortConfirm;
