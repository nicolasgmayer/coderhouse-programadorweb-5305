//Pedir por prompt un dia de la semana
//Buscar expresiones regulares

let diaDeLaSemana = prompt('Ingrese un día de la semana');

switch (diaDeLaSemana.toLowerCase()) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'miércoles':
    case 'jueves':
    case 'viernes':
        console.log('Día hábil');
        break;

    case 'sabado':
    case 'sábado':
    case 'domingo':
        console.log('Fin de semana');
        break;
    default:
        console.log('La expresion ingresada no es correcta');
        break;
}