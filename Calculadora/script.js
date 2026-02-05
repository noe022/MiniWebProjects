const pantalla = document.querySelector("#pantalla");
const botones = document.querySelectorAll(".boton");

// Extrae el valor html de un boton, texto, etc...

botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    // Guarda el valor del boton apretado
    const botonApretado = boton.textContent;
    if (boton.id === 'c') {
      pantalla.textContent = '0';
      return;
    }

    if(boton.id === 'borrar') {
      if (pantalla.textContent.length === 1 || pantalla.textContent === 'ERROR') {
        pantalla.textContent = '0';
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if(boton.id === 'igual') {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = 'ERROR';
      }
      return;
    }

    if (pantalla.textContent === '0' || pantalla.textContent === 'ERROR') {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
      // No hago return porque estoy cargando los números
    }
  });
})

