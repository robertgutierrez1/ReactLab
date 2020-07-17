 // Escribir classes

 class Tarea {
     constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
     }
     mostrar() {
         return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
     }
 }

 class ComprasPendientes extends Tarea{
     constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this. cantidad = cantidad;
     }
     mostrar(){
         
        return super.mostrar() +` y la cantidad de ${this.cantidad}`;
     }
     hola(){
         return 'bola';
     }
 }

 // crear los Objetos
 let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
 let tarea2 = new Tarea('Aprender Bike', 'Alta');
 let tarea3 = new Tarea('Aprender Gah', 'Media');
 let tarea4 = new Tarea('Aprender Weveo', 'Baja');

//  console.log(tarea1.mostrar());
//  console.log(tarea3.mostrar());
//  console.log(tarea4.mostrar());
//  console.log(tarea2.mostrar());
 
// Compras

 let compra1 = new ComprasPendientes('Jabon','Urgente',3);
 console.log(compra1);
 console.log(compra1.mostrar());
 console.log(compra1.hola());