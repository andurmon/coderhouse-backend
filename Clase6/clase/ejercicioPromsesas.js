const fs = require("fs")
const ruta = "archivos/fyh.txt"

// Guardar info / escribir en un archivo
let fecha = new Date();

//CON PROMESSASSSS
fs.promises.writeFile(ruta, `La hora es: ${fecha}`)
.then(()=>fs.promises.readFile(ruta, 'utf-8'))
.then((data)=>{
    console.log("Se leyo:",data)
    console.log(data.length);
    return fs.promises.stat(ruta)
})
.then((data)=>{
    console.log(data);
})
.catch(err=>console.log("Errorcin",err))
