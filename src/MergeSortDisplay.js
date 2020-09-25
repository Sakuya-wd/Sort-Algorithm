//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const MergeSortConfirm = require("./MergeSortConfirm.js");

const MergeSortDisplay = () => {
  //ソートするデータ。
  let array = [1, 3, 8, 2, 5, 0, 4, 9, 7, 6];

  console.log(`ソート前 ${array}`);

  const result = MergeSortConfirm(array);
  console.log(`ソート後 ${result}`);
};

MergeSortDisplay();

module.exports = MergeSortDisplay;
