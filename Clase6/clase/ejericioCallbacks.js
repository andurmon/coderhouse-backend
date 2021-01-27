
const fs = require("fs")
const ruta = "archivos/fyh.txt"

// Guardar info / escribir en un archivo
let fecha = new Date();

// CON CALLBACKSSSS
fs.writeFile(ruta, `La hora es: ${fecha}`, (err)=>{
    if (err){
        console.error(err);
        return
    }
    console.log("Ya se escribio")
})

fs.readFile(ruta, 'utf-8', (err, data)=>{
    if (err){
        console.error(err);
        return
    }
    console.log("Se leyó", data)
})