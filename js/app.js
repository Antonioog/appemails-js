document.addEventListener("DOMContentLoaded", function () {
  //Creamos el objeto principal...
  const email = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  //Seleccionamos los elementos de la interfaz...
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');

  //Asignamos los EventListeners...
  inputEmail.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);

  //Creamos una funcion de validar para simplificar codigo de validacion...
  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }
    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es valido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }
    limpiarAlerta(e.target.parentElement);
    //Asignar los valores al objeto...
    email[e.target.name] = e.target.value.trim().toLowerCase();
    //Comprobar el objeto de email...
    comprobarEmail();
  }
  //Creamos uns funcion para que muestre la alerta en cada error...
  function mostrarAlerta(mensaje, referencia) {
    //Comprueba si ya existe una alerta..
    limpiarAlerta(referencia);
    //Creamos el HTML de la alerta...
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    //Inyectamos el mensaje en el formulario...
    referencia.appendChild(error);
  }
  //Funcion para limpiar la alerta....
  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  //Validar Email...
  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  //Funcion de comprobar email...
  function comprobarEmail() {
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
    } else {
      btnSubmit.classList.remove("opacity-50");
      btnSubmit.disabled = false;
    }
    console.log("enviando");
  }
});
