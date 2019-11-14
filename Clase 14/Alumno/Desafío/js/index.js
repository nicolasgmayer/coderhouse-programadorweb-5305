var firstDiv = $('#firstDiv');

var contenedor = $("<div />",

    {
        id: "contenedor",
        "class": "container",
        css: {
            "font-weight": "bold",
            "color": "Black"
        },

        // click: function(e) { //evento de jQuery
        //     alert("Hola mundo!");
        // }
    });
var tabla1 = $('<table />', {
    'class': 'table table-dark'
});
var thead1 = $('<thead />');
var tr1 = $('<tr />');
var th01 = $('<th />', {
    scope: 'col',
    text: '#'
});
var th02 = $('<th>Nombre<th />');
th02.attr('scope', 'col');
var th03 = $('<th>Genero<th />');
th03.attr('scope', 'col');


firstDiv.append(contenedor);
contenedor.append(tabla1);
tabla1.append(thead1);
thead1.append(tr1);
tr1.append(th01);
tr1.append(th02);
tr1.append(th03);