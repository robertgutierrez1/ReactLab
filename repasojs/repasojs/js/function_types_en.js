// creando una funcion

// Function Declaration
saludar('Juan');

function saludar (nombre)  {

    console.log(' Bienvenido: ' + nombre );
}

// function expression
const cliente = function(nombreCliente) {
    console.log('Mostrando datos del cliente: ' + nombreCliente)
}
cliente('Juan');