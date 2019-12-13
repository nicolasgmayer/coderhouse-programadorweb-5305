import { setLocalList, getLocalList } from '../utils/localStorage';




function peopleController() {
    var characterList = getLocalList('Personajes');
    var contador = 1;

    var counter = 0;
    var counter2 = 0;

    function validatePers(name) {
        if (characterList.length === 0) return false;
        for (let i = 0; i < characterList.length; i++) {
            const element = characterList[i];
            if ($.trim(element.name) === name) {
                return true;
            }
        }
        return false;
    }

    function translateEyes(colorRecibido, colorOjos) {
        var ojos = colorOjos;
        var ojosRecibidos = colorRecibido;
        switch (ojosRecibidos) {
            case 'blue':
                ojos = 'azul';
                break;
            case 'brown':
                ojos = 'marron';
                break;
            case 'yellow':
                ojos = 'amarillo';
                break;
            case 'red':
                ojos = 'rojo';
                break;
            case 'white':
                ojos = 'blanco';
                break;
            case 'blue-gray':
                ojos = 'azul grisaceo';
                break;
            case 'black':
                ojos = 'negro';
                break;
            case 'orange':
                ojos = 'naranja';
                break;
            case 'hazel':
                ojos = 'avellana';
                break;
            case 'pink':
                ojos = 'rosa';
                break;
            case 'unknown':
                ojos = 'indefinido';
                break;
            case 'red, blue':
                ojos = 'rojo, azul';
                break;
            case 'gold':
                ojos = 'dorado';
                break;
            case 'green, yellow':
                ojos = 'verde, amarillo';
                break;
            case 'dark':
                ojos = 'oscuro';
                break;

            default:
                break;
        }
        return ojos;

    }

    function loadAll() {
        var characterList = getLocalList('Personajes');

        var request = $.ajax({
            url: "https://swapi.co/api/people/?page=" + contador + "",
            method: "GET"
        });
        request.done(function(data) {

            $('.container').append('<table class="table table-dark">');
            var genero1 = '';
            var ojos = '';

            for (let counter2 = 0; counter2 < data.results.length; counter2++) {
                const element = data.results[counter2];
                var eyesColour = element.eye_color;
                counter++;
                ojos = translateEyes(eyesColour, ojos);
                if ($.trim(element.gender) === 'male') {
                    genero1 = 'masculino';
                } else if ($.trim(element.gender) === 'female') {
                    genero1 = 'femenino';
                } else {
                    genero1 = 'n/a';
                }

                $('#tableBody').append(`<tr id=` + counter + ` style="overflow: hidden;">`);
                if (validatePers($.trim(element.name)) === false) {

                    $('#' + counter).append(`
                    <td>` + counter + `</td>
                    <td>` + element.name + `</td>
                    <td>` + genero1 + `</td>
                    <td>` + element.height + `</td>
                    <td>` + element.mass + `</td>
                    <td>` + ojos + `</td>
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