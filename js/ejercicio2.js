/*2- Escribir un programa que solicite una nota (número) de 0  a 10.
Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.*/


let nota = parseInt(prompt("Ingresar nota"));

if (nota < 0 || nota > 10 || isNaN(nota)) {
  document.write("Introduce un número válido");
  
} else {
  if (nota === 0 || nota === 1 || nota === 2) {
    document.write("Muy deficiente");
  } else if (nota === 3 || nota === 4) {
    document.write("Insuficiente");
  } else if (nota === 5 || nota === 6) {
    document.write("Suficiente");
  } else if (nota === 7) {
    document.write("Bien");
  } else if (nota === 8 || nota === 9) {
    document.write("Notable");
  } else if (nota === 10) {
    document.write("Sobresaliente");
  }
}

