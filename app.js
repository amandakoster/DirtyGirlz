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
