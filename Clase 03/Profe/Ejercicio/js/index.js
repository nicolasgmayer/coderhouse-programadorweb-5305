var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
];

let mensaje;

for (let i = 0; i < daysOfTheWeek.length; i++) {
  const day = daysOfTheWeek[i].toLowerCase();
  let li = document.createElement('li');
  switch (day) {
    case 'lunes':
    case 'martes':
    case 'miércoles':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
      mensaje = day + ': es un día hábil';
      break;
    case 'sábado':
    case 'sabado':
    case 'domingo':
      mensaje = day + ': es un día de fin de semana';
      break;
    default:
      mensaje = day + ': no es un día valido';
      break;
  }

  console.log(mensaje);
}
