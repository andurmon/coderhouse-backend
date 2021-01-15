async function operacion(numA: number, numB:number, op: string){
    if ( !["suma", "resta"].includes(op)){
        throw new Error(`La operacion '${op}' no está permitida o no tiene soporte`)
    }
        
    let moduleSpecifier = `./ops/${op}.js`;

    let Calculo = await import(moduleSpecifier)
        .then((modulo)=> modulo.calculo)
        .catch((error)=> {throw new Error(`Importing error ${moduleSpecifier}, ${error.message}`)})

    let instancia = new Calculo(numA, numB);

    instancia.publico = "editado"
    instancia.privado = "editado"
    console.log(instancia);
    
    return instancia.resultado()
    //return new Calculo(numA, numB).resultado();
}

async function operaciones(){   
    try{
        await operacion(2,1,"suma").then((resu)=>{
            console.log("2 + 1 es:", resu);
        }).catch((error)=>console.log(error.message))
    
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
    catch(error){
        console.error("Catched error: ", error.message);
    }
}

// Se llama a la funcion operaciones
operaciones()