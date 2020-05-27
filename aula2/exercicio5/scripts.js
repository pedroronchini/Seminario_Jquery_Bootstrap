$(document).ready(async function () {
  while(true) {
      await sleep(1000);
      console.log("loop");

      $("#retanguloVermelho").toggleClass(["vermelho", "azul"]);

      $("#retanguloAmarelo").toggleClass(["amarelo", "verde"]);
  }
});

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}