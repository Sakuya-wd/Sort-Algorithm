//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const RadixSortConfirm = require("./RadixSortConfirm.js");

const RadixSortDisplay = () => {
  //ソートするデータ。
  let array = [101, 103, 108, 102, 105, 100, 104, 109, 107, 106, 110, 200];

  console.log(`ソート前 ${array}`);

  const result = RadixSortConfirm(array);
  console.log(`ソート後 ${result}`);
};

RadixSortDisplay();

module.exports = RadixSortDisplay;
