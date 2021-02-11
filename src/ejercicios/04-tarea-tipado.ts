/*
    ===== Código de TypeScript =====
*/

//crear la interfaz
interface Address {
  calle: string;
  pais: string;
  ciudad: string;
}

interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Address;
  mostrarDireccion: () => String;
}

const superHeroe: SuperHeroe = {
  nombre: "Spiderman",
  edad: 30,
  direccion: {
    calle: "Queens",
    pais: "USA",
    ciudad: "NY",
  },
  mostrarDireccion() {
    return `${this.nombre}, ${this.direccion.ciudad}, ${this.direccion.pais}`;
  },
};

const address = superHeroe.mostrarDireccion();
console.log(address);
