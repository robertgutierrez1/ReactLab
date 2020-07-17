// Objetos

// Object Literal

const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500
}

console.log(persona);

// Object Constructor;
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// crear una nueva tarea:
const tarea1 = new Tarea('Aprender JavaScript y React','Urgente');
const tarea2 = new Tarea('Hacer cafe','Urgente');
const tarea3 = new Tarea('Pasear al perro','Medio');
const tarea4 = new Tarea('Conocer a mis suegros','Baja');

console.log(tarea1);
console.log(tarea1.nombre);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);

