var firstFile = document.getElementById('firstFile');
var secondFile = document.getElementById('secondFile');
var thirdFile = document.getElementById('thirdFile');
var fourthFile = document.getElementById('fourthFile');

firstFile.addEventListener('click',function(){

firstClick();


});

function firstClick(){
	document.getElementById("firstFile_des").style.display="block";
	document.getElementById('firstFile').style.display="none";
	var fileText = document.getElementById('firstFile_des');
	var vm = this;	
	setTimeout(function(){
		fileText.style.display = 'none';
		document.body.style.backgroundImage = "url('img/fileLoad.png')";
		secondFile.style.display = 'block';
		thirdFile.style.display = 'block';
		
		fourthFile.style.display = 'block';
	},1100);

}

secondFile.addEventListener('click',function(){

	document.getElementById("secondFile_des").style.display = 'inline-block';
	window.open('http://www.minimalixt.com/store/c1/Featured_Products.html','_parent');

});

thirdFile.addEventListener('click',function(){

	document.getElementById("thirdFile_des").style.display = 'inline-block';
	window.open('VueList/index.html','_parent');
});
fourthFile.addEventListener('click',function(){

	document.getElementById("fourthFile_des").style.display = 'inline-block';
	window.open('brand.png','_parent');
});



