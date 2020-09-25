
const InsertionSortConfirm  = (array) =>{


  //ソートするデータが配列でない時エラー(例外)を出力する。
  if(DifferentTypeObject(array)){

    throw new TypeError("引数が不正です。配列で指定してください。");

  //ソートするデータの配列が空の時エラー(例外)を出力する。
  }else if(EmptyArray(array)){
   
    throw new RangeError("引数が不正です。配列が空です。");
   
  //ソートするデータの配列に数字以外が入力された時エラー(例外)を出力する。
  }else if(array.some(DifferentTypeString)){
    
    throw new TypeError("引数が不正です。配列に数字以外が入力されています。");
   
  //ソートするデータの配列に正の整数以外が入力された時エラー(例外)を出力する。
  }else if(array.some(OutOfRange)){
  
    throw new RangeError("引数が不正です。配列に正の整数を入力してください。");
  
  //ソートするデータの配列が正の整数なら昇順に整列する。
  }else{

    let result = InsertionSort(array);

    return result;

  }
   

}


const DifferentTypeObject = (array) =>{

  if(typeof array !== "object") return true;

  return false;

}

const EmptyArray = (array) =>{

  if(array.length === 0) return true;

  return false;

}

const DifferentTypeString = (array) =>{

  if(typeof array === "string") return true;

  return false;

}

const OutOfRange = (array) =>{

  if(Math.round(array) != array) return true;
  if(Math.sign(array) == -1) return true;

  return false;

}


const InsertionSort = (array) =>{


  for(i=1; i<array.length; i++){

    //ソート済みの右隣
    let pivot = i;
    
    for(j=i-1; j>=0; j--){

      //ソート済みとソート済みの右隣と比較し、右隣が大きなら右隣もソート済みとする。
      if(array[pivot] > array[j]){

         break;

      }else{

      //ソート済みとソート済みの右隣と比較し、ソート済みが大きならソート済みと右隣を入れ替えていく。
        let tmp = array[pivot];
        array[pivot] = array[j];
        array[j] = tmp;

        pivot--;

      }

    }
     
  }

  return array;


}


module.exports = InsertionSortConfirm;
