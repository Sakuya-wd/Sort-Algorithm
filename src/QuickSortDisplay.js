//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const QuickSortConfirm = require("./QuickSortConfirm.js");

const QuickSortDisplay = () => {
  //ソート元のデータ。
  let array = [1, 3, 8, 2, 5, 0, 4, 9, 7, 6];
  console.log(`ソート前 ${array}`);

  let result = QuickSortConfirm(array);
  console.log(`ソート後 ${result}`);
};

QuickSortDisplay();

module.exports = QuickSortDisplay;
