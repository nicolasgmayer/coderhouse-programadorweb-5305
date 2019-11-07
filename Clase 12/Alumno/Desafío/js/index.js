var text1 = $('#email');

text1.keyup(function() {
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


});