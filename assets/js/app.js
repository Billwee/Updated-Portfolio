//Sticky nav bar that appears when scrolling
// Couldn't get it to work properly with media queries
// $(document).ready(function() {
//   var $nav = $('#nav-box');

//   $(function() {
//     $(window).scroll(function() {
//       // set distance user needs to scroll before we start fadeIn
//       if ($(this).scrollTop() > 560) {
//         //For dynamic effect use $nav.height() instead of '100'
//         $nav.css('position', 'fixed');
//         $nav.css(
//           'background',
//           "url('../img/back2.jpg') no-repeat center right/cover"
//         );
//       } else {
//         $nav.css('position', 'relative');
//       }
//     });
//   });
// });

//Smooth Scrolling
var scroll = new SmoothScroll('a[href*="#"]');
