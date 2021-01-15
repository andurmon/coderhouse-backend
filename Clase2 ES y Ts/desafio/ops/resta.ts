import Calculos = require("./Calculos.js")

class Resta extends Calculos{
    constructor(numA:number, numB:number){
        super(numA, numB)
    }

    resultado(){
        return this.numA - this.numB;
    }
}

export = {
    calculo: Resta
}    