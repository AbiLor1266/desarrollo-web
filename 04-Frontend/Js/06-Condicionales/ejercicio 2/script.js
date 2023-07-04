//interaccion con el usuario, PASO A PASO

// 1.Pedir nombre de usuario
// 2.Peso y altura del usuario

let nombre = prompt("¿cual es tu nombre?");
let peso = parseFloat(prompt("ingresa tu peso en kilogramos"));
let estatura = parseFloat(prompt("ingresa tu estatura en metros"));

let peso2 = 60;
let altura = 1.5;
let imc = peso / altura ** altura;
let resultadoFinal = parseFloat(imc.toFixed(2));

if (resultadoFinal < 18.5) {
  document.write("tu imc es " + resultadoFinal + ", tienes bajo peso");
} else if (resultadoFinal >= 18.5 && resultadoFinal < 25) {
  document.write("tu imc es " + resultadoFinal + ", tienes un peso normal");
} else if (resultadoFinal >= 25 && resultadoFinal < 30) {
  document.write("tu imc es " + resultadoFinal + ", tienes sobrepeso");
} else {
  document.write("tu imc es " + resultadoFinal + ", tienes obesidad");
}

alert(document.write);
