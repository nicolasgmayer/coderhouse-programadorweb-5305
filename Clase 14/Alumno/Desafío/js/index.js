var clases = 0;

function inicio() {
    $('#firstDiv').append('<table class="table table-dark">');
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
    $('#tableBody').append(`<tr id="abc" style="overflow: hidden;">`);
    $('#abc').append(`
            <td>` + 1 + `</td>
            <td>Luke Skywalker</td>
            <td>Male</td>
            <td>188</td>
            <td>84</td>
            <td style="padding:0"><button  type="button" class=" button btn btn-danger">Eliminar</button></td>
        `);



    let deleteBut = $('.button');
    deleteBut.click(function() {
        let deleteR = $(this).parent().parent();
        deleteR.fadeOut(1000, function() {
            deleteR.remove();
        });




    });
}

inicio();