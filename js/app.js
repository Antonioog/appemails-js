document.addEventListener("DOMContentLoaded", function () {
  //Sleccionamos los elementos de la interfaz...
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");

  //Agregamos los addevenlisteners...
  inputEmail.addEventListener("blur", function () {
    console.log("Sali del input Email");
  });

  inputAsunto.addEventListener("blur", function () {
    console.log("Sali del input Asunto");
  });

  inputMensaje.addEventListener("blur", function () {
    console.log("Sali del input Mensaje");
  });
});
