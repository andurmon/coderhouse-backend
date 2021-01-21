
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

const getLibros = (id, callback) =>{
    return new Promise((resolve, reject)=>{
        const libro = libros.find(li => li.id === id)

        if (!libro){
            reject("No existe")
        }else{
            resolve(libro)
        } 
    })
}

const getAutorLibro = (libro, callback) =>{

    return new Promise((res, rej)=>{
        const autor = autores.find(aut => aut.id === libro.authorId)

        if (!autor){
            res("No existe")
        }else{
            rej({
                libroId: libro.id,
                titulo: libro.titulo,
                autor: autor.nombre
            })
        }
    })
}

// Asi cambia bastane en comparacion con el Callback Hell
getLibro(3)
.then( libro => getAutorLibro())
.then( resp => console.log(resp))
.catch(error => console.log(error))