let variableDelPrompt = prompt('Ingrese su genero');
let variableDeLaEdad = parseInt(prompt('Ingrese su edad'));

let titulo;
switch (variableDelPrompt) {
  case 'masculino':
    titulo = 'Sr.';
    break;
  case 'femenino':
    titulo = 'Sra.';
    break;

  default:
    titulo = 'No es un genero';
    break;
}

let edad;
if (variableDeLaEdad > 18) {
  edad = ' usted es mayor de edad';
} else {
  edad = ' usted es menor de edad';
}

console.log(titulo + edad);
