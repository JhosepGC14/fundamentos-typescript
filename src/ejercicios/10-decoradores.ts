/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class MiSuperClase {
  public miPropiedad: string = "1234567";

  impirmir() {
    console.log("Hola Mundo");
  }
}

console.log(MiSuperClase);

const miclase = new MiSuperClase();

// un decorador no es mas que una funcion que expande su calse
// añadiendole funcionalidades especiales.
