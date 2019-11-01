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

function validateName(event) {
    inputNode = event.target;
    if (inputNode.value === '') {
        inputNode.className = 'form-control is-invalid';
        inputNode.placeholder = 'Ingrese un nombre por favor';
    } else {
        inputNode.className = 'form-control is-valid';
    }


}

function validateLName(event) {
    inputNode = event.target;
    if (inputNode.value === '') {
        inputNode.className = 'form-control is-invalid';
        inputNode.placeholder = 'Ingrese un nombre por favor';
    } else {
        inputNode.className = 'form-control is-valid';
    }


}

function validateDNI(event) {
    var inputNode = parseInt(event.target.value);
    if (Number.isNaN(inputNode) || inputNode === 0 || existDNI(inputNode)) {

        event.target.className = 'form-control is-invalid';
    } else {
        event.target.className = 'form-control is-valid';

    }
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
    alumnList.push(newAlumn);
    console.log(alumnList);

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

function deleteAlumn(event) {

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

}

function searchAlumn(event) {
    var index = 0;

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
}

// function desactivarBTN() {
//     document.getElementById('btnFind').disabled = true;
// }