import Calculos = require("./Calculos.js")

class Resta extends Calculos{
    constructor(numA:number, numB:number){
        super(numA, numB)
    }
    
    resultado(): Promise<number>{
        setTimeout(()=>console.log(), 2000)
        return new Promise((resolve, reject)=> resolve(this.numA - this.numB));
    }
}

export = {
    calculo: Resta
}    