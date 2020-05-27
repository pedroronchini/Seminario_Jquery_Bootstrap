$(document).ready(function() {


  $("#topo").click(function() {
    const todo = $("#tarefa").val();

    if(!todo)
      return; //clausula guarda
    
    $("#lista").prepend(`<li>${todo}</li>`);

    $("#tarefa").val("");
  });

  $("#fim").click(function() {
    const todo = $("#tarefa").val();

    if(!todo)
      return; // Clausula guarda

    $("#lista").append(`<li>${todo}</li>`);

    $("#tarefa").val("");
  });
});