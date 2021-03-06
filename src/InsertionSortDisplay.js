//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const InsertionSortConfirm = require("./InsertionSortConfirm.js");

const InsertionSortDisplay = () => {
  //ソート元のデータ。
  let array = [1, 3, 8, 2, 5, 0, 4, 9, 7, 6];
  console.log(`ソート前 ${array}`);

  let result = InsertionSortConfirm(array);
  console.log(`ソート後 ${result}`);
};

InsertionSortDisplay();

module.exports = InsertionSortDisplay;
