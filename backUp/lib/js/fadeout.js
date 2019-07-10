var fadeTime = 800,
    fadeSelector = 'fadeout';
$(function() {
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault();
    url = $(this).attr('href');
    if (url !== '') {
      $('body').addClass(fadeSelector);
      setTimeout(function(){
        window.location = url;
      }, fadeTime);
    }
    return false;
  });
});
$(window).on('load', function(){
  $('body').removeClass(fadeSelector);
});