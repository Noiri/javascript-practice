//function命令による定義
function CalucrateArea(h, w) {
	return h  * w;
}

//関数リテラルによる関数の定義(jsにおいては関数もリテラルの一種なので変数に代入できる)
//無名関数の代入
var getArea = function(h, w) {
	return h * w;
};


//functionコンストラクタによる関数の定義
//Functionじゃないとバグるので注意する
var getRectangle = new Function('h', 'w', 'return h * w');
