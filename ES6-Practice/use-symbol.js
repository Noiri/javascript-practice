// 「シンボルとは」
// シンボル(モノの名前)を作成するための型のこと
// シンボルは、文字列に似ているが文字列ではない

// fooという名前のシンボルを2つ作成
let symbol1 = Symbol('foo');
let symbol2 = Symbol('foo');

// 変数の型を出力　
console.log(typeof symbol1); //symbol
console.log(typeof symbol2); //symbol

// toStringしてみる
console.log(symbol1.toString()); //Symbol(foo)
console.log(symbol2.toString()); //Symbol(foo)

// ===は、型も含めて厳密に等しければtrueを返す
console.log(symbol1 === symbol2); //false
