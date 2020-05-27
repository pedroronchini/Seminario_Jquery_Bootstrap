$(document).ready(function() {

  $("#enviado").hide();

  $("#botao").click(function() {
    var nome = $("#nome").val();
    var idade = $("#idade").val();
    var altura = $("#altura").val();
    var email = $("#email").val();

    $("#field_nome").removeClass("erro");
    $("#field_idade").removeClass("erro");
    $("#field_altura").removeClass("erro");
    $("#field_email").removeClass("erro");

    if(!nome) {
      $("#field_nome").addClass("erro");
    }

    if(!idade) {
      $("#field_idade").addClass("erro");
    }

    if(!altura) {
      $("#field_altura").addClass("erro");
    }

    if(!email) {
      $("#field_email").addClass("erro");
    }

    if(nome && idade && altura && email){
      $("#enviado").show();
    }

  });

});