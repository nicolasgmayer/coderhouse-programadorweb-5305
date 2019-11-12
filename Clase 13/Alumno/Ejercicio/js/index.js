var key1 = $('#counter');
$(document).keydown(checkKey);
var init = parseInt(key1.html());

function checkKey(event) {

    switch (event.which) {
        case 38:
            init++;
            $(key1).html(init);
            break;

        case 40:
            if (init > 0) {
                init--;
                $(key1).html(init);
            }
            break;

        case 13:
            init = 0;
            $(key1).html(init);

        default:
            break;
    }
}