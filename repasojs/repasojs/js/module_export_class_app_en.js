
import Tarea from './tareas.js';
import Compras from './compras.js';


const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');

console.log(tarea1);

console.log(tarea1.mostrar());

const compra1 = new Compras('Botar tu GA', 'INMEDIATA', 999);

console.log(compra1.mostrar());
