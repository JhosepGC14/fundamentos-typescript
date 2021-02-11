/*
    ===== Código de TypeScript =====
*/

//Destructuring en TS

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detail;
}

interface Detail {
  autor: string;
  year: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 60,
  cancion: "La falta que me haces",
  detalles: {
    autor: "Grupo 5",
    year: 2012,
  },
};

const {
  volumen,
  segundo,
  cancion,
  detalles: { autor, year },
} = reproductor;

//const { autor, year } = detalles;

console.log("El volumen actual es : ", volumen);
console.log("El segundo actual es : ", segundo);
console.log("La cancion actual es : ", cancion);
console.log("El author es : ", autor);
console.log("El año de la cancion es : ", year);
