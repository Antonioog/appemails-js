document.addEventListener("DOMContentLoaded", function () {
  //Seleccionamos los elementos de la interfaz...
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");

  //Asignamos los EventListeners...
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  //Creamos una funcion de validar para simplificar codigo de validacion...
  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
    } else {
      console.log("Campo con informacion");
    }
  }
  //Creamos uns funcion para que muestre la alerta en cada error...
  function mostrarAlerta(mensaje, referencia) {
    //Comprueba si ya existe una alerta..
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
    //Creamos el HTML de la alerta...
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    //Inyectamos el mensaje en el formulario...
    referencia.appendChild(error);
  }
});
