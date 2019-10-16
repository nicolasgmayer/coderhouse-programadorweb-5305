var string1= 'tric';
var string2= 'patricia';

function includeText(cad1, cad2) {
    var index1;
    if (typeof cad1 === 'string' && typeof cad2 === 'string') {
        var str1 = cad1.toUpperCase();
        var str2 = cad2.toUpperCase();  
        index1 = str2.indexOf(str1);
        if (index1>=0) {
            return true ;
        }
        
    }
    return false;
}
 
var res = includeText(string1, string2);
console.log(res);