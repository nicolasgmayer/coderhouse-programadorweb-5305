var request = $.ajax({
    url: "https://swapi.co/api/people/",
    method: "GET"
})
var clases = 0;
request.done(function(data) {

    $('.container').append('<table class="table table-dark">');
    $('.table').append(`
       <thead class="thead">
       <tbody id="tableBody">`);
    $('.thead').append('<tr class="tr">');
    $('.tr').append(`
           <th scope="col">#</th>
           <th scope="col">Nombre</th>
           <th scope="col">Género</th>
           <th scope="col">Altura</th>
           <th scope="col">Peso</th>
           <th scope="col">Acción</th>
           
       `);
    for (let i = 0; i < data.results.length; i++) {
        const element = data.results[i];

        $('#tableBody').append(`<tr id=` + i + ` style="overflow: hidden;">`);

        $('#' + i).append(`
            <td>` + i + `</td>
            <td>` + element.name + `</td>
            <td>` + element.gender + `</td>
            <td>` + element.height + `</td>
            <td>` + element.mass + `</td>
            <td style="padding:0"><button  type="button" class=" button btn btn-danger">Eliminar</button></td>
        `);

    }

    let deleteBut = $('.button');
    deleteBut.click(function() {
        let deleteR = $(this).parent().parent();
        deleteR.fadeOut(3000, function() {
            deleteR.remove();
        });




    });

});

request.fail(function(error) {
    console.log('Error: ', error)
});
x