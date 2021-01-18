async function operacion(numA: number, numB:number, op: string){
    if ( !["suma", "resta"].includes(op)){
        throw new Error(`La operacion '${op}' no está permitida o no tiene soporte`)
    }
    
    let moduleSpecifier = `./ops/${op}.js`;

    let Calculo = await import(moduleSpecifier)
        .then((modulo)=> modulo.calculo)
        .catch((error)=> {throw new Error(`Importing error ${moduleSpecifier}, ${error.message}`)})

    return new Calculo(numA, numB).resultado();
}

function operaciones(){
    let casosPrueba = {
        numA : 3,
        numB : 1
    }
    try{
        operacion(2,1,"suma").then((resu)=>{
            console.log("2 + 1 es:", resu);
        }).catch((error)=>console.log(error.message))
    
        operacion(2,1,"resta").then((resu)=>{
            console.log("2 - 1 es:", resu);
        }).catch((error)=>console.log(error.message))

        operacion(2,1,"sutemaoa").then((resu)=>{
            console.log("2 ? 1 es:", resu);
        }).catch((error)=>console.log(error.message))
    }
    catch(error){
        console.error("Catched error: ", error.message);
    }
}

// Se llama a la funcion operaciones
operaciones()