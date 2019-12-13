import { setLocalList, getLocalList } from '../utils/localStorage';


function contactController() {
    let fName = $('#firstName');
    let comm = $('#comments');
    let email = $('#email');
    let sub = $('#submitButton');

    fName.blur(function() {
        if (fName.val() === '') {
            fName.addClass('is-invalid');
        } else if (fName.hasClass('is-invalid')) {
            fName.removeClass('is-invalid');
            fName.addClass('is-valid');
        } else {
            fName.addClass('is-valid');
        }
        validate();
    });

    fName.keyup(function() {
        if (fName.val() === '') {
            fName.addClass('is-invalid');
        } else if (fName.hasClass('is-invalid')) {
            fName.removeClass('is-invalid');
            fName.addClass('is-valid');
        } else {
            fName.addClass('is-valid');
        }
        validate();
    });

    comm.blur(function() {
        if (comm.val() === '') {
            comm.addClass('is-invalid');
        } else if (comm.hasClass('is-invalid')) {
            comm.removeClass('is-invalid');
            comm.addClass('is-valid');
        } else {
            comm.addClass('is-valid');
        }
        validate();
    });

    comm.keyup(function() {
        if (comm.val() === '') {
            comm.addClass('is-invalid');
        } else if (comm.hasClass('is-invalid')) {
            comm.removeClass('is-invalid');
            comm.addClass('is-valid');
        } else {
            comm.addClass('is-valid');
        }
        validate();
    });

    email.keyup(function() {
        var node = $(this);
        if (node.val().indexOf('@') > 0 && node.val() != '') {
            var indexString = node.val().indexOf('@');
            if (node.val().indexOf('.', indexString) > indexString) {
                node.removeClass('is-invalid');
                node.addClass('is-valid');

            } else {
                node.addClass('is-invalid');
            }
        } else {
            node.addClass('is-invalid');

        }
        validate();
    });

    email.blur(function() {
        var node = $(this);
        if (node.val().indexOf('@') > 0 && node.val() != '') {
            var indexString = node.val().indexOf('@');
            if (node.val().indexOf('.', indexString) > indexString) {
                node.removeClass('is-invalid');
                node.addClass('is-valid');

            } else {
                node.addClass('is-invalid');
            }
        } else {
            node.addClass('is-invalid');

        }
        validate();
    });

    function validate() {
        if (email.hasClass('is-valid') && fName.hasClass('is-valid') && comm.hasClass('is-valid')) {
            sub.removeAttr('disabled');
        }

    }
}

export default contactController;