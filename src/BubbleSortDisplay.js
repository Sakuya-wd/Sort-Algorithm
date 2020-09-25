//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const BubbleSortConfirm = require("./BubbleSortConfirm.js");

const BubbleSortDisplay = () => {
  //ソートするデータ。
  let array = [1, 3, 8, 2, 5, 0, 4, 9, 7, 6];

  console.log(`ソート前 ${array}`);

  const result = BubbleSortConfirm(array);
  console.log(`ソート後 ${result}`);
};

BubbleSortDisplay();

module.exports = BubbleSortDisplay;
