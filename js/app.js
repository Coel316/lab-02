'use strict';

// require('handlebars');

// var source = document.getElementById('photo-template').innerHTML;
// var template = Handlebars.compile(source);

var allCreatures = [];

function Creature(url, title, description, keyword, horns) {
  this.url = url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  allCreatures.push(this);
}

$(document).ready(function () {
  $.get('data/page-1.json')
    .then(data => {
      for (var i = 0; i < data.animals.length; i++) {
        new Creature(data.animals[i].image_url, data.animals[i].title, data.animals[i].description, data.animals[i].keyword, data.animals[i].horns);
      }
      renderPictures();
    });
});

function renderPictures() {
  allCreatures.forEach(image => {
    $('#photo-template').append(`<img src=${image.url} class= ${image.keyword}></img>`);
    // var context = { url: image.url, keyword: image.keyword}
    // var html = template(context);

  });
}

$('select').change(function () {
  $('img').hide();
  let val = $(this).val();
  if (val === 'default') { $('img').show(); }
  else { $('.' + val).show(); }
});
