$(document).ready(function() {
  $("#set").click(function() {

    var width = $("#width").val();
    var height = $("#height").val();


    $("#frostpunck").attr("width", width);
    $("#frostpunck").attr("height", height);
  });
});