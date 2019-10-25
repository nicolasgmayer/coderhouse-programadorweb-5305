var email1 = document.getElementById('email');
email1.onkeyup = validateEmail;

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