/*
    ===== Código de TypeScript =====
*/

import { calcularIGV, Producto } from "./06-destructuring-function";

const carritoCompras: Producto[] = [
  {
    desc: "iPhone 11",
    precio: 1000,
  },
  {
    desc: "Samsumg Galaxy s21",
    precio: 1300,
  },
];

const [totalCarro, igvCarro] = calcularIGV(carritoCompras);

// console.log("total : ", totalCarro);
// console.log("IGV : ", igvCarro);
