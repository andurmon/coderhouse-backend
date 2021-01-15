function operacion(numA, numB, op) {
    var acceptedOperations = ["suma", "resta"];
    if (acceptedOperations.indexOf(op) === -1) {
        throw new Error("La\u00A0operacion\u00A0" + op + "\u00A0no\u00A0est\u00E1\u00A0permitida\u00A0o\u00A0no\u00A0tiene\u00A0soporte");
    }
    console.log("Incluye suma?: ", acceptedOperations.includes("suma"));
    var moduleSpecifier = "./ops/" + op + ".js";
    Promise.resolve().then(function () { return require(moduleSpecifier); }).then(function (operation) {
        var unaOp = new operation(numA, numB);
        var resu = unaOp.resultado();
        console.log(resu);
        return resu;
    });
    return;
}
function operaciones() {
    var resultado = operacion(2, 1, "suma");
    console.log("Resu1:", resultado);
    var resultado2 = operacion(2, 1, "resta");
    console.log("resu2: ", resultado2);
    var resultado4 = operacion(2, 1, "sumaoa");
    console.log("Resu 4: ", resultado4);
}
// Se llama a la funcion operaciones
operaciones();
