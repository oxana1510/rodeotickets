//@koala-prepend "language.js" 
$(document).ready(function() { 
	  pull = $('#pull');
 menu = $('.menu');

  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
    $(this).toggleClass("cross");
  });
});

$(window).resize(function(){

  w = $(window).width();
  if(w > 992) {
    menu.attr('style', 'none');
    pull.removeClass("cross");
  
  };

});