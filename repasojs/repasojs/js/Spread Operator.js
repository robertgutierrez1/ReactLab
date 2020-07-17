// Spread Operator

let lenguajes = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django'];

// unir los arreglos en 1 solo

// let combinacion = lenguajes.concat(frameworks);

// let combinacion = [...lenguajes,...frameworks];

// console.log(combinacion);

// let nuevoArreglo = [...lenguajes]

// console.log(nuevoArreglo);


// por que unir

let [ultimo] = lenguajes.reverse();
lenguajes.reverse()
// con spread

let [ultimoSpread] = [...lenguajes].reverse();

console.log(lenguajes);
console.log(ultimo);
console.log(ultimoSpread);

// otro uso

function suma(a, b, c) {
    console.log(a+b+c);
}

const numeros = [1,2,3];

suma(numeros);
suma(...numeros);