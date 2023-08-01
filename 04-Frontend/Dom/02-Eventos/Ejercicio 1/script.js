// Obtengo el elemento padre que es el "div"
const div = document.querySelector("div");
// Creo un nuevo elemento (nodo), osea el h1
const h1 = document.createElement("h1");
// Cambiar el texto al nodo
h1.innerText = "los gatos";
h1.className = "titulo";
//Agrego el nuevo elemento
div.appendChild(h1);

// Obtengo el elemento padre que es el "div"
const div1 = document.querySelector("div");
// Creo un nuevo elemento (nodo), osea la etiqueta "p"
const p = document.createElement("p");
// Cambiar el texto al nodo
p.innerText =
  "Los gatos son animales domésticos que se caracterizan por su elegancia, agilidad y carácter independiente. Son mascotas muy populares en todo el mundo.";
p.className = "descripcion";
//Agrego el nuevo elemento
div.appendChild(p);

// Obtengo el elemento padre que es el "div"
const div2 = document.querySelector("div");
// Creo un nuevo elemento (nodo), osea la etiqueta "img"
const img = document.createElement("img");
img.src = "https://http.cat/images/200.jpg";
img.alt = "Gato";
img.style.width = "200px"; // Establece el ancho del elemento img en 100px
img.className = "imagen-gato";
// Agrego el nuevo elemento
div.appendChild(img);

// Obtengo el elemento padre que es el "div"
const div3 = document.querySelector("div");
// Creo un nuevo elemento (nodo), osea el "h2"
const h2 = document.createElement("h2");
// Cambiar el texto al nodo
h2.innerText = "Razas de Gatos";
h2.className = "titulo";
//Agrego el nuevo elemento
div.appendChild(h2);

// Obtengo el elemento padre que es el "div"
const div4 = document.querySelector("div");
// Creo un nuevo elemento (nodo), osea la "ul"
const ul = document.createElement("ul");
// Cambiar el texto al nodo
const liText = "persa, Siames, Maine coon, Bengalí";
const liItems = liText.split(", ");
liItems.forEach((text) => {
  const li = document.createElement("li");
  li.innerText = text;
  ul.appendChild(li);
});
ul.className = "razas-gatos";
// Agrego el nuevo elemento
div.appendChild(ul);

//Obtener elemento
const button = document.querySelector("button");

function agregarImagen() {
  // Selecciono el padre (div)
  const div = document.querySelector("#app");
  const btn = document.querySelector("button");
  // Crear la imagen
  const img = document.createElement("img");
  // Modificar el li marlovy
  marlovy.textContent = "Marlovy";
  // Agrego el hijo (marlovy) al padre (ul)
  lista.appendChild(marlovy);
}
