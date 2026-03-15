const pantalla = document.querySelector("#pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(function(boton) {
  // Que se interactue por click
  boton.addEventListener('click', function() {
    if (boton.id === "decrease") {
      if (pantalla.textContent === '0') {
        return '0';
      }
      pantalla.textContent = Number(pantalla.textContent) - 1;
      return;
    }
    if (boton.id === "increase") {
      pantalla.textContent = Number(pantalla.textContent) + 1;
      return;
    }
    if (boton.id === "reset") {
      pantalla.textContent = "0";
    }
  });
})