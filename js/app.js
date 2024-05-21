document.addEventListener("DOMContentLoaded", function () {
  //Sleccionamos los elementos de la interfaz...
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");

  //Agregamos los addevenlisteners...
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta();
    } else {
      console.log("El campo tiene contenido");
    }

    function mostrarAlerta() {
      //Generar alerta en HTML...
      const error = document.createElement("P");
      error.textContent = "Hubo un error";
      //Agregamos estilos al parrafo que creamos de la alerta...
      error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

      //Inyectar el error al formulario...
      formulario.appendChild(error);
    }
  }
});
