import { setLocalList, getLocalList } from '../utils/localStorage';

// var localStore = localStorage.getLocalList('Personajes');
// console.log(localStore);

var counter2 = 0;


function cargarLista() {
    var characterList = getLocalList('Personajes');

    var counter = 0;

    $('.container').append('<table class="table table-dark">');

    for (let counter2 = 0; counter2 < characterList.length; counter2++) {
        const element = characterList[counter2];

        $('#tableBody').append(`<tr id=` + counter + ` class="rowtable" style="overflow: hidden;">`);

        $('#' + counter).append(`
        <td>` + element.count + `</td>
            <td id="name` + counter + `" > ` + element.name + ` </td> 
            <td> ` + element.gender + ` </td>
            <td> ` + element.height + ` </td> 
            <td> ` + element.mass + ` </td> 
            <td> ` + element.eye_color + ` </td> 
            <td style = "padding:0"><button type = "button" id = "delete" class = "button btn btn-outline-warning">Eliminar</button></td>
            `);
        counter++;
    }
    let deleteFromLS = $('.button');
    deleteFromLS.click(function() {
        let deleteR = $(this).parent().parent();
        let index = deleteR.attr('id');
        let nombreid = $('#name' + index);
        let nombre = nombreid.html()
            // console.log(nombre);
        for (let i = 0; i < characterList.length; i++) {
            const element = characterList[i];
            let toCompare = element.name;



            if ($.trim(nombre) === $.trim(toCompare)) {
                console.log('si coincide y el nombre es: ' + element.name);
                characterList.splice(i, 1);
                setLocalList('Personajes', characterList);
                deleteR.fadeOut(250, function() {
                    deleteR.remove();

                });
                break;

            }


        }


    });



}

cargarLista();

function localStorageController() {

    $('.container').append("<button id='borrarTodo' type='button' class= 'button btn btn-outline-warning' style='float-left'>Eliminar Todo</button>")
    let deleteAll = $('#borrarTodo');
    deleteAll.click(function() {
        localStorage.clear();
        var table1 = $('#tableBody');
        table1.remove();
        cargarLista();
    });
    cargarLista();


}
export default localStorageController;