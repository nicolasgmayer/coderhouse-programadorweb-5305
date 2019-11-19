document.getElementById('btnFind').disabled = true;
var alumnList = [];


var txtName = document.getElementById('name1');
var txtDNI = document.getElementById('dni1');
var txtLName = document.getElementById('lname1');
var txtEmail = document.getElementById('email1');
var txtDNIDel = document.getElementById('delDNI');
var txtNameFind = document.getElementById('searchName');
var btnAdd = document.getElementById('btnAdd1');
var btnDel = document.getElementById('btnDel1');
var btnFind = document.getElementById('btnFind');

txtLName.onblur = validateLName;
txtEmail.onkeyup = validateEmail;
txtName.onblur = validateName;
txtDNI.onblur = validateDNI;
btnAdd.onclick = addAlumn;
btnDel.onclick = deleteAlumn;
btnFind.onclick = searchAlumn;
txtNameFind.onkeyup = validateFinderField;
txtDNIDel.onkeyup = validateDeleteField;
btnAdd.disabled = 'true';
btnDel.disabled = 'true';

function validateName(event) {
    inputNode = event.target;
    if (inputNode.value === '') {
        inputNode.className = 'form-control is-invalid';
        inputNode.placeholder = 'Ingrese un nombre por favor';
    } else {
        inputNode.className = 'form-control is-valid';
    }
    validateFields();


}

function validateLName(event) {
    inputNode = event.target;
    if (inputNode.value === '') {
        inputNode.className = 'form-control is-invalid';
        inputNode.placeholder = 'Ingrese un nombre por favor';
    } else {
        inputNode.className = 'form-control is-valid';
    }
    validateFields();


}

function validateDNI(event) {
    var inputNode = parseInt(event.target.value);
    if (Number.isNaN(inputNode) || inputNode === 0 || existDNI(inputNode)) {

        event.target.className = 'form-control is-invalid';
    } else {
        event.target.className = 'form-control is-valid';

    }
    validateFields();
}

function existDNI(dniPar) {
    if (alumnList.length === 0) {
        return false;
    }
    for (let i = 0; i < alumnList.length; i++) {
        const alumn = alumnList[i];
        if (alumn.dni === dniPar) {
            return true;
        }
    }
    return false;
}


function addAlumn(event) {
    var newAlumn = {
        nombre: txtName.value,
        apellido: txtLName.value,
        dni: txtDNI.value,
        email: txtEmail.value
    }
    if (existDNI(newAlumn.dni) === true) {
        return 'Ya existe';
    } else {
        alumnList.push(newAlumn);

        setLocalList('alumn', alumnList);
        var lista = getLocalList('alumn');
        console.log(lista);





        var bodyTable = document.getElementById('bodyTable');
        var tr = document.createElement('tr');
        tr.id = newAlumn.dni;

        var tdNom = document.createElement('td');
        var tdApe = document.createElement('td');
        var tdDni = document.createElement('td');
        var tdEmail = document.createElement('td');

        tdNom.innerHTML = newAlumn.nombre;
        tdApe.innerHTML = newAlumn.apellido;
        tdDni.innerHTML = newAlumn.dni;
        tdEmail.innerHTML = newAlumn.email;

        tr.appendChild(tdNom);
        tr.appendChild(tdApe);
        tr.appendChild(tdDni);
        tr.appendChild(tdEmail);

        bodyTable.appendChild(tr);
    }

}

function validateDeleteField() {
    if (txtDNIDel.value !== '') {
        btnDel.removeAttribute('disabled');
    } else {
        btnDel.disabled = 'true';
    }
}

function deleteAlumn(event) {
    validateDeleteField();
    var bodyTable = document.getElementById('bodyTable');
    var delTr = document.getElementById(txtDNIDel.value);
    bodyTable.removeChild(delTr);

    for (let i = 0; i < alumnList.length; i++) {
        const element = alumnList[i];
        if (element.dni === txtDNI.value) {
            alumnList.splice(i, 1);
            console.log(alumnList);
        }

    }
    setLocalList('alumn', alumnList);

}

function validateFinderField() {
    if (txtNameFind.value !== '') {
        btnFind.removeAttribute('disabled');
    } else {
        btnFind.disabled = 'true';
    }
}




function searchAlumn(event) {
    var index = 0;

    let elementsTable = document.querySelectorAll('tbody tr');
    for (let i = 0; i < elementsTable.length; i++) {
        let trClass = elementsTable[i];
        if (trClass.className === 'bg-success') {
            trClass.className = '';
        }
    };
    for (let i = 0; i < alumnList.length; i++) {
        const name = alumnList[i].nombre;
        if (name === txtNameFind.value) {
            var trFinder = document.getElementById(alumnList[i].dni);
            trFinder.className = 'bg-success';
        }

    }

}

function isInTheList() {

}



function validateEmail(event) {
    inputNode = event.target;
    if (inputNode.value === '') {
        console.log('no se ingresa string');
        inputNode.className = 'form-control is-invalid';
        inputNode.placeholder = 'Ingrese un Email correcto';

    } else if (inputNode.value.indexOf('@') > 0) {
        var indexString = inputNode.value.indexOf('@');
        if (inputNode.value.indexOf('.', indexString) > 1) {
            inputNode.className = 'form-control is-valid';

        } else {
            inputNode.className = 'form-control is-invalid';
        }
    } else {
        inputNode.className = 'form-control is-invalid';

    }
    validateFields();
}

function validateFields() {
    if (txtName.className.indexOf('is-valid') > 0 && txtLName.className.indexOf('is-valid') > 0 && txtDNI.className.indexOf('is-valid') > 0 && txtEmail.className.indexOf('is-valid') > 0) {
        btnAdd.removeAttribute('disabled');
    } else {
        btnAdd.disabled = 'true';
    }
}

// Guardado en LocalStorage
function setLocalList(key, list) {
    if (!Array.isArray(list) || typeof key !== 'string') {
        return;
    }
    let stringifyList = JSON.stringify(list);

    localStorage.setItem(key, stringifyList);
}
// Traer lo guardado en LocalStorage
function getLocalList(key) {
    let item = localStorage.getItem(key);
    if (item !== null && item.length > 0) {
        if (!Array.isArray(JSON.parse(item))) {
            return [];
        }
        return item;
    }
    return [];
}
// Mostrar estudiantes guardados
function showSavedStudents() {


    if (localStorage.getItem('alumn') === null) {
        console.log('no hay nada');
        return;
    }
    studentList = JSON.parse(getLocalList('alumn'));
    for (let i = 0; i < studentList.length; i++) {
        let student = studentList[i];
        if (student !== undefined) {
            var addedStudents = document.getElementById('bodyTable');
            var addedRegister = document.createElement('tr');
            addedRegister.id = student.dni;

            var addedName = document.createElement('td');
            addedName.innerHTML = student.nombre;
            addedRegister.appendChild(addedName);

            var addedLastName = document.createElement('td');
            addedLastName.innerHTML = student.apellido;
            addedRegister.appendChild(addedLastName);

            var addedId = document.createElement('td');
            addedId.innerHTML = student.dni;
            addedRegister.appendChild(addedId);

            var addedEmail = document.createElement('td');
            addedEmail.innerHTML = student.email;
            addedRegister.appendChild(addedEmail);

            addedStudents.appendChild(addedRegister);
        }
    }
}

showSavedStudents();