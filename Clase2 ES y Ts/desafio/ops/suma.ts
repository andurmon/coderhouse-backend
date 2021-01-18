import Calculos = require("./Calculos.js")

class Suma extends Calculos{
    constructor(numA:number, numB:number){
        super(numA, numB)
    }
    
    async resultado(): Promise<number>{
        return this.numA + this.numB;
    }
}

export = {
    calculo: Suma
}