var student = {
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
}

var li1;
var sent1;
var sent2;
var sent3;

function crearNodo(alumno) {
    li1 = document.createElement('li');
    li1.className = 'list-group-item';
    li1.id = alumno.dni;
    li1.innerHTML = 'Lista de Alumnos'
    sent1 = document.createElement('h3');
    sent1.innerHTML = alumno.firstName;
    sent2 = document.createElement('h3');
    sent2.innerHTML = alumno.lastName;
    sent3 = document.createElement('p');
    sent3.innerHTML = alumno.email;

    document.body.appendChild(li1);
    li1.appendChild(sent1);
    li1.appendChild(sent2);
    li1.appendChild(sent3);
}

var studentNode = crearNodo(student);