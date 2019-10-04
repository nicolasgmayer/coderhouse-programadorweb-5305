var studentsList = [{
        firstName: 'Juan',
        lastName: 'Pérez',
        dni: 45678987
    },

    {
        firstName: 'Ana',
        lastName: 'Fernandez',
        dni: 45678989
    },

    {
        firstName: 'Pedro',
        lastName: 'Mármol',
        dni: 45678956
    },

    {
        firstName: 'Pablo',
        lastName: 'Picapiedras',
        dni: 45678983
    }
]
let respuesta = 0;
let primerN = '';
let apellido = '';
let dniAlu = 0;
let volverBuscarIndex = 0;


// let tipo = typeof respuesta;
do {

    let nombreIng = prompt('Ingrese nombre, apellido o DNI: ');

    respuesta = encontrarAlu(studentsList, nombreIng);
    if (respuesta >= 0) {
        console.log('El alumno ' + primerN + ' ' + apellido + ' con el dni: ' + dniAlu + ' se encuentra en la lista en la posicion: ' + respuesta);
        // console.log(tipo);
    } else {
        console.log(nombreIng + ' no se encuentra en la lista');

    }
    var volverBuscar = prompt('Desea buscar otro alumno?');

    var seguir = reintentar(volverBuscar);
    var queHacer = continuar(seguir);

} while (queHacer === true);