import Calculos = require("./Calculos.js")

class Suma extends Calculos{
    private privado: string;
    protected protegido: string;
    
    constructor(numA:number, numB:number){
        super(numA, numB)
        this.protegido = "Esto deberia estar protegido"
        this.privado = "Esto deberia ser privado"
    }
    
    resultado(){
        return this.numA + this.numB;
    }
}

export = {
    calculo: Suma
}