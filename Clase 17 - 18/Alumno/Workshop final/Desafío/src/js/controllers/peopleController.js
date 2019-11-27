import { setLocalList, getLocalList } from '../utils/localStorage';
var characterList = getLocalList('Personajes');


var contador = 1;

var counter = 0;
var counter2 = 0;

function validatePers(name) {
    if (characterList.length === 0) return false;
    for (let i = 0; i < characterList.length; i++) {
        const element = characterList[i];
        if (element.name === name) {
            return true;
        }
    }
    return false;
}

function loadAll() {

    var request = $.ajax({
        url: "https://swapi.co/api/people/?page=" + contador + "",
        method: "GET"
    });
    request.done(function(data) {

        $('.container').append('<table class="table table-dark">');

        for (let counter2 = 0; counter2 < data.results.length; counter2++) {
            const element = data.results[counter2];
            counter++;
            $('#tableBody').append(`<tr id=` + counter + ` style="overflow: hidden;">`);

            if (validatePers(element.name) === false) {
                $('#' + counter).append(`
                <td>` + counter + `</td>
                <td>` + element.name + `</td>
                <td>` + element.gender + `</td>
                <td>` + element.height + `</td>
                <td>` + element.mass + `</td>
                <td>` + element.eye_color + `</td>
                <td style="padding:0"><button  type="button" class=" button btn btn-outline-warning">Guardar</button></td>
            `);

            }
        }



        let save = $('.button');
        save.click(function() {
            let toSave = $(this).parent().parent();
            var newSave = {
                count: toSave.children()[0].innerHTML,
                name: toSave.children()[1].innerHTML,
                gender: toSave.children()[2].innerHTML,
                height: toSave.children()[3].innerHTML,
                mass: toSave.children()[4].innerHTML,
                eye_color: toSave.children()[5].innerHTML
            }

            characterList.push(newSave);

            setLocalList('Personajes', characterList);

            let deleteR = $(this).parent().parent();
            deleteR.fadeOut(250, function() {
                deleteR.remove();

            });
        });


    });
    request.fail(function(error) {
        console.log('Error: ', error)
    });

}


function peopleController() {
    let seemore = $('#seeMore');
    seemore.click(function() {
        contador++;
        console.log(contador);
        loadAll();
    });

    loadAll();
    counter = 0;
    counter2 = 0;
}
export default peopleController;