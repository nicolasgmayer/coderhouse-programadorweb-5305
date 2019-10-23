var button = document.createElement('button');
button.innerHTML = 'Factorial';
button.style = 'justify-content: center;margin-left: 45px;display: flex;';

var text = document.createElement('textarea');
text.style = 'margin-left: 0px;';
text.id = 'text-input';


document.body.appendChild(button);
document.body.appendChild(text);

function factorial() {
    var valor = document.getElementById('text-input').value;
    let resultado = 0
    if (valor > 0) {
        for (let i = 1; i >= valor; i++) {
            resultado = resultado + value;

        }
        return resultado
    }
    return 0;
}



button.onclick = function() {
    var execution = factorial();

    if (execution === 0) {
        document.getElementById('text-input').value = 'El numero ingresado no es correcto';
    } else {
        text.innerHTML = 'El resultado de la opracion factorial del numero ingresado es: ' + execution;
    }
}