// JavaScript Document

 /*
jQuery(document).ready( 
    function() {
        //画像変更
        jQuery('table').each(
            function(){
                var txt = jQuery(this).html();
                jQuery(this).html(txt.replace(/fitin=128:128/g,"fitin=350:350"));
            }
        );
      
})


*/

var imgSize = 250;
  
var j = jQuery.noConflict();
j( document ).ready(function(){
  j( 'div#risFil img[src$="fitin=128:128"]' ).each(function(){
    var thumImg = j(this);
    var replaceSrc = thumImg.attr( 'src' ).replace( '?fitin=128:128' , '?fitin=' + imgSize + ':' + imgSize );
    thumImg.attr( 'src' , replaceSrc );
  });
 
var styleTag = '';
styleTag += '<style type="text/css">';
styleTag += '#risFil .categoryWindowImg{width:' + imgSize + 'px; height: ' + imgSize + 'px;}';
styleTag += '</style>';
j('head').append(styleTag);
});

