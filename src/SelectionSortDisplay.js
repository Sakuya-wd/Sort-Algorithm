
const SelectionSortConfirm = require('./SelectionSortConfirm');


const SelectionSortDisplay = () =>{

     //ソートするデータ。
     let array = [1,3,8,2,5,0,4,9,7,6];
      
     console.log(`ソート前 ${array}`)

     const result = SelectionSortConfirm(array);
     console.log(`ソート後 ${result}`);

}

SelectionSortDisplay();

module.exports = SelectionSortDisplay;
