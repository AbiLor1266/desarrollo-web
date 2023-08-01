/*                   
                                                                               FUNCIONES:

- LAS FUNCIONES SON PARA AGRUPAR UN  CODIGO PARA QUE DE ESTA FORMA NO SE TENGA QUE VOLVER A CREAR UN CODIGO UNA Y OTRA VEZ SINO QUE SE REUTILIZA
- LOS PARENTESIS "()" SON LOS PARAMETROS DE UN A FUNCION, DONDE VA A IR LO QUE QUEREMOS, UNOS NUMEROS EN EXPECIFICO, no son obligatorios
- LO QUE ESTE DENTRO DE LA LLAVE ES LO QUE VA A REALIZAR LA FUNCION
- EN LAS FUNCIONES SIEMPRE DEBE USARSE EL "RETURN", DE LO CONTRARIO LA FUNCION NO VA A FUNCIONAR

Como crear una funcion con parametros:
*/

// 1. Invocamos al funcion y al lado le colocamos el nombre de ella, que puede ser cualquiera, segudio del nombre colocamnos los parametros, que es lo que va dentro de los aprentesis, lo que va a operara la funcion:

    function sumita (numero1, numero2)

// 2. Claramente si queremso que nuestrois parametros funciones debemos crearlos antes, como? con una variable, "let":
    
    let numero1 = 2;
    let numero2 = 4;

// 3. Despues de llamar nuestra funcion y nombrarla, abrimos las llaves "{}", que es dentro de ellas donde le daremos las intrucciones a la funcion, fuera de ellas ya no hace parte de la funcion. Hecho esto, ya solo queda mostrar en pantalla nuestra funcion ya desarrollada y lo hacemos mediante un "console.log" abrimos los parentesis y dentro de ellos escribimos lo que queremos mostrar en consola:

    function sumita (numero1, numero2) {
      console.log (2, 4)
    }

// 4. Por ultimo, para que nuestra funcion funcione le colocamos "RETURN":

    function sumita (numero1, numero2) {
      return numero1 + numero2
    }
    console.log (2, 4)

//Como crear una funcion sin parametros:

    function saludar () {
     return "hola gente :)"
    }
     console.log (saludar ());


//Funcion para sumar :
function sumar(a, b) {
  console.log(a + b);
}
// llamar una funcion
//sumar();
//sumar(10, 20);
//sumar(3, 4);

//Funcion para restar:
function restar(a, b) {
  console.log(a - b);
}

// llamar una funcion
//restar(50, 40);
//restar(20, 20);
//restar(12, 4);


