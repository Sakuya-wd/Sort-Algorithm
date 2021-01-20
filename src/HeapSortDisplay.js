//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const HeapSortConfirm = require("./HeapSortConfirm.js");

const HeapSortDisplay = () => {
  //ソート元のデータ。
  let array = [1, 3, 8, 2, 5, 0, 4, 9, 7, 6];
  console.log(`ソート前 ${array}`);

  let result = HeapSortConfirm(array);
  console.log(`ソート後 ${result}`);
};

HeapSortDisplay();

module.exports = HeapSortDisplay;
