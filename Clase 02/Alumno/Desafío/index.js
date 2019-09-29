//Desafio

let genero = prompt("Ingrese si es hombre, mujer o binario");
let edad = prompt("Ingrese su edad en lenguaje numerico");
edad = parseInt(edad);
let gen;

switch (genero.toLowerCase()) {
    case 'hombre':
        gen = 'Sr. ';
        break;
    case 'mujer':
        gen = 'Sra. ';
        break;
    case 'binario':
        gen = 'Sx. ';
        break;
    default:
        gen = 'No es un genero';
        console.log("El genero ingresado: " + genero + " no es correcto");
        break;

}

if (edad >= 18 && edad < 100) {

    console.log(gen + 'usted tiene: ' + edad + ' es mayor de edad puede ingresar');

} else if (edad > 0 && edad < 18) {

    console.log(gen + 'usted tiene: ' + edad + ' es menor de edad puede ingresar');
} else {
    console.log("La edad ingresada: " + edad + " no es correcta");
}