
const fs = require("fs")
const ruta = "archivos/miArchivo.txt"

fs.writeFileSync("archivos/miArchivo.csv", 'Hola comoo frsffestan?,jeje,jojo')

// Guardar info / escribir en un archivo
fs.writeFileSync(ruta, 'Hola comoo frsffestan?')

// Agregar informacion aun archivo
fs.appendFileSync(ruta, '\nBien papi')

// leemos un archivo
// SI no le pongo el UTF-8 me muestra un Buffer asi parecido:
//  >> <Buffer 48 6f 6c 61 20 63 6f 6d 6f 6f 20 66 72 73 66 66 65 73 74 61 6e 3f>
let contenido = fs.readFileSync(ruta, 'utf-8')
console.log(contenido);

// eliminar el archivo
fs.unlinkSync(ruta)
