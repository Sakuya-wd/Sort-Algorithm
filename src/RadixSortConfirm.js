//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const RadixSortConfirm = (array) => {
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
  return RadixSort(array);
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

const RadixSort = (array) => {
  let max = Math.max.apply(null, array);
  let TakeOutArray = [];
  let RadixArray = [];
  let digit = 1;
  let cnt = 0;

  //バケットから値を取り出したあと格納するための配列を用意する。
  for (let i = 0; i < array.length; i++) {
    TakeOutArray[i] = 0;
  }

  //1,10,100...の位ごとにソートを行う。
  for (let i = 0; i < String(max).length; i++) {
    //０〜9の番号が振られたバケット(配列)を用意する。
    for (let j = 0; j < 10; j++) {
      RadixArray[j] = 0;
    }

    for (let j = 0; j < array.length; j++) {
      //1の位の値をバケットに格納する。
      if (i == 0) {
        RadixArray[j] = Math.floor(array[j] / digit) % 10;

        //10,100...の位の値をバケットに格納する。
      } else {
        array[j] = 0;
        RadixArray[j] = Math.floor(TakeOutArray[j] / digit) % 10;
        array[j] = TakeOutArray[j];
      }
    }

    //1の位のソート処理後は10,100...と位を上げていく。
    digit = digit * 10;

    //バケットに格納された値を昇順にソートする。
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < array.length; k++) {
        if (j === RadixArray[k]) {
          TakeOutArray[cnt] = array[k];
          cnt++;
        }
      }
    }

    cnt = 0;
  }

  return TakeOutArray;
};

module.exports = RadixSortConfirm;
