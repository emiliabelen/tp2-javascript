// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

const j = 500;

// 1/ inicio el bucle
for (let i = 1; i <= j; i++) {
  document.write(i);

  // 2/ empiezo con las condiciones
  //si el resto de i/4 es igual a 0 entonces...

  if (i % 4 == 0) {
    document.write(`Es multiplo de 4`);
  }
  if (i % 9 == 0) {
    document.write(`Es multiplo de 9`);
  }

  //hacer el salto de linea
  document.write(`<br>`);

  //condicion: si e smultimplo de 5 hacer una linea

  if (i % 5 == 0) {
    document.write(`<hr>`);
  }
}



// const j = 500;

// for (let i = 1; i <= j; i++) {
//   document.write(`${i} `);

//   if (i % 4 == 0) {
//     document.write('Múltiplo de 4');
//   }
//   document.write('<br>');
//   if (i % 9 == 0) {
//     document.write('Múltiplo de 9');
//   }
//   document.write('<br>');
//   if (i % 5 == 0) {
//     document.write('<hr>');
//   }
//   document.write('<br>');
// }
// Footer