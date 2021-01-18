"use strict";
const Calculos = require("./Calculos.js");
class Suma extends Calculos {
    constructor(numA, numB) {
        super(numA, numB);
    }
    async resultado() {
        return this.numA + this.numB;
    }
}
module.exports = {
    calculo: Suma
};
