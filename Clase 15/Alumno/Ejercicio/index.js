var nom = 'nic';

var request = $.ajax({
    url: "https://swapi.co/api/people/5",
    method: "GET"
})

request.done(function(data) {
    $('.container').append('<h2 class="name">Nombre: </h2>');
    $('.name').css('width', '300px');
    $('.name').append('<h4 class = "nom">' + data.name + '</h4>');

    $('.container').append('<h2 class= "attribut">Altura y peso: </h2>');
    $('.attribut').append('<h4>' + data.height + ' Cm ' + data.mass + ' Kg</h4>');

    $('.container').append('<h2 class= "gender">Genero: </h2>');
    $('.gender').append('<h4>' + data.gender + '</h4>');

    $('.container').append('<ul class= "movies">Peliculas: </ul>');
    for (let i = 0; i < data.films.length; i++) {
        const element = data.films[i];
        $('.movies').append('<li>' + data.films[i] + '</li>');

    }



    console.log(data.name);
});

request.fail(function(error) {
    console.log('Error: ', error)
})