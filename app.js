'use strict';
var gardening = 0;
var yardwork = 0;
var landscaping = 0;
var total = gardening + yardwork + landscaping;

$('#g-25').on('change',function() {
  gardening = $(this).val() * 25;
  total = gardening + yardwork + landscaping;
  console.log(total);
  $('#total').text(total);
});

$('#y-45').on('change',function() {
  yardwork = $(this).val() * 45;
  total = gardening + yardwork + landscaping;
  console.log(total);
  $('#total').text(total);
});

$('#l-65').on('change',function() {
  landscaping = $(this).val() * 65;
  total = gardening + yardwork + landscaping;
  console.log(total);
  $('#total').text(total);
});

$('#g-25').keyup(function() {
  gardening = $(this).val() * 25;
  total = gardening + yardwork + landscaping;
  console.log(total);
  $('#total').text(total);
});

$('#y-45').keyup(function() {
  yardwork = $(this).val() * 45;
  total = gardening + yardwork + landscaping;
  console.log(total);
  $('#total').text(total);
});

$('#l-65').keyup(function() {
  landscaping = $(this).val() * 65;
  total = gardening + yardwork + landscaping;
  console.log(total);
  $('#total').text(total);
});

$(document).ready(function(){
  var d = new Date();
  var n = d.getHours();
  if (n > 19 || n < 6)
  // If time is after 7PM or before 6AM, apply night theme to ‘body’
    document.body.className = 'night';
  else if (n > 16 && n < 19)
  // If time is between 4PM – 7PM sunset theme to ‘body’
    document.body.className = 'sunset';
  else
  // Else use ‘day’ theme
  document.body.className = 'day';
});

// // TOD stylesheet jQuery:
// $(document).ready(function() {
//
//   function getStylesheet() {
//     var currentTime = new Date().getHours();
//     if (0 <= currentTime && currentTime < 5) {
//       document.write('<link rel=\'stylesheet\' href=\'night.css\' type=\'text/css\'>');
//       console.log();
//     }
//
//     if (5 <= currentTime && currentTime < 21) {
//       document.write('<link rel=\'stylesheet\' href=\'day.css\' type=\'text/css\'>');
//
//     }
//     if (22 <= currentTime && currentTime <= 24) {
//       document.write('<link rel=\'stylesheet\' href=\'night.css\' type=\'text/css\'>');
//     }
//   }
//   getStylesheet();
//
// });
//
// // -->
// </script>

// <noscript><link href="main.css" rel="stylesheet"></noscript>

// http://codepen.io/jamesbarnett/pen/kdDBL
