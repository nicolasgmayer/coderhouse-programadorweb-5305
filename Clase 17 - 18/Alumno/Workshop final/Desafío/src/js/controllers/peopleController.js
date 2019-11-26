import { setLocalList } from '../utils/localStorage';


var contador = 1;
var personajes = [];
var counter = 0;
var counter2 = 0;

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

            $('#' + counter).append(`
            <td>` + counter + `</td>
            <td>` + element.name + `</td>
            <td>` + element.gender + `</td>
            <td>` + element.height + `</td>
            <td>` + element.mass + `</td>
            <td>` + element.eye_color + `</td>
            <td style="padding:0"><button  type="button" class=" button btn btn-outline-success">Guardar</button></td>
        `);

        }


        let save = $('.button');
        save.click(function() {
            let toSave = $(this).parent().parent().child();
            

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

loadAll();





function peopleController() {
    let seemore = $('#seeMore');
    seemore.click(function() {
        contador++;
        console.log(contador);
        loadAll();
    });
}
export default peopleController;