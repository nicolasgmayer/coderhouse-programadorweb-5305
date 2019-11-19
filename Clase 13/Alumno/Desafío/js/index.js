let name = $('#firstName');
let comment = $('#comments');
let email = $('#email');
let submit = $('#subir');

name.blur(function() {
    if (name.val() === '') {
        name.addClass('is-invalid');
    } else if (name.hasClass('is-invalid')) {
        name.removeClass('is-invalid');
        name.addClass('is-valid');
    } else {
        name.addClass('is-valid');
    }
    validate();
});

comment.blur(function() {
    if (comment.val() === '') {
        comment.addClass('is-invalid');
    } else if (comment.hasClass('is-invalid')) {
        comment.removeClass('is-invalid');
        comment.addClass('is-valid');
    } else {
        comment.addClass('is-valid');
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


function validate() {
    if (email.hasClass('is-valid') && name.hasClass('is-valid') && comment.hasClass('is-valid')) {
        submit.removeAttr('disabled');
    }

}