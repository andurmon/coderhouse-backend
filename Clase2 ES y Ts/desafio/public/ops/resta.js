"use strict";
const Calculos = require("./Calculos.js");
class Resta extends Calculos {
    constructor(numA, numB) {
        super(numA, numB);
    }
    resultado() {
        setTimeout(() => console.log(), 2000);
        return new Promise((resolve, reject) => resolve(this.numA - this.numB));
    }
}
module.exports = {
    calculo: Resta
};
