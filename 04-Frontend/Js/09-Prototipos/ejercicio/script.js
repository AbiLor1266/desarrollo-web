/*  ACTIVIDAD PROTOTIPOS CON SINTAXIS DE CLASES Y HERENCIA
1. Crea una clase base llamada "Vehiculo" que tenga las siguientes propiedades:

    - Marca (string)
    - Modelo (string)
    - Año (number)

2. Agrega un método llamado "obtenerDetalles" a la clase "Vehiculo" que imprima por consola las propiedades del vehículo.

3. Crea una clase llamada "Automovil" que herede de la clase "Vehiculo" y agregue una propiedad adicional:

    - Puertas (number) 

4. Sobrescribe el método "obtenerDetalles" en la clase "Automovil" para que también imprima por consola la cantidad de puertas.

5. Crea otra clase llamada "Motocicleta" que herede de la clase "Vehiculo" y agregue una propiedad adicional:

    - Cilindrada (number)

6. Sobrescribe el método "obtenerDetalles" en la clase "Motocicleta" para que también imprima por consola la cilindrada.

7. Crea instancias de las clases "Automovil" y "Motocicleta" y llama al método "obtenerDetalles" en cada una de ellas para comprobar que funcionan correctamente.
*/

//                                                                 DESARROLLO

class Vehiculo {
  constructor(marca, modelo, año, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
  }

  obtenerDetalles() {
    return `Las propiedades del vehículo son: la marca es ${this.marca}, el modelo es ${this.modelo}, el año es ${this.año}, el color es ${this.color}`;
  }
}

class Automovil extends Vehiculo {
  constructor(marca, modelo, año, color, puertas) {
    super(marca, modelo, año, color);
    this.puertas = puertas;
  }

  obtenerDetalles() {
    return (
      super.obtenerDetalles() + ", y la cantidad de puertas es: " + this.puertas
    );
  }
}

class Motocicleta extends Vehiculo {
  constructor(marca, modelo, año, color, cilindrada) {
    super(marca, modelo, año, color);
    this.cilindrada = cilindrada;
  }

  obtenerDetalles() {
    return super.obtenerDetalles() + ", y el cilindraje es: " + this.cilindrada;
  }
}

const automovil = new Automovil("Renault", "2006", "Gris", "y su cilindraje 4");
const motocicleta = new Motocicleta("Honda", "2009", "Negra", 12);

console.log(automovil.obtenerDetalles());
console.log(motocicleta.obtenerDetalles());
