let operacion = prompt('Ingrese la operación');
let primerValor = parseInt(prompt('Ingrese el primer valor: '));
let segundoValor = parseInt(prompt('Ingrese el segundo valor: '));
let resultadoFinal;

switch (operacion) {
  case 'suma':
    resultadoFinal = 'La suma es: ' + (primerValor + segundoValor);
    break;
  case 'resta':
    resultadoFinal = 'La resta es: ' + (primerValor - segundoValor);
    break;
  case 'multiplicacion':
  case 'multiplicación':
    resultadoFinal = 'La multiplicación es: ' + primerValor * segundoValor;
    break;
  case 'división':
  case 'division':
    if (segundoValor === 0) {
      do {
        segundoValor = parseInt(
          prompt('Ingrese nuevamente el segundo valor: ')
        );
        console.log(segundoValor);
      } while (segundoValor === 0);

      resultadoFinal = 'La división es: ' + primerValor / segundoValor;
    }
    break;
  default:
    resultadoFinal = 'La operación ingresada es incorrecta';
    break;
}

console.log(resultadoFinal);
