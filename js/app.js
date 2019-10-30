'use strict';

// Needed to retrieve raw images from json file
$(document).ready(function () {
  $.get('data/page-1.json')
    .then(data => {
      data.animals.forEach(image => {
        $('photo-template').append(`<img>${image.image_url}</img>`);

      });

    });
});
