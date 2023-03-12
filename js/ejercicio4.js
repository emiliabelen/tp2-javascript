// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert»
// y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numerosSumados = 0;
let numero = ``;

do {
  numero = prompt("introduce un numero");
  console.log(numero);
  if (isNaN(numero)) {
    alert(`${numero} no es un Número`);
  } else {
    if (numero != null && numero != "") {
      numerosSumados = numerosSumados + parseInt(numero);
    }
  }
} while (numero != null);
document.write(`La Suma Total es: ${numerosSumados}`);
