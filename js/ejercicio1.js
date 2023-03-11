// 1- Escribir un programa que solicite la edad y si es mayor de 18 años
//mostrar un mensaje que ya puede conducir, si la edad ingresada no es
//un número válido indicarlo en un mensaje.

const edad = prompt("Ingresa tu edad");

if (edad < 0 || edad > 90 || isNaN(edad)) {
  document.write("No es un número válido");
} else {
  if (edad >= 18) {
    document.write("Puede conducir");
  } else {
    document.write("No puede conducir");
  }
}
