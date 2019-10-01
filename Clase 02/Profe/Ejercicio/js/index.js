//pedir por prompt un dia de la semana
let diaDeLaSemana = prompt('Ingrese un dia de la semana: ');

//mostrar en consola un mensaje si el día es fin de semana,
//hábil o no es un día valido.

//Si se ingresa Lunes
//toLowerCase() lo convierte a lunes con minuscula
switch (diaDeLaSemana.toLowerCase()) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('Es un dia habil');
    break;
  case 'sabado':
  case 'domingo':
    console.log('Es un dia de fin de semana');
    break;
  default:
    console.log('No es un dia valido');
    break;
}
