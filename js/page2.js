'use strict';
var allCreatures = [];

function Creature (url, title, description, keyword, horns){
  this.url = url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  allCreatures.push(this);
}


$(document).ready(function () {
  $.get('data/page-2.json')
    .then(data => {
      for (var i = 0; i < data.animals.length; i++) {
        new Creature(data.animals[i].image_url, data.animals[i].title, data.animals[i].description, data.animals[i].keyword, data.animals[i].horns);
      }
      renderPictures();
    });
});

function renderPictures(){
  allCreatures.forEach(image => {
    $('#photo-template').append(`<img src=${image.url} class= ${image.keyword}></img>`);

  });
}


$('select').change(function() {
  $('img').hide();
  let val = $(this).val();
  if(val === 'default') {$('img').show();}
  else { $('.' + val).show(); }
});

var userForm = document.getElementById('sortHorns');
userForm.addEventListener('submit', sortByHorns);
var clear = document.getElementById('photo-template');
function sortByHorns(event) {
  event.preventDefault();
  allCreatures.sort((a,b) => a.horns - b.horns);
  clear.innerHTML = '';
  renderPictures();
}

var userFormTwo = document.getElementById('sortTitle');
userFormTwo.addEventListener('submit', sortByTitle);
var clearTwo = document.getElementById('photo-template');

function sortByTitle(event) {
  event.preventDefault();
  allCreatures.sort( (a,b) => {
    if (a.title < b.title) {return -1}
  });
  console.log('SORT TWO', allCreatures);
  clearTwo.innerHTML = '';
  renderPictures();
}
