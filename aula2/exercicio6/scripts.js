$(document).ready(function() {

  $("#aumentarLetra").click(function() {
    var tamanho = $("#paragrafo").css("font-size");

    tamanho = parseInt(tamanho);

    if(tamanho >= 70)
      return;
    
    tamanho = tamanho + 2;

    $("#paragrafo").css({
      "font-size": tamanho
    });

  });

  $("#diminuirLetra").click(function() {
    var tamanho = $("#paragrafo").css("font-size");

    tamanho = parseInt(tamanho);

    if(tamanho <= 8)
      return;
    
    tamanho = tamanho - 2;

    $("#paragrafo").css({
      "font-size": tamanho
    });

  });
});