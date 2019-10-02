var daysOfTheWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
]

for (var i = 0; i < daysOfTheWeek.length; i++) {
    let dia = daysOfTheWeek[i];
    if (dia.toLowerCase() === "sabado" || dia.toLowerCase() === "sábado" || dia.toLowerCase() === "domingo") {
        console.log(dia + " es un día de fin de semana");

    } else {

        switch (daysOfTheWeek[i].toLowerCase()) {
            case "lunes":
            case "martes":
            case "miercoles":
            case "miércoles":
            case "jueves":
            case "viernes":

                console.log(dia + " es un dia de la semana");

                break;
            default:
                console.log(dia + " no es un día válido");

                break;
        }
    }

}