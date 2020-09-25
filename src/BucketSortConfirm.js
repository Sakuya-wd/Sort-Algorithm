const BucketSortConfirm = (array) =>{


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

    let result = BucketSort(array);

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


const BucketSort = (array) =>{


  let BucketArray = [];
  let TakeOutArray = [];
  let BucketCnt = 0;
  let TakeOutCnt = 0;

  //配列にある最大値分のバケット(配列)を用意する。
  for(i=0; i<=Math.max.apply(null,array); i++){

      BucketArray[i] = 0;
        
  }
 
  //バケットから値を取り出したあと格納するための配列を用意する。
  for(i=0; i<array.length; i++){
 
      TakeOutArray[i] = 0;
         
  }

     
　//配列の先頭から値を取り出し、値と一致する番号を持つバケットに格納する。
  for(i=0; i<=Math.max.apply(null,array); i++){

      BucketCnt = array[i];
      BucketArray[BucketCnt]++;

  }

  //バケットに全て格納後、バケットの先頭から順に値を取り出す。
  for(i=0; i<=Math.max.apply(null,array); i++){
           
      if(BucketArray[i] > 0){

	      for (j=0; j<BucketArray[i]; j++){

              TakeOutArray[TakeOutCnt] = i;
              TakeOutCnt++;

           }

       }

    }  

    return TakeOutArray;
    

}


module.exports = BucketSortConfirm;

