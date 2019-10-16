function CuentaBancaria (nomTitu, apelTitu, numCuenta, saldo){
    this.nom = nomTitu;
    this.ape = apelTitu;
    this.cuenta = numCuenta;
    this.mov = [];
    this.sal = saldo;
    

    this.nombreCompleto=function(){
        console.log(this.nom + ' ' + this.ape);
    }

    this.debito = function(monto) {
        var monto1 = monto;
        var resIndex=0;
        if (this.sal >0){
            resIndex=this.sal- monto1;
            if (resIndex<=0) {
                return ('No puede realizarse el debito por saldo insuficiente: ' + this.sal);
            }else{
                this.sal = resIndex;
                this.mov.push('- ' + monto1);
                return resIndex;
            }
        }
        return ('No puede realizarse el debito por saldo insuficiente');

    }

    this.credito = function(monto){
        var monto1 = monto;
        var resCred = this.sal + monto1;
        this.sal = resCred;
        this.mov.push('+ ' + monto1);

        return resCred;
    }

    this.mostrarSaldo = function(){
        
        console.log('Su saldo es: ' + this.sal);
    }

    this.mostrarMov = function(){
         console.log(this.mov);
    }

}

var cli1 = new CuentaBancaria('Nicolas', 'Mayer', '40513305', 1000);
var compraOnline=cli1.debito(200);
var transac=cli1.credito(1500);
cli1.nombreCompleto();
cli1.mostrarSaldo();
console.log(compraOnline + ' ' + transac);
cli1.mostrarMov();
