
const BucketSortConfirm = require('../src/BucketSortConfirm.js');


describe('BucketSortConfirm', () =>{

   test('BucketSortConfirm', () =>{

      //例外処理が網羅されている事を確認。
      expect(() => BucketSortConfirm('test')).toThrow();
      expect(() => BucketSortConfirm([])).toThrow();
      expect(() => BucketSortConfirm(['test',2,5,8,1,3,6,9,7,0,4])).toThrow();
      expect(() => BucketSortConfirm([1.1,2,5,8,1,3,6,9,7,0,4])).toThrow();
      expect(() => BucketSortConfirm([-1,2,5,8,1,3,6,9,7,0,4])).toThrow();

      //例外処理以外の仕様が網羅されているかを確認。
      expect(BucketSortConfirm([2,5,8,1,3,6,9,7,0,4])).toEqual([0,1,2,3,4,5,6,7,8,9]);
      expect(BucketSortConfirm([0,3,2])).toEqual([0,2,3]);

   })

})
