const {autores, libros} = require('./miBaseDatos.js');

function getLibro(id, callback){
    const libro = libros.find(li => li.id === id);

    if (!libro){
        callback("No existe")
    }else{
        callback(null, libro)
    }
}

function getAutorLibro(libro, callback){
    const autor = autores.find(aut => aut.id === libro.authorId)

    if (!autor){
        callback("No existe")
    }else{
        callback(null, {
            libroId: libro.id,
            titulo: libro.titulo,
            autor: autor.nombre
        })
    }
}

// Este es el Callback Hell
getLibro(3, (err, libro)=>{

    if(err){
        return console.log(err);
    }
    getAutorLibro(libro, (err,resp)=>{
        if(err){
            return console.log(err);
        }
        console.log(resp);
    })

    console.log(resp);
})