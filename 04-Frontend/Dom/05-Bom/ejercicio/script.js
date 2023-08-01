//selecciono el elemento padre
const divPeso = document.querySelector(".inputPeso");
// creo el nuevo elemento (input)
const input1 = document.createElement("input");
input1.type = "number";
//agrego el elemento
divPeso.appendChild(input1);

//selecciono el elemento padre
const divAltura = document.querySelector(".inputAltura");
// creo el nuevo elemento (input)
const input2 = document.createElement("input");
input2.type = "number";
//agrego el elemento
divAltura.appendChild(input2);

const button = document.querySelector("#buttonCalcular");

function calcularIMC() {
  // guardo el valor del input peso en una variable
  const peso = input1.value;
  // guardo el valor del input altura en una variable
  const altura = input2.value;
  // calculo el imc con la formula
  const imc = peso / (altura * altura);
  // guardo el resultado del imc con dos decimales
  let resultadoFinal = parseFloat(imc.toFixed(2));
  // Selecciono el lugar donde voy a mostrar el resultado
  const resultado = document.querySelector("#resultado");
  if (resultadoFinal < 18.5) {
    document.write("tu imc es " + resultadoFinal + ", tienes bajo peso");
  } else if (resultadoFinal >= 18.5 && resultadoFinal < 25) {
    document.write("tu imc es " + resultadoFinal + ", tienes un peso normal");
  } else if (resultadoFinal >= 25 && resultadoFinal < 30) {
    document.write("tu imc es " + resultadoFinal + ", tienes sobrepeso");
  } else {
    document.write("tu imc es " + resultadoFinal + ", tienes obesidad");
  }
  // limpio los inputs
  inputPeso.value = "";
  inputAltura.value = "";
}
botonCalcular.addEventListener("click", calcularIMC);
