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
var testList2 = ['1', '2', '3', '4', '5', '6', '7', '8'];
var res1 = setLocalList('student', testList);
var res2 = setLocalList('lista1', testList2);
var lista1 = buscador('student');
var lista2 = buscador('lista1');

document.getElementById("lbl1").innerHTML = lista1.join(' ');
document.getElementById("lbl2").innerHTML = lista2.join(', ');