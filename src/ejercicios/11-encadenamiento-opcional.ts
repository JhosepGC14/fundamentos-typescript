/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: "Jhosep",
};

const pasajero2: Pasajero = {
  nombre: "Luis",
  hijos: ["Clarizita", "Rosita"],
};

function imprimirHijos(pasajero: Pasajero) {
  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log(cuantosHijos);
}

imprimirHijos(pasajero1);
imprimirHijos(pasajero2);
