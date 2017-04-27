$(document).ready(function() {

    $("#calculate").click(function() {

   if ($("#input").val() != '' && $("#input").val() != undefined) {

       $("#result").html("total value is::" + parseInt($("#input").val()) * 30);

        }

        else
        {
            $("#result").html("Please enter some value");
        }
    });
    {

   if ($("#input").val() != '' && $("#input").val() != undefined) {

       $("#result").html("total value is::" + parseInt($("#input").val()) * 50);

        }

        else
        {
            $("#result").html("Please enter some value");
        }
    });
});
