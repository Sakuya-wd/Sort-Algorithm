//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const SelectionSortConfirm = require("./SelectionSortConfirm");

const SelectionSortDisplay = () => {
  //ソート元のデータ。
  let array = [1, 3, 8, 2, 5, 0, 4, 9, 7, 6];
  console.log(`ソート前 ${array}`);

  let result = SelectionSortConfirm(array);
  console.log(`ソート後 ${result}`);
};

SelectionSortDisplay();

module.exports = SelectionSortDisplay;
