////Funciones
////Sin parametros
// function sayHello() {
//   console.log('Hola!');
// }

// sayHello();

//--------------------- °°°°° ---------------------

////Con parametros
// function sayMyName(yourName) {
//   console.log('Tu nombre es: ' + yourName);
// }

// var myName = 'Mauro';

// sayMyName(myName);
// sayMyName('Heisenberg');
// sayMyName(2);

//--------------------- °°°°° ---------------------

////Valor de retorno
// function sum(value1, value2) {
//   var sum = value1 + value2;
//   return sum;
// }

// var result = sum(5,5);
// var text = sum('Hola ', 2);

// console.log(result, text);

// function message(firstName, lastName) {
//   var message = 'Hola ' + firstName + ' ' + lastName;
//   return message;
// }

// var textMessage = message('Mauro', 'Petrini');
// console.log(textMessage);

//--------------------- °°°°° ---------------------

////Scope global y scope local
// var name = 'Juan';
// function showMessage() {
//   console.log(name);
// }

// showMessage();

////Scope local
// function showMessage() {
//   var name = 'Juan';
//   console.log(name);
// }

// showMessage();
// console.log(name); //Error
