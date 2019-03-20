// 「分割代入」
// jsの構文の一つであり、配列もしくはオブジェクトからデータを取り出して個々の変数に分解することが出来る。

let a, b;
[a, b] = [1, 5];

console.log(a); //1
console.log(b); //5


let x, y, other;
[x, y, ...other] = [1, 2, 3, 4, 5];
console.log(x); //1
console.log(y); //2
console.log(other); //[3, 4, 5]
