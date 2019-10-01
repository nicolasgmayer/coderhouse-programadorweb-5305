////Condicionales
// var firstName = 'Maria';
// if (firstName) {
//   console.log('Escribiste un nombre');
// }

// console.log('Gracias');

// if (firstName === 'Juan') {
//   console.log('Tu nombre es Juan');
// } else {
//   console.log('Tu nombre no es Juan');
// }

// var resultOfGame = 'asd';
// switch (resultOfGame) {
//   case 'Ganó':
//     console.log('Suma 3 puntos');
//     break;
//   case 'Perdió':
//     console.log('Resta 3 puntos');
//     break;
//   case 'Empató':
//     console.log('Suma 1 punto');
//     break;
//   default:
//     console.log('El resultado no es correcto');
//     break;
// }

// var dayOfWeek = 'Lunes';
// switch (dayOfWeek) {
//   case 'Lunes':
//   case 'Martes':
//   case 'Miércoles':
//   case 'Jueves':
//   case 'Viernes':
//     console.log('Es un día habil');
//     break;
//   case 'Sábado':
//   case 'Domingo':
//     console.log('Es un día de fin de semana');
//     break;
//   default:
//     console.log('El día ingresado es incorrecto');
//     break;
// }

//--------------------- °°°°° ---------------------

////Operadores de comparación
////Estrictamente igual
// var firstName = 'Mauro';
// console.log(firstName === 'Juan'); //true

// var number = 1234;
// console.log(number === '1234'); //false

// var result = '00000' === '00000';
// console.log(result); //true

// console.log({} === {}); //false

// var obj1 = {};
// var obj2 = obj1;
// console.log(obj1 === obj2); //true

////Estrictamente desigual
// var number = 1234;
// console.log(number !== '1234'); //true

// var firstName = 'Juan';
// console.log(firstName !== 'Juan'); //false

// console.log({} !== {}); //true

// var obj1 = {};
// var obj2 = obj1;

// console.log(obj1 !== obj2); //false

//Mayor o Mayor e igual
// var number = 5;
// console.log('7' > number); //true
// console.log('Ana' > 'Pedro'); //false A = 65 P = 80
// console.log('Ana' > 'Alan'); //true

// console.log('5' >= number); //true
// console.log('Ana' >= 'Pedro'); //false

////Menor o Menor e igual
// var number = 5;
// console.log('7' < number); //false
// console.log('Ana' < 'Pedro'); //true A = 65 P = 80

// console.log('5' <= number); //true
// console.log('Ana' <= 'Pedro'); //true

//--------------------- °°°°° ---------------------

////Operadores Lógicos
////NOT
// console.log(!false); //true
// console.log(!null); //true
// console.log(!!''); //false
// console.log(!'Hola'); //false
// console.log(!('Hola' === 'Hola')); //false

////AND
// console.log('Juan' && 'Pedro'); //true
// console.log('Juan' && 0); //false;
// console.log('' && true); //false;
// console.log(7 > 9 && false); //false;

////OR
// console.log('Juan' || 'Pedro'); //true
// console.log('Juan' || 0); //true;
// console.log('' || true); //true;
// console.log(7 > 9 || false); //false;
