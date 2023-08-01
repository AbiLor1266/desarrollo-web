const titulo = document.querySelector("h1");

function saludar() {
  console.log("Has hecho click en el titulo");
}

titulo.onclick = saludar;

// Finalmente la mejor opcion para escuchar eventos
const logo = document.querySelector("#logo");

const salu2 = function (evento) {
  console.log(evento);
  console.log("Has hecho click en el logo");
};

logo.addEventListener("click", salu2);

// agregar un nuevo estudiante a la lista
// seleccionar el btn y el input
const btnEstudiante = document.querySelector("#btnEstudiante");
const inputEstudiante = document.querySelector("#estudiante");

function agregarEstudiante() {
  //validar que el input no este vacio
  if (inputEstudiante.value.length === 0) {
    alert("escribe algo!");
    return;
  }

  //accedo a la ul
  const ul = document.querySelector("ul");
  //creo un nuevo elemento
  const lista = document.createElement("li");
  //texto
  lista.textContent = inputEstudiante.value;
  //agregarlo
  ul.appendChild(lista);
}

btnEstudiante.addEventListener("click", agregarEstudiante);
