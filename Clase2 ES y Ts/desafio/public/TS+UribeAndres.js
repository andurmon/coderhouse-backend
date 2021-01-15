"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
async function operacion(numA, numB, op) {
    if (!["suma", "resta"].includes(op)) {
        throw new Error(`La operacion '${op}' no está permitida o no tiene soporte`);
    }
    let moduleSpecifier = `./ops/${op}.js`;
    let Calculo = await Promise.resolve().then(() => __importStar(require(moduleSpecifier))).then((modulo) => modulo.calculo)
        .catch((error) => { throw new Error(`Importing error ${moduleSpecifier}, ${error.message}`); });
    let instancia = new Calculo(numA, numB);
    instancia.publico = "editado";
    instancia.privado = "editado";
    console.log(instancia);
    return instancia.resultado();
    //return new Calculo(numA, numB).resultado();
}
async function operaciones() {
    try {
        await operacion(2, 1, "suma").then((resu) => {
            console.log("2 + 1 es:", resu);
        }).catch((error) => console.log(error.message));
        // await operacion(2,1,"resta").then((resu)=>{
        //     console.log("2 - 1 es:", resu);
        // }).catch((error)=>console.log(error.message))
        // await operacion(2,1,"sutemaoa").then((resu)=>{
        //     console.log("2 ? 1 es:", resu);
        // }).catch((error)=>console.log(error.message))
        // await operacion(5,8,"resta").then((resu)=>{
        //     console.log("5 - 8 es:", resu);
        // }).catch((error)=>console.log(error.message))
    }
    catch (error) {
        console.error("Catched error: ", error.message);
    }
}
// Se llama a la funcion operaciones
operaciones();
