
const RadixSortConfirm = (array) =>{

    
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

    let result = RadixSort(array);

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


const RadixSort = (array) =>{

  
    let max = Math.max.apply(null,array);
    let TakeOutArray = [];
    let RadixArray = [];
    let digit = 1;
    let cnt = 0;


    //バケットから値を取り出したあと格納するための配列を用意する。
    for(i=0; i<array.length; i++){

        TakeOutArray[i] = 0;

    }

    //1,10,100...の位ごとにソートを行う。
    for(i=0; i<String(max).length; i++){


      //０〜9の番号が振られたバケット(配列)を用意する。
      for(j=0; j<10; j++){

        RadixArray[j] = 0;
   
      }
  
      for(j=0; j<array.length; j++){
   
         //1の位の値をバケットに格納する。
         if(i == 0){

            RadixArray[j] = Math.floor(array[j] / digit) % 10;

         //10,100...の位の値をバケットに格納する。
          }else{

            array[j] =0;
            RadixArray[j] = Math.floor(TakeOutArray[j] / digit) % 10;
            array[j] = TakeOutArray[j];

          }
            
       }
  
       //1の位のソート処理後は10,100...と位を上げていく。
       digit = digit * 10;

       //バケットに格納された値を昇順にソートする。
       for(j=0; j<10; j++){

         for(k=0; k<array.length; k++){
    
            if(j === RadixArray[k]){

                TakeOutArray[cnt] = array[k];
                cnt++;
                   
            }     

          }
             
        }

        cnt = 0;

   }

   return TakeOutArray;


}


module.exports = RadixSortConfirm;

