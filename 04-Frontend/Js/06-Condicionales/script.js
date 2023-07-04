if (false) {
  console.log("hola tengo hambre");
} else {
  console.log("hola, no tengo hambres");
}

console.log("son las tres");

let edad = 20;

//dentro de los parentesis va la condicion
if (edad >= 18) {
  console.log("bien,eres legal");
} else {
  console.log("eres menor de edad");
}

//ejemplo del semaforo
let semaforo = "rojo";

if (semaforo === "rojo") {
  console.log("debe detenerse");
} else if (semaforo == "amarillo") {
    console.log("preparense para arrancar")
} else if (semaforo == "verde") {
    console.log("arrancar");
} else {
    console.log("solo se pueden los valores rojo, amarillo y verde")
}

//this es para especificar que objeto o funcion estamos llamando

//if: si
//else: sino
//else if: sino si

//switch: es otra condicional (si)
//break: pra salirse del switch, para que no se ejecute mas (else if)
//case: es otra condicional, como una condicional dentro de otra
// default:  (else)
// NOTA:un switch debe tener siempre un caso por defecto
//los metodos siempre van entre parentesis
//typeof: saber que tipo de dato es, si es numero o string 
//un else no lleva parentesis, un else if si