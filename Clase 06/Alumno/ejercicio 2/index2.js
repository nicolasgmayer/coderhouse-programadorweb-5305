var numberArray=[2,87,5,7,55,8,11,22,53,87,4];
var arrayPar=[]; 
var arrayImpar=[];
var stringPar;
var stringImpar;


function separarArray(array1) {
    if (Array.isArray(array1)) {
        for (let i = 0; i < array1.length; i++) {
            
            var guardador = array1[i];
            guardador = guardador % 2;

            if (guardador===0) {
                arrayPar.push(array1[i]);
            }else{
                arrayImpar.push(array1[i]);
            } 
        }
    }
    
}

function ordenar() {
    arrayPar.sort(function (a,b) {
 
        return a - b;

   
    });
    arrayImpar.sort(function (a,b) {
    
        return a - b;


    });

    stringPar=arrayPar.join(' ');
    stringImpar=arrayImpar.join(' ');

    
}

separarArray(numberArray);
ordenar();

console.log(stringImpar);
console.log(stringPar);