var texts = ['Ed', 'Edd', 'Eddy'];
var list1 = document.createElement('ul');
var listItem;
list1.id = 'mainList';
list1.className = 'list-group';
list1.innerHTML = 'Lista de personas';

function crearLista() {
    let index = 0;
    let datos = [];
    let input;
    do {
        input = prompt('Ingrese un nombre: ');
        if (input === 'salir') {
            break;
        }
        datos[index] = input;


        listItem = document.createElement('li');
        listItem.innerHTML = datos[index];
        list1.appendChild(listItem);


        document.body.appendChild(list1);

        index++;
    } while (input.toLowerCase !== 'salir');





}
var button = document.createElement('button');
button.className = 'btn btn-outline-primmary';
button.innerHTML = 'Agregar nombre';
document.body.appendChild(button);

button.onclick = function() {
    crearLista();
}