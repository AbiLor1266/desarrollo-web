// Obtengo el elemento padre que es el "div"
const div = document.querySelector("div");
// Creo un nuevo elemento (nodo), osea el h1
const h1 = document.createElement("h1");
// Cambiar el texto al nodo
h1.innerText = "los gatos";
h1.className = "titulo"
//Agrego el nuevo elemento
div.appendChild(h1);

// Obtengo el elemento padre que es el "div"
const div1 = document.querySelector("div");
// Creo un nuevo elemento (nodo), osea la etiqueta "p"
const p = document.createElement("p");
// Cambiar el texto al nodo
p.innerText =
  "Los gatos son animales domésticos que se caracterizan por su elegancia, agilidad y carácter independiente. Son mascotas muy populares en todo el mundo.";
p.className = "descripcion"  
//Agrego el nuevo elemento
div.appendChild(p);

// Obtengo el elemento padre que es el "div"
const div2 = document.querySelector("div");
// Creo un nuevo elemento (nodo), osea la etiqueta "img"
const img = document.createElement("img");
img.src = "https://http.cat/images/200.jpg";
img.alt = "Gato";
img.style.width = "200px"; // Establece el ancho del elemento img en 100px
img.className = "imagen-gato"
// Agrego el nuevo elemento
div.appendChild(img);

// Obtengo el elemento padre que es el "div"
const div3 = document.querySelector("div");
// Creo un nuevo elemento (nodo), osea el "h2"
const h2 = document.createElement("h2");
// Cambiar el texto al nodo
h2.innerText = "Razas de Gatos";
h2.className = "titulo"
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
ul.className = "razas-gatos"
// Agrego el nuevo elemento
div.appendChild(ul);

//obtengo el elemento padre
const div6 = document.querySelector("div");
//ya estamos en el div, creo un nodo
const h3 = document.createElement("h3");
//coloco el texto
h3.innerText = "elementos html de prueba";
//agrego el elemento
div.appendChild(h3);

// Obtengo el elemento padre, osea el "div"
const div5 = document.querySelector("div");
// Ya estando en el div, creo un nuevo elemento, el nodo
const p2 = document.createElement("p");
//coloco texto a la etiqueta
p.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
//agrego el elemento
div.appendChild(p);
