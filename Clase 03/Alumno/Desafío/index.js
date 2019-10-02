let esValido = false
let num1;
let operator;
let num2 = 0;
var res = 0;
var resto = 0;
num1 = parseInt(prompt("Ingrese el primer número a operar"));
operator = prompt("Ingrese sum, res, mult o div");


if (operator === "div") {
    do {
        num2 = parseInt(prompt("Ingrese el segundo número a operar distinto de 0"));

    } while (num2 <= 0);
} else {
    num2 = parseInt(prompt("Ingrese el segundo número a operar"));

}

switch (operator) {

    case "sum":
        res = num1 + num2;
        console.log(num1 + " + " + num2 + " = " + res);
        break;
    case "res":
        res = num1 - num2;
        console.log(num1 + " - " + num2 + " = " + res);
        break;
    case "mult":
        res = num1 * num2;
        console.log(num1 + " * " + num2 + " = " + res);
        break;
    case "div":
        res = num1 / num2;
        res = Math.trunc(res);
        resto = num1 % num2;
        console.log(num1 + " / " + num2 + " = " + res + " | Resto = " + resto);
        break;


    default:
        break;
}