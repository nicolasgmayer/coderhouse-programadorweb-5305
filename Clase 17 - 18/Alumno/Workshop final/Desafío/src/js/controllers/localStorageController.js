import { setLocalList, getLocalList } from '../utils/localStorage';

// var localStore = localStorage.getLocalList('Personajes');
// console.log(localStore);

var counter = 0;
var counter2 = 0;



function cargarLista() {
    var characterList = getLocalList('Personajes');

    $('.container').append('<table class="table table-dark">');

    for (let counter2 = 0; counter2 < characterList.length; counter2++) {
        const element = characterList[counter2];
        counter++;
        $('#tableBody').append(`<tr id=` + counter + ` style="overflow: hidden;">`);

        $('#' + counter).append(`
        <td>` + element.count + `</td>
        <td>` + element.name + `</td>
        <td>` + element.gender + `</td>
        <td>` + element.height + `</td>
        <td>` + element.mass + `</td>
        <td>` + element.eye_color + `</td>
        <td style="padding:0"><button  type="button" class=" button btn btn-outline-warning">Guardar</button></td>
    `);

    }
}

cargarLista();

function localStorageController() {
    cargarLista();

}
export default localStorageController;