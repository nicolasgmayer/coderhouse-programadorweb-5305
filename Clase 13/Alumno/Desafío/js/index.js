var name = $('#firstName');
var comment = $('#comments');
var email = $('#email');
var submit = $('#subir');

name.blur(validateName);
$(document).keydown(validateComm);
$(document).keydown(validateEmail);

function validateName(event) {

    if (event.val() === '') {
        name.addClass('is-invalid');
    } else {
        name.addClass('is-valid');
    }
}

function validateEmail() {

}

function validateComm() {

}