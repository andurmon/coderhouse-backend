"use strict";
const Calculos = require("./Calculos.js");
class Resta extends Calculos {
    constructor(numA, numB) {
        super(numA, numB);
    }
    resultado() {
        return this.numA - this.numB;
    }
}
module.exports = {
    calculo: Resta
};
