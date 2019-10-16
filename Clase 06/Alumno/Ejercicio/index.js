var numbers = [1,2,3,4,5];

function deleteElement(index, array1) {
    var esUnArray = Array.isArray(array1);
    var long = array1.length;
    var nuevoArray;
    if (esUnArray && index<=long-1){
        nuevoArray= array1.slice();
        nuevoArray.splice(index,1);
        return nuevoArray;
    }
    return undefined;
    
}

var number2= deleteElement(3,numbers);
console.log(number2);