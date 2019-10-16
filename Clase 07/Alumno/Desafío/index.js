localStorage.clear();

function setLocalList(key, value) {
    var newList = JSON.stringify(value);
    var validate = localStorage.getItem(key);
    if (validate === null && Array.isArray(value) === true && typeof key === 'string') {
        localStorage.setItem(key, newList);
        return 1;

    }

    return 0;
}

function buscador(key) {
    var finder = key;
    var object = [];
    var list1 = localStorage.getItem(finder);
    if (list1 !== null && typeof finder === 'string') {
        object = JSON.parse(list1);

    }
    return object;
}

var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS'];
var res1 = setLocalList('student', testList);
var res2 = setLocalList('student', testList);
console.log(buscador('student'));
console.log(buscador('lista1'));