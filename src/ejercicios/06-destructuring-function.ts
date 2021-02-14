/*
    ===== Código de TypeScript =====
*/

export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: "Nokia A1",
  precio: 150,
};

const tablet: Producto = {
  desc: "Air Pad",
  precio: 490,
};

//creamos la function donde se hará la destructuracion de parametros.

export function calcularIGV(productos: Producto[]): [number, number] {
  let total: number = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.18];
}

const carrito = [telefono, tablet];

const [total, igv] = calcularIGV(carrito);

// console.log("Total de productos : ", total);
// console.log("IGV : ", igv);
