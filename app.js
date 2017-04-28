$(document).ready(function() {

  $('#calculate').click(function() {

    if ($('#input').val() != '' && $('#input').val() != null) {

      $('#result').html('total value is::' + parseInt($('#input').val()) * 30);

    }

    else
        {
      $('#result').html('Please enter some value');
    }
  });
});
