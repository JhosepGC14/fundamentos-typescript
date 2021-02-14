/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumentos: T) {
  return argumentos;
}

let soyString = queTipoSoy("Hola Mundo");
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//explicito
let soyExplicito = queTipoSoy<number>(100);
