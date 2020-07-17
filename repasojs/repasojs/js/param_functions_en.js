// parametros por default en las funciones

actividad('Juan', 'Aprender JavaScript');
actividad('Pedro', 'Creando un sitio web');
actividad();

function actividad(nombre = 'Walter White', actividad = 'Enseñar Química'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}



const actividad2 = function(nombre = 'Walter White', actividad = 'Enseñar Química'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad2('Juan', 'Aprender JavaScript');
actividad2('Pedro', 'Creando un sitio web');
actividad2();