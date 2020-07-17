// arrow functions

let viajando = destino => `Viajando a la ciudad de: ${destino}`;

// let viajando = (destino, duracion) => {
//     return `Viajando a la ciudad de: ${destino} por ${duracion}`;
// }

let viaje;
viaje = viajando ('Paris');
viaje = viajando ('Londres');
// viaje = viajando ('Barcelona', '9 Dias');


console.log(viaje);