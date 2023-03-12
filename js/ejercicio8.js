// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let numRep = parseInt(prompt("Ingrese un numero del 1 al 50 inclusive"));
if (!isNaN(numRep)) {
  if (numRep > 0 && numRep <= 20) {
    for (let i = 1; i <= numRep; i++) {
      for (let j = 0; j < i; j++) {
        document.write(j);
      }
      document.write(`<br>`);
    }
  } else {
    alert(`Ingrese un valor dentro del rango solicitado`);
  }
} else {
  alert("No es un número");
}
