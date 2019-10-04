var examResults = [7, 5, 6, 4, 3, 2, 8];
var promedioGral = 0;

function promedio(calificaciones) {
    var prom = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        prom = prom + calificaciones[i];

    }

    prom = prom / calificaciones.length;
    return prom;
}

promedioGral = promedio(examResults);
console.log('El promedio de las notas es: ' + promedioGral);