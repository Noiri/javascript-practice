//関数リテラルよりもシンプルな記法が実現できる。
//arrow演算子で、引数と、関数の処理部分をつなぐだけで良い。
let f_arrow = (h, w) => {return h * w};
console.log(f_arrow(3, 4));

//

// 引数が一つだけのときは引数部分の括弧が省略可能
let f = x => {
	console.log(x*x);
}
f(100);

// 引数がない場合は、引数の括弧が省略出来ない
let f_none = () => {
	console.log("YEHA");
}
f_none();


// 従来の関数リテラルを利用した方法
let func_old = function(x, y) {
	return x * y;
}
console.log(func_old(5, 3));
