function CuentaBancaria (nomTitu, apelTitu, numCuenta, saldo){
    this.nom = nomTitu;
    this.ape = apelTitu;
    this.cuenta = numCuenta;
    this.mov [0];
    this.sal = saldo;
    

    this.nombreCompleto=function(){
        console.log(this.nom + ' ' + this.ape);
    }

    this.debito = function(monto) {
        
        this.resIndex=0;
        if (this.sal >0){
            resIndex=this.sal-monto;
            if (resIndex<=0) {
                return ('No puede realizarse el debito por saldo insuficiente: ' + this.sal);
            }else{
                this.sal = resIndex;
                push(this.mov) = resIndex;
                return this.resIndex;
            }
        }
        return ('No puede realizarse el debito por saldo insuficiente');

    }

    this.credito = function(monto){
        var resCred = this.sal + monto;
        this.sal = resCred;
        push(this.mov) = resCred;

        return resCred;
    }

    this.mostrarSaldo = function(){
        console.log('Su saldo es: ' + this.saldo);
    }

}
