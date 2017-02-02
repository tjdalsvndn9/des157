var nameResult = document.getElementById('nameResult');
var emailResult = document.getElementById('emailResult');
var ageResult = document.getElementById('ageResult');
var genderResult = document.getElementById('genderResult');
var professionResult = document.getElementById('professionResult');
var songResult = document.getElementById('songResult');
var colorResult = document.getElementById('colorResult');
var celebrityResult = document.getElementById('celebrityResult');

function submitForm(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var age = document.getElementById('age').value;
  var gender = document.getElementById('gender').value;
  var profession = document.getElementById('profession').value;
  var song = document.getElementById('song').value;
  var color = document.getElementById('color').value;
  var celebrity = document.getElementById('celebrity').value;
  var input = document.querySelectorAll('input');
  nameResult.innerHTML = name;
  emailResult.innerHTML = email;
  ageResult.innerHTML = age;
  genderResult.innerHTML = gender;
  professionResult.innerHTML = profession;
  songResult.innerHTML = song;
  colorResult.innerHTML = color;
  celebrityResult.innerHTML = celebrity;
  document.getElementById('result').style.display = 'block';
}

function reset(event) {
  event.preventDefault();
  var name = document.getElementById('name').value = "";
  var email = document.getElementById('email').value = "";
  var age = document.getElementById('age').value = "";
  var gender = document.getElementById('gender').value = "";
  var profession = document.getElementById('profession').value = "";
  var song = document.getElementById('song').value = "";
  var color = document.getElementById('color').value = "";
  var celebrity = document.getElementById('celebrity').value = "";
  document.getElementById('result').style.display = 'none';
}

function muteThis(event) {
  event.preventDefault();
  var video = document.querySelector('.video');
  video.muted = true;
}
var vm = this;
var header = document.getElementById('header');

function changeColor() {
  setTimeout('changeColor()', 3000)
  var color = Math.floor(Math.random() * 9 + 1);
  var colorChoice = 'F08080';
  if (color == 0) {
    colorChoice = 'F08080';
  }
  if (color == 1) {
    colorChoice = 'FFB6C1';
  }
  if (color == 2) {
    colorChoice = '2E8B57';
  }
  if (color == 3) {
    colorChoice = 'BC8F8F';
  }
  if (color == 4) {
    colorChoice = 'FF69B4';
  }
  if (color == 5) {
    colorChoice = '7B68EE';
  }
  if (color == 6) {
    colorChoice = '6495ED';
  }
  if (color == 7) {
    colorChoice = '20B2AA';
  }
  if (color == 8) {
    colorChoice = 'DEB887';
  }
  if (color == 9) {
    colorChoice = '4682B4';
  }
  document.getElementById("container").style.backgroundColor = "#" + colorChoice;
  document.getElementById("container").style.transition = "background-color 0.5s ease";
}

