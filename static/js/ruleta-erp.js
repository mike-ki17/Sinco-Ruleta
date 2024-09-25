let ruleta = document.getElementById("btn-rule-ERP");

ruleta.addEventListener("click", () => {
  let rand = Math.random() * 360;
  let girosExtras = Math.floor(Math.random() * 6) + 5; // Generar giros adicionales (5-10 vueltas)
  let rotacionFinal = rand + girosExtras * 360; // Añadir giros completos
  calcular(rotacionFinal);
  var sonido = document.querySelector("#audio");
  sonido.setAttribute("src", "../static/sonido/ruleta.mp3");
});

let itemShow = document.getElementById("itemShow");
let btnShowItem = document.getElementById("btn-show-item");

btnShowItem.addEventListener("click", cerrar);
function cerrar() {
  itemShow.style.display = "none";
}

function premio(premios) {
  if(premios !== 'Vuelve a intentarlo una vez más'){
    setTimeout(() => {
      itemShow.style.display = "flex";
    }, 3000);
    let premioSinco = document.getElementById("premio").value = premios;
  }
  
}


function calcular(rand) {
  let valor = rand % 360;
  ruleta.style.transform = "rotate(" + rand + "deg)";
  setTimeout(() => {
    switch (true) {
      case valor > 0 && valor <= 15:
        premio("Vuelve a intentarlo una vez más");
        break;
      case valor > 15 && valor <= 45:
        premio("Nueva agenda SINCO ERP");
        break;
      case valor > 45 && valor <= 75:
        premio("5 usuarios adicionales sin costo por cada año");
        break;
      case valor > 75 && valor <= 105:
        premio("15% de descuento en arrendamiento de SRM");
        break;
      case valor > 105 && valor <= 135:
        premio("20% de descuento en implementacio de modulos");
        break;
      case valor > 135 && valor <= 165:
        premio("2 horas de consultorias gratis ");
        break;
      case valor > 165 && valor <= 195:
        premio("3 horas de consultorias gratis");
        break;
      case valor > 195 && valor <= 225:
        premio("30% de descuento en implementacion de modulos nuevos (no acumulable con otras ofertas)");
        break;
      case valor > 225 && valor <= 255:
        premio("20% de descuento en arrendamiento de SRM");
        break;
      case valor > 255 && valor <= 285:
        premio("20 GB adicionales para SGD");
        break;
      case valor > 285 && valor <= 315:
        premio("25% de descuento en el valor de la hora de capacitaciones con consultor");
        break;
      case valor > 315 && valor <= 345:
        premio("Dos sociedades adicionales sin costo de licenciamiento");
        break;
      case valor > 345 && valor <= 360:
        premio("Vuelve a intentarlo una vez más");
        break;
    }
  }, 5000);
}
