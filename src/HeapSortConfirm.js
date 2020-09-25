

const HeapSortConfirm = (array) =>{


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

    let result = HeapSort(array);

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

const HeapSort = (array) =>{


  //格納するための配列を用意する。
  let TakeOutArray = [];

  for(i=0; i<array.length; i++){

    TakeOutArray[i] = 0;
  
  }


  let loop = array.length;
  let HeapLoop = 0;

  //全てのノードが格納されるまでソートを実施する。
  for(i=0; i<loop-1; i++){

    //親ノードを設定する。
     HeapLoop = Math.floor(array.length/2) - 1;

     for(j=HeapLoop; j>=0; j--){

         swap(j,array,array.length);

      }

      //一番上の親ノードを配列に格納する。
      TakeOutArray[array.length - 1] = array[0];
      array.shift();
      array.unshift(array[array.length - 1]);
      array.pop();

    } 

  return TakeOutArray;


}


const swap = (j,array,length) =>{


   //子ノードを設定する。
   let l = j * 2 + 1;
   let r = j * 2 + 2;
   let max = j;
   
   //親ノードと左の子ノードを比較し、左の子ノードが親ノードより大きいなら親子ノードを交換する。
   if(l < length && array[l] > array[max]){

        let tmp = 0;

        tmp = array[l];
        array[l] = array[max];
        array[max] = tmp

   }

   //親ノードと右の子ノードを比較し、右の子ノードが親ノードより大きいなら親子ノードを交換する。
   if(r < length && array[r] > array[max]){

       let tmp = 0;

       tmp = array[r];
       array[r] = array[max];
       array[max] = tmp

   }

      return array;

      
}


module.exports = HeapSortConfirm;
