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

// TOD stylesheet
// <script>
// <!--
// function getStylesheet() {
//       var currentTime = new Date().getHours();
//       if (0 <= currentTime&&currentTime < 5) {
//        document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
//       }
//       if (5 <= currentTime&&currentTime < 11) {
//        document.write("<link rel='stylesheet' href='morning.css' type='text/css'>");
//       }
//       if (11 <= currentTime&&currentTime < 16) {
//        document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
//       }
//       if (16 <= currentTime&&currentTime < 22) {
//        document.write("<link rel='stylesheet' href='evening.css' type='text/css'>");
//       }
//       if (22 <= currentTime&&currentTime <= 24) {
//        document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
//       }
// }
//
// getStylesheet();
// -->
// </script>
//
// <noscript><link href="main.css" rel="stylesheet"></noscript>

// http://codepen.io/jamesbarnett/pen/kdDBL
