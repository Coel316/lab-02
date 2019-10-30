'use strict';

// Needed to retrieve raw images from json file
$(document).ready(function () {
  $.get('data/page-1.json')
    .then(data => {
      data.animals.forEach(image => {
        $('#photo-template').append(`<img src=${image.image_url} id=${image.keyword}></img>`);

      });

    });
});


$('select').change(function() {
  $('img').hide();
  $('#' + $(this).val()).show();
});




