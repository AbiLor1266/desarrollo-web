//                    SOLUCION DE LA ACTIVIDAD DE AVERIGUAR CUAL ES EL NUMERO MAS ALTO

// 1. Solucion a:
function compararNumerosDeMenorMayor(numeros) {
  let mayorQue = 0;
  let menorQue = 0;
  for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] > mayorQue) {
      mayorQue = numeros[i];
    }
  }
  console.log(mayorQue);

  return mayorQue;
}
console.log(compararNumerosDeMenorMayor([5, 2, 1, 9, 8, 4, 7]));

// 2. Solucion b:

function compararNumerosDeMayorMenor(numero) {
  const numero = [5, 2, 1, 9, 8, 4, 7];
  if (numero < 9) {
    return "es el numero mas alto";
  } else if (numero > 0) {
    return "no es el numero mas alto";
  }
}

console.log(compararNumerosDeMayorMenor([5, 2, 1, 9, 8, 4, 7]));
