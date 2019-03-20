(function(){ //即時関数(関数定義と関数の呼び出しがまとめて実行できる)
	'use strict'; //strictモード(errorチェックが厳密に行われる)

	// 入力可能文字数の最大値
	const limit = 10;

	// 表示の初期値を設定
	document.getElementById('word_cnt').innerHTML = '10';

	// id: input_textのエレメントを取得
	var e = document.getElementById('input_text');

	// keyupイベントの発生時に、入力文字数を取得
	e.addEventListener('keyup', function(){
		//入力を受け取る
		var str = e.value;

		//正規表現で改行文字を空文字列に置き換える　
		str = str.replace(/\r?\n/g, '');

		//id: word_cntのエレメントを取得
		var word_cnt = document.getElementById('word_cnt');
		// DOMの書き換え
		var n = limit - str.length;
		word_cnt.innerHTML = n;

		// 見た目に触るためには変数に代入してからだと出来ない　
		// var color = document.getElementById('word_cnt_wrap').style.color;
		if(n < 0){
			document.getElementById('word_cnt_wrap').style.color = 'red';
		} else {
			document.getElementById('word_cnt_wrap').style.color = 'black';
		}
	});
})();
