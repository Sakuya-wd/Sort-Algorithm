
const RadixSortConfirm = require('../src/RadixSortConfirm.js');


describe('RadixSortConfirm', () =>{

   test('RadixSortConfirm', () =>{

      //例外処理が網羅されている事を確認。
      expect(() => RadixSortConfirm('test')).toThrow();
      expect(() => RadixSortConfirm([])).toThrow();
      expect(() => RadixSortConfirm(['test',102,105,108,101,103,106,109,107,100,104,110,200])).toThrow();
      expect(() => RadixSortConfirm([1.1,102,105,108,101,103,106,109,107,100,104,110,200])).toThrow();
      expect(() => RadixSortConfirm([-1,102,105,108,101,103,106,109,107,100,104,110,200])).toThrow();

      //例外処理以外の仕様が網羅されているかを確認。
      expect(RadixSortConfirm([102,105,108,101,103,106,109,107,100,104,110,200])).toEqual([100,101,102,103,104,105,106,107,108,109,110,200]);
      

   })

})
