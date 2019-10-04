function encontrarAlu(listaAlu, nombre) {
    let res = -1
    for (let i = 0; i < listaAlu.length; i++) {
        let nom = listaAlu[i].firstName;
        let ape = listaAlu[i].lastName;
        let dni = listaAlu[i].dni;

        if (nombre === nom || nombre === ape || nombre == dni) {
            primerN = nom;
            apellido = ape;
            dniAlu = dni;
            res = i;
            break;
        }


    }
    return res;

}

function reintentar(val1) {
    var valIndex;
    if (val1 === 'si') {
        valIndex = 1;
    } else {
        valIndex = 0;
    }
    return valIndex;
}

function continuar(respuesta) {
    var decision;

    if (respuesta === 0) {
        decision = false;
    } else {
        decision = true;
    }
    return decision
}