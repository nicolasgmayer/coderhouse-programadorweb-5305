var f = new Date();
var fecha = f.getFullYear();


function Car(modelParam, brandParam, yearParam){
  this.model=modelParam;
  this.brand=brandParam;
  this.year=yearParam;
  this.edad=0;
  this.variable1= parseInt(this.year);

  let id=Math.random();

  this.getId = function(){
    this.identificacion = id *10000000000;
    this.idEntero = Math.trunc(this.identificacion);


    return this.idEntero;
  }
  this.getCarName = function(){
    return (this.model + ' ' + this.brand + ' ' + this.year);
  }    
    this.antiguedad=function(){

    this.edad = fecha - this.variable1;
    return this.edad;
    
  }


}

var car1 = new Car('Suran', 'Volkswagen', 2015);
var car2 = new Car('Audi TT', 'Audi', 2017);
var car3 = new Car('Gran Turismo', 'Maserati', 2018);


console.log (car1.getCarName() + ' con una antiguedad de ' + car1.antiguedad() + 
' año/s y un numero de identificación de ' + car1.getId());
console.log (car2.getCarName() + ' con una antiguedad de ' + car2.antiguedad() + 
' año/s. y un numero de identificación de ' + car2.getId());
console.log (car3.getCarName() + ' con una antiguedad de ' + car3.antiguedad() + 
' año/s. y un numero de identificación de ' + car3.getId());


