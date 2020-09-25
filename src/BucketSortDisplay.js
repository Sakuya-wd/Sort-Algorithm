
const BucketSortConfirm = require('./BucketSortConfirm.js');


const BucketSortDisplay = () =>{
 
    //ソート元のデータ
    let array = [1,3,8,2,5,0,4,9,7,6];

    console.log(`ソート前 ${array}`);

    let result = BucketSortConfirm(array);
    console.log(`ソート後 ${result}`);

}


BucketSortDisplay();

module.exports = BucketSortDisplay;