const btn_active = document.getElementById("btn");
const ruleta = document.querySelector("#ruleta");
let item = document.getElementById("item");

btn_active.addEventListener("click", girar);
giros = 0;
function girar() {
  let rand = Math.random() * 360; // Generar un valor aleatorio entre 0 y 360 grados
  let girosExtras = Math.floor(Math.random() * 5) + 5; // Generar giros adicionales (5-10 vueltas)
  let rotacionFinal = rand + girosExtras * 360; // Añadir giros completos
  calcular(rotacionFinal);
  giros++;
  var sonido = document.querySelector("#audio");
  sonido.setAttribute("src", "sonido/ruleta.mp3");
}
let itemShow = document.getElementById("itemShow");
let btnShowItem = document.getElementById("btn-show-item");

btnShowItem.addEventListener("click", cerrar);
function cerrar() {
  itemShow.style.display = "none";
}

function premio(premios) {
  item.innerHTML = premios;
  itemShow.style.display = "flex";
}

function calcular(rand) {
  let valor = rand % 360;
  ruleta.style.transform = "rotate(" + rand + "deg)";
  console.log(valor, rand);

  setTimeout(() => {
    switch (true) {
      case valor > 0 && valor <= 15:
        premio("10");
        break;
      case valor > 15 && valor <= 45:
        premio("5");
        break;
      case valor > 45 && valor <= 75:
        premio("1");
        break;
      case valor > 75 && valor <= 105:
        premio("100");
        break;
      case valor > 105 && valor <= 135:
        premio("15");
        break;
      case valor > 135 && valor <= 165:
        premio("JACKPOT");
        break;
      case valor > 165 && valor <= 195:
        premio("20");
        break;
      case valor > 195 && valor <= 225:
        premio("5");
        break;
      case valor > 225 && valor <= 255:
        premio("1");
        break;
      case valor > 255 && valor <= 285:
        premio("50");
        break;
      case valor > 285 && valor <= 315:
        premio("2");
        break;
      case valor > 315 && valor <= 345:
        premio("ZERO");
        break;
      case valor > 345 && valor <= 360:
        premio("10");
        break;
    }
  }, 5000);
}


