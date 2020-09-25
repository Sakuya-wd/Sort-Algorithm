
const HeapSortConfirm = require('../src/HeapSortConfirm.js');


describe('HeapSortConfirm', () =>{

   test('HeapSortConfirm', () =>{

      //例外処理が網羅されている事を確認。
      expect(() => HeapSortConfirm('test')).toThrow();
      expect(() => HeapSortConfirm([])).toThrow();
      expect(() => HeapSortConfirm(['test',2,5,8,1,3,6,9,7,0,4])).toThrow();
      expect(() => HeapSortConfirm([1.1,2,5,8,1,3,6,9,7,0,4])).toThrow();
      expect(() => HeapSortConfirm([-1,2,5,8,1,3,6,9,7,0,4])).toThrow();

      //例外処理以外の仕様が網羅されているかを確認。
      expect(HeapSortConfirm([2,5,8,1,3,6,9,7,0,4])).toEqual([0,1,2,3,4,5,6,7,8,9]);


   })

})
