
const autores = [
    {
        id: 1,
        nombre: "Julio Verne"
    },
    {
        id:2,
        nombre: "Carl Sagan"
    }

]

const libros = [
    {
        id: 1,
        authorId: 1,
        titulo: "Capitan de quince años"
    },
    {
        id: 2,
        authorId: 2,
        titulo: "El Jardin del Eden"
    },
    {
        id: 3,
        authorId: 1,
        titulo: "De la tierra a la Luna"
    }
]

const getLibros = async (id, callback) =>{
    const libro = libros.find(li => li.id === id)

    if (!libro){
        throw new Error("No existe")
    }else{
        return libro
    }
}

const getAutorLibro = async(libro, callback) =>{

    const autor = autores.find(aut => aut.id === libro.authorId)

    if (!autor){
        throw new Error("No existe")
    }else{
        return {
            libroId: libro.id,
            titulo: libro.titulo,
            autor: autor.nombre
        }
    }
    
}

// Asi cambia bastane en comparacion con el Callback Hell
const getLibrosInfo = async(libroId) => {
    try{
        const libro = await getLibros(3);
        const resp = await getAutorLibro(libro)
        console.log(resp);
    }
    catch(err){
        console.log(err);
    }
}

// getLibrosInfo(3)

(async function(){
    try{
        const libro = await getLibros(3);
        const resp = await getAutorLibro(libro)
        console.log(resp);
    }
    catch(err){
        console.log(err);
    }
})()