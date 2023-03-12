// 10- Realiza un script que pida número de filas y columnas y escriba una tabla.
//Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden
//descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt("Ingrese un numero de filas"));
const columnas = parseInt(prompt("Ingrese un numero de columnas"));

if (!isNaN(filas) && !isNaN(columnas)) {
  let res = filas * columnas;

  document.write("<table><tbody>");
  for (let i = 0; i < filas; i++) {
    document.write("<tr>");

    for (let j = 0; j < columnas; j++) {
      document.write(`<td>${res}</td>`);
      res--;
    }

    document.write("</tr>");
  }

  document.write("</tbody></table>");
} else {
  alert(`Ingrese un numero valido`);
}
