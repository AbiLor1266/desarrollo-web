//ciclo while
//while:mientras

//let contador = 1;

//while (contador < 10) {
//console.log(contador);
//contador++;
//}

//console.log("el codigo ya termino");

//do while:

//let contador = 0;

//do {
// console.log(contador);
//contador++;
// } while (contador > 10);

// ciclo for:
//for (let contador = 0; contador <= 10; contador++) {
//console.log(contador);
//}

//ACTVIDAD 1: NUMEROS DEL 2 AL 20
for (let contador = 2; contador <= 20; contador += 2) {
  console.log(contador);
}

//ACTIVIDAD 2: NUMEROS DEL 1 AL 20
for (let contador = 1; contador <= 20; contador++) {
  if (contador % 2 === 0) {
    console.log("El numero " + contador + " , es par");
  } else {
    console.log("el numero " + contador + " es impar");
  }
}

for (let index = 0; index < numeros.length; index++) {
  console.log(numeros[index]);
}
