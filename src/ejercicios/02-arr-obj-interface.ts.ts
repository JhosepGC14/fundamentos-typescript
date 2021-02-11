/*
    ===== Código de TypeScript =====
*/

let habilidades : string[] = ["Bash", "Volar", "Correr"];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal? : string;
}

const personaje : Personaje = {
    nombre: "Strider",
    hp: 100,
    habilidades: ["Bash", "Volar", "Correr"]
}

personaje.puebloNatal = "Pueblo Paleta";

console.table(personaje);
