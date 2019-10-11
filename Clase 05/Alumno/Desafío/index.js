function Student(firstName, lastName, dni, email){
    
//Propiedades publicas
    this.nombre = firstName;
    this.apellido = lastName;
    this.identificacion = dni;
    this.correo = email;

//Propiedadd privada
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let id = getRandomInt(100000000);

    this.getID= function(){
        this.idClave = id;
        return this.idClave;
    }

    this.getFullName = function(){
        if(this.nombre !== undefined && this.apellido !==undefined){
        this.completeName=this.nombre + ' ' + this.apellido;
        return this.completeName;
        }else{
            return 'nn';
        }
    }

}

//Creaci{on de constructores}
var alu1 = new Student('Juan', 'Perez' , '45678r87', 'juan@gmail.com');
var alu2 = new Student('Ana', 'Fernandez', '45668989', 'ana@gmail.com')
var alu3 = new Student('Pedro', 'Mármol', '45678956', 'pedro@gmail.com')

var validadorN1 = alu1.getFullName();
var validadorN2 = alu2.getFullName();
var validadorN3 = alu3.getFullName();
var valDNI1 = alu1.identificacion;


//number.isInteger(); devuelve true o false

//Validacion de datos de Alumnos
 function validacionNombre(toValidate){
     if (toValidate !== 'nn'){
         return true;
     }else{
         return false;
     }
 }
 var validateNum;

 //Validacion DNI
 function validacionDNI(numero){
     var longitud = numero.length;
     var parseado = parseInt(numero);
     var esVerd;
     var cadDNI;
    if (longitud === 8){
        for (let i = 0; i < numero.length; i++) {
            const index = parseInt(numeros);
            esVerd = Number.isInteger(index);
            if (esVerd===true){
            cadDNI= cadDNI+ numero[i];
            }else{
                cadDNI=numero[i];
                break;                

            }
        }
        return cadDNI;

    }else{
        return false;
    }
 }

if (validacionDNI(valDNI1)!==false){
    console.log(valDNI1);

}else{
    console.log('no es correcto el DNI');
}

//Impresión de datos en consola
if(validacionNombre(validadorN1)===true){
console.log(alu1.getFullName() + ' con un numero de ID de ' + alu1.getID());
}else{
    console.log('No tiene un nombre válido o apellido válido');
}
if(validacionNombre(validadorN2)===true){
    console.log(alu2.getFullName() + ' con un numero de ID de ' + alu2.getID());
    }else{
        console.log('No tiene un nombre válido o apellido válido');
}
if(validacionNombre(validadorN3)===true){
    console.log(alu3.getFullName() + ' con un numero de ID de ' + alu3.getID());
    }else{
        console.log('No tiene un nombre válido o apellido válido');
}

