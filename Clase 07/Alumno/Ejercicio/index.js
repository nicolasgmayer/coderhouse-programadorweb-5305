function setLocalList(key, value) {
    var newList = JSON.stringify(value);
    var validate = localStorage.getItem(key);
    if (localStorage.getItem(key) !== null && Array.isArray(value) === true) {
        if (typeof key === 'string') {
            localStorage.setItem(key, newList);
            return;
        }
    }


}


var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS'];
setLocalList('studentList', testList);
setLocalList('studentList', testList);