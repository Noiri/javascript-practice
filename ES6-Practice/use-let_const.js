// varによる宣言では、再代入、再宣言が可能
// 宣言
var a = 10;
console.log(a);
// 再代入
a = 11;
console.log(a);
// 再宣言
var a = "Str";
console.log(a);


// letによる宣言では、再代入は可能だが、再宣言が出来ない
// 宣言
let b = 10;
console.log(b);
// 再代入
b = 11;
console.log(b);
// 再宣言
// let b = "str";
// console.log(b);


// constによる宣言では、再代入も、再宣言も出来ない(c++の定数と同じ仕様)
const c = 10;
console.log(c);
