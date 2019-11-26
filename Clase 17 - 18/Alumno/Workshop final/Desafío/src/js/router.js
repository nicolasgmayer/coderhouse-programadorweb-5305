import crossroads from 'crossroads';
import homeController from './controllers/homeController';
import peopleController from './controllers/peopleController';

function router() {
    crossroads.addRoute('', function() {
        $('#root').load('./partials/home.html', homeController);
    });

    crossroads.addRoute('#/contact', function() {
        $('#root').load('./partials/contact.html', homeController);
        console.log('Contact page');
    });
    crossroads.addRoute('#/people', function() {
        $('#root').load('./partials/people.html', peopleController);
        console.log('People page');
    });

    $(window).on('hashchange', function() {
        crossroads.parse(window.location.hash);
    });

    crossroads.parse(window.location.hash);
}

export default router;