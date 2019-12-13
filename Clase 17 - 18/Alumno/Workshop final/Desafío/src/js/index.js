import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../js/controllers/localStorageController';

import router from './router';

$(document).ready(function() {
    router();
});