var game = $('.box');

var countClick = 0;

game.click(function() {
    let box = $(this); //event.target

    if (countClick === 0) {
        if (box.hasClass('circle')) {
            box.removeClass('circle');
            box.addClass('cross');
        } else {
            box.removeClass('cross');
            box.addClass('circle');

        }
        countClick++;
    } else {
        if (box.hasClass('cross')) {
            box.removeClass('cross');
            box.addClass('circle');
        } else {
            box.removeClass('circle');
            box.addClass('cross');

        }
        countClick = 0;

    }

});