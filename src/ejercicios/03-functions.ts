/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}

//arrow functions
const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

//argumentos opcionales y por defecto
function multiplicar(
  numero1: number,
  numero2?: number,
  base: number = 2
): number {
  return numero1 * base;
}

//objetos como paremtros en funciones

interface PersonajeLDR {
  nombre: string;
  pv: number;
  //mostarHP: (a: number, b: string, c: boolean) => void;
  mostrarHp: () => void;
}

const newPersonaje: PersonajeLDR = {
  nombre: "Wolverine",
  pv: 50,
  mostrarHp() {
    console.log("Puntos de vida", this.pv);
  },
};

function curar(personaje: PersonajeLDR, curarX: number): void {
  personaje.pv += curarX;
  console.log(personaje.pv);
}

curar(newPersonaje, 100);
newPersonaje.mostrarHp();

const resultado = sumar(5, 4);
const resultado2 = multiplicar(5, 4, 10);

// console.log(resultado);
// console.log(resultado2);
