
const SelectionSortConfirm = require('../src/SelectionSortConfirm.js');


describe('SelectionSortConfirm', () =>{

   test('SelectionSortConfirm', () =>{

      //例外処理が網羅されている事を確認。
      expect(() => SelectionSortConfirm('test')).toThrow();
      expect(() => SelectionSortConfirm([])).toThrow();
      expect(() => SelectionSortConfirm(['test',2,5,8,1,3,6,9,7,0,4])).toThrow();
      expect(() => SelectionSortConfirm([1.1,2,5,8,1,3,6,9,7,0,4])).toThrow();
      expect(() => SelectionSortConfirm([-1,2,5,8,1,3,6,9,7,0,4])).toThrow();

      //例外処理以外の仕様が網羅されているかを確認。
      expect(SelectionSortConfirm([2,5,8,1,3,6,9,7,0,4])).toEqual([0,1,2,3,4,5,6,7,8,9]);


   })

})
