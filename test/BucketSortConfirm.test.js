//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const BucketSortConfirm = require("../src/BucketSortConfirm.js");

describe("BucketSortConfirm関数を単体テストする。", () => {
  test("引数が配列でない時、エラーを出力する。", () => {
    expect(() => BucketSortConfirm("test")).toThrow();
  });

  test("引数の配列が空である時、エラーを出力する。", () => {
    expect(() => BucketSortConfirm([])).toThrow();
  });

  test("引数の配列に正の整数以外がある時、エラーを出力する。", () => {
    expect(() =>
      BucketSortConfirm(["test", 2, 5, 8, 1, 3, 6, 9, 7, 0, 4])
    ).toThrow();
    expect(() =>
      BucketSortConfirm([1.1, 2, 5, 8, 1, 3, 6, 9, 7, 0, 4])
    ).toThrow();
    expect(() =>
      BucketSortConfirm([-1, 2, 5, 8, 1, 3, 6, 9, 7, 0, 4])
    ).toThrow();
  });

  test("引数の配列が正の整数のみの時、配列を昇順に整列する。", () => {
    expect(BucketSortConfirm([2, 5, 8, 1, 3, 6, 9, 7, 0, 4])).toEqual([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });
});
