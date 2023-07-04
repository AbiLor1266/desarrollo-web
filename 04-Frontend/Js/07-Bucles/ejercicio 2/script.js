/*
ACTIVIDAD 1

1.contar elementos pares e impares: escribe una funcion que reciba un array de numeros por parametro y cuenta la cantidad de elementos pares e impares en el array.
Ejemplo input:
parImpar([2, 4, 3, 5, 1])

Ejemplo output:
Cantidad de numeros pares: 2
Cantidad de numeros impares: 3
*/

/*const numeros = [2, 1, 4, 5, 7];

function contarParesImpares(numeros) {
  let pares = 0;
  let impares = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
  return "hay  numeros pares y numeros impares en el array";
  console.log(contarParesImpares(numeros));
}

console.log(contarParesImpares(numeros)); //"hay 2 numeros pares y 3 numeros impares en el array"
*/

//index          0  1  2  3  4
const numeros2 = [2, 1, 4, 5, 7];
let par = 0;
let impar = 0;

function contarParesImpares(numeros2) {
  let par = 0;
  let impar = 0;
  for (let i = 0; i <= numeros2.length; i++) {
    if (numeros2[i] % 2 === 0) {
      par++;
    } else {
      impar++;
    }
  }
  console.log(
    "hay " + par + " numeros pares y hay " + impar + " numeros impares"
  );
}

for (let i = 0; i <= numeros2.length; i++) {
  if (numeros2[i] % 2 === 0) {
    par++;
  } else {
    impar++;
  }
}
console.log(
  "hay " + par + " numeros pares y hay " + impar + " numeros impares"
);
