(function(){
	'use strict';
	var images = ['images/image1.jpg', 'images/image2.jpg',
	 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];

	 var current = 0;
	 var prev = document.getElementById('prev');
	 var next = document.getElementById('next');
	 var page = document.getElementById('page');
	 var mainImage = document.getElementById('main_image');

	 var thumbs = document.querySelectorAll('.thumbnail_image');
	 for(var i=0; i<thumbs.length; i++){
		 thumbs[i].addEventListener('click', function(){
			mainImage.src = 'images/' + this.dataset.image; //imgタグのソース属性を書き換える
			console.log(this.dataset.image);
			current = this.dataset.index;
		 });
	 }
})();
