# ソートアルゴリズム

バブル、バケット、基数、ヒープ、マージ、クイック、選択、挿入、sortメソッドのプログラムを用意しました。

# バブル

## プログラム仕様

・ 配列は正の整数とする。配列は`[1,3,8,2,5,0,4,9,7,6]`をデフォルトとする。

・ 1) 先頭の値と右隣の値を比較する。

・ 2) 先頭の値が右隣より値が大きいなら値を交換する。先頭を一つ右に移動する。

・ 3) 同様に終端まで左右の比較を行う。これにより終端には最も大きい値がソートされる。

・ 4) ソート済みの終端を除き、全ての値がソートされるまで1から繰り返す。

・ 配列を`昇順に整列`し出力する。


## プログラム実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

srcディレクトリ内にてプログラム実行コマンドを願います。

プログラム実行コマンド

```
node BubbleDisplay.js
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 引数が正の整数の時、配列を`昇順に整列`し出力する。

## テスト実行

テnode_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

テスト実行コマンド

```
npm run test
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```

## 構文チェックと自動コード整形

git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。

# バケット

## プログラム仕様

・ 配列は正の整数とする。配列は`[1,3,8,2,5,0,4,9,7,6]`をデフォルトとする。

・ 配列の最大値分のバケット(配列)を用意する。デフォルトは０〜9の番号が振られたバケットを用意する。

・ 配列の先頭から値を取り出し、値と一致する番号を持つバケットに格納する。

・ バケットに全ての値を格納後、バケットの先頭から順に値を取り出す。

・ 配列を`昇順に整列`し出力する。


## プログラム実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

srcディレクトリ内にてプログラム実行コマンドを願います。

プログラム実行コマンド

```
node BucketDisplay.js
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 引数が正の整数の時、配列を`昇順に整列`し出力する。

## テスト実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

テスト実行コマンド

```
npm run test
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```

## 構文チェックと自動コード整形

git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。

# 基数

## プログラム仕様

・ 配列は正の整数とする。

・ 配列は`[101,103,108,102,105,100,104,109,107,106,110,200]`をデフォルトとする。

・ ０〜9の番号が振られたバケット(配列)を用意する。

・ 配列の先頭から値を取り出し、1の位の値と一致する番号を持つバケットに格納する。

・ 配列の全ての値を同様にバケットに格納する。

・ 配列の先頭から値を取り出し、10の位の値と一致する番号を持つバケットに格納する。

・ 配列の全ての値を同様にバケットに格納する。

・ 配列の先頭から値を取り出し、100の位の値と一致する番号を持つバケットに格納する。

・ 配列の全ての値を同様にバケットに格納する。

・ バケットに格納後、バケットの先頭から順に値を取り出す。

・ 配列を`昇順に整列`し出力する。

## プログラム実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

srcディレクトリ内にてプログラム実行コマンドを願います。

プログラム実行コマンド

```
node RadixDisplay.js
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 引数が正の整数の時、配列を`昇順に整列`し出力する。

## テスト実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

テスト実行コマンド

```
npm run test
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```

## 構文チェックと自動コード整形

git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。


# ヒープ

・ 配列は正の整数とする。配列は`[1,3,8,2,5,0,4,9,7,6]`をデフォルトとする。

・ 1) 配列を木構造にする。(親要素が複数の子要素を持つという形で枝分かれしていく構造のこと)

・ 2) 一番下にあるグループの親子ノードを比較し、一番大きい値を親ノードに交換する。

・ 3) 次に上のグループで親子ノードを比較し、一番大きい値を親ノードに交換する。

・ 4) 同様に一番上のグループまで繰り返す事で、一番上の値が最大値になるのでソート済みの配列に格納していく。

・ 5) ソート済みの値を除外し、配列を再度木構造にし全ての値がソートされるまで1から繰り返す。

・ 配列を`昇順に整列`し出力する。

## プログラム仕様

## プログラム実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

srcディレクトリ内にてプログラム実行コマンドを願います。

プログラム実行コマンド

```
node HeapDisplay.js
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 引数が正の整数の時、配列を`昇順に整列`し出力する。

## テスト実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

テスト実行コマンド

```
npm run test
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```

## 構文チェックと自動コード整形

git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。

# マージ

・ 配列は正の整数とする。配列は`[1,3,8,2,5,0,4,9,7,6]`をデフォルトとする。

・ 再帰的に配列を二分割していき配列数が1になるまで分割を繰り返す。

・ 分割した配列を昇順に並び替えながら合併していく。

・ 配列を`昇順に整列`し出力する。

## プログラム仕様

## プログラム実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

srcディレクトリ内にてプログラム実行コマンドを願います。

プログラム実行コマンド

```
node MergeDisplay.js
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 引数が正の整数の時、配列を`昇順に整列`し出力する。

## テスト実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

テスト実行コマンド

```
npm run test
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```

## 構文チェックと自動コード整形

git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。

# クイック

## プログラム仕様

・ 配列は正の整数とする。配列は`[1,3,8,2,5,0,4,9,7,6]`をデフォルトとする。

・ 1) 配列の中央の値をpivotとする。

・ 2) pivotを基準に左側と右側のグループを比較し、pivotより左側をpivotより小さい値に交換していく。

・ 2) pivotより右側をpivotより大きい値に交換していく。

・ 3) 交換できなくなったらグループ分けを終了する。

・ 4) 右側と左側のグループで再びpivotを設定し再帰的に配列数が1つになるまで1から繰り返す。

・ 配列を`昇順に整列`し出力する。

## プログラム実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

srcディレクトリ内にてプログラム実行コマンドを願います。

プログラム実行コマンド

```
node QuickDisplay.js
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 引数が正の整数の時、配列を`昇順に整列`し出力する。

## テスト実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

テスト実行コマンド

```
npm run test
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```

## 構文チェックと自動コード整形

git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。

# 選択

・ 配列は正の整数とする。配列は`[1,3,8,2,5,0,4,9,7,6]`をデフォルトとする。

・ 1) 配列の先頭とそれ以外の値を比較し一番小さい値を先頭に格納する。

・ 2) ソート済みの値を除外し、全ての値がソートされるまで1から繰り返す。

・ 配列を`昇順に整列`し出力する。

## プログラム仕様

## プログラム実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

srcディレクトリ内にてプログラム実行コマンドを願います。

プログラム実行コマンド

```
node SelectionDisplay.js
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 引数が正の整数の時、配列を`昇順に整列`し出力する。

## テスト実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

テスト実行コマンド

```
npm run test
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```

## 構文チェックと自動コード整形

git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。

# 挿入

## プログラム仕様

・ 配列は正の整数とする。配列は`[1,3,8,2,5,0,4,9,7,6]`をデフォルトとする。

・ 1) 配列の先頭をソート済みとする。

・ 2) ソート済みとソート済みの右隣の値を比較し、右隣の値が大きいなら右隣もソート済みとする。

・ 2) 右隣の値が小さいならソート済みと右隣を入れ替えていく。

・ 3) 全ての値がソートされるまで1から繰り返す。

・ 配列を`昇順に整列`し出力する。

## プログラム実行

```
npm install 
```

srcディレクトリ内にてプログラム実行コマンドを願います。

プログラム実行コマンド

```
node InsertionDisplay.js
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 引数が正の整数の時、配列を`昇順に整列`し出力する。

## テスト実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

テスト実行コマンド

```
npm run test
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```

## 構文チェックと自動コード整形

git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。

# sortメソッド

## プログラム仕様

・ 配列は正の整数とする。配列は`[1,3,8,2,5,0,4,9,7,6]`をデフォルトとする。

・ 配列を`昇順に整列`し出力する。

## プログラム実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

srcディレクトリ内にてプログラム実行コマンドを願います。

プログラム実行コマンド

```
node SortFunctionDisplay.js
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
``` 


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 引数が正の整数の時、配列を`昇順に整列`し出力する。

## テスト実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

テスト実行コマンド

```
npm run test
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```

## 構文チェックと自動コード整形

git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。

