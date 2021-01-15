"use strict";
const Calculos = require("./Calculos.js");
class Suma extends Calculos {
    constructor(numA, numB) {
        super(numA, numB);
        this.protegido = "Esto deberia estar protegido";
        this.privado = "Esto deberia ser privado";
    }
    resultado() {
        return this.numA + this.numB;
    }
}
module.exports = {
    calculo: Suma
};
