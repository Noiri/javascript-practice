(function(){
	'use strict';
	var images = ['images/image1.jpg', 'images/image2.jpg',
	 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];

	 var INTERVAL = 5000;

	 var current = 0;
	 var prev = document.getElementById('prev');
	 var next = document.getElementById('next');
	 var page = document.getElementById('page');
	 var mainImage = document.getElementById('main_image');
	 var thumbnails = document.getElementById('thumbnails');
	 var timer;

	 // var thumbs = document.querySelectorAll('.thumbnail_image');
	 // for(var i=0; i<thumbs.length; i++){
		//  thumbs[i].addEventListener('click', function(){
		// 	mainImage.src = 'images/' + this.dataset.image; //imgタグのソース属性を書き換える
		// 	console.log(this.dataset.image);
		// 	current = this.dataset.index;
		// 	displayPageNumber();
		//  });
	 // }

	 // サムネイルを動的に生成して表示
	 createThumbnails();
	 function createThumbnails() {
		 var li;
		 var img;
		 for(var i=0; i<images.length; i++) {
			 li = document.createElement('li');
			 //何枚目の画像化を保持
			 li.dataset.index = i;
			 li.addEventListener('click', function(){
				 thumbnails.children[current].className = '';
				 //mainImageを変更
				 mainImage.src = this.children[0].src;
				 current = this.dataset.index;
				 //枠をつけるためにクラスを追加
				 this.className = 'current_image';
				 clearTimeout(timer);
				 displayPageNumber();
				 playSlidShow();
			 });

			 if(i == 0){
				 li.className = 'current_image';
			 } else {
				 li.className = 'color'
			 }

			img = document.createElement('img');
			img.src = images[i];
			img.className = 'thumbnail_image';
			li.appendChild(img);
			thumbnails.appendChild(li);
		 }
	 }

	 playSlidShow();

	 //自動スライドショー
	 function playSlidShow() {
		 timer = setTimeout(function(){
			 next.click();
		 }, INTERVAL);
	 }


	 function displayPageNumber(){
		 page.textContent = (Number(current) + 1) + '/' + images.length;
	 }

	 displayPageNumber();

	 //prev button
	 prev.addEventListener('click', function(){
		 clearTimeout(timer);
		 thumbnails.children[current].className = '';
		 current--;
		 if(current < 0){
			 current = images.length - 1;
		 }
		 mainImage.src = images[current];
		 //下のプレビューに白枠をつける
		 thumbnails.children[current].className = 'current_image';
		 displayPageNumber();
		 playSlidShow();
	 });

	 // next button
	 next.addEventListener('click', function(){
		 clearTimeout(timer);
		 thumbnails.children[current].className = '';
		 current++;
		 if(current >= images.length){
			 current = 0;
		 }
		 mainImage.src = images[current];
		 //下のプレビューに白枠をつける
		 thumbnails.children[current].className = 'current_image';
		 displayPageNumber();
		 playSlidShow();
	 });
})();
