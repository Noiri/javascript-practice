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
			displayPageNumber();
		 });
	 }

	 function displayPageNumber(){
		 page.textContent = (Number(current) + 1) + '/' + images.length;
	 }

	 displayPageNumber();

	 //prev button
	 prev.addEventListener('click', function(){
		 current--;
		 if(current < 0){
			 current = images.length - 1;
		 }
		 mainImage.src = images[current];
		 displayPageNumber();
	 });

	 // next button
	 next.addEventListener('click', function(){
		 current++;
		 if(current >= images.length){
			 current = 0;
		 }
		 mainImage.src = images[current];
		 displayPageNumber();
	 });
})();
