$(document).ready(function() {
  var $nav = $('#main-nav2'); //Caching element
  // hide .navbar first - you can also do this in css .nav{display:none;}
  $nav.hide();

  // fade in .navbar
  $(function() {
    $(window).scroll(function() {
      // set distance user needs to scroll before we start fadeIn
      if ($(this).scrollTop() > 50) {
        //For dynamic effect use $nav.height() instead of '100'
        $nav.fadeIn();
      } else {
        $nav.fadeOut();
      }
    });
  });
});

var scroll = new SmoothScroll('a[href*="#"]');
